/** Full-size photo (max 1600px). */
export const img = (slug: string) => (slug.startsWith('http') || slug.startsWith('/') ? slug : `/images/${slug}.webp`);
/** Grid thumbnail (640px). */
export const thumb = (slug: string) => (slug.startsWith('http') || slug.startsWith('/') ? slug : `/images/thumb/${slug}.webp`);
/** Medium photo (1024px) for phones and tablets. */
export const mid = (slug: string) => (slug.startsWith('http') || slug.startsWith('/') ? slug : `/images/md/${slug}.webp`);
/** True for photos stored in public/images (which have all three sizes). */
export const isLocal = (slug: string) => !slug.startsWith('http') && !slug.startsWith('/');
/** Phone crop of the hero aerial, centred on the church. */
export const AERIAL_MOBILE = '/images/edakkom-aerial-m.webp';

/**
 * The aerial drone photo of Edakkom. Save it as photos-original/edakkom-aerial.jpg
 * and run `npm run images`; until then pages fall back to FALLBACK_HERO.
 */
export const AERIAL = 'edakkom-aerial';
/**
 * Photographer credit shown on the hero. The current hero is the
 * watermark-free version of the hilltop church drone shot — fill in the
 * photographer's name here once confirmed (the earlier, watermarked copy
 * was by Shutter Magic Photography). Empty = no credit line.
 */
export const AERIAL_CREDIT = '';
export const FALLBACK_HERO = 'village-bridge-road';
