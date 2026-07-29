"use client";

import React from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TopNavbar from "./TopNavbar";
import SteperVertical from "./SteperVertical";
import SkillSection from "./SkillSection";
import CardSection from "./CardSection";
import Footer from "./Footer";
import GridCanvas from "./GridCanvas";
import { SkeletonBlock } from "./SkeletonLoader";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const marqueeWords = [
  "REACT",
  "NEXT.JS",
  "TYPESCRIPT",
  "TAILWIND",
  "REDUX",
  "SHADCN/UI",
  "FRAMER MOTION",
  "PERFORMANCE",
  "ACCESSIBILITY",
  "DESIGN SYSTEMS",
];

const stats = [
  { value: 3, suffix: "+", label: "Years shipping" },
  { value: 20, suffix: "+", label: "Projects delivered" },
  { value: null, display: "A11Y", accent: "11", label: "First-class" },
  { value: 100, suffix: "", label: "Lighthouse target" },
];

export default function Home() {
  const [profileReady, setProfileReady] = React.useState(false);
  const profileImageRef = React.useRef<HTMLImageElement>(null);
  const heroRef = React.useRef<HTMLDivElement>(null);
  const statRefs = React.useRef<Array<HTMLSpanElement | null>>([]);

  React.useEffect(() => {
    const image = profileImageRef.current;
    if (image?.complete && image.naturalWidth > 0) {
      setProfileReady(true);
    }
  }, []);

  // Hero terminal reveal — line-by-line clip-path wipe
  React.useEffect(() => {
    const ctx = gsap.context(() => {
      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      if (reduceMotion) {
        gsap.set("[data-hero-item]", { opacity: 1, y: 0, clipPath: "inset(0 0 0% 0)" });
        return;
      }

      const tl = gsap.timeline({ delay: 0.15 });
      tl.fromTo(
        "[data-hero-line]",
        { clipPath: "inset(0 0 100% 0)", y: 24 },
        {
          clipPath: "inset(0 0 0% 0)",
          y: 0,
          duration: 0.7,
          ease: "power4.out",
          stagger: 0.09,
        }
      ).fromTo(
        "[data-hero-fade]",
        { opacity: 0, y: 14 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power2.out", stagger: 0.08 },
        "-=0.25"
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  // Scroll-triggered section reveals + stat count-up
  React.useEffect(() => {
    const ctx = gsap.context(() => {
      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
        if (reduceMotion) {
          gsap.set(el, { opacity: 1, y: 0 });
          return;
        }
        gsap.fromTo(
          el,
          { opacity: 0, y: 28 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      if (!reduceMotion) {
        stats.forEach((s, i) => {
          if (s.value == null) return;
          const el = statRefs.current[i];
          if (!el) return;
          const counter = { n: 0 };
          ScrollTrigger.create({
            trigger: el,
            start: "top 90%",
            once: true,
            onEnter: () => {
              gsap.to(counter, {
                n: s.value,
                duration: 1.1,
                ease: "power2.out",
                onUpdate: () => {
                  el.textContent = Math.round(counter.n).toString();
                },
              });
            },
          });
        });

        // marquee speeds up briefly with scroll velocity
        const track = document.querySelector<HTMLElement>(".marquee-track");
        if (track) {
          ScrollTrigger.create({
            trigger: track,
            start: "top bottom",
            end: "bottom top",
            onUpdate: (self) => {
              const speed = 14 - Math.min(Math.abs(self.getVelocity()) / 900, 10);
              track.style.animationDuration = `${Math.max(speed, 3)}s`;
            },
          });
        }
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <TopNavbar />

      <main id="main" className="relative">
        {/* ============ HERO ============ */}
        <section
          ref={heroRef}
          id="home"
          aria-label="Introduction"
          className="relative min-h-[92vh] flex items-center pt-28 pb-16 overflow-hidden"
        >
          <GridCanvas />
          <div className="section-container !py-0 w-full relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-14 lg:gap-20 items-center">
              {/* Left — text */}
              <div className="order-2 lg:order-1">
                <div data-hero-fade className="available-pill mb-8">
                  <span className="dot" aria-hidden="true" />
                  <span>Available for new work — 2026</span>
                </div>

                <p data-hero-fade className="eyebrow mb-5">
                  Nazir Ali Siddiqui · Gurgaon, IN
                </p>

                <h1 className="display-hero mb-8">
                  <span className="block overflow-hidden">
                    <span data-hero-line className="block">Frontend</span>
                  </span>
                  <span className="block overflow-hidden">
                    <span data-hero-line className="block">developer,</span>
                  </span>
                  <span className="block overflow-hidden">
                    <span data-hero-line className="block">
                      crafting <em>calm</em>
                    </span>
                  </span>
                  <span className="block overflow-hidden">
                    <span data-hero-line className="block">interfaces.</span>
                  </span>
                </h1>

                <p data-hero-fade className="lead max-w-xl mb-10">
                  I&apos;ve spent three years shipping production frontends in
                  React, Next.js and TypeScript — across travel, marketplace
                  and real-estate products. I care about performance,
                  accessibility, and the quiet details.
                </p>

                <div data-hero-fade className="flex flex-wrap items-center gap-3">
                  <a href="#projects" className="btn-primary">
                    View selected work <span className="arr">→</span>
                  </a>
                  <a href="#contact" className="btn-ghost">
                    Get in touch
                  </a>
                </div>
              </div>

              {/* Right — profile card */}
              <div
                data-hero-fade
                className="order-1 lg:order-2 justify-self-center lg:justify-self-end"
              >
                <figure className="profile-card w-56 sm:w-64 lg:w-[300px]">
                  <div className="term-bar" aria-hidden="true">
                    <span className="term-dot" />
                    <span className="term-dot" />
                    <span className="term-dot" />
                    <span className="term-label">profile.jpg</span>
                  </div>
                  <div className="photo">
                    {!profileReady && (
                      <SkeletonBlock className="profile-image-skeleton" />
                    )}
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      ref={profileImageRef}
                      src="/images/ProfilePicture.png"
                      alt="Portrait of Nazir Ali Siddiqui, Frontend Developer"
                      width={600}
                      height={750}
                      loading="eager"
                      decoding="async"
                      onLoad={() => setProfileReady(true)}
                      onError={() => setProfileReady(true)}
                      className={profileReady ? "is-loaded" : ""}
                    />
                  </div>
                  <figcaption className="profile-meta">
                    <span>NAS — 001</span>
                    <span>EST. 2022</span>
                  </figcaption>
                </figure>
              </div>
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
                  {i < marqueeWords.length - 1 && <span className="sep">//</span>}
                </React.Fragment>
              ))}
              <span className="sep">//</span>
            </div>
            <div className="marquee-item" aria-hidden="true">
              {marqueeWords.map((w, i) => (
                <React.Fragment key={`b-${w}`}>
                  <span>{w}</span>
                  {i < marqueeWords.length - 1 && <span className="sep">//</span>}
                </React.Fragment>
              ))}
              <span className="sep">//</span>
            </div>
          </div>
        </section>

        {/* ============ ABOUT ============ */}
        <section id="about" aria-label="About" className="relative">
          <div className="section-container">
            <div data-reveal className="section-heading">
              <p className="eyebrow mb-3">00 — About</p>
              <h2 className="display-section max-w-3xl">
                I build interfaces that feel <em>quiet</em>, read fast, and
                hold up under real user load.
              </h2>
            </div>

            <div data-reveal className="stat-grid">
              {stats.map((s, i) => (
                <div className="stat-cell" key={s.label}>
                  <p className="stat-num">
                    {s.value != null ? (
                      <>
                        <span
                          ref={(el) => {
                            statRefs.current[i] = el;
                          }}
                        >
                          0
                        </span>
                        <em>{s.suffix}</em>
                      </>
                    ) : (
                      <>
                        A<em>{s.accent}</em>Y
                      </>
                    )}
                  </p>
                  <p className="stat-label">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ EXPERIENCE ============ */}
        <section id="experience" aria-label="Experience" className="relative">
          <div className="section-container !pt-0">
            <div
              data-reveal
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
            </div>
            <SteperVertical />
          </div>
        </section>

        {/* ============ SKILLS ============ */}
        <section id="skills" aria-label="Skills" className="relative">
          <div className="section-container !pt-0">
            <div
              data-reveal
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
            </div>
            <SkillSection />
          </div>
        </section>

        {/* ============ PROJECTS ============ */}
        <section id="projects" aria-label="Selected projects" className="relative">
          <div className="section-container !pt-0">
            <div
              data-reveal
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
            </div>
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
