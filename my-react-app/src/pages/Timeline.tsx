import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLang } from '../lib/i18n';
import { useSeo } from '../lib/seo';
import { useContent } from '../lib/useContent';
import { TIMELINE, type TimelineEvent } from '../data/history';
import { Container, Photo, Reveal, StatusBadge } from '../components/ui';
import { PageHero } from '../components/sections';

type Row = { id: string; when_label: string; title_en: string; title_ml: string; body_en: string; body_ml: string; photo_url?: string; sort_year: number };

export default function Timeline() {
  useSeo('/timeline');
  const { t } = useLang();
  const [filter, setFilter] = useState<'all' | 'local' | 'context' | 'research'>('all');
  const events = useContent<TimelineEvent, Row>(
    'timeline_events',
    TIMELINE,
    (r) => ({ id: r.id, when: r.when_label, title: { en: r.title_en, ml: r.title_ml }, body: { en: r.body_en, ml: r.body_ml }, photo: r.photo_url, status: 'verified' }),
    { orderBy: 'sort_year', ascending: true },
  );

  const shown = events.filter((e) =>
    filter === 'all' ? true : filter === 'research' ? e.research : filter === 'context' ? e.status === 'context' : e.status !== 'context' && !e.research,
  );

  const filters = [
    { id: 'all', label: { en: 'Everything', ml: 'എല്ലാം' } },
    { id: 'local', label: { en: 'Edakkom', ml: 'എടക്കോം' } },
    { id: 'context', label: { en: 'Kerala & Malabar', ml: 'കേരളം, മലബാർ' } },
    { id: 'research', label: { en: 'Gaps to fill', ml: 'നികത്തേണ്ട വിടവുകൾ' } },
  ] as const;

  return (
    <>
      <PageHero
        no="03"
        label={{ en: 'Timeline', ml: 'കാലരേഖ' }}
        plain={{ en: 'Year by year,', ml: 'വർഷം തോറും,' }}
        italic={{ en: 'memory by memory.', ml: 'ഓർമ തോറും.' }}
        intro={{
          en: 'Documented milestones alongside the open chapters we are still researching. Every dated event should eventually carry a photo, a source and a contributor.',
          ml: 'രേഖപ്പെടുത്തിയ നാഴികക്കല്ലുകളും ഇനിയും ഗവേഷണം ചെയ്യുന്ന അധ്യായങ്ങളും. ഓരോ സംഭവത്തിനും ഒരു ഫോട്ടോയും സ്രോതസ്സും സംഭാവകനും വേണം.',
        }}
        photo="old-road-roller"
      />

      <section className="py-16 sm:py-24">
        <Container>
          <div className="sticky top-16 z-20 -mx-5 flex gap-2 overflow-x-auto bg-bone/90 px-5 py-4 backdrop-blur no-scrollbar sm:mx-0 sm:px-0">
            {filters.map((f) => (
              <button
                key={f.id}
                onClick={() => setFilter(f.id)}
                className={`label shrink-0 rounded-full border px-4 py-2 transition-colors ${filter === f.id ? 'border-ink bg-ink text-bone' : 'border-ink/20 hover:border-ink'}`}
              >
                {t(f.label)}
              </button>
            ))}
          </div>

          <ol className="relative mt-10">
            <span className="absolute top-0 bottom-0 left-[7px] w-px bg-ink/15 md:left-[180px]" aria-hidden />
            {shown.map((e) => (
              <li key={e.id} className="relative grid gap-4 pb-14 pl-8 md:grid-cols-[180px_1fr] md:pl-0">
                <span className={`absolute top-2 left-0 size-[15px] rounded-full border-2 md:left-[173px] ${e.research ? 'border-dashed border-laterite bg-bone' : e.status === 'context' ? 'border-forest bg-bone' : 'border-ink bg-lime'}`} aria-hidden />
                <Reveal className="md:pr-10 md:text-right">
                  <p className="headline text-xl tabular-nums md:text-2xl">{e.when}</p>
                </Reveal>
                <Reveal delay={80} className="md:pl-12">
                  <div className={`grid gap-6 rounded-2xl p-6 sm:p-8 ${e.research ? 'border border-dashed border-laterite/40 bg-paper' : 'bg-paper'} ${e.photo ? 'lg:grid-cols-[1fr_240px]' : ''}`}>
                    <div>
                      <StatusBadge status={e.status} />
                      <h2 className="headline mt-4 text-2xl sm:text-[1.75rem]">{t(e.title)}</h2>
                      <p className="mt-3 leading-relaxed text-ink-soft">{t(e.body)}</p>
                      {e.research && (
                        <Link to="/contribute" className="label mt-5 inline-flex rounded-full bg-lime px-3.5 py-2">
                          {t({ en: 'I can help with this', ml: 'എനിക്ക് സഹായിക്കാനാകും' })} ↗
                        </Link>
                      )}
                    </div>
                    {e.photo && (
                      <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-bone-2">
                        <Photo src={e.photo} size="thumb" alt="" className="size-full object-cover" />
                      </div>
                    )}
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </Container>
      </section>
    </>
  );
}
