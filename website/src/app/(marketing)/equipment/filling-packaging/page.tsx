import type { Metadata } from "next"
import Link from "next/link"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import { BreadcrumbSchema } from "@/components/seo/schema/breadcrumb"
import { SectionHeading } from "@/components/shared/section-heading"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Filling & Packaging Equipment UAE | Pacific Unity",
  description:
    "Explore filling, labeling, capping, and packaging equipment for beverage, food, and industrial production lines in the UAE.",
  alternates: {
    canonical: "https://pacificunity.ae/equipment/filling-packaging/",
  },
}

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "Equipment", href: "/equipment/" },
  { name: "Filling & Packaging", href: "/equipment/filling-packaging/" },
]

const links = [
  {
    title: "Filling Machines",
    href: "/equipment/filling-packaging/filling-machines/",
    description: "Rotary, linear, piston, and cup filling systems.",
  },
  {
    title: "Labeling Machines",
    href: "/equipment/filling-packaging/labeling-machines/",
    description: "BOPP, shrink sleeve, sticker, and tax stamp labeling.",
  },
  {
    title: "Capping Machines",
    href: "/equipment/filling-packaging/capping-machines/",
    description: "Cap application systems for PET, glass, and specialty closures.",
  },
  {
    title: "Packaging Machines",
    href: "/equipment/filling-packaging/packaging-machines/",
    description: "Shrink wrapping and end-of-line packaging automation.",
  },
]

export default function FillingPackagingPage() {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />

      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <Breadcrumbs items={breadcrumbs} />
      </div>

      <section className="px-4 pb-12 pt-8 md:px-6 md:pb-16 md:pt-12">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            title="Filling & Packaging"
            subtitle="Core packaging line modules for food, beverage, and industrial sectors."
          />

          <div className="grid gap-6 sm:grid-cols-2">
            {links.map((link) => (
              <Link key={link.href} href={link.href} className="group">
                <Card className="h-full transition-shadow hover:shadow-lg">
                  <CardContent className="p-6">
                    <h2 className="text-lg font-semibold group-hover:text-primary">{link.title}</h2>
                    <p className="mt-2 text-sm text-muted-foreground">{link.description}</p>
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
