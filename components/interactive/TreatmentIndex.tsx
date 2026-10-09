"use client";

import Image from "next/image";
import { useId, useRef, useState, type PointerEvent } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import type { Treatment } from "@/lib/content";
import { whatsappLink } from "@/lib/site";
import { Icon } from "@/components/ui/Icon";

gsap.registerPlugin(useGSAP);

/**
 * Editorial index of treatments. Each row expands in place; on desktop with a
 * fine pointer, a preview image follows the cursor while hovering the list.
 */
export function TreatmentIndex({ items }: { items: Treatment[] }) {
  const [open, setOpen] = useState<number | null>(null);
  const [hovered, setHovered] = useState<number | null>(null);
  const list = useRef<HTMLDivElement>(null);
  const preview = useRef<HTMLDivElement>(null);
  const follow = useRef<{ x: (v: number) => void; y: (v: number) => void } | null>(null);
  const uid = useId();

  useGSAP(
    () => {
      if (!preview.current) return;
      follow.current = {
        x: gsap.quickTo(preview.current, "x", { duration: 0.6, ease: "power3" }),
        y: gsap.quickTo(preview.current, "y", { duration: 0.6, ease: "power3" }),
      };
    },
    { scope: list },
  );

  // quickTo setters retarget a single existing tween, so calling them from a handler is safe.
  const onMove = (e: PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse" || !list.current || !follow.current) return;
    const rect = list.current.getBoundingClientRect();
    follow.current.x(e.clientX - rect.left);
    follow.current.y(e.clientY - rect.top);
  };

  const showPreview = hovered !== null && hovered !== open;

  return (
    <div ref={list} className="relative" onPointerMove={onMove} onPointerLeave={() => setHovered(null)}>
      {/* Cursor preview (decorative, desktop + fine pointer only) */}
      <div
        ref={preview}
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-0 z-10 hidden [@media(hover:hover)_and_(pointer:fine)]:lg:block"
      >
        <div
          className={`relative -ml-[7.5rem] -mt-[9.5rem] aspect-4/5 w-60 overflow-hidden transition-[opacity,transform] duration-300 ease-out-strong ${
            showPreview ? "scale-100 opacity-100" : "scale-95 opacity-0"
          }`}
        >
          {items.map((t, i) => (
            <Image
              key={t.id}
              src={t.image.src}
              alt=""
              fill
              sizes="240px"
              className={`object-cover transition-opacity duration-300 ${hovered === i ? "opacity-100" : "opacity-0"}`}
            />
          ))}
        </div>
      </div>

      <ol className="border-t border-grafite/15">
        {items.map((t, i) => {
          const isOpen = open === i;
          const btnId = `${uid}-t-${t.id}`;
          const panelId = `${uid}-p-${t.id}`;
          return (
            <li key={t.id} className="border-b border-grafite/15" data-reveal="up" onPointerEnter={() => setHovered(i)}>
              <h3>
                <button
                  id={btnId}
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="group grid w-full grid-cols-[2.5rem_1fr_auto] items-baseline gap-x-4 py-5 text-left sm:grid-cols-[4rem_1fr_auto] sm:py-7 md:grid-cols-[4rem_minmax(0,1.1fr)_minmax(0,1fr)_auto]"
                >
                  <span className="eyebrow text-tinta" aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-serif text-[1.9rem] leading-[1.05] tracking-[-0.015em] transition-transform duration-500 ease-out-strong group-hover:translate-x-2 sm:text-[2.5rem] lg:text-[3rem]">
                    {t.name}
                  </span>
                  <span className="hidden text-[0.98rem] text-tinta md:block">{t.summary}</span>
                  <span
                    aria-hidden="true"
                    className={`grid size-9 place-items-center self-center rounded-full border transition-[transform,background-color,border-color,color] duration-300 ease-out-strong ${
                      isOpen ? "rotate-45 border-musgo bg-musgo text-linho" : "border-grafite/20 group-hover:border-grafite/50"
                    }`}
                  >
                    <Icon name="plus" size={16} />
                  </span>
                </button>
              </h3>

              <div id={panelId} role="region" aria-labelledby={btnId} className="disclosure-panel" data-open={isOpen}>
                <div inert={!isOpen}>
                  <div className="grid gap-6 pb-9 sm:grid-cols-[4rem_1fr] sm:gap-x-4 md:grid-cols-[4rem_minmax(0,1.1fr)_minmax(0,1fr)]">
                    <div className="relative aspect-4/3 overflow-hidden sm:col-start-2 md:col-start-3 md:row-span-2 md:aspect-4/5 md:max-w-72">
                      <Image
                        src={t.image.src}
                        alt={t.image.alt}
                        fill
                        sizes="(min-width: 768px) 288px, 100vw"
                        placeholder="blur"
                        className="object-cover"
                      />
                    </div>
                    <div className="sm:col-start-2 md:row-start-1">
                      <p className="text-tinta md:hidden">{t.summary}</p>
                      <p className="mt-3 max-w-xl md:mt-0">{t.detail}</p>
                      <p className="eyebrow mt-6 text-tinta">{t.timeline}</p>
                      <a
                        href={whatsappLink(`Olá! Gostaria de agendar uma avaliação para ${t.name.toLowerCase()}.`)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-line mt-6 inline-flex items-center gap-2 text-[0.95rem] font-medium text-musgo"
                      >
                        Agendar avaliação para {t.name.toLowerCase()}
                        <Icon name="arrowUpRight" size={16} />
                        <span className="sr-only"> (abre o WhatsApp em nova aba)</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
