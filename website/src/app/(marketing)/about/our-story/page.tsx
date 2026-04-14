import type { Metadata } from "next"
import Link from "next/link"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import { BreadcrumbSchema } from "@/components/seo/schema/breadcrumb"
import { CTAStrip } from "@/components/shared/cta-strip"
import { SectionHeading } from "@/components/shared/section-heading"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Globe, Target } from "lucide-react"

export const metadata: Metadata = {
  title: "Our Story — From Singapore to the UAE | Pacific Unity MEA",
  description:
    "Pacific Unity MEA brings 13+ years of industrial equipment expertise from Singapore, Ghana, Kenya, India, and China to the UAE and GCC market. Learn about our journey.",
  alternates: {
    canonical: "https://pacificunity.ae/about/our-story/",
  },
}

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about/" },
  { name: "Our Story", href: "/about/our-story/" },
]

const timeline = [
  {
    year: "2013",
    title: "North Star Impex — Singapore",
    description:
      "The journey began in Singapore with the founding of North Star Impex, trading in industrial machinery and equipment across South-East Asia.",
  },
  {
    year: "2015",
    title: "Fine Techno Pack — Ghana",
    description:
      "Operations expanded into West Africa through Fine Techno Pack in Ghana, supplying filling, labeling, and packaging equipment to the Ghanaian food and beverage sector.",
  },
  {
    year: "2018",
    title: "Expansion to East Africa — Kenya",
    description:
      "We extended our reach into East Africa, working with manufacturers in Kenya on feed processing, water treatment, and bottling line projects.",
  },
  {
    year: "2020",
    title: "Stelastra (India) & NSI Impex (China)",
    description:
      "Strategic partnerships in India (Stelastra) and China (NSI Impex) strengthened our supply chain, allowing direct access to factory-level pricing and quality control for equipment manufacturing.",
  },
  {
    year: "2025",
    title: "Pacific Unity MEA — United Arab Emirates",
    description:
      "Pacific Unity MEA was established in Ras Al Khaimah to bring this accumulated expertise to the UAE and wider GCC market. We are new to the UAE, but we bring over a decade of hands-on experience across multiple continents.",
  },
]

export default function OurStoryPage() {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />

      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <Breadcrumbs items={breadcrumbs} />
      </div>

      {/* Hero */}
      <section className="px-4 pb-12 pt-8 md:px-6 md:pb-16 md:pt-12">
        <div className="mx-auto max-w-7xl">
          <h1 className="max-w-3xl text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            Our Story — From Singapore to the UAE
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Pacific Unity MEA is new to the United Arab Emirates, but the people behind it
            are not new to industrial equipment. We bring 13+ years of global experience
            across four continents to the UAE and GCC market.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-muted/30 px-4 py-12 md:px-6 md:py-16">
        <div className="mx-auto max-w-4xl">
          <SectionHeading
            title="Our Journey"
            subtitle="From a trading company in Singapore to an industrial equipment supplier serving the Middle East."
          />

          <div className="relative ml-4 border-l-2 border-primary/20 pl-8 md:ml-0">
            {timeline.map((item) => (
              <div key={item.year} className="relative mb-10 last:mb-0">
                <div className="absolute -left-[calc(2rem+5px)] top-1 h-3 w-3 rounded-full border-2 border-primary bg-background" />
                <span className="text-sm font-semibold text-primary">{item.year}</span>
                <h3 className="mt-1 text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="px-4 py-12 md:px-6 md:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-2">
            <Card>
              <CardContent className="p-6 md:p-8">
                <Target className="h-10 w-10 text-primary" />
                <h2 className="mt-4 text-xl font-bold">Our Mission</h2>
                <p className="mt-3 text-muted-foreground">
                  To bring proven industrial equipment expertise to the UAE and GCC market —
                  helping manufacturers, food producers, and water treatment operators access
                  reliable, well-engineered machinery backed by genuine technical support.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 md:p-8">
                <Globe className="h-10 w-10 text-primary" />
                <h2 className="mt-4 text-xl font-bold">What We Bring</h2>
                <ul className="mt-3 space-y-2 text-muted-foreground">
                  <li>13+ years of industrial equipment trading experience</li>
                  <li>Direct factory relationships in India and China</li>
                  <li>Hands-on project delivery across Africa and Asia</li>
                  <li>A focused commitment to the UAE and GCC markets</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Honest Positioning */}
      <section className="bg-muted/30 px-4 py-12 md:px-6 md:py-16">
        <div className="mx-auto max-w-3xl">
          <SectionHeading title="Being Honest About Where We Are" />
          <div className="prose max-w-none text-muted-foreground">
            <p>
              We are a new company in the UAE. Our trade licence was issued in 2025, and we
              are building our local track record from the ground up. We do not claim to have
              decades of UAE-specific experience because we do not.
            </p>
            <p className="mt-4">
              What we do have is over a decade of practical, hands-on experience in industrial
              equipment across Singapore, Ghana, Kenya, India, and China. We have sourced,
              shipped, installed, and maintained machinery in environments far more challenging
              than the well-connected logistics infrastructure of the UAE.
            </p>
            <p className="mt-4">
              We believe that honest representation builds better business relationships.
              We would rather earn your trust over time through reliable service than overstate
              our position today.
            </p>
          </div>
          <div className="mt-8">
            <Button asChild size="lg">
              <Link href="/request-quote/">
                Start a Conversation <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 pb-12 md:px-6 md:pb-16">
        <div className="mx-auto max-w-7xl">
          <CTAStrip
            title="Want to Work With Us?"
            description="We are always happy to discuss how our equipment and experience can help your operation."
          />
        </div>
      </section>
    </>
  )
}
