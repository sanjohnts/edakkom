import { useLang } from '../lib/i18n';
import { useSeo } from '../lib/seo';
import { TOURISM } from '../data/places';
import { Container, Label, Reveal } from '../components/ui';
import { PageHero, SectionHead, SplitPanel } from '../components/sections';
import { PlaceList } from '../components/PlaceList';

export default function Tourism() {
  useSeo('/tourism');
  const { t } = useLang();
  return (
    <>
      <PageHero
        no="08"
        label={{ en: 'Tourism', ml: 'വിനോദസഞ്ചാരം' }}
        plain={{ en: 'Slow travel', ml: 'ഉത്തര മലബാറിലൂടെ' }}
        italic={{ en: 'in North Malabar.', ml: 'ഒരു സാവധാന യാത്ര.' }}
        intro={{
          en: 'Theyyam nights, river banks, hilltop viewpoints and the temple towns of Taliparamba — all within easy reach of Edakkom.',
          ml: 'തെയ്യരാവുകൾ, പുഴയോരങ്ങൾ, മലമുകളിലെ കാഴ്ചകൾ, തളിപ്പറമ്പിലെ ക്ഷേത്രങ്ങൾ — എല്ലാം എടക്കോമിൽ നിന്ന് എളുപ്പം എത്താവുന്ന ദൂരത്ത്.',
        }}
        photo="theyyam-fire-sparks"
      />

      <section className="py-20 sm:py-28">
        <Container>
          <SectionHead
            no="A"
            label={{ en: 'Places to visit', ml: 'കാണേണ്ട സ്ഥലങ്ങൾ' }}
            plain={{ en: 'Near and', ml: 'അടുത്തും' }}
            italic={{ en: 'a little further.', ml: 'അല്പം അകലെയും.' }}
            side={{
              en: 'Distances marked * are straight-line; road routes are longer. Please respect private land, sacred groves and local customs at every place.',
              ml: '* അടയാളമുള്ളവ നേർരേഖാ ദൂരമാണ്; റോഡ് ദൂരം കൂടുതലായിരിക്കും. സ്വകാര്യ ഭൂമിയെയും കാവുകളെയും നാട്ടാചാരങ്ങളെയും മാനിക്കൂ.',
            }}
          />
          <div className="mt-14">
            <PlaceList places={TOURISM} area="Kannur Kerala" />
          </div>
        </Container>
      </section>

      <SplitPanel photo="theyyam-red-crowd" flip>
        <div>
          <Label no="B" className="text-ink-faint">{t({ en: 'Visiting a Theyyam', ml: 'തെയ്യം കാണാൻ പോകുമ്പോൾ' })}</Label>
          <h2 className="headline mt-5 text-[clamp(2rem,3.4vw,3rem)]">
            {t({ en: 'Watch with', ml: 'ആദരവോടെ' })} <em className="font-serif font-normal italic">{t({ en: 'respect.', ml: 'കാണാം.' })}</em>
          </h2>
          <ul className="prose-edakkom mt-6">
            {[
              { en: 'Theyyam is worship, not a stage show — dress modestly and follow the guidance of the temple committee.', ml: 'തെയ്യം ആരാധനയാണ്, സ്റ്റേജ് ഷോ അല്ല — മാന്യമായി വസ്ത്രം ധരിക്കുക, ക്ഷേത്ര കമ്മിറ്റിയുടെ നിർദേശങ്ങൾ പാലിക്കുക.' },
              { en: 'Keep a safe distance from fire Theyyams and the performers’ path.', ml: 'അഗ്നിത്തെയ്യങ്ങളിൽ നിന്നും കോലധാരിയുടെ വഴിയിൽ നിന്നും സുരക്ഷിത അകലം പാലിക്കുക.' },
              { en: 'Ask before photographing people; avoid flash during rituals.', ml: 'ആളുകളുടെ ഫോട്ടോ എടുക്കും മുമ്പ് അനുവാദം ചോദിക്കുക; ചടങ്ങുകൾക്കിടെ ഫ്ലാഷ് ഒഴിവാക്കുക.' },
              { en: 'Many performances run through the night and peak before dawn.', ml: 'പല തെയ്യങ്ങളും രാത്രി മുഴുവൻ നീളും; പുലർച്ചയോടെ ഉച്ചസ്ഥായിയിലെത്തും.' },
            ].map((x) => (
              <li key={x.en}>{t(x)}</li>
            ))}
          </ul>
        </div>
        <Reveal className="border-t border-ink/15 pt-6">
          <p className="headline text-4xl">{t({ en: 'Oct → May', ml: 'തുലാം → ഇടവം' })}</p>
          <p className="label mt-1 text-ink-faint">{t({ en: 'Theyyam season', ml: 'തെയ്യക്കാലം' })}</p>
        </Reveal>
      </SplitPanel>
    </>
  );
}
