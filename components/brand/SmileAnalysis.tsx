import Image from "next/image";
import type { Picture } from "@/lib/content";

/*
 * Digital smile-design overlay drawn on a frontal smile.
 * Coordinates live in a 400×300 frame that matches the 4:3 photo exactly
 * (container aspect = image aspect, object-cover never crops), so the lines
 * stay on the teeth at every size.
 *
 * Landmarks were measured on the photo: the dental midline sits between 11
 * and 21 at x≈171 and the incisal plane tilts ~9.25° with the head.
 */
const ORIGIN = "translate(171 160.5) rotate(-9.25)";
// Tooth limits along the incisal plane, from 13 to 23 (local x, plane = y 0).
const LIMITS = [-89, -70, -40, 0, 46, 77, 103];
// Reference bracket over 21 · 22 · 23 (golden-proportion check).
const BRACKET = [0, 46, 77, 103];

interface SmileAnalysisProps {
  image: Picture;
  className?: string;
  /** Marks the inset as part of the hero intro timeline instead of a scroll reveal. */
  intro?: boolean;
}

export function SmileAnalysis({ image, className = "", intro = false }: SmileAnalysisProps) {
  const introAttr = intro ? { "data-intro": "analysis" } : {};

  return (
    <figure className={`relative ${className}`} {...introAttr}>
      <div className="relative aspect-4/3 overflow-hidden bg-agua" data-reveal="image" data-reveal-zoom="off">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          placeholder="blur"
          sizes="(min-width: 1024px) 22vw, 60vw"
          className="object-cover"
        />

        <svg
          viewBox="0 0 400 300"
          className="absolute inset-0 h-full w-full"
          fill="none"
          aria-hidden="true"
          data-analysis-lines
        >
          <g transform={ORIGIN} stroke="var(--color-porcelana)" strokeLinecap="round">
            {/* Facial / dental midline */}
            <line x1="0" y1="-112" x2="0" y2="92" strokeWidth="1" strokeDasharray="4 4" data-reveal="fade" />
            {/* Incisal plane */}
            <line x1="-125" y1="0" x2="128" y2="0" strokeWidth="0.9" pathLength={1} data-draw />
            {/* Tooth limits */}
            {LIMITS.map((x) => (
              <line
                key={x}
                x1={x}
                y1="-44"
                x2={x}
                y2="10"
                strokeWidth="0.8"
                opacity={Math.abs(x) > 80 ? 0.45 : 0.8}
                pathLength={1}
                data-draw
              />
            ))}
            {/* Proportion bracket over 21 · 22 · 23 */}
            <g stroke="var(--color-menta)" strokeWidth="0.9">
              <line x1={BRACKET[0]} y1="-62" x2={BRACKET[3]} y2="-62" pathLength={1} data-draw />
              {BRACKET.map((x) => (
                <line key={x} x1={x} y1="-66" x2={x} y2="-58" pathLength={1} data-draw />
              ))}
            </g>
            <g fill="var(--color-porcelana)" stroke="none" fontFamily="var(--font-mono)" fontSize="13" data-reveal="fade">
              <text x="-5" y="-70" textAnchor="end">
                11
              </text>
              <text x="5" y="-70">
                21
              </text>
            </g>
          </g>
          {/* Smile arc, following the incisal edges */}
          <path
            d="M76 162.5 C112 171.5, 154 170.5, 192 159.5 S252 135.5, 280 121.5"
            stroke="var(--color-menta)"
            strokeWidth="1.2"
            strokeLinecap="round"
            pathLength={1}
            data-draw
          />
        </svg>

        <span className="absolute right-3 top-3 bg-porcelana/90 px-2 py-1 font-mono text-[0.66rem] tracking-[0.06em] text-petroleo" data-reveal="fade">
          1,618 : 1 : 0,618
        </span>
      </div>
      <figcaption
        className="eyebrow absolute bottom-0 left-0 whitespace-nowrap bg-petroleo px-2.5 py-1.5 text-[0.62rem] text-porcelana"
        data-reveal="fade"
      >
        <span className="hidden sm:inline">Fig. 01 · </span>Análise do sorriso
      </figcaption>
    </figure>
  );
}
