"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Icon } from "@/components/ui/Icon";

interface Testimonial {
  name: string;
  treatment: string;
  text: string;
}

/** Native scroll-snap rail (swipe on touch) with previous/next controls. */
export function TestimonialRail({ items }: { items: Testimonial[] }) {
  const rail = useRef<HTMLUListElement>(null);
  const [edges, setEdges] = useState({ start: true, end: false });
  const [current, setCurrent] = useState(0);

  const measure = useCallback(() => {
    const el = rail.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setEdges({ start: el.scrollLeft <= 4, end: el.scrollLeft >= max - 4 });
    const first = el.firstElementChild as HTMLElement | null;
    if (first) setCurrent(Math.round(el.scrollLeft / (first.offsetWidth + parseFloat(getComputedStyle(el).columnGap || "0"))));
  }, []);

  useEffect(() => {
    const el = rail.current;
    if (!el) return;
    measure();
    el.addEventListener("scroll", measure, { passive: true });
    window.addEventListener("resize", measure);
    return () => {
      el.removeEventListener("scroll", measure);
      window.removeEventListener("resize", measure);
    };
  }, [measure]);

  const go = (dir: 1 | -1) => {
    const el = rail.current;
    const card = el?.firstElementChild as HTMLElement | null;
    if (!el || !card) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollBy({ left: dir * (card.offsetWidth + 24), behavior: reduce ? "auto" : "smooth" });
  };

  return (
    <div>
      <ul
        ref={rail}
        aria-label="Depoimentos de pacientes"
        tabIndex={0}
        className="scrollbar-none -mx-5 flex snap-x outline-offset-8 snap-mandatory gap-6 overflow-x-auto scroll-px-5 px-5 pb-2 sm:-mx-8 sm:scroll-px-8 sm:px-8 lg:mx-0 lg:scroll-px-0 lg:px-0"
      >
        {items.map((t, i) => (
          <li
            key={t.name}
            className="w-[86%] shrink-0 snap-start sm:w-[62%] lg:w-[calc(50%-12px)]"
            aria-roledescription="depoimento"
            aria-label={`${i + 1} de ${items.length}`}
          >
            <figure className="flex h-full flex-col border-t border-grafite/20 pt-7">
              <div className="flex gap-0.5 text-oliva" aria-label="5 de 5 estrelas" role="img">
                {Array.from({ length: 5 }, (_, s) => (
                  <Icon key={s} name="star" size={15} filled />
                ))}
              </div>
              <blockquote className="mt-5 flex-1 font-serif text-[1.45rem] leading-[1.3] tracking-[-0.005em] sm:text-[1.6rem]">
                <p>“{t.text}”</p>
              </blockquote>
              <figcaption className="mt-8 flex items-baseline justify-between gap-4 text-[0.92rem]">
                <span className="font-medium">{t.name}</span>
                <span className="eyebrow text-tinta">{t.treatment}</span>
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>

      <div className="mt-10 flex items-center justify-between gap-6">
        <p className="eyebrow text-tinta" aria-live="polite">
          {String(Math.min(current + 1, items.length)).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
        </p>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => go(-1)}
            disabled={edges.start}
            aria-label="Depoimento anterior"
            className="grid size-12 place-items-center rounded-full border border-grafite/25 transition-[background-color,color,opacity,transform] duration-200 hover:bg-grafite hover:text-linho active:scale-95 disabled:pointer-events-none disabled:opacity-30"
          >
            <Icon name="arrowLeft" size={18} />
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            disabled={edges.end}
            aria-label="Próximo depoimento"
            className="grid size-12 place-items-center rounded-full border border-grafite/25 transition-[background-color,color,opacity,transform] duration-200 hover:bg-grafite hover:text-linho active:scale-95 disabled:pointer-events-none disabled:opacity-30"
          >
            <Icon name="arrowRight" size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
