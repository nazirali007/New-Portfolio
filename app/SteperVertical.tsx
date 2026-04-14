"use client";

import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    company: "CaptureATrip",
    role: "Frontend Developer",
    type: "Full-time",
    duration: "Feb 2025 — Present",
    location: "Gurgaon, India",
    highlights: [
      "Engineered a modern travel platform with Next.js App Router & Server Components",
      "Built scalable UIs with shadcn/UI, Tailwind CSS, and reusable component architecture",
      "Implemented OTP login, JWT auth, and protected routes for secure sessions",
      "Integrated Strapi/WordPress APIs for dynamic travel content delivery",
      "Developed advanced features: rating dialogs, image uploads, nested sliders, dynamic forms",
      "Optimized performance via SSR, caching, lazy loading, and refined API calls",
    ],
  },
  {
    company: "Techdock Labs",
    role: "Frontend Developer",
    type: "Full-time",
    duration: "Jan 2023 — Feb 2025",
    location: "India",
    highlights: [
      "Built responsive, interactive UIs using React.js and component-based architecture",
      "Integrated REST APIs and implemented authentication flows with state management",
      "Enhanced UI consistency, performance, and cross-browser compatibility",
    ],
  },
  {
    company: "Techdock Labs",
    role: "Frontend Intern",
    type: "Internship",
    duration: "Jul 2022 — Dec 2022",
    location: "India",
    highlights: [
      "Developed UI components and integrated APIs to support team objectives",
      "Focused on responsive layouts and core frontend tasks in SPA development",
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.25 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" as const },
  },
};

export default function SteperVertical() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className="relative pl-8 sm:pl-12"
    >
      <div className="timeline-line" />

      {experiences.map((exp, index) => (
        <motion.div
          key={`${exp.company}-${exp.type}`}
          variants={itemVariants}
          className="relative mb-14 sm:mb-20 last:mb-0 group"
        >
          <div
            className="timeline-dot absolute"
            style={{ left: "-1.85rem", top: "0.75rem" }}
          />

          <div className="grid grid-cols-1 md:grid-cols-[140px_1fr] gap-4 md:gap-10">
            {/* Date column */}
            <div className="md:text-right md:pt-1">
              <p className="text-xs font-mono text-[#6b6b7b] tracking-widest uppercase">
                {exp.duration}
              </p>
              <p className="text-xs font-mono text-[#6b6b7b]/70 mt-1">
                {exp.location}
              </p>
            </div>

            {/* Content */}
            <div className="relative">
              <span className="text-xs font-mono text-[#64d2de]/60 mb-1 block">
                0{index + 1} — {exp.type}
              </span>
              <h3 className="font-display text-2xl sm:text-4xl text-white leading-[1.1] mb-1">
                {exp.role}
              </h3>
              <p className="font-display italic text-lg sm:text-2xl text-[#64d2de] mb-5">
                @ {exp.company}
              </p>

              <ul className="space-y-2.5 max-w-2xl">
                {exp.highlights.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08 * i }}
                    viewport={{ once: true }}
                    className="text-xs sm:text-sm text-[#9a9aab] flex items-start gap-3 leading-relaxed"
                  >
                    <span className="text-[#64d2de] mt-1.5 shrink-0 text-[8px]">
                      ●
                    </span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
