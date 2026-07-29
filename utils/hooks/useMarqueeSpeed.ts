"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { prefersReducedMotion } from "@/utils/media";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/** Speeds up a CSS marquee animation briefly in proportion to scroll velocity. */
export function useMarqueeSpeed<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const track = ref.current;
    if (!track || prefersReducedMotion()) return;

    const trigger = ScrollTrigger.create({
      trigger: track,
      start: "top bottom",
      end: "bottom top",
      onUpdate: (self) => {
        const speed = 14 - Math.min(Math.abs(self.getVelocity()) / 900, 10);
        track.style.animationDuration = `${Math.max(speed, 3)}s`;
      },
    });

    return () => trigger.kill();
  }, []);

  return ref;
}
