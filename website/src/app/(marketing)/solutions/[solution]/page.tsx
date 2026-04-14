import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import { BreadcrumbSchema } from "@/components/seo/schema/breadcrumb"
import { SectionHeading } from "@/components/shared/section-heading"
import { IntentCTA } from "@/components/conversion/intent-cta"
import { InternalLinkGrid } from "@/components/conversion/internal-link-grid"
import { CaseStudyHighlights } from "@/components/conversion/case-study-highlights"
import { getSolutionBySlug, SOLUTIONS } from "@/lib/content-map"

type PageProps = { params: Promise<{ solution: string }> }

export async function generateStaticParams() {
  return SOLUTIONS.map((item) => ({ solution: item.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { solution: slug } = await params
  const solution = getSolutionBySlug(slug)

  if (!solution) return { title: "Solution Not Found | Pacific Unity UAE" }

  return {
    title: `${solution.title} | Pacific Unity UAE`,
    description: solution.summary,
    alternates: { canonical: `https://pacificunity.ae/solutions/${solution.slug}/` },
  }
}

export default async function SolutionDetailPage({ params }: PageProps) {
  const { solution: slug } = await params
  const solution = getSolutionBySlug(slug)
  if (!solution) notFound()

  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Solutions", href: "/solutions/" },
    { name: solution.title, href: `/solutions/${solution.slug}/` },
  ]

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <Breadcrumbs items={breadcrumbs} />
      </div>

      <section className="px-4 pb-12 pt-8 md:px-6 md:pb-16 md:pt-12">
        <div className="mx-auto max-w-7xl space-y-8">
          <SectionHeading title={solution.title} subtitle={solution.summary} />

          <div className="rounded-xl border p-6 md:p-8">
            <h2 className="text-xl font-semibold">Target Outcomes</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-muted-foreground">
              {solution.outcomes.map((outcome) => (
                <li key={outcome}>{outcome}</li>
              ))}
            </ul>
          </div>

          <InternalLinkGrid
            title="Related Systems"
            links={solution.relatedSystems.map((systemSlug) => ({
              href: `/systems/${systemSlug}/`,
              label: systemSlug.split("-").map((word) => word[0].toUpperCase() + word.slice(1)).join(" "),
            }))}
          />

          <InternalLinkGrid
            title="Related Equipment"
            links={solution.relatedEquipment.map((item) => ({ ...item }))}
          />

          <InternalLinkGrid
            title="Relevant Industry Pages"
            links={solution.relatedIndustries.map((industrySlug) => ({
              href: `/industries/${industrySlug}/`,
              label: industrySlug.split("-").map((word) => word[0].toUpperCase() + word.slice(1)).join(" "),
            }))}
          />

          <CaseStudyHighlights />
          <IntentCTA intent="mofu" sourceRoute={`/solutions/${solution.slug}/`} />

          <div className="text-sm text-muted-foreground">
            Need procurement-ready numbers? Visit <Link href="/request-quote/purchase/" className="text-primary hover:underline">Request Quote</Link>.
          </div>
        </div>
      </section>
    </>
  )
}
