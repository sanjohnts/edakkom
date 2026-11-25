import { useLang } from '../lib/i18n';
import { useSeo } from '../lib/seo';
import { DIRECTORY, EMERGENCY, mapsLink } from '../data/places';
import { Container, Label, Reveal, StatusBadge } from '../components/ui';
import { PageHero } from '../components/sections';

export default function Directory() {
  useSeo('/directory');
  const { t } = useLang();
  const groups = Array.from(new Set(DIRECTORY.map((d) => d.group.en))).map((en) => ({
    label: DIRECTORY.find((d) => d.group.en === en)!.group,
    items: DIRECTORY.filter((d) => d.group.en === en),
  }));
  return (
    <>
      <PageHero
        no="13"
        label={{ en: 'Directory', ml: 'ഡയറക്ടറി' }}
        plain={{ en: 'Useful services,', ml: 'ഉപകാരപ്രദമായ സേവനങ്ങൾ,' }}
        italic={{ en: 'close to home.', ml: 'വീടിനടുത്ത്.' }}
        intro={{
          en: 'Post office, banks, clinics, shops, food, libraries, offices and transport in and around Edakkom town — from Google Maps and public listings. Only official office numbers are shown.',
          ml: 'എടക്കോം ടൗണിലും പരിസരത്തുമുള്ള പോസ്റ്റ് ഓഫീസ്, ബാങ്കുകൾ, ആശുപത്രികൾ, കടകൾ, ഹോട്ടലുകൾ, വായനശാലകൾ, ഓഫീസുകൾ, ഗതാഗതം — ഗൂഗിൾ മാപ്പിൽ നിന്നും പൊതു ലിസ്റ്റിങ്ങുകളിൽ നിന്നും. ഔദ്യോഗിക ഓഫീസ് നമ്പറുകൾ മാത്രം.',
        }}
        photo="health-centre"
      />

      <section className="px-3 sm:px-4">
        <Container className="rounded-[var(--radius-card)] bg-lime py-10">
          <Label className="text-lime-ink">{t({ en: 'Emergency numbers', ml: 'അടിയന്തര നമ്പറുകൾ' })}</Label>
          <div className="mt-5 grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-3 lg:grid-cols-6">
            {EMERGENCY.map((e) => (
              <a key={e.number} href={`tel:${e.number}`} className="group block">
                <p className="headline text-4xl tabular-nums group-hover:underline">{e.number}</p>
                <p className="mt-1 text-sm">{t(e.name)}</p>
              </a>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container className="grid gap-16 lg:grid-cols-2">
          {groups.map((g, gi) => (
            <Reveal key={g.label.en} delay={(gi % 2) * 80}>
              <Label no={String(gi + 1).padStart(2, '0')} className="text-ink-faint">{t(g.label)}</Label>
              <ul className="mt-5 border-b border-ink/15">
                {g.items.map((d) => (
                  <li key={d.name.en} className="flex flex-wrap items-start justify-between gap-3 border-t border-ink/15 py-4">
                    <span>
                      <span className="block font-medium">{t(d.name)}</span>
                      {d.note && <span className="mt-0.5 block text-sm text-ink-soft">{t(d.note)}</span>}
                      {d.phone && (
                        <a href={`tel:${d.phone.replace(/\s/g, '')}`} className="mt-1 inline-block text-sm text-lime-ink underline decoration-lime-ink/30 underline-offset-4">
                          {d.phone}
                        </a>
                      )}
                    </span>
                    <span className="flex items-center gap-3">
                      {d.distance && <span className="text-sm tabular-nums text-ink-faint">{d.distance}</span>}
                      <a href={mapsLink(`${d.name.en}, Edakkom, Kannur`)} target="_blank" rel="noreferrer" className="text-sm text-ink-faint hover:text-ink" aria-label={`${d.name.en} on Google Maps`}>
                        {t({ en: 'Map', ml: 'മാപ്പ്' })} ↗
                      </a>
                      <StatusBadge status={d.status} />
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </Container>
        <Container>
          <p className="mt-14 max-w-2xl text-sm text-ink-faint">
            {t({
              en: 'Run a shop, clinic or service in Edakkom? Send your details through the Contribute page to be listed. Listings are free and reviewed before publishing.',
              ml: 'എടക്കോമിൽ കടയോ ക്ലിനിക്കോ സേവനമോ നടത്തുന്നുണ്ടോ? ലിസ്റ്റ് ചെയ്യാൻ സംഭാവന പേജിലൂടെ വിവരങ്ങൾ അയക്കൂ. ലിസ്റ്റിങ് സൗജന്യം; പ്രസിദ്ധീകരിക്കും മുമ്പ് പരിശോധിക്കും.',
            })}
          </p>
        </Container>
      </section>
    </>
  );
}
