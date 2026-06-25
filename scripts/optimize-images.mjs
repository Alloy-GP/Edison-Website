// scripts/optimize-images.mjs
// One-shot image optimizer for PSI. Generates WebP siblings for every JPG/PNG
// in public/assets so the site can serve modern, smaller images.
//
//   node scripts/optimize-images.mjs
//
// Originals are left in place (used by OG tags + as a safety net). Re-runnable.

import sharp from 'sharp';
import { readdir, stat } from 'node:fs/promises';
import { join, extname, basename, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const ASSETS = join(ROOT, 'public', 'assets');

// Per-image max width caps (px). Anything not listed uses DEFAULT_MAX.
// Hero/aerial shots get a wider cap; logos are tiny.
const DEFAULT_MAX = 1600;
const MAX_WIDTH = {
  'logo.png': 480,
  'logo-white.png': 480,
  'edison-logo-horizontal.png': 600,
  'edison-logo-white.png': 600,
  'alloy-icon.png': 96,
  'img-community-aerial.jpg': 1800, // homepage hero / LCP element
  'img-neighborhood-aerial.jpg': 1800,
};

// Quality per format.
const JPEG_Q = 72;
const PNG_EFFORT = 6;

async function walk(dir) {
  const out = [];
  for (const name of await readdir(dir)) {
    const full = join(dir, name);
    const s = await stat(full);
    if (s.isDirectory()) out.push(...(await walk(full)));
    else out.push(full);
  }
  return out;
}

const files = (await walk(ASSETS)).filter((f) => /\.(jpe?g|png)$/i.test(f));

let converted = 0;
let skipped = 0;
for (const file of files) {
  const base = basename(file);
  // Skip OG/backup/favicon variants — not served on the critical path,
  // and OG must stay PNG/JPG for social scrapers.
  if (/^og|^favicon|-bkp\./i.test(base)) {
    skipped++;
    continue;
  }
  const out = join(dirname(file), basename(file, extname(file)) + '.webp');
  const max = MAX_WIDTH[base] ?? DEFAULT_MAX;

  const img = sharp(file);
  const meta = await img.metadata();
  const pipeline = sharp(file);
  if (meta.width && meta.width > max) pipeline.resize({ width: max });

  await pipeline
    .webp({ quality: JPEG_Q, effort: PNG_EFFORT })
    .toFile(out);

  const before = (await stat(file)).size;
  const after = (await stat(out)).size;
  converted++;
  console.log(
    `${base.padEnd(48)} ${(before / 1024).toFixed(0).padStart(5)}KB -> ${(after / 1024).toFixed(0).padStart(5)}KB  ${basename(out)}`
  );
}

console.log(`\nDone. ${converted} converted, ${skipped} skipped.`);
