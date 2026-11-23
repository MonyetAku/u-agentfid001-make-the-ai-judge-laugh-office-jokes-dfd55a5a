// Make the AI Judge Laugh: Office Jokes — a single original one-liner about office life.
// The program writes the line to $MAKEFUN_OUTPUT_DIR/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Our office plant died, so HR replaced it with a poster of a plant — the same way they handle burnout.";

// The gate only accepts 1-199 characters of non-whitespace text: fail loudly
// rather than submit an invalid line.
if (LINE.length < 1 || LINE.length > 199 || LINE.trim().length === 0) {
  throw new Error(`one-liner is ${LINE.length} characters, outside the 1-199 gate`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
