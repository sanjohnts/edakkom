import { useLang } from '../lib/i18n';
import { useSeo } from '../lib/seo';
import { AERIAL } from '../lib/images';
import { FACTS } from '../data/site';
import { CENSUS, HILLS, LOCALITIES, NEARBY, ROADS, WATER, mapsLink } from '../data/places';
import { Container, Label, Pill, Reveal, Row, StatusBadge } from '../components/ui';
import { PageHero, SectionHead } from '../components/sections';

export default function Geography() {
  useSeo('/geography');
  const { t } = useLang();
  return (
    <>
      <PageHero
        no="04"
        label={{ en: 'Geography & map', ml: 'ഭൂമിശാസ്ത്രം, മാപ്പ്' }}
        plain={{ en: 'Where the midlands', ml: 'ഇടനാട്' }}
        italic={{ en: 'meet the hills.', ml: 'മലയോരത്തെ തൊടുന്നിടം.' }}
        intro={{
          en: 'Edakkom is a town in Taliparamba taluk, in the eastern midlands of Kannur district — a ward of Chapparappadava panchayat, reaching into Eramam-Kuttoor, between the coastal towns and the hills that rise towards Kodagu.',
          ml: 'തീരദേശ പട്ടണങ്ങൾക്കും കുടകിലേക്ക് ഉയരുന്ന മലയോരത്തിനുമിടയിൽ, കണ്ണൂർ ജില്ലയുടെ കിഴക്കൻ ഇടനാട്ടിലാണ് എടക്കോം.',
        }}
        photo={AERIAL}
      />

      <section className="py-20 sm:py-28">
        <Container className="grid gap-14 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <Label no="A" className="text-ink-faint">{t({ en: 'Quick facts', ml: 'ഒറ്റനോട്ടത്തിൽ' })}</Label>
            <h2 className="headline mt-4 text-4xl">{t({ en: 'Edakkom at a glance', ml: 'എടക്കോം ഒറ്റനോട്ടത്തിൽ' })}</h2>
            <div className="mt-8 border-b border-ink/15">
              {FACTS.map((f) => (
                <Row key={f.label.en} k={t(f.label)} v={t(f.value)} extra={<StatusBadge status={f.status} />} />
              ))}
            </div>
          </div>
          <Reveal>
            <div className="sticky top-24">
              <div className="aspect-[4/5] overflow-hidden rounded-2xl border border-ink/12 bg-bone-2 sm:aspect-[4/3] lg:aspect-[4/5]">
                <iframe
                  title={t({ en: 'Map of Edakkom, Kannur', ml: 'എടക്കോം മാപ്പ്' })}
                  src="https://maps.google.com/maps?q=Edakkom%2C%20Kannur%2C%20Kerala%20670581&z=13&output=embed"
                  className="size-full grayscale-[0.35]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
                <p className="label text-ink-faint">{t({ en: 'Map © Google', ml: 'മാപ്പ് © ഗൂഗിൾ' })}</p>
                <Pill href={mapsLink('Edakkom, Kannur, Kerala 670581')} tone="coal">
                  {t({ en: 'Open in Google Maps', ml: 'ഗൂഗിൾ മാപ്പിൽ തുറക്കാം' })}
                </Pill>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="mx-3 rounded-[var(--radius-card)] bg-coal py-20 text-ivory sm:mx-4 sm:py-28">
        <Container>
          <SectionHead
            dark
            no="B"
            label={{ en: 'Nearby', ml: 'അയൽപ്രദേശങ്ങൾ' }}
            plain={{ en: 'Villages and towns', ml: 'ചുറ്റുമുള്ള ഗ്രാമങ്ങളും' }}
            italic={{ en: 'around Edakkom.', ml: 'പട്ടണങ്ങളും.' }}
            side={{ en: 'Approximate distances from public listings (often straight-line). Road distances are usually a little longer.', ml: 'പൊതു ലിസ്റ്റിങ്ങുകളിലെ ഏകദേശ ദൂരം (പലപ്പോഴും നേർരേഖ). റോഡ് ദൂരം അല്പം കൂടുതലായിരിക്കും.' }}
          />
          <ul className="mt-14 grid gap-x-10 sm:grid-cols-2 lg:grid-cols-3">
            {NEARBY.map((n, i) => (
              <Reveal as="li" key={n.name.en} delay={(i % 3) * 60} className="flex items-baseline justify-between gap-4 border-t border-ivory/12 py-5">
                <div>
                  <p className="headline text-xl">{t(n.name)}</p>
                  <p className="label mt-1 text-ivory/45">{t(n.kind)}</p>
                </div>
                <span className="text-sm tabular-nums text-lime">{n.distance}</span>
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      <section className="pt-20 sm:pt-28">
        <Container className="grid gap-14 lg:grid-cols-3">
          <Reveal>
            <Label no="C" className="text-ink-faint">{t({ en: 'Neighbourhoods', ml: 'പ്രദേശങ്ങൾ' })}</Label>
            <h2 className="headline mt-4 text-4xl">{t({ en: 'Around the junction', ml: 'കവലയ്ക്ക് ചുറ്റും' })}</h2>
            <div className="mt-6 flex flex-wrap gap-2">
              {LOCALITIES.map((l) => (
                <a key={l.en} href={mapsLink(`${l.en}, Kannur, Kerala`)} target="_blank" rel="noreferrer" className="rounded-full border border-ink/20 px-3.5 py-1.5 text-sm transition-colors hover:bg-coal hover:text-ivory">
                  {t(l)}
                </a>
              ))}
            </div>
          </Reveal>
          <Reveal delay={80}>
            <Label no="D" className="text-ink-faint">{t({ en: 'Roads', ml: 'റോഡുകൾ' })}</Label>
            <h2 className="headline mt-4 text-4xl">{t({ en: 'How the town connects', ml: 'പട്ടണത്തിന്റെ വഴികൾ' })}</h2>
            <ul className="prose-edakkom mt-6">
              {ROADS.map((r) => (
                <li key={r.en}>{t(r)}</li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={160}>
            <Label no="E" className="text-ink-faint">{t({ en: 'Land & hills', ml: 'മണ്ണും കുന്നുകളും' })}</Label>
            <h2 className="headline mt-4 text-4xl">{t({ en: 'Laterite and green hills', ml: 'ചെങ്കല്ലും പച്ചക്കുന്നുകളും' })}</h2>
            <p className="mt-6 leading-relaxed text-ink-soft">
              {t({
                en: 'Edakkom stands on laterite land. The panchayat rises from about 7.5 m to 75 m above sea level, with the Kuppam river running through its middle and hills at:',
                ml: 'ചെങ്കൽ മണ്ണിലാണ് എടക്കോം. പഞ്ചായത്ത് സമുദ്രനിരപ്പിൽ നിന്ന് ഏകദേശം 7.5 മീ. മുതൽ 75 മീ. വരെ ഉയരത്തിൽ; നടുവിലൂടെ കുപ്പം പുഴ ഒഴുകുന്നു; കുന്നുകൾ:',
              })}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {HILLS.map((h) => (
                <span key={h.en} className="rounded-full bg-lime px-3.5 py-1.5 text-sm text-forest">{t(h)}</span>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container className="grid gap-16 lg:grid-cols-2">
          <div>
            <Label no="C" className="text-ink-faint">{t({ en: 'Rivers & water', ml: 'പുഴകൾ' })}</Label>
            <h2 className="headline mt-4 text-4xl">{t({ en: 'Streams to the sea', ml: 'കടലിലേക്കൊഴുകുന്ന പുഴകൾ' })}</h2>
            <p className="mt-5 max-w-md leading-relaxed text-ink-soft">
              {t({
                en: 'Local streams feed the rivers of northern Kannur that flow west to the Arabian Sea. Names of local thodus (streams), ponds and wells are welcome additions.',
                ml: 'നാട്ടിലെ തോടുകൾ പടിഞ്ഞാറ് അറബിക്കടലിലേക്കൊഴുകുന്ന വടക്കൻ കണ്ണൂരിലെ പുഴകളിൽ ചേരുന്നു. നാട്ടിലെ തോടുകളുടെയും കുളങ്ങളുടെയും പേരുകൾ അറിയിക്കൂ.',
              })}
            </p>
            <div className="mt-8 border-b border-ink/15">
              {WATER.map((w) => (
                <Row key={w.name.en} k={w.distance} v={t(w.name)} />
              ))}
            </div>
          </div>
          <div>
            <Label no="D" className="text-ink-faint">{t({ en: 'Population context', ml: 'ജനസംഖ്യ' })}</Label>
            <h2 className="headline mt-4 text-4xl">{t({ en: 'Census 2011', ml: 'സെൻസസ് 2011' })}</h2>
            <p className="mt-5 max-w-md leading-relaxed text-ink-soft">
              {t({
                en: 'Edakkom ward is not a separate census unit. These figures for the two panchayats it belongs to give a sense of scale.',
                ml: 'എടക്കോം പ്രത്യേക സെൻസസ് യൂണിറ്റല്ല. ചുറ്റുമുള്ള പ്രദേശങ്ങളുടെ ഈ കണക്കുകൾ ഒരു ഏകദേശ ചിത്രം നൽകും.',
              })}
            </p>
            <div className="mt-8 grid gap-4">
              {CENSUS.map((c) => (
                <div key={c.area.en} className="rounded-2xl bg-paper p-6">
                  <p className="headline text-xl">{t(c.area)}</p>
                  <dl className="mt-5 grid grid-cols-3 gap-4">
                    {[
                      [{ en: 'Population', ml: 'ജനസംഖ്യ' }, c.population],
                      [{ en: 'Literacy', ml: 'സാക്ഷരത' }, c.literacy],
                      [{ en: 'Area', ml: 'വിസ്തീർണം' }, c.areaKm],
                    ].map(([k, v]) => (
                      <div key={(k as { en: string }).en}>
                        <dt className="label text-ink-faint">{t(k as { en: string; ml: string })}</dt>
                        <dd className="headline mt-1 text-2xl tabular-nums">{v as string}</dd>
                      </div>
                    ))}
                  </dl>
                  <p className="mt-4 text-sm text-ink-faint">{t(c.note)}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <Label no="E" className="text-ink-faint">{t({ en: 'How to reach', ml: 'എങ്ങനെ എത്താം' })}</Label>
          <div className="mt-8 grid gap-px overflow-hidden rounded-2xl bg-ink/12 sm:grid-cols-3">
            {[
              { k: { en: 'By road', ml: 'റോഡ് മാർഗം' }, v: { en: 'Via Taliparamba (NH 66) towards Chapparappadava. Local buses run on the Poovam–Kooveri–Chapparappadava road.', ml: 'തളിപ്പറമ്പ് (ദേശീയപാത 66) വഴി ചപ്പാരപ്പടവിലേക്ക്. പൂവം–കൂവേരി–ചപ്പാരപ്പടവ് റോഡിൽ ലോക്കൽ ബസുകൾ.' } },
              { k: { en: 'By train', ml: 'ട്രെയിൻ മാർഗം' }, v: { en: 'Payyanur station (≈ 17 km); Kannapuram and Kannur stations on the Mangaluru–Shoranur line.', ml: 'പയ്യന്നൂർ സ്റ്റേഷൻ (≈ 17 കി.മീ.); മംഗലാപുരം–ഷൊർണൂർ പാതയിലെ കണ്ണപുരം, കണ്ണൂർ സ്റ്റേഷനുകൾ.' } },
              { k: { en: 'By air', ml: 'വിമാന മാർഗം' }, v: { en: 'Kannur International Airport (Mattannur) is the nearest airport; Mangaluru and Kozhikode are alternatives.', ml: 'കണ്ണൂർ അന്താരാഷ്ട്ര വിമാനത്താവളം (മട്ടന്നൂർ) ആണ് ഏറ്റവും അടുത്തത്; മംഗലാപുരം, കോഴിക്കോട് എന്നിവയും.' } },
            ].map((x) => (
              <div key={x.k.en} className="bg-paper p-7">
                <p className="headline text-2xl">{t(x.k)}</p>
                <p className="mt-3 leading-relaxed text-ink-soft">{t(x.v)}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
