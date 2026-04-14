import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import { BreadcrumbSchema } from "@/components/seo/schema/breadcrumb"
import { SectionHeading } from "@/components/shared/section-heading"
import { IntentCTA } from "@/components/conversion/intent-cta"
import { CASE_STUDIES, getCaseStudyBySlug } from "@/lib/content-map"

type PageProps = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return CASE_STUDIES.map((item) => ({ slug: item.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const study = getCaseStudyBySlug(slug)
  if (!study) return { title: "Case Study Not Found | Pacific Unity UAE" }

  return {
    title: `${study.title} | Case Study`,
    description: study.challenge,
    alternates: { canonical: `https://pacificunity.ae/case-studies/${study.slug}/` },
  }
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params
  const study = getCaseStudyBySlug(slug)
  if (!study) notFound()

  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Case Studies", href: "/case-studies/" },
    { name: study.title, href: `/case-studies/${study.slug}/` },
  ]

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <Breadcrumbs items={breadcrumbs} />
      </div>

      <section className="px-4 pb-12 pt-8 md:px-6 md:pb-16 md:pt-12">
        <div className="mx-auto max-w-4xl space-y-8">
          <SectionHeading title={study.title} subtitle={`${study.industry} · ${study.location}`} />

          <div className="rounded-xl border p-6 md:p-8">
            <h2 className="text-lg font-semibold">Challenge</h2>
            <p className="mt-2 text-sm text-muted-foreground">{study.challenge}</p>
            <h2 className="mt-6 text-lg font-semibold">Implemented Solution</h2>
            <p className="mt-2 text-sm text-muted-foreground">{study.solution}</p>
            <h2 className="mt-6 text-lg font-semibold">Outcomes</h2>
            <ul className="mt-2 list-disc space-y-2 pl-5 text-sm text-muted-foreground">
              {study.outcomes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border bg-muted/20 p-6">
            <p className="text-sm">
              Explore related paths: <Link href={`/solutions/${study.relatedSolutionSlug}/`} className="text-primary hover:underline">Solution</Link> · {" "}
              <Link href={`/systems/${study.relatedSystemSlug}/`} className="text-primary hover:underline">System</Link>
            </p>
          </div>

          <IntentCTA intent="bofu" sourceRoute={`/case-studies/${study.slug}/`} />
        </div>
      </section>
    </>
  )
}
