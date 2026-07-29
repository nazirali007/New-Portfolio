"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

/** Scales a ref'd element's x-axis to match how far the page has been scrolled. */
export function useScrollProgress<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const bar = ref.current;
    if (!bar) return;

    const update = () => {
      const scrollTop = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const progress = max > 0 ? scrollTop / max : 0;
      gsap.to(bar, { scaleX: progress, duration: 0.15, ease: "none", overwrite: true });
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return ref;
}
