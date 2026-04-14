import type { Metadata } from "next"
import Link from "next/link"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import { BreadcrumbSchema } from "@/components/seo/schema/breadcrumb"
import { SectionHeading } from "@/components/shared/section-heading"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Water & Beverage Equipment UAE | Pacific Unity",
  description:
    "Water treatment and beverage processing equipment for bottling and industrial applications in the UAE.",
  alternates: {
    canonical: "https://pacificunity.ae/equipment/water-beverage/",
  },
}

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "Equipment", href: "/equipment/" },
  { name: "Water & Beverage", href: "/equipment/water-beverage/" },
]

export default function WaterBeveragePage() {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />

      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <Breadcrumbs items={breadcrumbs} />
      </div>

      <section className="px-4 pb-12 pt-8 md:px-6 md:pb-16 md:pt-12">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            title="Water & Beverage"
            subtitle="Treatment, purification, and related systems for potable and industrial water."
          />

          <Link href="/equipment/water-beverage/water-treatment/" className="group block max-w-xl">
            <Card className="transition-shadow hover:shadow-lg">
              <CardContent className="p-6">
                <h2 className="text-lg font-semibold group-hover:text-primary">Water Treatment</h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Reverse osmosis, desalination, and complete water treatment systems.
                </p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </section>
    </>
  )
}
