"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const dynamicWords = ["en konforlu", "en güvenli", "en modern", "en ayrıcalıklı"];

const floatingCards = [
  {
    title: "Konforlu Odalar",
    src: "/images/room-1.jpg",
    className: "top-12 left-4 lg:left-12 -rotate-3",
    delay: 0.2,
  },
  {
    title: "Kampüs Hayatı",
    src: "/images/room-2.jpg",
    className: "top-16 right-4 lg:right-12 rotate-3",
    delay: 0.3,
  },
  {
    title: "Lounge & Sosyal Alan",
    src: "/images/gallery-1.jpg",
    className: "bottom-12 left-6 lg:left-16 rotate-2",
    delay: 0.4,
  },
  {
    title: "Çalışma & Etüt Odası",
    src: "/images/room-1.jpg",
    className: "bottom-16 right-6 lg:right-16 -rotate-2",
    delay: 0.5,
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % dynamicWords.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-[#F8FAFC] py-20 text-slate-900">
      
      {/* Arka Plan Mavi Radial Parlama & Dairesel İz/Ağ Çizgileri */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 flex items-center justify-center">
        {/* Glow */}
        <div className="h-[450px] w-[700px] rounded-full bg-blue-400/25 blur-[120px] sm:h-[600px] sm:w-[950px] sm:blur-[160px]" />
        
        {/* Konsantrik Halka Çizgileri (Görseldeki Ağ Havası İçin) */}
        <div className="absolute h-[500px] w-[500px] rounded-full border border-blue-200/40 sm:h-[750px] sm:w-[750px]" />
        <div className="absolute h-[700px] w-[700px] rounded-full border border-blue-100/30 sm:h-[1050px] sm:w-[1050px]" />
      </div>

      {/* Yüzen Cam Görsel Kartları (Etraftaki Kartlar) */}
      <div className="pointer-events-none absolute inset-0 mx-auto max-w-7xl">
        {floatingCards.map((card, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: card.delay, ease: "easeOut" }}
            className={`absolute hidden xl:block ${card.className}`}
          >
            <div className="group relative w-56 overflow-hidden rounded-2xl border border-white/60 bg-white/70 p-2 shadow-xl shadow-blue-900/5 backdrop-blur-md transition-transform duration-500 hover:scale-105">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-slate-100">
                <Image
                  src={card.src}
                  alt={card.title}
                  fill
                  sizes="224px"
                  className="object-cover"
                />
              </div>
              <p className="mt-2 text-center text-xs font-bold text-slate-700">
                {card.title}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Ana Merkez İçerik */}
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        
        {/* Kırmızı Uyarı Rozeti */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 rounded-full border border-rose-200 bg-rose-50/90 px-4 py-1.5 text-xs font-semibold text-rose-600 shadow-sm backdrop-blur-md"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-rose-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-rose-600" />
          </span>
          <span>Yeni Kontenjanlar Açıldı</span>
        </motion.div>

        {/* Ana Başlık ve Dinamik Metin */}
        <div className="relative mt-8">
          <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-6xl lg:text-7xl leading-[1.2]">
            Kocaeli’de öğrenciliğin{" "}
            <span className="relative inline-block w-[260px] sm:w-[380px] lg:w-[440px] text-center align-bottom font-bold text-blue-600">
              <span className="inline-grid [grid-template-areas:'stack'] overflow-hidden w-full">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={dynamicWords[index]}
                    initial={{ y: "100%", opacity: 0 }}
                    animate={{ y: "0%", opacity: 1 }}
                    exit={{ y: "-100%", opacity: 0 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    className="[grid-area:stack] block w-full text-center"
                  >
                    {dynamicWords[index]}
                  </motion.span>
                </AnimatePresence>
              </span>
            </span>{" "}
            yaşam adresi
          </h1>
        </div>

        {/* Açıklama Metni */}
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
          Güvenlik, yüksek konfor ve sosyal imkânları tek bir çatı altında birleştiriyoruz. Kampüse birkaç dakika mesafede ev konforunu yaşayın.
        </p>

        {/* Aksiyon Butonları */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/iletisim"
            className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-blue-600 px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 transition-all duration-300 hover:bg-blue-700 hover:shadow-blue-500/40 active:scale-[0.98]"
          >
            Hemen İletişime Geç →
          </Link>

          <Link
            href="https://wa.me/905382123011"
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white/80 px-8 py-4 text-sm font-semibold text-slate-700 shadow-sm transition-all duration-300 hover:border-emerald-500 hover:bg-emerald-50/50 hover:text-emerald-600 active:scale-[0.98]"
          >
            <span>WhatsApp’tan Ulaşın</span>
          </Link>
        </div>

      </div>
    </section>
  );
}