import { useLang } from '../lib/i18n';
import { useSeo } from '../lib/seo';
import { PAIRS } from '../data/culture';
import { PHOTOS } from '../data/photos';
import { Container, Label, Photo, Reveal } from '../components/ui';
import { BeforeAfter, LimeCta, PageHero } from '../components/sections';

export default function OldNew() {
  useSeo('/old-and-new');
  const { t } = useLang();
  const old = PHOTOS.filter((p) => p.era === 'old').slice(0, 8);
  return (
    <>
      <PageHero
        no="09"
        label={{ en: 'Old vs new Edakkom', ml: 'പഴയ എടക്കോം, പുതിയ എടക്കോം' }}
        plain={{ en: 'The same land,', ml: 'അതേ മണ്ണ്,' }}
        italic={{ en: 'a different century.', ml: 'മറ്റൊരു നൂറ്റാണ്ട്.' }}
        intro={{
          en: 'Drag each slider to compare then and now. Today these pairs use archival photographs of Kerala; as families share real old photos of Edakkom, we will match them with the same spots today.',
          ml: 'ഓരോ സ്ലൈഡറും നീക്കി അന്നും ഇന്നും താരതമ്യം ചെയ്യൂ. ഇപ്പോൾ കേരളത്തിന്റെ ആർക്കൈവ് ചിത്രങ്ങളാണ് ഉപയോഗിക്കുന്നത്; എടക്കോമിന്റെ യഥാർത്ഥ പഴയ ഫോട്ടോകൾ ലഭിക്കുന്നതനുസരിച്ച് അതേ സ്ഥലത്തിന്റെ ഇന്നത്തെ ചിത്രവുമായി ചേർത്തുവെക്കും.',
        }}
        photo="old-village-road"
      />

      <section className="py-20 sm:py-28">
        <Container className="space-y-24">
          {PAIRS.map((p, i) => (
            <article key={p.id} className="grid items-center gap-10 lg:grid-cols-[1fr_1.7fr]">
              <Reveal className={i % 2 ? 'lg:order-2' : ''}>
                <Label no={String(i + 1).padStart(2, '0')} className="text-ink-faint">{t({ en: 'Then & now', ml: 'അന്നും ഇന്നും' })}</Label>
                <h2 className="headline mt-4 text-[clamp(2.2rem,4vw,3.4rem)]">{t(p.title)}</h2>
                <p className="mt-5 leading-relaxed text-ink-soft">{t(p.note)}</p>
                <div className="label mt-6 flex gap-4 text-ink-faint">
                  <span>← {t(p.beforeLabel)}</span>
                  <span>{t(p.afterLabel)} →</span>
                </div>
              </Reveal>
              <Reveal delay={100}>
                <BeforeAfter before={p.before} after={p.after} beforeLabel={t(p.beforeLabel)} afterLabel={t(p.afterLabel)} alt={t(p.title)} />
              </Reveal>
            </article>
          ))}
        </Container>
      </section>

      <section className="mx-3 rounded-[var(--radius-card)] bg-coal py-20 text-ivory sm:mx-4 sm:py-28">
        <Container>
          <Reveal>
            <Label no="—" className="text-lime">{t({ en: 'Old Malabar', ml: 'പഴയ മലബാർ' })}</Label>
            <h2 className="headline mt-5 max-w-3xl text-[clamp(2.2rem,4.6vw,4rem)]">
              {t({ en: 'How our grandparents’ world', ml: 'നമ്മുടെ മുത്തശ്ശന്മാരുടെ ലോകം' })} <em className="font-serif font-normal italic">{t({ en: 'looked.', ml: 'ഇങ്ങനെയായിരുന്നു.' })}</em>
            </h2>
          </Reveal>
          <div className="mt-14 grid grid-cols-2 gap-3 md:grid-cols-4">
            {old.map((p, i) => (
              <Reveal key={p.id} delay={(i % 4) * 60} className={i === 0 || i === 5 ? 'col-span-2 row-span-2' : ''}>
                <figure className="group relative h-full overflow-hidden rounded-2xl bg-coal-3">
                  <Photo src={p.src} size={i === 0 || i === 5 ? 'full' : 'thumb'} alt={t(p.title)} className="aspect-square size-full object-cover transition-transform duration-[1.2s] group-hover:scale-[1.04]" />
                  <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-coal/90 to-transparent p-4 pt-10 text-sm">
                    {t(p.title)} <span className="label block text-ivory/50">{p.year}</span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <LimeCta
        photo="old-village-road"
        kicker={{ en: 'Before it is lost', ml: 'നഷ്ടപ്പെടും മുമ്പ്' }}
        plain={{ en: 'An old photo in a drawer', ml: 'അലമാരയിലെ ഒരു പഴയ ഫോട്ടോ' }}
        italic={{ en: 'is history waiting.', ml: 'കാത്തിരിക്കുന്ന ചരിത്രമാണ്.' }}
        cta={{ en: 'Send an old photo', ml: 'പഴയ ഫോട്ടോ അയക്കൂ' }}
      />
    </>
  );
}
