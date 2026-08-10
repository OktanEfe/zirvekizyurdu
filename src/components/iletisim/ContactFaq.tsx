"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import Reveal from "@/components/shared/Reveal";
import { contactFaqs } from "@/lib/data";

export default function ContactFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Reveal>
      <section className="py-20 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="mx-auto max-w-2xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-3.5 py-1.5 border border-brand-100/80">
              <span className="h-2 w-2 rounded-full bg-brand-600" />
              <span className="text-xs font-semibold uppercase tracking-wider text-brand-700">
                Sıkça Sorulan Sorular
              </span>
            </div>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              İletişim ve Ulaşım Hakkında
            </h2>
            <p className="mt-3 text-base text-slate-600">
              Kayıt süreci, yurt ziyaretleri ve ulaşım imkanlarıyla ilgili merak ettiğiniz tüm yanıtlar burada.
            </p>
          </div>

          <div className="mx-auto mt-12 max-w-3xl space-y-4">
            {contactFaqs.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <Reveal key={item.question} delay={index * 0.08}>
                  <div
                    className={`overflow-hidden rounded-3xl border transition-all duration-300 ${
                      isOpen
                        ? "border-brand-200 bg-white shadow-md ring-1 ring-brand-600/10"
                        : "border-brand-100/80 bg-slate-50/50 hover:bg-white hover:border-brand-200 hover:shadow-sm"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      className="flex w-full items-center justify-between gap-4 p-6 text-left transition-colors focus:outline-none"
                    >
                      <span className="text-base font-semibold text-slate-900 sm:text-lg">
                        {item.question}
                      </span>

                      <span
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl transition-all duration-300 ${
                          isOpen
                            ? "bg-brand-600 text-white shadow-sm"
                            : "bg-brand-50 text-brand-600 group-hover:bg-brand-100"
                        }`}
                      >
                        <svg
                          className={`h-5 w-5 transition-transform duration-300 ${
                            isOpen ? "rotate-180" : "rotate-0"
                          }`}
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="2.5"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                          />
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
                          transition={{ duration: 0.3, ease: "easeOut" }}
                          className="overflow-hidden"
                        >
                          <div className="border-t border-slate-100 px-6 pb-6 pt-4 text-sm leading-relaxed sm:text-base text-slate-600">
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
