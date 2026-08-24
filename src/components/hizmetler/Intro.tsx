import Image from "next/image";
import Reveal from "@/components/shared/Reveal";

const highlights = [
  {
    number: "01",
    category: "GÜVENLİK",
    title: "7/24 Kesintisiz Koruma",
  },
  {
    number: "02",
    category: "İNTERNET",
    title: "Yüksek Hızlı Fiber Wi-Fi",
  },
  {
    number: "03",
    category: "BESLENME",
    title: "Açık Büfe Kahvaltı",
  },
  {
    number: "04",
    category: "HİJYEN",
    title: "Düzenli Kat & Oda Temizliği",
  },
];

export default function Intro() {
  return (
    <div className="bg-slate-950 text-white">

      <section className="relative flex min-h-[440px] w-full items-end overflow-hidden bg-slate-950 sm:min-h-[500px] lg:min-h-[540px]">

        <Image
          src="/hizmetler/hero.jpeg"
          alt="Zirve Kız Yurdu Hizmetler"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-30"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/50 to-transparent" />

        <div className="pointer-events-none absolute -left-20 top-1/4 h-96 w-96 rounded-full bg-brand-600/20 blur-[140px]" />
        <div className="pointer-events-none absolute right-10 top-1/3 h-80 w-80 rounded-full bg-purple-600/15 blur-[130px]" />

        <div className="relative mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
          <Reveal>
            <div className="max-w-3xl space-y-5">
              <div className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-md">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-400" />
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-300">
                  Hizmet Standartlarımız
                </span>
              </div>

              <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl leading-[1.1]">
                Ayrıcalıklı Yaşam{" "}
                <span className="bg-gradient-to-r from-brand-200 via-slate-100 to-purple-200 bg-clip-text text-transparent">
                  Standartları
                </span>
              </h1>

              <p className="max-w-2xl text-base font-light leading-relaxed text-slate-300 sm:text-lg">
                Zirve Kız Yurdu, öğrencilerimizin konforunu en üst seviyeye çıkararak tüm süreçleri kolaylaştırmak ve tamamen akademik başarılarına odaklanmalarını sağlamak üzere kurgulanmıştır.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-white/10 bg-slate-900/40 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal delay={0.1}>
            <div className="grid grid-cols-2 divide-x divide-y divide-white/10 md:grid-cols-4 md:divide-y-0">
              {highlights.map((item) => (
                <div key={item.number} className="flex flex-col justify-between p-6 lg:p-8">
                  <span className="text-xs font-bold tracking-widest text-brand-400">
                    {item.number}
                  </span>
                  <div className="mt-6 space-y-1">
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
                      {item.category}
                    </p>
                    <p className="text-sm font-semibold tracking-tight text-white sm:text-base">
                      {item.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
