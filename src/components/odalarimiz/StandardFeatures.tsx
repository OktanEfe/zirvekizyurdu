import Reveal from "@/components/shared/Reveal";
import { standardRoomFeatures } from "@/lib/data";

export default function StandardFeatures() {
  return (
    <div className="bg-white text-slate-900">
      
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden border-b border-slate-100 bg-slate-50/50 py-24 lg:py-32">
        {/* Yumuşak Mavi Glow Vurgusu */}
        <div className="pointer-events-none absolute -right-20 -top-20 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="max-w-3xl space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50/80 px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-blue-700">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
                <span>Yaşam Alanlarımız</span>
              </div>

              <h1 className="text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl leading-[1.1]">
                Konfor ve Odaklanma İçin Tasarlanmış Odalar
              </h1>

              <p className="text-base font-normal leading-relaxed text-slate-600 sm:text-lg">
                Yüksek yaşam standartlarını mimari detaylarla birleştiren kişisel alanlarınızı keşfedin. Tüm oda tiplerimizde ihtiyacınız olan donanımlar eksiksiz sunulur.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 2. STANDART ÖZELLİKLER (KUTUSUZ EDİTORYAL DİZİLİM) */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <Reveal>
            {/* Alt Başlık Katmanı */}
            <div className="mb-16 border-b border-slate-200 pb-8">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
                Standart Standartlar
              </span>
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
                Tüm Odalarda Dahil Olan Donanımlar
              </h2>
            </div>
          </Reveal>

          {/* Kutusuz, Çizgi Seperatörlü Editoryal Liste */}
          <div className="grid gap-x-12 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {standardRoomFeatures.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.05}>
                <div className="group relative border-l-2 border-slate-200 pl-6 transition-all duration-300 hover:border-blue-600">
                  
                  {/* Üst Kısım Vurgusu */}
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 group-hover:text-blue-600 transition-colors">
                    Ayrıcalık
                  </span>

                  {/* Başlık */}
                  <h3 className="mt-2 text-xl font-bold tracking-tight text-slate-950 group-hover:text-blue-700 transition-colors">
                    {item.title}
                  </h3>

                  {/* Açıklama */}
                  <p className="mt-3 text-sm leading-relaxed text-slate-600 font-normal">
                    {item.description}
                  </p>

                </div>
              </Reveal>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}