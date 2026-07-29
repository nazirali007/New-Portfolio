"use client";

import React from "react";
import { useScrollReveal } from "@/utils/hooks/useScrollReveal";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
};

/** Fades + slides its children up once they scroll into view. */
export default function Reveal({ children, className }: RevealProps) {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
