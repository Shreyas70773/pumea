import type { Metadata } from "next"
import Link from "next/link"
import { Suspense } from "react"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import { BreadcrumbSchema } from "@/components/seo/schema/breadcrumb"
import { SectionHeading } from "@/components/shared/section-heading"
import { Button } from "@/components/ui/button"
import { BlogExperience } from "@/components/blog/blog-experience"

export const metadata: Metadata = {
  title: "Blog | Pacific Unity UAE",
  description:
    "Insights, practical guides, and technical notes on feed processing, water treatment, and packaging systems in the UAE.",
  alternates: {
    canonical: "https://pacificunity.ae/blog/",
  },
}

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "Blog", href: "/blog/" },
]

export default function BlogPage() {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />

      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <Breadcrumbs items={breadcrumbs} />
      </div>

      <section className="px-4 pb-12 pt-8 md:px-6 md:pb-16 md:pt-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              className="mb-0"
              title="Pacific Unity Blog"
              subtitle="Technical explainers and buying guides for industrial operations teams in the UAE."
            />
            <Button asChild variant="outline">
              <Link href="/admin/login?next=/admin/blog/">Upload Blog Post</Link>
            </Button>
          </div>

          <Suspense fallback={<p className="text-sm text-muted-foreground">Loading blog content...</p>}>
            <BlogExperience />
          </Suspense>
        </div>
      </section>
    </>
  )
}
