import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import { BreadcrumbSchema } from "@/components/seo/schema/breadcrumb"
import { QuoteForm } from "@/components/forms/quote-form"

const VALID_INTENTS = ["explore", "evaluate", "purchase"] as const

type Intent = (typeof VALID_INTENTS)[number]

type PageProps = { params: Promise<{ intent: Intent }> }

export const dynamicParams = false

export async function generateStaticParams() {
  return VALID_INTENTS.map((intent) => ({ intent }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { intent } = await params
  if (!VALID_INTENTS.includes(intent)) return { title: "Request Quote | Pacific Unity UAE" }

  return {
    title: `Request Quote (${intent}) | Pacific Unity UAE`,
    description: "Intent-routed quote flow with pre-tagged lead context for faster qualification.",
    alternates: { canonical: `https://pacificunity.ae/request-quote/${intent}/` },
  }
}

export default async function IntentQuotePage({ params }: PageProps) {
  const { intent } = await params
  if (!VALID_INTENTS.includes(intent)) notFound()

  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Request a Quote", href: "/request-quote/" },
    { name: intent[0].toUpperCase() + intent.slice(1), href: `/request-quote/${intent}/` },
  ]

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <div className="mx-auto max-w-7xl px-4 md:px-6"><Breadcrumbs items={breadcrumbs} /></div>
      <section className="px-4 pb-16 pt-8 md:px-6 md:pb-20 md:pt-12">
        <div className="mx-auto max-w-3xl space-y-6">
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Request Quote ({intent})</h1>
          <p className="text-muted-foreground">This route tags your enquiry by buying stage so we can route it to the right workflow.</p>
          <QuoteForm intent={intent} pageType="bofu" sourceRoute={`/request-quote/${intent}/`} />
        </div>
      </section>
    </>
  )
}
