"use client";

import React from "react";
import { motion } from "framer-motion";

const skillCategories = [
  {
    num: "01",
    title: "Frontend",
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
    skills: [
      "Tailwind CSS",
      "Material UI",
      "shadcn/UI",
      "Responsive Design",
      "Mobile First UI",
      "Design Systems",
    ],
  },
  {
    num: "03",
    title: "State & Data",
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
    skills: ["React Hook Form", "Zod", "Controlled Forms"],
  },
  {
    num: "05",
    title: "Tools & Other",
    skills: [
      "Git & GitHub",
      "Vercel",
      "Webpack",
      "SSR / SSG",
      "CI/CD",
      "SEO",
      "Performance Optimization",
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const categoryVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

const pillVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.35 } },
};

export default function SkillSection() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      className="flex flex-col gap-10 sm:gap-14"
    >
      {skillCategories.map((category) => (
        <motion.div
          key={category.title}
          variants={categoryVariants}
          className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4 md:gap-12 items-start border-t border-white/5 pt-8 sm:pt-10"
        >
          <div>
            <p className="text-xs font-mono text-[#64d2de]/60 mb-2">
              {category.num}
            </p>
            <h3 className="font-display italic text-2xl sm:text-3xl text-white">
              {category.title}
            </h3>
          </div>
          <motion.div
            className="flex flex-wrap gap-2.5 sm:gap-3"
            variants={containerVariants}
          >
            {category.skills.map((skill) => (
              <motion.span
                key={skill}
                variants={pillVariants}
                whileHover={{ y: -2 }}
                className="skill-chip"
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      ))}
    </motion.div>
  );
}
