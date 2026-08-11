"use client";

import { useEffect, useRef } from "react";

export function useSwipeGallery(
  containerRef: React.RefObject<HTMLDivElement | null>,
  index: number,
  itemCount: number,
  onIndexChange: (index: number) => void
) {
  const isProgrammatic = useRef(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    isProgrammatic.current = true;
    el.scrollTo({ left: index * el.clientWidth, behavior: "smooth" });
    const timeout = setTimeout(() => {
      isProgrammatic.current = false;
    }, 400);
    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    let debounce: ReturnType<typeof setTimeout>;
    const handleScroll = () => {
      if (isProgrammatic.current) return;
      clearTimeout(debounce);
      debounce = setTimeout(() => {
        const width = el.clientWidth;
        if (!width) return;
        const nextIndex = Math.round(el.scrollLeft / width);
        if (nextIndex !== index && nextIndex >= 0 && nextIndex < itemCount) {
          onIndexChange(nextIndex);
        }
      }, 100);
    };

    el.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      el.removeEventListener("scroll", handleScroll);
      clearTimeout(debounce);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index, itemCount]);
}
