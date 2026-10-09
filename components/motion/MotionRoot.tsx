"use client";

import { useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const EASE = "expo.out";

/** Hero entrance, in seconds from page load. Steps overlap so the whole intro settles in ~1.8s. */
const INTRO: [step: string, at: number][] = [
  ["header", 0],
  ["eyebrow", 0.1],
  ["title", 0.2],
  ["media", 0.45],
  ["text", 0.55],
  ["cta", 0.7],
  ["proof", 0.85],
  ["analysis", 1.0],
];

/**
 * Page-wide motion layer. Markup opts in with data attributes:
 *  - data-reveal="up" | "fade" | "lines" | "image" | "rule"   scroll-triggered entrance
 *  - data-draw               SVG line drawn on entrance (needs pathLength="1")
 *  - data-intro="<step>"     part of the hero intro timeline instead of the scroll reveal
 *  - data-reveal-zoom="off"  image reveal without the inner settle (frames with overlays)
 *  - data-parallax="0.08"    vertical drift relative to its parent (desktop only)
 *  - data-count="3000" data-decimals="0"   count-up when visible
 * Initial states live in globals.css and only apply when JS runs and motion is allowed.
 */
export function MotionRoot({ children }: { children: ReactNode }) {
  const scope = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      document.documentElement.classList.add("js", "motion-ready");
      const q = gsap.utils.selector(scope);
      const outsideIntro = (el: Element) => el.closest("[data-intro]") === null;

      /** Clip reveal from the top edge down, with the photo settling inside (unless opted out). */
      const revealImage = (el: Element, tl?: gsap.core.Timeline, at = 0) => {
        const clip = [
          { clipPath: "inset(0% 0% 100% 0%)" },
          { clipPath: "inset(0% 0% 0% 0%)", duration: 1.4, ease: "expo.inOut" },
        ] as const;
        const settle = [{ scale: 1.14 }, { scale: 1, duration: 2, ease: EASE }] as const;
        const img = (el as HTMLElement).dataset.revealZoom === "off" ? null : el.querySelector("img");
        if (tl) {
          tl.fromTo(el, clip[0], clip[1], at);
          if (img) tl.fromTo(img, settle[0], settle[1], at);
        } else {
          gsap.fromTo(el, clip[0], clip[1]);
          if (img) gsap.fromTo(img, settle[0], settle[1]);
        }
      };

      const mm = gsap.matchMedia();
      mm.add(
        {
          motion: "(prefers-reduced-motion: no-preference)",
          desktop: "(min-width: 768px) and (prefers-reduced-motion: no-preference)",
        },
        (context) => {
          const { motion, desktop } = context.conditions as { motion: boolean; desktop: boolean };
          if (!motion) return; // CSS keeps everything in its final, static state.

          /* ---------------- Hero intro: one choreographed timeline ---------------- */
          const intro = gsap.timeline({ delay: 0.1, defaults: { ease: EASE } });
          for (const [step, at] of INTRO) {
            q(`[data-intro="${step}"]`).forEach((root) => {
              if (step === "header") {
                // Keep the final inline transform: clearing it would re-expose the -12px initial state from globals.css.
                intro.to(root, { opacity: 1, y: 0, duration: 0.9 }, at);
                return;
              }
              const targets = [root, ...Array.from(root.querySelectorAll("[data-reveal], [data-draw]"))];
              const hasImage = targets.some((el) => el.getAttribute("data-reveal") === "image");
              let ups = 0;
              let draws = 0;
              for (const el of targets) {
                const kind = el.getAttribute("data-reveal");
                if (kind === "image") revealImage(el, intro, at);
                else if (kind === "lines")
                  intro.to(el.querySelectorAll(".line > span"), { y: 0, duration: 1.15, stagger: 0.09 }, at);
                else if (kind === "up") intro.to(el, { opacity: 1, y: 0, duration: 1 }, at + 0.08 * ups++);
                else if (kind === "fade") intro.to(el, { opacity: 1, duration: 0.9 }, at + (hasImage ? 0.9 : 0));
                else if (kind === "rule") intro.to(el, { scaleX: 1, duration: 1.3 }, at);
                else if (el.hasAttribute("data-draw"))
                  intro.to(el, { strokeDashoffset: 0, duration: 1.1, ease: "power2.inOut" }, at + 0.45 + 0.04 * draws++);
              }
            });
          }

          /* ---------------- Scroll reveal: same vocabulary, triggered near the viewport ---------------- */
          const start = "top 88%";

          ScrollTrigger.batch(q('[data-reveal="up"], [data-reveal="fade"]').filter(outsideIntro), {
            start,
            once: true,
            onEnter: (els) =>
              gsap.to(els, { opacity: 1, y: 0, duration: 1.05, ease: EASE, stagger: 0.08, overwrite: true }),
          });

          q('[data-reveal="lines"]')
            .filter(outsideIntro)
            .forEach((el) => {
              ScrollTrigger.create({
                trigger: el,
                start,
                once: true,
                onEnter: () =>
                  gsap.to(el.querySelectorAll(".line > span"), { y: 0, duration: 1.15, ease: EASE, stagger: 0.09 }),
              });
            });

          q('[data-reveal="image"]')
            .filter(outsideIntro)
            .forEach((el) => {
              ScrollTrigger.create({ trigger: el, start, once: true, onEnter: () => revealImage(el) });
            });

          ScrollTrigger.batch(q('[data-reveal="rule"]').filter(outsideIntro), {
            start,
            once: true,
            onEnter: (els) => gsap.to(els, { scaleX: 1, duration: 1.3, ease: EASE, stagger: 0.06 }),
          });

          ScrollTrigger.batch(q("[data-draw]").filter(outsideIntro), {
            start,
            once: true,
            onEnter: (els) =>
              gsap.to(els, { strokeDashoffset: 0, duration: 1.8, ease: "power2.inOut", stagger: 0.05 }),
          });

          /* ---------------- Counters ---------------- */
          q("[data-count]").forEach((el) => {
            const end = parseFloat(el.dataset.count ?? "0");
            const decimals = parseInt(el.dataset.decimals ?? "0", 10);
            const format = new Intl.NumberFormat("pt-BR", {
              minimumFractionDigits: decimals,
              maximumFractionDigits: decimals,
            });
            const state = { value: 0 };
            el.textContent = format.format(0);
            gsap.to(state, {
              value: end,
              duration: 2,
              ease: "power3.out",
              scrollTrigger: { trigger: el, start, once: true },
              onUpdate: () => {
                el.textContent = format.format(state.value);
              },
            });
          });

          /* ---------------- Light parallax, desktop only ---------------- */
          if (desktop) {
            q("[data-parallax]").forEach((el) => {
              const amount = parseFloat(el.dataset.parallax ?? "0.08") * 100;
              gsap.fromTo(
                el,
                { yPercent: -amount / 2 },
                {
                  yPercent: amount / 2,
                  ease: "none",
                  scrollTrigger: { trigger: el.parentElement, start: "top bottom", end: "bottom top", scrub: true },
                },
              );
            });
          }
        },
      );

      // Late-loading fonts and images shift layout; measure again once everything is in.
      const refresh = () => ScrollTrigger.refresh();
      if (document.readyState === "complete") refresh();
      else window.addEventListener("load", refresh, { once: true });
      return () => window.removeEventListener("load", refresh);
    },
    { scope },
  );

  return (
    <div ref={scope} data-motion-root>
      {children}
    </div>
  );
}
