import type { ReactNode } from 'react';
import { useLang } from '../lib/i18n';
import { describeWeather, useWeather, type Sky } from '../lib/weather';

const CLOUD = 'M7.5 17h9.25a3.75 3.75 0 0 0 .4-7.48 5.5 5.5 0 0 0-10.6 1.23A3.13 3.13 0 0 0 7.5 17z';
const SUN_RAYS = 'M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5.3 5.3l1.4 1.4M17.3 17.3l1.4 1.4M5.3 18.7l1.4-1.4M17.3 6.7l1.4-1.4';

/** Line-drawn weather icon in the current text colour. */
export function WeatherIcon({ sky, isDay = true, className = 'size-6' }: { sky: Sky; isDay?: boolean; className?: string }) {
  const parts: Record<Sky, ReactNode> = {
    clear: isDay ? (
      <>
        <circle cx="12" cy="12" r="4" />
        <path d={SUN_RAYS} />
      </>
    ) : (
      <path d="M19.5 14.5A7.5 7.5 0 1 1 9.5 4.5a6 6 0 0 0 10 10z" />
    ),
    partly: (
      <>
        <path d="M5 9.6a3 3 0 0 1 5.6-1.9M7.6 2.6v1.3M2.6 7.6h1.3M4.1 4.1l.9.9M11.1 4.1l-.9.9" />
        <path d={CLOUD} transform="translate(1.5 3)" />
      </>
    ),
    cloudy: <path d={CLOUD} transform="translate(0 1.5)" />,
    fog: <path d="M4 9h16M6 13h12M4 17h16" />,
    drizzle: (
      <>
        <path d={CLOUD} transform="translate(0 -1.5)" />
        <path d="M8.5 18.5v1M12.5 19.5v1M16.5 18.5v1M10.5 21.5v.5M14.5 21.5v.5" />
      </>
    ),
    rain: (
      <>
        <path d={CLOUD} transform="translate(0 -1.5)" />
        <path d="M9 18l-1 3M13 18l-1 3M17 18l-1 3" />
      </>
    ),
    storm: (
      <>
        <path d={CLOUD} transform="translate(0 -1.5)" />
        <path d="M12.8 16.5l-2.3 3.2h3l-2.3 3.3" />
      </>
    ),
  };
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden className={`shrink-0 ${className}`}>
      {parts[sky]}
    </svg>
  );
}

const deg = (n: number) => `${Math.round(n)}°`;

/** Kerala time, e.g. "4:00 pm". */
function clock(time: string, locale: string) {
  return new Date(`${time}:00+05:30`).toLocaleTimeString(locale, { hour: 'numeric', minute: '2-digit', timeZone: 'Asia/Kolkata' });
}

function weekday(date: string, locale: string) {
  return new Date(`${date}T12:00:00+05:30`).toLocaleDateString(locale, { weekday: 'short', timeZone: 'Asia/Kolkata' });
}

/** Small glass chip for the homepage hero: "☁ 30° Drizzle". Links to the full card. */
export function WeatherChip() {
  const { t } = useLang();
  const { data } = useWeather();
  if (!data) return null;
  const w = describeWeather(data.code);
  return (
    <a href="#weather" className="glass inline-flex items-center gap-2 rounded-full py-1.5 pr-4 pl-3 text-sm text-ivory transition-colors hover:bg-coal/70">
      <span className="sr-only">{t({ en: 'Weather in Edakkom now:', ml: 'എടക്കോമിൽ ഇപ്പോഴത്തെ കാലാവസ്ഥ:' })}</span>
      <WeatherIcon sky={w.sky} isDay={data.isDay} className="size-5" />
      <span className="font-medium tabular-nums">{deg(data.temp)}</span>
      <span className="text-ivory/80">{t(w.label)}</span>
    </a>
  );
}

/** Live weather card: conditions now and the next five days. */
export function WeatherCard() {
  const { t, lang } = useLang();
  const { data, failed } = useWeather();
  const locale = lang === 'ml' ? 'ml-IN' : 'en-IN';
  const now = data && describeWeather(data.code);

  return (
    <section id="weather" aria-labelledby="weather-title" className="scroll-mt-28 rounded-[var(--radius-card)] bg-paper p-6 ring-1 ring-ink/10 sm:p-8 lg:p-10">
      <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-2">
        <h3 id="weather-title" className="label flex items-center gap-2.5 text-ink-soft">
          <span className="relative flex size-2" aria-hidden>
            {data && <span className="absolute inline-flex size-full animate-ping rounded-full bg-lime-ink opacity-60" />}
            <span className={`relative inline-flex size-2 rounded-full ${data ? 'bg-lime-ink' : 'bg-ink-faint'}`} />
          </span>
          {t({ en: 'Live weather in Edakkom', ml: 'എടക്കോമിലെ തത്സമയ കാലാവസ്ഥ' })}
        </h3>
        {data && (
          <p className="text-xs text-ink-faint">
            {t({ en: 'Updated', ml: 'പുതുക്കിയത്' })} {clock(data.time, locale)}
          </p>
        )}
      </div>

      {data && now ? (
        <div className="mt-8 grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.5fr)] lg:items-center">
          <div>
            <div className="flex items-center gap-5">
              <WeatherIcon sky={now.sky} isDay={data.isDay} className="size-16 text-coal sm:size-20" />
              <div>
                {/* Full-height numbers, and the plain sans "°": Playfair's own degree sign is a huge ring. */}
                <p className="headline text-[clamp(3.4rem,7vw,5rem)] !leading-none lining-nums tabular-nums">
                  {Math.round(data.temp)}
                  <span className="font-sans font-light">°</span>
                </p>
                <p className="mt-2 font-medium">{t(now.label)}</p>
              </div>
            </div>
            {/* Columns sized to their words, so "അനുഭവപ്പെടുന്നത്" never splits on phones. */}
            <dl className="mt-7 grid grid-cols-[auto_auto_auto] justify-between gap-4 border-t border-ink/12 pt-4">
              {[
                { k: { en: 'Feels like', ml: 'അനുഭവപ്പെടുന്നത്' }, v: deg(data.feelsLike) },
                { k: { en: 'Humidity', ml: 'ഈർപ്പം' }, v: `${Math.round(data.humidity)}%` },
                { k: { en: 'Wind', ml: 'കാറ്റ്' }, v: `${Math.round(data.wind)} km/h` },
              ].map((r) => (
                <div key={r.k.en}>
                  <dt className="text-xs text-ink-faint">{t(r.k)}</dt>
                  <dd className="mt-0.5 font-medium tabular-nums">{r.v}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div>
            <p className="text-xs text-ink-faint">{t({ en: 'Next 5 days', ml: 'അടുത്ത 5 ദിവസം' })}</p>
            <ul className="mt-3 grid grid-cols-5 gap-1.5 sm:gap-3">
              {data.days.map((d, i) => {
                const w = describeWeather(d.code);
                return (
                  <li key={d.date} className="flex flex-col items-center gap-2 rounded-2xl bg-bone/70 px-1 py-4 text-center" title={t(w.label)}>
                    <span className="text-xs font-medium">{i === 0 ? t({ en: 'Today', ml: 'ഇന്ന്' }) : weekday(d.date, locale)}</span>
                    <WeatherIcon sky={w.sky} className="size-7 text-coal" />
                    <span className="sr-only">{t(w.label)},</span>
                    <span className="text-sm leading-tight tabular-nums">
                      <span className="block font-medium">{deg(d.max)}</span>
                      <span className="block text-ink-faint">{deg(d.min)}</span>
                    </span>
                    {d.rain !== null && (
                      <span className="flex items-center gap-0.5 text-[0.7rem] text-ink-soft tabular-nums">
                        <svg viewBox="0 0 24 24" className="size-3" fill="currentColor" aria-hidden>
                          <path d="M12 3.5c-3 4.2-5.5 7.3-5.5 10.3a5.5 5.5 0 0 0 11 0c0-3-2.5-6.1-5.5-10.3z" />
                        </svg>
                        <span className="sr-only">{t({ en: 'chance of rain', ml: 'മഴ സാധ്യത' })}</span>
                        {d.rain}%
                      </span>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      ) : (
        // Holds the card's height while the weather loads, so the page doesn't jump.
        <div className="mt-8 flex min-h-[26rem] items-center justify-center rounded-2xl bg-bone/50 text-sm text-ink-faint lg:min-h-[12.5rem]">
          {failed
            ? t({ en: 'The weather is not available right now.', ml: 'കാലാവസ്ഥാ വിവരം ഇപ്പോൾ ലഭ്യമല്ല.' })
            : t({ en: 'Loading the weather…', ml: 'കാലാവസ്ഥ ലോഡ് ചെയ്യുന്നു…' })}
        </div>
      )}

      <p className="mt-8 text-[0.7rem] text-ink-faint">
        {t({ en: 'Forecast for Edakkom town. Weather data by', ml: 'എടക്കോം പട്ടണത്തിലെ പ്രവചനം. കാലാവസ്ഥാ വിവരങ്ങൾ:' })}{' '}
        <a href="https://open-meteo.com/" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-ink">
          Open-Meteo.com
        </a>
      </p>
    </section>
  );
}
