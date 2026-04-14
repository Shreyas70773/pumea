import type { Metadata } from "next"
import Link from "next/link"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import { BreadcrumbSchema } from "@/components/seo/schema/breadcrumb"
import { SectionHeading } from "@/components/shared/section-heading"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Locations | Pacific Unity UAE",
  description:
    "Explore Pacific Unity location pages for Dubai and UAE-focused industrial equipment supply.",
  alternates: {
    canonical: "https://pacificunity.ae/locations/",
  },
}

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "Locations", href: "/locations/" },
]

const locations = [
  {
    title: "Dubai",
    href: "/locations/dubai/",
    description: "Industrial equipment services for projects in Dubai.",
  },
  {
    title: "UAE",
    href: "/locations/uae/",
    description: "Nationwide supply and support across all UAE emirates.",
  },
]

export default function LocationsPage() {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />

      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <Breadcrumbs items={breadcrumbs} />
      </div>

      <section className="px-4 pb-12 pt-8 md:px-6 md:pb-16 md:pt-12">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            title="Locations"
            subtitle="Regional pages tailored to local search and project needs."
          />

          <div className="grid gap-6 md:grid-cols-2">
            {locations.map((location) => (
              <Link key={location.href} href={location.href} className="group">
                <Card className="h-full transition-shadow hover:shadow-lg">
                  <CardContent className="p-6">
                    <h2 className="text-lg font-semibold group-hover:text-primary">{location.title}</h2>
                    <p className="mt-2 text-sm text-muted-foreground">{location.description}</p>
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
