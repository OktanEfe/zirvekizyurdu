"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Reveal from "@/components/shared/Reveal";
import { fullGallery } from "@/lib/data";

const filterMap: Record<string, string[]> = {
  Tümü: fullGallery.map((item) => item.category),
  "Dış Mekan": ["Dış Mekan"],
  Odalar: ["Odalar"],
  "Ortak Alanlar": ["Ortak Alanlar"],
  Tesisler: ["Tesisler"],
};

type GalleryGridProps = {
  activeFilter: string;
};

export default function GalleryGrid({ activeFilter }: GalleryGridProps) {
  const categories = filterMap[activeFilter] ?? filterMap.Tümü;
  const visibleItems = fullGallery.filter((item) => categories.includes(item.category));

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleNext = useCallback(() => {
    if (selectedIndex !== null) {
      setSelectedIndex((prev) => (prev !== null && prev < visibleItems.length - 1 ? prev + 1 : 0));
    }
  }, [selectedIndex, visibleItems.length]);

  const handlePrev = useCallback(() => {
    if (selectedIndex !== null) {
      setSelectedIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : visibleItems.length - 1));
    }
  }, [selectedIndex, visibleItems.length]);

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
    <>
      <section className="pb-24 pt-4 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {visibleItems.map((item, index) => (
              <Reveal key={`${item.src}-${index}`} delay={index * 0.04}>
                <div
                  onClick={() => setSelectedIndex(index)}
                  className="group cursor-pointer overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-950 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:shadow-xl hover:shadow-blue-900/10"
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <Image
                      src={item.src}
                      alt={item.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110 group-hover:opacity-85"
                      priority={index < 4}
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-80" />

                    <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <span className="rounded-full bg-blue-600 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white shadow-lg backdrop-blur-md">
                        Büyüt / İncele
                      </span>
                    </div>

                    <div className="absolute left-3 top-3">
                      <span className="rounded-md bg-slate-950/80 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-blue-300 backdrop-blur-md border border-slate-800">
                        {item.category}
                      </span>
                    </div>
                  </div>

                  <div className="bg-slate-950 p-4 border-t border-slate-800/80">
                    <h3 className="text-sm font-bold tracking-tight text-white transition-colors group-hover:text-blue-400">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-xs text-slate-400 line-clamp-1">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {selectedIndex !== null && visibleItems[selectedIndex] && (
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
            className="relative max-h-[90vh] max-w-5xl overflow-hidden rounded-2xl bg-slate-900 shadow-2xl border border-slate-800"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-[60vh] min-h-[300px] w-[85vw] max-w-4xl sm:h-[70vh]">
              <Image
                src={visibleItems[selectedIndex].src}
                alt={visibleItems[selectedIndex].title}
                fill
                className="object-contain"
              />
            </div>

            <div className="border-t border-slate-800 bg-slate-950 p-6 text-white">
              <div className="flex items-center gap-3">
                <span className="rounded bg-blue-600 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider">
                  {visibleItems[selectedIndex].category}
                </span>
                <span className="text-xs text-slate-400">
                  {selectedIndex + 1} / {visibleItems.length}
                </span>
              </div>
              <h3 className="mt-2 text-xl font-bold tracking-tight text-white">
                {visibleItems[selectedIndex].title}
              </h3>
              <p className="mt-1 text-sm text-slate-300">
                {visibleItems[selectedIndex].description}
              </p>
            </div>
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
        </div>
      )}
    </>
  );
}
