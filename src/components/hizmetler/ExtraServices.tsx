import Reveal from "@/components/shared/Reveal";

const serviceSteps = [
  {
    phase: "ADIM 01",
    tag: "Giriş & Hizmet Tanımlama",
    title: "Kişiselleştirilmiş Oryantasyon",
    description: "Kayıt tamamlandığı an dijital kart/biyometrik tanımlamalarınız yapılır. Kat ve oda kuralları ile fiber internet erişim şifreleriniz anında teslim edilir."
  },
  {
    phase: "ADIM 02",
    tag: "Günlük Yaşam & Beslenme",
    title: "Kesintisiz Sabah & Akşam Servisi",
    description: "Haftanın her günü diyetisyen kontrolünde hazırlanan taze açık büfe kahvaltı ve akşam yemekleri belirlenen hijyenik saat aralıklarında sunulur."
  },
  {
    phase: "ADIM 03",
    tag: "Bakım & Kat Hizmetleri",
    title: "Periyodik Oda Hijyeni",
    description: "Ortak alanlar her gün temizlenirken, odanız haftalık belirlenen takvim doğrultusunda derinlemesine temizlenir ve tekstil ürünleri yenilenir."
  },
  {
    phase: "ADIM 04",
    tag: "Destek & Güvenlik",
    title: "7/24 Kesintisiz Destek Operasyonu",
    description: "Gece vardiyalı güvenlik personeli, kapalı devre izleme ve 24 saat aktif teknik destek hattı ile her an güvendesiniz."
  }
];

export default function ServiceProcess() {
  return (
    <section className="bg-white py-20 lg:py-28 text-slate-900 border-t border-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>

          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end border-b border-slate-100 pb-12">
            <div className="max-w-2xl space-y-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50/80 px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-blue-700">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
                <span>Operasyon Akışı</span>
              </div>
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
                Hizmet Deneyimi Nasıl İşler?
              </h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-slate-600 sm:text-base">
              Yurdumuzda sunulan tüm olanaklar belirli bir plan ve yüksek standartlar dahilinde aksamadan yürütülür.
            </p>
          </div>

          <div className="relative mt-16 space-y-12 before:absolute before:inset-0 before:left-4 before:h-full before:w-0.5 before:bg-slate-200 md:before:left-1/2 md:before:-ml-0.5">
            {serviceSteps.map((step, index) => {
              const isEven = index % 2 === 0;

              return (
                <div key={step.phase} className="relative flex flex-col md:flex-row items-start">

                  <div className="absolute left-4 top-1.5 -translate-x-1/2 md:left-1/2 z-10 flex h-4 w-4 items-center justify-center rounded-full bg-white ring-4 ring-blue-600" />

                  <div className={`pl-12 md:pl-0 md:w-1/2 ${isEven ? "md:pr-16 md:text-right" : "md:ml-auto md:pl-16"}`}>
                    <div className="group rounded-2xl border border-slate-200/80 bg-slate-50/50 p-6 lg:p-8 transition-all duration-300 hover:border-blue-300 hover:bg-white hover:shadow-xl hover:shadow-blue-900/5">

                      <div className={`flex items-center gap-3 ${isEven ? "md:justify-end" : "justify-start"}`}>
                        <span className="text-xs font-bold tracking-widest text-blue-600">
                          {step.phase}
                        </span>
                        <span className="h-1 w-1 rounded-full bg-slate-300" />
                        <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                          {step.tag}
                        </span>
                      </div>

                      <h3 className="mt-4 text-xl font-bold tracking-tight text-slate-950 transition-colors group-hover:text-blue-700">
                        {step.title}
                      </h3>

                      <p className="mt-3 text-sm leading-relaxed text-slate-600">
                        {step.description}
                      </p>

                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </Reveal>
      </div>
    </section>
  );
}
