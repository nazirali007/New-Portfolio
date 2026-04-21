import type { MetadataRoute } from "next";

const SITE_URL = "https://nazirali007.github.io";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const sections = ["about", "experience", "skills", "projects", "contact"];

  return [
    {
      url: `${SITE_URL}/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    ...sections.map((s) => ({
      url: `${SITE_URL}/#${s}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
