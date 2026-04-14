import type { MetadataRoute } from "next"

export const dynamic = "force-static"

const staticRoutes = [
  "",
  "/solutions",
  "/systems",
  "/case-studies",
  "/resources",
  "/book-consultation",
  "/request-site-audit",
  "/tools/budget-calculator",
  "/tools/product-selector",
  "/tools/system-recommender",
] as const

export default function sitemap(): MetadataRoute.Sitemap {
  return staticRoutes.map((path) => ({
    url: `https://pacificunity.ae${path}/`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: path === "" ? 1 : 0.7,
  }))
}
