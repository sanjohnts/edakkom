import { useEffect, useState, type ReactNode } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useLang, type L } from '../lib/i18n';
import { NAV } from '../data/site';
import { ArrowDot, Container, Pill } from './ui';

const PRIMARY: { path: string; label: L }[] = [
  { path: '/history', label: { en: 'History', ml: 'ചരിത്രം' } },
  { path: '/geography', label: { en: 'Places', ml: 'സ്ഥലങ്ങൾ' } },
  { path: '/culture', label: { en: 'Culture', ml: 'സംസ്കാരം' } },
  { path: '/gallery', label: { en: 'Gallery', ml: 'ചിത്രങ്ങൾ' } },
  { path: '/directory', label: { en: 'Directory', ml: 'ഡയറക്ടറി' } },
];

function Wordmark({ light }: { light?: boolean }) {
  const { lang } = useLang();
  return (
    <Link to="/" className={`focus-ring flex items-baseline gap-2 ${light ? 'text-ivory' : 'text-ink'}`} aria-label="edakkom.com home">
      <span className="font-serif text-[1.65rem] leading-none tracking-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
        Edakkom
      </span>
      {lang === 'ml' && <span className="hidden text-sm opacity-70 sm:inline" style={{ fontFamily: 'Noto Serif Malayalam, serif' }}>എടക്കോം</span>}
    </Link>
  );
}

function LangToggle({ light }: { light?: boolean }) {
  const { lang, setLang } = useLang();
  return (
    <div className={`flex items-center rounded-full p-1 text-xs font-medium ${light ? 'glass text-ivory' : 'border border-ink/15 text-ink'}`} role="group" aria-label="Language">
      {(['ml', 'en'] as const).map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          aria-pressed={lang === l}
          className={`min-w-10 rounded-full px-2.5 py-2 transition-colors ${lang === l ? (light ? 'bg-ivory text-coal' : 'bg-coal text-ivory') : 'opacity-75 hover:opacity-100'}`}
        >
          {l === 'ml' ? 'മല' : 'EN'}
        </button>
      ))}
    </div>
  );
}

function Header({ onMenu }: { onMenu: () => void }) {
  const { t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 60);
    on();
    window.addEventListener('scroll', on, { passive: true });
    return () => window.removeEventListener('scroll', on);
  }, []);
  const light = !scrolled;
  return (
    <header className="fixed inset-x-0 top-0 z-40 px-3 pt-3 sm:px-4 sm:pt-4">
      <div
        className={`mx-auto flex h-16 max-w-[1480px] items-center justify-between gap-3 rounded-full px-4 transition-all duration-500 sm:px-6 ${
          scrolled ? 'bg-bone/85 shadow-[0_8px_30px_-12px_rgba(24,26,16,0.25)] backdrop-blur-md' : 'bg-transparent'
        }`}
      >
        <Wordmark light={light} />

        <nav aria-label="Primary" className={`hidden items-center gap-1 rounded-full p-1 lg:flex ${light ? 'glass' : 'border border-ink/12 bg-paper/70'}`}>
          {PRIMARY.map((p) => (
            <NavLink
              key={p.path}
              to={p.path}
              className={({ isActive }) =>
                `rounded-full px-4 py-2 text-sm transition-colors ${
                  isActive ? (light ? 'bg-ivory text-coal' : 'bg-coal text-ivory') : light ? 'text-ivory/85 hover:text-ivory' : 'text-ink/75 hover:text-ink'
                }`
              }
            >
              {t(p.label)}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <span className="hidden md:block">
            <Pill to="/contribute" tone={light ? 'outline-light' : 'outline'} className="!py-1 !pl-4 !text-sm">
              {t({ en: 'Share a memory', ml: 'ഓർമ പങ്കുവെക്കൂ' })}
            </Pill>
          </span>
          <LangToggle light={light} />
          <button
            onClick={onMenu}
            aria-label="Open menu"
            className={`flex size-10 items-center justify-center rounded-full transition-colors ${light ? 'glass text-ivory' : 'bg-coal text-ivory'}`}
          >
            <span className="flex flex-col gap-1.5" aria-hidden>
              <span className="block h-px w-4 bg-current" />
              <span className="block h-px w-4 bg-current" />
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}

function Menu({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { t } = useLang();
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  return (
    <div className={`fixed inset-0 z-50 ${open ? '' : 'pointer-events-none'}`} aria-hidden={!open}>
      <div onClick={onClose} className={`absolute inset-0 bg-coal/50 backdrop-blur-sm transition-opacity duration-500 ${open ? 'opacity-100' : 'opacity-0'}`} />
      <nav
        className={`absolute inset-y-3 right-3 flex w-[calc(100%-1.5rem)] max-w-[500px] flex-col overflow-hidden rounded-[var(--radius-card)] bg-bone text-ink shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.2,0.7,0.2,1)] ${
          open ? 'translate-x-0' : 'translate-x-[110%]'
        }`}
        aria-label="Main"
      >
        <div className="flex h-16 items-center justify-between px-6">
          <span className="label text-ink-faint">{t({ en: 'Explore the town', ml: 'പട്ടണം അറിയാം' })}</span>
          <button onClick={onClose} className="rounded-full border border-ink/20 px-4 py-2 text-sm hover:bg-coal hover:text-ivory">
            {t({ en: 'Close', ml: 'അടയ്ക്കുക' })} ✕
          </button>
        </div>
        <ul className="no-scrollbar flex-1 overflow-y-auto px-6 pb-4">
          {NAV.map((n) => (
            <li key={n.path} className="border-t border-ink/10">
              <NavLink to={n.path} end={n.path === '/'} onClick={onClose} className="group flex items-baseline gap-4 py-2.5">
                {({ isActive }) => (
                  <>
                    <span className="w-5 text-[0.7rem] text-ink-faint">{n.no}</span>
                    <span className={`headline text-[1.55rem] transition-colors ${isActive ? 'italic text-lime-ink' : 'group-hover:text-lime-ink'}`}>{t(n.label)}</span>
                    <span className="ml-auto hidden text-right text-xs text-ink-faint sm:block">{t(n.blurb)}</span>
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="p-4">
          <Link to="/contribute" onClick={onClose} className="group relative block overflow-hidden rounded-2xl text-ivory">
            <img src="/images/thumb/karkidaka-theyyam-paddy.webp" alt="" className="absolute inset-0 size-full object-cover" />
            <span className="absolute inset-0 bg-gradient-to-r from-coal/85 to-coal/30" />
            <span className="relative flex items-center justify-between gap-4 p-5">
              <span>
                <span className="headline block text-xl">{t({ en: 'Have an old photo?', ml: 'പഴയ ഫോട്ടോ ഉണ്ടോ?' })}</span>
                <span className="text-sm text-ivory/75">{t({ en: 'It belongs in the town’s archive.', ml: 'അത് നാടിന്റെ ആർക്കൈവിൽ വേണം.' })}</span>
              </span>
              <ArrowDot tone="light" />
            </span>
          </Link>
        </div>
      </nav>
    </div>
  );
}

function Footer() {
  const { t } = useLang();
  return (
    <footer className="bg-bone text-ink">
      <Container className="pt-20">
        <div className="grid gap-12 border-t border-ink/15 pt-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="font-serif text-4xl" style={{ fontFamily: 'Playfair Display, serif' }}>Edakkom</p>
            <p className="mt-2 text-ink-soft">{t({ en: 'Our town. Our story.', ml: 'നമ്മുടെ പട്ടണം. നമ്മുടെ കഥ.' })}</p>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-ink-faint">
              {t({
                en: 'A permanent digital memory of Edakkom, Taliparamba taluk, Kannur — built with the people of the town.',
                ml: 'കണ്ണൂർ, തളിപ്പറമ്പ് താലൂക്കിലെ എടക്കോമിന്റെ സ്ഥിരമായ ഡിജിറ്റൽ ഓർമ — നാട്ടുകാരോടൊപ്പം ചേർന്ന് നിർമ്മിക്കുന്നത്.',
              })}
            </p>
            <Pill to="/contribute" className="mt-7">{t({ en: 'Share a memory', ml: 'ഓർമ പങ്കുവെക്കൂ' })}</Pill>
          </div>
          {[NAV.slice(0, 7), NAV.slice(7)].map((col, i) => (
            <ul key={i} className="space-y-0.5 text-sm">
              {col.map((n) => (
                <li key={n.path}>
                  <Link to={n.path} className="inline-block py-1.5 text-ink-soft transition-colors hover:text-ink">
                    {t(n.label)}
                  </Link>
                </li>
              ))}
            </ul>
          ))}
        </div>
        <div className="mt-16 overflow-hidden">
          <p className="font-serif text-[clamp(3.6rem,17vw,15rem)] leading-[0.82] tracking-[-0.03em] text-coal" style={{ fontFamily: 'Playfair Display, serif' }}>
            Edakkom<span className="text-lime-ink">.</span>
          </p>
        </div>
        <div className="flex flex-wrap justify-between gap-3 border-t border-ink/15 py-6 text-xs text-ink-faint">
          <span>© {new Date().getFullYear()} edakkom.com</span>
          <span>{t({ en: 'Edakkom · Taliparamba · Kannur · Kerala · 670581', ml: 'എടക്കോം · തളിപ്പറമ്പ് · കണ്ണൂർ · കേരളം · 670581' })}</span>
          <Link to="/about" className="hover:text-ink">{t({ en: 'Sources & verification', ml: 'സ്രോതസ്സുകളും സ്ഥിരീകരണവും' })}</Link>
        </div>
      </Container>
    </footer>
  );
}

export function Layout({ children }: { children: ReactNode }) {
  const [menu, setMenu] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <a href="#main" className="sr-only z-[70] rounded bg-ivory px-3 py-2 focus:not-sr-only focus:fixed focus:left-3 focus:top-3">
        Skip to content
      </a>
      <Header onMenu={() => setMenu(true)} />
      <Menu open={menu} onClose={() => setMenu(false)} />
      <main id="main">{children}</main>
      <Footer />
    </>
  );
}
