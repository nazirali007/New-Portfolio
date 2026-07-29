"use client";

import React from "react";
import Reveal from "@/components/ui/Reveal";
import { useCountUp } from "@/utils/hooks/useCountUp";

const stats = [
  { value: 3, suffix: "+", label: "Years shipping" },
  { value: 20, suffix: "+", label: "Projects delivered" },
  { value: null, accent: "11", label: "First-class" },
  { value: 100, suffix: "", label: "Lighthouse target" },
];

const statValues = stats.map((s) => s.value);

export default function AboutSection() {
  const statRefs = useCountUp(statValues);

  return (
    <section id="about" aria-label="About" className="relative">
      <div className="section-container">
        <Reveal className="section-heading">
          <p className="eyebrow mb-3">00 — About</p>
          <h2 className="display-section max-w-3xl">
            I build interfaces that feel <em>quiet</em>, read fast, and
            hold up under real user load.
          </h2>
        </Reveal>

        <Reveal className="stat-grid">
          {stats.map((s, i) => (
            <div className="stat-cell" key={s.label}>
              <p className="stat-num">
                {s.value != null ? (
                  <>
                    <span
                      ref={(el) => {
                        statRefs.current[i] = el;
                      }}
                    >
                      0
                    </span>
                    <em>{s.suffix}</em>
                  </>
                ) : (
                  <>
                    A<em>{s.accent}</em>Y
                  </>
                )}
              </p>
              <p className="stat-label">{s.label}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
