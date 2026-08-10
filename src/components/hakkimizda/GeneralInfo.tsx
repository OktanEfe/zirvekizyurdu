import Reveal from "@/components/shared/Reveal";
import { generalInfo } from "@/lib/data";

function CheckIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

export default function GeneralInfo() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-3.5 py-1 text-xs font-semibold text-brand-700">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-600" />
              <span>Genel Bilgiler</span>
            </div>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Bizi güvenilir kılan detaylar
            </h2>
          </div>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-x-10 gap-y-4 sm:grid-cols-2">
          {generalInfo.map((item, index) => (
            <Reveal key={item} delay={index * 0.05}>
              <div className="flex items-start gap-3 border-b border-slate-100 py-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-600 text-white">
                  <CheckIcon />
                </span>
                <p className="text-sm leading-relaxed text-slate-700 sm:text-base">{item}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
