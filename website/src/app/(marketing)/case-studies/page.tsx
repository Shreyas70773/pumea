import type { Metadata } from "next"
import Link from "next/link"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import { BreadcrumbSchema } from "@/components/seo/schema/breadcrumb"
import { SectionHeading } from "@/components/shared/section-heading"
import { Card, CardContent } from "@/components/ui/card"
import { CASE_STUDIES } from "@/lib/content-map"

export const metadata: Metadata = {
  title: "Case Studies | Pacific Unity UAE",
  description: "Delivery outcomes and implementation highlights across feed, beverage, and utility systems.",
  alternates: { canonical: "https://pacificunity.ae/case-studies/" },
}

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "Case Studies", href: "/case-studies/" },
]

export default function CaseStudiesPage() {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <Breadcrumbs items={breadcrumbs} />
      </div>
      <section className="px-4 pb-12 pt-8 md:px-6 md:pb-16 md:pt-12">
        <div className="mx-auto max-w-7xl space-y-8">
          <SectionHeading title="Project Outcomes" subtitle="Proof points that reduce buying risk and accelerate technical decision-making." />
          <div className="grid gap-6 md:grid-cols-2">
            {CASE_STUDIES.map((study) => (
              <Link key={study.slug} href={`/case-studies/${study.slug}/`} className="group">
                <Card className="h-full transition-shadow hover:shadow-lg">
                  <CardContent className="p-6">
                    <p className="text-xs uppercase tracking-wide text-muted-foreground">{study.location}</p>
                    <h2 className="mt-1 text-lg font-semibold group-hover:text-primary">{study.title}</h2>
                    <p className="mt-2 text-sm text-muted-foreground">{study.challenge}</p>
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
