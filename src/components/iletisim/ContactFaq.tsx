"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import Reveal from "@/components/shared/Reveal";
import { contactFaqs } from "@/lib/data";

export default function ContactFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Reveal>
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand-700">Sıkça Sorulan Sorular</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              İletişim hakkında sık sorulanlar
            </h2>
          </div>

          <div className="mt-12 space-y-4">
            {contactFaqs.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <Reveal key={item.question} delay={index * 0.08}>
                  <div className="overflow-hidden rounded-3xl border border-brand-100 bg-white shadow-sm">
                    <button
                      type="button"
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      className="flex w-full items-center justify-between gap-4 p-6 text-left"
                    >
                      <span className="text-base font-semibold text-slate-950">{item.question}</span>
                      <span className="text-brand-600">{isOpen ? "-" : "+"}</span>
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
                          <div className="px-6 pb-6 text-sm leading-7 text-slate-600">
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
