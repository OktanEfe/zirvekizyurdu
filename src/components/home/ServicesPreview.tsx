import Link from "next/link";
import Reveal from "@/components/shared/Reveal";
import { services } from "@/lib/data";

export default function ServicesPreview() {
  const featuredServices = services.slice(0, 4);

  return (
    <section className="bg-mist-50/60 py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-3.5 py-1 text-xs font-semibold text-brand-700">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-600" />
              <span>Hizmetlerimiz</span>
            </div>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Öne çıkan olanaklarımız
            </h2>
          </div>
          
          <Link
            href="/hizmetlerimiz"
            className="inline-flex items-center gap-2 rounded-full border border-mist-200 bg-white px-6 py-2.5 text-sm font-semibold text-slate-700 shadow-sm transition-all hover:border-brand-200 hover:bg-mist-100 hover:text-brand-600"
          >
            <span>Tüm Hizmetleri Gör</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredServices.map((service, index) => (
            <Reveal key={service.title} delay={index * 0.08}>
              <article className="group h-full rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-brand-200 hover:shadow-md">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-600 group-hover:bg-brand-600 group-hover:text-white">
                  ✓
                </div>
                <h3 className="text-base font-bold text-slate-900">{service.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-600">{service.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}