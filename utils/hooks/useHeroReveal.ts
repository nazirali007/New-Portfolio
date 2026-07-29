"use client";

import { useEffect, RefObject } from "react";
import gsap from "gsap";
import { prefersReducedMotion } from "@/utils/media";

/** Line-by-line clip-path wipe for [data-hero-line]/[data-hero-fade] elements inside scopeRef. */
export function useHeroReveal(scopeRef: RefObject<HTMLElement>) {
  useEffect(() => {
    const ctx = gsap.context(() => {
      if (prefersReducedMotion()) {
        gsap.set("[data-hero-item]", { opacity: 1, y: 0, clipPath: "inset(0 0 0% 0)" });
        return;
      }

      const tl = gsap.timeline({ delay: 0.15 });
      tl.fromTo(
        "[data-hero-line]",
        { clipPath: "inset(0 0 100% 0)", y: 24 },
        {
          clipPath: "inset(0 0 0% 0)",
          y: 0,
          duration: 0.7,
          ease: "power4.out",
          stagger: 0.09,
        }
      ).fromTo(
        "[data-hero-fade]",
        { opacity: 0, y: 14 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power2.out", stagger: 0.08 },
        "-=0.25"
      );
    }, scopeRef);

    return () => ctx.revert();
  }, [scopeRef]);
}
