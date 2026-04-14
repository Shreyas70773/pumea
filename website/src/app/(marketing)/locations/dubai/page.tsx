import type { Metadata } from "next"
import Link from "next/link"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import { BreadcrumbSchema } from "@/components/seo/schema/breadcrumb"
import { CTAStrip } from "@/components/shared/cta-strip"
import { SectionHeading } from "@/components/shared/section-heading"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { NAP, SITE_URL } from "@/lib/constants"
import {
  ArrowRight,
  Building2,
  Factory,
  MapPin,
  Truck,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Industrial Equipment Supplier Dubai — Pacific Unity MEA",
  description:
    "Industrial equipment supplier in Dubai — water treatment plants, filling machines, labeling machines, pellet mills, and complete production lines. Delivery to Jebel Ali, DIP, Al Quoz, DAFZA, and all Dubai zones.",
  alternates: {
    canonical: "https://pacificunity.ae/locations/dubai/",
  },
}

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "Locations", href: "/locations/" },
  { name: "Dubai", href: "/locations/dubai/" },
]

const industrialZones = [
  {
    name: "Jebel Ali Free Zone (JAFZA)",
    description: "The UAE's largest free zone and a major hub for manufacturing, logistics, and food processing. JAFZA houses over 8,000 companies and is a primary destination for water treatment, bottling, and packaging equipment.",
  },
  {
    name: "Dubai Industrial Park (DIP)",
    description: "Purpose-built for manufacturing and industrial operations in Dubai South. DIP hosts food manufacturers, chemical producers, and building materials companies — all requiring industrial processing equipment.",
  },
  {
    name: "Al Quoz Industrial Area",
    description: "One of Dubai's oldest and most established industrial districts. Home to workshops, food production units, printing presses, and light manufacturing operations in central Dubai.",
  },
  {
    name: "Dubai Airport Free Zone (DAFZA)",
    description: "Strategically located next to Dubai International Airport. DAFZA companies in food trading, pharmaceuticals, and logistics often require water treatment and packaging equipment for re-export operations.",
  },
]

const equipmentCategories = [
  {
    title: "Water Treatment Plants",
    href: "/equipment/water-beverage/water-treatment/",
    description: "RO systems, desalination plants, and water purification equipment for Dubai's food, beverage, and industrial sectors.",
  },
  {
    title: "Filling Machines",
    href: "/equipment/filling-packaging/filling-machines/",
    description: "Liquid filling machines — rotary, linear, piston, and cup filling systems for Dubai beverage and food manufacturers.",
  },
  {
    title: "Labeling Machines",
    href: "/equipment/filling-packaging/labeling-machines/",
    description: "Sticker, BOPP, shrink, and tax stamp labeling machines meeting UAE labeling and compliance requirements.",
  },
  {
    title: "Pellet Mills",
    href: "/equipment/feed-processing/pellet-mills/",
    description: "Animal feed pellet mills for poultry, aquaculture, and livestock feed production in the UAE.",
  },
  {
    title: "Hammer Mills",
    href: "/equipment/feed-processing/crushers/hammer-mill/",
    description: "Feed grinding and size reduction equipment for raw material processing before pelleting.",
  },
]

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: NAP.name,
  legalName: NAP.legalName,
  url: SITE_URL,
  telephone: NAP.phone,
  email: NAP.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: NAP.address.street,
    addressLocality: NAP.address.city,
    addressCountry: "AE",
    postalCode: NAP.address.postCode,
  },
  areaServed: {
    "@type": "City",
    name: "Dubai",
    containedInPlace: {
      "@type": "Country",
      name: "United Arab Emirates",
    },
  },
  description:
    "Industrial equipment supplier serving Dubai — water treatment plants, filling machines, labeling machines, pellet mills, and complete production lines.",
  openingHours: "Su-Th 09:00-18:00",
}

export default function DubaiLocationPage() {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <Breadcrumbs items={breadcrumbs} />
      </div>

      {/* Hero */}
      <section className="bg-gradient-to-br from-background to-muted/40 px-4 pb-12 pt-8 md:px-6 md:pb-16 md:pt-12">
        <div className="mx-auto max-w-7xl">
          <h1 className="max-w-4xl text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            Industrial Equipment Supplier Dubai — Pacific Unity MEA
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-muted-foreground">
            Pacific Unity supplies industrial processing equipment to manufacturers, food
            producers, and water treatment operators across Dubai. From Jebel Ali to Dubai
            Industrial Park, we deliver and install equipment where you need it.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/request-quote/">
                Request a Quote <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/contact/">
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Dubai */}
      <section className="px-4 py-12 md:px-6 md:py-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            title="Industrial Equipment for Dubai's Manufacturing Sector"
            subtitle="Dubai is the UAE's largest industrial and commercial hub, with a diverse manufacturing base spanning food, beverage, animal feed, chemicals, and construction materials."
          />
          <div className="prose max-w-none text-muted-foreground">
            <p>
              Dubai&apos;s industrial sector contributes over AED 40 billion to the emirate&apos;s GDP,
              driven by the Dubai Industrial Strategy 2030 which aims to make Dubai a global
              hub for manufacturing and innovation. The city&apos;s free zones — Jebel Ali, Dubai
              Industrial Park, DAFZA, and others — provide world-class logistics infrastructure
              that connects manufacturers to markets across the GCC, Africa, and South Asia.
            </p>
            <p className="mt-4">
              For manufacturers operating in Dubai, sourcing reliable industrial equipment is
              essential to maintaining production quality and meeting the UAE&apos;s regulatory
              standards. Pacific Unity works with factories and production facilities across
              Dubai to supply water treatment plants, filling and labeling machinery, feed
              processing equipment, and complete production lines.
            </p>
          </div>
        </div>
      </section>

      {/* Industrial Zones */}
      <section className="bg-muted/30 px-4 py-12 md:px-6 md:py-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            title="Dubai Industrial Zones We Serve"
            subtitle="We deliver and install equipment across all of Dubai's major industrial areas."
          />
          <div className="grid gap-6 sm:grid-cols-2">
            {industrialZones.map((zone) => (
              <Card key={zone.name}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <Building2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <div>
                      <h3 className="font-semibold">{zone.name}</h3>
                      <p className="mt-2 text-sm text-muted-foreground">{zone.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment Available */}
      <section className="px-4 py-12 md:px-6 md:py-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            title="Equipment Available for Dubai Delivery"
            subtitle="Browse our range of industrial equipment, all available with delivery and installation in Dubai."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {equipmentCategories.map((category) => (
              <Link key={category.href} href={category.href} className="group">
                <Card className="h-full transition-shadow hover:shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                      {category.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">{category.description}</p>
                    <span className="mt-3 inline-flex items-center text-sm text-primary">
                      View range <ArrowRight className="ml-1 h-3.5 w-3.5" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Key Industries */}
      <section className="bg-muted/30 px-4 py-12 md:px-6 md:py-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            title="Key Industries in Dubai"
            subtitle="The industries we work with across Dubai's manufacturing landscape."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Factory,
                title: "Food & Beverage Manufacturing",
                description: "Bottled water plants, juice production, dairy processing, sauce manufacturing, and bakery operations across Jebel Ali, DIP, and Al Quoz.",
              },
              {
                icon: Truck,
                title: "Animal Feed Production",
                description: "Poultry feed, aquaculture feed, and livestock feed manufacturers in Dubai and the Northern Emirates requiring pellet mills and hammer mills.",
              },
              {
                icon: MapPin,
                title: "Water & Wastewater",
                description: "Industrial water treatment for hotels, labour camps, commercial kitchens, and manufacturing facilities across Dubai.",
              },
            ].map((industry) => (
              <Card key={industry.title}>
                <CardContent className="p-6">
                  <industry.icon className="h-8 w-8 text-primary" />
                  <h3 className="mt-3 font-semibold">{industry.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{industry.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Info */}
      <section className="px-4 py-12 md:px-6 md:py-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeading title="Delivery & Installation in Dubai" />
          <div className="prose max-w-none text-muted-foreground">
            <p>
              Pacific Unity provides end-to-end equipment supply for Dubai-based operations.
              Our service includes site assessment, equipment sourcing, delivery to your
              facility, installation, commissioning, operator training, and ongoing maintenance
              support.
            </p>
            <p className="mt-4">
              While our registered office is in Ras Al Khaimah (AL Hamra Industrial Zone-FZ),
              the majority of our project work is concentrated in Dubai and the Northern
              Emirates. Dubai is approximately 45 minutes from our office, and we maintain
              regular presence across all major industrial zones.
            </p>
            <ul className="mt-4 space-y-2">
              <li>Free site assessment for projects in Dubai</li>
              <li>Equipment delivery to any Dubai location</li>
              <li>On-site installation and commissioning</li>
              <li>Operator training included with every installation</li>
              <li>Annual maintenance contracts available</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 pb-12 md:px-6 md:pb-16">
        <div className="mx-auto max-w-7xl">
          <CTAStrip
            title="Looking for Industrial Equipment in Dubai?"
            description="Tell us what you need and we will provide a quotation with delivery and installation included."
            whatsappMessage="Hi, I'm looking for industrial equipment for my facility in Dubai."
          />
        </div>
      </section>
    </>
  )
}
