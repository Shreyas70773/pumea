import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import { BreadcrumbSchema } from "@/components/seo/schema/breadcrumb"
import { InternalLinkGrid } from "@/components/conversion/internal-link-grid"
import { IntentCTA } from "@/components/conversion/intent-cta"
import { INDUSTRY_APPLICATIONS } from "@/lib/content-map"

type PageProps = { params: Promise<{ slug: string; application: string }> }

export const dynamicParams = false

export async function generateStaticParams() {
  return INDUSTRY_APPLICATIONS.map((item) => ({ slug: item.industry, application: item.application }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug, application } = await params
  const page = INDUSTRY_APPLICATIONS.find((item) => item.industry === slug && item.application === application)
  if (!page) return { title: "Industry Application Not Found | Pacific Unity UAE" }

  return {
    title: `${page.title} | Pacific Unity UAE`,
    description: page.description,
    alternates: { canonical: `https://pacificunity.ae/industries/${slug}/${application}/` },
  }
}

export default async function IndustryApplicationPage({ params }: PageProps) {
  const { slug, application } = await params
  const page = INDUSTRY_APPLICATIONS.find((item) => item.industry === slug && item.application === application)
  if (!page) notFound()

  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Industries", href: "/industries/" },
    { name: slug, href: `/industries/${slug}/` },
    { name: page.title, href: `/industries/${slug}/${application}/` },
  ]

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <div className="mx-auto max-w-7xl px-4 md:px-6"><Breadcrumbs items={breadcrumbs} /></div>
      <section className="px-4 pb-12 pt-8 md:px-6 md:pb-16 md:pt-12">
        <div className="mx-auto max-w-4xl space-y-6">
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">{page.title}</h1>
          <p className="text-muted-foreground">{page.description}</p>
          <InternalLinkGrid title="Recommended Paths" links={page.links.map((item) => ({ ...item }))} />
          <IntentCTA intent="mofu" sourceRoute={`/industries/${slug}/${application}/`} />
        </div>
      </section>
    </>
  )
}
