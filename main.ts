// The Worst App Idea Ever Pitched
// Writes one sentence (<= 240 characters) pitching the worst, most useless
// app imaginable to /output/entry.txt, with no trailing newline.
import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "PaintWatch is a premium app that hires a certified professional to watch your paint dry and emails you a daily progress report with a dryness percentage and a photo of the unchanged wall, for just $9.99 a month.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
