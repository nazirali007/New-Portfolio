"use client";

import React from "react";
import PageSkeleton from "@/components/ui/SkeletonLoader";

const EXIT_DURATION = 260;
const MIN_VISIBLE_TIME = 380;

export default function InitialPageLoader({
  children,
}: {
  children: React.ReactNode;
}) {
  const [visible, setVisible] = React.useState(true);
  const [leaving, setLeaving] = React.useState(false);

  React.useEffect(() => {
    let cancelled = false;
    let exitTimer: number | undefined;

    document.documentElement.classList.add("is-initial-loading");

    const pageReady = new Promise<void>((resolve) => {
      if (document.readyState === "complete") {
        resolve();
        return;
      }

      window.addEventListener("load", () => resolve(), { once: true });
    });

    const fontsReady =
      "fonts" in document
        ? document.fonts.ready.then(() => undefined).catch(() => undefined)
        : Promise.resolve();

    const minimumTime = new Promise<void>((resolve) => {
      window.setTimeout(resolve, MIN_VISIBLE_TIME);
    });

    Promise.all([pageReady, fontsReady, minimumTime]).then(() => {
      if (cancelled) return;

      window.requestAnimationFrame(() => {
        if (cancelled) return;

        document.documentElement.classList.remove("is-initial-loading");
        setLeaving(true);

        exitTimer = window.setTimeout(() => {
          if (!cancelled) setVisible(false);
        }, EXIT_DURATION);
      });
    });

    return () => {
      cancelled = true;
      if (exitTimer) window.clearTimeout(exitTimer);
      document.documentElement.classList.remove("is-initial-loading");
    };
  }, []);

  return (
    <>
      {children}
      {visible && (
        <div
          className={`initial-page-loader${leaving ? " is-leaving" : ""}`}
          aria-hidden={leaving}
        >
          <PageSkeleton />
        </div>
      )}
    </>
  );
}
