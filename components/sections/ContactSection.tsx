"use client";

import React from "react";
import { motion } from "framer-motion";

export default function ContactSection() {
  return (
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
  );
}
