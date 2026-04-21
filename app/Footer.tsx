"use client";

import React from "react";
import { motion } from "framer-motion";

const socialLinks = [
  { label: "GitHub", href: "https://github.com/nazirali007" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/nazir-ali-siddiqui-385a3a174",
  },
  { label: "Email", href: "mailto:itsnazirali1010@gmail.com" },
  { label: "WhatsApp", href: "https://wa.me/917007297120" },
];

const Footer = () => {
  return (
    <footer className="border-t border-[var(--line)] bg-[var(--paper-raised)]">
      <div className="max-w-[1180px] mx-auto px-5 sm:px-7 py-12">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row gap-8 sm:gap-0 justify-between items-start sm:items-end"
        >
          <div>
            <p className="font-display text-2xl sm:text-3xl text-[var(--ink)] mb-2 flex items-center gap-2">
              <span
                className="w-2 h-2 rounded-full bg-[var(--accent)]"
                aria-hidden="true"
              />
              Nazir<span className="text-[var(--ink-subtle)]">.dev</span>
            </p>
            <p className="text-xs font-mono text-[var(--ink-subtle)]">
              © 2026 Nazir Ali Siddiqui — Designed &amp; built in Next.js.
            </p>
          </div>

          <nav aria-label="Social links" className="flex flex-wrap gap-x-6 gap-y-2">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono text-[var(--ink-muted)] hover:text-[var(--ink)] transition-colors"
              >
                {link.label} →
              </a>
            ))}
          </nav>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
