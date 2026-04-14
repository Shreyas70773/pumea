import type { Metadata } from "next"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import { BreadcrumbSchema } from "@/components/seo/schema/breadcrumb"
import { SectionHeading } from "@/components/shared/section-heading"

export const metadata: Metadata = {
  title: "Industrial Tanks & Vessels UAE | Pacific Unity",
  description:
    "Industrial tanks and vessels for storage and process applications in food, beverage, and industrial sectors.",
  alternates: {
    canonical: "https://pacificunity.ae/equipment/tanks-vessels/",
  },
}

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "Equipment", href: "/equipment/" },
  { name: "Tanks & Vessels", href: "/equipment/tanks-vessels/" },
]

export default function TanksVesselsPage() {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />

      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <Breadcrumbs items={breadcrumbs} />
      </div>

      <section className="px-4 pb-12 pt-8 md:px-6 md:pb-16 md:pt-12">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            title="Tanks & Vessels"
            subtitle="Stainless steel and industrial storage/process tank solutions."
          />
          <p className="max-w-2xl text-muted-foreground">
            This section is being expanded with detailed product pages. In the meantime, use the quote form to request tank specifications and project support.
          </p>
        </div>
      </section>
    </>
  )
}
