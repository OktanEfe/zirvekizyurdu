import Reveal from "@/components/shared/Reveal";
import { serviceDetails } from "@/lib/data";

export default function ServicesGrid() {
  return (
    <section className="bg-slate-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50/80 px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-blue-700">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
              <span>Hizmet Standartlarımız</span>
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              Kampüs Yaşamınız İçin Eksiksiz Standartlar
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-slate-600 sm:text-base">
            Konfor, güvenlik ve akademik odaklılığı tek çatı altında buluşturan ayrıcalıklı hizmet detaylarımız.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
          {serviceDetails.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.04}>
              <article className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-900/5 sm:p-6">
                <div className="absolute left-0 top-0 h-full w-1 bg-blue-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div>
                  <div className="inline-block rounded-md bg-blue-50 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-blue-700 ring-1 ring-inset ring-blue-700/10 transition-colors group-hover:bg-blue-600 group-hover:text-white sm:text-xs">
                    Ayrıcalık
                  </div>

                  <h3 className="mt-4 text-lg font-bold tracking-tight text-slate-900 transition-colors group-hover:text-blue-700 sm:text-xl">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm font-normal leading-relaxed text-slate-600 sm:text-base">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 border-t border-slate-100 pt-4">
                  <div className="h-0.5 w-10 bg-blue-100 transition-all duration-500 group-hover:w-full group-hover:bg-blue-600" />
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
