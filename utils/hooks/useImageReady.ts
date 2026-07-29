"use client";

import { useEffect, useRef, useState } from "react";

/** Tracks whether an <img> has finished loading, covering the already-cached case. */
export function useImageReady<T extends HTMLImageElement>() {
  const [ready, setReady] = useState(false);
  const ref = useRef<T>(null);

  useEffect(() => {
    const image = ref.current;
    if (image?.complete && image.naturalWidth > 0) {
      setReady(true);
    }
  }, []);

  const markReady = () => setReady(true);

  return { ready, ref, markReady };
}
