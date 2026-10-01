import * as vscode from "vscode";
import { replaceEmojiShortcodes } from "./emoji";

type MarkdownIt = {
  core: {
    ruler: {
      after(beforeName: string, ruleName: string, rule: (state: MarkdownState) => void): void;
    };
  };
};

type MarkdownToken = {
  type?: string;
  content: string;
  children?: MarkdownToken[];
};

type MarkdownState = {
  tokens: MarkdownToken[];
};

type MarkdownExtension = {
  extendMarkdownIt(markdownIt: MarkdownIt): MarkdownIt;
};

function replaceTextTokens(tokens: MarkdownToken[]): void {
  for (const token of tokens) {
    if (token.type === "text") {
      token.content = replaceEmojiShortcodes(token.content);
    }
    if (token.children) {
      replaceTextTokens(token.children);
    }
  }
}

export function activate(_context: vscode.ExtensionContext): MarkdownExtension {
  return {
    extendMarkdownIt(markdownIt: MarkdownIt): MarkdownIt {
      markdownIt.core.ruler.after("inline", "markdown-emoji-preview", (state) => {
        replaceTextTokens(state.tokens);
      });
      return markdownIt;
    }
  };
}

export function deactivate(): void {}
