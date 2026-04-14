import type { Metadata } from "next"
import Link from "next/link"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import { BreadcrumbSchema } from "@/components/seo/schema/breadcrumb"
import { SectionHeading } from "@/components/shared/section-heading"
import { Card, CardContent } from "@/components/ui/card"
import { INDUSTRIES } from "@/lib/industries"

export const metadata: Metadata = {
  title: "Industries We Serve | Pacific Unity UAE",
  description:
    "Explore industry-specific solutions from Pacific Unity for poultry & livestock, aquaculture, beverage manufacturing, and food processing.",
  alternates: {
    canonical: "https://pacificunity.ae/industries/",
  },
}

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "Industries", href: "/industries/" },
]

export default function IndustriesPage() {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />

      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <Breadcrumbs items={breadcrumbs} />
      </div>

      <section className="px-4 pb-12 pt-8 md:px-6 md:pb-16 md:pt-12">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            title="Industries We Serve"
            subtitle="Specialized equipment pathways tailored to your industry requirements in the UAE."
          />

          <div className="grid gap-6 sm:grid-cols-2">
            {INDUSTRIES.map((industry) => (
              <Link key={industry.slug} href={`/industries/${industry.slug}/`} className="group">
                <Card className="h-full transition-shadow hover:shadow-lg">
                  <CardContent className="p-6">
                    <h2 className="text-lg font-semibold group-hover:text-primary">{industry.name}</h2>
                    <p className="mt-2 text-sm text-muted-foreground">{industry.shortDescription}</p>
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
