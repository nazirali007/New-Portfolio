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

function SectionHeadingSkeleton() {
  return (
    <div className="section-heading">
      <SkeletonBlock className="mb-4 h-3 w-28 rounded-full" />
      <SkeletonBlock className="mb-3 h-10 w-full max-w-2xl rounded-md" />
      <SkeletonBlock className="h-10 w-4/5 max-w-xl rounded-md" />
    </div>
  );
}

export default function PageSkeleton() {
  return (
    <div className="page-skeleton" role="status" aria-label="Loading portfolio">
      <div className="skeleton-nav">
        <div className="flex items-center gap-2">
          <SkeletonBlock className="h-2 w-2 rounded-full" />
          <SkeletonBlock className="h-4 w-28 rounded-full" />
        </div>
        <div className="hidden items-center gap-5 md:flex">
          {Array.from({ length: 5 }).map((_, index) => (
            <SkeletonBlock key={index} className="h-3 w-16 rounded-full" />
          ))}
          <SkeletonBlock className="h-8 w-20 rounded-full" />
        </div>
      </div>

      <main className="section-container skeleton-main">
        <section className="grid grid-cols-1 items-center gap-14 pt-20 lg:grid-cols-[1fr_340px] lg:gap-20">
          <div>
            <SkeletonBlock className="mb-8 h-8 w-56 rounded-full" />
            <SkeletonBlock className="mb-5 h-3 w-44 rounded-full" />
            <div className="space-y-4">
              <SkeletonBlock className="h-16 w-full max-w-2xl rounded-lg" />
              <SkeletonBlock className="h-16 w-10/12 max-w-xl rounded-lg" />
              <SkeletonBlock className="h-16 w-8/12 max-w-lg rounded-lg" />
            </div>
            <div className="mt-10 space-y-3">
              <SkeletonBlock className="h-4 w-full max-w-xl rounded-full" />
              <SkeletonBlock className="h-4 w-10/12 max-w-lg rounded-full" />
              <SkeletonBlock className="h-4 w-7/12 max-w-md rounded-full" />
            </div>
            <div className="mt-10 flex flex-wrap gap-3">
              <SkeletonBlock className="h-11 w-44 rounded-full" />
              <SkeletonBlock className="h-11 w-32 rounded-full" />
            </div>
          </div>

          <div className="justify-self-center lg:justify-self-end">
            <div className="skeleton-profile-card">
              <SkeletonBlock className="h-full w-full rounded-[10px]" />
            </div>
          </div>
        </section>

        <section className="pt-24">
          <SectionHeadingSkeleton />
          <div className="stat-grid">
            {Array.from({ length: 4 }).map((_, index) => (
              <div className="stat-cell" key={index}>
                <SkeletonBlock className="mb-4 h-12 w-20 rounded-md" />
                <SkeletonBlock className="h-3 w-28 rounded-full" />
              </div>
            ))}
          </div>
        </section>

        <section className="pt-24">
          <SectionHeadingSkeleton />
          <div className="skeleton-card-stack">
            {Array.from({ length: 3 }).map((_, index) => (
              <div className="skeleton-content-card" key={index}>
                <SkeletonBlock className="mb-4 h-3 w-24 rounded-full" />
                <SkeletonBlock className="mb-3 h-7 w-64 max-w-full rounded-md" />
                <SkeletonBlock className="mb-6 h-4 w-44 rounded-full" />
                <div className="space-y-2">
                  <SkeletonBlock className="h-3 w-full rounded-full" />
                  <SkeletonBlock className="h-3 w-11/12 rounded-full" />
                  <SkeletonBlock className="h-3 w-8/12 rounded-full" />
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
