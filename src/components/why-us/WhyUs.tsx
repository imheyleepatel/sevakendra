"use client";

import { useState } from "react";
import Reveal from "@/components/about/Reveal";
import { faqs } from "@/lib/site";

export default function WhyUs() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section
      id="why-us"
      aria-labelledby="why-us-heading"
      className="nav-anchor bg-[#FCFBF8]"
    >
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="flex items-center justify-center gap-3 text-[0.68rem] font-medium uppercase tracking-[0.22em] text-[#DAB875]">
              <span className="h-px w-10 bg-[#DAB875]" aria-hidden />
              Why Us
              <span className="h-px w-10 bg-[#DAB875]" aria-hidden />
            </p>
            <h2
              id="why-us-heading"
              className="mt-5 font-display text-[1.75rem] font-medium leading-[1.18] tracking-[-0.02em] text-[#00022E] sm:text-[2rem] lg:text-[2.25rem]"
            >
              People First, Every Step of the Way
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-[#00022E]/65 sm:text-[0.95rem]">
              Clear answers about how we work, the services we provide, and how
              to get started with confidence.
            </p>
          </div>
        </Reveal>

        <div className="mx-auto mt-12 max-w-3xl divide-y divide-[#00022E]/8 overflow-hidden rounded-md border border-[#00022E]/8 bg-white lg:mt-14">
          {faqs.map((item, index) => {
            const open = openIndex === index;
            const panelId = `why-us-answer-${index}`;
            const buttonId = `why-us-question-${index}`;

            return (
              <Reveal key={item.question} delay={70 + index * 60}>
                <div>
                  <h3>
                    <button
                      id={buttonId}
                      type="button"
                      aria-expanded={open}
                      aria-controls={panelId}
                      onClick={() => setOpenIndex(open ? -1 : index)}
                      className="flex w-full items-start justify-between gap-4 px-5 py-5 text-left transition-colors duration-200 hover:bg-[#FCFBF8] sm:px-7 sm:py-6"
                    >
                      <span className="font-display text-[1.05rem] font-medium leading-snug text-[#00022E] sm:text-[1.15rem]">
                        {item.question}
                      </span>
                      <span
                        className={`mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border transition-colors duration-200 ${
                          open
                            ? "border-[#DAB875] bg-[#DAB875] text-[#00022E]"
                            : "border-[#00022E]/15 text-[#00022E]/70"
                        }`}
                        aria-hidden
                      >
                        <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none">
                          <path
                            d="M3 8h10"
                            stroke="currentColor"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                          />
                          <path
                            d="M8 3v10"
                            stroke="currentColor"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                            className={`origin-center transition-transform duration-200 ${
                              open ? "scale-y-0" : "scale-y-100"
                            }`}
                          />
                        </svg>
                      </span>
                    </button>
                  </h3>
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    hidden={!open}
                    className="px-5 pb-6 sm:px-7"
                  >
                    <p className="max-w-2xl text-sm leading-[1.75] text-[#00022E]/75 sm:text-[0.95rem]">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
