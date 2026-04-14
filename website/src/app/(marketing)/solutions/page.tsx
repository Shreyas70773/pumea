import type { Metadata } from "next"
import Link from "next/link"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import { BreadcrumbSchema } from "@/components/seo/schema/breadcrumb"
import { SectionHeading } from "@/components/shared/section-heading"
import { Card, CardContent } from "@/components/ui/card"
import { IntentCTA } from "@/components/conversion/intent-cta"
import { SOLUTIONS } from "@/lib/content-map"

export const metadata: Metadata = {
  title: "Industrial Solutions | Pacific Unity UAE",
  description: "Outcome-driven industrial solutions for feed processing, water quality compliance, and packaging automation.",
  alternates: { canonical: "https://pacificunity.ae/solutions/" },
}

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "Solutions", href: "/solutions/" },
]

export default function SolutionsPage() {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <Breadcrumbs items={breadcrumbs} />
      </div>

      <section className="px-4 pb-12 pt-8 md:px-6 md:pb-16 md:pt-12">
        <div className="mx-auto max-w-7xl space-y-10">
          <SectionHeading
            title="Solutions by Business Outcome"
            subtitle="Bridge individual equipment decisions to full operational outcomes and project targets."
          />

          <div className="grid gap-6 md:grid-cols-2">
            {SOLUTIONS.map((solution) => (
              <Link key={solution.slug} href={`/solutions/${solution.slug}/`} className="group">
                <Card className="h-full transition-shadow hover:shadow-lg">
                  <CardContent className="p-6">
                    <h2 className="text-lg font-semibold group-hover:text-primary">{solution.title}</h2>
                    <p className="mt-2 text-sm text-muted-foreground">{solution.summary}</p>
                    <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                      {solution.outcomes.slice(0, 2).map((outcome) => (
                        <li key={outcome}>{outcome}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          <IntentCTA intent="mofu" sourceRoute="/solutions/" />
        </div>
      </section>
    </>
  )
}
