"use client";

import React from "react";
import { motion } from "framer-motion";

const skillCategories = [
  {
    num: "01",
    title: "Frontend",
    size: "wide" as const,
    blurb: "My core — I live in React trees, component APIs and render cycles.",
    skills: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3",
    ],
  },
  {
    num: "02",
    title: "UI & Styling",
    size: "narrow" as const,
    blurb: "Design systems, tokens, motion.",
    skills: [
      "Tailwind CSS",
      "Material UI",
      "shadcn/UI",
      "Responsive",
      "Design Systems",
    ],
  },
  {
    num: "03",
    title: "State & Data",
    size: "half" as const,
    blurb: "Predictable data flow and clean API contracts.",
    skills: [
      "Redux",
      "Context API",
      "React Query",
      "REST APIs",
      "Axios",
      "JWT Auth",
    ],
  },
  {
    num: "04",
    title: "Forms & Validation",
    size: "half" as const,
    blurb: "Type-safe, resilient user input.",
    skills: ["React Hook Form", "Zod", "Controlled Forms"],
  },
  {
    num: "05",
    title: "Tools & Shipping",
    size: "full" as const,
    blurb: "From commit to production with confidence.",
    skills: [
      "Git & GitHub",
      "Vercel",
      "Webpack",
      "SSR / SSG",
      "CI/CD",
      "SEO",
      "Performance",
      "Accessibility",
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function SkillSection() {
  const handleMove = (e: React.MouseEvent<HTMLElement>) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const mx = ((e.clientX - rect.left) / rect.width) * 100;
    const my = ((e.clientY - rect.top) / rect.height) * 100;
    el.style.setProperty("--mx", `${mx}%`);
    el.style.setProperty("--my", `${my}%`);
  };

  return (
    <motion.ul
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      className="bento-grid"
      aria-label="Skills and toolkit"
    >
      {skillCategories.map((category) => (
        <motion.li
          key={category.title}
          variants={itemVariants}
          className={`bento-tile ${category.size}`}
          onMouseMove={handleMove}
        >
          <div>
            <div className="flex items-baseline gap-3 mb-3">
              <span className="font-mono text-[11px] text-[var(--ink-subtle)]">
                {category.num}
              </span>
              <h3 className="font-display text-xl sm:text-2xl text-[var(--ink)]">
                {category.title}
              </h3>
            </div>
            <p className="text-sm text-[var(--ink-muted)] leading-relaxed max-w-md">
              {category.blurb}
            </p>
          </div>

          <ul className="flex flex-wrap gap-2 mt-6">
            {category.skills.map((skill) => (
              <li key={skill} className="chip">
                {skill}
              </li>
            ))}
          </ul>
        </motion.li>
      ))}
    </motion.ul>
  );
}
