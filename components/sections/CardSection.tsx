"use client";

import React from "react";
import { motion } from "framer-motion";

type Project = {
  name: string;
  year: string;
  technology: string[];
  description: string;
  url: string;
  repo?: string;
  tag?: string;
  personal?: boolean;
};

const projects: Project[] = [
  {
    name: "Maintenance Reminder",
    year: "2026",
    technology: ["Next.js", "Prisma", "PostgreSQL", "Auth.js"],
    description:
      "My own full-stack product — tracks every vehicle's service history and predicts when maintenance is due from the owner's driving pattern, not just when they open the app. A daily background job estimates today's odometer from past updates and emails before something's overdue.",
    url: "https://carsalahkar.site",
    repo: "https://github.com/nazirali007/maintenance_Reminder",
    tag: "Latest",
    personal: true,
  },
  {
    name: "WaterMark Remover",
    year: "2026",
    technology: ["Next.js", "React", "TypeScript"],
    description:
      "A personal side project that removes watermarks from images with a clean, intuitive interface and fast processing — built, deployed, and owned end to end.",
    url: "https://water-mark-remover-pearl.vercel.app/",
    repo: "https://github.com/nazirali007/WaterMark-Remover",
    personal: true,
  },
  {
    name: "Url Shortener",
    year: "2024",
    technology: ["Next.js", "Redux", "JavaScript"],
    description:
      "Shorten long URLs into concise, shareable links with analytics tracking.",
    url: "https://url-shortner-pi-brown.vercel.app/",
    repo: "https://github.com/nazirali007/url-shortner",
    personal: true,
  },
  {
    name: "Dating App Admin Panel",
    year: "2024",
    technology: ["React.js", "Redux", "JavaScript"],
    description:
      "Admin panel for a dating platform facilitating client-provider matchmaking.",
    url: "https://github.com/nazirali007/Roses-Web-Panel",
    repo: "https://github.com/nazirali007/Roses-Web-Panel",
  },
  {
    name: "Bowling Web Application",
    year: "2023",
    technology: ["React.js", "Redux", "JavaScript"],
    description:
      "Bowling website featuring live scoring for multiple leagues and teams in real-time.",
    url: "https://github.com/nazirali007/Bowing-Web-Application",
    repo: "https://github.com/nazirali007/Bowing-Web-Application",
  },
  {
    name: "Essential Apartment Parking",
    year: "2023",
    technology: ["React.js", "Redux", "JavaScript"],
    description:
      "Multi-story commercial real-estate platform serving diverse businesses on a rental basis.",
    url: "https://github.com/nazirali007/Essential-Apartment-Parking",
    repo: "https://github.com/nazirali007/Essential-Apartment-Parking",
  },
  {
    name: "Buy & Sell Admin Panel",
    year: "2023",
    technology: ["React.js", "Redux", "JavaScript"],
    description:
      "Marketplace platform for pre-owned items connecting sellers with potential buyers.",
    url: "https://github.com/nazirali007/Buy-And-Sell-Web-Admin-Panel",
    repo: "https://github.com/nazirali007/Buy-And-Sell-Web-Admin-Panel",
  },
  {
    name: "Social Media Application",
    year: "2023",
    technology: ["React.js", "Redux", "JavaScript"],
    description:
      "A private, secure social app to connect with close friends and family in real-time.",
    url: "https://github.com/nazirali007/Social-Media-Web-Application",
    repo: "https://github.com/nazirali007/Social-Media-Web-Application",
  },
];

const ArrowIcon = () => (
  <svg
    className="w-4 h-4 shrink-0"
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

const GitHubIcon = () => (
  <svg
    className="w-4 h-4 shrink-0"
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" />
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
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className="project-featured group block"
      >
        <div className="project-visual">
          <span className="visual-tag">{featured.tag ?? (featured.personal ? "Personal" : "Featured")}</span>
          <span className="visual-number" aria-hidden="true">
            01
          </span>
        </div>
        <div className="project-featured-body">
          <div>
            <p className="font-mono text-[11px] text-[var(--ink-subtle)] uppercase tracking-widest mb-3">
              {featured.year} — {featured.personal ? "Featured · Personal" : "Featured"}
            </p>
            <div className="flex items-start justify-between gap-4 mb-3">
              <h3 className="font-display text-2xl sm:text-3xl text-[var(--ink)] leading-tight">
                {featured.name}
              </h3>
            </div>
            <p className="text-sm text-[var(--ink-muted)] leading-relaxed">
              {featured.description}
            </p>
          </div>
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <div className="flex flex-wrap gap-2">
              {featured.technology.map((tech) => (
                <span key={tech} className="chip">
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-3">
              {featured.repo && (
                <a
                  href={featured.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-[var(--ink-subtle)] hover:text-[var(--accent)] transition-colors"
                  aria-label={`GitHub repo for ${featured.name}`}
                  onClick={(e) => e.stopPropagation()}
                >
                  <GitHubIcon />
                  Code
                </a>
              )}
              <a
                href={featured.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-mono text-[var(--ink-subtle)] hover:text-[var(--accent)] transition-colors"
                aria-label={`Live demo of ${featured.name}`}
              >
                <ArrowIcon />
                Live
              </a>
            </div>
          </div>
        </div>
      </motion.div>

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
            <div
              className="project-tile group"
            >
              <div className="flex items-start justify-between gap-3">
                <span className="font-mono text-[11px] text-[var(--ink-subtle)] uppercase tracking-wider flex items-center gap-2">
                  {String(i + 2).padStart(2, "0")} — {project.year}
                  {project.personal && (
                    <span className="text-[10px] text-[var(--accent)] border border-[var(--accent)]/30 px-1.5 py-0.5 rounded">
                      Personal
                    </span>
                  )}
                </span>
              </div>
              <div>
                <h3 className="font-display text-lg sm:text-xl text-[var(--ink)] leading-tight mb-2">
                  {project.name}
                </h3>
                <p className="text-sm text-[var(--ink-muted)] leading-relaxed">
                  {project.description}
                </p>
              </div>
              <div className="flex items-center justify-between gap-4 mt-auto pt-2 flex-wrap">
                <div className="flex flex-wrap gap-x-3 gap-y-1">
                  {project.technology.map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] font-mono text-[var(--ink-subtle)] uppercase tracking-wider"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-3">
                  {project.repo && (
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-[var(--ink-subtle)] hover:text-[var(--accent)] transition-colors"
                      aria-label={`GitHub repo for ${project.name}`}
                    >
                      <GitHubIcon />
                      Code
                    </a>
                  )}
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-[var(--ink-subtle)] hover:text-[var(--accent)] transition-colors"
                    aria-label={`${project.repo && project.url !== project.repo ? "Live demo" : "View"} ${project.name}`}
                  >
                    <ArrowIcon />
                    {project.repo && project.url !== project.repo ? "Live" : "View"}
                  </a>
                </div>
              </div>
            </div>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
}
