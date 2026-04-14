import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import { BreadcrumbSchema } from "@/components/seo/schema/breadcrumb"
import { SectionHeading } from "@/components/shared/section-heading"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { INDUSTRIES, getIndustryBySlug } from "@/lib/industries"
import { IntentCTA } from "@/components/conversion/intent-cta"
import { InternalLinkGrid } from "@/components/conversion/internal-link-grid"

type PageProps = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return INDUSTRIES.map((industry) => ({ slug: industry.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const industry = getIndustryBySlug(slug)

  if (!industry) {
    return {
      title: "Industry Not Found | Pacific Unity UAE",
    }
  }

  return {
    title: `${industry.name} Solutions UAE | Pacific Unity`,
    description: industry.shortDescription,
    alternates: {
      canonical: `https://pacificunity.ae/industries/${industry.slug}/`,
    },
  }
}

export default async function IndustryDetailPage({ params }: PageProps) {
  const { slug } = await params
  const industry = getIndustryBySlug(slug)

  if (!industry) {
    notFound()
  }

  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Industries", href: "/industries/" },
    { name: industry.name, href: `/industries/${industry.slug}/` },
  ]

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />

      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <Breadcrumbs items={breadcrumbs} />
      </div>

      <section className="px-4 pb-12 pt-8 md:px-6 md:pb-16 md:pt-12">
        <div className="mx-auto max-w-7xl space-y-10">
          <SectionHeading title={industry.name} subtitle={industry.intro} />

          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-lg font-semibold">Common Operational Needs</h2>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-muted-foreground">
                  {industry.keyNeeds.map((need) => (
                    <li key={need}>{need}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-lg font-semibold">Recommended Equipment Paths</h2>
                <div className="mt-4 space-y-3">
                  {industry.recommendedLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block rounded-md border p-3 text-sm transition-colors hover:bg-muted"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <InternalLinkGrid
            title="Recommended Systems & Solution Paths"
            subtitle="Bridge from industry context to full-system planning before model-level selection."
            links={[
              { label: "Explore Systems", href: "/systems/", description: "Production-line architectures mapped by use case." },
              { label: "Explore Solutions", href: "/solutions/", description: "Outcome-driven planning paths for business goals." },
              { label: "Book Consultation", href: "/book-consultation/", description: "MOFU consultation to shortlist your setup." },
              { label: "Request Site Audit", href: "/request-site-audit/", description: "Validate utilities and layout before procurement." },
            ]}
          />

          <IntentCTA intent="mofu" sourceRoute={`/industries/${industry.slug}/`} />

          <div className="rounded-xl border bg-muted/30 p-6 md:p-8">
            <h3 className="text-xl font-semibold">Need a tailored solution for {industry.name}?</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Share your throughput targets, available utility specs, and timeline. We’ll map a practical equipment stack for your operation.
            </p>
            <div className="mt-4 flex flex-col gap-3 sm:flex-row">
              <Button asChild>
                <Link href="/request-quote/">Request a Quote</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/contact/">Contact Technical Team</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
