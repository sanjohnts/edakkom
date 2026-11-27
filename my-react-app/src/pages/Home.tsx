import { useState, type FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useLang } from '../lib/i18n';
import { useSeo } from '../lib/seo';
import { AERIAL, AERIAL_CREDIT, AERIAL_MOBILE, FALLBACK_HERO, img, mid } from '../lib/images';
import { HERO_PLACEHOLDER } from '../data/hero-placeholder';
import { PHOTOS, photoById } from '../data/photos';
import { NEWS, PAIRS } from '../data/culture';
import { DIRECTORY, LIBRARIES, RELIGIOUS } from '../data/places';
import { Container, Headline, Label, Photo, Pill, Reveal } from '../components/ui';
import { BeforeAfter, CardGrid, LimeCta, PhotoCarousel, SectionHead, SplitPanel, StatRow, Steps } from '../components/sections';
import { AdArea } from '../components/AdArea';
import { WeatherCard, WeatherChip } from '../components/Weather';

function HeroDisplay() {
  const { t, lang } = useLang();
  const blurb = t({
    en: 'Churches, kavus and mosques, a busy junction and green laterite hills — the story of a North Malabar town.',
    ml: 'പള്ളികളും കാവുകളും മസ്ജിദുകളും, തിരക്കുള്ള കവലയും പച്ചപ്പുള്ള ചെങ്കൽക്കുന്നുകളും — ഒരു ഉത്തര മലബാർ പട്ടണത്തിന്റെ കഥ.',
  });
  // On phones the h1 is a single column (flex + `contents` on the inner
  // span), ordered so the sentence reads whole before the short blurb.
  if (lang === 'ml') {
    return (
      <h1 className="display rise flex flex-col sm:block">
        <span className="order-1 block text-[clamp(3.4rem,13vw,8.4rem)] leading-[1.05]">എടക്കോം</span>
        <span className="contents sm:mt-2 sm:grid sm:grid-cols-[minmax(0,18rem)_1fr] sm:items-end sm:gap-6">
          <span className="order-4 mt-6 max-w-xs font-sans text-[0.95rem] leading-relaxed text-ivory/85 sm:order-1 sm:mt-0">{blurb}</span>
          <em className="order-2 mt-2 text-[clamp(1.75rem,5.4vw,3.4rem)] leading-tight sm:order-2 sm:mt-0">ഉത്തര മലബാറിലെ</em>
        </span>
        <span className="order-3 mt-1 block text-[clamp(2.2rem,8vw,5.2rem)] leading-[1.1] sm:pl-[18rem]">ഒരു പട്ടണം.</span>
      </h1>
    );
  }
  return (
    <h1 className="display rise flex flex-col sm:block">
      <span className="order-1 block text-[clamp(3.2rem,15vw,9.6rem)] uppercase">Edakkom</span>
      <span className="contents sm:mt-3 sm:grid sm:grid-cols-[minmax(0,17rem)_1fr] sm:items-end sm:gap-6">
        <span className="order-4 mt-6 max-w-xs font-sans text-[0.95rem] leading-relaxed text-ivory/85 sm:order-1 sm:mt-0">{blurb}</span>
        <em className="order-2 mt-3 text-[clamp(2.1rem,6.5vw,4.4rem)] leading-none sm:order-2 sm:mt-0">a town in</em>
      </span>
      <span className="order-3 mt-2 block text-[clamp(2.9rem,12vw,7.6rem)] uppercase sm:pl-[17rem]">Malabar.</span>
    </h1>
  );
}

function ShareForm() {
  const { t } = useLang();
  const navigate = useNavigate();
  const [type, setType] = useState('photo');
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    // Hand the details over in router state, never in the URL: page URLs are
    // recorded by Google Analytics, and names and phone numbers must not be.
    navigate('/contribute', { state: { name: String(d.get('name') || ''), contact: String(d.get('contact') || ''), type } });
  };
  const field = 'glass w-full rounded-full px-5 pt-6 pb-2.5 text-[0.95rem] text-ivory placeholder:text-ivory/45 outline-none focus:border-ivory/60';
  return (
    <form onSubmit={onSubmit} className="w-full max-w-md space-y-3">
      {[
        { name: 'name', label: { en: 'Your name', ml: 'നിങ്ങളുടെ പേര്' }, ph: { en: 'Full name', ml: 'മുഴുവൻ പേര്' } },
        { name: 'contact', label: { en: 'Phone or email', ml: 'ഫോൺ / ഇമെയിൽ' }, ph: { en: 'Kept private', ml: 'സ്വകാര്യമായി സൂക്ഷിക്കും' } },
      ].map((f) => (
        <label key={f.name} className="relative block">
          <span className="pointer-events-none absolute top-2 left-5 z-10 text-[0.7rem] text-ivory/60">{t(f.label)}</span>
          <input name={f.name} placeholder={t(f.ph)} className={field} />
        </label>
      ))}
      <label className="relative block">
        <span className="pointer-events-none absolute top-2 left-5 z-10 text-[0.7rem] text-ivory/60">{t({ en: 'What are you sharing?', ml: 'എന്താണ് പങ്കുവെക്കുന്നത്?' })}</span>
        <select value={type} onChange={(e) => setType(e.target.value)} className={`${field} appearance-none`}>
          <option value="photo" className="text-ink">{t({ en: 'An old photograph', ml: 'പഴയ ഫോട്ടോ' })}</option>
          <option value="story" className="text-ink">{t({ en: 'A story or memory', ml: 'കഥ / ഓർമ' })}</option>
          <option value="place" className="text-ink">{t({ en: 'A place or institution', ml: 'സ്ഥലം / സ്ഥാപനം' })}</option>
          <option value="correction" className="text-ink">{t({ en: 'A correction', ml: 'തിരുത്ത്' })}</option>
        </select>
        <span className="pointer-events-none absolute top-1/2 right-5 -translate-y-1/2 text-ivory/70">⌄</span>
      </label>
      <Pill type="submit" tone="ivory" full className="!mt-5">{t({ en: 'Continue to share', ml: 'തുടർന്ന് പങ്കുവെക്കാം' })}</Pill>
      <p className="pl-5 text-xs text-ivory/55">{t({ en: 'Your contact is never published.', ml: 'നിങ്ങളുടെ ഫോൺ/ഇമെയിൽ പ്രസിദ്ധീകരിക്കില്ല.' })}</p>
    </form>
  );
}

export default function Home() {
  useSeo('/');
  const { t, lang } = useLang();
  const culture = ['theyyam-night-fire', 'theyyam-shrine-day', 'karkidaka-theyyam-paddy', 'theyyam-pair-chenda', 'floating-pookalam', 'theyyam-fire-sparks']
    .map((id) => photoById(id)!)
    .filter(Boolean);
  const pair = PAIRS[0];
  const [heroOk, setHeroOk] = useState(true);
  const count = (en: string) => DIRECTORY.filter((d) => d.group.en === en).length;

  return (
    <>
      {/* ——— Hero card ——— */}
      <section className="p-3 sm:p-4">
        <div
          className="relative flex min-h-[calc(100svh-2rem)] flex-col justify-end overflow-hidden rounded-[var(--radius-card)] bg-coal bg-cover bg-[55%_center] text-ivory"
          // Blurred 1 KB preview: shows the photo's colours instantly while the real one loads.
          style={heroOk ? { backgroundImage: `url(${HERO_PLACEHOLDER})` } : undefined}
        >
          {heroOk ? (
            <picture>
              {/* Phones get a tall crop centred on the church (~110 KB instead of 450 KB). */}
              <source media="(max-width: 640px)" srcSet={AERIAL_MOBILE} />
              <source media="(max-width: 1023px)" srcSet={mid(AERIAL)} />
              <img
                src={img(AERIAL)}
                onError={() => setHeroOk(false)}
                alt={t({ en: 'Edakkom from above', ml: 'ആകാശത്തു നിന്ന് എടക്കോം' })}
                {...{ fetchpriority: 'high' }}
                className="cinematic olive-tone absolute inset-y-0 left-0 h-full w-full object-cover lg:w-[134%] lg:max-w-none lg:object-[50%_58%]"
              />
            </picture>
          ) : (
            <img
              src={img(FALLBACK_HERO)}
              alt={t({ en: 'Edakkom from above', ml: 'ആകാശത്തു നിന്ന് എടക്കോം' })}
              className="cinematic olive-tone absolute inset-y-0 left-0 h-full w-full object-cover"
            />
          )}
          {heroOk && AERIAL_CREDIT && (
            <p className="absolute right-5 bottom-4 z-10 text-[0.68rem] text-ivory/70">
              {t({ en: 'Photo', ml: 'ഫോട്ടോ' })}: {AERIAL_CREDIT}
            </p>
          )}
          <div className="absolute inset-0 bg-gradient-to-r from-coal/75 via-coal/35 to-coal/10" />
          <div className="absolute inset-0 bg-gradient-to-t from-coal/85 via-coal/30 to-coal/40 sm:from-coal/60 sm:via-transparent" />
          <Container className="relative pt-28 pb-10 sm:pb-14">
            <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-3">
              <p className="label text-ivory/80">{t({ en: 'Kannur · Taliparamba · PIN 670581', ml: 'കണ്ണൂർ · തളിപ്പറമ്പ് · 670581' })}</p>
              <WeatherChip />
            </div>
            <div className="mt-6">
              <HeroDisplay />
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Pill to="/history" tone="ivory">{t({ en: 'Explore the town', ml: 'പട്ടണം അറിയാം' })}</Pill>
              <Pill to="/gallery" tone="outline-light">{t({ en: 'See old photos', ml: 'പഴയ ചിത്രങ്ങൾ' })}</Pill>
            </div>
          </Container>
        </div>
      </section>

      {/* ——— Discover ——— */}
      <section id="explore" className="py-20 sm:py-28">
        <Container>
          <SectionHead
            plain={{ en: 'Discover', ml: 'എടക്കോമിനെ' }}
            italic={{ en: 'Edakkom.', ml: 'അറിയാം.' }}
            side={{
              en: 'History, places, culture and the people of the town — choose where you want to begin.',
              ml: 'ചരിത്രം, സ്ഥലങ്ങൾ, സംസ്കാരം, നാട്ടുകാർ — എവിടെ നിന്ന് തുടങ്ങണമെന്ന് തിരഞ്ഞെടുക്കൂ.',
            }}
          />
          <div className="mt-14">
            <CardGrid
              items={[
                { photo: 'old-paddy-field-hut', to: '/history', title: { en: 'History & timeline', ml: 'ചരിത്രവും കാലരേഖയും' }, caption: { en: 'Kolathunadu, settlers, freedom fighters, a new panchayat', ml: 'കോലത്തുനാട്, കുടിയേറ്റം, സ്വാതന്ത്ര്യസമരം, പുതിയ പഞ്ചായത്ത്' } },
                { photo: 'church-facade-statue', to: '/religious-places', title: { en: 'Places of worship', ml: 'ആരാധനാലയങ്ങൾ' }, caption: { en: `${RELIGIOUS.length} churches, temples and mosques`, ml: `${RELIGIOUS.length} പള്ളികൾ, ക്ഷേത്രങ്ങൾ, മസ്ജിദുകൾ` } },
                { photo: 'theyyam-night-fire', to: '/culture', title: { en: 'Culture & tradition', ml: 'സംസ്കാരവും പാരമ്പര്യവും' }, caption: { en: 'Theyyam, Onam, feasts and nerchas', ml: 'തെയ്യം, ഓണം, പെരുന്നാൾ, നേർച്ച' } },
                { photo: 'old-classroom-malayalam', to: '/education', title: { en: 'Schools & libraries', ml: 'സ്കൂളുകളും വായനശാലകളും' }, caption: { en: 'Where the town learns and reads', ml: 'പട്ടണം പഠിക്കുന്ന, വായിക്കുന്ന ഇടങ്ങൾ' } },
                { photo: 'old-road-roller', to: '/old-and-new', title: { en: 'Old vs new', ml: 'അന്നും ഇന്നും' }, caption: { en: 'Then and now, side by side', ml: 'പഴയതും പുതിയതും ഒപ്പത്തിനൊപ്പം' } },
                { photo: 'nature-forest-stream', to: '/geography', title: { en: 'Map & surroundings', ml: 'മാപ്പും ചുറ്റുപാടും' }, caption: { en: 'Roads, rivers, hills and neighbouring places', ml: 'റോഡുകൾ, പുഴകൾ, കുന്നുകൾ, അയൽപ്രദേശങ്ങൾ' } },
              ]}
            />
          </div>
        </Container>
      </section>

      {/* ——— At a glance ——— */}
      <section className="pb-20 sm:pb-28">
        <Container>
          <SectionHead
            plain={{ en: 'The town', ml: 'പട്ടണം' }}
            italic={{ en: 'at a glance.', ml: 'ഒറ്റനോട്ടത്തിൽ.' }}
            side={{
              en: 'Edakkom is a ward of Chapparappadava Grama Panchayat in Taliparamba taluk, on the road from Chapparappadava to Kuttoor.',
              ml: 'തളിപ്പറമ്പ് താലൂക്കിലെ ചപ്പാരപ്പടവ് ഗ്രാമപഞ്ചായത്തിലെ ഒരു വാർഡാണ് എടക്കോം — ചപ്പാരപ്പടവിൽ നിന്ന് കുറ്റൂരിലേക്കുള്ള റോഡിൽ.',
            }}
          />
          <div className="mt-14">
            <StatRow
              items={[
                { value: '670581', label: { en: 'PIN code', ml: 'പിൻ കോഡ്' }, note: { en: 'Edakkom branch post office', ml: 'എടക്കോം ബ്രാഞ്ച് പോസ്റ്റ് ഓഫീസ്' } },
                { value: '19', label: { en: 'Ward number', ml: 'വാർഡ് നമ്പർ' }, note: { en: 'Chapparappadava GP, from 2025', ml: 'ചപ്പാരപ്പടവ് ഗ്രാ.പ., 2025 മുതൽ' } },
                { value: '≈14 km', label: { en: 'to Taliparamba', ml: 'തളിപ്പറമ്പിലേക്ക്' }, note: { en: 'taluk town', ml: 'താലൂക്ക് പട്ടണം' } },
                { value: String(PHOTOS.length), label: { en: 'photos archived', ml: 'ആർക്കൈവിലെ ഫോട്ടോകൾ' }, note: { en: 'and growing', ml: 'ഇനിയും കൂടും' } },
              ]}
            />
          </div>
          <div className="mt-16">
            <WeatherCard />
          </div>
        </Container>
      </section>

      <AdArea />

      {/* ——— In town today ——— */}
      <SplitPanel photo="health-centre">
        <div>
          <Label className="text-ink-faint">{t({ en: 'In town today', ml: 'ഇന്നത്തെ പട്ടണം' })}</Label>
          <Headline plain={{ en: 'Everything you need,', ml: 'ആവശ്യമുള്ളതെല്ലാം,' }} italic={{ en: 'close to home.', ml: 'വീടിനടുത്ത്.' }} className="mt-4 text-[clamp(2.1rem,3.6vw,3.2rem)]" />
          <ul className="mt-8 divide-y divide-ink/12 border-y border-ink/12">
            {[
              { k: { en: 'Banks', ml: 'ബാങ്കുകൾ' }, v: { en: 'Federal Bank & ATM · KSFE Edakom', ml: 'ഫെഡറൽ ബാങ്ക്, എ.ടി.എം. · കെ.എസ്.എഫ്.ഇ.' }, n: count('Banks & finance') },
              { k: { en: 'Health', ml: 'ആരോഗ്യം' }, v: { en: 'Souhruda Medical Centre (24 h) · dental clinic', ml: 'സൗഹൃദ മെഡിക്കൽ സെന്റർ (24 മ.) · ഡെന്റൽ ക്ലിനിക്' }, n: count('Health') },
              { k: { en: 'Reading', ml: 'വായന' }, v: { en: 'Public Library · Mahatma Vayanashala', ml: 'പബ്ലിക് ലൈബ്രറി · മഹാത്മ വായനശാല' }, n: LIBRARIES.length },
              { k: { en: 'Shops & food', ml: 'കടകൾ, ഭക്ഷണം' }, v: { en: 'Supermarkets · hardware · restaurants', ml: 'സൂപ്പർമാർക്കറ്റുകൾ · ഹാർഡ്‌വെയർ · ഹോട്ടലുകൾ' }, n: count('Shops & supermarkets') + count('Food') },
            ].map((r) => (
              <li key={r.k.en} className="grid grid-cols-[6.5rem_1fr_auto] items-baseline gap-3 py-3.5 text-sm">
                <span className="font-medium">{t(r.k)}</span>
                <span className="text-ink-soft">{t(r.v)}</span>
                <span className="headline text-xl tabular-nums">{r.n}</span>
              </li>
            ))}
          </ul>
        </div>
        <Pill to="/directory" className="self-start">{t({ en: 'Open the town directory', ml: 'ഡയറക്ടറി തുറക്കാം' })}</Pill>
      </SplitPanel>

      {/* ——— Culture ——— */}
      <PhotoCarousel photos={culture} no="" label={{ en: 'Culture & tradition', ml: 'സംസ്കാരം' }} plain={{ en: 'Shaped by fire', ml: 'തീയും താളവും' }} italic={{ en: 'and faith.', ml: 'വിശ്വാസവും.' }} />

      {/* ——— Old vs new ——— */}
      <section className="pb-20 sm:pb-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:items-center">
            <Reveal>
              <Headline plain={{ en: 'Then and now,', ml: 'അന്നും ഇന്നും,' }} italic={{ en: 'side by side.', ml: 'ഒപ്പത്തിനൊപ്പം.' }} className="text-[clamp(2.3rem,4.6vw,4rem)]" />
              <p className="mt-6 max-w-md leading-relaxed text-ink-soft">{t(pair.note)}</p>
              <p className="mt-3 max-w-md text-sm text-ink-faint">
                {t({ en: 'Drag the slider to compare. Send us your old photos so we can match them with Edakkom today.', ml: 'താരതമ്യം ചെയ്യാൻ സ്ലൈഡർ നീക്കൂ. ഇന്നത്തെ എടക്കോമുമായി ചേർത്തുവെക്കാൻ പഴയ ഫോട്ടോകൾ അയക്കൂ.' })}
              </p>
              <Pill to="/old-and-new" className="mt-8">{t({ en: 'All comparisons', ml: 'എല്ലാ താരതമ്യങ്ങളും' })}</Pill>
            </Reveal>
            <Reveal delay={120}>
              <BeforeAfter before={pair.before} after={pair.after} beforeLabel={t(pair.beforeLabel)} afterLabel={t(pair.afterLabel)} alt={t(pair.title)} />
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ——— How it works ——— */}
      <section className="pb-12">
        <Container>
          <Reveal>
            <Headline plain={{ en: 'How to add', ml: 'ആർക്കൈവിലേക്ക്' }} italic={{ en: 'to the archive.', ml: 'എങ്ങനെ ചേർക്കാം.' }} className="text-[clamp(2.3rem,5vw,4.3rem)]" />
          </Reveal>
          <div className="mt-12">
            <Steps
              items={[
                { title: { en: 'Find an old photo', ml: 'പഴയ ഫോട്ടോ കണ്ടെത്തൂ' }, body: { en: 'A wedding, a school day, a festival, the old road — anything from Edakkom.', ml: 'കല്യാണം, സ്കൂൾ ദിനം, ഉത്സവം, പഴയ വഴി — എടക്കോമിൽ നിന്നുള്ള എന്തും.' } },
                { title: { en: 'Tell us its story', ml: 'അതിന്റെ കഥ പറയൂ' }, body: { en: 'Who is in it, where and when it was taken, and who took it.', ml: 'ആരൊക്കെ, എവിടെ, എപ്പോൾ, ആര് എടുത്തു.' } },
                { title: { en: 'It joins the archive', ml: 'അത് ആർക്കൈവിലെത്തുന്നു' }, body: { en: 'We check it, credit you by name and add it to the town’s memory.', ml: 'പരിശോധിച്ച്, നിങ്ങളുടെ പേരോടെ നാടിന്റെ ഓർമയിൽ ചേർക്കും.' } },
              ]}
            />
          </div>
          <Reveal className="mt-10">
            <Pill to="/contribute">{t({ en: 'Start sharing', ml: 'പങ്കുവെച്ച് തുടങ്ങാം' })}</Pill>
          </Reveal>
        </Container>
      </section>

      {/* ——— Share card with form ——— */}
      <LimeCta
        photo="karkidaka-theyyam-paddy"
        kicker={{ en: 'Tell us what you remember about Edakkom. We will help you turn it into a page of the town’s history.', ml: 'എടക്കോമിനെക്കുറിച്ച് ഓർക്കുന്നത് പറയൂ. അത് പട്ടണത്തിന്റെ ചരിത്രത്തിലെ ഒരു താളാക്കാൻ ഞങ്ങൾ സഹായിക്കാം.' }}
        plain={{ en: 'Share', ml: 'നിങ്ങളുടെ' }}
        italic={{ en: 'your story.', ml: 'കഥ പങ്കുവെക്കൂ.' }}
        cta={{ en: 'Share', ml: 'പങ്കുവെക്കൂ' }}
      >
        <ShareForm />
      </LimeCta>

      {/* ——— News ——— */}
      <section className="pt-8 pb-12">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <Reveal>
              <Headline plain={{ en: 'News from', ml: 'നാട്ടിലെ' }} italic={{ en: 'the town.', ml: 'വിശേഷങ്ങൾ.' }} className="text-[clamp(2.2rem,4.4vw,3.8rem)]" />
            </Reveal>
            <Pill to="/news" tone="outline">{t({ en: 'All news', ml: 'എല്ലാ വാർത്തകളും' })}</Pill>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {NEWS.slice(0, 3).map((n, i) => (
              <Reveal key={n.id} delay={i * 80}>
                <Link to="/news" className="group block">
                  <div className="aspect-[4/3] overflow-hidden rounded-[var(--radius-card)] bg-bone-2">
                    {n.photo && <Photo src={n.photo} size="thumb" alt="" className="size-full object-cover transition-transform duration-700 group-hover:scale-[1.04]" />}
                  </div>
                  <p className="label mt-4 text-ink-faint">
                    {t(n.tag)} · {new Date(n.date).toLocaleDateString(lang === 'ml' ? 'ml-IN' : 'en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
                  </p>
                  <p className="headline mt-2 text-[1.45rem] group-hover:italic">{t(n.title)}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
