import { useLang } from '../lib/i18n';
import { useSeo } from '../lib/seo';
import { CONTACT, SOURCES, STATUS_HELP, STATUS_LABEL, instagramUrl, type Status } from '../data/site';
import { Container, Label, Pill, Reveal, StatusBadge } from '../components/ui';
import { PageHero, SectionHead } from '../components/sections';

export default function About() {
  useSeo('/about');
  const { t } = useLang();
  const statuses: Status[] = ['verified', 'directory', 'to-verify', 'context', 'reference'];
  return (
    <>
      <PageHero
        no="14"
        label={{ en: 'About the project', ml: 'പദ്ധതിയെക്കുറിച്ച്' }}
        plain={{ en: 'A permanent', ml: 'എടക്കോമിന്റെ' }}
        italic={{ en: 'digital memory.', ml: 'സ്ഥിരം ഡിജിറ്റൽ ഓർമ.' }}
        intro={{
          en: 'edakkom.com is a community archive: a place where today’s generation can discover how their land, people and community developed over time.',
          ml: 'edakkom.com ഒരു സമൂഹ ആർക്കൈവാണ്: തങ്ങളുടെ മണ്ണും മനുഷ്യരും സമൂഹവും കാലത്തിലൂടെ എങ്ങനെ വളർന്നുവെന്ന് പുതുതലമുറയ്ക്ക് കണ്ടെത്താവുന്ന ഒരിടം.',
        }}
        photo="old-family-portrait"
      />

      <section className="py-20 sm:py-28">
        <Container className="grid gap-14 lg:grid-cols-3">
          {[
            { no: '01', h: { en: 'Preserve', ml: 'സംരക്ഷിക്കുക' }, p: { en: 'Collect old photographs, documents and the memories of elders before they are lost.', ml: 'നഷ്ടപ്പെടും മുമ്പ് പഴയ ഫോട്ടോകളും രേഖകളും മുതിർന്നവരുടെ ഓർമകളും ശേഖരിക്കുക.' } },
            { no: '02', h: { en: 'Verify', ml: 'സ്ഥിരീകരിക്കുക' }, p: { en: 'Check every fact against records, and label clearly what is still unconfirmed.', ml: 'ഓരോ വസ്തുതയും രേഖകളുമായി ഒത്തുനോക്കുക; സ്ഥിരീകരിക്കാത്തവ വ്യക്തമായി അടയാളപ്പെടുത്തുക.' } },
            { no: '03', h: { en: 'Share', ml: 'പങ്കുവെക്കുക' }, p: { en: 'Make Edakkom’s story open to everyone — in Malayalam and English.', ml: 'എടക്കോമിന്റെ കഥ എല്ലാവർക്കും — മലയാളത്തിലും ഇംഗ്ലീഷിലും — ലഭ്യമാക്കുക.' } },
          ].map((x, i) => (
            <Reveal key={x.no} delay={i * 80} className="border-t border-ink/15 pt-6">
              <span className="font-mono text-xs text-ink-faint">{x.no}</span>
              <p className="headline mt-4 text-4xl">{t(x.h)}</p>
              <p className="mt-3 leading-relaxed text-ink-soft">{t(x.p)}</p>
            </Reveal>
          ))}
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container>
          <SectionHead
            no="A"
            label={{ en: 'Verification policy', ml: 'സ്ഥിരീകരണ നയം' }}
            plain={{ en: 'Honest labels', ml: 'എല്ലാറ്റിനും' }}
            italic={{ en: 'on everything.', ml: 'സത്യസന്ധമായ അടയാളം.' }}
            side={{
              en: 'Internet reference images are never labelled as Edakkom photographs unless their location is verified. General Kannur traditions are not presented as specifically Edakkom traditions without local confirmation.',
              ml: 'സ്ഥലം സ്ഥിരീകരിക്കാതെ ഇന്റർനെറ്റ് ചിത്രങ്ങളെ എടക്കോമിന്റെ ഫോട്ടോകളായി അവതരിപ്പിക്കില്ല. പ്രാദേശിക സ്ഥിരീകരണമില്ലാതെ കണ്ണൂരിന്റെ പൊതു പാരമ്പര്യങ്ങളെ എടക്കോമിന്റേതായി അവതരിപ്പിക്കില്ല.',
            }}
          />
          <ul className="mt-12 border-b border-ink/15">
            {statuses.map((s) => (
              <li key={s} className="grid items-center gap-3 border-t border-ink/15 py-4 sm:grid-cols-[220px_1fr]">
                <StatusBadge status={s} className="justify-self-start" />
                <p className="text-ink-soft">
                  <span className="sr-only">{t(STATUS_LABEL[s])}: </span>
                  {t(STATUS_HELP[s])}
                </p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container className="grid gap-14 lg:grid-cols-[1fr_1.5fr]">
          <Reveal>
            <Label no="B" className="text-ink-faint">{t({ en: 'Sources', ml: 'സ്രോതസ്സുകൾ' })}</Label>
            <h2 className="headline mt-4 text-4xl">{t({ en: 'Where our facts come from', ml: 'വിവരങ്ങളുടെ ഉറവിടം' })}</h2>
            <p className="mt-5 leading-relaxed text-ink-soft">
              {t({
                en: 'Public listings are a starting point. Panchayat, census, school, parish and temple records — and the people of Edakkom — are the final word.',
                ml: 'പൊതു ലിസ്റ്റിങ്ങുകൾ ഒരു തുടക്കം മാത്രം. പഞ്ചായത്ത്, സെൻസസ്, സ്കൂൾ, ഇടവക, ക്ഷേത്ര രേഖകളും എടക്കോമിലെ ജനങ്ങളുമാണ് അന്തിമ വാക്ക്.',
              })}
            </p>
          </Reveal>
          <ol className="border-b border-ink/15">
            {SOURCES.map((s, i) => (
              <li key={s.url} className="flex items-baseline gap-5 border-t border-ink/15 py-4">
                <span className="font-mono text-xs text-ink-faint">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <a href={s.url} target="_blank" rel="noreferrer" className="font-medium underline decoration-ink/25 underline-offset-4 hover:decoration-ink">{s.title}</a>
                  <p className="mt-1 text-sm text-ink-faint">{t(s.note)}</p>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="mx-3 rounded-[var(--radius-card)] bg-coal py-20 text-ivory sm:mx-4 sm:py-24">
        <Container className="grid gap-10 lg:grid-cols-2 lg:items-end">
          <div>
            <Label no="C" className="text-lime">{t({ en: 'Contact & contributors', ml: 'ബന്ധപ്പെടാൻ' })}</Label>
            <h2 className="headline mt-5 text-[clamp(2.2rem,4vw,3.4rem)]">
              {t({ en: 'Built by the village,', ml: 'നാട്ടുകാർ പണിയുന്നത്,' })} <em className="font-serif font-normal italic">{t({ en: 'for the village.', ml: 'നാട്ടുകാർക്കായി.' })}</em>
            </h2>
            <p className="mt-5 max-w-lg leading-relaxed text-ivory/65">
              {t({
                en: 'Every contributor is credited by name (unless you prefer not to be). Photos stay the property of their owners; we publish them only with permission.',
                ml: 'ഓരോ സംഭാവകന്റെയും പേര് ചേർക്കും (വേണ്ടെന്ന് പറഞ്ഞാലൊഴികെ). ഫോട്ടോകൾ ഉടമസ്ഥരുടേതായി തുടരും; അനുമതിയോടെ മാത്രം പ്രസിദ്ധീകരിക്കും.',
              })}
            </p>
          </div>
          <div className="flex flex-wrap gap-3 lg:justify-end">
            {CONTACT.email && <Pill href={`mailto:${CONTACT.email}`} tone="bone">{CONTACT.email}</Pill>}
            {CONTACT.whatsapp && <Pill href={`https://wa.me/${CONTACT.whatsapp}`} tone="bone">WhatsApp</Pill>}
            {CONTACT.instagram && <Pill href={instagramUrl(CONTACT.instagram)} tone="bone">Instagram · @{CONTACT.instagram}</Pill>}
            <Pill to="/contribute" tone="ivory">{t({ en: 'Contribute', ml: 'സംഭാവന ചെയ്യൂ' })}</Pill>
          </div>
        </Container>
      </section>
    </>
  );
}
