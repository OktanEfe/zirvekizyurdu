import { whyUs } from "@/lib/data";
import Reveal from "@/components/shared/Reveal";

export default function WhyUs() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-20 lg:py-28 text-white">

      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-600/35 blur-[150px]" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/25 blur-[100px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-500/30 bg-brand-500/10 px-4 py-1.5 text-xs font-semibold text-brand-300 backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-brand-400 animate-pulse" />
            <span>Neden Zirve Kız Yurdu?</span>
          </div>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Öğrenci yaşamında konforun ve güvenin buluştuğu adres
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-400">
            Kocaeli&apos;de evinizdeki huzuru ve otel konforunu bir arada sunan ayrıcalıklı yaşam standartları.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {whyUs.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.08}>
              <article className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-white/[0.05] p-8 backdrop-blur-xl shadow-xl shadow-brand-950/50 transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-500/40 hover:bg-white/[0.08]">

                <div className="pointer-events-none absolute -right-10 -top-10 -z-10 h-32 w-32 rounded-full bg-brand-500/15 blur-2xl" />

                <div className="absolute inset-x-0 top-0 h-[2px] w-full bg-gradient-to-r from-transparent via-brand-400/40 to-transparent" />

                <div>
                  <div className="flex items-center justify-between">

                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-500/20 text-brand-400 ring-1 ring-white/10 sm:h-12 sm:w-12">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>

                    <span className="text-2xl font-black text-brand-400/30">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-slate-300">
                    {item.description}
                  </p>
                </div>

              </article>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
