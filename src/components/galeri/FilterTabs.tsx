"use client";

import Reveal from "@/components/shared/Reveal";

const filters = ["Tümü", "Dış Mekan", "Odalar", "Ortak Alanlar", "Tesisler"];

type FilterTabsProps = {
  active: string;
  onChange: (value: string) => void;
};

export default function FilterTabs({ active, onChange }: FilterTabsProps) {
  return (
    <div className="bg-white text-slate-900">

      <section className="relative overflow-hidden border-b border-slate-100 bg-slate-50/50 py-10 sm:py-20 lg:py-28">
        <div className="pointer-events-none absolute -right-20 -top-20 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="max-w-3xl space-y-3 sm:space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50/80 px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-blue-700">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
                <span>Görsel Tur</span>
              </div>

              <h1 className="text-2xl font-extrabold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl leading-[1.15] sm:leading-[1.1]">
                Yaşam Alanlarımızdan Kareler
              </h1>

              <p className="text-sm font-normal leading-relaxed text-slate-600 sm:text-lg">
                Modern mimarimizi, konforlu odalarımızı ve ortak sosyal alanlarımızı detaylarıyla inceleyin.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-white pt-6 pb-3 sm:pt-12 sm:pb-4">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="flex flex-wrap items-center gap-2 border-b border-slate-200 pb-4 sm:pb-6">
              {filters.map((filter) => {
                const isActive = filter === active;
                return (
                  <button
                    key={filter}
                    type="button"
                    onClick={() => onChange(filter)}
                    className={`rounded-full px-3.5 py-2 text-[11px] sm:px-5 sm:py-2.5 sm:text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                      isActive
                        ? "bg-blue-600 text-white shadow-md shadow-blue-600/20"
                        : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900"
                    }`}
                  >
                    {filter}
                  </button>
                );
              })}
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
