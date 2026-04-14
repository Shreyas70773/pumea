import type { Metadata } from "next"
import Link from "next/link"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import { BreadcrumbSchema } from "@/components/seo/schema/breadcrumb"
import { SectionHeading } from "@/components/shared/section-heading"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "About Pacific Unity MEA",
  description:
    "Learn about Pacific Unity MEA, our story, and our proven project track record across the Middle East and Africa.",
  alternates: {
    canonical: "https://pacificunity.ae/about/",
  },
}

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about/" },
]

const pages = [
  {
    title: "Our Story",
    href: "/about/our-story/",
    description: "How Pacific Unity evolved from Singapore roots to UAE operations.",
  },
  {
    title: "Our Track Record",
    href: "/about/our-track-record/",
    description: "Real projects delivered across 9 countries and multiple industries.",
  },
]

export default function AboutPage() {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />

      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <Breadcrumbs items={breadcrumbs} />
      </div>

      <section className="px-4 pb-12 pt-8 md:px-6 md:pb-16 md:pt-12">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            title="About Pacific Unity"
            subtitle="Transparent company background, real experience, and verifiable delivery history."
          />

          <div className="grid gap-6 md:grid-cols-2">
            {pages.map((page) => (
              <Link key={page.href} href={page.href} className="group">
                <Card className="h-full transition-shadow hover:shadow-lg">
                  <CardContent className="p-6">
                    <h2 className="text-lg font-semibold group-hover:text-primary">{page.title}</h2>
                    <p className="mt-2 text-sm text-muted-foreground">{page.description}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
