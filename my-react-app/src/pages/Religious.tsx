import { useLang } from '../lib/i18n';
import { useSeo } from '../lib/seo';
import { RELIGIOUS, RELIGIOUS_GROUPS } from '../data/places';
import { Container, Label, Reveal } from '../components/ui';
import { LimeCta, PageHero, SectionHead } from '../components/sections';
import { PlaceList } from '../components/PlaceList';

export default function Religious() {
  useSeo('/religious-places');
  const { t } = useLang();
  return (
    <>
      <PageHero
        no="06"
        label={{ en: 'Religious places', ml: 'ആരാധനാലയങ്ങൾ' }}
        plain={{ en: 'Temples, churches', ml: 'ക്ഷേത്രങ്ങളും പള്ളികളും' }}
        italic={{ en: 'and mosques.', ml: 'മസ്ജിദുകളും.' }}
        intro={{
          en: 'Kavus with their Theyyams, Catholic parishes of the settler years, and juma masjids — the places where the communities of Edakkom gather.',
          ml: 'തെയ്യങ്ങളുള്ള കാവുകൾ, കുടിയേറ്റ കാലത്തെ കത്തോലിക്കാ ഇടവകകൾ, ജുമാ മസ്ജിദുകൾ — എടക്കോമിലെ സമൂഹങ്ങൾ ഒത്തുചേരുന്ന ഇടങ്ങൾ.',
        }}
        photo="temple-festival-umbrellas"
      />
      <section className="py-20 sm:py-28">
        <Container>
          <SectionHead
            label={{ en: 'In and around Edakkom', ml: 'എടക്കോമിലും ചുറ്റുപാടും' }}
            plain={{ en: 'Places of', ml: 'ഭക്തിയുടെ' }}
            italic={{ en: 'worship.', ml: 'ഇടങ്ങൾ.' }}
            side={{
              en: `${RELIGIOUS.length} places from Google Maps listings, Malayalam Wikipedia and public directories. Distances are approximate. Each will get its own page with history and festival dates — shared with the committees’ permission.`,
              ml: `ഗൂഗിൾ മാപ്പ്, മലയാളം വിക്കിപീഡിയ, പൊതു ഡയറക്ടറികൾ എന്നിവയിൽ നിന്നുള്ള ${RELIGIOUS.length} ഇടങ്ങൾ. ദൂരങ്ങൾ ഏകദേശമാണ്. ഓരോന്നിനും ചരിത്രവും ഉത്സവ തീയതികളുമുള്ള പേജ് — കമ്മിറ്റികളുടെ അനുമതിയോടെ — തയ്യാറാക്കും.`,
            }}
          />
          <div className="mt-16 space-y-20">
            {RELIGIOUS_GROUPS.map((g, i) => {
              const items = RELIGIOUS.filter((p) => p.group === g.id);
              return (
                <div key={g.id}>
                  <Reveal className="mb-8 flex items-baseline justify-between gap-4 border-b-2 border-coal pb-3">
                    <h2 className="headline text-[clamp(1.8rem,3vw,2.6rem)]">{t(g.label)}</h2>
                    <Label no={String(i + 1).padStart(2, '0')} className="text-ink-faint">{String(items.length)}</Label>
                  </Reveal>
                  <PlaceList places={items} />
                </div>
              );
            })}
          </div>
          <p className="mt-12 max-w-2xl text-sm text-ink-faint">
            {t({
              en: 'Is a place missing, or a name spelled wrongly? Send a correction and we will update the list.',
              ml: 'ഏതെങ്കിലും സ്ഥലം വിട്ടുപോയോ, പേരിൽ തെറ്റുണ്ടോ? തിരുത്ത് അയക്കൂ, പട്ടിക പുതുക്കാം.',
            })}
          </p>
        </Container>
      </section>
      <LimeCta
        photo="theyyam-shrine-day"
        kicker={{ en: 'Committees, parishes and families — send us the history, festival dates and old photos of your place of worship.', ml: 'കമ്മിറ്റികളും ഇടവകകളും കുടുംബങ്ങളും — നിങ്ങളുടെ ആരാധനാലയത്തിന്റെ ചരിത്രവും ഉത്സവ തീയതികളും പഴയ ഫോട്ടോകളും അയക്കൂ.' }}
        plain={{ en: 'Share', ml: 'ചരിത്രം' }}
        italic={{ en: 'its history.', ml: 'പങ്കുവെക്കൂ.' }}
        cta={{ en: 'Send details', ml: 'വിവരങ്ങൾ അയക്കൂ' }}
      />
    </>
  );
}
