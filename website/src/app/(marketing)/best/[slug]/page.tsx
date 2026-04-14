import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import { BreadcrumbSchema } from "@/components/seo/schema/breadcrumb"
import { BEST_PAGES } from "@/lib/content-map"
import { IntentCTA } from "@/components/conversion/intent-cta"

type PageProps = { params: Promise<{ slug: string }> }

export const dynamicParams = false

export async function generateStaticParams() {
  return BEST_PAGES.map((item) => ({ slug: `${item.product}-for-${item.useCase}` }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const page = BEST_PAGES.find((item) => `${item.product}-for-${item.useCase}` === slug)
  if (!page) return { title: "Page Not Found | Pacific Unity UAE" }

  return {
    title: `${page.title} | Pacific Unity UAE`,
    description: page.description,
    alternates: { canonical: `https://pacificunity.ae/best/${slug}/` },
  }
}

export default async function BestPage({ params }: PageProps) {
  const { slug } = await params
  const page = BEST_PAGES.find((item) => `${item.product}-for-${item.useCase}` === slug)
  if (!page) notFound()

  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Best", href: `/best/${slug}/` },
  ]

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <div className="mx-auto max-w-7xl px-4 md:px-6"><Breadcrumbs items={breadcrumbs} /></div>
      <section className="px-4 pb-12 pt-8 md:px-6 md:pb-16 md:pt-12">
        <div className="mx-auto max-w-4xl space-y-6">
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">{page.title}</h1>
          <p className="text-muted-foreground">{page.description}</p>
          <IntentCTA intent="bofu" sourceRoute={`/best/${slug}/`} />
        </div>
      </section>
    </>
  )
}
