"use client";

import React from "react";
import { motion } from "framer-motion";
import TopNavbar from "./TopNavbar";
import SteperVertical from "./SteperVertical";
import SkillSection from "./SkillSection";
import CardSection from "./CardSection";
import Footer from "./Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.6, ease: "easeOut" as const },
  }),
};

const marqueeWords = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind",
  "Redux",
  "shadcn/UI",
  "Framer Motion",
  "Performance",
  "Accessibility",
  "Design Systems",
];

export default function Home() {
  return (
    <>
      <TopNavbar />

      <main id="main" className="relative">
        {/* ============ HERO ============ */}
        <section
          id="home"
          aria-label="Introduction"
          className="relative min-h-[92vh] flex items-center pt-28 pb-16"
        >
          <div className="section-container !py-0 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-14 lg:gap-20 items-center">
              {/* Left — text */}
              <div className="order-2 lg:order-1">
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="available-pill mb-8"
                >
                  <span className="dot" aria-hidden="true" />
                  <span>Available for new work — 2026</span>
                </motion.div>

                <motion.p
                  custom={0}
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  className="eyebrow mb-5"
                >
                  Nazir Ali Siddiqui · Gurgaon, IN
                </motion.p>

                <motion.h1
                  custom={1}
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  className="display-hero mb-8"
                >
                  Frontend
                  <br />
                  developer<em>,</em>
                  <br />
                  crafting <em>calm</em>
                  <br />
                  interfaces.
                </motion.h1>

                <motion.p
                  custom={2}
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  className="lead max-w-xl mb-10"
                >
                  I&apos;ve spent three years shipping production frontends in
                  React, Next.js and TypeScript — across travel, marketplace
                  and real-estate products. I care about performance,
                  accessibility, and the quiet details.
                </motion.p>

                <motion.div
                  custom={3}
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  className="flex flex-wrap items-center gap-3"
                >
                  <a href="#projects" className="btn-primary">
                    View selected work <span className="arr">→</span>
                  </a>
                  <a href="#contact" className="btn-ghost">
                    Get in touch
                  </a>
                </motion.div>
              </div>

              {/* Right — profile card */}
              <motion.div
                initial={{ opacity: 0, y: 30, rotate: -1 }}
                animate={{ opacity: 1, y: 0, rotate: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="order-1 lg:order-2 justify-self-center lg:justify-self-end"
              >
                <figure className="profile-card w-56 sm:w-64 lg:w-[300px]">
                  <span className="tape" aria-hidden="true" />
                  <div className="photo">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="images/ProfilePicture.png"
                      alt="Portrait of Nazir Ali Siddiqui, Frontend Developer"
                      width={600}
                      height={750}
                      loading="eager"
                    />
                  </div>
                  <figcaption className="profile-meta">
                    <span>NAS — 001</span>
                    <span>EST. 2022</span>
                  </figcaption>
                </figure>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ============ MARQUEE ============ */}
        <section
          aria-hidden="true"
          className="marquee"
          role="presentation"
        >
          <div className="marquee-track">
            <div className="marquee-item">
              {marqueeWords.map((w, i) => (
                <React.Fragment key={`a-${w}`}>
                  <span>{w}</span>
                  {i < marqueeWords.length - 1 && <span className="sep">✦</span>}
                </React.Fragment>
              ))}
              <span className="sep">✦</span>
            </div>
            <div className="marquee-item" aria-hidden="true">
              {marqueeWords.map((w, i) => (
                <React.Fragment key={`b-${w}`}>
                  <span>{w}</span>
                  {i < marqueeWords.length - 1 && <span className="sep">✦</span>}
                </React.Fragment>
              ))}
              <span className="sep">✦</span>
            </div>
          </div>
        </section>

        {/* ============ ABOUT ============ */}
        <section id="about" aria-label="About" className="relative">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="section-heading"
            >
              <p className="eyebrow mb-3">00 — About</p>
              <h2 className="display-section max-w-3xl">
                I build interfaces that feel <em>quiet</em>, read fast, and
                hold up under real user load.
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="stat-grid"
            >
              <div className="stat-cell">
                <p className="stat-num">
                  3<em>+</em>
                </p>
                <p className="stat-label">Years shipping</p>
              </div>
              <div className="stat-cell">
                <p className="stat-num">20+</p>
                <p className="stat-label">Projects delivered</p>
              </div>
              <div className="stat-cell">
                <p className="stat-num">
                  A<em>11</em>y
                </p>
                <p className="stat-label">First-class</p>
              </div>
              <div className="stat-cell">
                <p className="stat-num">100</p>
                <p className="stat-label">Lighthouse target</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ============ EXPERIENCE ============ */}
        <section id="experience" aria-label="Experience" className="relative">
          <div className="section-container !pt-0">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="section-heading flex items-end justify-between flex-wrap gap-4"
            >
              <div>
                <p className="eyebrow mb-3">01 — Experience</p>
                <h2 className="display-section">
                  Where I&apos;ve <em>worked.</em>
                </h2>
              </div>
              <p className="text-sm text-[var(--ink-muted)] font-mono max-w-xs hidden md:block">
                Three years across travel, marketplace and real-estate products.
              </p>
            </motion.div>
            <SteperVertical />
          </div>
        </section>

        {/* ============ SKILLS ============ */}
        <section id="skills" aria-label="Skills" className="relative">
          <div className="section-container !pt-0">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="section-heading flex items-end justify-between flex-wrap gap-4"
            >
              <div>
                <p className="eyebrow mb-3">02 — Toolkit</p>
                <h2 className="display-section">
                  Tools of the <em>craft.</em>
                </h2>
              </div>
              <p className="text-sm text-[var(--ink-muted)] font-mono max-w-xs hidden md:block">
                A stack refined across 3+ years and dozens of shipped features.
              </p>
            </motion.div>
            <SkillSection />
          </div>
        </section>

        {/* ============ PROJECTS ============ */}
        <section id="projects" aria-label="Selected projects" className="relative">
          <div className="section-container !pt-0">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="section-heading flex items-end justify-between flex-wrap gap-4"
            >
              <div>
                <p className="eyebrow mb-3">03 — Selected Work</p>
                <h2 className="display-section">
                  Recent <em>projects.</em>
                </h2>
              </div>
              <p className="text-sm text-[var(--ink-muted)] font-mono max-w-xs hidden md:block">
                Client and personal builds. Click through to source.
              </p>
            </motion.div>
            <CardSection />
          </div>
        </section>

        {/* ============ CONTACT ============ */}
        <section id="contact" aria-label="Contact" className="relative">
          <div className="section-container !pt-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="contact-panel"
            >
              <div className="relative z-10 max-w-2xl mx-auto">
                <p className="eyebrow mb-4">04 — Contact</p>
                <h2 className="display-section mb-6">
                  Let&apos;s build something
                  <br />
                  <em>remarkable.</em>
                </h2>
                <p className="text-[var(--ink-muted)] mb-10 leading-relaxed max-w-lg mx-auto">
                  Currently open to full-time roles, contract work, or
                  just a friendly hello. Replies within 24 hours.
                </p>

                <a
                  href="mailto:itsnazirali1010@gmail.com"
                  className="contact-email mb-10"
                  aria-label="Email Nazir Ali Siddiqui"
                >
                  itsnazirali1010@gmail.com
                </a>

                <div className="flex flex-wrap gap-3 justify-center pt-10 mt-6 border-t border-[var(--line)]">
                  <a
                    href="mailto:itsnazirali1010@gmail.com"
                    className="btn-primary"
                  >
                    Say hello <span className="arr">→</span>
                  </a>
                  <a href="tel:+917007297120" className="btn-ghost">
                    +91 70072 97120
                  </a>
                  <a
                    href="https://wa.me/917007297120"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ghost"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
