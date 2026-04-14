import type { Metadata } from "next"
import Link from "next/link"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import { BreadcrumbSchema } from "@/components/seo/schema/breadcrumb"
import { ProductSchema } from "@/components/seo/schema/product"
import { FAQPageSchema } from "@/components/seo/schema/faq-page"
import { FAQAccordion } from "@/components/shared/faq-accordion"
import { CTAStrip } from "@/components/shared/cta-strip"
import { SectionHeading } from "@/components/shared/section-heading"
import { Badge } from "@/components/ui/badge"
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
import {
  ArrowRight,
  Cog,
  Fish,
  Drumstick,
  Wheat,
  ShieldCheck,
  Zap,
  Settings,
} from "lucide-react"

export const metadata: Metadata = {
  title:
    "Animal Feed Pellet Mill Dubai UAE — Gear Drive & Belt Driven Pellet Mills",
  description:
    "Animal feed pellet mills in Dubai UAE — gear drive and belt driven ring die pellet mills for poultry, livestock, and aquaculture feed. 1-20 TPH capacity. Request a quote from Pacific Unity.",
  keywords: [
    "animal feed pellet mill",
    "pellet mill Dubai",
    "feed pellet mill UAE",
    "gear drive pellet mill",
    "belt driven pellet mill",
    "ring die pellet mill",
    "poultry feed pellet mill Dubai",
    "livestock feed pelletiser UAE",
  ],
  alternates: {
    canonical:
      "https://pacificunity.ae/equipment/feed-processing/pellet-mills/",
  },
}

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "Equipment", href: "/equipment/" },
  { name: "Feed Processing", href: "/equipment/feed-processing/" },
  {
    name: "Pellet Mills",
    href: "/equipment/feed-processing/pellet-mills/",
  },
]

const capacityData = [
  {
    model: "PU-PM-1",
    drive: "Belt",
    capacity: "1-2 TPH",
    power: "22-37 kW",
    dieDia: "250 mm",
    application: "Small poultry farm, starter plant",
  },
  {
    model: "PU-PM-3",
    drive: "Belt",
    capacity: "2-4 TPH",
    power: "37-55 kW",
    dieDia: "320 mm",
    application: "Medium poultry or cattle farm",
  },
  {
    model: "PU-PM-5",
    drive: "Gear",
    capacity: "3-6 TPH",
    power: "55-90 kW",
    dieDia: "420 mm",
    application: "Commercial feed plant, multi-species",
  },
  {
    model: "PU-PM-8",
    drive: "Gear",
    capacity: "5-10 TPH",
    power: "90-132 kW",
    dieDia: "508 mm",
    application: "Large-scale feed mill, integrator",
  },
  {
    model: "PU-PM-12",
    drive: "Gear",
    capacity: "8-15 TPH",
    power: "132-185 kW",
    dieDia: "520 mm",
    application: "High-volume commercial production",
  },
  {
    model: "PU-PM-20",
    drive: "Gear",
    capacity: "12-20 TPH",
    power: "185-250 kW",
    dieDia: "600 mm",
    application: "Major integrator, export-grade plant",
  },
]

const faqs = [
  {
    question: "What is an animal feed pellet mill and how does it work?",
    answer:
      "An animal feed pellet mill is a machine that compresses mash feed into dense, uniform cylindrical pellets by forcing the material through holes in a rotating ring die. The mash is first conditioned with steam in a pre-conditioner to raise its temperature to 70-85°C and moisture content to 15-17%. It then enters the pelletising chamber where two or three press rollers push the conditioned material through the die holes under high pressure (typically 100-300 bar). The friction and compression generate additional heat that binds the feed particles together, producing durable pellets that exit through the die and are cut to the desired length by adjustable knives mounted on the outside of the die.",
  },
  {
    question:
      "What is the difference between a gear drive and a belt driven pellet mill?",
    answer:
      "A gear drive pellet mill transmits power from the motor to the main shaft through a hardened alloy steel gearbox, providing direct mechanical coupling with minimal energy loss. This design handles higher torque and is preferred for capacities above 5 TPH. A belt driven pellet mill uses V-belts and pulleys to transfer power, which provides a degree of overload protection through belt slippage and is simpler to maintain. Belt driven models are typically more affordable and suit capacities from 1-5 TPH. Gear drive units deliver 10-15% better energy efficiency at equivalent throughput and have a longer service life under continuous heavy-duty operation, making them the standard choice for commercial feed mills in the UAE and the wider Middle East region.",
  },
  {
    question: "What capacity pellet mill do I need for my feed production?",
    answer:
      "The required pellet mill capacity depends on your daily feed demand and operating hours. As a guideline: a small poultry farm producing feed for 50,000-100,000 birds needs a 1-3 TPH pellet mill running 8-10 hours per day. A medium commercial operation serving 200,000-500,000 birds or multi-species formulations typically requires 5-8 TPH. Large integrators and commercial feed mills producing for multiple farms need 10-20 TPH. In the UAE and wider Gulf region, most new feed mill projects specify 3-8 TPH capacity to serve the growing demand for locally produced animal feed. Pacific Unity conducts a production assessment to recommend the optimal pellet mill size for your specific throughput targets.",
  },
  {
    question: "How much does a feed pellet mill cost in Dubai?",
    answer:
      "Feed pellet mill costs vary significantly depending on capacity, drive type, and the level of automation included. Request a quote for pricing on any model in our range. Pacific Unity provides detailed quotations that include the pellet mill unit, ring die, roller shells, conditioner, and all standard accessories. We also quote complete turn-key feed mill lines including hammer mills, mixers, coolers, and packaging — so you receive a single delivered price for the entire production line. Our team in the UAE will assess your requirements and provide a transparent quotation with no hidden costs.",
  },
  {
    question: "What types of animal feed can a pellet mill produce?",
    answer:
      "A ring die pellet mill can process a wide range of animal feed formulations including poultry feed (broiler starter, grower, finisher, and layer feed), cattle and dairy feed, sheep and goat feed, camel feed, horse feed, and aquaculture feed (with appropriate die specifications). The pellet diameter is determined by the die hole size — typically 2-3 mm for shrimp and fingerling fish, 3-4 mm for poultry, 4-6 mm for cattle and small ruminants, and 6-12 mm for camels and horses. Pacific Unity supplies interchangeable ring dies for each pellet size, allowing a single machine to produce multiple feed types with a die change taking approximately 30-60 minutes.",
  },
  {
    question: "What is the complete equipment line needed for a feed pellet plant?",
    answer:
      "A complete animal feed pellet production line consists of several stages: raw material reception and storage (silos and conveyors), grinding (hammer mill to reduce particle size to 0.5-2 mm), batching and mixing (automatic or manual batching system plus a paddle or ribbon mixer for uniform formulation blending), conditioning and pelletising (steam conditioner and ring die pellet mill), cooling (counter-flow cooler to reduce pellet temperature from 80°C to ambient), screening (vibrating screen to separate fines for recirculation), and packaging (bagging machine). Optional additions include a crumbler for producing crumble feed from pellets, liquid coating systems for adding fats or enzymes, and a twin-screw extruder for floating aquaculture feed.",
  },
  {
    question: "How long does it take to deliver and install a pellet mill in the UAE?",
    answer:
      "Typical lead time for a pellet mill delivered to the UAE is 4-6 weeks from confirmed order. This includes manufacturing (2-3 weeks), shipping from the factory to the UAE port (2-3 weeks), and customs clearance (3-5 days). On-site installation and commissioning for a standalone pellet mill takes 3-5 days. For a complete feed mill line, installation typically takes 2-4 weeks depending on capacity and complexity. Pacific Unity manages the entire logistics chain from factory to your site — including freight forwarding, UAE customs clearance, unloading, installation, commissioning, and operator training. Our project team in Ras Al Khaimah coordinates the full process.",
  },
  {
    question: "What maintenance does a feed pellet mill require?",
    answer:
      "Regular pellet mill maintenance includes daily greasing of roller bearings and main shaft bearings, weekly inspection of die and roller wear, and monthly checks of belt tension (belt driven models) or gearbox oil level (gear drive models). Ring dies typically last 1,500-3,000 operating hours depending on the feed formulation and raw material abrasiveness — high-mineral content feeds such as those for aquaculture wear dies faster. Roller shells are replaced every 1,000-2,000 hours. Annual servicing should include a full gearbox oil change, bearing replacement if needed, and calibration of the gap between rollers and die. Pacific Unity supplies all consumable spares — including ring dies, roller shells, and bearings — from stock in the UAE, and offers annual maintenance contracts.",
  },
  {
    question: "Can a pellet mill handle high-fibre ingredients like grass meal or alfalfa?",
    answer:
      "Yes, ring die pellet mills can process high-fibre ingredients, but the die specification and conditioning parameters must be adjusted accordingly. High-fibre materials such as grass meal, alfalfa, and agricultural crop residues require a die with a higher compression ratio (typically 1:10 to 1:14 compared to 1:6 to 1:8 for standard poultry feed). Steam conditioning temperature should be increased to 80-90°C, and the roller gap may need to be widened slightly to prevent blockages. Throughput with high-fibre formulations is typically 20-40% lower than standard feed because the material is harder to compress. Pacific Unity can specify the correct die compression ratio and conditioning parameters for your specific formulation.",
  },
  {
    question: "Does Pacific Unity provide after-sales support for pellet mills in the UAE?",
    answer:
      "Yes, Pacific Unity provides comprehensive after-sales support from our base in Ras Al Khaimah, UAE. This includes a standard 1-year warranty covering manufacturing defects, on-site technical support for troubleshooting and optimisation, spare parts supply (ring dies, roller shells, bearings, belts, and electrical components), operator and maintenance training, and annual service contracts. We have supported over 200 projects across 9 countries in the Middle East and Africa, so our technical team has extensive experience with the specific challenges of feed production in hot, humid climates — including dust management, ambient temperature effects on conditioning, and raw material variability common in the region.",
  },
]

export default function PelletMillsPage() {
  return (
    <>
      <ProductSchema
        name="Animal Feed Pellet Mill — Gear Drive & Belt Driven"
        description="Ring die animal feed pellet mills for poultry, livestock, and aquaculture feed production in the UAE. Gear drive and belt driven models from 1-20 TPH capacity."
        image="/images/products/pellet-mill.jpg"
        url="/equipment/feed-processing/pellet-mills/"
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
          <Badge variant="secondary" className="mb-4">
            6,600 Global Monthly Searches
          </Badge>
          <h1 className="max-w-4xl text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            Animal Feed Pellet Mill Dubai UAE — Gear Drive &amp; Belt Driven
            Pellet Mills
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-muted-foreground">
            Industrial ring die pellet mills for poultry, livestock, and
            aquaculture feed production across the United Arab Emirates and the
            wider Middle East and Africa. Gear drive and belt driven
            configurations from 1 to 20 TPH — supplied, installed, and
            supported by Pacific Unity from our base in Ras Al Khaimah.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/request-quote/">
                Request a Quote <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/equipment/feed-processing/pellet-mills/gear-drive/">
                Gear Drive Models
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* What Is a Pellet Mill */}
      <section className="px-4 py-12 md:px-6 md:py-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            title="What Is a Feed Pellet Mill?"
            subtitle="The core machine in any animal feed production line — converting mash into dense, nutritious pellets."
          />
          <div className="prose max-w-none text-muted-foreground">
            <p>
              A feed pellet mill — also known as a pelletiser or pellet press —
              is a machine that compresses loose mash feed ingredients into
              compact, cylindrical pellets. Pelletising improves feed conversion
              ratios by 10-15% compared to feeding raw mash, reduces feed
              wastage, eliminates ingredient segregation, and makes feed easier
              to handle, transport, and store. Every commercial poultry
              integrator, cattle feedlot, and aquaculture hatchery in the world
              relies on pellet mills to produce consistent, high-quality feed.
            </p>
            <p className="mt-4">
              In the UAE and the broader Middle East and Africa region, demand
              for locally manufactured animal feed has grown significantly over
              the past decade. The UAE alone imports over 90% of its food
              requirements, and government initiatives — including the National
              Food Security Strategy 2051 — are driving investment in domestic
              feed milling and livestock production capacity. A pellet mill is
              the centrepiece of any feed production operation, whether it is a
              small 1 TPH farm-level unit or a 20 TPH commercial feed mill
              supplying multiple poultry farms across the Gulf region.
            </p>
            <p className="mt-4">
              Pacific Unity supplies both gear drive and belt driven ring die
              pellet mills from our base in Ras Al Khaimah, UAE. Our parent
              company, North Star Impex (Singapore, est. 2013), sources
              equipment from established manufacturers with proven track records
              in the tropics and arid climates that characterise the Middle East
              and African markets. With over 200 completed projects across 9
              countries, we understand the specific requirements of feed
              production in this region — from high ambient temperatures
              affecting steam conditioning to the particular raw material
              profiles available in the Gulf.
            </p>
          </div>
        </div>
      </section>

      {/* How Ring Die Pellet Mills Work */}
      <section className="bg-muted/30 px-4 py-12 md:px-6 md:py-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            title="How Ring Die Pellet Mills Work"
            subtitle="A step-by-step breakdown of the pelletising process from mash to finished pellet."
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardContent className="p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                  1
                </div>
                <h3 className="mt-4 text-lg font-semibold">
                  Steam Conditioning
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Dry mash feed enters the conditioner — a cylindrical chamber
                  with paddle shafts — where it is mixed with live steam. This
                  raises the temperature to 70-85°C and moisture content to
                  15-17%, gelatinising starches and softening fibres. Proper
                  conditioning is the single most important factor in pellet
                  quality and die life. In the UAE&apos;s arid climate, where
                  ambient raw material moisture can be as low as 8-10%, thorough
                  steam conditioning is essential.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                  2
                </div>
                <h3 className="mt-4 text-lg font-semibold">
                  Die &amp; Roller Compression
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  The conditioned mash falls into the pelletising chamber, where
                  it is distributed across the inner surface of a rotating ring
                  die. Two or three stationary press rollers compress the
                  material through the die holes at pressures of 100-300 bar.
                  The friction generates heat (up to 90°C at the die face) that
                  further binds the feed particles. Die hole diameter determines
                  pellet size — typically 2-12 mm depending on the target animal
                  species.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                  3
                </div>
                <h3 className="mt-4 text-lg font-semibold">
                  Pellet Cutting &amp; Discharge
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  As the compressed material exits through the outer face of the
                  ring die, adjustable cutter knives mounted on the outside trim
                  the pellets to the desired length. Pellet length is controlled
                  by the knife position relative to the die surface and the
                  rotational speed. The freshly formed pellets — hot and moist
                  at approximately 80°C and 16% moisture — drop into a discharge
                  chute leading to the cooler.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                  4
                </div>
                <h3 className="mt-4 text-lg font-semibold">
                  Counter-Flow Cooling
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Hot pellets enter a counter-flow cooler where ambient air is
                  drawn upward through the descending pellet bed. This reduces
                  temperature to within 5°C of ambient and moisture to 12-13% —
                  safe for storage without mould growth. In the UAE, where
                  ambient temperatures regularly exceed 40°C in summer, coolers
                  must be sized generously to achieve adequate cooling. Properly
                  cooled pellets are hard, durable, and produce minimal fines
                  during handling.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                  5
                </div>
                <h3 className="mt-4 text-lg font-semibold">
                  Screening &amp; Fines Recirculation
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Cooled pellets pass over a vibrating screen that separates
                  undersized particles (fines) from the finished product. Fines
                  are returned to the pellet mill feed hopper for re-processing,
                  ensuring no material is wasted. A well-tuned pellet mill
                  should produce less than 5% fines. High fines rates indicate
                  issues with conditioning, die condition, or formulation that
                  need to be addressed.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                  6
                </div>
                <h3 className="mt-4 text-lg font-semibold">
                  Bagging or Bulk Storage
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Finished pellets are conveyed to either a bagging station
                  (typically 25-50 kg bags) or bulk storage bins for dispatch.
                  In the UAE market, most feed is distributed in 50 kg bags for
                  smaller farms and bulk tanker delivery for large integrators.
                  Automated bagging systems with weighing, sealing, and
                  palletising are available for high-volume operations producing
                  more than 5 TPH.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Gear Drive vs Belt Driven */}
      <section className="px-4 py-12 md:px-6 md:py-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            title="Gear Drive vs Belt Driven Pellet Mills"
            subtitle="Choosing the right drive system depends on your production scale, budget, and long-term operational plans."
          />
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Feature</TableHead>
                  <TableHead>Gear Drive Pellet Mill</TableHead>
                  <TableHead>Belt Driven Pellet Mill</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">
                    Power Transmission
                  </TableCell>
                  <TableCell>
                    Hardened alloy steel gearbox — direct mechanical coupling
                  </TableCell>
                  <TableCell>
                    V-belt and pulley system — flexible coupling
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">
                    Energy Efficiency
                  </TableCell>
                  <TableCell>
                    95-97% — minimal transmission loss
                  </TableCell>
                  <TableCell>
                    88-92% — some loss through belt friction and slippage
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">
                    Typical Capacity
                  </TableCell>
                  <TableCell>3-20+ TPH</TableCell>
                  <TableCell>1-5 TPH</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Torque Handling</TableCell>
                  <TableCell>
                    Superior — handles high-torque loads without slip
                  </TableCell>
                  <TableCell>
                    Moderate — belt slippage provides overload protection
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Maintenance</TableCell>
                  <TableCell>
                    Gearbox oil changes every 3,000-5,000 hours
                  </TableCell>
                  <TableCell>
                    Belt replacement every 2,000-4,000 hours
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Service Life</TableCell>
                  <TableCell>15-25 years with proper maintenance</TableCell>
                  <TableCell>10-15 years with proper maintenance</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">
                    Initial Investment
                  </TableCell>
                  <TableCell>Higher — premium gearbox and components</TableCell>
                  <TableCell>
                    Lower — simpler drive system
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Best For</TableCell>
                  <TableCell>
                    Commercial feed mills, 24/7 operation, high-capacity plants
                  </TableCell>
                  <TableCell>
                    Farm-level production, start-up operations, budget-conscious
                    projects
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            Not sure which drive type suits your operation?{" "}
            <Link
              href="/request-quote/"
              className="text-primary underline"
            >
              Request a free consultation
            </Link>{" "}
            and our technical team will recommend the best configuration based on
            your production targets and budget.
          </p>
        </div>
      </section>

      {/* Capacity Table */}
      <section className="bg-muted/30 px-4 py-12 md:px-6 md:py-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            title="Pellet Mill Capacity Range"
            subtitle="Select the right model based on your required throughput and target animal species."
          />
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Model</TableHead>
                  <TableHead>Drive</TableHead>
                  <TableHead>Capacity</TableHead>
                  <TableHead>Motor Power</TableHead>
                  <TableHead>Die Diameter</TableHead>
                  <TableHead>Application</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {capacityData.map((row) => (
                  <TableRow key={row.model}>
                    <TableCell className="font-medium">{row.model}</TableCell>
                    <TableCell>{row.drive}</TableCell>
                    <TableCell>{row.capacity}</TableCell>
                    <TableCell>{row.power}</TableCell>
                    <TableCell>{row.dieDia}</TableCell>
                    <TableCell>{row.application}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            Capacities are based on standard poultry feed formulation (corn-soya)
            with 3.5 mm die. Actual throughput varies by formulation, moisture,
            and die specification. Request a quote for pricing on any model.
          </p>
        </div>
      </section>

      {/* Complete Feed Mill Line */}
      <section className="px-4 py-12 md:px-6 md:py-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            title="Complete Feed Mill Production Line"
            subtitle="A pellet mill is one component of a complete feed manufacturing system — here is everything you need."
          />
          <div className="prose max-w-none text-muted-foreground">
            <p>
              Building a feed pellet plant requires more than a pellet mill
              alone. Pacific Unity supplies complete turn-key feed production
              lines — from raw material intake to finished bagged product. A
              typical line for poultry and livestock feed includes the following
              equipment in sequence:
            </p>
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Settings,
                title: "Hammer Mill",
                desc: "Grinds raw ingredients (maize, soya, wheat) to 0.5-2 mm particle size. Water-drop or wide-chamber designs for 1-20 TPH.",
                href: "/equipment/feed-processing/hammer-mills/",
              },
              {
                icon: Cog,
                title: "Feed Mixer",
                desc: "Paddle or ribbon mixer ensures uniform blending of all ingredients, premixes, and additives. Batch sizes from 250 kg to 3,000 kg.",
                href: "/equipment/feed-processing/feed-mixers/",
              },
              {
                icon: Zap,
                title: "Pellet Mill",
                desc: "Ring die pellet press — the core of the line. Gear drive or belt driven configurations from 1-20 TPH.",
                href: "/equipment/feed-processing/pellet-mills/",
              },
              {
                icon: Cog,
                title: "Counter-Flow Cooler",
                desc: "Cools pellets from 80°C to within 5°C of ambient. Critical for pellet durability and shelf life in the UAE climate.",
                href: "/equipment/feed-processing/",
              },
              {
                icon: Settings,
                title: "Crumbler",
                desc: "Breaks pellets into smaller crumble particles for chick starter and fingerling fish feed. Adjustable roll gap for precise sizing.",
                href: "/equipment/feed-processing/",
              },
              {
                icon: Cog,
                title: "Packaging System",
                desc: "Semi-automatic or fully automatic bagging in 25-50 kg bags. Includes weighing, sealing, and conveying to palletising station.",
                href: "/equipment/feed-processing/",
              },
            ].map((item) => (
              <Link key={item.title} href={item.href} className="group">
                <Card className="h-full transition-shadow hover:shadow-lg">
                  <CardContent className="p-6">
                    <item.icon className="h-8 w-8 text-primary" />
                    <h3 className="mt-3 font-semibold group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {item.desc}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
          <div className="prose mt-6 max-w-none text-muted-foreground">
            <p>
              One recent example is the Yedid Agro project in Sunyani, Ghana —
              a complete 1-2 TPH poultry and fish feed production plant supplied
              by Pacific Unity. The line includes a hammer mill, paddle mixer,
              ring die pellet mill, counter-flow cooler, and a twin-screw
              extruder for floating fish feed. This project demonstrates our
              capability to deliver integrated, multi-species feed production
              solutions to markets across Africa and the Middle East.
            </p>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="bg-muted/30 px-4 py-12 md:px-6 md:py-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            title="Applications — Who Uses a Pellet Mill?"
            subtitle="From small farms to large-scale integrators, pellet mills serve every segment of the animal feed industry."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Drumstick,
                title: "Poultry Feed",
                desc: "Broiler starter, grower, and finisher feed; layer feed; breeder feed. 3-4 mm pellets or crumble for chicks. The largest segment of commercial feed production globally and in the UAE.",
              },
              {
                icon: Wheat,
                title: "Livestock &amp; Dairy Feed",
                desc: "Cattle feed, dairy TMR pellets, sheep and goat feed, camel feed, horse feed. 4-8 mm pellets. Growing demand in the UAE with the government's push for domestic dairy and red meat production.",
              },
              {
                icon: Fish,
                title: "Aquaculture Feed",
                desc: "Sinking pellets for tilapia, catfish, and shrimp. 2-6 mm diameter. For floating fish feed, a twin-screw extruder is used instead of or alongside a pellet mill.",
              },
              {
                icon: Cog,
                title: "Speciality &amp; Pet Feed",
                desc: "Rabbit feed, ostrich feed, pet food base pellets. Custom formulations with specific nutritional profiles. Small-batch production on 1-3 TPH pellet mills.",
              },
            ].map((app) => (
              <Card key={app.title}>
                <CardContent className="p-6">
                  <app.icon className="h-8 w-8 text-primary" />
                  <h3 className="mt-3 font-semibold">{app.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {app.desc}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* UAE Context */}
      <section className="px-4 py-12 md:px-6 md:py-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            title="Feed Production in the UAE — Market Context"
            subtitle="Why the UAE and the wider Gulf region are investing in domestic feed manufacturing."
          />
          <div className="grid gap-8 md:grid-cols-2">
            <div className="prose max-w-none text-muted-foreground">
              <p>
                The United Arab Emirates imports approximately 90% of its food,
                including a significant proportion of its animal feed
                requirements. The poultry sector alone consumes over 1.5 million
                tonnes of feed annually across the GCC, with the UAE accounting
                for a substantial share. Government-led food security
                initiatives — including the UAE National Food Security Strategy
                2051 and Abu Dhabi&apos;s Agricultural and Food Safety Authority
                (ADAFSA) programmes — are encouraging investment in local feed
                milling capacity to reduce import dependence and strengthen the
                domestic supply chain.
              </p>
              <p className="mt-4">
                The UAE&apos;s strategic location as a trading hub between Asia,
                Africa, and Europe also positions it as a re-export centre for
                processed feed. Several feed mill projects in the Northern
                Emirates — including Ras Al Khaimah and Ajman — are designed to
                serve both the domestic UAE market and export markets across the
                Indian Ocean and East Africa.
              </p>
            </div>
            <div className="flex items-center justify-center rounded-2xl bg-muted p-8">
              <div className="text-center">
                <ShieldCheck className="mx-auto h-16 w-16 text-primary" />
                <p className="mt-4 text-2xl font-bold">200+ Projects</p>
                <p className="mt-2 text-muted-foreground">
                  Across 9 countries in the Middle East &amp; Africa
                </p>
                <p className="mt-4 text-sm text-muted-foreground">
                  1-year warranty on all equipment. Spare parts stocked in the
                  UAE. Annual maintenance contracts available.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sub-page Links */}
      <section className="bg-muted/30 px-4 py-12 md:px-6 md:py-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            title="Explore Our Pellet Mill Range"
            subtitle="Detailed specifications, technical guides, and FAQs for each pellet mill type."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Link
              href="/equipment/feed-processing/pellet-mills/gear-drive/"
              className="group"
            >
              <Card className="h-full transition-shadow hover:shadow-lg">
                <CardContent className="p-6">
                  <Badge variant="outline" className="mb-3">
                    Heavy Duty
                  </Badge>
                  <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                    Gear Drive Pellet Mills
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Heavy-duty pellet mills with hardened gearbox drive for
                    commercial feed production at 3-20+ TPH. The standard choice
                    for 24/7 operations.
                  </p>
                  <span className="mt-3 inline-flex items-center text-sm text-primary">
                    View specifications{" "}
                    <ArrowRight className="ml-1 h-3.5 w-3.5" />
                  </span>
                </CardContent>
              </Card>
            </Link>
            <Link
              href="/equipment/feed-processing/pellet-mills/belt-driven/"
              className="group"
            >
              <Card className="h-full transition-shadow hover:shadow-lg">
                <CardContent className="p-6">
                  <Badge variant="outline" className="mb-3">
                    Cost-Effective
                  </Badge>
                  <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                    Belt Driven Pellet Mills
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Affordable belt driven pelletisers for small-to-medium feed
                    production at 1-5 TPH. Ideal for farm-level operations and
                    start-up projects.
                  </p>
                  <span className="mt-3 inline-flex items-center text-sm text-primary">
                    View specifications{" "}
                    <ArrowRight className="ml-1 h-3.5 w-3.5" />
                  </span>
                </CardContent>
              </Card>
            </Link>
            <Link
              href="/equipment/feed-processing/pellet-mills/fish-feed/"
              className="group"
            >
              <Card className="h-full transition-shadow hover:shadow-lg">
                <CardContent className="p-6">
                  <Badge variant="outline" className="mb-3">
                    Aquaculture
                  </Badge>
                  <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                    Fish Feed Pellet Mills &amp; Extruders
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Specialised pellet mills and twin-screw extruders for
                    floating and sinking aquaculture feed. Supporting the
                    UAE&apos;s growing fish farming sector.
                  </p>
                  <span className="mt-3 inline-flex items-center text-sm text-primary">
                    View specifications{" "}
                    <ArrowRight className="ml-1 h-3.5 w-3.5" />
                  </span>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-12 md:px-6 md:py-16">
        <div className="mx-auto max-w-3xl">
          <SectionHeading title="Frequently Asked Questions About Feed Pellet Mills" />
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 pb-12 md:px-6 md:pb-16">
        <div className="mx-auto max-w-7xl">
          <CTAStrip
            title="Need a Pellet Mill for Your Feed Production?"
            description="Tell us about your required capacity, target species, and feed formulations. We will recommend the right pellet mill and complete line configuration. Free consultation available."
            whatsappMessage="Hi, I'm interested in a feed pellet mill for my operation. Can you help with specifications and pricing?"
          />
        </div>
      </section>
    </>
  )
}
