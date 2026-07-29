"use client";

import React, { useRef } from "react";
import GridCanvas from "@/components/ui/GridCanvas";
import { SkeletonBlock } from "@/components/ui/SkeletonLoader";
import { useHeroReveal } from "@/utils/hooks/useHeroReveal";
import { useImageReady } from "@/utils/hooks/useImageReady";

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { ready: profileReady, ref: profileImageRef, markReady } = useImageReady<HTMLImageElement>();

  useHeroReveal(heroRef);

  return (
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
                  onLoad={markReady}
                  onError={markReady}
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
  );
}
