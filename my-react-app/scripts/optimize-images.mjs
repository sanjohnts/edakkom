// Turns the photos in photos-original/ into web-ready images in public/images/.
// Run with:  npm run images
//
// - Numbered files (1.webp, 21.webp …) are renamed using the MAP below.
// - Any other file you drop into photos-original/ (for example
//   edakkom-aerial.jpg) is exported under its own name.
// Each photo becomes  public/images/<name>.webp        (max 1600px wide)
//              and    public/images/thumb/<name>.webp  (640px wide, for grids)
import sharp from 'sharp';
import { readdirSync, mkdirSync, existsSync } from 'node:fs';
import { join, parse } from 'node:path';

const SRC = 'photos-original';
const OUT = 'public/images';
const THUMB = join(OUT, 'thumb');

const MAP = {
  1: 'nature-forest-stream',
  2: 'village-bridge-road',
  // 3 is a freepik stock photo (not verified as Kerala) — intentionally not exported
  4: 'church-facade-statue',
  5: 'church-white-domes',
  6: 'health-centre',
  7: 'theyyam-shrine-day',
  8: 'onam-pookalam-hall',
  9: 'theyyam-fire-sparks',
  10: 'theyyam-pair-chenda',
  11: 'marigold-farming',
  12: 'temple-festival-umbrellas',
  13: 'onam-pookalam-group',
  14: 'karkidaka-theyyam-paddy',
  15: 'theyyam-red-crowd',
  16: 'floating-pookalam',
  18: 'theyyam-night-fire',
  20: 'old-paddy-field-hut',
  21: 'old-classroom-malayalam',
  22: 'old-ploughing-umbrella',
  23: 'old-road-roller',
  24: 'old-family-portrait',
  25: 'old-school-assembly',
  26: 'old-thatched-house',
  27: 'old-vellur-vayanasala',
  28: 'old-theyyam-umbrellas',
  29: 'old-village-road',
  30: 'old-winnowing',
  31: 'old-temple-mandapams',
  32: 'old-tiled-house',
  33: 'old-school-gymnastics',
  34: 'old-women-farmers',
  35: 'old-riverside',
  36: 'old-bungalow',
  37: 'old-water-wheel',
  38: 'old-oxen-ploughing',
  39: 'old-thatched-school',
};

mkdirSync(THUMB, { recursive: true });

/**
 * The hero aerial must be landscape. The drone photo of the hilltop church
 * arrived sideways (portrait, spires pointing right), so a portrait
 * edakkom-aerial is turned 90° anticlockwise. Every other photo is only
 * auto-rotated from its camera EXIF data.
 */
async function orient(input, slug) {
  const meta = await sharp(input).metadata();
  const portrait = (meta.height ?? 0) > (meta.width ?? 0);
  if (slug === 'edakkom-aerial' && portrait) return sharp(input).rotate(270);
  return sharp(input).rotate();
}

const files = readdirSync(SRC).filter((f) => /\.(jpe?g|png|webp|heic|tiff?)$/i.test(f));
let count = 0;
for (const file of files) {
  const { name } = parse(file);
  const isNumber = /^\d+$/.test(name);
  const slug = isNumber ? MAP[Number(name)] : name.toLowerCase().replace(/[^a-z0-9-]+/g, '-');
  if (!slug) continue;
  const input = join(SRC, file);
  const big = join(OUT, `${slug}.webp`);
  const small = join(THUMB, `${slug}.webp`);
  if (existsSync(big) && existsSync(small) && !process.argv.includes('--force')) continue;
  const base = await orient(input, slug);
  await base.clone().resize({ width: 1600, withoutEnlargement: true }).webp({ quality: 82 }).toFile(big);
  await base.clone().resize({ width: 640, withoutEnlargement: true }).webp({ quality: 72 }).toFile(small);
  count++;
  console.log('✓', file, '→', slug);
}

// Social-share image (1200×630) from the aerial photo if present, else the night theyyam.
const ogSource = ['edakkom-aerial', 'village-aerial']
  .map((n) => files.find((f) => parse(f).name.toLowerCase() === n))
  .find(Boolean);
const og = ogSource ? join(SRC, ogSource) : join(SRC, files.find((f) => parse(f).name === '2') ?? files[0]);
await (await orient(og, ogSource ? 'edakkom-aerial' : 'og')).resize(1200, 630, { fit: 'cover' }).jpeg({ quality: 82 }).toFile(join(OUT, 'og-edakkom.jpg'));
console.log(`Done — ${count} photo(s) exported, share image from ${parse(og).base}.`);
