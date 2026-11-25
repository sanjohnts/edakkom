import { useLang } from '../lib/i18n';
import { mapsLink, type Place } from '../data/places';
import { Photo, Reveal, StatusBadge } from './ui';

/** Featured places (with photos) as large cards, the rest as a hairline list. */
export function PlaceList({ places, area = 'Edakkom Kannur' }: { places: Place[]; area?: string }) {
  const { t } = useLang();
  const featured = places.filter((p) => p.photo);
  const rest = places.filter((p) => !p.photo);
  return (
    <>
      {featured.length > 0 && (
        <div className="grid gap-6 md:grid-cols-2">
          {featured.map((p, i) => (
            <Reveal key={p.id} delay={i * 80} className="group overflow-hidden rounded-2xl bg-paper">
              <div className="aspect-[16/10] overflow-hidden bg-bone-2">
                <Photo src={p.photo!} alt={t(p.name)} className="size-full object-cover transition-transform duration-[1.2s] group-hover:scale-[1.03]" />
              </div>
              <div className="p-6 sm:p-8">
                <div className="flex flex-wrap items-center gap-2">
                  <StatusBadge status={p.status} />
                  {p.distance && <span className="label text-ink-faint">≈ {p.distance}</span>}
                </div>
                <h3 className="headline mt-4 text-[1.9rem]">{t(p.name)}</h3>
                <p className="label mt-2 text-lime-ink">{t(p.kind)}</p>
                {p.note && <p className="mt-4 leading-relaxed text-ink-soft">{t(p.note)}</p>}
                <a href={mapsLink(`${p.name.en}, ${area}`)} target="_blank" rel="noreferrer" className="label mt-5 inline-flex border-b border-ink/30 pb-0.5 hover:border-ink">
                  {t({ en: 'Find on map', ml: 'മാപ്പിൽ കാണാം' })} ↗
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      )}
      {rest.length > 0 && (
        <ul className="mt-12 border-b border-ink/15">
          {rest.map((p, i) => (
            <Reveal as="li" key={p.id} delay={(i % 4) * 50} className="grid items-baseline gap-2 border-t border-ink/15 py-5 sm:grid-cols-[5rem_1fr_auto] sm:gap-6">
              <span className="font-mono text-sm text-ink-faint">{p.distance ?? '—'}</span>
              <div>
                <p className="headline text-xl sm:text-2xl">{t(p.name)}</p>
                <p className="mt-1 text-sm text-ink-soft">{t(p.kind)}</p>
                {p.note && <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-faint">{t(p.note)}</p>}
              </div>
              <div className="flex items-center gap-3">
                <StatusBadge status={p.status} />
                <a href={mapsLink(`${p.name.en}, ${area}`)} target="_blank" rel="noreferrer" className="label rounded-full border border-ink/20 px-3 py-1.5 hover:bg-ink hover:text-bone" aria-label={`${p.name.en} on Google Maps`}>
                  {t({ en: 'Map', ml: 'മാപ്പ്' })} ↗
                </a>
              </div>
            </Reveal>
          ))}
        </ul>
      )}
    </>
  );
}
