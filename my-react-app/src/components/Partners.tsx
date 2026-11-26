import { useLang } from '../lib/i18n';
import { PARTNERS } from '../data/partners';

/**
 * A row of partner logos on white tiles (most logos come on a white
 * background), at the bottom of the footer between the big wordmark and
 * the copyright line. Two per row on phones, four on larger screens, with
 * the title beside them on laptops.
 */
export function Partners() {
  const { t } = useLang();
  if (!PARTNERS.length) return null;
  return (
    <section aria-labelledby="partners-title" className="border-t border-ink/15 py-8 lg:flex lg:items-center lg:gap-10">
      <h2 id="partners-title" className="label shrink-0 text-ink-faint lg:w-36">
        {t({ en: 'Our partners', ml: 'ഞങ്ങളുടെ പങ്കാളികൾ' })}
      </h2>
      <ul className="mt-5 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4 lg:mt-0 lg:flex-1">
        {PARTNERS.map((p) => {
          const logo = (
            <img
              src={`/images/partners/${p.logo}.webp`}
              alt={t(p.name)}
              width={p.width}
              height={p.height}
              loading="lazy"
              decoding="async"
              className="h-auto max-h-full w-auto max-w-full"
            />
          );
          const tile = 'flex h-20 items-center justify-center rounded-2xl bg-white px-4 py-3 ring-1 ring-ink/5 sm:h-24 sm:px-6';
          return (
            <li key={p.logo}>
              {p.url ? (
                <a href={p.url} target="_blank" rel="noopener noreferrer" className={`${tile} transition-shadow hover:shadow-[0_8px_24px_-12px_rgba(24,26,16,0.3)]`}>
                  {logo}
                </a>
              ) : (
                <div className={tile}>{logo}</div>
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
