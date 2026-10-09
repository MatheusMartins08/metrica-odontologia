"use client";

import Image from "next/image";
import {
  useEffect,
  useId,
  useRef,
  useState,
  type CSSProperties,
  type KeyboardEvent,
  type PointerEvent,
} from "react";
import type { ResultCase } from "@/lib/content";

const clamp = (v: number) => Math.min(98, Math.max(2, v));

/**
 * Before/after comparison. While dragging, the divider position is written to
 * CSS variables inside requestAnimationFrame (no React render per move); the
 * value is committed to state on release and on keyboard input.
 */
export function BeforeAfter({ cases }: { cases: ResultCase[] }) {
  const [index, setIndex] = useState(0);
  const [pos, setPos] = useState(50);
  const frame = useRef<HTMLDivElement>(null);
  const posRef = useRef(50);
  const dragging = useRef(false);
  const raf = useRef(0);
  const pendingX = useRef<number | null>(null);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const uid = useId();
  const current = cases[index];

  useEffect(() => () => cancelAnimationFrame(raf.current), []);

  const apply = (value: number) => {
    posRef.current = value;
    frame.current?.style.setProperty("--pos", `${value}%`);
    frame.current?.style.setProperty("--p", `${value}`);
  };

  const fromClientX = (clientX: number) => {
    const rect = frame.current?.getBoundingClientRect();
    return rect ? clamp(((clientX - rect.left) / rect.width) * 100) : posRef.current;
  };

  const schedule = (clientX: number) => {
    pendingX.current = clientX;
    if (raf.current) return;
    raf.current = requestAnimationFrame(() => {
      raf.current = 0;
      if (pendingX.current !== null) apply(fromClientX(pendingX.current));
    });
  };

  const onPointerDown = (e: PointerEvent<HTMLDivElement>) => {
    if (e.pointerType === "mouse" && e.button !== 0) return;
    dragging.current = true;
    e.currentTarget.setPointerCapture(e.pointerId);
    apply(fromClientX(e.clientX));
  };
  const onPointerMove = (e: PointerEvent<HTMLDivElement>) => {
    if (dragging.current) schedule(e.clientX);
  };
  const stop = () => {
    if (!dragging.current) return;
    dragging.current = false;
    setPos(posRef.current);
  };

  const select = (i: number) => {
    setIndex(i);
    setPos(50);
    apply(50);
  };

  const onTabKey = (e: KeyboardEvent<HTMLButtonElement>) => {
    const keys: Record<string, number> = { ArrowRight: 1, ArrowLeft: -1 };
    if (e.key === "Home" || e.key === "End" || e.key in keys) {
      e.preventDefault();
      const next =
        e.key === "Home" ? 0 : e.key === "End" ? cases.length - 1 : (index + keys[e.key] + cases.length) % cases.length;
      select(next);
      tabs.current[next]?.focus();
    }
  };

  const frameStyle = { "--pos": `${pos}%`, "--p": pos } as CSSProperties;

  return (
    <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
      <div className="min-w-0 lg:col-span-8">
        <div role="tablist" aria-label="Casos" className="scrollbar-none -mx-1 mb-5 flex gap-1 overflow-x-auto px-1">
          {cases.map((c, i) => (
            <button
              key={c.id}
              ref={(el) => {
                tabs.current[i] = el;
              }}
              role="tab"
              type="button"
              id={`${uid}-tab-${c.id}`}
              aria-selected={i === index}
              aria-controls={`${uid}-panel`}
              tabIndex={i === index ? 0 : -1}
              onClick={() => select(i)}
              onKeyDown={onTabKey}
              className={`eyebrow shrink-0 rounded-full border px-4 py-2.5 transition-colors duration-200 ${
                i === index
                  ? "border-petroleo bg-petroleo text-porcelana"
                  : "border-tinta/15 text-ardosia hover:border-tinta/40 hover:text-tinta"
              }`}
            >
              <span aria-hidden="true">0{i + 1} · </span>
              {c.label}
            </button>
          ))}
        </div>

        <div
          ref={frame}
          style={frameStyle}
          className="group relative aspect-3/2 cursor-ew-resize touch-pan-y select-none overflow-hidden bg-agua has-[input:focus-visible]:outline-2 has-[input:focus-visible]:outline-offset-4 has-[input:focus-visible]:outline-teal"
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={stop}
          onPointerCancel={stop}
          onLostPointerCapture={stop}
          data-reveal="image"
          data-reveal-zoom="off"
        >
          <div key={current.id} className="absolute inset-0 animate-fade-in">
            <Image
              src={current.after.src}
              alt={current.after.alt}
              fill
              sizes="(min-width: 1024px) 60vw, 100vw"
              placeholder="blur"
              className="pointer-events-none object-cover"
              draggable={false}
            />
            <div className="absolute inset-0 [clip-path:inset(0_calc(100%_-_var(--pos))_0_0)]">
              <Image
                src={current.before.src}
                alt={current.before.alt}
                fill
                sizes="(min-width: 1024px) 60vw, 100vw"
                placeholder="blur"
                className="pointer-events-none object-cover"
                draggable={false}
              />
            </div>
          </div>

          <span className="eyebrow pointer-events-none absolute left-4 top-4 bg-abismo/60 px-2.5 py-1.5 text-porcelana opacity-[clamp(0,calc((var(--p)_-_14)_/_8),1)]">
            Antes
          </span>
          <span className="eyebrow pointer-events-none absolute right-4 top-4 bg-porcelana/85 px-2.5 py-1.5 text-tinta opacity-[clamp(0,calc((86_-_var(--p))_/_8),1)]">
            Depois
          </span>

          <div className="pointer-events-none absolute inset-y-0 left-(--pos) w-px bg-porcelana" aria-hidden="true">
            <span className="absolute left-1/2 top-1/2 grid size-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-porcelana text-petroleo shadow-[0_6px_24px_-8px_rgba(10,42,49,0.5)] transition-transform duration-200 group-active:scale-95">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.25">
                <path d="M9.5 7 4.5 12l5 5M14.5 7l5 5-5 5" />
              </svg>
            </span>
          </div>

          <label className="sr-only" htmlFor={`${uid}-range`}>
            Comparar antes e depois: arraste ou use as setas
          </label>
          <input
            id={`${uid}-range`}
            type="range"
            min={2}
            max={98}
            step={1}
            value={Math.round(pos)}
            onChange={(e) => {
              const v = Number(e.target.value);
              apply(v);
              setPos(v);
            }}
            aria-valuetext={`${Math.round(pos)}% antes`}
            className="sr-only"
          />
        </div>
        <p className="mt-4 text-[0.82rem] text-ardosia">
          Resultados variam conforme cada caso. Imagens publicadas com autorização dos pacientes.
        </p>
      </div>

      <div
        id={`${uid}-panel`}
        role="tabpanel"
        aria-labelledby={`${uid}-tab-${current.id}`}
        aria-live="polite"
        className="min-w-0 lg:col-span-4 lg:pt-16"
      >
        <div key={current.id} className="animate-fade-in">
          <p className="eyebrow text-ardosia">Caso 0{index + 1}</p>
          <h3 className="display-3 mt-4">{current.title}</h3>
          <p className="mt-5 text-ardosia">{current.summary}</p>
          <dl className="mt-8 border-t border-tinta/15">
            {current.facts.map((f) => (
              <div key={f.label} className="flex items-baseline justify-between gap-6 border-b border-tinta/15 py-3.5">
                <dt className="eyebrow text-ardosia">{f.label}</dt>
                <dd className="text-right">{f.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
