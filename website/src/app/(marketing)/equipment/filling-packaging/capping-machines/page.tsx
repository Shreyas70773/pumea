import type { Metadata } from "next"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import { BreadcrumbSchema } from "@/components/seo/schema/breadcrumb"
import { SectionHeading } from "@/components/shared/section-heading"

export const metadata: Metadata = {
  title: "Capping Machines UAE | Pacific Unity",
  description:
    "Capping machines for beverage, food, and industrial packaging lines in the UAE.",
  alternates: {
    canonical: "https://pacificunity.ae/equipment/filling-packaging/capping-machines/",
  },
}

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "Equipment", href: "/equipment/" },
  { name: "Filling & Packaging", href: "/equipment/filling-packaging/" },
  { name: "Capping Machines", href: "/equipment/filling-packaging/capping-machines/" },
]

export default function CappingMachinesPage() {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />

      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <Breadcrumbs items={breadcrumbs} />
      </div>

      <section className="px-4 pb-12 pt-8 md:px-6 md:pb-16 md:pt-12">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            title="Capping Machines"
            subtitle="Cap application systems for PET, glass, and specialty closure formats."
          />
          <p className="max-w-2xl text-muted-foreground">
            This category page has been added to keep navigation complete while detailed product pages are finalized.
          </p>
        </div>
      </section>
    </>
  )
}
