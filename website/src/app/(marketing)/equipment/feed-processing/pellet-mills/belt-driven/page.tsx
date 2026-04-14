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
    "Belt Driven Pellet Mill Dubai UAE — Cost-Effective Feed Pelletisers",
  description:
    "Belt driven pellet mills for small-to-medium animal feed production in Dubai UAE. Affordable ring die pelletisers from 1-5 TPH. Request a quote from Pacific Unity.",
  keywords: [
    "belt driven pellet mill",
    "belt drive pellet mill Dubai",
    "small pellet mill UAE",
    "affordable feed pelletiser",
    "ring die pellet mill belt driven",
    "farm pellet mill Dubai",
  ],
  alternates: {
    canonical:
      "https://pacificunity.ae/equipment/feed-processing/pellet-mills/belt-driven/",
  },
}

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "Equipment", href: "/equipment/" },
  { name: "Feed Processing", href: "/equipment/feed-processing/" },
  { name: "Pellet Mills", href: "/equipment/feed-processing/pellet-mills/" },
  {
    name: "Belt Driven",
    href: "/equipment/feed-processing/pellet-mills/belt-driven/",
  },
]

const beltDrivenModels = [
  {
    model: "PU-BD-1",
    capacity: "1-2 TPH",
    power: "22-37 kW",
    dieDia: "250 mm",
    belts: "5 × B-section",
    application: "Small poultry farm, starter operation",
  },
  {
    model: "PU-BD-2",
    capacity: "1.5-3 TPH",
    power: "30-45 kW",
    dieDia: "320 mm",
    belts: "6 × B-section",
    application: "Medium farm, single-species production",
  },
  {
    model: "PU-BD-3",
    capacity: "2-4 TPH",
    power: "37-55 kW",
    dieDia: "350 mm",
    belts: "6 × C-section",
    application: "Multi-species farm, small commercial mill",
  },
  {
    model: "PU-BD-5",
    capacity: "3-5 TPH",
    power: "55-75 kW",
    dieDia: "420 mm",
    belts: "8 × C-section",
    application: "Commercial starter mill, cooperative",
  },
]

const faqs = [
  {
    question: "What is a belt driven pellet mill and how does it differ from gear drive?",
    answer:
      "A belt driven pellet mill uses V-belts and pulleys to transmit power from the electric motor to the main shaft that rotates the ring die. This differs from a gear drive pellet mill, which uses a hardened steel gearbox for direct mechanical coupling. The belt system is simpler, more affordable to manufacture and maintain, and provides inherent overload protection — if the pellet mill encounters a blockage or excessive load, the belts slip before mechanical damage occurs. Belt driven models are typically available in capacities from 1-5 TPH and are ideal for farm-level operations, start-up feed mills, and budget-conscious projects across the UAE and the Middle East region.",
  },
  {
    question: "What capacity range is available in belt driven pellet mills?",
    answer:
      "Pacific Unity supplies belt driven pellet mills in four standard models covering 1-5 TPH. The PU-BD-1 at 1-2 TPH suits small poultry farms with 50,000-100,000 birds. The PU-BD-2 at 1.5-3 TPH serves medium farms or single-species operations. The PU-BD-3 at 2-4 TPH handles multi-species formulations for larger farms. The PU-BD-5 at 3-5 TPH is our largest belt driven model, suitable for small commercial mills and cooperatives. For capacities above 5 TPH, we recommend upgrading to a gear drive pellet mill, which provides the torque and energy efficiency needed for sustained high-volume production.",
  },
  {
    question: "Is a belt driven pellet mill suitable for commercial feed production?",
    answer:
      "Belt driven pellet mills are suitable for small-to-medium commercial operations producing up to 5 TPH. They are widely used in start-up feed mills, farmer cooperatives, and single-farm operations throughout the Middle East and Africa. However, for larger commercial feed mills operating above 5 TPH or running 16-24 hours per day, a gear drive pellet mill is the better choice due to its higher energy efficiency, greater torque capacity, and longer service life under continuous heavy loads. Many operators in the UAE start with a belt driven model and upgrade to gear drive as their production volume grows.",
  },
  {
    question: "How much does a belt driven pellet mill cost?",
    answer:
      "Belt driven pellet mills have a lower initial investment than gear drive equivalents, making them attractive for start-up operations and farm-level producers. Request a quote for pricing on any model in our range. Pacific Unity provides complete quotations covering the pellet mill unit, ring die, roller shells, conditioner, motor, and all standard accessories. We also offer bundled turn-key feed line packages that include a hammer mill, mixer, pellet mill, cooler, and bagging system — ideal for entrepreneurs entering the feed manufacturing business in the UAE or across the wider region.",
  },
  {
    question: "How often do the belts need replacing on a belt driven pellet mill?",
    answer:
      "V-belts on a belt driven pellet mill typically need replacement every 2,000-4,000 operating hours, depending on load conditions, belt tension maintenance, and ambient temperature. In the UAE, where workshop temperatures can exceed 45°C, belt life tends to be at the lower end of this range because heat accelerates rubber degradation. Regular tension checks — recommended weekly — help extend belt life and prevent slippage, which reduces both power transmission efficiency and belt longevity. Pacific Unity supplies replacement belts from stock in the UAE and includes belt maintenance in our standard operator training programme.",
  },
  {
    question: "Can I upgrade from a belt driven to a gear drive pellet mill later?",
    answer:
      "Yes, upgrading from belt driven to gear drive is a common growth path for feed producers in the UAE and Africa. Pacific Unity designs production line layouts with future expansion in mind, so the pellet mill station can accommodate a larger gear drive unit without redesigning the entire feed mill. The upstream equipment (hammer mill, mixer, conveyors) may also need upgrading depending on the capacity increase. We recommend discussing your long-term production targets during the initial consultation so we can future-proof the layout and utility infrastructure from the start.",
  },
  {
    question: "What maintenance does a belt driven pellet mill require?",
    answer:
      "Daily maintenance includes greasing roller bearings and main shaft bearings, checking belt tension, and inspecting the die and rollers for wear. Weekly tasks include checking belt condition for cracks or fraying, verifying pulley alignment, and cleaning the conditioner. Monthly maintenance covers a thorough inspection of all wear parts, lubrication of all moving components, and electrical system checks. V-belts should be replaced as a complete set every 2,000-4,000 hours. Ring dies last 1,500-3,000 hours and roller shells 1,000-2,000 hours depending on the formulation. Pacific Unity supplies all consumable spares from stock in the UAE.",
  },
  {
    question: "What is the energy consumption of a belt driven pellet mill?",
    answer:
      "Belt driven pellet mills consume approximately 25-40 kWh per tonne of feed produced, depending on the model, formulation, and pellet size. This is approximately 10-15% higher than an equivalent-capacity gear drive model because V-belt power transmission is inherently less efficient (88-92% vs 95-97%). For a 2 TPH belt driven pellet mill running 8 hours per day, daily energy consumption is approximately 400-640 kWh. At UAE commercial electricity rates, this represents a manageable operating cost for farm-level producers. For operations where energy cost is a significant factor, Pacific Unity can specify IE3 or IE4 high-efficiency motors and optimise the drive ratio to minimise consumption.",
  },
]

export default function BeltDrivenPelletMillPage() {
  return (
    <>
      <ProductSchema
        name="Belt Driven Pellet Mill — Cost-Effective Feed Pelletiser"
        description="Belt driven ring die pellet mills for small-to-medium animal feed production in the UAE. 1-5 TPH capacity with V-belt power transmission."
        image="/images/products/belt-driven-pellet-mill.jpg"
        url="/equipment/feed-processing/pellet-mills/belt-driven/"
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
            Belt Driven Pellet Mill Dubai UAE — Cost-Effective Feed Pelletisers
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-muted-foreground">
            Affordable belt driven ring die pellet mills for farm-level and
            small commercial feed production. Capacities from 1 to 5 TPH —
            the practical choice for start-up feed operations, farmer
            cooperatives, and single-farm installations across the UAE and the
            Middle East.
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

      {/* How Belt Drive Works */}
      <section className="px-4 py-12 md:px-6 md:py-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            title="How a Belt Driven Pellet Mill Works"
            subtitle="Simple, reliable power transmission suited to small and medium production volumes."
          />
          <div className="prose max-w-none text-muted-foreground">
            <p>
              A belt driven pellet mill transmits rotational power from the
              electric motor to the main shaft using a set of matched V-belts
              running on precision-machined pulleys. The motor pulley (smaller
              diameter) is connected to the main shaft pulley (larger diameter)
              by typically 5-8 V-belts depending on the model and power
              requirement. The pulley ratio reduces motor speed from 1,450 RPM
              to the optimal ring die speed of 150-250 RPM.
            </p>
            <p className="mt-4">
              The belt drive system offers several practical advantages for
              smaller operations. First, it provides inherent overload
              protection — if the pelletising chamber encounters a blockage or
              an unusually dense batch of material, the belts will slip rather
              than transmitting the shock load through to the motor or bearings.
              This prevents costly mechanical damage that could occur in a rigid
              gear drive system without electronic overload protection. Second,
              belt driven models are simpler to maintain — replacing worn belts
              is a straightforward task that most feed mill operators can perform
              in-house.
            </p>
            <p className="mt-4">
              In the UAE market, belt driven pellet mills are popular with
              emerging feed producers who want to validate their business model
              before investing in a larger gear drive installation. Farms and
              cooperatives in Ras Al Khaimah, Fujairah, and Al Ain frequently
              start with a 1-3 TPH belt driven pellet mill to produce feed for
              their own livestock, then upgrade to a higher-capacity gear drive
              unit once production volumes justify the investment. Pacific Unity
              supports this growth path by designing production line layouts
              that accommodate future equipment upgrades.
            </p>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="bg-muted/30 px-4 py-12 md:px-6 md:py-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            title="Why Choose a Belt Driven Pellet Mill?"
            subtitle="The practical and cost-effective entry point for animal feed production."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Lower initial investment — ideal for start-up operations and limited budgets",
              "Built-in overload protection — belt slippage prevents mechanical damage during blockages",
              "Simple maintenance — belt replacement is a straightforward task requiring basic tools",
              "Proven reliability — V-belt drive technology has been used in feed mills for over 50 years",
              "Quick installation — belt driven models can be commissioned faster than gear drive units",
              "Scalable — start small and upgrade to gear drive as production volume grows",
              "Suitable for intermittent operation — ideal for farms running 6-10 hours per day",
              "Lower spare parts cost — V-belts and pulleys are inexpensive and universally available",
            ].map((feat) => (
              <div key={feat} className="flex items-start gap-3">
                <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span className="text-sm text-muted-foreground">{feat}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="px-4 py-12 md:px-6 md:py-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            title="Belt Driven vs Gear Drive — Quick Comparison"
            subtitle="Choose the right drive type based on your production scale and operational requirements."
          />
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Feature</TableHead>
                  <TableHead>Belt Driven</TableHead>
                  <TableHead>Gear Drive</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">Capacity Range</TableCell>
                  <TableCell>1-5 TPH</TableCell>
                  <TableCell>3-20+ TPH</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">
                    Energy Efficiency
                  </TableCell>
                  <TableCell>88-92%</TableCell>
                  <TableCell>95-97%</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">
                    Initial Investment
                  </TableCell>
                  <TableCell>Lower</TableCell>
                  <TableCell>Higher</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">
                    Operating Cost per Tonne
                  </TableCell>
                  <TableCell>Slightly higher</TableCell>
                  <TableCell>Lower</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">
                    Overload Protection
                  </TableCell>
                  <TableCell>Built-in (belt slip)</TableCell>
                  <TableCell>Requires electronic protection</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Service Life</TableCell>
                  <TableCell>10-15 years</TableCell>
                  <TableCell>15-25 years</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Best For</TableCell>
                  <TableCell>Farms, start-ups, cooperatives</TableCell>
                  <TableCell>Commercial mills, 24/7 operations</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            Need help choosing?{" "}
            <Link
              href="/request-quote/"
              className="text-primary underline"
            >
              Request a free consultation
            </Link>{" "}
            — our team will recommend the optimal configuration based on your
            production targets and budget.
          </p>
        </div>
      </section>

      {/* Model Range */}
      <section className="bg-muted/30 px-4 py-12 md:px-6 md:py-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            title="Belt Driven Pellet Mill Model Range"
            subtitle="Available from 1 TPH to 5 TPH for farm-level and small commercial production."
          />
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Model</TableHead>
                  <TableHead>Capacity</TableHead>
                  <TableHead>Motor Power</TableHead>
                  <TableHead>Die Diameter</TableHead>
                  <TableHead>Belts</TableHead>
                  <TableHead>Application</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {beltDrivenModels.map((m) => (
                  <TableRow key={m.model}>
                    <TableCell className="font-medium">{m.model}</TableCell>
                    <TableCell>{m.capacity}</TableCell>
                    <TableCell>{m.power}</TableCell>
                    <TableCell>{m.dieDia}</TableCell>
                    <TableCell>{m.belts}</TableCell>
                    <TableCell>{m.application}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            Capacities are based on standard poultry feed (corn-soya) with a
            3.5 mm die. Request a quote for pricing and detailed specifications
            on any model.
          </p>
        </div>
      </section>

      {/* Related Equipment */}
      <section className="px-4 py-12 md:px-6 md:py-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeading title="Related Equipment" />
          <div className="grid gap-6 sm:grid-cols-3">
            {[
              {
                title: "Gear Drive Pellet Mills",
                desc: "Heavy-duty gear drive pelletisers for 3-20+ TPH commercial production.",
                href: "/equipment/feed-processing/pellet-mills/gear-drive/",
              },
              {
                title: "Fish Feed Extruders",
                desc: "Twin-screw extruders for floating and sinking aquaculture feed.",
                href: "/equipment/feed-processing/pellet-mills/fish-feed/",
              },
              {
                title: "Hammer Mills",
                desc: "Feed grinding equipment to prepare raw materials before pelletising.",
                href: "/equipment/feed-processing/hammer-mills/",
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
      <section className="bg-muted/30 px-4 py-12 md:px-6 md:py-16">
        <div className="mx-auto max-w-3xl">
          <SectionHeading title="Frequently Asked Questions — Belt Driven Pellet Mills" />
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 pb-12 md:px-6 md:pb-16">
        <div className="mx-auto max-w-7xl">
          <CTAStrip
            title="Start Your Feed Production with a Belt Driven Pellet Mill"
            description="Tell us about your farm size, target species, and daily feed requirements. We will recommend the right belt driven model and help you plan a complete production line."
            whatsappMessage="Hi, I'm interested in a belt driven pellet mill for small-scale feed production. Can you help?"
          />
        </div>
      </section>
    </>
  )
}
