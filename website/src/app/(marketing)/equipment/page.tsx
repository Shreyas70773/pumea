import type { Metadata } from "next"
import Link from "next/link"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import { BreadcrumbSchema } from "@/components/seo/schema/breadcrumb"
import { SectionHeading } from "@/components/shared/section-heading"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Industrial Equipment | Pacific Unity UAE",
  description:
    "Browse Pacific Unity equipment categories: feed processing, filling & packaging, water & beverage, and tanks & vessels.",
  alternates: {
    canonical: "https://pacificunity.ae/equipment/",
  },
}

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "Equipment", href: "/equipment/" },
]

const categories = [
  {
    title: "Feed Processing",
    href: "/equipment/feed-processing/",
    description: "Pellet mills, crushers, mixers, and full feed line systems.",
  },
  {
    title: "Filling & Packaging",
    href: "/equipment/filling-packaging/",
    description: "Filling, labeling, capping, and end-of-line packaging equipment.",
  },
  {
    title: "Water & Beverage",
    href: "/equipment/water-beverage/",
    description: "Water treatment and beverage processing systems.",
  },
  {
    title: "Tanks & Vessels",
    href: "/equipment/tanks-vessels/",
    description: "Industrial storage and process tanks for food and industry.",
  },
]

export default function EquipmentPage() {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />

      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <Breadcrumbs items={breadcrumbs} />
      </div>

      <section className="px-4 pb-12 pt-8 md:px-6 md:pb-16 md:pt-12">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            title="Equipment Categories"
            subtitle="Start by choosing the category that matches your production goals."
          />

          <div className="grid gap-6 sm:grid-cols-2">
            {categories.map((category) => (
              <Link key={category.href} href={category.href} className="group">
                <Card className="h-full transition-shadow hover:shadow-lg">
                  <CardContent className="p-6">
                    <h2 className="text-lg font-semibold group-hover:text-primary">{category.title}</h2>
                    <p className="mt-2 text-sm text-muted-foreground">{category.description}</p>
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
