"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import Reveal from "@/components/shared/Reveal";
import { useSwipeGallery } from "@/components/shared/useSwipeGallery";
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
  const scrollRef = useRef<HTMLDivElement>(null);

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

  useSwipeGallery(scrollRef, selectedIndex ?? 0, visibleItems.length, setSelectedIndex);

  return (
    <>
      <section className="pb-12 pt-4 bg-white sm:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-3 xl:grid-cols-4">
            {visibleItems.map((item, index) => (
              <Reveal key={`${item.src}-${index}`} delay={index * 0.02}>
                <div
                  onClick={() => setSelectedIndex(index)}
                  style={{ willChange: "transform, opacity" }}
                  className="group cursor-pointer overflow-hidden rounded-xl border border-slate-200/80 bg-slate-950 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:shadow-xl hover:shadow-blue-900/10 sm:rounded-2xl"
                >
                  <div className="relative aspect-square w-full overflow-hidden sm:aspect-[4/3]">
                    <Image
                      src={item.src}
                      alt={item.title}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110 group-hover:opacity-85"
                      priority={index < 4}
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-80" />

                    <div className="absolute inset-0 hidden items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:flex">
                      <span className="rounded-full bg-blue-600 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white shadow-lg backdrop-blur-md">
                        Büyüt / İncele
                      </span>
                    </div>

                    <div className="absolute left-2 top-2 sm:left-3 sm:top-3">
                      <span className="rounded-md bg-slate-950/80 px-1.5 py-0.5 text-[8px] font-bold uppercase tracking-wider text-blue-300 backdrop-blur-md border border-slate-800 sm:px-2.5 sm:py-1 sm:text-[10px]">
                        {item.category}
                      </span>
                    </div>
                  </div>

                  <div className="bg-slate-950 p-2.5 border-t border-slate-800/80 sm:p-4">
                    <h3 className="text-xs font-bold tracking-tight text-white transition-colors group-hover:text-blue-400 sm:text-sm">
                      {item.title}
                    </h3>
                    <p className="mt-1 hidden text-xs text-slate-400 line-clamp-1 sm:block">
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
            {visibleItems.map((item, idx) => (
              <div
                key={`${item.src}-${idx}`}
                className="flex h-full w-full shrink-0 snap-center items-center justify-center p-4"
                onClick={() => setSelectedIndex(null)}
              >
                <div
                  className="relative max-h-[90vh] w-full max-w-5xl overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-2xl"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="relative h-[55vh] min-h-[260px] w-full sm:h-[65vh]">
                    <Image src={item.src} alt={item.title} fill className="object-contain" />
                  </div>

                  <div className="border-t border-slate-800 bg-slate-950 p-4 text-white sm:p-6">
                    <div className="flex items-center gap-3">
                      <span className="rounded bg-blue-600 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider">
                        {item.category}
                      </span>
                      <span className="text-xs text-slate-400">
                        {idx + 1} / {visibleItems.length}
                      </span>
                    </div>
                    <h3 className="mt-2 text-lg font-bold tracking-tight text-white sm:text-xl">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm text-slate-300">{item.description}</p>
                  </div>
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
        </div>
      )}
    </>
  );
}
