"use client";

import React from "react";
import { motion } from "framer-motion";

type Experience = {
  company: string;
  role: string;
  duration: string;
  dateTime: string;
  location: string;
  type: string;
  current: boolean;
  highlights: string[];
  stack: string[];
};

const experiences: Experience[] = [
  {
    company: "CaptureATrip",
    role: "Frontend Developer",
    duration: "Feb 2025 — Present",
    dateTime: "2025-02",
    location: "Gurgaon, India",
    type: "Full-time",
    current: true,
    highlights: [
      "Engineered a modern travel platform with Next.js App Router & Server Components",
      "Built scalable UIs with shadcn/UI, Tailwind CSS, and reusable component architecture",
      "Implemented OTP login, JWT auth, and protected routes for secure sessions",
      "Integrated Strapi/WordPress APIs for dynamic travel content delivery",
      "Optimized performance via SSR, caching, lazy loading, and refined API calls",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind", "shadcn/UI"],
  },
  {
    company: "Techdock Labs",
    role: "Frontend Developer",
    duration: "Jan 2023 — Feb 2025",
    dateTime: "2023-01",
    location: "India",
    type: "Full-time",
    current: false,
    highlights: [
      "Built responsive, interactive UIs using React.js and component-based architecture",
      "Integrated REST APIs and implemented authentication flows with state management",
      "Enhanced UI consistency, performance, and cross-browser compatibility",
    ],
    stack: ["React.js", "Redux", "JavaScript"],
  },
  {
    company: "Techdock Labs",
    role: "Frontend Intern",
    duration: "Jul 2022 — Dec 2022",
    dateTime: "2022-07",
    location: "India",
    type: "Internship",
    current: false,
    highlights: [
      "Developed UI components and integrated APIs to support team objectives",
      "Focused on responsive layouts and core frontend tasks in SPA development",
    ],
    stack: ["React.js", "JavaScript"],
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" as const },
  },
};

export default function SteperVertical() {
  return (
    <motion.ol
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      className="timeline-wrap"
      aria-label="Work history"
    >
      {experiences.map((exp) => (
        <motion.li
          key={`${exp.company}-${exp.duration}`}
          variants={itemVariants}
          className={`timeline-item ${exp.current ? "current" : ""}`}
        >
          <span className="timeline-dot" aria-hidden="true" />
          <article className="timeline-card">
            <header className="flex items-start justify-between gap-4 flex-wrap mb-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[10px] font-mono text-[var(--ink-subtle)] uppercase tracking-widest">
                    {exp.type}
                  </span>
                  {exp.current && (
                    <span className="text-[10px] font-mono text-[var(--accent)] bg-[var(--accent)]/10 border border-[var(--accent)]/25 px-1.5 py-0.5 rounded">
                      Current
                    </span>
                  )}
                </div>
                <h3 className="font-display text-xl sm:text-2xl text-[var(--ink)] leading-tight">
                  {exp.role}
                </h3>
                <p className="font-display italic text-base sm:text-lg text-[var(--accent)] mt-0.5">
                  @ {exp.company}
                </p>
              </div>
              <div className="text-right">
                <time
                  dateTime={exp.dateTime}
                  className="text-xs font-mono text-[var(--ink-2)]"
                >
                  {exp.duration}
                </time>
                <p className="text-xs font-mono text-[var(--ink-subtle)] mt-0.5">
                  {exp.location}
                </p>
              </div>
            </header>

            <ul className="space-y-2 mb-5">
              {exp.highlights.map((item, idx) => (
                <li
                  key={idx}
                  className="text-sm text-[var(--ink-muted)] leading-relaxed pl-4 relative"
                >
                  <span
                    className="absolute left-0 top-[0.65em] w-1 h-1 rounded-full bg-[var(--ink-subtle)]"
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </ul>

            <footer className="flex flex-wrap gap-2 pt-4 border-t border-[var(--line)]">
              {exp.stack.map((s) => (
                <span
                  key={s}
                  className="text-[11px] font-mono text-[var(--ink-2)] bg-[var(--paper)] border border-[var(--line)] px-2 py-0.5 rounded"
                >
                  {s}
                </span>
              ))}
            </footer>
          </article>
        </motion.li>
      ))}
    </motion.ol>
  );
}
