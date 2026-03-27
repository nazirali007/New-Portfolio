"use client";

import React from "react";
import { motion } from "framer-motion";

const projects = [
  
  {
    name: "Url Shortener Web Application",
    technology: ["Next.js", "Redux", "JavaScript"],
    description:
      "A web application that allows users to shorten long URLs into concise, shareable links with analytics tracking.",
    url: "https://github.com/nazirali007/url-shortner",
  },
  {
    name: "Dating App Admin Panel",
    technology: ["React.js", "Redux", "JavaScript"],
    description:
      "Built a web application for an adult dating platform facilitating client-provider matchmaking with admin controls.",
    url: "https://github.com/nazirali007/Roses-Web-Panel",
  },
  {
    name: "Bowling Web Application",
    technology: ["React.js", "Redux", "JavaScript"],
    description:
      "Developed a bowling game website featuring live scoring for multiple leagues and teams with real-time updates.",
    url: "https://github.com/nazirali007/Bowing-Web-Application",
  },
  {
    name: "Essential Apartment Parking",
    technology: ["React.js", "Redux", "JavaScript"],
    description:
      "Designed a multi-story commercial real estate project catering to diverse businesses on a rental basis.",
    url: "https://github.com/nazirali007/Essential-Apartment-Parking",
  },
  {
    name: "Buy & Sell Admin Panel",
    technology: ["React.js", "Redux", "JavaScript"],
    description:
      "Marketplace platform for pre-owned items connecting sellers with a wide audience of potential buyers.",
    url: "https://github.com/nazirali007/Buy-And-Sell-Web-Admin-Panel",
  },
  {
    name: "Social Media Application",
    technology: ["React.js", "Redux", "JavaScript"],
    description:
      "A private, secure social media app to connect with close friends and family with real-time messaging.",
    url: "https://github.com/nazirali007/Social-Media-Web-Application",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function CardSection() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5"
    >
      {projects.map((project, index) => (
        <motion.a
          key={index}
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          variants={cardVariants}
          whileHover={{ y: -8 }}
          className="project-card group cursor-pointer flex flex-col"
        >
          {/* Card top accent */}
          <div className="h-1 bg-gradient-to-r from-[#64d2de] via-[#a78bfa] to-[#f472b6]" />

          <div className="p-3.5 sm:p-6 flex flex-col flex-1">
            {/* Folder icon */}
            <div className="flex items-center justify-between mb-3 sm:mb-4">
              <svg
                className="w-8 h-8 sm:w-10 sm:h-10 text-[#64d2de]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                />
              </svg>
              <svg
                className="w-5 h-5 text-[#a0a0b0] group-hover:text-[#64d2de] transition-colors -rotate-45"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </div>

            <h3 className="text-sm sm:text-lg font-semibold text-white mb-1.5 sm:mb-2 group-hover:text-[#64d2de] transition-colors">
              {project.name}
            </h3>

            <p className="text-xs sm:text-sm text-[#a0a0b0] mb-3 sm:mb-4 flex-1 leading-relaxed">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-auto">
              {project.technology.map((tech) => (
                <span
                  key={tech}
                  className="text-xs text-[#64d2de]/80 font-mono"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.a>
      ))}
    </motion.div>
  );
}
