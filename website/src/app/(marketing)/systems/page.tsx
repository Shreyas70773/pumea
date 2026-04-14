import type { Metadata } from "next"
import Link from "next/link"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import { BreadcrumbSchema } from "@/components/seo/schema/breadcrumb"
import { SectionHeading } from "@/components/shared/section-heading"
import { Card, CardContent } from "@/components/ui/card"
import { SYSTEMS } from "@/lib/content-map"
import { IntentCTA } from "@/components/conversion/intent-cta"

export const metadata: Metadata = {
  title: "Industrial Systems | Pacific Unity UAE",
  description: "Complete industrial systems that aggregate equipment modules into production-ready line architectures.",
  alternates: { canonical: "https://pacificunity.ae/systems/" },
}

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "Systems", href: "/systems/" },
]

export default function SystemsPage() {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <Breadcrumbs items={breadcrumbs} />
      </div>

      <section className="px-4 pb-12 pt-8 md:px-6 md:pb-16 md:pt-12">
        <div className="mx-auto max-w-7xl space-y-10">
          <SectionHeading
            title="System Architectures"
            subtitle="Combine equipment categories into coherent production systems for faster decision-making."
          />

          <div className="grid gap-6 md:grid-cols-2">
            {SYSTEMS.map((system) => (
              <Link key={system.slug} href={`/systems/${system.slug}/`} className="group">
                <Card className="h-full transition-shadow hover:shadow-lg">
                  <CardContent className="p-6">
                    <h2 className="text-lg font-semibold group-hover:text-primary">{system.title}</h2>
                    <p className="mt-2 text-sm text-muted-foreground">{system.summary}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          <IntentCTA intent="mofu" sourceRoute="/systems/" />
        </div>
      </section>
    </>
  )
}
