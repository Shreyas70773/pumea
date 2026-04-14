import type { Metadata } from "next"
import { SITE_URL, SITE_NAME } from "./constants"

interface PageMetaOptions {
  title: string
  description: string
  path: string
  keywords?: string[]
  ogImage?: string
}

export function generatePageMetadata({
  title,
  description,
  path,
  keywords,
  ogImage = "/images/og-default.jpg",
}: PageMetaOptions): Metadata {
  const url = `${SITE_URL}${path}`
  const fullTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`

  return {
    title: fullTitle,
    description,
    keywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE_NAME,
      locale: "en_AE",
      type: "website",
      images: [{ url: `${SITE_URL}${ogImage}`, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
  }
}
