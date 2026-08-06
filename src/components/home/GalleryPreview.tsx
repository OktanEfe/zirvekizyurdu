"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";

const dynamicWords = ["en konforlu", "en güvenli", "en modern", "en ayrıcalıklı"];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % dynamicWords.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-white text-slate-900">
      
      {/* Görseldeki Gibi Merkezdeki Mavi Radial Glow / Parlama Efekti */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
      >
        <div className="h-[500px] w-[500px] rounded-full bg-blue-100/70 blur-[100px] sm:h-[650px] sm:w-[650px] sm:blur-[130px]" />
      </div>

      {/* Ana İçerik Konteynırı */}
      <div className="relative z-10 mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        
        {/* Kırmızı Vurgulu Kontenjan Uyarısı */}
        <div className="inline-flex items-center gap-2.5 rounded-full border border-rose-200 bg-rose-50/90 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-rose-600 shadow-sm backdrop-blur-md">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-rose-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-rose-600" />
          </span>
          <span>Yeni Kontenjanlar Açıldı</span>
        </div>

        {/* Tipografi ve Dinamik Kelime Geçişi */}
        <h1 className="mt-8 text-4xl font-extrabold tracking-tight text-slate-950 sm:text-6xl lg:text-7xl leading-[1.15]">
          Kocaeli’de öğrenciliğin{" "}
          <span className="inline-grid [grid-template-areas:'stack'] overflow-hidden text-blue-600">
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
          yaşam adresi
        </h1>

        {/* Uzun Açıklama Metni */}
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
          Güvenlik, yüksek konfor ve sosyal imkânları tek bir çatıda buluşturan mimarimizle evinizin sıcaklığını aratmayan bir ortam sunuyoruz. Yeni dönem fırsatlarını kaçırmadan yerinizi ayırtın.
        </p>

        {/* Aksiyon Butonları */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/iletisim"
            className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-blue-600 px-8 py-4 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-blue-600/20 transition-all duration-300 hover:bg-blue-700 hover:shadow-blue-600/30 active:scale-[0.98]"
          >
            Hemen Başvuru Yap →
          </Link>

          <Link
            href="https://wa.me/905382123011"
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white/80 px-8 py-4 text-xs font-bold uppercase tracking-wider text-slate-700 shadow-sm transition-all duration-300 hover:border-emerald-500 hover:bg-emerald-50/50 hover:text-emerald-600 active:scale-[0.98]"
          >
            <span>WhatsApp Destek</span>
          </Link>
        </div>

      </div>
    </section>
  );
}