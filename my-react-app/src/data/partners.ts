import type { L } from '../lib/i18n';

/**
 * Partner logos shown at the top of the site footer, in this order.
 * `logo` is a file in public/images/partners/ (without .webp).
 * Add `url` to make a logo open the partner's website in a new tab.
 */
export type Partner = { logo: string; name: L; width: number; height: number; url?: string };

export const PARTNERS: Partner[] = [
  { logo: 'digimitram', name: { en: 'DigiMitram — Customer service point', ml: 'ഡിജിമിത്രം — കസ്റ്റമർ സർവീസ് പോയിന്റ്' }, width: 363, height: 65 },
  { logo: 'digigramam', name: { en: 'DigiGramam — The Solution providers', ml: 'ഡിജിഗ്രാമം — ദ സൊല്യൂഷൻ പ്രൊവൈഡേഴ്സ്' }, width: 368, height: 68 },
  { logo: 'emitram', name: { en: 'eMitram', ml: 'ഇ-മിത്രം' }, width: 240, height: 240 },
  { logo: 'esta-enterprises', name: { en: 'ESTA Enterprises', ml: 'എസ്റ്റ എന്റർപ്രൈസസ്' }, width: 159, height: 135 },
];
