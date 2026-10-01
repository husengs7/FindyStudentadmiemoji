import assert from "node:assert/strict";
import { replaceEmojiShortcodes } from "../emoji";

assert.equal(replaceEmojiShortcodes("開始 :alarm_clock: 終了 :warning:"), "開始 ⏰ 終了 ⚠️");
assert.equal(replaceEmojiShortcodes(":twelve_o'clock:"), "🕛");
assert.equal(replaceEmojiShortcodes(":unknown: :alarm_clock:"), ":unknown: ⏰");
assert.equal(replaceEmojiShortcodes("https://example.com/:gift:"), "https://example.com/🎁");
