"use client";

import { useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const EASE = "expo.out";

/**
 * Page-wide motion layer. Server-rendered sections opt in with data attributes:
 *  - data-reveal="up" | "fade" | "lines" | "image" | "rule"  (+ optional data-delay, in seconds)
 *  - data-parallax="0.08"   vertical drift relative to its parent while scrolling (desktop only)
 *  - data-count="3000" data-decimals="0"   count-up when visible
 * Initial hidden states live in globals.css and only apply when JS runs and motion is allowed.
 */
export function MotionRoot({ children }: { children: ReactNode }) {
  const scope = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      document.documentElement.classList.add("js", "motion-ready");
      const q = gsap.utils.selector(scope);
      const delayOf = (el: Element) => parseFloat((el as HTMLElement).dataset.delay ?? "0");

      const mm = gsap.matchMedia();
      mm.add(
        {
          motion: "(prefers-reduced-motion: no-preference)",
          desktop: "(min-width: 768px) and (prefers-reduced-motion: no-preference)",
        },
        (context) => {
          const { motion, desktop } = context.conditions as { motion: boolean; desktop: boolean };
          if (!motion) return; // CSS keeps everything in its final, static state.

          // Text blocks and small groups: fade-up with a gentle stagger.
          ScrollTrigger.batch(q('[data-reveal="up"], [data-reveal="fade"]'), {
            start: "top 92%",
            once: true,
            onEnter: (els) =>
              gsap.to(els, {
                opacity: 1,
                y: 0,
                duration: 1.1,
                ease: EASE,
                stagger: 0.08,
                delay: delayOf(els[0]),
                overwrite: true,
              }),
          });

          // Headlines: each line slides up out of its mask.
          q('[data-reveal="lines"]').forEach((el) => {
            ScrollTrigger.create({
              trigger: el,
              start: "top 92%",
              once: true,
              onEnter: () =>
                gsap.to(el.querySelectorAll(".line > span"), {
                  y: 0,
                  duration: 1.2,
                  ease: EASE,
                  stagger: 0.09,
                  delay: delayOf(el),
                }),
            });
          });

          // Images: clip reveal from the top edge down, with the photo settling inside.
          q('[data-reveal="image"]').forEach((el) => {
            ScrollTrigger.create({
              trigger: el,
              start: "top 90%",
              once: true,
              onEnter: () => {
                const delay = delayOf(el);
                gsap.fromTo(
                  el,
                  { clipPath: "inset(0% 0% 100% 0%)" },
                  { clipPath: "inset(0% 0% 0% 0%)", duration: 1.4, ease: "expo.inOut", delay },
                );
                const img = el.querySelector("img");
                if (img) gsap.fromTo(img, { scale: 1.14 }, { scale: 1, duration: 2, ease: EASE, delay });
              },
            });
          });

          // Measuring rules draw from the left.
          ScrollTrigger.batch(q('[data-reveal="rule"]'), {
            start: "top 95%",
            once: true,
            onEnter: (els) => gsap.to(els, { scaleX: 1, duration: 1.3, ease: EASE, stagger: 0.06 }),
          });

          // Counters.
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
              scrollTrigger: { trigger: el, start: "top 90%", once: true },
              onUpdate: () => {
                el.textContent = format.format(state.value);
              },
            });
          });

          // Light parallax, desktop only.
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

  return <div ref={scope}>{children}</div>;
}
