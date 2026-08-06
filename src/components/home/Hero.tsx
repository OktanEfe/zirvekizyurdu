"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const images = [
  { src: "/images/room-1.jpg", alt: "Yurt odası" },
  { src: "/images/room-2.jpg", alt: "Ortak alan" },
  { src: "/images/gallery-1.jpg", alt: "Bahçe alanı" },
];

const dynamicWords = ["en konforlu", "en güvenli", "en modern"];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % dynamicWords.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-slate-950 text-white pt-20 pb-12 lg:py-0">
      {/* Arka Plan Ambient Glow Efektleri */}
      <div className="pointer-events-none absolute -left-20 -top-20 h-[500px] w-[500px] rounded-full bg-blue-600/20 blur-[120px]" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-[400px] w-[400px] rounded-full bg-rose-600/15 blur-[120px]" />

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          
          {/* Sol Kolon: Tipografi ve Aksiyon Alanı */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Çarpıcı Kırmızı Uyarı Rozeti */}
            <div className="inline-flex items-center gap-2.5 rounded-full border border-rose-500/40 bg-rose-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-rose-400 backdrop-blur-md shadow-lg shadow-rose-950/50">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-rose-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-rose-500" />
              </span>
              <span>Yeni Dönem Kayıtları Başladı</span>
            </div>

            {/* Ana Başlık ve Dinamik Metin */}
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl leading-[1.15]">
              Kocaeli’de öğrenciliğin{" "}
              <span className="inline-grid [grid-template-areas:'stack'] overflow-hidden text-blue-400">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={dynamicWords[index]}
                    initial={{ y: "100%", opacity: 0 }}
                    animate={{ y: "0%", opacity: 1 }}
                    exit={{ y: "-100%", opacity: 0 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    className="[grid-area:stack] whitespace-nowrap"
                  >
                    {dynamicWords[index]}
                  </motion.span>
                </AnimatePresence>
              </span>{" "}
              adresi
            </h1>

            <p className="max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
              Güvenlik, yüksek konfor ve sosyal imkânları tek bir çatı altında birleştiriyoruz. Kampüse birkaç dakika mesafede ev konforunu yaşayın.
            </p>

            {/* Aksiyon Butonları */}
            <div className="pt-2 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link
                href="/iletisim"
                className="inline-flex items-center justify-center rounded-full bg-blue-600 px-8 py-4 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-blue-600/30 transition-all duration-300 hover:bg-blue-500 hover:shadow-blue-500/50 active:scale-[0.98]"
              >
                Hemen İletişime Geç →
              </Link>

              <Link
                href="https://wa.me/905382123011"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-700 bg-slate-900/80 px-8 py-4 text-xs font-bold uppercase tracking-wider text-slate-200 transition-all duration-300 hover:border-emerald-500 hover:bg-slate-800 hover:text-emerald-400 active:scale-[0.98]"
              >
                <span>WhatsApp’tan Ulaşın</span>
              </Link>
            </div>

            {/* İstatistik Vurguları */}
            <div className="grid grid-cols-3 gap-4 border-t border-slate-800/80 pt-8 mt-8">
              <div>
                <p className="text-2xl font-extrabold text-white sm:text-3xl">7/24</p>
                <p className="mt-1 text-xs font-medium text-slate-400">Güvenlik & Kamera</p>
              </div>
              <div>
                <p className="text-2xl font-extrabold text-rose-500 sm:text-3xl">%98</p>
                <p className="mt-1 text-xs font-medium text-slate-400">Öğrenci Memnuniyeti</p>
              </div>
              <div>
                <p className="text-2xl font-extrabold text-white sm:text-3xl">5 dk</p>
                <p className="mt-1 text-xs font-medium text-slate-400">Kampüse Mesafe</p>
              </div>
            </div>

          </div>

          {/* Sağ Kolon: Görsel Grid ve Yüzen Rozetler */}
          <div className="relative lg:col-span-6">
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              
              <div className="group relative aspect-[4/5] overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 shadow-2xl">
                <Image
                  src={images[0].src}
                  alt={images[0].alt}
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-70" />
              </div>

              <div className="flex flex-col gap-3 sm:gap-4">
                <div className="group relative aspect-[4/3] overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 shadow-2xl">
                  <Image
                    src={images[1].src}
                    alt={images[1].alt}
                    fill
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-70" />
                </div>

                <div className="group relative aspect-[4/3] overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 shadow-2xl">
                  <Image
                    src={images[2].src}
                    alt={images[2].alt}
                    fill
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-70" />
                </div>
              </div>

            </div>

            {/* Yüzen Cam (Glassmorphism) Bilgi Kartı */}
            <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-slate-700/60 bg-slate-900/90 p-4 shadow-2xl backdrop-blur-xl sm:flex sm:items-center sm:gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600/20 text-blue-400 font-bold">
                ★
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-white">Tam Donanımlı</p>
                <p className="text-[11px] text-slate-400">Çalışma Alanları & Yüksek Hızlı İnternet</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}