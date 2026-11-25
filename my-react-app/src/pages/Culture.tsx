import { useLang } from '../lib/i18n';
import { useSeo } from '../lib/seo';
import { CULTURE } from '../data/culture';
import { PHOTOS } from '../data/photos';
import { Container, Label, Photo, Reveal, StatusBadge } from '../components/ui';
import { LimeCta, PageHero, PhotoCarousel, SectionHead } from '../components/sections';

export default function Culture() {
  useSeo('/culture');
  const { t } = useLang();
  const withPhoto = CULTURE.filter((c) => c.photo);
  const without = CULTURE.filter((c) => !c.photo);
  return (
    <>
      <PageHero
        no="05"
        label={{ en: 'Culture & tradition', ml: 'സംസ്കാരവും പാരമ്പര്യവും' }}
        plain={{ en: 'Where gods', ml: 'ദൈവങ്ങൾ' }}
        italic={{ en: 'walk among people.', ml: 'മനുഷ്യർക്കിടയിൽ നടക്കുന്നിടം.' }}
        intro={{
          en: 'Theyyam, harvest festivals, church feasts and nerchas — the shared calendar of North Malabar. Edakkom’s own festival dates and family traditions will be added as the community shares them.',
          ml: 'തെയ്യം, വിളവുത്സവങ്ങൾ, പള്ളിപ്പെരുന്നാളുകൾ, നേർച്ചകൾ — ഉത്തര മലബാറിന്റെ പങ്കുവെക്കപ്പെട്ട കലണ്ടർ. എടക്കോമിന്റെ സ്വന്തം ഉത്സവ തീയതികളും കുടുംബ പാരമ്പര്യങ്ങളും നാട്ടുകാർ പങ്കുവെക്കുന്നതനുസരിച്ച് ചേർക്കും.',
        }}
        photo="theyyam-night-fire"
      />

      <section className="py-20 sm:py-28">
        <Container className="space-y-24 sm:space-y-32">
          {withPhoto.map((c, i) => (
            <article key={c.id} className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
              <Reveal className={i % 2 ? 'lg:order-2' : ''}>
                <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-bone-2 sm:aspect-[5/4]">
                  <Photo src={c.photo!} alt={t(c.title)} className="size-full object-cover transition-transform duration-[1.4s] hover:scale-[1.03]" />
                </div>
              </Reveal>
              <Reveal delay={100}>
                <Label no={String(i + 1).padStart(2, '0')} className="text-ink-faint">{c.when ? t(c.when) : t({ en: 'Tradition', ml: 'പാരമ്പര്യം' })}</Label>
                <h2 className="headline mt-4 text-[clamp(2.4rem,4.6vw,4rem)]">{t(c.title)}</h2>
                <p className="mt-6 text-[1.1rem] leading-relaxed text-ink-soft">{t(c.body)}</p>
                <StatusBadge status={c.status} className="mt-6" />
              </Reveal>
            </article>
          ))}
        </Container>
      </section>

      <PhotoCarousel
        photos={PHOTOS.filter((p) => p.category === 'festivals' || p.id === 'old-theyyam-umbrellas')}
        no="—"
        label={{ en: 'In pictures', ml: 'ചിത്രങ്ങളിൽ' }}
        plain={{ en: 'Colour, fire', ml: 'നിറം, തീ,' }}
        italic={{ en: 'and rhythm.', ml: 'താളം.' }}
      />

      <section className="py-20 sm:py-28">
        <Container>
          <SectionHead
            label={{ en: 'More traditions', ml: 'മറ്റു പാരമ്പര്യങ്ങൾ' }}
            plain={{ en: 'Songs, food', ml: 'പാട്ടും രുചിയും' }}
            italic={{ en: 'and childhood.', ml: 'കുട്ടിക്കാലവും.' }}
            side={{ en: 'Share a recipe, a song, a game or a custom your family still keeps.', ml: 'നിങ്ങളുടെ കുടുംബം ഇപ്പോഴും കാത്തുസൂക്ഷിക്കുന്ന ഒരു പാചകക്കുറിപ്പോ പാട്ടോ കളിയോ ആചാരമോ പങ്കുവെക്കൂ.' }}
          />
          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl bg-ink/12 md:grid-cols-2 lg:grid-cols-4">
            {without.map((c, i) => (
              <Reveal key={c.id} delay={i * 60} className="flex flex-col bg-paper p-7">
                <p className="label text-ink-faint">{c.when ? t(c.when) : '—'}</p>
                <h3 className="headline mt-4 text-2xl">{t(c.title)}</h3>
                <p className="mt-3 flex-1 leading-relaxed text-ink-soft">{t(c.body)}</p>
                <StatusBadge status={c.status} className="mt-6 self-start" />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <LimeCta
        photo="theyyam-fire-sparks"
        kicker={{ en: 'Festival calendar', ml: 'ഉത്സവ കലണ്ടർ' }}
        plain={{ en: 'When is the kaliyattam', ml: 'നമ്മുടെ കാവിലെ കളിയാട്ടം' }}
        italic={{ en: 'at our kavu?', ml: 'എന്നാണ്?' }}
        cta={{ en: 'Add a festival date', ml: 'ഉത്സവ തീയതി ചേർക്കൂ' }}
      />
    </>
  );
}
