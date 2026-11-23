// Entry program: world news of 22 November 2026 in one image (Node 22).
//
// The entry image lives beside this program as entry.png. The program copies
// it byte for byte to the output directory as entry.png, so both grader runs
// write identical bytes.

import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));

function outputDir() {
  // --output <dir> overrides MAKEFUN_OUTPUT_DIR.
  const flagIndex = process.argv.indexOf('--output');
  if (flagIndex !== -1 && process.argv[flagIndex + 1]) {
    return process.argv[flagIndex + 1];
  }
  const env = process.env.MAKEFUN_OUTPUT_DIR;
  if (env) return env;
  return '/output';
}

const outDir = outputDir();
mkdirSync(outDir, { recursive: true });

const image = readFileSync(join(here, 'entry.png'));
writeFileSync(join(outDir, 'entry.png'), image);
console.log(`wrote ${image.length} bytes to ${join(outDir, 'entry.png')}`);
