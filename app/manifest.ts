import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Nazir Ali Siddiqui — Frontend Developer",
    short_name: "Nazir.dev",
    description:
      "Portfolio of Nazir Ali Siddiqui — Frontend Developer specializing in React, Next.js, and TypeScript.",
    start_url: "/",
    display: "standalone",
    background_color: "#f4efe6",
    theme_color: "#f4efe6",
    icons: [
      {
        src: "/fabicon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
    categories: ["portfolio", "developer", "business"],
  };
}
