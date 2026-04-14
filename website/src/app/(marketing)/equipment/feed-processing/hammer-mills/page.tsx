import type { Metadata } from "next"
import Link from "next/link"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import { BreadcrumbSchema } from "@/components/seo/schema/breadcrumb"
import { SectionHeading } from "@/components/shared/section-heading"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Hammer Mills UAE | Feed Grinding Equipment",
  description:
    "Hammer mills and SFSP water drop crushers for feed processing and raw material size reduction in the UAE.",
  alternates: {
    canonical: "https://pacificunity.ae/equipment/feed-processing/hammer-mills/",
  },
}

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "Equipment", href: "/equipment/" },
  { name: "Feed Processing", href: "/equipment/feed-processing/" },
  { name: "Hammer Mills", href: "/equipment/feed-processing/hammer-mills/" },
]

export default function HammerMillsHubPage() {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />

      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <Breadcrumbs items={breadcrumbs} />
      </div>

      <section className="px-4 pb-12 pt-8 md:px-6 md:pb-16 md:pt-12">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            title="Hammer Mills"
            subtitle="Feed grinding systems for pre-mixing and pre-pelletizing workflows."
          />

          <Link href="/equipment/feed-processing/crushers/hammer-mill/" className="group block max-w-xl">
            <Card className="transition-shadow hover:shadow-lg">
              <CardContent className="p-6">
                <h2 className="text-lg font-semibold group-hover:text-primary">Hammer Mill Product Page</h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Standard and SFSP water-drop models with detailed specifications.
                </p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </section>
    </>
  )
}
