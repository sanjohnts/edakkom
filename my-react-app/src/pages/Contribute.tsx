import { useState, type FormEvent } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { useLang, type L } from '../lib/i18n';
import { useSeo } from '../lib/seo';
import { isBackendConnected, PHOTO_BUCKET, supabase } from '../lib/supabase';
import { CONTACT } from '../data/site';
import { Container, Label, Pill, Reveal } from '../components/ui';
import { PageHero } from '../components/sections';

const TYPES: { id: string; label: L }[] = [
  { id: 'photo', label: { en: 'A photograph', ml: 'ഫോട്ടോ' } },
  { id: 'story', label: { en: 'A story or memory', ml: 'കഥ / ഓർമ' } },
  { id: 'person', label: { en: 'A person’s profile', ml: 'വ്യക്തിയുടെ പ്രൊഫൈൽ' } },
  { id: 'place', label: { en: 'A place or institution', ml: 'സ്ഥലം / സ്ഥാപനം' } },
  { id: 'news', label: { en: 'Local news', ml: 'നാട്ടുവാർത്ത' } },
  { id: 'correction', label: { en: 'A correction', ml: 'തിരുത്ത്' } },
];

const MAX_MB = 10;

export default function Contribute() {
  useSeo('/contribute');
  const { t, lang } = useLang();
  // Name and contact arrive from the homepage form in router state (kept out of
  // the URL so analytics never sees them); ?type= alone is fine in a link.
  const prefill = (useLocation().state ?? {}) as { name?: string; contact?: string; type?: string };
  const [params] = useSearchParams();
  const [type, setType] = useState(() => prefill.type || params.get('type') || 'photo');
  const [state, setState] = useState<'idle' | 'sending' | 'done' | 'error'>('idle');
  const [error, setError] = useState('');

  const field = 'w-full rounded-2xl border border-ink/15 bg-paper px-4 py-3 outline-none transition-colors focus:border-ink';

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    if (data.get('website')) return; // spam honeypot
    if (!supabase) return;
    setState('sending');
    setError('');
    try {
      const file = data.get('file') as File | null;
      let storage_path: string | null = null;
      if (file && file.size > 0) {
        if (file.size > MAX_MB * 1024 * 1024) throw new Error(t({ en: `Photo is larger than ${MAX_MB} MB.`, ml: `ഫോട്ടോ ${MAX_MB} MB-യിൽ കൂടുതലാണ്.` }));
        const ext = file.name.split('.').pop()?.toLowerCase() || 'jpg';
        storage_path = `submissions/${crypto.randomUUID()}.${ext}`;
        const up = await supabase.storage.from(PHOTO_BUCKET).upload(storage_path, file, { contentType: file.type });
        if (up.error) throw up.error;
      }
      const ins = await supabase.from('submissions').insert({
        type,
        name: String(data.get('name') || ''),
        contact: String(data.get('contact') || ''),
        title: String(data.get('title') || ''),
        description: String(data.get('description') || ''),
        year: String(data.get('year') || ''),
        location: String(data.get('location') || ''),
        credit_name: data.get('credit') === 'on',
        storage_path,
        language: lang,
      });
      if (ins.error) throw ins.error;
      form.reset();
      setState('done');
    } catch (err) {
      setError(err instanceof Error ? err.message : String(err));
      setState('error');
    }
  }

  return (
    <>
      <PageHero
        no="✦"
        label={{ en: 'Contribute', ml: 'സംഭാവന ചെയ്യൂ' }}
        plain={{ en: 'Share a photo,', ml: 'ഒരു ഫോട്ടോ,' }}
        italic={{ en: 'a story, a memory.', ml: 'ഒരു കഥ, ഒരു ഓർമ.' }}
        intro={{
          en: 'Old photographs, family stories, school memories, festival dates, corrections — everything helps. Every submission is reviewed before it is published.',
          ml: 'പഴയ ഫോട്ടോകൾ, കുടുംബകഥകൾ, സ്കൂൾ ഓർമകൾ, ഉത്സവ തീയതികൾ, തിരുത്തുകൾ — എല്ലാം വിലപ്പെട്ടതാണ്. പ്രസിദ്ധീകരിക്കും മുമ്പ് ഓരോന്നും പരിശോധിക്കും.',
        }}
        photo="old-family-portrait"
      />

      <section className="py-20 sm:py-28">
        <Container className="grid gap-14 lg:grid-cols-[1fr_1.5fr]">
          <Reveal className="space-y-8">
            <div>
              <Label no="01" className="text-ink-faint">{t({ en: 'What we are looking for', ml: 'ഞങ്ങൾ തേടുന്നത്' })}</Label>
              <ul className="prose-edakkom mt-4">
                {[
                  { en: 'Photos from before 2000: homes, roads, schools, weddings, festivals, farming', ml: '2000-ത്തിനു മുമ്പുള്ള ഫോട്ടോകൾ: വീടുകൾ, റോഡുകൾ, സ്കൂളുകൾ, കല്യാണങ്ങൾ, ഉത്സവങ്ങൾ, കൃഷി' },
                  { en: 'How your family came to Edakkom', ml: 'നിങ്ങളുടെ കുടുംബം എടക്കോമിലെത്തിയ കഥ' },
                  { en: 'The origin of the name “Edakkom”', ml: '“എടക്കോം” എന്ന പേരിന്റെ ഉത്ഭവം' },
                  { en: 'Founding years of schools, churches, temples, mosques, clubs', ml: 'സ്കൂളുകൾ, പള്ളികൾ, ക്ഷേത്രങ്ങൾ, മസ്ജിദുകൾ, ക്ലബ്ബുകൾ എന്നിവയുടെ സ്ഥാപിത വർഷം' },
                  { en: 'Corrections to anything on this site', ml: 'ഈ സൈറ്റിലെ ഏതു വിവരത്തിനും തിരുത്ത്' },
                ].map((x) => (
                  <li key={x.en}>{t(x)}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl bg-paper p-6">
              <Label no="02" className="text-ink-faint">{t({ en: 'Your privacy', ml: 'നിങ്ങളുടെ സ്വകാര്യത' })}</Label>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                {t({
                  en: 'Your phone or email is used only to contact you about your submission and is never published. Photos of people are published only with consent. You can ask us to remove anything at any time.',
                  ml: 'നിങ്ങളുടെ ഫോൺ / ഇമെയിൽ സമർപ്പണത്തെക്കുറിച്ച് ബന്ധപ്പെടാൻ മാത്രം; ഒരിക്കലും പ്രസിദ്ധീകരിക്കില്ല. ആളുകളുടെ ഫോട്ടോകൾ സമ്മതത്തോടെ മാത്രം. എപ്പോൾ വേണമെങ്കിലും നീക്കം ചെയ്യാൻ ആവശ്യപ്പെടാം.',
                })}
              </p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            {!isBackendConnected && (
              <div className="mb-8 rounded-2xl border border-laterite/30 bg-laterite/5 p-5 text-sm leading-relaxed">
                <p className="font-medium text-laterite">{t({ en: 'Online submissions are being set up.', ml: 'ഓൺലൈൻ സമർപ്പണം തയ്യാറായിക്കൊണ്ടിരിക്കുന്നു.' })}</p>
                <p className="mt-1 text-ink-soft">
                  {CONTACT.whatsapp || CONTACT.email
                    ? t({ en: 'Until then, please send your photos and stories directly:', ml: 'അതുവരെ ഫോട്ടോകളും കഥകളും നേരിട്ട് അയക്കൂ:' })
                    : t({ en: 'Please check back soon.', ml: 'ഉടൻ വീണ്ടും സന്ദർശിക്കൂ.' })}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {CONTACT.whatsapp && <Pill href={`https://wa.me/${CONTACT.whatsapp}`} tone="coal">WhatsApp</Pill>}
                  {CONTACT.email && <Pill href={`mailto:${CONTACT.email}`} tone="coal">{CONTACT.email}</Pill>}
                </div>
              </div>
            )}

            {state === 'done' ? (
              <div className="rounded-2xl bg-lime p-10 text-center">
                <p className="headline text-4xl">{t({ en: 'Thank you.', ml: 'നന്ദി.' })}</p>
                <p className="mx-auto mt-3 max-w-md">
                  {t({ en: 'Your contribution has reached us. We will review it and may contact you before publishing.', ml: 'നിങ്ങളുടെ സംഭാവന ലഭിച്ചു. പരിശോധിച്ച ശേഷം, പ്രസിദ്ധീകരിക്കും മുമ്പ് ബന്ധപ്പെട്ടേക്കാം.' })}
                </p>
                <Pill onClick={() => setState('idle')} tone="coal" className="mt-6">{t({ en: 'Send another', ml: 'മറ്റൊന്ന് അയക്കൂ' })}</Pill>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-6">
                <fieldset>
                  <legend className="label text-ink-faint">{t({ en: 'What are you sharing?', ml: 'എന്താണ് പങ്കുവെക്കുന്നത്?' })}</legend>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {TYPES.map((x) => (
                      <button
                        type="button"
                        key={x.id}
                        onClick={() => setType(x.id)}
                        aria-pressed={type === x.id}
                        className={`label rounded-full border px-3.5 py-2 transition-colors ${type === x.id ? 'border-ink bg-ink text-bone' : 'border-ink/20 hover:border-ink'}`}
                      >
                        {t(x.label)}
                      </button>
                    ))}
                  </div>
                </fieldset>

                <div className="grid gap-6 sm:grid-cols-2">
                  <label className="block">
                    <span className="label text-ink-faint">{t({ en: 'Your name', ml: 'നിങ്ങളുടെ പേര്' })} *</span>
                    <input name="name" required defaultValue={prefill.name ?? ''} className={`${field} mt-2`} autoComplete="name" />
                  </label>
                  <label className="block">
                    <span className="label text-ink-faint">{t({ en: 'Phone or email (private)', ml: 'ഫോൺ / ഇമെയിൽ (സ്വകാര്യം)' })} *</span>
                    <input name="contact" required defaultValue={prefill.contact ?? ''} className={`${field} mt-2`} />
                  </label>
                </div>

                <label className="block">
                  <span className="label text-ink-faint">{t({ en: 'Title', ml: 'തലക്കെട്ട്' })} *</span>
                  <input name="title" required className={`${field} mt-2`} placeholder={t({ en: 'e.g. Our tharavadu in the 1970s', ml: 'ഉദാ: 1970-കളിലെ ഞങ്ങളുടെ തറവാട്' })} />
                </label>

                <label className="block">
                  <span className="label text-ink-faint">{t({ en: 'Tell us more', ml: 'വിശദമായി പറയൂ' })} *</span>
                  <textarea name="description" required rows={6} className={`${field} mt-2`} placeholder={t({ en: 'Who, what, where, when — and who took the photo if you know.', ml: 'ആര്, എന്ത്, എവിടെ, എപ്പോൾ — അറിയാമെങ്കിൽ ഫോട്ടോ എടുത്തത് ആരെന്നും.' })} />
                </label>

                <div className="grid gap-6 sm:grid-cols-2">
                  <label className="block">
                    <span className="label text-ink-faint">{t({ en: 'Year or decade', ml: 'വർഷം / ദശകം' })}</span>
                    <input name="year" className={`${field} mt-2`} placeholder="1985 / 1970s" />
                  </label>
                  <label className="block">
                    <span className="label text-ink-faint">{t({ en: 'Place in Edakkom', ml: 'എടക്കോമിലെ സ്ഥലം' })}</span>
                    <input name="location" className={`${field} mt-2`} />
                  </label>
                </div>

                <label className="block">
                  <span className="label text-ink-faint">{t({ en: `Photo (JPG/PNG, up to ${MAX_MB} MB)`, ml: `ഫോട്ടോ (JPG/PNG, ${MAX_MB} MB വരെ)` })}</span>
                  <input name="file" type="file" accept="image/*" className={`${field} mt-2 file:mr-4 file:rounded-full file:border-0 file:bg-ink file:px-4 file:py-2 file:text-bone`} />
                </label>

                <input name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />

                <div className="space-y-3 rounded-2xl bg-paper p-5 text-sm">
                  <label className="flex gap-3">
                    <input type="checkbox" required className="mt-1 accent-ink" />
                    <span>{t({ en: 'I own this photo/story or have permission from its owner to share it. *', ml: 'ഈ ഫോട്ടോ/കഥ എന്റേതാണ്, അല്ലെങ്കിൽ ഉടമസ്ഥന്റെ അനുമതിയുണ്ട്. *' })}</span>
                  </label>
                  <label className="flex gap-3">
                    <input type="checkbox" required className="mt-1 accent-ink" />
                    <span>{t({ en: 'People shown have agreed to it being published (or their family has). *', ml: 'ചിത്രത്തിലുള്ളവർ (അല്ലെങ്കിൽ കുടുംബം) പ്രസിദ്ധീകരിക്കാൻ സമ്മതിച്ചിട്ടുണ്ട്. *' })}</span>
                  </label>
                  <label className="flex gap-3">
                    <input name="credit" type="checkbox" defaultChecked className="mt-1 accent-ink" />
                    <span>{t({ en: 'Credit me by name on the website.', ml: 'വെബ്സൈറ്റിൽ എന്റെ പേര് ചേർക്കാം.' })}</span>
                  </label>
                </div>

                {state === 'error' && <p className="rounded-2xl bg-laterite/10 p-4 text-sm text-laterite">{error || t({ en: 'Something went wrong. Please try again.', ml: 'എന്തോ പിശക് സംഭവിച്ചു. വീണ്ടും ശ്രമിക്കൂ.' })}</p>}

                <button
                  type="submit"
                  disabled={!isBackendConnected || state === 'sending'}
                  className="label flex w-full items-center justify-between rounded-full bg-coal px-6 py-4 text-bone transition-colors hover:bg-coal-3 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  {state === 'sending' ? t({ en: 'Sending…', ml: 'അയക്കുന്നു…' }) : t({ en: 'Send to the archive', ml: 'ആർക്കൈവിലേക്ക് അയക്കൂ' })}
                  <span className="text-lime">↗</span>
                </button>
              </form>
            )}
          </Reveal>
        </Container>
      </section>
    </>
  );
}
