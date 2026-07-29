"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { label: "About", href: "#about", num: "00" },
  { label: "Experience", href: "#experience", num: "01" },
  { label: "Skills", href: "#skills", num: "02" },
  { label: "Projects", href: "#projects", num: "03" },
  { label: "Contact", href: "#contact", num: "04" },
];

const sectionIds = navLinks.map((l) => l.href.replace("#", ""));

const TopNavbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState<string>("home");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      aria-label="Primary"
      className={`nav-root ${scrolled || mobileOpen ? "scrolled" : ""}`}
    >
      <div className="max-w-[1180px] mx-auto px-5 sm:px-7">
        <div className="flex justify-between items-center h-16">
          <a
            href="#home"
            className="font-mono text-sm font-bold uppercase text-[var(--ink)] tracking-tight flex items-center gap-2"
            onClick={() => setMobileOpen(false)}
            aria-label="Home"
          >
            <span
              className="w-2 h-2 bg-[var(--accent)]"
              aria-hidden="true"
            />
            Nazir<span className="text-[var(--accent)]">.dev</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="nav-link flex items-baseline gap-1.5"
                data-active={active === link.href.replace("#", "")}
              >
                <span className="text-[10px] font-mono text-[var(--ink-subtle)]">
                  {link.num}
                </span>
                {link.label}
              </a>
            ))}
            <a
              href="/Nazir_Resume.pdf"
              download="Nazir_Ali_Siddiqui_Resume.pdf"
              className="font-mono text-xs uppercase tracking-wide text-[var(--ink)] border border-[var(--line-strong)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors px-3.5 py-1.5"
            >
              Resume ↓
            </a>
            <ThemeToggle />
          </div>

          <div className="md:hidden flex items-center gap-1">
            <ThemeToggle />
          <button
            className="flex items-center justify-center w-10 h-10 -mr-2"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            <svg
              className="w-5 h-5 text-[var(--ink)]"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              {mobileOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 8h16M4 16h16"
                />
              )}
            </svg>
          </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 top-16 bg-[var(--ink)]/20 md:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 right-0 bg-[var(--paper)] border-b border-[var(--line)] md:hidden"
            >
              <div className="flex flex-col px-5 py-4">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="flex items-baseline gap-3 text-[var(--ink-2)] hover:text-[var(--ink)] py-3 text-base border-b border-[var(--line)] last:border-b-0 transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    <span className="text-[10px] font-mono text-[var(--ink-subtle)]">
                      {link.num}
                    </span>
                    {link.label}
                  </a>
                ))}
                <a
                  href="/Nazir_Resume.pdf"
                  download="Nazir_Ali_Siddiqui_Resume.pdf"
                  className="mt-4 py-2.5 font-mono text-xs uppercase tracking-wide text-center bg-[var(--accent)] text-[var(--accent-ink)]"
                  onClick={() => setMobileOpen(false)}
                >
                  Download Resume
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default TopNavbar;
