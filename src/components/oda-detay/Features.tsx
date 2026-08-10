"use client";

type FeaturesProps = {
  features: string[];
};

export default function Features({ features }: FeaturesProps) {
  return (
    <section className="py-16 bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Üst Başlık Alani */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-3.5 py-1 text-[11px] font-bold uppercase tracking-widest text-blue-400 backdrop-blur-md">
            <span>Oda Donanımı</span>
          </div>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Odanın sunduğu konfor
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-400 sm:text-base">
            Seçtiğiniz odanın sunduğu tüm ayrıcalık ve teknik detayları aşağıda inceleyebilirsiniz.
          </p>
        </div>

        {/* Özellikler Izgarası */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, idx) => (
            <div
              key={`${feature}-${idx}`}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.02] p-6 backdrop-blur-xl transition-all duration-300 hover:border-blue-500/50 hover:bg-white/[0.08] hover:shadow-2xl hover:shadow-blue-500/10"
            >
              {/* Sol Accent Çizgi */}
              <div className="mb-4 h-0.5 w-8 rounded-full bg-blue-500 transition-all duration-300 group-hover:w-12 group-hover:bg-blue-400" />
              
              <p className="text-sm font-semibold tracking-wide text-slate-200 transition-colors duration-300 group-hover:text-white">
                {feature}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}