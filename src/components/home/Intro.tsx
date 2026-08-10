import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/shared/Reveal";

export default function Intro() {
  return (
    <Reveal>
      {/* Hero (Beyaz) sonrası Almaşık Arka Plan (%25 Açık Mavi/Gri) ve Standart Spacing */}
      <section className="bg-mist-50/60 py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:px-8 lg:grid-cols-2 lg:items-center">
          
          {/* Görsel Container: Tutarlı Kenar Yuvarlaklığı ve Overlay Standartları */}
          <div className="group relative overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-900/5">
            <div className="relative aspect-[4/3] w-full sm:aspect-[4/5]">
              <Image
                src="/anasayfa/hakkımızda.jpg"
                alt="Hakkımızda"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-transparent opacity-60" />
            </div>
          </div>

          {/* Tipografi ve İçerik Alanı */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-600" />
              <span>Hakkımızda</span>
            </div>

            <h2 className="max-w-xl text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl leading-snug">
              Güvenli, konforlu ve üniversitelere yakın öğrenci yurdu
            </h2>

            <div className="space-y-4 text-base leading-relaxed text-slate-600">
              <p>
                Zirve Kız Yurdu, Kocaeli&apos;de güvenlik, hijyen ve akademik odaklı yaşam alanı sunar. Odalar modern, ferah ve öğrencilerin günlük ihtiyaçlarını karşılayacak şekilde tasarlanmıştır.
              </p>
              <p>
                2010&apos;dan beri hizmet veriyoruz ve her yıl binlerce öğrencinin eğitim yolculuğuna destek oluyoruz. Aile sıcaklığı ve yüksek memnuniyetle yurt yaşamını kolaylaştırıyoruz.
              </p>
            </div>

            {/* Secondary Button Standardı (Açık Mavi Outline / Soft Background) */}
            <div className="pt-2">
              <Link
                href="/hakkimizda"
                className="inline-flex items-center gap-2 rounded-full border border-mist-200 bg-white px-7 py-3 text-sm font-semibold text-slate-700 shadow-sm transition-all hover:border-brand-200 hover:bg-mist-100 hover:text-brand-600 active:scale-[0.98]"
              >
                <span>Devamını Oku</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

        </div>
      </section>
    </Reveal>
  );
}