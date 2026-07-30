import React from "react";
import ScrollVelocity from "@/components/ui/ScrollVelocity";

const marqueeWords = [
  "REACT",
  "NEXT.JS",
  "TYPESCRIPT",
  "JAVASCRIPT",
  "TAILWIND CSS",
  "SHADCN/UI",
  "REDUX TOOLKIT",
  "ZUSTAND",
  "REACT QUERY",
  "GRAPHQL",
  "REST APIs",
  "AUTHENTICATION",
  "REACT HOOK FORM",
  "ZOD",
  "SSR",
  "SSG",
  "ISR",
  "APP ROUTER",
  "SEO",
  "WEB PERFORMANCE",
  "ACCESSIBILITY",
  "FRAMER MOTION",
  "RESPONSIVE DESIGN",
  "COMPONENT LIBRARIES",
  "DESIGN SYSTEMS",
  "GIT",
  "VERCEL",
];

function MarqueeRow() {
  return (
    <>
      {marqueeWords.map((w, i) => (
        <React.Fragment key={w}>
          <span>{w}</span>
          {i < marqueeWords.length - 1 && (
            <span className="text-[var(--accent)]">&nbsp;//&nbsp;</span>
          )}
        </React.Fragment>
      ))}
      <span className="text-[var(--accent)]">&nbsp;//&nbsp;</span>
    </>
  );
}

export default function MarqueeSection() {
  return (
    <section aria-hidden="true" className="marquee" role="presentation">
      <ScrollVelocity
        texts={[<MarqueeRow key="a" />, <MarqueeRow key="b" />]}
        velocity={28}
        numCopies={4}
        className="font-mono font-bold uppercase text-[var(--ink)] tracking-tight text-base sm:text-lg md:text-xl"
        parallaxClassName="py-1.5"
      />
    </section>
  );
}
