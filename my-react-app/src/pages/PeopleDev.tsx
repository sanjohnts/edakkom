import { useLang } from '../lib/i18n';
import { useSeo } from '../lib/seo';
import { useContent } from '../lib/useContent';
import { PEOPLE, PEOPLE_GROUPS, type Person } from '../data/culture';
import { Container, Label, Photo, Pill, Reveal } from '../components/ui';
import { LimeCta, PageHero, SectionHead, StatRow, Steps } from '../components/sections';

type Row = { id: string; name: string; role_en: string; role_ml: string; story_en: string; story_ml: string; photo_url?: string };

const DEV = [
  {
    title: { en: 'Roads & transport', ml: 'റോഡുകളും ഗതാഗതവും' },
    body: { en: 'From footpaths and mud lanes to tarred roads, bridges and bus routes on the Poovam–Kooveri–Chapparappadava road. Rail at Payyanur; air at Kannur International Airport since 2018.', ml: 'ഒറ്റയടിപ്പാതകളിൽ നിന്നും മൺവഴികളിൽ നിന്നും ടാർ റോഡുകളിലേക്കും പാലങ്ങളിലേക്കും പൂവം–കൂവേരി–ചപ്പാരപ്പടവ് റോഡിലെ ബസ് റൂട്ടുകളിലേക്കും. പയ്യന്നൂരിൽ റെയിൽ; 2018 മുതൽ കണ്ണൂർ അന്താരാഷ്ട്ര വിമാനത്താവളം.' },
    photo: 'village-bridge-road',
  },
  {
    title: { en: 'Health', ml: 'ആരോഗ്യം' },
    body: { en: 'An Ayush PHC close to Edakkom, the Primary Health Centre and Government Hospital at Chapparappadava, and private clinics such as Souhruda Medical Centre.', ml: 'എടക്കോമിനടുത്ത് ആയുഷ് പി.എച്ച്.സി., ചപ്പാരപ്പടവിൽ പ്രാഥമികാരോഗ്യ കേന്ദ്രവും സർക്കാർ ആശുപത്രിയും, സൗഹൃദ മെഡിക്കൽ സെന്റർ പോലുള്ള സ്വകാര്യ ക്ലിനിക്കുകൾ.' },
    photo: 'health-centre',
  },
  {
    title: { en: 'Livelihoods', ml: 'ജീവിതമാർഗങ്ങൾ' },
    body: { en: 'Paddy, coconut, rubber, cashew and pepper; small shops and services; and, as across Kannur, many families supported by members working in the Gulf and other states.', ml: 'നെല്ല്, തെങ്ങ്, റബ്ബർ, കശുമാവ്, കുരുമുളക്; ചെറുകടകളും സേവനങ്ങളും; കണ്ണൂരിലെങ്ങുമെന്ന പോലെ ഗൾഫിലും മറ്റ് സംസ്ഥാനങ്ങളിലും ജോലി ചെയ്യുന്നവരുടെ പിന്തുണയുള്ള കുടുംബങ്ങൾ.' },
    photo: 'marigold-farming',
  },
];

export default function PeopleDev() {
  useSeo('/people-development');
  const { t } = useLang();
  const people = useContent<Person, Row>('people', PEOPLE, (r) => ({
    id: r.id,
    name: { en: r.name, ml: r.name },
    role: { en: r.role_en, ml: r.role_ml },
    story: { en: r.story_en, ml: r.story_ml },
    photo: r.photo_url,
  }));

  return (
    <>
      <PageHero
        no="10"
        label={{ en: 'People & development', ml: 'ജനങ്ങളും വികസനവും' }}
        plain={{ en: 'The people', ml: 'ഈ നാടിനെ' }}
        italic={{ en: 'who made this place.', ml: 'പണിതുയർത്തിയവർ.' }}
        intro={{
          en: 'Community stories, local history and how roads, health, education and work have changed life in Edakkom.',
          ml: 'സമൂഹത്തിന്റെ കഥകൾ, പ്രാദേശിക ചരിത്രം, റോഡുകളും ആരോഗ്യവും വിദ്യാഭ്യാസവും തൊഴിലും എടക്കോമിലെ ജീവിതം മാറ്റിയ വിധം.',
        }}
        photo="old-vellur-vayanasala"
      />

      <section className="py-20 sm:py-28">
        <Container>
          <SectionHead
            no="A"
            label={{ en: 'Community archive', ml: 'സമൂഹ ആർക്കൈവ്' }}
            plain={{ en: 'Faces and voices', ml: 'എടക്കോമിന്റെ' }}
            italic={{ en: 'of Edakkom.', ml: 'മുഖങ്ങളും ശബ്ദങ്ങളും.' }}
            side={{
              en: 'Profiles and interviews are published only with the consent of the person or their family. Contact details are never made public.',
              ml: 'വ്യക്തിയുടെയോ കുടുംബത്തിന്റെയോ സമ്മതത്തോടെ മാത്രമേ പ്രൊഫൈലുകളും അഭിമുഖങ്ങളും പ്രസിദ്ധീകരിക്കൂ. ഫോൺ നമ്പറുകളോ വിലാസങ്ങളോ പരസ്യമാക്കില്ല.',
            }}
          />

          {people.length > 0 && (
            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {people.map((p) => (
                <Reveal key={p.id} className="overflow-hidden rounded-2xl bg-paper">
                  {p.photo && (
                    <div className="aspect-[4/5] overflow-hidden bg-bone-2">
                      <Photo src={p.photo} alt={t(p.name)} className="size-full object-cover" />
                    </div>
                  )}
                  <div className="p-6">
                    <p className="headline text-2xl">{t(p.name)}</p>
                    <p className="label mt-1 text-lime-ink">{t(p.role)}</p>
                    <p className="mt-3 leading-relaxed text-ink-soft">{t(p.story)}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          )}

          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl bg-ink/12 sm:grid-cols-2 lg:grid-cols-4">
            {PEOPLE_GROUPS.map((g, i) => (
              <Reveal key={g.title.en} delay={(i % 4) * 60} className="flex min-h-48 flex-col justify-between bg-paper p-6">
                <span className="font-mono text-xs text-ink-faint">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <p className="headline text-xl">{t(g.title)}</p>
                  <p className="mt-2 text-sm text-ink-soft">{t(g.body)}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10 flex flex-wrap items-center justify-between gap-6 rounded-2xl bg-coal p-7 text-bone sm:p-10">
            <p className="headline max-w-xl text-2xl">
              {t({ en: 'Know someone whose story should be here?', ml: 'ഇവിടെ ഉണ്ടാകേണ്ട ഒരാളുടെ കഥ അറിയാമോ?' })}
            </p>
            <Pill to="/contribute" tone="ivory">{t({ en: 'Nominate a story', ml: 'ഒരു കഥ നിർദേശിക്കൂ' })}</Pill>
          </Reveal>
        </Container>
      </section>

      <section className="pb-20 sm:pb-28">
        <Container>
          <SectionHead
            no="B"
            label={{ en: 'From the record', ml: 'രേഖകളിൽ നിന്ന്' }}
            plain={{ en: 'Freedom fighters', ml: 'നാടിന്റെ' }}
            italic={{ en: 'of the area.', ml: 'സ്വാതന്ത്ര്യസമര സേനാനികൾ.' }}
            side={{
              en: 'Remembered in the history of Chapparappadava panchayat, which Edakkom is part of. Families with photos or papers about them — please share.',
              ml: 'എടക്കോം ഉൾപ്പെടുന്ന ചപ്പാരപ്പടവ് പഞ്ചായത്തിന്റെ ചരിത്രത്തിൽ ഓർമിക്കപ്പെടുന്നവർ. ഇവരെക്കുറിച്ചുള്ള ഫോട്ടോകളോ രേഖകളോ കൈവശമുള്ള കുടുംബങ്ങൾ പങ്കുവെക്കൂ.',
            }}
          />
          <div className="mt-12">
            <Steps
              items={[
                { title: { en: 'Machathi Kunjikannan', ml: 'മാച്ചാത്തി കുഞ്ഞിക്കണ്ണൻ' }, body: { en: 'Took part in the Morazha incident of 15 September 1940.', ml: '1940 സെപ്റ്റംബർ 15-ലെ മൊറാഴ സംഭവത്തിൽ പങ്കെടുത്തു.' } },
                { title: { en: 'N.C.K. Nambiar', ml: 'എൻ.സി.കെ. നമ്പ്യാർ' }, body: { en: 'Manjeri Othayoth Chathukutty Nambiar — served in the Indian National Army under Captain Lakshmi.', ml: 'മഞ്ഞേരി ഒതയോത്ത് ചാത്തുക്കുട്ടി നമ്പ്യാർ — ക്യാപ്റ്റൻ ലക്ഷ്മിയുടെ കീഴിൽ ഐ.എൻ.എ.യിൽ.' } },
                { title: { en: 'M.O. Keshavan Nambiar', ml: 'എം.ഒ. കേശവൻ നമ്പ്യാർ' }, body: { en: 'Part of the 1946 MSP (Malabar Special Police) revolt.', ml: '1946-ലെ എം.എസ്.പി. (മലബാർ സ്പെഷ്യൽ പോലീസ്) കലാപത്തിൽ.' } },
              ]}
            />
          </div>
          <Reveal className="mt-14 grid gap-6 rounded-[var(--radius-card)] bg-paper p-7 sm:grid-cols-[1fr_auto] sm:items-center sm:p-10">
            <div>
              <Label className="text-ink-faint">{t({ en: 'Local governance', ml: 'തദ്ദേശ ഭരണം' })}</Label>
              <p className="headline mt-3 text-2xl">
                {t({ en: 'Edakkom ward · Chapparappadava Grama Panchayat', ml: 'എടക്കോം വാർഡ് · ചപ്പാരപ്പടവ് ഗ്രാമപഞ്ചായത്ത്' })}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                {t({
                  en: 'Ward 19 from the 2025 election (women-reserved); ward member: Alfiya Salam. Earlier ward 17 of 18. Source: Malayalam Wikipedia, citing the State Election Commission.',
                  ml: '2025 തിരഞ്ഞെടുപ്പ് മുതൽ വാർഡ് 19 (വനിതാ സംവരണം); വാർഡ് മെമ്പർ: അൽഫിയ സലാം. മുമ്പ് 18-ൽ 17-ാം വാർഡ്. സ്രോതസ്സ്: സംസ്ഥാന തിരഞ്ഞെടുപ്പ് കമ്മീഷനെ ഉദ്ധരിച്ച് മലയാളം വിക്കിപീഡിയ.',
                })}
              </p>
            </div>
            <Pill href="https://lsgkerala.gov.in/" tone="outline">{t({ en: 'Local body portal', ml: 'തദ്ദേശ സ്ഥാപന പോർട്ടൽ' })}</Pill>
          </Reveal>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container>
          <SectionHead
            no="C"
            label={{ en: 'Development', ml: 'വികസനം' }}
            plain={{ en: 'How life', ml: 'ജീവിതം' }}
            italic={{ en: 'has changed.', ml: 'മാറിയ വഴികൾ.' }}
          />
          <div className="mt-14 grid gap-8 lg:grid-cols-3">
            {DEV.map((d, i) => (
              <Reveal key={d.title.en} delay={i * 80}>
                <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-bone-2">
                  <Photo src={d.photo} alt="" className="size-full object-cover" />
                </div>
                <Label no={String(i + 1).padStart(2, '0')} className="mt-5 text-ink-faint">{t(d.title)}</Label>
                <p className="mt-3 leading-relaxed text-ink-soft">{t(d.body)}</p>
              </Reveal>
            ))}
          </div>
          <div className="mt-16">
            <StatRow
              items={[
                { value: '31,622', label: { en: 'Chapparappadava GP', ml: 'ചപ്പാരപ്പടവ് ഗ്രാ.പ.' }, note: { en: 'population, Census 2011', ml: 'ജനസംഖ്യ, 2011' } },
                { value: '92.8%', label: { en: 'Literacy', ml: 'സാക്ഷരത' }, note: { en: 'Chapparappadava GP, 2011', ml: 'ചപ്പാരപ്പടവ്, 2011' } },
                { value: '9,448', label: { en: 'Eramam village', ml: 'എരമം വില്ലേജ്' }, note: { en: 'population, Census 2011', ml: 'ജനസംഖ്യ, 2011' } },
                { value: '≈70%', label: { en: 'Farmers', ml: 'കർഷകർ' }, note: { en: 'share of people, panchayat profile', ml: 'പഞ്ചായത്ത് പ്രൊഫൈൽ' } },
              ]}
            />
          </div>
        </Container>
      </section>

      <LimeCta
        photo="onam-pookalam-group"
        kicker={{ en: 'Edakkom abroad', ml: 'പ്രവാസി എടക്കോം' }}
        plain={{ en: 'Wherever you live now,', ml: 'ഇന്ന് എവിടെയായാലും,' }}
        italic={{ en: 'this is still home.', ml: 'ഇതുതന്നെ നാട്.' }}
        cta={{ en: 'Share your story', ml: 'നിങ്ങളുടെ കഥ പങ്കുവെക്കൂ' }}
      />
    </>
  );
}
