import type { Metadata } from "next"
import Link from "next/link"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import { BreadcrumbSchema } from "@/components/seo/schema/breadcrumb"
import { SectionHeading } from "@/components/shared/section-heading"
import { Card, CardContent } from "@/components/ui/card"
import { RESOURCES } from "@/lib/content-map"
import { IntentCTA } from "@/components/conversion/intent-cta"

export const metadata: Metadata = {
  title: "Resources | Pacific Unity UAE",
  description: "Guides, templates, and calculators for industrial planning and procurement decisions.",
  alternates: { canonical: "https://pacificunity.ae/resources/" },
}

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "Resources", href: "/resources/" },
]

export default function ResourcesPage() {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <div className="mx-auto max-w-7xl px-4 md:px-6"><Breadcrumbs items={breadcrumbs} /></div>
      <section className="px-4 pb-12 pt-8 md:px-6 md:pb-16 md:pt-12">
        <div className="mx-auto max-w-7xl space-y-8">
          <SectionHeading title="Decision Resources" subtitle="Support early-stage research and mid-funnel technical planning." />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {RESOURCES.map((resource) => (
              <Link key={resource.slug} href={`/resources/${resource.slug}/`} className="group">
                <Card className="h-full transition-shadow hover:shadow-lg">
                  <CardContent className="p-6">
                    <p className="text-xs uppercase tracking-wide text-muted-foreground">{resource.type}</p>
                    <h2 className="mt-1 text-lg font-semibold group-hover:text-primary">{resource.title}</h2>
                    <p className="mt-2 text-sm text-muted-foreground">{resource.summary}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
          <IntentCTA intent="tofu" sourceRoute="/resources/" />
        </div>
      </section>
    </>
  )
}
