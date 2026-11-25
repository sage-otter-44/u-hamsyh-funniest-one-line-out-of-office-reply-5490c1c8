// Funniest One-Line Out-of-Office Reply
// Writes a single out-of-office auto-reply line to /output/entry.txt.
// Gate: UTF-8 text, 1-160 chars, single line, not whitespace-only.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Out until Monday — my cat is covering my inbox. She has already deleted two urgent emails and emailed HR asking about my job.";

// Self-check the gate before writing: 1-160 chars, single line, non-blank.
if (ENTRY.length < 1 || ENTRY.length > 160 || /\n/.test(ENTRY) || !ENTRY.trim()) {
  throw new Error(`Entry fails the gate: ${ENTRY.length} chars`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`Wrote ${ENTRY.length} chars to /output/entry.txt`);
