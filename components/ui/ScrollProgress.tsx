"use client";

import React from "react";
import { useScrollProgress } from "@/utils/hooks/useScrollProgress";

export default function ScrollProgress() {
  const barRef = useScrollProgress<HTMLDivElement>();

  return <div ref={barRef} className="scroll-progress border border-red-500 " aria-hidden="true" />;
}
