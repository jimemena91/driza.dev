import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: "https://driza.dev", changeFrequency: "monthly", priority: 1 }]
}
