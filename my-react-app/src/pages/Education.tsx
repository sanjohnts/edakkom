import { useLang } from '../lib/i18n';
import { useSeo } from '../lib/seo';
import { LIBRARIES, SCHOOLS, SCHOOL_PROFILE_FIELDS } from '../data/places';
import { PHOTOS } from '../data/photos';
import { Container, Label, Photo, Pill, Reveal } from '../components/ui';
import { PageHero, SectionHead } from '../components/sections';
import { PlaceList } from '../components/PlaceList';

export default function Education() {
  useSeo('/education');
  const { t } = useLang();
  const archive = PHOTOS.filter((p) => p.category === 'education');
  return (
    <>
      <PageHero
        no="07"
        label={{ en: 'Education', ml: 'വിദ്യാഭ്യാസം' }}
        plain={{ en: 'Where we learned', ml: 'നാം ആദ്യാക്ഷരം' }}
        italic={{ en: 'our first letters.', ml: 'കുറിച്ചയിടങ്ങൾ.' }}
        intro={{
          en: 'Schools, madrasas, colleges and reading rooms in and around Edakkom — with their history, teachers and alumni memories.',
          ml: 'എടക്കോമിലും ചുറ്റുമുള്ള സ്കൂളുകളും മദ്രസകളും കോളേജുകളും വായനശാലകളും — അവയുടെ ചരിത്രവും അധ്യാപകരും പൂർവവിദ്യാർത്ഥികളുടെ ഓർമകളും.',
        }}
        photo="old-classroom-malayalam"
      />

      <section className="py-20 sm:py-28">
        <Container>
          <SectionHead
            no="A"
            label={{ en: 'Institutions', ml: 'സ്ഥാപനങ്ങൾ' }}
            plain={{ en: 'Schools near', ml: 'എടക്കോമിനടുത്തുള്ള' }}
            italic={{ en: 'Edakkom.', ml: 'സ്കൂളുകൾ.' }}
            side={{
              en: 'From public listings, with approximate distances. Details will be verified against the Kerala government’s Sametham School Data Bank and the schools themselves.',
              ml: 'പൊതു ലിസ്റ്റിങ്ങുകളിൽ നിന്ന്, ഏകദേശ ദൂരത്തോടെ. കേരള സർക്കാരിന്റെ സമേതം സ്കൂൾ ഡാറ്റാ ബാങ്കുമായും സ്കൂളുകളുമായും ഒത്തുനോക്കി വിവരങ്ങൾ സ്ഥിരീകരിക്കും.',
            }}
          />
          <div className="mt-14">
            <PlaceList places={SCHOOLS} />
          </div>
        </Container>
      </section>

      <section className="pb-20 sm:pb-28">
        <Container>
          <SectionHead
            no="B"
            label={{ en: 'Libraries & reading rooms', ml: 'ലൈബ്രറികളും വായനശാലകളും' }}
            plain={{ en: 'A town', ml: 'വായിക്കുന്ന' }}
            italic={{ en: 'that reads.', ml: 'പട്ടണം.' }}
            side={{
              en: 'The vayanasala is the heart of a North Malabar town. Edakkom has a Public Library and the Mahatma Vayanashala at its centre, and a women’s library at Kanaramvayal.',
              ml: 'വായനശാലയാണ് ഉത്തര മലബാർ പട്ടണത്തിന്റെ ഹൃദയം. എടക്കോമിന്റെ കേന്ദ്രത്തിൽ പബ്ലിക് ലൈബ്രറിയും മഹാത്മ വായനശാലയും, കണാരംവയലിൽ വനിതാ ലൈബ്രറിയും.',
            }}
          />
          <div className="mt-14">
            <PlaceList places={LIBRARIES} />
          </div>
        </Container>
      </section>

      <section className="mx-3 rounded-[var(--radius-card)] bg-coal py-20 text-ivory sm:mx-4 sm:py-28">
        <Container className="grid gap-14 lg:grid-cols-[1fr_1.3fr]">
          <Reveal>
            <Label no="B" className="text-lime">{t({ en: 'School profiles', ml: 'സ്കൂൾ പ്രൊഫൈലുകൾ' })}</Label>
            <h2 className="headline mt-5 text-[clamp(2.2rem,4vw,3.4rem)]">
              {t({ en: 'Every school,', ml: 'ഓരോ സ്കൂളിനും' })} <em className="font-serif font-normal italic">{t({ en: 'its own story.', ml: 'സ്വന്തം കഥ.' })}</em>
            </h2>
            <p className="mt-6 max-w-md leading-relaxed text-ivory/65">
              {t({
                en: 'Headmasters, teachers, PTA members and alumni — help us build a full profile for each institution.',
                ml: 'പ്രധാനാധ്യാപകർ, അധ്യാപകർ, പി.ടി.എ. അംഗങ്ങൾ, പൂർവവിദ്യാർത്ഥികൾ — ഓരോ സ്ഥാപനത്തിനും പൂർണ പ്രൊഫൈൽ ഒരുക്കാൻ സഹായിക്കൂ.',
              })}
            </p>
            <Pill to="/contribute" tone="ivory" className="mt-8">{t({ en: 'Add school details', ml: 'സ്കൂൾ വിവരങ്ങൾ ചേർക്കൂ' })}</Pill>
          </Reveal>
          <Reveal delay={100}>
            <ol className="border-b border-ivory/12">
              {SCHOOL_PROFILE_FIELDS.map((f, i) => (
                <li key={f.en} className="flex items-baseline gap-5 border-t border-ivory/12 py-4">
                  <span className="font-mono text-xs text-lime">{String(i + 1).padStart(2, '0')}</span>
                  <span className="headline text-xl">{t(f)}</span>
                </li>
              ))}
            </ol>
          </Reveal>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container>
          <SectionHead
            no="C"
            label={{ en: 'From the archive', ml: 'ആർക്കൈവിൽ നിന്ന്' }}
            plain={{ en: 'School days,', ml: 'പഴയ' }}
            italic={{ en: 'long ago.', ml: 'സ്കൂൾ ദിനങ്ങൾ.' }}
            side={{ en: 'Representative photographs of Kerala schools in the early twentieth century.', ml: 'ഇരുപതാം നൂറ്റാണ്ടിന്റെ തുടക്കത്തിലെ കേരളീയ സ്കൂളുകളുടെ മാതൃകാ ചിത്രങ്ങൾ.' }}
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {archive.map((p, i) => (
              <Reveal key={p.id} delay={i * 80}>
                <figure>
                  <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-bone-2">
                    <Photo src={p.src} alt={t(p.title)} className="size-full object-cover" />
                  </div>
                  <figcaption className="mt-3">
                    <p className="headline text-lg">{t(p.title)}</p>
                    <p className="mt-1 text-sm text-ink-soft">{t(p.caption)}</p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
