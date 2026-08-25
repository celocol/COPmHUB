"use client";

import { useState } from "react";
import { HOME_FAQ } from "@/lib/faq";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="border-t border-line bg-white px-6 py-20 sm:py-28"
    >
      <div className="relative z-10 mx-auto max-w-3xl">
        <h2 className="text-3xl font-extrabold tracking-tight text-ink">
          Preguntas frecuentes
        </h2>
        <p className="mt-3 text-muted">
          Si un dato no está publicado (paridad, APY, razón social), no lo
          inventamos.
        </p>
        <div className="mt-10 divide-y divide-line rounded-[20px] border border-line bg-white">
          {HOME_FAQ.map((item, index) => {
            const isOpen = open === index;
            return (
              <div key={item.question} className="px-5 sm:px-6">
                <button
                  type="button"
                  className="flex w-full items-start justify-between gap-4 py-5 text-left outline-none focus-visible:text-brand"
                  aria-expanded={isOpen}
                  data-track="faq_open"
                  data-label={item.question}
                  data-section="faq"
                  onClick={() => {
                    setOpen(isOpen ? null : index);
                  }}
                >
                  <span className="font-bold text-ink">{item.question}</span>
                  <span className="text-muted" aria-hidden>
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                {isOpen ? (
                  <p className="pb-5 text-sm leading-relaxed text-muted">
                    {item.answer}
                  </p>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
