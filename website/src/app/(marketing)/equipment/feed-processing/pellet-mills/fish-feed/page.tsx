import type { Metadata } from "next"
import Link from "next/link"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import { BreadcrumbSchema } from "@/components/seo/schema/breadcrumb"
import { ProductSchema } from "@/components/seo/schema/product"
import { FAQPageSchema } from "@/components/seo/schema/faq-page"
import { FAQAccordion } from "@/components/shared/faq-accordion"
import { CTAStrip } from "@/components/shared/cta-strip"
import { SectionHeading } from "@/components/shared/section-heading"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { ArrowRight, CheckCircle } from "lucide-react"

export const metadata: Metadata = {
  title:
    "Fish Feed Pellet Mill Dubai — Aquaculture Feed Extruders for UAE",
  description:
    "Fish feed pellet mills and twin-screw extruders for aquaculture feed production in Dubai UAE. Floating and sinking fish feed equipment from 0.5-10 TPH. Request a quote.",
  keywords: [
    "fish feed pellet mill",
    "fish feed extruder Dubai",
    "aquaculture feed equipment UAE",
    "floating fish feed machine",
    "sinking fish feed pellet mill",
    "twin screw extruder fish feed",
    "tilapia feed machine UAE",
  ],
  alternates: {
    canonical:
      "https://pacificunity.ae/equipment/feed-processing/pellet-mills/fish-feed/",
  },
}

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "Equipment", href: "/equipment/" },
  { name: "Feed Processing", href: "/equipment/feed-processing/" },
  { name: "Pellet Mills", href: "/equipment/feed-processing/pellet-mills/" },
  {
    name: "Fish Feed",
    href: "/equipment/feed-processing/pellet-mills/fish-feed/",
  },
]

const equipmentRange = [
  {
    model: "PU-FFP-1",
    type: "Ring Die Pellet Mill",
    output: "Sinking pellets",
    capacity: "1-2 TPH",
    power: "22-37 kW",
    pelletSize: "2-6 mm",
    application: "Tilapia, catfish, shrimp (sinking)",
  },
  {
    model: "PU-FFP-3",
    type: "Ring Die Pellet Mill",
    output: "Sinking pellets",
    capacity: "2-4 TPH",
    power: "37-55 kW",
    pelletSize: "2-8 mm",
    application: "Commercial sinking feed production",
  },
  {
    model: "PU-TSE-05",
    type: "Twin-Screw Extruder",
    output: "Floating pellets",
    capacity: "0.5-1 TPH",
    power: "45-75 kW",
    pelletSize: "1.5-10 mm",
    application: "Small-scale floating feed, R&D",
  },
  {
    model: "PU-TSE-2",
    type: "Twin-Screw Extruder",
    output: "Floating pellets",
    capacity: "1-3 TPH",
    power: "75-132 kW",
    pelletSize: "1.5-12 mm",
    application: "Commercial floating fish feed",
  },
  {
    model: "PU-TSE-5",
    type: "Twin-Screw Extruder",
    output: "Floating/slow-sinking",
    capacity: "3-6 TPH",
    power: "132-200 kW",
    pelletSize: "2-12 mm",
    application: "Large aquafeed plant, multi-species",
  },
  {
    model: "PU-TSE-10",
    type: "Twin-Screw Extruder",
    output: "Floating/slow-sinking",
    capacity: "5-10 TPH",
    power: "200-315 kW",
    pelletSize: "2-14 mm",
    application: "Major aquafeed producer, export",
  },
]

const faqs = [
  {
    question: "What is the difference between a fish feed pellet mill and a fish feed extruder?",
    answer:
      "A fish feed pellet mill (ring die type) produces dense, sinking pellets by compressing mash feed through a ring die under high pressure. The pellets are compact and sink immediately when placed in water — ideal for bottom-feeding species such as catfish, shrimp, and some tilapia strains. A fish feed extruder (typically twin-screw) cooks the feed material under high temperature (120-150°C) and pressure, then forces it through a shaping die. As the extrudate exits, the sudden pressure drop causes the starch to expand, creating a porous, buoyant pellet that floats on the water surface. Floating feed is preferred for species such as tilapia, barramundi, and sea bass because it allows farmers to observe feeding behaviour and reduce waste.",
  },
  {
    question: "What type of fish feed equipment do I need — pellet mill or extruder?",
    answer:
      "The choice depends on the fish species you are feeding and the desired pellet buoyancy. If you need sinking pellets for bottom feeders (catfish, shrimp, carp), a ring die pellet mill is sufficient and more affordable. If you need floating pellets for surface and mid-water feeders (tilapia, barramundi, sea bass, grouper), you need a twin-screw extruder. Many aquaculture operations in the UAE and the wider region produce both floating and sinking feed — in this case, a combined line with both a pellet mill and an extruder provides maximum versatility. Pacific Unity supplied exactly this configuration for the Yedid Agro project in Ghana, which includes a ring die pellet mill for sinking feed and a twin-screw extruder for floating fish feed.",
  },
  {
    question: "What is the difference between floating and sinking fish feed pellets?",
    answer:
      "Floating fish feed pellets have a bulk density of 400-550 g/L due to the expanded, porous structure created during extrusion. They remain on the water surface for 12-24 hours, allowing fish to feed at the surface where farmers can monitor consumption and adjust feeding rates. Sinking fish feed pellets have a bulk density of 550-700 g/L and descend to the bottom within seconds of entering the water. Floating feed reduces waste and improves feed conversion ratios by 5-15% because uneaten pellets are visible and can be removed. However, sinking feed is essential for species that naturally feed on the bottom, such as shrimp and catfish, and is also preferred in high-current environments where floating pellets would drift away.",
  },
  {
    question: "How much does fish feed production equipment cost in Dubai?",
    answer:
      "Fish feed equipment pricing depends on the type (pellet mill vs extruder), capacity, and the completeness of the production line. Request a quote for pricing on any model in our range. Pacific Unity provides detailed quotations that cover the core machine, dies, cutting systems, and all standard accessories. For a complete aquafeed production line — including hammer mill, mixer, extruder or pellet mill, dryer (for floating feed), cooler, and coating system — we provide a single turn-key project price. Our team in the UAE will assess your species mix, daily output target, and formulations to recommend the optimal equipment configuration.",
  },
  {
    question: "Is the UAE aquaculture market growing and is local feed production viable?",
    answer:
      "Yes, the UAE aquaculture sector is expanding rapidly. The UAE National Aquaculture Strategy targets a significant increase in domestic fish production to reduce the country's reliance on imported seafood, which currently exceeds 85% of total consumption. Fish farms are operating in Abu Dhabi, Ras Al Khaimah, and Fujairah, producing species including tilapia, sea bass, grouper, and shrimp. The Abu Dhabi Agriculture and Food Safety Authority (ADAFSA) actively supports aquaculture investment through licensing, subsidies, and technical guidance. Locally produced fish feed — tailored to UAE water temperatures (25-35°C) and species requirements — offers a cost advantage over imported feed and ensures consistent supply, making domestic aquafeed production a viable and growing opportunity.",
  },
  {
    question: "What raw materials are used in fish feed production?",
    answer:
      "Fish feed formulations typically include fish meal (the primary protein source, 20-60% depending on species and growth stage), soya bean meal (supplementary protein), wheat or corn flour (starch binder and energy source), fish oil or vegetable oil (essential fatty acids), and a vitamin-mineral premix. For high-value carnivorous species like grouper and sea bass, fish meal content is higher. For omnivorous species like tilapia, soya and plant-based proteins can replace a larger proportion of fish meal to reduce cost. All these raw materials are readily available in the UAE through the country's established trading networks. Pacific Unity provides formulation guidance as part of our project commissioning service to help clients achieve optimal feed conversion ratios.",
  },
  {
    question: "Does a twin-screw extruder need a dryer for floating fish feed?",
    answer:
      "Yes, floating fish feed produced by a twin-screw extruder exits the machine at approximately 25-30% moisture content and must be dried to 10-12% for safe storage. A continuous belt dryer or vertical dryer is used immediately after the extruder to reduce moisture levels. Drying temperature is typically 80-120°C with a retention time of 15-30 minutes depending on pellet size and ambient conditions. In the UAE, where ambient humidity is generally low (except in coastal areas during summer), drying is efficient and energy costs are moderate. The dryer is followed by a cooler to bring pellet temperature down to ambient before packaging. Pacific Unity includes the dryer and cooler in all floating fish feed line quotations.",
  },
  {
    question: "Can Pacific Unity supply a complete fish feed production line for the UAE?",
    answer:
      "Yes, Pacific Unity supplies complete turn-key aquaculture feed production lines from our base in Ras Al Khaimah, UAE. A typical floating fish feed line includes: raw material reception and storage, hammer mill for grinding, paddle or ribbon mixer for blending, pre-conditioner, twin-screw extruder, continuous belt dryer, counter-flow cooler, oil coating drum (for adding fish oil or fat post-extrusion), and packaging system. For sinking feed, the extruder and dryer are replaced with a ring die pellet mill and standard pellet cooler. We handle the entire project — from engineering design and equipment supply through to installation, commissioning, test production, and operator training. Delivery to the UAE typically takes 4-6 weeks from confirmed order.",
  },
]

export default function FishFeedPelletMillPage() {
  return (
    <>
      <ProductSchema
        name="Fish Feed Pellet Mill & Aquaculture Feed Extruder"
        description="Fish feed pellet mills and twin-screw extruders for floating and sinking aquaculture feed production in Dubai and the UAE. 0.5-10 TPH capacity."
        image="/images/products/fish-feed-extruder.jpg"
        url="/equipment/feed-processing/pellet-mills/fish-feed/"
        category="Feed Processing Equipment"
      />
      <FAQPageSchema faqs={faqs} />
      <BreadcrumbSchema items={breadcrumbs} />

      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <Breadcrumbs items={breadcrumbs} />
      </div>

      {/* Hero */}
      <section className="bg-gradient-to-br from-background to-muted/40 px-4 pb-12 pt-8 md:px-6 md:pb-16 md:pt-12">
        <div className="mx-auto max-w-7xl">
          <h1 className="max-w-4xl text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            Fish Feed Pellet Mill Dubai — Aquaculture Feed Extruders for UAE
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-muted-foreground">
            Specialised fish feed pellet mills and twin-screw extruders for
            floating and sinking aquaculture feed. Designed for tilapia, sea
            bass, grouper, shrimp, and catfish feed production across the
            United Arab Emirates and the Middle East. Capacities from 0.5 to
            10 TPH — supplied with complete installation and operator training.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/request-quote/">
                Request a Quote <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/equipment/feed-processing/pellet-mills/">
                View All Pellet Mills
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Fish Feed Extrusion vs Pelletising */}
      <section className="px-4 py-12 md:px-6 md:py-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            title="Fish Feed Extrusion vs Pelletising — Which Do You Need?"
            subtitle="Understanding the two core technologies for aquaculture feed production."
          />
          <div className="prose max-w-none text-muted-foreground">
            <p>
              Aquaculture feed is produced using two distinct technologies, each
              suited to different species and farming practices. Understanding
              the difference is the first step to specifying the right equipment
              for your operation.
            </p>
            <p className="mt-4">
              <strong>Ring die pelletising</strong> produces dense, sinking
              pellets by compressing conditioned mash through a die at moderate
              temperatures (70-90°C). The resulting pellets have a bulk density
              of 550-700 g/L and sink immediately when placed in water. Sinking
              pellets are used for bottom-feeding species — catfish, shrimp,
              carp, and certain tilapia strains — and in cage farming
              environments where currents would carry floating feed away. A
              standard ring die pellet mill (the same type used for poultry and
              livestock feed) can produce sinking fish feed with appropriate die
              specifications.
            </p>
            <p className="mt-4">
              <strong>Twin-screw extrusion</strong> cooks the feed under high
              temperature (120-150°C) and pressure (30-60 bar) before forcing it
              through a shaping die. As the extrudate exits, the rapid pressure
              drop causes starch gelatinisation and expansion, creating a light,
              porous pellet with a bulk density of 400-550 g/L that floats on
              the water surface for 12-24 hours. Floating feed is the global
              standard for tilapia, sea bass, barramundi, grouper, and other
              surface-feeding species because it allows farmers to observe
              feeding activity and minimise waste. The high processing
              temperature also sterilises the feed, improving its
              microbiological safety.
            </p>
            <p className="mt-4">
              In the UAE, where aquaculture is a rapidly growing sector
              supported by the National Aquaculture Strategy, both sinking and
              floating feed have strong demand. Fish farms in Abu Dhabi, Ras Al
              Khaimah, and Fujairah produce a variety of species requiring
              different feed types. Pacific Unity supplies both ring die pellet
              mills for sinking feed and twin-screw extruders for floating feed
              — as well as combined lines that produce both types from a single
              facility.
            </p>
          </div>
        </div>
      </section>

      {/* Floating vs Sinking Comparison */}
      <section className="bg-muted/30 px-4 py-12 md:px-6 md:py-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            title="Floating vs Sinking Fish Feed — Comparison"
            subtitle="Choose the right pellet type based on your target species and farming method."
          />
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Feature</TableHead>
                  <TableHead>Floating Feed (Extruded)</TableHead>
                  <TableHead>Sinking Feed (Pelletised)</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">Production Method</TableCell>
                  <TableCell>Twin-screw extrusion at 120-150°C</TableCell>
                  <TableCell>Ring die pelletising at 70-90°C</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Bulk Density</TableCell>
                  <TableCell>400-550 g/L</TableCell>
                  <TableCell>550-700 g/L</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Water Stability</TableCell>
                  <TableCell>Floats 12-24 hours</TableCell>
                  <TableCell>Sinks immediately, holds shape 2-4 hours</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Feed Waste</TableCell>
                  <TableCell>Lower — uneaten feed visible on surface</TableCell>
                  <TableCell>Higher — uneaten feed hidden on bottom</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">
                    Equipment Required
                  </TableCell>
                  <TableCell>Extruder + dryer + cooler</TableCell>
                  <TableCell>Pellet mill + cooler</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">
                    Energy Consumption
                  </TableCell>
                  <TableCell>Higher (cooking + drying)</TableCell>
                  <TableCell>Lower (compression only)</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Target Species</TableCell>
                  <TableCell>
                    Tilapia, sea bass, grouper, barramundi
                  </TableCell>
                  <TableCell>Catfish, shrimp, carp, bottom feeders</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">
                    Equipment Investment
                  </TableCell>
                  <TableCell>Higher</TableCell>
                  <TableCell>Lower</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </section>

      {/* UAE Aquaculture Growth */}
      <section className="px-4 py-12 md:px-6 md:py-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            title="UAE Aquaculture Growth — Why Local Feed Production Matters"
            subtitle="The UAE's expanding aquaculture sector creates strong demand for locally manufactured fish feed."
          />
          <div className="prose max-w-none text-muted-foreground">
            <p>
              The United Arab Emirates imports over 85% of its seafood
              consumption, making food security a national priority. The UAE
              National Aquaculture Strategy aims to significantly increase
              domestic fish production through both marine and land-based
              aquaculture operations. Fish farms are now established across Abu
              Dhabi, Ras Al Khaimah, Fujairah, and the eastern coastline,
              producing tilapia, sea bass, grouper, shrimp, and other
              commercially valuable species.
            </p>
            <p className="mt-4">
              Locally manufactured fish feed offers several advantages over
              imported feed for UAE aquaculture operations. Formulations can be
              optimised for UAE water temperatures (typically 25-35°C), which
              affect fish metabolism and nutrient requirements. Local production
              eliminates the 4-8 week lead time and shipping costs associated
              with importing feed from Southeast Asia or Europe. And local
              producers can respond quickly to changes in species mix, growth
              stage requirements, and raw material availability.
            </p>
            <p className="mt-4">
              Pacific Unity has experience supplying fish feed production
              equipment to the Middle East and Africa region, including the
              Yedid Agro project in Sunyani, Ghana — a combined poultry and
              fish feed plant featuring a ring die pellet mill for sinking
              poultry and fish feed alongside a twin-screw extruder for floating
              fish feed. This dual-capability approach is increasingly popular
              with entrepreneurs in the UAE who want to serve both the poultry
              and aquaculture sectors from a single facility.
            </p>
          </div>
        </div>
      </section>

      {/* Equipment Range */}
      <section className="bg-muted/30 px-4 py-12 md:px-6 md:py-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            title="Fish Feed Equipment Range"
            subtitle="Ring die pellet mills for sinking feed and twin-screw extruders for floating feed."
          />
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Model</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Output</TableHead>
                  <TableHead>Capacity</TableHead>
                  <TableHead>Power</TableHead>
                  <TableHead>Pellet Size</TableHead>
                  <TableHead>Application</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {equipmentRange.map((m) => (
                  <TableRow key={m.model}>
                    <TableCell className="font-medium">{m.model}</TableCell>
                    <TableCell>{m.type}</TableCell>
                    <TableCell>{m.output}</TableCell>
                    <TableCell>{m.capacity}</TableCell>
                    <TableCell>{m.power}</TableCell>
                    <TableCell>{m.pelletSize}</TableCell>
                    <TableCell>{m.application}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            Capacities based on standard tilapia feed formulation. Actual
            throughput varies by formulation, pellet size, and moisture content.
            Request a quote for pricing on any model.
          </p>
        </div>
      </section>

      {/* Key Features */}
      <section className="px-4 py-12 md:px-6 md:py-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            title="Key Features of Pacific Unity Fish Feed Equipment"
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Twin-screw extruders with independent screw speed control for precise expansion and buoyancy adjustment",
              "Interchangeable dies for pellet sizes from 1.5 mm (fingerling) to 14 mm (large fish)",
              "PLC touchscreen control with recipe storage for multiple species and growth stages",
              "Stainless steel contact surfaces for food-grade hygiene and corrosion resistance",
              "Steam and water injection systems for precise moisture and temperature control",
              "Oil coating drum available for post-extrusion fat and enzyme application",
              "Complete lines available: grinding, mixing, extrusion/pelletising, drying, cooling, and packaging",
              "Designed for UAE climate — all electrical components rated for 50°C ambient operation",
            ].map((feat) => (
              <div key={feat} className="flex items-start gap-3">
                <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span className="text-sm text-muted-foreground">{feat}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Equipment */}
      <section className="bg-muted/30 px-4 py-12 md:px-6 md:py-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeading title="Related Equipment" />
          <div className="grid gap-6 sm:grid-cols-3">
            {[
              {
                title: "Gear Drive Pellet Mills",
                desc: "Heavy-duty pelletisers for large-scale feed production including sinking aquafeed.",
                href: "/equipment/feed-processing/pellet-mills/gear-drive/",
              },
              {
                title: "Belt Driven Pellet Mills",
                desc: "Cost-effective pelletisers for small-scale sinking fish feed production.",
                href: "/equipment/feed-processing/pellet-mills/belt-driven/",
              },
              {
                title: "All Pellet Mills",
                desc: "Complete pellet mill range with capacity comparison and guide.",
                href: "/equipment/feed-processing/pellet-mills/",
              },
            ].map((rel) => (
              <Link key={rel.href} href={rel.href} className="group">
                <Card className="h-full transition-shadow hover:shadow-lg">
                  <CardContent className="p-5">
                    <h3 className="font-semibold group-hover:text-primary transition-colors">
                      {rel.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {rel.desc}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-12 md:px-6 md:py-16">
        <div className="mx-auto max-w-3xl">
          <SectionHeading title="Frequently Asked Questions — Fish Feed Equipment" />
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 pb-12 md:px-6 md:pb-16">
        <div className="mx-auto max-w-7xl">
          <CTAStrip
            title="Planning a Fish Feed Production Facility?"
            description="Tell us about your target species, daily production volume, and whether you need floating feed, sinking feed, or both. We will design the right production line for your aquaculture operation."
            whatsappMessage="Hi, I'm interested in fish feed production equipment for aquaculture in the UAE. Can you help with specifications?"
          />
        </div>
      </section>
    </>
  )
}
