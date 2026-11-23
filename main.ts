// Entry program: world news of 22 November 2026 in one image (Node 22).
// It copies the image held in this repository (entry.png, next to this
// file) byte for byte to the output directory as entry.png. The grader
// runs the program twice and both runs must write identical bytes, so
// this program only copies bytes and never generates anything.
//
// Output directory: MAKEFUN_OUTPUT_DIR when set, otherwise /output.
// Run locally with e.g.:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
// A --output <dir> flag overrides the environment variable, handy for
// local runs:  node main.ts --output out
const flagAt = process.argv.indexOf('--output');
const outDir =
  (flagAt !== -1 && process.argv[flagAt + 1]) ||
  process.env.MAKEFUN_OUTPUT_DIR ||
  '/output';

mkdirSync(outDir, { recursive: true });
const image = readFileSync(join(here, 'entry.png'));
writeFileSync(join(outDir, 'entry.png'), image);
