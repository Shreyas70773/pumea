import type { Metadata } from "next"
import Link from "next/link"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import { BreadcrumbSchema } from "@/components/seo/schema/breadcrumb"
import { SectionHeading } from "@/components/shared/section-heading"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Industrial Equipment Supplier UAE | Pacific Unity",
  description:
    "Pacific Unity supplies feed processing, water treatment, and filling equipment across the UAE.",
  alternates: {
    canonical: "https://pacificunity.ae/locations/uae/",
  },
}

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "Locations", href: "/locations/" },
  { name: "UAE", href: "/locations/uae/" },
]

const links = [
  { title: "Dubai", href: "/locations/dubai/" },
  { title: "Water Treatment", href: "/equipment/water-beverage/water-treatment/" },
  { title: "Filling Machines", href: "/equipment/filling-packaging/filling-machines/" },
  { title: "Pellet Mills", href: "/equipment/feed-processing/pellet-mills/" },
]

export default function UAEPage() {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />

      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <Breadcrumbs items={breadcrumbs} />
      </div>

      <section className="px-4 pb-12 pt-8 md:px-6 md:pb-16 md:pt-12">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            title="Serving the UAE"
            subtitle="Project delivery and support across all emirates from our Ras Al Khaimah base."
          />

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {links.map((link) => (
              <Link key={link.href} href={link.href} className="group">
                <Card className="h-full transition-shadow hover:shadow-lg">
                  <CardContent className="p-5">
                    <h2 className="font-semibold group-hover:text-primary">{link.title}</h2>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
