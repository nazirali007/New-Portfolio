"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const TopNavbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled || mobileOpen
            ? "bg-[#0a0a0f]/95 backdrop-blur-md shadow-lg shadow-black/20 border-b border-white/5"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center h-14 sm:h-16">
            <motion.a
              href="#home"
              className="text-lg sm:text-xl font-bold gradient-text"
              whileHover={{ scale: 1.05 }}
              onClick={() => setMobileOpen(false)}
            >
              &lt;Nazir /&gt;
            </motion.a>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  className="nav-link text-sm font-medium"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i, duration: 0.4 }}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="/Nazir-Ali-NEW.pdf"
                download="Nazir_Ali_Siddiqui_Resume.pdf"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-5 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-[#64d2de] to-[#a78bfa] text-[#0a0a0f] hover:shadow-lg hover:shadow-[#64d2de]/20 transition-shadow"
              >
                Resume
              </motion.a>
            </div>

            {/* Mobile hamburger */}
            <button
              className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-lg active:bg-white/10 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              <div className="w-6 h-5 relative flex flex-col justify-between">
                <motion.span
                  animate={
                    mobileOpen
                      ? { rotate: 45, y: 8, width: "100%" }
                      : { rotate: 0, y: 0, width: "100%" }
                  }
                  transition={{ duration: 0.3 }}
                  className="w-full h-[2px] bg-white block origin-center"
                />
                <motion.span
                  animate={
                    mobileOpen
                      ? { opacity: 0, x: -10 }
                      : { opacity: 1, x: 0 }
                  }
                  transition={{ duration: 0.2 }}
                  className="w-full h-[2px] bg-white block"
                />
                <motion.span
                  animate={
                    mobileOpen
                      ? { rotate: -45, y: -8, width: "100%" }
                      : { rotate: 0, y: 0, width: "75%" }
                  }
                  transition={{ duration: 0.3 }}
                  className="h-[2px] bg-white block origin-center ml-auto"
                />
              </div>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Full-screen mobile menu overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />

            {/* Menu panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3, ease: "easeOut" }}
              className="absolute right-0 top-14 bottom-0 w-[75%] max-w-[300px] bg-[#0a0a0f]/98 backdrop-blur-lg border-l border-white/5 overflow-y-auto"
            >
              <div className="px-6 py-8 flex flex-col gap-2">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * i + 0.1 }}
                    className="text-base font-medium text-[#a0a0b0] hover:text-[#64d2de] py-3 px-3 rounded-lg hover:bg-white/5 active:bg-white/10 transition-all border-b border-white/5 last:border-0"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </motion.a>
                ))}

                <motion.a
                  href="/Nazir-Ali-NEW.pdf"
                  download="Nazir_Ali_Siddiqui_Resume.pdf"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="mt-4 px-5 py-3 rounded-full text-sm font-semibold text-center bg-gradient-to-r from-[#64d2de] to-[#a78bfa] text-[#0a0a0f] active:scale-95 transition-transform"
                >
                  Download Resume
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default TopNavbar;
