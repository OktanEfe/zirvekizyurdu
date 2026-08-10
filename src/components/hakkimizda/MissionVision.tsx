import Reveal from "@/components/shared/Reveal";

export default function MissionVision() {
  return (
    <section className="bg-slate-950 py-20 lg:py-28 text-white relative overflow-hidden">
      {/* Arka Planda Derin Mor-Mavi Glow Parlama Katmanları */}
      <div className="pointer-events-none absolute left-1/4 top-1/2 -z-10 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-brand-600/20 blur-[140px]" />
      <div className="pointer-events-none absolute right-1/4 top-1/2 -z-10 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-purple-600/20 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Başlık Alanı */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-purple-400/30 bg-purple-500/10 px-4 py-1.5 text-xs font-semibold text-purple-300 backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-purple-400 animate-pulse" />
            <span>Gelecek Yaklaşımımız</span>
          </div>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Değerlerimiz & Gelecek Hedefimiz
          </h2>
        </div>

        {/* Bento Grid Kart Yapısı */}
        <div className="grid gap-8 lg:grid-cols-2">
          
          {/* MİSYON KARTI (Koyu Mor Glow Aksanlı) */}
          <Reveal delay={0.1}>
            <div className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-8 sm:p-10 backdrop-blur-xl shadow-2xl transition-all duration-500 hover:-translate-y-1.5 hover:border-brand-500/50 hover:bg-white/[0.07]">
              
              {/* Sabit İnce Üst Işık Çizgisi */}
              <div className="absolute inset-x-0 top-0 h-[2px] w-full bg-gradient-to-r from-transparent via-brand-400 to-transparent" />
              <div className="pointer-events-none absolute -right-12 -top-12 -z-10 h-40 w-40 rounded-full bg-brand-500/15 blur-2xl" />

              <div>
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-2 rounded-full bg-brand-500/20 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-brand-300 ring-1 ring-brand-400/30">
                    Misyonumuz
                  </span>
                </div>

                <h3 className="mt-6 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                  Güvenli, konforlu ve modern bir geleceğin temeli.
                </h3>

                <p className="mt-4 text-base leading-relaxed text-slate-300 font-light">
                  Öğrencilerimize yüksek güvenlik ve otel konforunu bir arada sunarak, eğitim hayatlarında en yüksek potansiyellerine ulaşmalarına katkı sağlıyoruz. Aile sıcaklığında, koşulsuz memnuniyet anlayışıyla gençlerimizin yarınlarına değer katmak en temel önceliğimizdir.
                </p>
              </div>

              <div className="mt-8 flex items-center gap-2 text-xs font-semibold text-brand-400">
                <span>Öğrenci Odaklı Hizmet</span>
                <span className="h-1 w-1 rounded-full bg-brand-400" />
                <span>Kesintisiz Konfor</span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-8 sm:p-10 backdrop-blur-xl shadow-2xl transition-all duration-500 hover:-translate-y-1.5 hover:border-purple-500/50 hover:bg-white/[0.07]">
              
              <div className="absolute inset-x-0 top-0 h-[2px] w-full bg-gradient-to-r from-transparent via-purple-400 to-transparent" />
              <div className="pointer-events-none absolute -right-12 -top-12 -z-10 h-40 w-40 rounded-full bg-purple-500/15 blur-2xl" />

              <div>
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-2 rounded-full bg-purple-500/20 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-purple-300 ring-1 ring-purple-400/30">
                    Vizyonumuz
                  </span>
                </div>

                <h3 className="mt-6 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                  Öğrenci yaşam standartlarında öncü ve tercih edilen marka.
                </h3>

                <p className="mt-4 text-base leading-relaxed text-slate-300 font-light">
                  Türkiye&apos;nin en güvenilir ve örnek gösterilen öğrenci rezidansları arasında zirvedeki yerimizi korumak. İnovatif yönetim anlayışımız, teknolojik altyapımız ve sürekli yenilenen modern imkânlarımızla sektördeki kalite standartlarını belirlemek.
                </p>
              </div>

              <div className="mt-8 flex items-center gap-2 text-xs font-semibold text-purple-400">
                <span>Lider Kalite Standartları</span>
                <span className="h-1 w-1 rounded-full bg-purple-400" />
                <span>Sürekli Gelişim</span>
              </div>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}