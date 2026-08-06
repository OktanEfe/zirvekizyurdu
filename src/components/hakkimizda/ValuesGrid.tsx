import Reveal from "@/components/shared/Reveal";

const manifestoItems = [
  {
    tag: "GÜVENLİK VE HUZUR",
    title: "Ailelerin İçi Rahat, Öğrencilerin Kafası Rahat",
    desc: "Yalnızca fiziki güvenlik önlemleriyle yetinmeyip, öğrencilerin kendilerini evlerinde hissedeceği psikolojik huzur ortamını tesis ediyoruz.",
  },
  {
    tag: "AKADEMİK ODAK",
    title: "Sadece Konaklama Değil, Başarı Ekosistemi",
    desc: "Sessiz etüt alanları, kesintisiz yüksek hızlı fiber internet ve verimli çalışma ortamları ile akademik hedeflere doğrudan katkı sağlıyoruz.",
  },
  {
    tag: "ŞEFFAF İLETİŞİM",
    title: "7/24 Kesintisiz Destek ve Ulaşılabilirlik",
    desc: "Gerek öğrencilerimiz gerekse velilerimiz için her an ulaşılabilir, çözüm odaklı ve şeffaf bir yönetim anlayışıyla hizmet veriyoruz.",
  },
];

export default function ValuesGrid() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-3.5 py-1 text-xs font-semibold text-brand-700">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-600" />
            <span>Prensiplerimiz</span>
          </div>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Kurumsal Standartlar Yaşam Manifestomuz
          </h2>
        </div>

        <div className="mt-16 space-y-8">
          {manifestoItems.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.08}>
              <div className="group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-mist-50/50 p-8 transition-all duration-300 hover:border-brand-300 hover:bg-white hover:shadow-xl hover:shadow-brand-600/5 sm:p-10">
                <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                  <div className="space-y-2 lg:max-w-2xl">
                    <span className="text-xs font-bold uppercase tracking-widest text-brand-600">
                      {item.tag}
                    </span>
                    <h3 className="text-xl font-bold text-slate-900 sm:text-2xl group-hover:text-brand-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
                      {item.desc}
                    </p>
                  </div>

                  <div className="flex shrink-0 items-center justify-center">
                    <span className="text-4xl font-black text-slate-200 transition-colors group-hover:text-brand-200 sm:text-6xl">
                      0{index + 1}
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}