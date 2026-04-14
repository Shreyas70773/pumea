import type { Metadata } from "next"
import Link from "next/link"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import { BreadcrumbSchema } from "@/components/seo/schema/breadcrumb"
import { SectionHeading } from "@/components/shared/section-heading"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Feed Processing Equipment UAE | Pacific Unity",
  description:
    "Feed processing equipment including pellet mills, hammer mills, and feed mixers for UAE and GCC operations.",
  alternates: {
    canonical: "https://pacificunity.ae/equipment/feed-processing/",
  },
}

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "Equipment", href: "/equipment/" },
  { name: "Feed Processing", href: "/equipment/feed-processing/" },
]

const links = [
  {
    title: "Pellet Mills",
    href: "/equipment/feed-processing/pellet-mills/",
    description: "Gear drive, belt drive, and fish feed extrusion solutions.",
  },
  {
    title: "Hammer Mills",
    href: "/equipment/feed-processing/hammer-mills/",
    description: "Grinding systems for pre-pelletizing feed preparation.",
  },
  {
    title: "Feed Mixers",
    href: "/equipment/feed-processing/feed-mixers/",
    description: "Batch blending systems for consistent feed formulations.",
  },
]

export default function FeedProcessingPage() {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />

      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <Breadcrumbs items={breadcrumbs} />
      </div>

      <section className="px-4 pb-12 pt-8 md:px-6 md:pb-16 md:pt-12">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            title="Feed Processing"
            subtitle="Core equipment for grinding, mixing, pelletizing, and line expansion."
          />

          <div className="grid gap-6 md:grid-cols-3">
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
