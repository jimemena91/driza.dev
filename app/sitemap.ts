import type { MetadataRoute } from "next"
import { PRODUCTS, SITE } from "@/lib/site"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE.url, changeFrequency: "monthly", priority: 1 },
    ...PRODUCTS.map((p) => ({ url: `${SITE.url}/productos/${p.id}`, changeFrequency: "monthly" as const, priority: 0.8 })),
  ]
}
