import { useEffect, useRef, useState, type ReactNode } from 'react';
import { useLang, type L } from '../lib/i18n';
import type { Photo as PhotoT } from '../data/photos';
import { ArrowDot, Container, Headline, Label, Photo, Pill, Reveal, StatusBadge } from './ui';
import { FALLBACK_HERO } from '../lib/images';
import { Link } from 'react-router-dom';

/** Rounded, inset photo card that opens every page (the "Roam into the wild." hero). */
export function PageHero({
  no,
  label,
  plain,
  italic,
  intro,
  photo,
  fallback = FALLBACK_HERO,
  children,
}: {
  no: string;
  label: L;
  plain: L;
  italic?: L;
  intro?: L;
  photo: string;
  fallback?: string;
  children?: ReactNode;
}) {
  const { t } = useLang();
  return (
    <section className="p-3 sm:p-4">
      <div className="relative flex min-h-[76svh] items-end overflow-hidden rounded-[var(--radius-card)] bg-coal text-ivory">
        <Photo src={photo} fallback={fallback} alt="" eager className="cinematic olive-tone absolute inset-0 size-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-coal/90 via-coal/35 to-coal/30" />
        <Container className="relative pt-32 pb-12 sm:pb-16">
          <Label no={no} className="text-ivory/75">{t(label)}</Label>
          <Headline as="h1" plain={plain} italic={italic} className="rise mt-5 max-w-4xl text-[clamp(2.8rem,7.2vw,6.4rem)]" />
          {intro && <p className="mt-6 max-w-xl text-[1.02rem] leading-relaxed text-ivory/80">{t(intro)}</p>}
          {children}
        </Container>
      </div>
    </section>
  );
}

/** "Find your escape." — big serif left, quiet paragraph right. */
export function SectionHead({ no, label, plain, italic, side, dark }: { no?: string; label?: L; plain: L; italic?: L; side?: L; dark?: boolean }) {
  const { t } = useLang();
  return (
    <Reveal className="grid gap-6 lg:grid-cols-[1.5fr_1fr] lg:items-end">
      <div>
        {label && <Label no={no} className={dark ? 'text-ivory/60' : 'text-ink-faint'}>{t(label)}</Label>}
        <Headline plain={plain} italic={italic} className={`${label ? 'mt-4' : ''} text-[clamp(2.3rem,5vw,4.3rem)]`} />
      </div>
      {side && <p className={`max-w-sm text-[0.98rem] leading-relaxed lg:justify-self-end ${dark ? 'text-ivory/65' : 'text-ink-soft'}`}>{t(side)}</p>}
    </Reveal>
  );
}

/** Card row: rounded photo, serif title, caption, full-width dark pill. */
export function CardGrid({
  items,
  cols = 3,
}: {
  items: { photo: string; title: L; caption: L; to: string; cta?: L; badge?: ReactNode }[];
  cols?: 2 | 3;
}) {
  const { t } = useLang();
  return (
    <div className={`grid gap-6 sm:grid-cols-2 ${cols === 3 ? 'lg:grid-cols-3' : ''}`}>
      {items.map((c, i) => (
        <Reveal key={c.to + i} delay={(i % 3) * 80} className="flex flex-col">
          <Link to={c.to} className="group block overflow-hidden rounded-[var(--radius-card)] bg-bone-2">
            <div className="relative aspect-[4/3.4] overflow-hidden">
              <Photo src={c.photo} size="thumb" alt={t(c.title)} className="size-full object-cover transition-transform duration-[1.2s] group-hover:scale-[1.04]" />
              {c.badge && <span className="absolute top-3 left-3">{c.badge}</span>}
            </div>
          </Link>
          <h3 className="headline mt-5 text-[1.65rem]">{t(c.title)}</h3>
          <p className="mt-1 flex-1 text-sm text-ink-soft">{t(c.caption)}</p>
          <Pill to={c.to} full className="mt-5">{t(c.cta ?? { en: 'Explore', ml: 'കാണാം' })}</Pill>
        </Reveal>
      ))}
    </div>
  );
}

/** "How it works." — numbered steps with a strong top rule. */
export function Steps({ items }: { items: { title: L; body: L }[] }) {
  const { t } = useLang();
  return (
    <div className="grid gap-8 md:grid-cols-3">
      {items.map((s, i) => (
        <Reveal key={i} delay={i * 90}>
          <p className="text-sm text-ink-faint">{String(i + 1).padStart(2, '0')}</p>
          <div className="mt-2 border-t-2 border-coal pt-4">
            <p className="headline text-[1.6rem]">{t(s.title)}</p>
            <p className="mt-2 max-w-xs text-sm leading-relaxed text-ink-soft">{t(s.body)}</p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

/**
 * Photo-backed call-to-action card ("PLAN your TRIP."). The plain text is set
 * in big caps with an enlarged first letter; the italic phrase sits between.
 */
export function LimeCta({
  kicker,
  plain,
  italic,
  cta,
  to = '/contribute',
  photo = 'karkidaka-theyyam-paddy',
  children,
}: {
  kicker: L;
  plain: L;
  italic?: L;
  cta: L;
  to?: string;
  photo?: string;
  children?: ReactNode;
}) {
  const { t, lang } = useLang();
  const words = t(plain);
  return (
    <section className="px-3 py-10 sm:px-4 sm:py-16">
      <Container className="!px-0 sm:!px-4 lg:!px-8">
        <Reveal className="relative overflow-hidden rounded-[var(--radius-card)] bg-coal text-ivory">
          <Photo src={photo} alt="" className="absolute inset-0 size-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-coal/90 via-coal/65 to-coal/35" />
          <div className="relative grid gap-10 p-8 sm:p-12 lg:grid-cols-[1.2fr_1fr] lg:items-center lg:p-16">
            <div>
              <p className={`display text-[clamp(2.6rem,6vw,5.2rem)] ${lang === 'en' ? 'uppercase' : ''}`}>
                {lang === 'en' ? (
                  <>
                    <span className="text-[1.45em] leading-none">{words.charAt(0)}</span>
                    {words.slice(1)}
                  </>
                ) : (
                  words
                )}
                {italic && (
                  <>
                    <br />
                    <em className="pl-[1.2em] normal-case">{t(italic)}</em>
                  </>
                )}
              </p>
              <p className="mt-8 max-w-sm text-[0.95rem] leading-relaxed text-ivory/80">{t(kicker)}</p>
            </div>
            <div className="flex w-full lg:max-w-md lg:justify-self-end lg:justify-end">{children ?? <Pill to={to} tone="ivory">{t(cta)}</Pill>}</div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

/** Left/right inset that lines the carousel up with the page container. */
const EDGE = 'max(clamp(1.25rem, 4vw, 3rem), calc((100vw - 1280px) / 2 + 3rem))';

/** Horizontal photo row with arrows and a 01/06 counter. */
export function PhotoCarousel({ photos, no, label, plain, italic }: { photos: PhotoT[]; no: string; label: L; plain: L; italic?: L }) {
  const { t } = useLang();
  const track = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);

  const go = (dir: number) => {
    const el = track.current;
    if (!el) return;
    const next = Math.max(0, Math.min(photos.length - 1, index + dir));
    const child = el.children[next] as HTMLElement | undefined;
    if (child) el.scrollTo({ left: child.offsetLeft - el.offsetLeft - parseFloat(getComputedStyle(el).paddingLeft), behavior: 'smooth' });
  };

  useEffect(() => {
    const el = track.current;
    if (!el) return;
    const on = () => {
      const kids = Array.from(el.children) as HTMLElement[];
      const pad = parseFloat(getComputedStyle(el).paddingLeft);
      const pos = el.scrollLeft + pad + 8;
      let i = 0;
      kids.forEach((k, n) => {
        if (k.offsetLeft - el.offsetLeft <= pos) i = n;
      });
      setIndex(i);
    };
    el.addEventListener('scroll', on, { passive: true });
    return () => el.removeEventListener('scroll', on);
  }, []);

  const pad = (n: number) => String(n).padStart(2, '0');
  const btn = 'flex size-10 items-center justify-center rounded-full border border-ink/20 transition-colors hover:bg-coal hover:text-ivory';

  return (
    <section className="overflow-hidden py-20 sm:py-28">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Reveal>
            <Label no={no} className="text-ink-faint">{t(label)}</Label>
            <Headline plain={plain} italic={italic} className="mt-4 text-[clamp(2.3rem,5vw,4.3rem)]" />
          </Reveal>
          <div className="flex items-center gap-3">
            <button onClick={() => go(-1)} className={btn} aria-label="Previous">←</button>
            <span className="text-sm tabular-nums text-ink-soft">
              {pad(index + 1)} / {pad(photos.length)}
            </span>
            <button onClick={() => go(1)} className={btn} aria-label="Next">→</button>
          </div>
        </div>
      </Container>
      <div ref={track} className="no-scrollbar mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto" style={{ paddingInline: EDGE, scrollPaddingInline: EDGE }}>
        {photos.map((p) => (
          <figure key={p.id} className="w-[80vw] shrink-0 snap-start sm:w-[46vw] lg:w-[30vw]">
            <div className="relative aspect-[4/4.4] overflow-hidden rounded-[var(--radius-card)] bg-bone-2">
              <Photo src={p.src} alt={t(p.title)} className="size-full object-cover transition-transform duration-[1.2s] hover:scale-[1.03]" />
              <span className="absolute top-3 left-3"><StatusBadge status={p.status} /></span>
            </div>
            <figcaption className="mt-4">
              <p className="headline text-[1.45rem]">{t(p.title)}</p>
              <p className="mt-1 text-sm leading-relaxed text-ink-soft">{t(p.caption)}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

/** Rounded photo on one side, ivory panel on the other. */
export function SplitPanel({ photo, children, flip }: { photo: string; children: ReactNode; flip?: boolean }) {
  return (
    <section className="px-3 py-4 sm:px-4">
      <div className="mx-auto grid max-w-[1480px] gap-3 sm:gap-4 lg:grid-cols-[1.45fr_1fr]">
        <div className={`relative min-h-[50vh] overflow-hidden rounded-[var(--radius-card)] bg-coal ${flip ? 'lg:order-2' : ''}`}>
          <Photo src={photo} fallback={FALLBACK_HERO} alt="" className="absolute inset-0 size-full object-cover" />
        </div>
        <div className="flex flex-col justify-between gap-10 rounded-[var(--radius-card)] bg-paper p-8 sm:p-12">{children}</div>
      </div>
    </section>
  );
}

/** Drag-to-compare before/after slider. */
export function BeforeAfter({ before, after, beforeLabel, afterLabel, alt }: { before: string; after: string; beforeLabel: string; afterLabel: string; alt: string }) {
  const [pos, setPos] = useState(50);
  return (
    <div className="relative aspect-[16/10] select-none overflow-hidden rounded-[var(--radius-card)] bg-coal-3">
      <Photo src={after} alt={`${alt} — ${afterLabel}`} className="absolute inset-0 size-full object-cover" />
      <div className="absolute inset-0 overflow-hidden" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
        <Photo src={before} alt={`${alt} — ${beforeLabel}`} archival className="absolute inset-0 size-full object-cover" />
      </div>
      <div className="pointer-events-none absolute inset-y-0 w-0.5 bg-ivory" style={{ left: `${pos}%` }}>
        <span className="absolute top-1/2 left-1/2 flex size-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-ivory text-sm text-coal shadow-lg">←→</span>
      </div>
      <span className="absolute top-4 left-4 rounded-full bg-coal/75 px-3.5 py-1.5 text-xs text-ivory backdrop-blur">{beforeLabel}</span>
      <span className="absolute top-4 right-4 rounded-full bg-ivory px-3.5 py-1.5 text-xs text-coal">{afterLabel}</span>
      <input
        type="range"
        min={0}
        max={100}
        value={pos}
        onChange={(e) => setPos(Number(e.target.value))}
        aria-label={`${alt}: drag to compare ${beforeLabel} and ${afterLabel}`}
        className="absolute inset-0 size-full cursor-ew-resize opacity-0"
      />
    </div>
  );
}

/** Full-screen photo viewer. */
export function Lightbox({ photos, index, onClose, onIndex }: { photos: PhotoT[]; index: number | null; onClose: () => void; onIndex: (i: number) => void }) {
  const { t } = useLang();
  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onIndex((index + 1) % photos.length);
      if (e.key === 'ArrowLeft') onIndex((index - 1 + photos.length) % photos.length);
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [index, photos.length, onClose, onIndex]);
  if (index === null) return null;
  const p = photos[index];
  const nav = 'absolute flex size-11 items-center justify-center rounded-full bg-ivory/90 text-coal hover:bg-ivory';
  return (
    <div className="fixed inset-0 z-[55] flex flex-col bg-coal/95 text-ivory backdrop-blur" role="dialog" aria-modal="true" aria-label={t(p.title)}>
      <div className="flex items-center justify-between p-4 sm:p-6">
        <span className="text-sm tabular-nums text-ivory/60">
          {String(index + 1).padStart(2, '0')} / {String(photos.length).padStart(2, '0')}
        </span>
        <button onClick={onClose} className="rounded-full border border-ivory/30 px-3.5 py-1.5 text-sm hover:bg-ivory hover:text-coal">
          {t({ en: 'Close', ml: 'അടയ്ക്കുക' })} ✕
        </button>
      </div>
      <div className="relative flex min-h-0 flex-1 items-center justify-center px-4">
        <Photo key={p.id} src={p.src} alt={t(p.title)} eager className="max-h-full max-w-full rounded-2xl object-contain" />
        <button onClick={() => onIndex((index - 1 + photos.length) % photos.length)} className={`${nav} left-3`} aria-label="Previous">←</button>
        <button onClick={() => onIndex((index + 1) % photos.length)} className={`${nav} right-3`} aria-label="Next">→</button>
      </div>
      <div className="mx-auto flex w-full max-w-4xl flex-wrap items-start justify-between gap-4 p-5 sm:p-8">
        <div>
          <p className="headline text-3xl">{t(p.title)}</p>
          {p.caption && <p className="mt-2 max-w-2xl text-ivory/70">{t(p.caption)}</p>}
          {(p.year || p.credit) && <p className="label mt-3 text-ivory/45">{[p.year, p.credit].filter(Boolean).join(' · ')}</p>}
        </div>
        <StatusBadge status={p.status} />
      </div>
    </div>
  );
}

/** Big-number facts with a strong top rule, in the "How it works." style. */
export function StatRow({ items }: { items: { value: string; label: L; note?: L }[] }) {
  const { t } = useLang();
  return (
    <div className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
      {items.map((s, i) => (
        <Reveal key={i} delay={i * 80}>
          <p className="text-sm text-ink-faint">{String(i + 1).padStart(2, '0')}</p>
          <div className="mt-2 border-t-2 border-coal pt-4">
            <p className="headline text-[clamp(2.1rem,4vw,3.2rem)] tabular-nums">{s.value}</p>
            <p className="mt-1 text-sm font-medium">{t(s.label)}</p>
            {s.note && <p className="text-xs text-ink-faint">{t(s.note)}</p>}
          </div>
        </Reveal>
      ))}
    </div>
  );
}

export { ArrowDot };
