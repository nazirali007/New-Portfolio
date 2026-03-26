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
  visible: {
    transition: { staggerChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export default function SteperVertical() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className="relative pl-7 sm:pl-10"
    >
      {/* Timeline line */}
      <div className="timeline-line" />

      {experiences.map((exp, index) => (
        <motion.div
          key={`${exp.company}-${exp.type}`}
          variants={itemVariants}
          className="relative mb-12 last:mb-0"
        >
          {/* Timeline dot */}
          <div
            className="timeline-dot absolute"
            style={{ left: "-1.65rem", top: "0.35rem" }}
          />

          {/* Content card */}
          <div className="glass rounded-lg sm:rounded-xl p-4 sm:p-6 hover:border-[#64d2de]/20 transition-colors">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-3">
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-white">
                  {exp.role}
                </h3>
                <p className="text-[#64d2de] font-medium text-sm">
                  {exp.company}
                  <span className="text-[#a0a0b0] ml-2">· {exp.type}</span>
                </p>
              </div>
              <div className="text-sm text-[#a0a0b0]">
                <p>{exp.duration}</p>
                <p>{exp.location}</p>
              </div>
            </div>

            <ul className="space-y-2">
              {exp.highlights.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.1 * i }}
                  viewport={{ once: true }}
                  className="text-xs sm:text-sm text-[#c0c0d0] flex items-start gap-2"
                >
                  <span className="text-[#64d2de] mt-1 shrink-0">▹</span>
                  {item}
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
