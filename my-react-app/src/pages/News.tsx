import { useLang } from '../lib/i18n';
import { useSeo } from '../lib/seo';
import { useContent } from '../lib/useContent';
import { publicPhotoUrl } from '../lib/supabase';
import { NEWS, type NewsPost } from '../data/culture';
import { Container, Photo, Pill, Reveal } from '../components/ui';
import { PageHero } from '../components/sections';

type Row = { id: string; date: string; tag_en: string; tag_ml: string; title_en: string; title_ml: string; body_en: string; body_ml: string; photo_url?: string };

export default function News() {
  useSeo('/news');
  const { t, lang } = useLang();
  const posts = useContent<NewsPost, Row>(
    'news_posts',
    NEWS,
    (r) => ({
      id: r.id,
      date: r.date,
      tag: { en: r.tag_en, ml: r.tag_ml || r.tag_en },
      title: { en: r.title_en, ml: r.title_ml || r.title_en },
      body: { en: r.body_en, ml: r.body_ml || r.body_en },
      photo: r.photo_url ? publicPhotoUrl(r.photo_url) : undefined,
    }),
    { orderBy: 'date' },
  );
  const fmt = (d: string) => new Date(d).toLocaleDateString(lang === 'ml' ? 'ml-IN' : 'en-IN', { day: 'numeric', month: 'long', year: 'numeric' });
  const [lead, ...rest] = posts;

  return (
    <>
      <PageHero
        no="12"
        label={{ en: 'News', ml: 'വാർത്തകൾ' }}
        plain={{ en: 'What’s happening', ml: 'നാട്ടിൽ' }}
        italic={{ en: 'in Edakkom.', ml: 'എന്തൊക്കെ?' }}
        intro={{
          en: 'Roads and facilities, school events, sports, festivals, health camps, new businesses and public notices.',
          ml: 'റോഡുകളും സൗകര്യങ്ങളും, സ്കൂൾ പരിപാടികൾ, കായികം, ഉത്സവങ്ങൾ, ആരോഗ്യ ക്യാമ്പുകൾ, പുതിയ സംരംഭങ്ങൾ, പൊതു അറിയിപ്പുകൾ.',
        }}
        photo="onam-pookalam-hall"
      />
      <section className="py-20 sm:py-28">
        <Container>
          {lead && (
            <Reveal className="grid gap-8 border-b border-ink/15 pb-16 lg:grid-cols-[1.4fr_1fr] lg:items-center">
              {lead.photo && (
                <div className="aspect-[16/10] overflow-hidden rounded-2xl bg-bone-2">
                  <Photo src={lead.photo} alt="" className="size-full object-cover" />
                </div>
              )}
              <article>
                <p className="label text-ink-faint">{t(lead.tag)} · {fmt(lead.date)}</p>
                <h2 className="headline mt-4 text-[clamp(2rem,3.6vw,3rem)]">{t(lead.title)}</h2>
                <p className="mt-5 text-[1.08rem] leading-relaxed text-ink-soft">{t(lead.body)}</p>
                <Pill to="/contribute" tone="coal" className="mt-7">{t({ en: 'Get involved', ml: 'പങ്കുചേരൂ' })}</Pill>
              </article>
            </Reveal>
          )}
          <div className="mt-16 grid gap-10 md:grid-cols-2">
            {rest.map((n, i) => (
              <Reveal key={n.id} delay={i * 80} as="article" className="grid gap-5 sm:grid-cols-[180px_1fr]">
                <div className="aspect-square overflow-hidden rounded-2xl bg-bone-2">
                  {n.photo && <Photo src={n.photo} size="thumb" alt="" className="size-full object-cover" />}
                </div>
                <div>
                  <p className="label text-ink-faint">{t(n.tag)} · {fmt(n.date)}</p>
                  <h3 className="headline mt-3 text-2xl">{t(n.title)}</h3>
                  <p className="mt-3 leading-relaxed text-ink-soft">{t(n.body)}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-20 rounded-2xl bg-paper p-8 text-center">
            <p className="headline text-2xl">{t({ en: 'Have local news to share?', ml: 'പങ്കുവെക്കാൻ നാട്ടുവിശേഷമുണ്ടോ?' })}</p>
            <p className="mx-auto mt-2 max-w-lg text-ink-soft">
              {t({ en: 'Send it with a photo — we review every post before it appears.', ml: 'ഫോട്ടോ സഹിതം അയക്കൂ — പ്രസിദ്ധീകരിക്കും മുമ്പ് ഓരോന്നും പരിശോധിക്കും.' })}
            </p>
            <Pill to="/contribute" className="mt-6">{t({ en: 'Send news', ml: 'വാർത്ത അയക്കൂ' })}</Pill>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
