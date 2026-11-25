import { useEffect } from "react";
import { Link } from "react-router";
import { copy, type Lang, type Level } from "~/content";
import { Badge } from "./Badge";
import { Header, Wordmark } from "./Header";
import { Icon } from "./Icon";

type Props = { lang: Lang };

// Fades sections in as they scroll into view (see .reveal in app.css).
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal");
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("is-visible"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function Kicker({ lang, dark, children }: { lang: Lang; dark?: boolean; children: React.ReactNode }) {
  return (
    <p
      className={`flex items-center gap-3 text-sm font-semibold ${
        lang === "en" ? "uppercase tracking-[0.18em]" : ""
      } ${dark ? "text-gold-soft" : "text-gold"}`}
    >
      <span className={`h-px w-8 ${dark ? "bg-gold-soft/70" : "bg-gold/70"}`} aria-hidden="true" />
      {children}
    </p>
  );
}

function H2({ lang, dark, children }: { lang: Lang; dark?: boolean; children: React.ReactNode }) {
  return (
    <h2
      className={`mt-4 font-display font-semibold ${
        lang === "en"
          ? "text-4xl leading-[1.12] tracking-tight sm:text-5xl"
          : "text-3xl sm:text-[2.6rem]"
      } ${dark ? "text-cream" : "text-forest"}`}
    >
      {children}
    </h2>
  );
}

function Hero({ lang }: Props) {
  const t = copy[lang].hero;
  const en = lang === "en";
  return (
    <section id="top" className="relative isolate flex min-h-[100svh] items-end overflow-hidden bg-deep">
      <img
        src="/images/edakkom-landscape.svg"
        alt=""
        fetchPriority="high"
        className="absolute inset-0 -z-20 h-full w-full object-cover object-[50%_80%]"
      />
      <div className="absolute inset-0 -z-10 bg-linear-to-t from-deep via-deep/60 to-deep/0" aria-hidden="true" />
      <div className="absolute inset-0 -z-10 bg-linear-to-r from-deep/55 to-transparent" aria-hidden="true" />

      <p className="absolute right-5 top-22 max-w-[16rem] text-right text-[0.7rem] leading-snug text-deep/65 sm:right-8">
        {t.artNote}
      </p>

      <div className="mx-auto w-full max-w-7xl px-5 pb-36 pt-32 sm:px-8 sm:pb-44">
        <div className="max-w-2xl">
          <p className={`text-sm font-medium text-gold-soft ${en ? "uppercase tracking-[0.22em]" : ""}`}>
            {t.eyebrow}
          </p>
          <h1
            className={`mt-3 font-display font-semibold text-cream ${
              en ? "text-6xl tracking-tight sm:text-8xl" : "text-6xl sm:text-[5.5rem]"
            }`}
          >
            {t.title}
          </h1>
          <p
            lang={en ? "ml" : "en"}
            className={`mt-2 text-base font-medium text-gold-soft ${en ? "" : "tracking-[0.4em]"}`}
          >
            {t.altTitle}
          </p>
          <p className="mt-7 font-display text-xl text-cream sm:text-2xl">{t.tagline}</p>
          <p className="mt-4 max-w-xl text-base text-cream/85 sm:text-lg">{t.lead}</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#discover"
              className="inline-flex items-center gap-2 rounded-full bg-cream px-6 py-3 text-sm font-semibold text-deep shadow-lg shadow-deep/30 transition-colors hover:bg-white"
            >
              <Icon name="search" className="h-4.5 w-4.5" />
              {t.primary}
            </a>
            <a
              href="#contribute"
              className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-deep shadow-lg shadow-deep/30 transition-colors hover:bg-gold-soft"
            >
              <Icon name="share" className="h-4.5 w-4.5" />
              {t.secondary}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function FactsBar({ lang }: Props) {
  const t = copy[lang].facts;
  return (
    <div className="relative z-10 mx-auto -mt-20 max-w-6xl px-5 sm:px-8">
      <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-line shadow-[0_24px_60px_-24px_rgba(20,51,42,0.55)] md:grid-cols-5">
        {t.items.map((f) => (
          <div key={f.label} className="bg-white px-5 py-5">
            <p className="text-xs font-medium text-stone">{f.label}</p>
            <p className="mt-1.5 text-sm font-semibold text-ink">{f.value}</p>
          </div>
        ))}
        <a
          href="#contribute"
          className="col-span-2 flex items-center justify-center gap-2 bg-forest px-5 py-5 text-sm font-semibold text-cream transition-colors hover:bg-deep md:col-span-1"
        >
          {t.cta}
          <span aria-hidden="true">→</span>
        </a>
      </div>
    </div>
  );
}

function Welcome({ lang }: Props) {
  const t = copy[lang].welcome;
  const order: Level[] = ["verified", "supported", "oral", "needs", "disputed"];
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-28">
      <div className="grid gap-14 lg:grid-cols-12">
        <div className="reveal lg:col-span-7">
          <Kicker lang={lang}>{t.kicker}</Kicker>
          <H2 lang={lang}>{t.heading}</H2>
          <div className="mt-8 space-y-5 text-[1.05rem] text-ink/85">
            {t.paragraphs.map((p, i) => (
              <p key={i} className={i === 0 ? "text-lg font-medium text-ink" : ""}>
                {p}
              </p>
            ))}
          </div>
        </div>

        <aside className="reveal lg:col-span-5">
          <div className="rounded-3xl bg-cream p-7 ring-1 ring-line sm:p-9">
            <h3 className="font-display text-xl font-semibold text-forest">{t.legendTitle}</h3>
            <ul className="mt-6 space-y-4">
              {order.map((lvl) => (
                <li key={lvl} className="flex flex-col gap-1.5">
                  <span>
                    <Badge level={lvl} lang={lang} />
                  </span>
                  <span className="text-sm text-ink/75">{t.legend[lvl]}</span>
                </li>
              ))}
            </ul>
            <p className="mt-7 border-t border-gold/30 pt-5 text-sm font-semibold text-forest">{t.legendNote}</p>
          </div>
        </aside>
      </div>
    </section>
  );
}

function Discover({ lang }: Props) {
  const t = copy[lang].discover;
  return (
    <section id="discover" className="border-y border-line bg-white">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-28">
        <div className="reveal max-w-2xl">
          <Kicker lang={lang}>{t.kicker}</Kicker>
          <H2 lang={lang}>{t.heading}</H2>
          <p className="mt-5 text-ink/75">{t.lead}</p>
        </div>
        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {t.cards.map((c) => (
            <li
              key={c.title}
              className="reveal group flex flex-col rounded-2xl border border-line bg-paper p-7 transition-shadow hover:shadow-[0_18px_40px_-24px_rgba(20,51,42,0.45)]"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-forest text-cream">
                <Icon name={c.icon} />
              </span>
              <h3 className="mt-6 font-display text-xl font-semibold text-forest">{c.title}</h3>
              <p className="mt-2 flex-1 text-sm text-ink/75">{c.text}</p>
              <p className="mt-6 inline-flex items-center gap-2 text-xs font-semibold text-gold">
                <span className="h-1.5 w-1.5 rounded-full bg-gold" aria-hidden="true" />
                {c.status}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Timeline({ lang }: Props) {
  const t = copy[lang].timeline;
  return (
    <section id="timeline" className="bg-deep text-cream">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 py-24 sm:px-8 sm:py-28 lg:grid-cols-12">
        <div className="reveal lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <Kicker lang={lang} dark>
              {t.kicker}
            </Kicker>
            <H2 lang={lang} dark>
              {t.heading}
            </H2>
            <p className="mt-5 text-cream/75">{t.lead}</p>
            <div className="mt-8 rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
              <p className="text-sm text-cream/85">{t.note}</p>
              <a
                href="#contribute"
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-gold-soft hover:text-cream"
              >
                {t.cta} <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>

        <ol className="relative lg:col-span-8">
          <span className="absolute bottom-3 left-[5px] top-3 w-px bg-white/15" aria-hidden="true" />
          {t.items.map((item) => {
            const strong = item.level === "verified" || item.level === "supported";
            return (
              <li key={item.period + item.title} className="reveal relative pb-11 pl-10 last:pb-0">
                <span
                  className={`absolute left-0 top-1.5 h-[11px] w-[11px] rounded-full ${
                    strong ? "bg-gold" : "bg-deep ring-2 ring-inset ring-gold-soft/60"
                  }`}
                  aria-hidden="true"
                />
                <p className="text-sm font-semibold text-gold-soft">{item.period}</p>
                <h3 className="mt-1.5 font-display text-xl font-semibold text-cream sm:text-2xl">{item.title}</h3>
                <p className="mt-2 max-w-2xl text-cream/75">{item.text}</p>
                <div className="mt-3">
                  <Badge level={item.level} lang={lang} onDark />
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

function Archive({ lang }: Props) {
  const t = copy[lang].archive;
  return (
    <section id="archive" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-28">
      <div className="reveal grid gap-6 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-7">
          <Kicker lang={lang}>{t.kicker}</Kicker>
          <H2 lang={lang}>{t.heading}</H2>
        </div>
        <p className="text-ink/75 lg:col-span-5">{t.lead}</p>
      </div>

      <div className="mt-14 columns-2 gap-4 sm:gap-6 md:columns-3">
        {t.frames.map((f) => (
          <figure
            key={f.label}
            className="reveal mb-4 break-inside-avoid rounded-2xl bg-cream p-3 ring-1 ring-line sm:mb-6"
          >
            <div
              className={`frame-pattern flex flex-col items-center justify-center rounded-xl px-4 text-center ${
                f.tall ? "aspect-[4/5]" : "aspect-[4/3]"
              }`}
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-paper/80 text-gold ring-1 ring-gold/25">
                <Icon name={f.icon} className="h-7 w-7" />
              </span>
              <span className="mt-3 text-xs font-medium text-stone">{t.placeholder}</span>
            </div>
            <figcaption className="px-1.5 pb-1 pt-3 text-sm font-semibold text-forest">{f.label}</figcaption>
          </figure>
        ))}
      </div>

      <div className="reveal mt-8 flex justify-center">
        <a
          href="#contribute"
          className="inline-flex items-center gap-2 rounded-full bg-forest px-6 py-3 text-sm font-semibold text-cream shadow-sm transition-colors hover:bg-deep"
        >
          <Icon name="share" className="h-4.5 w-4.5" />
          {t.cta}
        </a>
      </div>
    </section>
  );
}

function Places({ lang }: Props) {
  const t = copy[lang].places;
  return (
    <section id="places" className="border-y border-line bg-white">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-28">
        <div className="reveal max-w-2xl">
          <Kicker lang={lang}>{t.kicker}</Kicker>
          <H2 lang={lang}>{t.heading}</H2>
          <p className="mt-5 text-ink/75">{t.lead}</p>
        </div>

        <ul className="mt-14 grid gap-5 md:grid-cols-2">
          {t.items.map((p) => (
            <li key={p.name} className="reveal flex gap-5 rounded-2xl border border-line bg-paper p-6 sm:p-7">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-cream text-forest ring-1 ring-line">
                <Icon name="pin" />
              </span>
              <div>
                <h3 className="font-display text-lg font-semibold text-forest">{p.name}</h3>
                <p className="mt-0.5 text-sm text-stone">{p.kind}</p>
                <p className="mt-3 text-sm text-ink/80">{p.text}</p>
                <div className="mt-4">
                  <Badge level={p.level} lang={lang} />
                </div>
              </div>
            </li>
          ))}
        </ul>

        <div className="reveal mt-10 flex flex-col items-start gap-4 rounded-2xl bg-cream px-6 py-5 ring-1 ring-line sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-ink/80">{t.note}</p>
          <a href="#contribute" className="shrink-0 text-sm font-semibold text-forest hover:text-gold">
            {t.cta} <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

function Contribute({ lang }: Props) {
  const t = copy[lang].contribute;
  return (
    <section id="contribute" className="bg-cream">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-24 sm:px-8 sm:py-28 lg:grid-cols-12">
        <div className="reveal lg:col-span-7">
          <Kicker lang={lang}>{t.kicker}</Kicker>
          <H2 lang={lang}>{t.heading}</H2>
          <p className="mt-5 max-w-2xl text-ink/80">{t.lead}</p>

          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {t.types.map((ty) => (
              <li key={ty.title} className="rounded-2xl bg-paper p-6 ring-1 ring-line">
                <span className="text-gold">
                  <Icon name={ty.icon} className="h-7 w-7" />
                </span>
                <h3 className="mt-4 font-semibold text-forest">{ty.title}</h3>
                <p className="mt-1.5 text-sm text-ink/75">{ty.text}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="reveal lg:col-span-5">
          <div className="rounded-3xl bg-forest p-8 text-cream shadow-[0_30px_60px_-30px_rgba(20,51,42,0.8)] sm:p-10">
            <h3 className="font-display text-2xl font-semibold">{t.stepsTitle}</h3>
            <ol className="mt-8 space-y-7">
              {t.steps.map((s, i) => (
                <li key={s.title} className="flex gap-5">
                  <span className="font-display text-3xl font-semibold leading-none text-gold-soft">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="font-semibold">{s.title}</p>
                    <p className="mt-1 text-sm text-cream/75">{s.text}</p>
                  </div>
                </li>
              ))}
            </ol>
            <div className="mt-10 border-t border-white/15 pt-7">
              <span
                aria-disabled="true"
                className="inline-flex w-full cursor-not-allowed items-center justify-center gap-2 rounded-full bg-gold/35 px-6 py-3.5 text-sm font-semibold text-cream/90"
              >
                <Icon name="clock" className="h-4.5 w-4.5" />
                {t.button}
              </span>
              <p className="mt-4 text-sm text-cream/70">{t.buttonNote}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer({ lang }: Props) {
  const t = copy[lang].footer;
  const nav = copy[lang].nav;
  return (
    <footer className="bg-deep text-cream/80">
      <div className="mx-auto max-w-7xl px-5 pb-10 pt-16 sm:px-8">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-6">
            <Wordmark lang={lang} light />
            <p className="mt-6 max-w-md text-sm">{t.mission}</p>
            <p className="mt-5 max-w-md rounded-xl bg-white/5 p-4 text-sm text-cream/90 ring-1 ring-white/10">
              {t.promise}
            </p>
          </div>
          <div className="md:col-span-3">
            <p className="text-sm font-semibold text-cream">{t.sectionsTitle}</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li><a className="hover:text-gold-soft" href="#timeline">{nav.history}</a></li>
              <li><a className="hover:text-gold-soft" href="#archive">{nav.archive}</a></li>
              <li><a className="hover:text-gold-soft" href="#places">{nav.places}</a></li>
              <li><a className="hover:text-gold-soft" href="#contribute">{nav.contribute}</a></li>
            </ul>
          </div>
          <div className="md:col-span-3">
            <p className="text-sm font-semibold text-cream">{t.languageTitle}</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link className="hover:text-gold-soft" to="/" hrefLang="ml" lang="ml">
                  മലയാളം
                </Link>
              </li>
              <li>
                <Link className="hover:text-gold-soft" to="/en" hrefLang="en" lang="en">
                  English
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-cream/60 sm:flex-row sm:items-center sm:justify-between">
          <p>{t.rights}</p>
          <a href="#top" className="hover:text-gold-soft">
            {t.top} ↑
          </a>
        </div>
      </div>
    </footer>
  );
}

export function HomePage({ lang }: Props) {
  useReveal();
  return (
    <>
      <Header lang={lang} />
      <main>
        <Hero lang={lang} />
        <FactsBar lang={lang} />
        <Welcome lang={lang} />
        <Discover lang={lang} />
        <Timeline lang={lang} />
        <Archive lang={lang} />
        <Places lang={lang} />
        <Contribute lang={lang} />
      </main>
      <Footer lang={lang} />
    </>
  );
}
