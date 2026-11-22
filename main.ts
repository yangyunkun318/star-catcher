// Star Catcher entry program (Node 22, standard library only).
// It copies POST.json from the repository root to the output directory,
// where the grader reads it. That is all this program does.
// No network, no wall clock, no files outside the repository.
//
// Local test:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
//   cat out/POST.json
//
// POST.json holds the real X post URL for this entry:
// https://x.com/GMOVE1681/status/2124594135369990317
// (Update POST.json and re-commit if the post is ever reposted.)

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(join(BOT_DIR, 'POST.json'), join(OUTPUT_DIR, 'POST.json'));
} catch (err) {
  console.error(`POST.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
