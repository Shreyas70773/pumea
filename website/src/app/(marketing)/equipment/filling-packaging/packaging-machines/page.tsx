import type { Metadata } from "next"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import { BreadcrumbSchema } from "@/components/seo/schema/breadcrumb"
import { SectionHeading } from "@/components/shared/section-heading"

export const metadata: Metadata = {
  title: "Packaging Machines UAE | Pacific Unity",
  description:
    "End-of-line packaging systems including shrink wrapping and secondary packaging automation in the UAE.",
  alternates: {
    canonical: "https://pacificunity.ae/equipment/filling-packaging/packaging-machines/",
  },
}

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "Equipment", href: "/equipment/" },
  { name: "Filling & Packaging", href: "/equipment/filling-packaging/" },
  { name: "Packaging Machines", href: "/equipment/filling-packaging/packaging-machines/" },
]

export default function PackagingMachinesPage() {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />

      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <Breadcrumbs items={breadcrumbs} />
      </div>

      <section className="px-4 pb-12 pt-8 md:px-6 md:pb-16 md:pt-12">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            title="Packaging Machines"
            subtitle="Secondary and end-of-line packaging equipment for complete production workflows."
          />
          <p className="max-w-2xl text-muted-foreground">
            This category page has been added to resolve navigation gaps. Detailed product pages will be expanded in the next content phase.
          </p>
        </div>
      </section>
    </>
  )
}
