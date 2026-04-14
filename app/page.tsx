"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import TopNavbar from "./TopNavbar";
import SteperVertical from "./SteperVertical";
import SkillSection from "./SkillSection";
import CardSection from "./CardSection";
import Footer from "./Footer";

const roles = [
  "Frontend Developer",
  "React.js Expert",
  "Next.js Developer",
  "TypeScript Enthusiast",
];

const marqueeItems = [
  "React.js",
  "Next.js",
  "TypeScript",
  "Tailwind",
  "shadcn/UI",
  "Framer Motion",
  "Redux",
  "React Query",
  "Node.js",
  "REST APIs",
  "SSR / SSG",
  "Performance",
];

function useTypingEffect(texts: string[], typingSpeed = 80, pauseTime = 2000) {
  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[textIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setDisplayText(currentText.slice(0, displayText.length + 1));
          if (displayText.length === currentText.length) {
            setTimeout(() => setIsDeleting(true), pauseTime);
          }
        } else {
          setDisplayText(currentText.slice(0, displayText.length - 1));
          if (displayText.length === 0) {
            setIsDeleting(false);
            setTextIndex((prev) => (prev + 1) % texts.length);
          }
        }
      },
      isDeleting ? typingSpeed / 2 : typingSpeed,
    );
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, textIndex, texts, typingSpeed, pauseTime]);

  return displayText;
}

function FloatingParticles() {
  const [count, setCount] = useState(15);
  useEffect(() => {
    setCount(window.innerWidth >= 640 ? 24 : 10);
  }, []);
  const particles = Array.from({ length: count }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    duration: 10 + Math.random() * 14,
    delay: Math.random() * 12,
    size: 1 + Math.random() * 2,
  }));
  return (
    <div className="particles-bg">
      {particles.map((p) => (
        <div
          key={p.id}
          className="particle"
          style={{
            left: p.left,
            width: p.size,
            height: p.size,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  );
}

function TechMarquee() {
  const items = [...marqueeItems, ...marqueeItems];
  return (
    <div className="marquee py-6 sm:py-10 border-y border-white/5">
      <div className="marquee-track">
        {items.map((item, i) => (
          <span key={i} className="marquee-item">
            <span className="dot" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.7, ease: "easeOut" as const },
  }),
};

export default function Home() {
  const typedRole = useTypingEffect(roles);
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll();
  const progressX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = heroRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    heroRef.current?.style.setProperty("--mx", `${x}%`);
    heroRef.current?.style.setProperty("--my", `${y}%`);
  };

  return (
    <div className="relative">
      <motion.div className="scroll-progress" style={{ scaleX: progressX }} />
      <FloatingParticles />
      <TopNavbar />

      {/* ============ HERO ============ */}
      <section
        id="home"
        ref={heroRef}
        onMouseMove={handleMouseMove}
        className="relative min-h-screen flex items-center overflow-hidden"
      >
        <div className="aurora" />
        <div className="spotlight" />

        <div className="section-container relative z-10 w-full">
          {/* Top meta row */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center justify-between mb-10 sm:mb-16 text-xs font-mono text-[#6b6b7b]"
          >
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="tracking-widest uppercase">
                Available for work
              </span>
            </div>
            <div className="hidden sm:block tracking-widest uppercase">
              Gurgaon, India — 3+ yrs
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-10 lg:gap-20 items-center">
            {/* Left content */}
            <div className="order-2 lg:order-1">
              <motion.p
                custom={0}
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                className="eyebrow mb-5 sm:mb-7"
              >
                ◆ Portfolio — 2026
              </motion.p>

              <motion.h1
                custom={1}
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                className="display-hero mb-4 sm:mb-6"
              >
                Nazir
                <br />
                Ali <em>Siddiqui</em>
              </motion.h1>

              <motion.div
                custom={2}
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                className="flex items-center gap-3 mb-6 sm:mb-8"
              >
                <div className="h-px w-10 bg-[#64d2de]" />
                <span className="text-base sm:text-xl font-display italic text-[#a0a0b0] typing-cursor">
                  {typedRole}
                </span>
              </motion.div>

              <motion.p
                custom={3}
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                className="text-[#9a9aab] max-w-xl text-sm sm:text-base leading-relaxed mb-8 sm:mb-10"
              >
                A senior frontend developer crafting{" "}
                <span className="text-white font-display italic">
                  pixel-perfect
                </span>
                , performant interfaces with React, Next.js and TypeScript —
                obsessed with the quiet details that make a product feel
                premium.
              </motion.p>

              <motion.div
                custom={4}
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                className="flex flex-wrap items-center gap-3 sm:gap-4"
              >
                <a href="#projects" className="btn-primary">
                  <span>View selected work</span>
                  <span>↓</span>
                </a>
                <a href="#contact" className="btn-ghost">
                  <span>Get in touch</span>
                  <span>→</span>
                </a>
              </motion.div>

              <motion.div
                custom={5}
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                className="flex items-center gap-6 mt-10 sm:mt-14"
              >
                <span className="eyebrow !text-[#6b6b7b]">Follow</span>
                <div className="h-px flex-1 max-w-[40px] bg-white/10" />
                <a
                  href="https://github.com/nazirali007"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#9a9aab] hover:text-[#64d2de] transition-colors"
                  aria-label="GitHub"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/nazir-ali-siddiqui-385a3a174"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#9a9aab] hover:text-[#64d2de] transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href="mailto:itsnazirali1010@gmail.com"
                  className="text-[#9a9aab] hover:text-[#64d2de] transition-colors"
                  aria-label="Email"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </a>
              </motion.div>
            </div>

            {/* Right — profile frame */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: -3 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.9, delay: 0.4 }}
              className="order-1 lg:order-2 flex-shrink-0 self-center mx-auto lg:mx-0"
            >
              <div className="profile-frame">
                <img
                  src="images/ProfilePicture.png"
                  alt="Nazir Ali Siddiqui"
                  className="w-52 h-60 sm:w-64 sm:h-72 md:w-72 md:h-80 lg:w-[320px] lg:h-[400px] object-cover"
                />
              </div>
              <div className="mt-4 flex items-center justify-between text-[10px] sm:text-xs font-mono text-[#6b6b7b] px-1">
                <span>— NAS / 001</span>
                <span>©2026</span>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2 text-[#6b6b7b] z-10"
        >
          <span className="text-[10px] font-mono tracking-[0.3em] uppercase">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-px h-10 bg-gradient-to-b from-[#64d2de] to-transparent"
          />
        </motion.div>
      </section>

      {/* ============ MARQUEE ============ */}
      <TechMarquee />

      {/* ============ EXPERIENCE ============ */}
      <section id="experience" className="relative">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-heading flex items-end justify-between flex-wrap gap-4"
          >
            <div>
              <p className="eyebrow mb-3">◆ 01 / Career</p>
              <h2 className="display-section">
                Where I&apos;ve <em>built</em>
              </h2>
            </div>
            <p className="text-sm text-[#6b6b7b] font-mono max-w-xs hidden md:block">
              Three years shipping production frontends across travel,
              marketplace and real-estate products.
            </p>
          </motion.div>
          <SteperVertical />
        </div>
      </section>

      {/* ============ SKILLS ============ */}
      <section id="skills" className="relative">
        <div className="aurora opacity-60" />
        <div className="section-container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-heading flex items-end justify-between flex-wrap gap-4"
          >
            <div>
              <p className="eyebrow mb-3">◆ 02 / Toolkit</p>
              <h2 className="display-section">
                Tools of the <em>craft</em>
              </h2>
            </div>
            <p className="text-sm text-[#6b6b7b] font-mono max-w-xs hidden md:block">
              A curated stack refined across 3+ years and dozens of shipped
              features.
            </p>
          </motion.div>
          <SkillSection />
        </div>
      </section>

      {/* ============ PROJECTS ============ */}
      <section id="projects" className="relative">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-heading flex items-end justify-between flex-wrap gap-4"
          >
            <div>
              <p className="eyebrow mb-3">◆ 03 / Selected Work</p>
              <h2 className="display-section">
                Recent <em>projects</em>
              </h2>
            </div>
            <p className="text-sm text-[#6b6b7b] font-mono max-w-xs hidden md:block">
              A sample of client and personal builds. Click through to code.
            </p>
          </motion.div>
          <CardSection />
        </div>
      </section>

      {/* ============ CONTACT ============ */}
      <section id="contact" className="relative overflow-hidden">
        <div className="aurora opacity-70" />
        <div className="section-container relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="eyebrow mb-5">◆ 04 / Contact</p>
            <h2 className="display-section mb-6 sm:mb-8">
              Let&apos;s build something <em>remarkable</em>
            </h2>
            <p className="text-[#9a9aab] max-w-xl mx-auto mb-10 leading-relaxed text-sm sm:text-base">
              I&apos;m currently open to new opportunities. Whether it&apos;s a
              full-time role, contract work, or just a friendly hello — my inbox
              is always open.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://wa.me/917007297120?text=Hi%20Nazir%2C%20I%20came%20across%20your%20portfolio"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <span>Say hello</span>
                <span>→</span>
              </a>
              <a href="tel:+917007297120" className="btn-ghost">
                <span>+91 7007297120</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
