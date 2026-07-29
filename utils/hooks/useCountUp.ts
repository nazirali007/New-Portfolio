"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { prefersReducedMotion } from "@/utils/media";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Animates a list of <span> refs from 0 up to their target number once each
 * scrolls into view. Pass `null` for entries that shouldn't animate (e.g. a
 * non-numeric stat) — the hook simply skips them.
 */
export function useCountUp(targets: Array<number | null>) {
  const refs = useRef<Array<HTMLSpanElement | null>>([]);

  useEffect(() => {
    if (prefersReducedMotion()) return;

    const triggers = targets.map((value, i) => {
      const el = refs.current[i];
      if (value == null || !el) return null;

      const counter = { n: 0 };
      return ScrollTrigger.create({
        trigger: el,
        start: "top 90%",
        once: true,
        onEnter: () => {
          gsap.to(counter, {
            n: value,
            duration: 1.1,
            ease: "power2.out",
            onUpdate: () => {
              el.textContent = Math.round(counter.n).toString();
            },
          });
        },
      });
    });

    return () => triggers.forEach((t) => t?.kill());
  }, [targets]);

  return refs;
}
