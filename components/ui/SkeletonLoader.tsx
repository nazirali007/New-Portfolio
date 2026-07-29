import React from "react";

type SkeletonBlockProps = {
  className?: string;
};

export function SkeletonBlock({ className = "" }: SkeletonBlockProps) {
  return <span className={`skeleton-block ${className}`} aria-hidden="true" />;
}

export function ChatMessageSkeleton() {
  return (
    <div className="chat-skeleton" aria-label="Assistant is writing">
      <SkeletonBlock className="h-3 w-24 rounded-full" />
      <SkeletonBlock className="h-3 w-full rounded-full" />
      <SkeletonBlock className="h-3 w-10/12 rounded-full" />
      <SkeletonBlock className="h-3 w-7/12 rounded-full" />
    </div>
  );
}

function NavSkeleton() {
  return (
    <div className="skeleton-nav">
      <div className="flex items-center gap-2">
        <SkeletonBlock className="h-2 w-2 rounded-full" />
        <SkeletonBlock className="h-4 w-28 rounded-full" />
      </div>
      <div className="hidden items-center gap-6 md:flex">
        {Array.from({ length: 5 }).map((_, i) => (
          <SkeletonBlock key={i} className="h-3 w-14 rounded-full" />
        ))}
        <SkeletonBlock className="h-8 w-24 rounded-full" />
        <SkeletonBlock className="h-8 w-8 rounded-full" />
      </div>
      <div className="flex items-center gap-2 md:hidden">
        <SkeletonBlock className="h-8 w-8 rounded-full" />
        <SkeletonBlock className="h-8 w-8 rounded-full" />
      </div>
    </div>
  );
}

function SectionHeadingSkeleton({ withMeta = false }: { withMeta?: boolean }) {
  return (
    <div className="section-heading flex items-end justify-between flex-wrap gap-4">
      <div className="flex-1 min-w-0">
        <SkeletonBlock className="mb-4 h-3 w-32 rounded-full" />
        <SkeletonBlock className="mb-3 h-9 w-full max-w-md rounded-md" />
        <SkeletonBlock className="h-9 w-2/3 max-w-sm rounded-md" />
      </div>
      {withMeta && (
        <div className="hidden md:block w-64 space-y-2">
          <SkeletonBlock className="h-3 w-full rounded-full" />
          <SkeletonBlock className="h-3 w-10/12 rounded-full" />
        </div>
      )}
    </div>
  );
}

function HeroSkeleton() {
  return (
    <section className="relative min-h-[92vh] flex items-center pt-28 pb-16">
      <div className="section-container !py-0 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-14 lg:gap-20 items-center">
          <div className="order-2 lg:order-1">
            <SkeletonBlock className="mb-8 h-8 w-60 rounded-full" />
            <SkeletonBlock className="mb-5 h-3 w-44 rounded-full" />
            <div className="space-y-4 mb-10">
              <SkeletonBlock className="h-14 w-full max-w-xl rounded-lg" />
              <SkeletonBlock className="h-14 w-10/12 max-w-lg rounded-lg" />
              <SkeletonBlock className="h-14 w-8/12 max-w-md rounded-lg" />
            </div>
            <div className="space-y-3 mb-10">
              <SkeletonBlock className="h-4 w-full max-w-xl rounded-full" />
              <SkeletonBlock className="h-4 w-10/12 max-w-lg rounded-full" />
              <SkeletonBlock className="h-4 w-7/12 max-w-md rounded-full" />
            </div>
            <div className="flex flex-wrap gap-3">
              <SkeletonBlock className="h-11 w-44 rounded-full" />
              <SkeletonBlock className="h-11 w-32 rounded-full" />
            </div>
          </div>
          <div className="order-1 lg:order-2 justify-self-center lg:justify-self-end">
            <div className="skeleton-profile-card">
              <SkeletonBlock className="h-full w-full rounded-[10px]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MarqueeSkeleton() {
  return (
    <div className="skeleton-marquee" aria-hidden="true">
      {Array.from({ length: 8 }).map((_, i) => (
        <SkeletonBlock key={i} className="h-3 w-20 rounded-full shrink-0" />
      ))}
    </div>
  );
}

function StatsSkeleton() {
  return (
    <section>
      <div className="section-container">
        <SectionHeadingSkeleton />
        <div className="stat-grid">
          {Array.from({ length: 4 }).map((_, i) => (
            <div className="stat-cell" key={i}>
              <SkeletonBlock className="mb-4 h-12 w-20 rounded-md" />
              <SkeletonBlock className="h-3 w-28 rounded-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TimelineSkeleton() {
  return (
    <section>
      <div className="section-container !pt-0">
        <SectionHeadingSkeleton withMeta />
        <ol className="skeleton-timeline">
          {Array.from({ length: 3 }).map((_, i) => (
            <li className="skeleton-timeline-item" key={i}>
              <span className="skeleton-timeline-dot" aria-hidden="true" />
              <div className="skeleton-timeline-card">
                <div className="flex items-start justify-between gap-4 flex-wrap mb-4">
                  <div className="space-y-2">
                    <SkeletonBlock className="h-3 w-24 rounded-full" />
                    <SkeletonBlock className="h-6 w-48 rounded-md" />
                    <SkeletonBlock className="h-4 w-36 rounded-full" />
                  </div>
                  <div className="text-right space-y-2">
                    <SkeletonBlock className="h-3 w-32 rounded-full ml-auto" />
                    <SkeletonBlock className="h-3 w-20 rounded-full ml-auto" />
                  </div>
                </div>
                <div className="space-y-2 mb-5">
                  <SkeletonBlock className="h-3 w-full rounded-full" />
                  <SkeletonBlock className="h-3 w-11/12 rounded-full" />
                  <SkeletonBlock className="h-3 w-9/12 rounded-full" />
                </div>
                <div className="flex flex-wrap gap-2 pt-4 border-t border-[var(--line)]">
                  {Array.from({ length: 4 }).map((_, j) => (
                    <SkeletonBlock key={j} className="h-5 w-16 rounded" />
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function BentoSkeleton() {
  const tiles: Array<"wide" | "narrow" | "half" | "full"> = [
    "wide",
    "narrow",
    "half",
    "half",
    "full",
  ];
  return (
    <section>
      <div className="section-container !pt-0">
        <SectionHeadingSkeleton withMeta />
        <ul className="bento-grid" aria-hidden="true">
          {tiles.map((size, i) => (
            <li key={i} className={`bento-tile ${size}`}>
              <div>
                <div className="flex items-baseline gap-3 mb-3">
                  <SkeletonBlock className="h-3 w-6 rounded-full" />
                  <SkeletonBlock className="h-6 w-40 rounded-md" />
                </div>
                <SkeletonBlock className="h-3 w-full max-w-xs rounded-full mb-2" />
                <SkeletonBlock className="h-3 w-9/12 max-w-[14rem] rounded-full" />
              </div>
              <div className="flex flex-wrap gap-2 mt-6">
                {Array.from({ length: 5 }).map((_, j) => (
                  <SkeletonBlock key={j} className="h-6 w-20 rounded-full" />
                ))}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function ProjectsSkeleton() {
  return (
    <section>
      <div className="section-container !pt-0">
        <SectionHeadingSkeleton withMeta />
        <div className="project-featured" aria-hidden="true">
          <div className="project-visual">
            <SkeletonBlock className="absolute top-4 left-4 h-5 w-20 rounded-full" />
          </div>
          <div className="project-featured-body">
            <div>
              <SkeletonBlock className="h-3 w-32 rounded-full mb-3" />
              <SkeletonBlock className="h-8 w-3/4 rounded-md mb-3" />
              <div className="space-y-2">
                <SkeletonBlock className="h-3 w-full rounded-full" />
                <SkeletonBlock className="h-3 w-10/12 rounded-full" />
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {Array.from({ length: 3 }).map((_, i) => (
                <SkeletonBlock key={i} className="h-6 w-20 rounded-full" />
              ))}
            </div>
          </div>
        </div>
        <ul className="project-grid" aria-hidden="true">
          {Array.from({ length: 6 }).map((_, i) => (
            <li key={i}>
              <div className="project-tile">
                <div className="flex items-start justify-between gap-3">
                  <SkeletonBlock className="h-3 w-24 rounded-full" />
                  <SkeletonBlock className="h-4 w-4 rounded" />
                </div>
                <div className="space-y-2">
                  <SkeletonBlock className="h-5 w-3/4 rounded-md" />
                  <SkeletonBlock className="h-3 w-full rounded-full" />
                  <SkeletonBlock className="h-3 w-8/12 rounded-full" />
                </div>
                <div className="flex flex-wrap gap-x-3 gap-y-1 mt-auto pt-2">
                  {Array.from({ length: 3 }).map((_, j) => (
                    <SkeletonBlock key={j} className="h-3 w-16 rounded-full" />
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function ContactSkeleton() {
  return (
    <section>
      <div className="section-container !pt-0">
        <div className="contact-panel" aria-hidden="true">
          <div className="relative z-10 max-w-2xl mx-auto text-center">
            <SkeletonBlock className="h-3 w-28 rounded-full mb-4 mx-auto" />
            <div className="space-y-3 mb-6">
              <SkeletonBlock className="h-9 w-3/4 max-w-md rounded-md mx-auto" />
              <SkeletonBlock className="h-9 w-2/3 max-w-sm rounded-md mx-auto" />
            </div>
            <SkeletonBlock className="h-3 w-10/12 max-w-md rounded-full mx-auto mb-2" />
            <SkeletonBlock className="h-3 w-8/12 max-w-sm rounded-full mx-auto mb-10" />
            <SkeletonBlock className="h-7 w-72 max-w-full rounded-md mx-auto mb-10" />
            <div className="flex flex-wrap gap-3 justify-center pt-10 mt-6 border-t border-[var(--line)]">
              <SkeletonBlock className="h-11 w-32 rounded-full" />
              <SkeletonBlock className="h-11 w-36 rounded-full" />
              <SkeletonBlock className="h-11 w-28 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function PageSkeleton() {
  return (
    <div className="page-skeleton" role="status" aria-label="Loading portfolio">
      <NavSkeleton />
      <main className="skeleton-main">
        <HeroSkeleton />
        <MarqueeSkeleton />
        <StatsSkeleton />
        <TimelineSkeleton />
        <BentoSkeleton />
        <ProjectsSkeleton />
        <ContactSkeleton />
      </main>
    </div>
  );
}
