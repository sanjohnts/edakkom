/** AdSense publisher ID (same as in index.html). */
export const AD_CLIENT = 'ca-pub-7211164339614708';

/**
 * The `data-ad-slot` number of a responsive display ad unit, from AdSense:
 * Ads → By ad unit → Display ads → Responsive → Create, then copy the number
 * after data-ad-slot= in the code. While this is empty no ad areas are shown.
 */
export const AD_SLOT = '';

declare global {
  interface Window {
    adsbygoogle?: unknown[];
  }
}
