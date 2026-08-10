import Reveal from "@/components/shared/Reveal";
import { locationFacts } from "@/lib/data";

export default function LocationMap() {
  const query = encodeURIComponent("Umuttepe Zirve Kız Öğrenci Yurdu Kocaeli");
  const mapSrc = `https://maps.google.com/maps?q=${query}&z=16&output=embed`;

  return (
    <Reveal>
      <section className="py-20 lg:py-24 bg-mist-50/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-stretch">

            <div className="group relative min-h-[380px] sm:min-h-[460px] lg:min-h-[520px] overflow-hidden rounded-3xl border border-brand-100 bg-white shadow-sm transition-all duration-300 hover:shadow-md">
              <iframe
                title="Zirve Kız Yurdu Haritası"
                width="100%"
                height="100%"
                loading="lazy"
                className="h-full w-full border-0 grayscale-[15%] opacity-95 transition-all duration-500 group-hover:grayscale-0 group-hover:opacity-100"
                src={mapSrc}
              />

              <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-brand-900/5" />
            </div>

            <div className="flex flex-col justify-between rounded-3xl border border-brand-100/80 bg-white p-8 sm:p-10 shadow-sm transition-all duration-300 hover:shadow-md">
              <div>

                <div className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-3.5 py-1.5 border border-brand-100/60">
                  <span className="h-2 w-2 rounded-full bg-brand-600 animate-pulse" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-brand-700">
                    Konum Bilgisi
                  </span>
                </div>

                <h2 className="mt-5 text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 leading-snug">
                  Zirve Kız Yurdu&apos;na <br className="hidden sm:inline" />
                  <span className="text-brand-600">Kolay ve Güvenli</span> Ulaşım
                </h2>

                <ul className="mt-8 space-y-4">
                  {locationFacts.map((fact, index) => (
                    <li
                      key={fact || index}
                      className="group/item flex items-start gap-3.5 text-sm leading-relaxed text-slate-600 transition-colors hover:text-slate-900"
                    >
                      <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-600 transition-colors group-hover/item:bg-brand-600 group-hover/item:text-white">
                        <svg
                          className="h-3.5 w-3.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="2.5"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                          />
                        </svg>
                      </span>
                      <span className="pt-0.5">{fact}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100">
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${query}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-brand-50 px-5 py-3.5 text-sm font-semibold text-brand-700 hover:bg-brand-100/80 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-600/20"
                >
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 6.75V15m6-6v8.25m.5-11.25l-5.25 3-5.25-3S1.5 5.25 1.5 6.75v10.5s0 1.5 1.5 1.5l5.25-3 5.25 3s1.5 0 1.5-1.5V6.75s0-1.5-1.5-1.5z"
                    />
                  </svg>
                  Google Maps&apos;te Yol Tarifi Al
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Reveal>
  );
}
