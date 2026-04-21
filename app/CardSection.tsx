"use client";

import React from "react";
import { motion } from "framer-motion";

type Project = {
  name: string;
  year: string;
  technology: string[];
  description: string;
  url: string;
  tag?: string;
};

const projects: Project[] = [
  {
    name: "WaterMark Remover",
    year: "2026",
    technology: ["Next.js", "React", "TypeScript"],
    description:
      "A web application that removes watermarks from images with a clean, intuitive interface and fast processing.",
    url: "https://github.com/nazirali007/WaterMark-Remover",
    tag: "Latest",
  },
  {
    name: "Url Shortener",
    year: "2024",
    technology: ["Next.js", "Redux", "JavaScript"],
    description:
      "Shorten long URLs into concise, shareable links with analytics tracking.",
    url: "https://github.com/nazirali007/url-shortner",
  },
  {
    name: "Dating App Admin Panel",
    year: "2024",
    technology: ["React.js", "Redux", "JavaScript"],
    description:
      "Admin panel for a dating platform facilitating client-provider matchmaking.",
    url: "https://github.com/nazirali007/Roses-Web-Panel",
  },
  {
    name: "Bowling Web Application",
    year: "2023",
    technology: ["React.js", "Redux", "JavaScript"],
    description:
      "Bowling website featuring live scoring for multiple leagues and teams in real-time.",
    url: "https://github.com/nazirali007/Bowing-Web-Application",
  },
  {
    name: "Essential Apartment Parking",
    year: "2023",
    technology: ["React.js", "Redux", "JavaScript"],
    description:
      "Multi-story commercial real-estate platform serving diverse businesses on a rental basis.",
    url: "https://github.com/nazirali007/Essential-Apartment-Parking",
  },
  {
    name: "Buy & Sell Admin Panel",
    year: "2023",
    technology: ["React.js", "Redux", "JavaScript"],
    description:
      "Marketplace platform for pre-owned items connecting sellers with potential buyers.",
    url: "https://github.com/nazirali007/Buy-And-Sell-Web-Admin-Panel",
  },
  {
    name: "Social Media Application",
    year: "2023",
    technology: ["React.js", "Redux", "JavaScript"],
    description:
      "A private, secure social app to connect with close friends and family in real-time.",
    url: "https://github.com/nazirali007/Social-Media-Web-Application",
  },
];

const ArrowIcon = () => (
  <svg
    className="w-4 h-4 text-[var(--ink-subtle)] group-hover:text-[var(--accent)] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all shrink-0"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M7 17L17 7M7 7h10v10"
    />
  </svg>
);

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function CardSection() {
  const [featured, ...rest] = projects;

  return (
    <div>
      {/* Featured project */}
      <motion.a
        href={featured.url}
        target="_blank"
        rel="noopener noreferrer"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className="project-featured group block"
        aria-label={`View ${featured.name} on GitHub`}
      >
        <div className="project-visual">
          <span className="visual-tag">{featured.tag ?? "Featured"}</span>
          <span className="visual-number" aria-hidden="true">
            01
          </span>
        </div>
        <div className="project-featured-body">
          <div>
            <p className="font-mono text-[11px] text-[var(--ink-subtle)] uppercase tracking-widest mb-3">
              {featured.year} — Featured
            </p>
            <div className="flex items-start justify-between gap-4 mb-3">
              <h3 className="font-display text-2xl sm:text-3xl text-[var(--ink)] group-hover:text-[var(--accent)] transition-colors leading-tight">
                {featured.name}
              </h3>
              <ArrowIcon />
            </div>
            <p className="text-sm text-[var(--ink-muted)] leading-relaxed">
              {featured.description}
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {featured.technology.map((tech) => (
              <span key={tech} className="chip">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </motion.a>

      {/* Rest of projects */}
      <motion.ul
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.06 } },
        }}
        className="project-grid"
        aria-label="Other projects"
      >
        {rest.map((project, i) => (
          <motion.li key={project.url} variants={fadeUp}>
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="project-tile group"
              aria-label={`View ${project.name} on GitHub`}
            >
              <div className="flex items-start justify-between gap-3">
                <span className="font-mono text-[11px] text-[var(--ink-subtle)]">
                  {String(i + 2).padStart(2, "0")} — {project.year}
                </span>
                <ArrowIcon />
              </div>
              <div>
                <h3 className="font-display text-lg sm:text-xl text-[var(--ink)] group-hover:text-[var(--accent)] transition-colors leading-tight mb-2">
                  {project.name}
                </h3>
                <p className="text-sm text-[var(--ink-muted)] leading-relaxed">
                  {project.description}
                </p>
              </div>
              <div className="flex flex-wrap gap-x-3 gap-y-1 mt-auto pt-2">
                {project.technology.map((tech) => (
                  <span
                    key={tech}
                    className="text-[10px] font-mono text-[var(--ink-subtle)] uppercase tracking-wider"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </a>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
}
