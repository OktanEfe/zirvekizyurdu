"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSwipeGallery } from "@/components/shared/useSwipeGallery";

type RoomGalleryProps = {
  images: string[];
  roomTitle: string;
  features: string[];
  specs: { label: string; value: string }[];
  slug: string;
};

export default function RoomGallery({ images, roomTitle, features, specs, slug }: RoomGalleryProps) {

  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const [sliderIndex, setSliderIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImageIndex, setModalImageIndex] = useState(0);
  const modalScrollRef = useRef<HTMLDivElement>(null);
  const mobileStripRef = useRef<HTMLDivElement>(null);

  useSwipeGallery(modalScrollRef, isModalOpen ? modalImageIndex : 0, images.length, setModalImageIndex);

  const itemsPerPage = 3;
  const totalPages = Math.ceil(images.length / itemsPerPage);

  const nextSlide = () => {
    setDirection(1);
    setSliderIndex((prev) => (prev + 1) % totalPages);
  };

  const prevSlide = () => {
    setDirection(-1);
    setSliderIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const handleThumbnailClick = (originalIndex: number) => {
    setActiveImageIndex(originalIndex);
    setModalImageIndex(originalIndex);
    setIsModalOpen(true);
  };

  const handleNextModalImage = () => {
    setModalImageIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrevModalImage = () => {
    setModalImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir < 0 ? "100%" : "-100%",
      opacity: 0,
    }),
  };

  const currentImages = images.slice(
    sliderIndex * itemsPerPage,
    sliderIndex * itemsPerPage + itemsPerPage
  );

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 space-y-6">

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8">

        <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto lg:col-span-7 h-full min-h-[460px] w-full overflow-hidden rounded-3xl border border-slate-200/80 bg-slate-900 shadow-xl shadow-slate-200/50">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeImageIndex}
              initial={{ opacity: 0, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="relative h-full w-full"
            >
              <Image
                src={images[activeImageIndex] || images[0]}
                alt={`${roomTitle} - Görsel ${activeImageIndex + 1}`}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover"
              />
            </motion.div>
          </AnimatePresence>

          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-black/20 pointer-events-none" />

          <div className="absolute bottom-4 left-4 rounded-full border border-white/20 bg-slate-950/60 px-4 py-1.5 text-xs font-semibold text-white backdrop-blur-md shadow-sm">
            <span>
              {activeImageIndex + 1} / {images.length}
            </span>
          </div>
        </div>

        <div className="flex flex-col justify-between rounded-3xl border border-slate-200/80 bg-white p-6 sm:p-8 shadow-xl shadow-slate-200/40 lg:col-span-5">
          <div>
            <div className="flex items-center justify-between border-b border-slate-100 pb-5">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600">
                  Oda Detayı
                </span>
                <h2 className="mt-1 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                  {roomTitle}
                </h2>
              </div>
              <span className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                Kontenjan Var
              </span>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              {specs.map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-100 bg-slate-50/60 p-3.5 transition-colors hover:bg-slate-100/80"
                >
                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    {item.label}
                  </p>
                  <p className="mt-1 text-sm font-semibold text-slate-800">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6">
              <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-3">
                Öne Çıkan Özellikler
              </p>
              <ul className="space-y-2.5">
                {features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="text-xs font-medium text-slate-600 border-l-2 border-blue-600 pl-3 py-0.5"
                  >
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-100">
            <Link
              href={`/iletisim?oda=${slug}`}
              className="inline-flex w-full items-center justify-center rounded-full bg-blue-600 px-6 py-4 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-blue-500/25 transition-all duration-300 hover:bg-blue-700 hover:shadow-blue-500/40 active:scale-[0.98]"
            >
              Fiyat Al ve Rezerve Et
            </Link>
          </div>
        </div>

      </div>

      <div className="relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-4 sm:p-6 shadow-md shadow-slate-100">

        <div className="mb-4 flex items-center justify-between px-2">
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
            Galeri Koleksiyonu ({images.length} Fotoğraf)
          </span>
          <div className="hidden items-center gap-2 sm:flex">
            <button
              type="button"
              onClick={prevSlide}
              className="rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-700 shadow-sm transition-all hover:bg-slate-50 hover:border-slate-300 active:scale-95"
            >
              Önceki
            </button>
            <button
              type="button"
              onClick={nextSlide}
              className="rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-700 shadow-sm transition-all hover:bg-slate-50 hover:border-slate-300 active:scale-95"
            >
              Sonraki
            </button>
          </div>
        </div>

        <div
          ref={mobileStripRef}
          className="-mx-4 flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 pb-1 [-webkit-overflow-scrolling:touch] [scrollbar-width:none] [touch-action:pan-x] sm:hidden [&::-webkit-scrollbar]:hidden"
        >
          {images.map((src, originalIndex) => {
            const isActive = originalIndex === activeImageIndex;
            return (
              <button
                key={`${src}-mobile-${originalIndex}`}
                type="button"
                onClick={() => handleThumbnailClick(originalIndex)}
                className={`relative aspect-[16/10] w-[70%] shrink-0 snap-start overflow-hidden rounded-2xl border-2 transition-all duration-300 ${
                  isActive ? "border-blue-600 ring-4 ring-blue-500/10" : "border-transparent"
                }`}
              >
                <Image
                  src={src}
                  alt={`Galeri ${originalIndex + 1}`}
                  fill
                  sizes="70vw"
                  className="object-cover"
                />
                {isActive && (
                  <div className="absolute top-2 right-2 rounded-full bg-blue-600 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-white shadow-md">
                    Aktif
                  </div>
                )}
              </button>
            );
          })}
        </div>

        <div className="relative hidden min-h-[140px] overflow-hidden sm:block sm:min-h-[160px]">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={sliderIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
              className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
            >
              {currentImages.map((src, idx) => {
                const originalIndex = sliderIndex * itemsPerPage + idx;
                const isActive = originalIndex === activeImageIndex;
                return (
                  <button
                    key={`${src}-${originalIndex}`}
                    type="button"
                    onClick={() => handleThumbnailClick(originalIndex)}
                    className={`group relative aspect-[16/10] w-full overflow-hidden rounded-2xl border-2 transition-all duration-300 ${
                      isActive
                        ? "border-blue-600 ring-4 ring-blue-500/10 scale-[1.02] shadow-lg shadow-blue-500/10"
                        : "border-transparent opacity-85 hover:opacity-100 hover:scale-[1.01]"
                    }`}
                  >
                    <Image
                      src={src}
                      alt={`Galeri ${originalIndex + 1}`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <span className="rounded-full bg-white/90 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-900 shadow-sm">
                        Büyüt
                      </span>
                    </div>

                    {isActive && (
                      <div className="absolute top-2.5 right-2.5 rounded-full bg-blue-600 px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-white shadow-md">
                        Aktif
                      </div>
                    )}
                  </button>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-4 hidden justify-center gap-1.5 sm:flex">
          {Array.from({ length: totalPages }).map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => {
                setDirection(idx > sliderIndex ? 1 : -1);
                setSliderIndex(idx);
              }}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                idx === sliderIndex
                  ? "w-6 bg-blue-600"
                  : "w-1.5 bg-slate-200 hover:bg-slate-300"
              }`}
              aria-label={`Sayfa ${idx + 1}`}
            />
          ))}
        </div>

      </div>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md"
          >
            <button
              type="button"
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 z-20 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white transition-all hover:bg-white/20 active:scale-95 sm:top-6 sm:right-6"
            >
              Kapat
            </button>

            <button
              type="button"
              onClick={handlePrevModalImage}
              className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-20 hidden rounded-full border border-white/20 bg-white/10 px-4 py-3 text-xs font-bold uppercase tracking-wider text-white transition-all hover:bg-white/20 active:scale-95 sm:block"
            >
              Önceki
            </button>

            <button
              type="button"
              onClick={handleNextModalImage}
              className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-20 hidden rounded-full border border-white/20 bg-white/10 px-4 py-3 text-xs font-bold uppercase tracking-wider text-white transition-all hover:bg-white/20 active:scale-95 sm:block"
            >
              Sonraki
            </button>

            <div
              ref={modalScrollRef}
              className="flex h-full w-full snap-x snap-mandatory overflow-x-auto [-webkit-overflow-scrolling:touch] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {images.map((src, idx) => (
                <div
                  key={`${src}-${idx}`}
                  className="flex h-full w-full shrink-0 snap-center items-center justify-center p-4 sm:p-8"
                >
                  <div className="relative h-[80vh] w-full max-w-5xl overflow-hidden rounded-2xl">
                    <Image
                      src={src}
                      alt={`Büyük Görsel ${idx + 1}`}
                      fill
                      priority={idx === modalImageIndex}
                      className="object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2 rounded-full border border-white/20 bg-black/60 px-4 py-1.5 text-xs font-semibold text-white">
              {modalImageIndex + 1} / {images.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
