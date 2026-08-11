import Reveal from "@/components/shared/Reveal";
import { highlights } from "@/lib/data";

export default function HighlightCards() {
  return (
    <section className="bg-mist-50/60 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-200/80 bg-white px-4 py-1.5 text-xs font-semibold text-brand-700 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-brand-600 animate-pulse" />
            <span>Neden Biz?</span>
          </div>

          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Ayrıcalıklı Standartlarımızın Güvencesi
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600">
            Öğrencilerimizin akademik başarısı ve konforlu bir üniversite hayatı sürmesi için sunduğumuz temel değerler.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-3 sm:mt-14 sm:gap-6 lg:grid-cols-4">
          {highlights.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.08}>
              <article className="group relative flex h-full flex-col justify-between overflow-hidden rounded-xl border border-slate-200/80 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-brand-300 hover:shadow-xl hover:shadow-brand-600/10 sm:rounded-2xl sm:p-8">

                <div className="absolute inset-x-0 top-0 h-1 w-0 bg-gradient-to-r from-brand-500 via-blue-500 to-indigo-600 transition-all duration-500 group-hover:w-full" />

                <div>

                  <div className="flex items-center justify-between">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-50 text-brand-600 ring-1 ring-brand-100 transition-all duration-300 group-hover:scale-110 group-hover:bg-brand-600 group-hover:text-white group-hover:shadow-md group-hover:shadow-brand-600/30 sm:h-11 sm:w-11 sm:rounded-xl">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4 sm:h-5 sm:w-5"
                      >
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      </svg>
                    </div>

                    <span className="text-lg font-black text-slate-200 transition-colors duration-300 group-hover:text-brand-200 sm:text-3xl">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="mt-3 text-sm font-bold text-slate-900 transition-colors group-hover:text-brand-600 sm:mt-6 sm:text-xl">
                    {item.title}
                  </h3>

                  <p className="mt-1.5 text-xs leading-relaxed text-slate-600 sm:mt-3 sm:text-sm">
                    {item.description}
                  </p>
                </div>

                <div className="mt-4 flex items-center gap-1.5 text-[10px] font-semibold text-brand-600 sm:mt-8 sm:text-xs">
                  <span>Yüksek Standart</span>
                  <div className="h-1 w-1 rounded-full bg-brand-400" />
                  <span className="text-slate-400">Resmî Güvence</span>
                </div>

              </article>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
