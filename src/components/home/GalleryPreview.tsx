"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/shared/Reveal";
import { useSwipeGallery } from "@/components/shared/useSwipeGallery";
import { galleryPreviewImages } from "@/lib/data";

export default function GalleryPreview() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

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

  useSwipeGallery(scrollRef, selectedIndex ?? 0, galleryPreviewImages.length, setSelectedIndex);

  return (
    <section className="bg-mist-50/60 py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-3.5 py-1 text-xs font-semibold text-brand-700">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-600" />
            <span>Galeri</span>
          </div>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Yurdumuzdan kareler
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {galleryPreviewImages.map((item, index) => (
            <Reveal key={item.src} delay={index * 0.08}>
              <div
                onClick={() => setSelectedIndex(index)}
                className="group relative cursor-pointer overflow-hidden rounded-2xl bg-slate-900 shadow-sm ring-1 ring-slate-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >

                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    priority
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent transition-opacity duration-300 group-hover:opacity-90" />
                </div>

                <div className="absolute inset-x-0 bottom-0 p-5 flex items-end justify-between">
                  <h3 className="text-base font-bold text-white drop-shadow-sm">
                    {item.title}
                  </h3>

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

        <div className="mt-12 flex justify-center">
          <Link
            href="/galeri"
            className="inline-flex items-center justify-center rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-brand-700 hover:shadow-md hover:shadow-brand-600/20 active:scale-[0.98] sm:px-8 sm:py-3.5"
          >
            Tüm Galeriyi Gör
          </Link>
        </div>

      </div>

      {selectedIndex !== null && (
        <div className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-md">
          <button
            onClick={() => setSelectedIndex(null)}
            className="absolute right-4 top-4 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-xl font-bold text-white transition-colors hover:bg-white/20 sm:right-6 sm:top-6"
            aria-label="Kapat"
          >
            ✕
          </button>

          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 z-50 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-2xl font-bold text-white transition-colors hover:bg-white/20 sm:flex"
            aria-label="Önceki"
          >
            ‹
          </button>

          <div
            ref={scrollRef}
            className="flex h-full w-full snap-x snap-mandatory overflow-x-auto [-webkit-overflow-scrolling:touch] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {galleryPreviewImages.map((item) => (
              <div
                key={item.src}
                className="flex h-full w-full shrink-0 snap-center items-center justify-center p-4"
                onClick={() => setSelectedIndex(null)}
              >
                <div
                  className="relative h-[70vh] w-full max-w-4xl overflow-hidden rounded-2xl"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Image src={item.src} alt={item.title} fill className="object-contain" />
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 z-50 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-2xl font-bold text-white transition-colors hover:bg-white/20 sm:flex"
            aria-label="Sonraki"
          >
            ›
          </button>

          <div className="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2 rounded-full border border-white/20 bg-black/60 px-4 py-1.5 text-xs font-semibold text-white">
            {galleryPreviewImages[selectedIndex].title} · {selectedIndex + 1} / {galleryPreviewImages.length}
          </div>
        </div>
      )}
    </section>
  );
}
