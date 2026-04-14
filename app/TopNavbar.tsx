"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "#home", num: "01" },
  { label: "Experience", href: "#experience", num: "02" },
  { label: "Skills", href: "#skills", num: "03" },
  { label: "Projects", href: "#projects", num: "04" },
  { label: "Contact", href: "#contact", num: "05" },
];

const TopNavbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || mobileOpen
          ? "bg-[#07070c]/80 backdrop-blur-xl border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo */}
          <a
            href="#home"
            className="shrink-0 flex items-center gap-2 group"
            onClick={() => setMobileOpen(false)}
          >
            <span className="w-8 h-8 rounded-full border border-[#64d2de]/40 flex items-center justify-center font-display italic text-[#64d2de] text-sm group-hover:bg-[#64d2de]/10 transition-colors">
              N
            </span>
            <span className="font-display italic text-lg text-white hidden sm:inline">
              Nazir <span className="text-[#6b6b7b]">Siddiqui</span>
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="nav-link flex items-baseline gap-1.5 font-medium"
              >
                <span className="text-[10px] font-mono text-[#64d2de]/60">
                  {link.num}
                </span>
                {link.label}
              </a>
            ))}
            <a
              href="/Nazir_Resume.pdf"
              download="Nazir_Ali_Siddiqui_Resume.pdf"
              className="btn-primary !py-2.5 !px-5 !text-xs"
            >
              <span>Resume</span>
              <span>↓</span>
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg active:bg-white/10"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
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
                  d="M4 6h16M4 12h16M4 18h12"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu - inside nav for proper stacking */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 top-14 bg-black/50 md:hidden"
              onClick={() => setMobileOpen(false)}
            />

            {/* Menu */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 right-0 bg-[#0a0a0f] border-b border-white/10 md:hidden overflow-hidden"
            >
              <div className="flex flex-col px-5 py-5">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="flex items-baseline gap-3 text-[#c0c0d0] hover:text-[#64d2de] active:text-[#64d2de] font-display italic text-2xl py-3 border-b border-white/5 last:border-b-0 transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    <span className="text-[10px] font-mono not-italic text-[#64d2de]/60">
                      {link.num}
                    </span>
                    {link.label}
                  </a>
                ))}
                <a
                  href="/Nazir_Resume.pdf"
                  download="Nazir_Ali_Siddiqui_Resume.pdf"
                  className="mt-3 mx-3 py-3 rounded-full text-sm font-semibold text-center bg-gradient-to-r from-[#64d2de] to-[#a78bfa] text-[#0a0a0f] active:scale-95 transition-transform"
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
