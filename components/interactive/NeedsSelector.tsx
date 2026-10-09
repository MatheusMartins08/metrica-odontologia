"use client";

import { useId, useRef, useState, type KeyboardEvent } from "react";
import type { Need } from "@/lib/content";
import { whatsappLink } from "@/lib/site";
import { Icon } from "@/components/ui/Icon";

/** "Como podemos te ajudar?" — pick a situation, get a recommended first step. */
export function NeedsSelector({ items }: { items: Need[] }) {
  const [index, setIndex] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const uid = useId();
  const current = items[index];

  const onKey = (e: KeyboardEvent<HTMLButtonElement>) => {
    const step: Record<string, number> = { ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 };
    if (!(e.key in step) && e.key !== "Home" && e.key !== "End") return;
    e.preventDefault();
    const next =
      e.key === "Home" ? 0 : e.key === "End" ? items.length - 1 : (index + step[e.key] + items.length) % items.length;
    setIndex(next);
    tabs.current[next]?.focus();
  };

  return (
    <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
      <div
        role="tablist"
        aria-label="Escolha a sua situação"
        className="scrollbar-none -mx-5 flex gap-2 overflow-x-auto px-5 lg:col-span-5 lg:mx-0 lg:flex-col lg:gap-0 lg:overflow-visible lg:border-t lg:border-porcelana/15 lg:px-0"
      >
        {items.map((item, i) => {
          const selected = i === index;
          return (
            <button
              key={item.id}
              ref={(el) => {
                tabs.current[i] = el;
              }}
              role="tab"
              type="button"
              id={`${uid}-tab-${item.id}`}
              aria-selected={selected}
              aria-controls={`${uid}-panel`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setIndex(i)}
              onKeyDown={onKey}
              className={`group shrink-0 rounded-full border px-4 py-2.5 text-[0.95rem] transition-colors duration-200 lg:flex lg:w-full lg:items-center lg:justify-between lg:rounded-none lg:border-0 lg:border-b lg:border-porcelana/15 lg:px-0 lg:py-5 lg:text-left lg:font-serif lg:text-[1.9rem] lg:leading-tight ${
                selected
                  ? "border-porcelana bg-porcelana text-petroleo lg:bg-transparent lg:text-porcelana"
                  : "border-porcelana/25 text-bruma hover:border-porcelana/60 hover:text-porcelana"
              }`}
            >
              <span>{item.label}</span>
              <Icon
                name="arrowRight"
                size={22}
                className={`hidden shrink-0 transition-[transform,opacity] duration-300 ease-out-strong lg:block ${
                  selected ? "translate-x-0 opacity-100" : "-translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-50"
                }`}
              />
            </button>
          );
        })}
      </div>

      <div
        id={`${uid}-panel`}
        role="tabpanel"
        aria-labelledby={`${uid}-tab-${current.id}`}
        className="min-w-0 lg:col-span-6 lg:col-start-7"
      >
        <div key={current.id} className="animate-fade-in">
          <h3 className="display-2 text-porcelana">{current.title}</h3>
          <p className="lead mt-6 max-w-xl text-bruma">{current.text}</p>

          <div className="mt-10 grid gap-8 border-t border-porcelana/15 pt-8 sm:grid-cols-2">
            <div>
              <p className="eyebrow text-bruma">Caminhos indicados</p>
              <ul className="mt-4 space-y-2">
                {current.paths.map((p) => (
                  <li key={p} className="flex items-baseline gap-3">
                    <span aria-hidden="true" className="h-px w-4 shrink-0 translate-y-[-0.3em] bg-menta" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="eyebrow text-bruma">Primeiro passo</p>
              <p className="mt-4">{current.firstStep}</p>
            </div>
          </div>

          <a
            href={whatsappLink(current.message)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn mt-10 bg-porcelana text-petroleo hover:bg-agua"
          >
            Falar com a recepção
            <Icon name="arrowUpRight" size={18} className="btn-arrow" />
            <span className="sr-only"> (abre o WhatsApp em nova aba)</span>
          </a>
        </div>
      </div>
    </div>
  );
}
