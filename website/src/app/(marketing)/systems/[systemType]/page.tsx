import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import { BreadcrumbSchema } from "@/components/seo/schema/breadcrumb"
import { SectionHeading } from "@/components/shared/section-heading"
import { InternalLinkGrid } from "@/components/conversion/internal-link-grid"
import { IntentCTA } from "@/components/conversion/intent-cta"
import { ProofModule } from "@/components/conversion/proof-module"
import { getSystemBySlug, SYSTEMS } from "@/lib/content-map"

type PageProps = { params: Promise<{ systemType: string }> }

export async function generateStaticParams() {
  return SYSTEMS.map((item) => ({ systemType: item.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { systemType } = await params
  const system = getSystemBySlug(systemType)

  if (!system) return { title: "System Not Found | Pacific Unity UAE" }

  return {
    title: `${system.title} | Pacific Unity UAE`,
    description: system.summary,
    alternates: { canonical: `https://pacificunity.ae/systems/${system.slug}/` },
  }
}

export default async function SystemDetailPage({ params }: PageProps) {
  const { systemType } = await params
  const system = getSystemBySlug(systemType)
  if (!system) notFound()

  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Systems", href: "/systems/" },
    { name: system.title, href: `/systems/${system.slug}/` },
  ]

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <Breadcrumbs items={breadcrumbs} />
      </div>

      <section className="px-4 pb-12 pt-8 md:px-6 md:pb-16 md:pt-12">
        <div className="mx-auto max-w-7xl space-y-8">
          <SectionHeading title={system.title} subtitle={system.summary} />

          <InternalLinkGrid title="System Components" links={system.components.map((item) => ({ ...item }))} />

          <InternalLinkGrid
            title="Industries That Commonly Use This System"
            links={system.idealForIndustries.map((industrySlug) => ({
              href: `/industries/${industrySlug}/`,
              label: industrySlug.split("-").map((word) => word[0].toUpperCase() + word.slice(1)).join(" "),
            }))}
          />

          <ProofModule
            points={[
              { label: "Typical Response", value: "24h", hint: "Initial technical-commercial response window" },
              { label: "Deployment Model", value: "Modular", hint: "Scale by throughput and utility readiness" },
              { label: "Risk Reduction", value: "High", hint: "Single system architecture reduces integration gaps" },
            ]}
          />

          <IntentCTA intent={system.ctaIntent} sourceRoute={`/systems/${system.slug}/`} />
        </div>
      </section>
    </>
  )
}
