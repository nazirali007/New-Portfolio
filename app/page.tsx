"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
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
    setCount(window.innerWidth >= 640 ? 30 : 12);
  }, []);

  const particles = Array.from({ length: count }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    duration: 8 + Math.random() * 12,
    delay: Math.random() * 10,
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

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" as const },
  }),
};

export default function Home() {
  const typedRole = useTypingEffect(roles);

  return (
    <div className="relative px-4 sm:px-0">
      <FloatingParticles />
      <TopNavbar />

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Background gradient orbs */}
        <div className="absolute top-1/4 -left-16 sm:-left-32 w-48 h-48 sm:w-96 sm:h-96 bg-[#64d2de]/10 rounded-full blur-[80px] sm:blur-[120px]" />
        <div className="absolute bottom-1/4 -right-16 sm:-right-32 w-48 h-48 sm:w-96 sm:h-96 bg-[#a78bfa]/10 rounded-full blur-[80px] sm:blur-[120px]" />

        <div className="section-container relative z-10 w-full mx-auto">
          <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-6 sm:gap-12 lg:gap-16">
            {/* Left content */}
            <div className="flex-1 w-full text-center lg:text-left">
              <motion.p
                custom={0}
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                className="text-[#64d2de] font-mono text-sm md:text-base mb-3 tracking-wider"
              >
                Hi, I&apos;m
              </motion.p>

              <motion.h1
                custom={1}
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                className="text-2xl sm:text-5xl lg:text-6xl font-bold text-white mb-2 leading-tight"
              >
                Nazir Ali Siddiqui
              </motion.h1>

              <motion.div
                custom={2}
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                className="text-lg sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 min-h-[1.75rem] sm:min-h-[2.5rem]"
              >
                <span className="gradient-text typing-cursor">{typedRole}</span>
              </motion.div>

              <motion.p
                custom={3}
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                className="text-[#a0a0b0] max-w-lg text-xs sm:text-base lg:text-lg leading-relaxed mx-auto lg:mx-0 mb-5 sm:mb-8 px-1 sm:px-0"
              >
                Results-driven Frontend Developer with 3+ years of experience
                crafting modern, scalable web applications using React.js,
                Next.js, and TypeScript. Passionate about building pixel-perfect
                UIs and delivering exceptional user experiences.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                custom={4}
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                className="flex flex-col sm:flex-row items-center sm:items-stretch gap-3 sm:gap-4 justify-center lg:justify-start"
              >
                <a
                  href="#projects"
                  className="px-5 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold text-xs sm:text-sm text-center bg-gradient-to-r from-[#64d2de] to-[#a78bfa] text-[#0a0a0f] hover:shadow-lg hover:shadow-[#64d2de]/25 transition-all hover:-translate-y-0.5 active:scale-95"
                >
                  View My Work
                </a>
                <a
                  href="#contact"
                  className="px-5 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold text-xs sm:text-sm text-center border border-[#64d2de]/30 text-[#64d2de] hover:bg-[#64d2de]/10 transition-all hover:-translate-y-0.5 active:scale-95"
                >
                  Get In Touch
                </a>
              </motion.div>

              {/* Social links */}
              <motion.div
                custom={5}
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                className="flex gap-5 mt-8 justify-center lg:justify-start"
              >
                <a
                  href="https://github.com/nazirali007"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#a0a0b0] hover:text-[#64d2de] transition-colors hover:-translate-y-1 transform duration-200"
                  aria-label="GitHub"
                >
                  <svg
                    className="w-6 h-6"
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
                  className="text-[#a0a0b0] hover:text-[#64d2de] transition-colors hover:-translate-y-1 transform duration-200"
                  aria-label="LinkedIn"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href="mailto:itsnazirali1010@gmail.com"
                  className="text-[#a0a0b0] hover:text-[#64d2de] transition-colors hover:-translate-y-1 transform duration-200"
                  aria-label="Email"
                >
                  <svg
                    className="w-6 h-6"
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

            {/* Right - Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex-shrink-0"
            >
              <div className="profile-glow">
                <img
                  src="images/ProfilePicture.png"
                  alt="Nazir Ali Siddiqui"
                  className="w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 hidden sm:block"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-[#a0a0b0]"
          >
            <span className="text-xs tracking-widest uppercase">Scroll</span>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </motion.div>
        </motion.div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="relative">
        <div className="section-container mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-heading"
          >
            Experience
          </motion.h2>
          <SteperVertical />
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[600px] sm:h-[600px] bg-[#a78bfa]/5 rounded-full blur-[100px] sm:blur-[150px]" />
        <div className="section-container relative z-10 mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-heading"
          >
            Skills & Technologies
          </motion.h2>
          <SkillSection />
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative">
        <div className="section-container mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-heading"
          >
            Featured Projects
          </motion.h2>
          <CardSection />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative">
        <div className="section-container text-center mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[#64d2de] font-mono text-sm mb-3">
              What&apos;s Next?
            </p>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-5">
              Get In Touch
            </h2>
            <p className="text-[#a0a0b0] max-w-lg mx-auto mb-6 sm:mb-8 leading-relaxed text-xs sm:text-base px-2 sm:px-0">
              I&apos;m currently open to new opportunities. Whether you have a
              question or just want to say hi, feel free to reach out and
              I&apos;ll get back to you!
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-2 sm:px-0">
              <a
                href="mailto:itsnazirali1010@gmail.com"
                className="w-full sm:w-auto px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold text-xs sm:text-sm text-center bg-gradient-to-r from-[#64d2de] to-[#a78bfa] text-[#0a0a0f] hover:shadow-lg hover:shadow-[#64d2de]/25 transition-all hover:-translate-y-0.5 active:scale-95"
              >
                Say Hello
              </a>
              <a
                href="tel:+917007297120"
                className="w-full sm:w-auto px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold text-xs sm:text-sm text-center border border-[#64d2de]/30 text-[#64d2de] hover:bg-[#64d2de]/10 transition-all hover:-translate-y-0.5 active:scale-95"
              >
                +91 7007297120
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
