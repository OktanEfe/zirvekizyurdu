"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { faqs } from "@/lib/data";
import Reveal from "@/components/shared/Reveal";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Reveal>
      {/* GalleryPreview (Açık Mavi/Gri) -> Faq (Beyaz Zemin) */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          
          {/* Başlık Alanı & Tipografi */}
          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-3.5 py-1 text-xs font-semibold text-brand-700">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-600" />
              <span>Sıkça Sorulan Sorular</span>
            </div>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Aklınıza takılan sorulara hızlı yanıtlar
            </h2>
          </div>

          {/* Akordeon Liste */}
          <div className="mt-12 space-y-4">
            {faqs.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <Reveal key={item.question} delay={index * 0.05}>
                  <div
                    className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                      isOpen
                        ? "border-brand-200 border-l-4 border-l-brand-600 bg-white shadow-md shadow-brand-600/5"
                        : "border-slate-200/80 bg-white hover:border-brand-200"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      className="flex w-full items-center justify-between gap-4 p-5 text-left sm:p-6"
                    >
                      <span className={`text-base font-bold transition-colors ${isOpen ? "text-brand-600" : "text-slate-900"}`}>
                        {item.question}
                      </span>
                      
                      {/* Dönen Ok İkunu */}
                      <span
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                          isOpen ? "bg-brand-600 text-white" : "bg-brand-50 text-brand-600"
                        }`}
                      >
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                        >
                          <path d="m6 9 6 6 6-6" />
                        </svg>
                      </span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen ? (
                        <motion.div
                          key="content"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="px-5 pb-6 text-sm leading-relaxed text-slate-600 sm:px-6">
                            {item.answer}
                          </div>
                        </motion.div>
                      ) : null}
                    </AnimatePresence>
                  </div>
                </Reveal>
              );
            })}
          </div>

        </div>
      </section>
    </Reveal>
  );
}