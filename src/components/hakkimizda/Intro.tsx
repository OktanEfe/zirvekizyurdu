import Image from "next/image";
import Reveal from "@/components/shared/Reveal";

export default function Intro() {
  return (
    <div className="bg-slate-950 text-white">

      <section className="relative min-h-[520px] w-full overflow-hidden sm:min-h-[600px] lg:min-h-[640px] flex items-end">

        <Image
          src="/hakkimizda/hero.jpeg"
          alt="Zirve Kız Yurdu Genel Görünüm"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-40 scale-105 transition-transform duration-1000 ease-out hover:scale-100"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/30 to-transparent" />

        <div className="pointer-events-none absolute -left-20 top-1/4 h-96 w-96 rounded-full bg-brand-600/20 blur-[120px]" />

        <div className="relative mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
          <Reveal>
            <div className="max-w-3xl space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full border border-brand-400/30 bg-brand-500/10 px-4 py-1.5 text-xs font-semibold tracking-wider text-brand-300 backdrop-blur-md">
                <span className="h-2 w-2 rounded-full bg-brand-400 animate-pulse" />
                <span>PREMIUM KIZ ÖĞRENCİ RESİDENCE</span>
              </div>

              <h1 className="text-4xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl leading-[1.1]">
                Geleceğe <br />
                <span className="bg-gradient-to-r from-brand-300 via-blue-200 to-indigo-300 bg-clip-text text-transparent">
                  Zirve&apos;de Hazırlanın
                </span>
              </h1>

              <p className="max-w-2xl text-base text-slate-300 sm:text-xl font-light leading-relaxed">
                Kocaeli Üniversitesi&apos;nin yanı başında; otel konforunu, ev sıcaklığını ve kesintisiz güvenliği bir arada sunan ayrıcalıklı bir yaşam alanı.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative bg-white py-20 lg:py-28 text-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">

            <div className="lg:col-span-6 space-y-8">
              <Reveal delay={0.1}>
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-3.5 py-1 text-xs font-semibold text-brand-700">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-600" />
                    <span>Hakkımızda</span>
                  </div>

                  <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl leading-tight">
                    Sadece bir barınma alanı değil, bir yaşam kültürü.
                  </h2>

                  <p className="text-base leading-relaxed text-slate-600 sm:text-lg">
                    Zirve Kız Yurdu, uzman yönetim kadrosu ve huzurlu ortamı ile öğrencilerin eğitim yolculuğunu güçlendirir. Kocaeli Üniversitesi&apos;ne <strong className="font-semibold text-slate-900">sadece 1 dakika</strong> mesafedeki konumumuzla zamanınızı tamamen kendinize ve derslerinize ayırmanızı sağlıyoruz.
                  </p>

                  <p className="text-base leading-relaxed text-slate-600">
                    1997&apos;den bu yana binlerce öğrencimizin tercihi olduk. Aile sıcaklığında bir ortamı yüksek güvenlik, modern mimari ve kesintisiz otel konforu standartlarıyla sunuyoruz.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="grid grid-cols-3 gap-4 pt-4">
                  <div className="rounded-2xl border border-slate-200/80 bg-slate-50/80 p-5 text-center shadow-sm transition-all hover:border-brand-200 hover:bg-white hover:shadow-md">
                    <p className="text-3xl font-extrabold text-brand-600 lg:text-4xl">29+</p>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-slate-500">Yıllık Deneyim</p>
                  </div>

                  <div className="rounded-2xl border border-slate-200/80 bg-slate-50/80 p-5 text-center shadow-sm transition-all hover:border-brand-200 hover:bg-white hover:shadow-md">
                    <p className="text-3xl font-extrabold text-slate-900 lg:text-4xl">1 Dk</p>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-slate-500">Kampüs Mesafe</p>
                  </div>

                  <div className="rounded-2xl border border-slate-200/80 bg-slate-50/80 p-5 text-center shadow-sm transition-all hover:border-brand-200 hover:bg-white hover:shadow-md">
                    <p className="text-3xl font-extrabold text-brand-600 lg:text-4xl">%98</p>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-slate-500">Memnuniyet</p>
                  </div>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-6">
              <Reveal delay={0.15}>
                <div className="relative mx-auto max-w-md lg:max-w-none">

                  <div className="group relative overflow-hidden rounded-3xl bg-slate-900 shadow-2xl ring-1 ring-slate-900/10">
                    <div className="relative aspect-[4/5] w-full">
                      <Image
                        src="/hakkimizda/hakkimizda.jpeg"
                        alt="Zirve Kız Yurdu dış cephe"
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                    </div>
                  </div>

                  <div className="absolute -bottom-6 -left-6 rounded-2xl border border-white/40 bg-white/90 p-5 shadow-2xl backdrop-blur-xl sm:-left-8 sm:p-6">
                    <div className="flex items-center gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-600 text-white font-black text-xl shadow-md shadow-brand-600/30 sm:h-12 sm:w-12">
                        ✓
                      </div>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-brand-600">Resmî Onaylı</p>
                        <p className="text-sm font-bold text-slate-900">Gençlik ve Spor Bakanlığı Onaylı</p>
                      </div>
                    </div>
                  </div>

                  <div className="pointer-events-none absolute -bottom-10 -right-10 -z-10 h-64 w-64 rounded-full bg-brand-100/60 blur-3xl" />

                </div>
              </Reveal>
            </div>

          </div>

        </div>
      </section>
    </div>
  );
}
