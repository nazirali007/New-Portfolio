"use client";

import React from "react";
import { useMarqueeSpeed } from "@/utils/hooks/useMarqueeSpeed";

const marqueeWords = [
  "REACT",
  "NEXT.JS",
  "TYPESCRIPT",
  "TAILWIND",
  "REDUX",
  "SHADCN/UI",
  "FRAMER MOTION",
  "PERFORMANCE",
  "ACCESSIBILITY",
  "DESIGN SYSTEMS",
];

function MarqueeRow({ ariaHidden }: { ariaHidden?: boolean }) {
  return (
    <div className="marquee-item" aria-hidden={ariaHidden}>
      {marqueeWords.map((w, i) => (
        <React.Fragment key={w}>
          <span>{w}</span>
          {i < marqueeWords.length - 1 && <span className="sep">//</span>}
        </React.Fragment>
      ))}
      <span className="sep">//</span>
    </div>
  );
}

export default function MarqueeSection() {
  const trackRef = useMarqueeSpeed<HTMLDivElement>();

  return (
    <section aria-hidden="true" className="marquee" role="presentation">
      <div ref={trackRef} className="marquee-track">
        <MarqueeRow />
        <MarqueeRow ariaHidden />
      </div>
    </section>
  );
}
