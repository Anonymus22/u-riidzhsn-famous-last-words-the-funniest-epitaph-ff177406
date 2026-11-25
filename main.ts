import { mkdirSync, writeFileSync } from "node:fs";

// One original, funny epitaph: a man's famous last words undercut by the
// stone itself. Deterministic: the same line, byte for byte, every run.
const EPITAPH =
  'Here lies a man who said, "Relax, I\'ve done this a hundred times." He hadn\'t.';

// Validate the epitaph before writing: exactly one line, 1-150 UTF-8
// characters (excluding the trailing newline). Fail loudly if invalid.
const line = EPITAPH.trim();
if (line.length < 1 || line.length > 150) {
  throw new Error(`epitaph must be 1-150 chars, got ${line.length}`);
}
if (/[\r\n]/.test(line)) {
  throw new Error("epitaph must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n", "utf8");
