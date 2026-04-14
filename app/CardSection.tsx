"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

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
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" as const },
  },
};

type Project = (typeof projects)[number];

function TiltCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef<HTMLAnchorElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const mouseX = (e.clientX - rect.left) / rect.width - 0.5;
    const mouseY = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(mouseX);
    y.set(mouseY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      ref={ref}
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      variants={cardVariants}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="project-card group cursor-pointer flex flex-col"
    >
      <div className="project-visual" style={{ transform: "translateZ(20px)" }}>
        <span className="project-index">
          {String(index + 1).padStart(2, "0")}
        </span>
        <div className="absolute inset-0 flex items-center justify-center">
          <svg
            className="w-16 h-16 sm:w-20 sm:h-20 text-white/70 group-hover:text-white group-hover:scale-110 transition-all duration-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth={1}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
            />
          </svg>
        </div>
      </div>

      <div
        className="p-5 sm:p-7 flex flex-col flex-1"
        style={{ transform: "translateZ(30px)" }}
      >
        <div className="flex items-start justify-between gap-3 mb-2 sm:mb-3">
          <h3 className="font-display text-xl sm:text-2xl text-white leading-tight group-hover:text-[#64d2de] transition-colors">
            {project.name}
          </h3>
          <svg
            className="w-5 h-5 text-[#6b6b7b] group-hover:text-[#64d2de] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all shrink-0 mt-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M7 17L17 7M7 7h10v10"
            />
          </svg>
        </div>

        <p className="text-xs sm:text-sm text-[#9a9aab] mb-5 flex-1 leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
          {project.technology.map((tech) => (
            <span
              key={tech}
              className="text-[10px] sm:text-xs font-mono text-[#64d2de]/80 uppercase tracking-wider"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.a>
  );
}

export default function CardSection() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
      style={{ perspective: "1200px" }}
    >
      {projects.map((project, index) => (
        <TiltCard key={index} project={project} index={index} />
      ))}
    </motion.div>
  );
}
