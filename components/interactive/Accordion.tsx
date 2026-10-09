"use client";

import { useId, useState } from "react";

interface AccordionProps {
  items: { q: string; a: string }[];
}

/** Single-open disclosure list (FAQ). Heading > button pattern, animated height via grid rows. */
export function Accordion({ items }: AccordionProps) {
  const [open, setOpen] = useState<number | null>(0);
  const uid = useId();

  return (
    <div className="border-t border-tinta/15">
      {items.map((item, i) => {
        const isOpen = open === i;
        const btnId = `${uid}-q-${i}`;
        const panelId = `${uid}-a-${i}`;
        return (
          <div key={item.q} className="border-b border-tinta/15" data-reveal="up">
            <h3>
              <button
                id={btnId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : i)}
                className="group flex w-full items-start justify-between gap-6 py-6 text-left"
              >
                <span className="text-[1.2rem] leading-snug transition-colors group-hover:text-petroleo sm:text-[1.35rem]">
                  {item.q}
                </span>
                <span
                  aria-hidden="true"
                  className={`relative mt-1.5 grid size-7 shrink-0 place-items-center rounded-full border transition-[background-color,border-color,color] duration-300 ease-out-strong ${
                    isOpen ? "border-petroleo bg-petroleo text-porcelana" : "border-tinta/25"
                  }`}
                >
                  <span className="pm-icon size-[11px]" />
                </span>
              </button>
            </h3>
            <div id={panelId} role="region" aria-labelledby={btnId} className="disclosure-panel" data-open={isOpen}>
              <div inert={!isOpen}>
                <p className="max-w-2xl pb-7 pr-12 text-ardosia">{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
