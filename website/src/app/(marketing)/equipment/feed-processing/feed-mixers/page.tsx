import type { Metadata } from "next"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import { BreadcrumbSchema } from "@/components/seo/schema/breadcrumb"
import { SectionHeading } from "@/components/shared/section-heading"

export const metadata: Metadata = {
  title: "Feed Mixers UAE | Industrial Mixing Equipment",
  description:
    "Industrial feed mixers for poultry, livestock, and aquaculture formulations in UAE feed plants.",
  alternates: {
    canonical: "https://pacificunity.ae/equipment/feed-processing/feed-mixers/",
  },
}

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "Equipment", href: "/equipment/" },
  { name: "Feed Processing", href: "/equipment/feed-processing/" },
  { name: "Feed Mixers", href: "/equipment/feed-processing/feed-mixers/" },
]

export default function FeedMixersPage() {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />

      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <Breadcrumbs items={breadcrumbs} />
      </div>

      <section className="px-4 pb-12 pt-8 md:px-6 md:pb-16 md:pt-12">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            title="Feed Mixers"
            subtitle="Paddle and ribbon mixer solutions for consistent feed quality."
          />
          <p className="max-w-2xl text-muted-foreground">
            Detailed mixer product pages are being expanded. Use the quote page to receive mixer sizing and integration recommendations for your target throughput.
          </p>
        </div>
      </section>
    </>
  )
}
