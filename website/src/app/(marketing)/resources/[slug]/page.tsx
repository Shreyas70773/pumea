import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import { BreadcrumbSchema } from "@/components/seo/schema/breadcrumb"
import { RESOURCES } from "@/lib/content-map"
import { IntentCTA } from "@/components/conversion/intent-cta"

type PageProps = { params: Promise<{ slug: string }> }

export const dynamicParams = false

export async function generateStaticParams() {
  return RESOURCES.map((item) => ({ slug: item.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const resource = RESOURCES.find((item) => item.slug === slug)
  if (!resource) return { title: "Resource Not Found | Pacific Unity UAE" }

  return {
    title: `${resource.title} | Pacific Unity UAE`,
    description: resource.summary,
    alternates: { canonical: `https://pacificunity.ae/resources/${resource.slug}/` },
  }
}

export default async function ResourceDetailPage({ params }: PageProps) {
  const { slug } = await params
  const resource = RESOURCES.find((item) => item.slug === slug)
  if (!resource) notFound()

  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Resources", href: "/resources/" },
    { name: resource.title, href: `/resources/${resource.slug}/` },
  ]

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <div className="mx-auto max-w-7xl px-4 md:px-6"><Breadcrumbs items={breadcrumbs} /></div>
      <section className="px-4 pb-12 pt-8 md:px-6 md:pb-16 md:pt-12">
        <div className="mx-auto max-w-4xl space-y-6">
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">{resource.title}</h1>
          <p className="text-muted-foreground">{resource.summary}</p>
          <p className="text-sm text-muted-foreground">Need a tailored version for your project? <Link href="/book-consultation/" className="text-primary hover:underline">Book consultation</Link>.</p>
          <IntentCTA intent="tofu" sourceRoute={`/resources/${resource.slug}/`} />
        </div>
      </section>
    </>
  )
}
