# Markdown Emoji Preview

VS CodeのMarkdownプレビューで、指定されたGitHub風絵文字ショートコードを絵文字として表示します。

## 対応例

```markdown
⏰ :alarm_clock:
🎁 :wrapped_gift:
⚠️ :warning:
```

Markdown本文そのものは変更されません。未対応のショートコードはそのまま表示されます。

## 対応している絵文字

| 絵文字 | ショートコード |
| --- | --- |
| ⏰ | `:alarm_clock:` |
| 🎈 | `:balloon:` |
| ☑️ | `:ballot_box_with_check:` |
| ‼️ | `:bangbang:` |
| 🚅 | `:bullettrain_front:` |
| 📆 | `:calendar:` |
| 📋 | `:clipboard:` |
| 🕛 | `:clock12:` |
| 🥤 | `:cup_with_straw:` |
| 🚪 | `:door:` |
| ‼️ | `:double_exclamation_mark:` |
| 🌍 | `:earth_africa:` |
| 🔦 | `:flashlight:` |
| 🎁 | `:gift:` |
| 🛠️ | `:hammer_and_wrench:` |
| 🤝 | `:handshake:` |
| ⌨️ | `:keyboard:` |
| 👨‍💻 | `:man_technologist:` |
| 🍖 | `:meat_on_bone:` |
| 🎖️ | `:medal_military:` |
| 📣 | `:mega:` |
| 📝 | `:memo:` |
| 🎤 | `:microphone:` |
| 💰 | `:moneybag:` |
| 🎥 | `:movie_camera:` |
| 🥳 | `:partying_face:` |
| 📌 | `:pushpin:` |
| 🤖 | `:robot:` |
| 📍 | `:round_pushpin:` |
| 🗣️ | `:speaking_head:` |
| 😎 | `:sunglasses:` |
| 🧑‍🏫 | `:teacher:` |
| 🧑‍💻 | `:technologist:` |
| 🎫 | `:ticket:` |
| 🕛 | `:twelve_o'clock:` |
| ⚠️ | `:warning:` |
| 👩‍💻 | `:woman_technologist:` |
| 🎁 | `:wrapped_gift:` |
| ✍️ | `:writing_hand:` |

## 導入方法

### 前提条件

- VS Codeがインストールされていること
- VSIXを作成する場合はNode.jsとnpmがインストールされていること

### VSIXを使ってインストールする

プロジェクトのルートフォルダーで、次のコマンドを実行してVSIXファイルを作成します。

```powershell
npm install
npx vsce package --allow-missing-repository
```

`markdown-emoji-preview-0.0.1.vsix` が生成されたら、次のコマンドでVS Codeへインストールします。

```powershell
code --install-extension .\markdown-emoji-preview-0.0.1.vsix --force
```

または、VS Codeの拡張機能ビューを開き、`...` メニューの **Install from VSIX...** から生成したVSIXファイルを選択します。

インストール後、コマンドパレットで `Developer: Reload Window` を実行してVS Codeを再読み込みしてください。

### 動作確認

1. Markdownファイル（`.md`）を開きます。
2. 次のようなショートコードを入力します。

	```markdown
	#### :double_exclamation_mark:公募いただく際の注意事項について
	```

3. 右上のプレビューアイコンをクリックするか、`Ctrl + Shift + V` を押します。
4. `:double_exclamation_mark:` が `‼️` として表示されることを確認します。

Markdownファイルの内容自体は変更されません。変換はプレビュー表示時だけ行われます。

## 開発

プロジェクトをクローンまたはダウンロードした後、プロジェクトのルートフォルダーで依存関係をインストールします。

```bash
npm install
```

コンパイルとテストを実行します。

```bash
npm test
```

VS Codeで `F5` を押すと、拡張機能が有効なExtension Development Hostを起動できます。開発中の動作確認にはこちらの方法も利用できます。
