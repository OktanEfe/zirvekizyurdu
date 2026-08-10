"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/shared/Reveal";
import { galleryPreviewImages } from "@/lib/data";

export default function GalleryPreview() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleNext = useCallback(() => {
    setSelectedIndex((prev) =>
      prev !== null ? (prev + 1) % galleryPreviewImages.length : prev
    );
  }, []);

  const handlePrev = useCallback(() => {
    setSelectedIndex((prev) =>
      prev !== null
        ? (prev - 1 + galleryPreviewImages.length) % galleryPreviewImages.length
        : prev
    );
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === "Escape") setSelectedIndex(null);
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, handleNext, handlePrev]);

  return (
    <section className="bg-mist-50/60 py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Başlık Alanı & Tipografi */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-3.5 py-1 text-xs font-semibold text-brand-700">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-600" />
            <span>Galeri</span>
          </div>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Yurdumuzdan kareler
          </h2>
        </div>

        {/* Galeri Grid Yapısı */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {galleryPreviewImages.map((item, index) => (
            <Reveal key={item.src} delay={index * 0.08}>
              <div
                onClick={() => setSelectedIndex(index)}
                className="group relative cursor-pointer overflow-hidden rounded-2xl bg-slate-900 shadow-sm ring-1 ring-slate-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                
                {/* Görsel Katmanı */}
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    priority
                  />
                  {/* Karartma Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent transition-opacity duration-300 group-hover:opacity-90" />
                </div>

                {/* Başlık ve Hover İkon Katmanı */}
                <div className="absolute inset-x-0 bottom-0 p-5 flex items-end justify-between">
                  <h3 className="text-base font-bold text-white drop-shadow-sm">
                    {item.title}
                  </h3>
                  
                  {/* Büyüteç / Detay İkonu */}
                  <div className="flex h-9 w-9 translate-y-2 items-center justify-center rounded-full bg-white/20 text-white opacity-0 backdrop-blur-md transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="11" cy="11" r="8" />
                      <path d="m21 21-4.35-4.35" />
                    </svg>
                  </div>
                </div>

              </div>
            </Reveal>
          ))}
        </div>

        {/* Primary Action Button */}
        <div className="mt-12 flex justify-center">
          <Link
            href="/galeri"
            className="inline-flex items-center justify-center rounded-full bg-brand-600 px-8 py-3.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-brand-700 hover:shadow-md hover:shadow-brand-600/20 active:scale-[0.98]"
          >
            Tüm Galeriyi Gör
          </Link>
        </div>

      </div>

      {/* LIGHTBOX MODAL */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/95 p-4 backdrop-blur-md"
          onClick={() => setSelectedIndex(null)}
        >
          <button
            onClick={() => setSelectedIndex(null)}
            className="absolute right-6 top-6 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-xl font-bold text-white transition-colors hover:bg-white/20"
            aria-label="Kapat"
          >
            ✕
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            className="absolute left-4 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-2xl font-bold text-white transition-colors hover:bg-white/20"
            aria-label="Önceki"
          >
            ‹
          </button>

          <div
            className="relative h-[70vh] w-[90vw] max-w-4xl overflow-hidden rounded-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={galleryPreviewImages[selectedIndex].src}
              alt={galleryPreviewImages[selectedIndex].title}
              fill
              className="object-contain"
            />
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="absolute right-4 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-2xl font-bold text-white transition-colors hover:bg-white/20"
            aria-label="Sonraki"
          >
            ›
          </button>

          <div className="absolute bottom-6 rounded-full border border-white/20 bg-black/60 px-4 py-1.5 text-xs font-semibold text-white">
            {galleryPreviewImages[selectedIndex].title} · {selectedIndex + 1} / {galleryPreviewImages.length}
          </div>
        </div>
      )}
    </section>
  );
}