"use client";

import React from "react";
import { motion } from "framer-motion";

const skillCategories = [
  {
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
    title: "Forms & Validation",
    skills: [
      "React Hook Form",
      "Zod",
      "Controlled Forms",
    ],
  },
  {
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
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const categoryVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

const pillVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3 },
  },
};

export default function SkillSection() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className="flex flex-col gap-6 sm:gap-8"
    >
      {skillCategories.map((category) => (
        <motion.div key={category.title} variants={categoryVariants}>
          <h3 className="text-xs sm:text-sm uppercase tracking-widest text-[#a0a0b0] mb-2 sm:mb-3 font-medium">
            {category.title}
          </h3>
          <motion.div
            className="flex flex-wrap gap-2 sm:gap-3"
            variants={containerVariants}
          >
            {category.skills.map((skill) => (
              <motion.span
                key={skill}
                variants={pillVariants}
                whileHover={{ scale: 1.05, y: -2 }}
                className="skill-pill"
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
