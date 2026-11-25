import { useEffect, useRef, useState, type ReactNode, type ElementType } from 'react';
import { Link } from 'react-router-dom';
import { useLang, type L } from '../lib/i18n';
import { img, thumb } from '../lib/images';
import { STATUS_HELP, STATUS_LABEL, type Status } from '../data/site';

/** Small caps eyebrow, e.g. "01 · THE TOWN" */
export function Label({ no, children, className = '' }: { no?: string; children: ReactNode; className?: string }) {
  return (
    <p className={`label flex items-center gap-2.5 ${className}`}>
      {no && <span className="opacity-55">{no}</span>}
      {no && <span className="opacity-40">·</span>}
      <span>{children}</span>
    </p>
  );
}

/** Fades content up when it scrolls into view. */
export function Reveal({ children, as: Tag = 'div', className = '', delay = 0 }: { children: ReactNode; as?: ElementType; className?: string; delay?: number }) {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          el.classList.add('is-visible');
          io.disconnect();
        }
      },
      { rootMargin: '0px 0px -8% 0px' },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <Tag ref={ref} className={`reveal ${className}`} style={delay ? { transitionDelay: `${delay}ms` } : undefined}>
      {children}
    </Tag>
  );
}

const STATUS_STYLE: Record<Status, string> = {
  verified: 'bg-lime text-forest',
  directory: 'bg-bone-2 text-ink-soft',
  'to-verify': 'bg-laterite/10 text-laterite',
  reference: 'bg-coal/75 text-ivory',
  context: 'bg-forest/10 text-forest',
};

export function StatusBadge({ status, className = '' }: { status: Status; className?: string }) {
  const { t } = useLang();
  return (
    <span
      title={t(STATUS_HELP[status])}
      className={`label inline-flex items-center gap-1.5 whitespace-nowrap rounded-full px-2.5 py-1 !text-[0.6rem] !tracking-[0.08em] ${STATUS_STYLE[status]} ${className}`}
    >
      <span className="size-1.5 rounded-full bg-current opacity-70" />
      {t(STATUS_LABEL[status])}
    </span>
  );
}

/** The round arrow chip that sits at the end of every pill button. */
export function ArrowDot({ tone = 'dark', size = 'md' }: { tone?: 'dark' | 'light'; size?: 'sm' | 'md' }) {
  return (
    <span
      aria-hidden
      className={`inline-flex shrink-0 items-center justify-center rounded-full transition-transform duration-300 group-hover:translate-x-0.5 ${
        size === 'sm' ? 'size-7 text-[0.8rem]' : 'size-9 text-base'
      } ${tone === 'dark' ? 'bg-coal text-ivory' : 'bg-ivory text-coal'}`}
    >
      →
    </span>
  );
}

/**
 * Pill button with a round arrow, in the Elsewhere style.
 * tone: 'ivory' (on photos), 'dark' (olive-black), 'outline' (thin border).
 */
export function Pill({
  to,
  href,
  onClick,
  children,
  tone = 'dark',
  className = '',
  type = 'button',
  full,
}: {
  to?: string;
  href?: string;
  onClick?: () => void;
  children: ReactNode;
  tone?: 'ivory' | 'dark' | 'outline' | 'outline-light' | 'lime' | 'coal' | 'bone' | 'ghost';
  className?: string;
  type?: 'button' | 'submit';
  full?: boolean;
}) {
  // legacy tone names from the first design map onto the new ones
  const t = tone === 'coal' ? 'dark' : tone === 'bone' || tone === 'lime' ? 'ivory' : tone === 'ghost' ? 'outline' : tone;
  const tones: Record<string, string> = {
    dark: 'bg-coal text-ivory hover:bg-coal-3',
    ivory: 'bg-ivory text-coal hover:bg-white',
    outline: 'border border-ink/25 text-ink hover:bg-ink/5',
    'outline-light': 'border border-ivory/35 text-ivory hover:bg-ivory/10',
  };
  const dot = t === 'dark' || t === 'outline-light' ? 'light' : 'dark';
  const cls = `group inline-flex items-center gap-4 rounded-full py-1.5 pr-1.5 pl-5 text-[0.92rem] font-medium transition-colors ${
    full ? 'w-full justify-between' : ''
  } ${tones[t]} ${className}`;
  const inner = (
    <>
      <span>{children}</span>
      <ArrowDot tone={dot} />
    </>
  );
  if (to) return <Link to={to} className={cls}>{inner}</Link>;
  if (href) return <a href={href} target="_blank" rel="noreferrer" className={cls}>{inner}</a>;
  return <button type={type} onClick={onClick} className={cls}>{inner}</button>;
}

/** Serif headline with an optional italic phrase ("Find your *escape.*"). */
export function Headline({ plain, italic, as: Tag = 'h2', className = '' }: { plain: L; italic?: L; as?: ElementType; className?: string }) {
  const { t } = useLang();
  return (
    <Tag className={`headline ${className}`}>
      {t(plain)}
      {italic && (
        <>
          {' '}
          <em>{t(italic)}</em>
        </>
      )}
    </Tag>
  );
}

/** A photo that falls back gracefully if the file is missing. */
export function Photo({
  src,
  alt,
  className = '',
  size = 'full',
  fallback,
  archival,
  eager,
}: {
  src: string;
  alt: string;
  className?: string;
  size?: 'full' | 'thumb';
  fallback?: string;
  archival?: boolean;
  eager?: boolean;
}) {
  const [current, setCurrent] = useState(src);
  useEffect(() => setCurrent(src), [src]);
  const url = size === 'thumb' ? thumb(current) : img(current);
  return (
    <img
      src={url}
      alt={alt}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      onError={() => fallback && current !== fallback && setCurrent(fallback)}
      className={`${archival || current.startsWith('old-') ? 'archival' : ''} ${className}`}
    />
  );
}

/** A tidy "key / value" row with a hairline. */
export function Row({ k, v, extra }: { k: ReactNode; v: ReactNode; extra?: ReactNode }) {
  return (
    <div
      className={`hairline grid grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] gap-4 border-t py-4 ${
        extra ? 'sm:grid-cols-[8.5rem_minmax(0,1fr)_12rem]' : 'sm:grid-cols-[8.5rem_minmax(0,1fr)]'
      }`}
    >
      <div className="label pt-0.5 text-ink-faint">{k}</div>
      <div className="font-medium">{v}</div>
      {extra && <div className="col-span-2 sm:col-span-1 sm:justify-self-end">{extra}</div>}
    </div>
  );
}

export function Container({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-12 ${className}`}>{children}</div>;
}
