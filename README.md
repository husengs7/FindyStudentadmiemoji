# Markdown Emoji Preview

VS CodeのMarkdownプレビューで、指定されたGitHub風絵文字ショートコードを絵文字として表示します。

## 対応例

```markdown
⏰ :alarm_clock:
🎁 :wrapped_gift:
⚠️ :warning:
```

Markdown本文そのものは変更されません。未対応のショートコードはそのまま表示されます。

## 開発

```bash
npm install
npm test
```

VS Codeで `F5` を押すとExtension Development Hostを起動できます。
