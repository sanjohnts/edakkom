import { useLang } from '../lib/i18n';
import { useSeo } from '../lib/seo';
import { CHAPTERS } from '../data/history';
import { Container, Label, Photo, Pill, Reveal, StatusBadge } from '../components/ui';
import { LimeCta, PageHero } from '../components/sections';

export default function History() {
  useSeo('/history');
  const { t } = useLang();
  return (
    <>
      <PageHero
        no="02"
        label={{ en: 'History', ml: 'ചരിത്രം' }}
        plain={{ en: 'The story of', ml: 'നമ്മുടെ' }}
        italic={{ en: 'our land.', ml: 'മണ്ണിന്റെ കഥ.' }}
        intro={{
          en: 'From the kingdom of Kolathunadu to the digital generation — what we know, what the region’s history tells us, and what we are still searching for.',
          ml: 'കോലത്തുനാട് മുതൽ ഡിജിറ്റൽ തലമുറ വരെ — നമുക്കറിയാവുന്നതും പ്രദേശത്തിന്റെ ചരിത്രം പറയുന്നതും ഇനിയും തേടുന്നതും.',
        }}
        photo="old-paddy-field-hut"
      />

      <section className="py-20 sm:py-28">
        <Container>
          <Reveal className="mb-16 grid gap-6 rounded-2xl border border-ink/12 bg-paper p-6 sm:grid-cols-[auto_1fr] sm:items-center sm:p-8">
            <span className="label rounded-full bg-lime px-3 py-1.5">{t({ en: 'A note on sources', ml: 'സ്രോതസ്സുകളെക്കുറിച്ച്' })}</span>
            <p className="text-ink-soft">
              {t({
                en: 'Every section carries a badge: “Regional history” is well documented for Kerala and Malabar; “To be confirmed” needs local records or elders’ accounts. We never present general Kannur history as specific Edakkom history without evidence.',
                ml: 'ഓരോ ഭാഗത്തിനും ഒരു അടയാളമുണ്ട്: “പ്രാദേശിക ചരിത്രം” കേരളത്തെയും മലബാറിനെയും കുറിച്ച് രേഖപ്പെടുത്തിയതാണ്; “സ്ഥിരീകരിക്കാനുണ്ട്” എന്നതിന് പ്രാദേശിക രേഖകളോ മുതിർന്നവരുടെ സാക്ഷ്യമോ വേണം. തെളിവില്ലാതെ കണ്ണൂരിന്റെ പൊതുചരിത്രം എടക്കോമിന്റെ ചരിത്രമായി അവതരിപ്പിക്കില്ല.',
              })}
            </p>
          </Reveal>

          <div className="space-y-24 sm:space-y-32">
            {CHAPTERS.map((c, i) => (
              <article key={c.id} id={c.id} className="grid scroll-mt-24 gap-10 lg:grid-cols-[1fr_1.35fr]">
                <Reveal className="lg:sticky lg:top-24 lg:self-start">
                  <Label no={c.no} className="text-ink-faint">{t({ en: 'Chapter', ml: 'അധ്യായം' })}</Label>
                  <h2 className="headline mt-4 text-[clamp(2rem,3.6vw,3.2rem)]">{t(c.title)}</h2>
                  <StatusBadge status={c.status} className="mt-5" />
                  {c.photo && (
                    <div className={`mt-8 aspect-[4/3] overflow-hidden rounded-2xl bg-bone-2 ${i % 2 ? 'lg:ml-10' : ''}`}>
                      <Photo src={c.photo} alt="" className="size-full object-cover" />
                    </div>
                  )}
                </Reveal>
                <Reveal delay={100} className="prose-edakkom lg:pt-14">
                  {c.body.map((p, j) => (
                    <p key={j} className={j === 0 ? '!text-[1.2rem] !leading-relaxed !text-ink' : ''}>{t(p)}</p>
                  ))}
                </Reveal>
              </article>
            ))}
          </div>

          <Reveal className="mt-24 flex flex-wrap items-center justify-between gap-6 border-t border-ink/15 pt-10">
            <p className="headline text-2xl">{t({ en: 'See it year by year.', ml: 'വർഷം തോറും കാണാം.' })}</p>
            <Pill to="/timeline" tone="coal">{t({ en: 'Open the timeline', ml: 'കാലരേഖ തുറക്കാം' })}</Pill>
          </Reveal>
        </Container>
      </section>

      <LimeCta
        photo="old-paddy-field-hut"
        kicker={{ en: 'Help write this history', ml: 'ഈ ചരിത്രം എഴുതാൻ സഹായിക്കൂ' }}
        plain={{ en: 'Do you know how Edakkom', ml: 'എടക്കോമിന് ആ പേര്' }}
        italic={{ en: 'got its name?', ml: 'എങ്ങനെ കിട്ടി?' }}
        cta={{ en: 'Tell us', ml: 'ഞങ്ങളോട് പറയൂ' }}
      />
    </>
  );
}
