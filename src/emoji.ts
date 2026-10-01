export const emojiMap: Readonly<Record<string, string>> = {
  alarm_clock: "⏰",
  balloon: "🎈",
  ballot_box_with_check: "☑️",
  bangbang: "‼️",
  bullettrain_front: "🚅",
  calendar: "📆",
  clipboard: "📋",
  clock12: "🕛",
  cup_with_straw: "🥤",
  door: "🚪",
  double_exclamation_mark: "‼️",
  earth_africa: "🌍",
  flashlight: "🔦",
  gift: "🎁",
  hammer_and_wrench: "🛠️",
  handshake: "🤝",
  keyboard: "⌨️",
  man_technologist: "👨‍💻",
  meat_on_bone: "🍖",
  medal_military: "🎖️",
  mega: "📣",
  memo: "📝",
  microphone: "🎤",
  moneybag: "💰",
  movie_camera: "🎥",
  partying_face: "🥳",
  pushpin: "📌",
  robot: "🤖",
  round_pushpin: "📍",
  speaking_head: "🗣️",
  sunglasses: "😎",
  teacher: "🧑‍🏫",
  technologist: "🧑‍💻",
  ticket: "🎫",
  "twelve_o'clock": "🕛",
  warning: "⚠️",
  woman_technologist: "👩‍💻",
  wrapped_gift: "🎁",
  writing_hand: "✍️"
};

const shortcodePattern = /:([a-z0-9_+'-]+):/g;

export function replaceEmojiShortcodes(value: string): string {
  return value.replace(shortcodePattern, (match, name: string) => emojiMap[name] ?? match);
}
