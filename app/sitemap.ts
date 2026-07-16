import type { MetadataRoute } from "next";

const siteUrl = "https://victormundi.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date("2026-07-16T00:00:00+02:00"),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
