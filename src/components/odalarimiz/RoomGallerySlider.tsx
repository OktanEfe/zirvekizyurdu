"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

type Props = { images: string[] };

export default function RoomGallerySlider({ images }: Props) {
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    const onScroll = () => {
      const children = el.querySelectorAll(".snap-item");
      const center = el.scrollLeft + el.clientWidth / 2;
      let nearest = 0;
      let nearestDist = Infinity;
      children.forEach((child, i) => {
        const rect = (child as HTMLElement).offsetLeft + (child as HTMLElement).clientWidth / 2;
        const dist = Math.abs(rect - center);
        if (dist < nearestDist) {
          nearestDist = dist;
          nearest = i;
        }
      });
      setActive(nearest);
    };

    el.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => el.removeEventListener("scroll", onScroll);
  }, [images]);

  const scrollBy = (dir: number) => {
    const el = scrollerRef.current;
    if (!el) return;
    const width = el.clientWidth;
    el.scrollBy({ left: dir * width, behavior: "smooth" });
  };

  return (
    <div className="relative">
      <div className="absolute left-1/2 top-1/2 z-20 hidden -translate-y-1/2 transform -translate-x-full gap-2 sm:flex">
        <button onClick={() => scrollBy(-1)} className="rounded-full bg-white/90 p-2 shadow">
          ‹
        </button>
        <button onClick={() => scrollBy(1)} className="rounded-full bg-white/90 p-2 shadow">
          ›
        </button>
      </div>

      <div ref={scrollerRef} className="no-scrollbar mx-auto flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 py-6">
        {images.map((src, i) => (
          <div key={src} className="snap-item flex-shrink-0 w-full max-w-3xl snap-center rounded-2xl">
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl">
              <Image src={src} alt={`gallery-${i}`} fill className="object-cover" />
            </div>
          </div>
        ))}
      </div>

      <div className="mx-auto mt-4 flex w-full justify-center gap-2">
        {images.map((_, i) => (
          <button key={i} className={`h-2 w-8 rounded-full ${i === active ? "bg-brand-600" : "bg-slate-200"}`} aria-hidden />
        ))}
      </div>
    </div>
  );
}
