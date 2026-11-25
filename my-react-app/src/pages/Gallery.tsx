import { useMemo, useState } from 'react';
import { useLang } from '../lib/i18n';
import { useSeo } from '../lib/seo';
import { useContent } from '../lib/useContent';
import { publicPhotoUrl } from '../lib/supabase';
import { CATEGORIES, PHOTOS, type Category, type Photo as PhotoT } from '../data/photos';
import { Container, Photo, Reveal, StatusBadge } from '../components/ui';
import { Lightbox, LimeCta, PageHero } from '../components/sections';

type Row = {
  id: string; storage_path: string; title_en: string; title_ml: string; caption_en?: string; caption_ml?: string;
  category: Category; era: 'old' | 'new'; year?: string; credit?: string;
};

export default function Gallery() {
  useSeo('/gallery');
  const { t } = useLang();
  const photos = useContent<PhotoT, Row>('gallery_items', PHOTOS, (r) => ({
    id: r.id,
    src: publicPhotoUrl(r.storage_path),
    title: { en: r.title_en, ml: r.title_ml || r.title_en },
    caption: r.caption_en ? { en: r.caption_en, ml: r.caption_ml || r.caption_en } : undefined,
    category: r.category,
    era: r.era,
    year: r.year,
    credit: r.credit,
    status: 'verified',
  }));
  const [cat, setCat] = useState<Category | 'all'>('all');
  const [era, setEra] = useState<'all' | 'old' | 'new'>('all');
  const [open, setOpen] = useState<number | null>(null);

  const shown = useMemo(
    () => photos.filter((p) => (cat === 'all' || p.category === cat) && (era === 'all' || p.era === era)),
    [photos, cat, era],
  );

  const chip = (active: boolean) =>
    `label shrink-0 rounded-full border px-3.5 py-2 transition-colors ${active ? 'border-ink bg-ink text-bone' : 'border-ink/20 hover:border-ink'}`;

  return (
    <>
      <PageHero
        no="11"
        label={{ en: 'Image gallery', ml: 'ചിത്രശാല' }}
        plain={{ en: 'Photographs,', ml: 'ചിത്രങ്ങൾ,' }}
        italic={{ en: 'old and new.', ml: 'പഴയതും പുതിയതും.' }}
        intro={{
          en: 'Every photo is labelled honestly: “Reference photo” means it shows Kerala or North Malabar but is not confirmed as Edakkom. Know where a photo was taken? Tell us.',
          ml: 'ഓരോ ചിത്രത്തിനും സത്യസന്ധമായ അടയാളമുണ്ട്: “മാതൃകാ ചിത്രം” എന്നാൽ കേരളമോ ഉത്തര മലബാറോ ആണ്, എടക്കോം ആണെന്ന് സ്ഥിരീകരിച്ചിട്ടില്ല. ഒരു ഫോട്ടോ എവിടെ എടുത്തതാണെന്ന് അറിയാമോ? പറയൂ.',
        }}
        photo="old-riverside"
      />

      <section className="py-14 sm:py-20">
        <Container>
          <div className="sticky top-16 z-20 -mx-5 space-y-2 bg-bone/90 px-5 py-4 backdrop-blur sm:mx-0 sm:px-0">
            <div className="no-scrollbar flex gap-2 overflow-x-auto">
              <button className={chip(cat === 'all')} onClick={() => setCat('all')}>{t({ en: 'All', ml: 'എല്ലാം' })} · {photos.length}</button>
              {CATEGORIES.map((c) => {
                const n = photos.filter((p) => p.category === c.id).length;
                if (!n) return null;
                return (
                  <button key={c.id} className={chip(cat === c.id)} onClick={() => setCat(c.id)}>
                    {t(c.label)} · {n}
                  </button>
                );
              })}
            </div>
            <div className="flex flex-wrap gap-2">
              {([
                ['all', { en: 'Any era', ml: 'എല്ലാ കാലവും' }],
                ['old', { en: 'Historical', ml: 'പഴയത്' }],
                ['new', { en: 'Present day', ml: 'ഇന്നത്തേത്' }],
              ] as const).map(([id, label]) => (
                <button key={id} className={chip(era === id)} onClick={() => setEra(id)}>
                  {t(label)}
                </button>
              ))}
            </div>
          </div>

          <div className="masonry mt-8">
            {shown.map((p, i) => (
              <Reveal key={p.id} delay={(i % 3) * 50}>
                <button onClick={() => setOpen(i)} className="group block w-full text-left" aria-label={t(p.title)}>
                  <div className="relative overflow-hidden rounded-2xl bg-bone-2">
                    <Photo src={p.src} size="thumb" alt={t(p.title)} className="w-full transition-transform duration-700 group-hover:scale-[1.03]" />
                    <span className="absolute top-3 left-3"><StatusBadge status={p.status} /></span>
                  </div>
                  <div className="mt-3 flex items-baseline justify-between gap-3">
                    <p className="font-medium">{t(p.title)}</p>
                    {p.year && <p className="label shrink-0 text-ink-faint">{p.year}</p>}
                  </div>
                </button>
              </Reveal>
            ))}
          </div>
          {shown.length === 0 && <p className="py-20 text-center text-ink-faint">{t({ en: 'No photos here yet.', ml: 'ഇവിടെ ഇതുവരെ ഫോട്ടോകളില്ല.' })}</p>}
        </Container>
      </section>

      <Lightbox photos={shown} index={open} onClose={() => setOpen(null)} onIndex={setOpen} />

      <LimeCta
        photo="old-riverside"
        kicker={{ en: 'Grow the gallery', ml: 'ചിത്രശാല വളർത്താം' }}
        plain={{ en: 'Your photo,', ml: 'നിങ്ങളുടെ ഫോട്ടോ,' }}
        italic={{ en: 'your name beside it.', ml: 'അരികിൽ നിങ്ങളുടെ പേര്.' }}
        cta={{ en: 'Upload a photo', ml: 'ഫോട്ടോ അപ്‌ലോഡ് ചെയ്യൂ' }}
      />
    </>
  );
}
