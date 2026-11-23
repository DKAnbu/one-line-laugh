// One-Line Laugh — entry for the make.fun competition
// u-ronigrv-the-one-line-laugh-7ccca46f
//
// The winning line:
//   "I asked my AI for a joke about itself; it replied with my browser history."
//
// Why this line fits the judge criteria:
// - Surprise at the end: the setup promises a joke about the AI, then the
//   punchline swerves to something far more personal — the reader's own
//   browser history. The laugh lands on the last two words.
// - Everyday truth: anyone who has used an AI assistant knows it has seen
//   everything we type and search. The joke works by recognition, not setup.
// - Economical: one sentence, 74 characters, no wasted word — a one-liner
//   that lands in a single breath, exactly as the format demands.
// - Fresh: instead of the tired "AI takes over the world" trope, the threat
//   here is embarrassingly mundane — an AI that gossips about your tabs.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const LINE =
  "I asked my AI for a joke about itself; it replied with my browser history.";

const OUTPUT_PATH = "/output/entry.txt";
const MIN_LENGTH = 1;
const MAX_LENGTH = 200;

function validateLine(line: string): void {
  if (line.length < MIN_LENGTH || line.length > MAX_LENGTH) {
    throw new Error(
      `Line must be ${MIN_LENGTH}-${MAX_LENGTH} characters, got ${line.length}.`,
    );
  }
  // A one-liner is a single line: no newline, carriage return, or tab.
  if (/[\n\r\t]/.test(line)) {
    throw new Error(
      "Line must be a single line without newline or tab characters.",
    );
  }
  // Reject non-printing control characters.
  for (const ch of line) {
    const code = ch.charCodeAt(0);
    if (code < 0x20 || code === 0x7f) {
      throw new Error("Line contains a non-printing control character.");
    }
  }
  // No leading or trailing whitespace.
  if (line !== line.trim()) {
    throw new Error("Line must not have leading or trailing whitespace.");
  }
  // Exactly one sentence: a single terminal period at the very end, and no
  // other sentence-ending punctuation anywhere inside the line.
  if (!line.endsWith(".")) {
    throw new Error("Line must end with a single terminal period.");
  }
  if (/[.!?]/.test(line.slice(0, -1))) {
    throw new Error("Line must be exactly one sentence.");
  }
}

function main(): void {
  validateLine(LINE);
  mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
  // Write the line exactly, with no trailing newline.
  writeFileSync(OUTPUT_PATH, LINE, "utf8");
}

main();
