"use client";

import React, { useEffect, useRef } from "react";

const CELL = 42;

export default function GridCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const parent = canvas?.parentElement;
    if (!canvas || !parent) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let mouseX = -9999;
    let mouseY = -9999;
    let rafId = 0;
    let t = 0;

    const isDark = () => document.documentElement.classList.contains("dark");

    const resize = () => {
      width = parent.clientWidth;
      height = parent.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const onMove = (e: MouseEvent) => {
      const rect = parent.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };
    const onLeave = () => {
      mouseX = -9999;
      mouseY = -9999;
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      const lineColor = isDark()
        ? "rgba(237, 240, 230, 0.07)"
        : "rgba(10, 11, 10, 0.06)";
      const glowColor = isDark()
        ? "rgba(198, 255, 61, 0.5)"
        : "rgba(92, 122, 0, 0.4)";

      const cols = Math.ceil(width / CELL) + 1;
      const rows = Math.ceil(height / CELL) + 1;

      ctx.strokeStyle = lineColor;
      ctx.lineWidth = 1;

      for (let i = 0; i < cols; i++) {
        const x = i * CELL;
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let j = 0; j < rows; j++) {
        const y = j * CELL;
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Intersections light up near the cursor
      const radius = 160;
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x = i * CELL;
          const y = j * CELL;
          const dx = x - mouseX;
          const dy = y - mouseY;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < radius) {
            const a = 1 - dist / radius;
            ctx.fillStyle = glowColor.replace(
              /[\d.]+\)$/,
              `${(a * 0.8).toFixed(3)})`
            );
            ctx.beginPath();
            ctx.arc(x, y, 1.6 + a * 2, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }

      if (!reduceMotion) {
        // faint horizontal scanline sweep
        const sweepY = ((t * 40) % (height + 200)) - 100;
        const grad = ctx.createLinearGradient(0, sweepY - 40, 0, sweepY + 40);
        grad.addColorStop(0, "rgba(198, 255, 61, 0)");
        grad.addColorStop(0.5, isDark() ? "rgba(198, 255, 61, 0.05)" : "rgba(92, 122, 0, 0.04)");
        grad.addColorStop(1, "rgba(198, 255, 61, 0)");
        ctx.fillStyle = grad;
        ctx.fillRect(0, sweepY - 40, width, 80);
        t += 0.016;
      }
    };

    const loop = () => {
      draw();
      if (!reduceMotion) rafId = requestAnimationFrame(loop);
    };

    resize();
    draw();
    if (!reduceMotion) rafId = requestAnimationFrame(loop);

    const ro = new ResizeObserver(resize);
    ro.observe(parent);
    parent.addEventListener("mousemove", onMove);
    parent.addEventListener("mouseleave", onLeave);

    return () => {
      cancelAnimationFrame(rafId);
      ro.disconnect();
      parent.removeEventListener("mousemove", onMove);
      parent.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <div className="hero-grid-canvas" aria-hidden="true">
      <canvas ref={canvasRef} />
    </div>
  );
}
