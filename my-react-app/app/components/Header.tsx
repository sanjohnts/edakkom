import { useEffect, useState } from "react";
import { Link } from "react-router";
import type { Lang } from "~/content";
import { copy } from "~/content";

export function Wordmark({ lang, light }: { lang: Lang; light: boolean }) {
  return (
    <span className="flex items-center gap-2.5">
      <img src="/favicon.svg" alt="" width={34} height={34} className="h-8.5 w-8.5 rounded-lg" />
      <span className="flex flex-col leading-none">
        <span
          className={`font-display text-lg font-semibold ${light ? "text-cream" : "text-forest"}`}
          lang="ml"
        >
          എടക്കോം
        </span>
        <span
          className={`mt-1 text-[0.62rem] font-medium tracking-[0.32em] ${light ? "text-gold-soft" : "text-gold"}`}
          lang="en"
        >
          EDAKKOM
        </span>
      </span>
      <span className="sr-only">{lang === "ml" ? "എടക്കോം ഹോം" : "Edakkom home"}</span>
    </span>
  );
}

export function Header({ lang }: { lang: Lang }) {
  const t = copy[lang].nav;
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const light = !solid && !open;
  const links = [
    { href: "#timeline", label: t.history },
    { href: "#archive", label: t.archive },
    { href: "#places", label: t.places },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        light ? "bg-transparent" : "bg-paper/92 shadow-[0_1px_0_0_var(--color-line)] backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-6 px-5 sm:px-8">
        <Link to={lang === "ml" ? "/" : "/en"} aria-label="Edakkom">
          <Wordmark lang={lang} light={light} />
        </Link>

        <nav aria-label={lang === "ml" ? "പ്രധാന മെനു" : "Main"} className="hidden md:block">
          <ul className="flex items-center gap-8">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className={`text-sm font-medium transition-colors ${
                    light ? "text-cream/90 hover:text-white" : "text-ink/80 hover:text-forest"
                  }`}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to={t.switchHref}
            hrefLang={lang === "ml" ? "en" : "ml"}
            className={`rounded-full px-3 py-1.5 text-sm font-medium ring-1 transition-colors ${
              light
                ? "text-cream ring-cream/40 hover:bg-white/10"
                : "text-forest ring-forest/25 hover:bg-forest/5"
            }`}
          >
            {t.switchLabel}
          </Link>
          <a
            href="#contribute"
            className="hidden rounded-full bg-gold px-4 py-2 text-sm font-semibold text-deep shadow-sm transition-colors hover:bg-gold-soft sm:inline-block"
          >
            {t.contribute}
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className={`inline-flex h-10 w-10 items-center justify-center rounded-full ring-1 md:hidden ${
              light ? "text-cream ring-cream/40" : "text-forest ring-forest/25"
            }`}
          >
            <span className="sr-only">{t.menu}</span>
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
              {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-menu" className="border-t border-line bg-paper px-5 pb-6 md:hidden">
          <ul className="flex flex-col py-2">
            {[...links, { href: "#contribute", label: t.contribute }].map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-line py-3.5 text-base font-medium text-ink"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
