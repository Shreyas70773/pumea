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
  title: "Linear Filling Machine Dubai UAE — Gravity & Overflow Filling",
  description:
    "Linear filling machines with gravity, overflow, and volumetric filling for water, juice, oils, and chemicals in Dubai UAE. 500 to 6,000 BPH. Request a quote from Pacific Unity.",
  keywords: [
    "linear filling machine",
    "linear filling machine Dubai",
    "gravity filling machine UAE",
    "overflow filling machine",
    "volumetric filling machine Dubai",
    "inline filler UAE",
    "liquid filling machine",
  ],
  alternates: {
    canonical: "https://pacificunity.ae/equipment/filling-packaging/filling-machines/linear-filling-machine/",
  },
}

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "Equipment", href: "/equipment/" },
  { name: "Filling & Packaging", href: "/equipment/filling-packaging/" },
  { name: "Filling Machines", href: "/equipment/filling-packaging/filling-machines/" },
  { name: "Linear Filling Machine", href: "/equipment/filling-packaging/filling-machines/linear-filling-machine/" },
]

const linearModels = [
  { nozzles: "4", speed: "500-1,500", principle: "Gravity", products: "Water, dilute juice", changeover: "10-15 min" },
  { nozzles: "6", speed: "1,000-2,500", principle: "Gravity / Overflow", products: "Water, juice, light oils", changeover: "10-15 min" },
  { nozzles: "8", speed: "1,500-3,500", principle: "Overflow / Volumetric", products: "Water, juice, chemicals", changeover: "10-20 min" },
  { nozzles: "10", speed: "2,500-4,500", principle: "Volumetric", products: "Edible oil, syrups, detergent", changeover: "15-20 min" },
  { nozzles: "12", speed: "3,000-5,000", principle: "Volumetric / Servo", products: "Multi-product lines", changeover: "15-20 min" },
  { nozzles: "16", speed: "4,000-6,000", principle: "Servo volumetric", products: "High-speed flexible lines", changeover: "15-20 min" },
]

const faqs = [
  {
    question: "How does a linear filling machine work?",
    answer:
      "A linear filling machine arranges bottles in a straight line beneath a row of stationary filling nozzles. The process is intermittent (start-stop): a group of bottles is indexed into position, the nozzles descend, filling begins, and once the target fill is reached, the nozzles retract and the filled bottles move forward while the next group indexes into position. The number of nozzles — typically 4 to 16 — determines how many bottles are filled per cycle. Fill accuracy is controlled by the filling principle used: gravity (time-based), overflow (level-based), or volumetric (measured volume). This straightforward design makes linear fillers affordable, easy to operate, and simple to maintain.",
  },
  {
    question: "What is the difference between gravity, overflow, and volumetric filling?",
    answer:
      "Gravity filling relies on the product's own weight flowing into the container for a set time period. It is the simplest and most affordable method, well suited for thin, non-foaming liquids like water. Overflow filling uses a special nozzle that fills the bottle to a consistent level regardless of minor variations in bottle volume — making every bottle on the shelf look identical, which is important for transparent bottles. Volumetric filling dispenses an exact measured volume using either a piston, flow meter, or load cell, providing the highest accuracy (±0.5%) and is best for high-value products where overfill waste or underfill compliance issues are costly. Each principle serves different UAE production requirements.",
  },
  {
    question: "What speed can a linear filling machine achieve?",
    answer:
      "Linear filling machine speeds range from 500 BPH for a basic 4-nozzle gravity filler to 6,000 BPH for a 16-nozzle servo-volumetric machine. The speed depends on three factors: the number of nozzles (more nozzles fill more bottles per cycle), the cycle time (which includes bottle indexing, filling, and nozzle retraction), and the fill volume (larger volumes take longer per bottle). For UAE operations requiring more than 6,000 BPH, a rotary filling machine is the more practical choice. Linear machines are optimal for 500-4,000 BPH where flexibility, quick changeover, and lower capital cost are priorities.",
  },
  {
    question: "When should I choose a linear filler over a rotary filler?",
    answer:
      "Choose a linear filling machine when your production volume is below 4,000-6,000 BPH, when you fill multiple products requiring frequent changeovers, when you need to accommodate a wide range of container sizes, or when your capital budget is limited. Linear fillers cost significantly less than rotary machines of equivalent output and are simpler to operate and maintain. They are ideal for start-up beverage companies, contract packers, and multi-product food manufacturers in the UAE who value flexibility over raw speed. Choose a rotary filler when your production consistently exceeds 6,000 BPH or when you run a single high-volume product like water.",
  },
  {
    question: "Can a linear filling machine handle different bottle sizes?",
    answer:
      "Yes, linear filling machines are known for their container format flexibility. Most machines accommodate bottle diameters from 40 mm to 120 mm and heights from 100 mm to 350 mm, covering formats from 200 mL PET water bottles to 5 L jerry cans. Changeover between sizes typically involves adjusting guide rails, nozzle height, and fill volume settings — a process that takes 10-20 minutes. Some servo-driven models store recipes for each bottle size, reducing changeover to simply selecting the correct program. This flexibility makes linear fillers particularly popular with UAE contract fillers and co-packers who handle diverse bottle formats.",
  },
  {
    question: "What maintenance does a linear filling machine need?",
    answer:
      "Linear filling machines are among the simplest to maintain because they have fewer moving parts than rotary systems. Daily tasks include nozzle cleaning, filling accuracy checks, and guide rail adjustment. Weekly maintenance covers seal and O-ring inspection, conveyor belt tension, and sensor calibration. Monthly tasks include a full CIP cycle of the product path, lubrication of indexing mechanisms, and inspection of pneumatic components. In the UAE, where ambient dust and heat are factors, air filtration systems and cooling provisions for electrical cabinets need regular attention. Pacific Unity supplies a detailed maintenance schedule and stocks common wear parts in the UAE for rapid support.",
  },
  {
    question: "Is a linear filling machine suitable for edible oil filling?",
    answer:
      "Yes, linear filling machines are widely used for edible oil filling in the UAE and across the Middle East. Volumetric filling (using flow meters or servo-driven pistons) is the recommended principle for edible oils because it provides consistent fill accuracy regardless of temperature-induced viscosity changes — a significant factor in UAE warehouses and production areas where temperatures fluctuate. Machines are specified with anti-drip nozzles to prevent oil spillage, stainless steel product paths, and bottom-up filling to minimise splashing and foaming. Linear oil fillers handle PET bottles, glass bottles, HDPE jerry cans, and tin containers from 250 mL to 5 litres.",
  },
  {
    question: "How much does a linear filling machine cost in Dubai?",
    answer:
      "Linear filling machine costs in Dubai depend on the number of nozzles, filling principle, and automation level. A basic 4-nozzle gravity filler is the most affordable entry point for start-up producers. A 6-8 nozzle overflow filler for water or juice falls in the mid-range. A 12-16 nozzle servo-volumetric machine with automatic bottle handling and CIP capability represents a higher investment. The specific product also affects pricing — filling corrosive chemicals or hot products requires specialised materials and components. Pacific Unity provides detailed quotations tailored to your exact requirements. Request a quote for pricing that includes installation, commissioning, and operator training for your UAE facility.",
  },
]

export default function LinearFillingMachinePage() {
  return (
    <>
      <ProductSchema
        name="Linear Filling Machine"
        description="Linear filling machines with gravity, overflow, and volumetric filling for water, juice, oils, and chemicals in Dubai and the UAE. 500 to 6,000 BPH."
        image="/images/products/linear-filling-machine.jpg"
        url="/equipment/filling-packaging/filling-machines/linear-filling-machine/"
        category="Filling & Packaging Equipment"
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
            Linear Filling Machine Dubai UAE — Gravity &amp; Overflow Filling
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-muted-foreground">
            Versatile inline filling machines with gravity, overflow, and volumetric filling principles
            for water, juice, edible oil, chemicals, and multi-product operations across the UAE. From
            500 to 6,000 BPH with 4-16 nozzles — the flexible, cost-effective choice for small to
            medium production lines.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/request-quote/">
                Request a Quote <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/equipment/filling-packaging/filling-machines/">
                All Filling Machines
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="px-4 py-12 md:px-6 md:py-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            title="How Linear Filling Works"
            subtitle="Three distinct filling principles — gravity, overflow, and volumetric — each optimised for different products."
          />
          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold">Gravity Filling</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  The simplest and most affordable filling principle. Product flows from an elevated
                  tank into the container under gravity for a controlled time period. A solenoid
                  valve on each nozzle opens and closes based on the programmed fill time. Best
                  suited for thin, non-foaming liquids such as water, dilute juice, and light
                  chemicals. Fill accuracy is typically ±1-2%, which is adequate for most standard
                  beverage applications in the UAE market.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold">Overflow Filling</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  A specialised nozzle fills the container to a consistent level regardless of minor
                  variations in bottle volume. Excess product overflows back through a return path
                  to the product tank. This ensures every bottle on the shelf looks identical — a
                  significant advantage for clear and transparent bottles where fill level is
                  visible to the consumer. Widely used for bottled water, clear juices, and
                  household chemicals sold in UAE retail channels.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold">Volumetric Filling</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Each nozzle dispenses a precisely measured volume using a flow meter, piston, or
                  load cell. This is the most accurate filling principle (±0.3-0.5%), making it
                  ideal for high-value products where overfill waste or underfill compliance issues
                  are costly. Servo-driven volumetric fillers store recipes for different products
                  and volumes, enabling rapid changeover for UAE multi-product operations such as
                  contract packers and co-manufacturers.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Speed Table */}
      <section className="bg-muted/30 px-4 py-12 md:px-6 md:py-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            title="Linear Filler Configurations"
            subtitle="Available from 4 to 16 nozzles with multiple filling principles."
          />
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Nozzles</TableHead>
                  <TableHead>Speed (BPH)</TableHead>
                  <TableHead>Filling Principle</TableHead>
                  <TableHead>Typical Products</TableHead>
                  <TableHead>Changeover Time</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {linearModels.map((row) => (
                  <TableRow key={row.nozzles}>
                    <TableCell className="font-medium">{row.nozzles}</TableCell>
                    <TableCell>{row.speed}</TableCell>
                    <TableCell>{row.principle}</TableCell>
                    <TableCell>{row.products}</TableCell>
                    <TableCell>{row.changeover}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            Speeds based on 500 mL bottles. Actual BPH varies with fill volume, product viscosity, and
            container format.{" "}
            <Link href="/request-quote/" className="text-primary underline">
              Request a quote for pricing
            </Link>{" "}
            based on your specific production requirements.
          </p>
        </div>
      </section>

      {/* Gravity vs Overflow vs Volumetric Comparison */}
      <section className="px-4 py-12 md:px-6 md:py-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            title="Gravity vs Overflow vs Volumetric — Which Principle?"
            subtitle="Choosing the right filling method for your product and market requirements."
          />
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Feature</TableHead>
                  <TableHead>Gravity</TableHead>
                  <TableHead>Overflow</TableHead>
                  <TableHead>Volumetric</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">Fill Accuracy</TableCell>
                  <TableCell>±1-2%</TableCell>
                  <TableCell>Level-based (visual consistency)</TableCell>
                  <TableCell>±0.3-0.5%</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Best For</TableCell>
                  <TableCell>Thin, non-foaming liquids</TableCell>
                  <TableCell>Clear bottles, shelf appearance</TableCell>
                  <TableCell>High-value products, strict compliance</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Cost</TableCell>
                  <TableCell>Lowest</TableCell>
                  <TableCell>Moderate</TableCell>
                  <TableCell>Highest</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Product Viscosity</TableCell>
                  <TableCell>Low only</TableCell>
                  <TableCell>Low to medium</TableCell>
                  <TableCell>Low to high</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Foaming Products</TableCell>
                  <TableCell>Not recommended</TableCell>
                  <TableCell>Good (bottom-up fill)</TableCell>
                  <TableCell>Good (controlled flow rate)</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Typical UAE Use</TableCell>
                  <TableCell>Water start-ups, basic chemicals</TableCell>
                  <TableCell>Branded water, clear juice</TableCell>
                  <TableCell>Edible oil, syrups, pharmaceuticals</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="bg-muted/30 px-4 py-12 md:px-6 md:py-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            title="Linear Filler Applications in the UAE"
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Start-Up Water Brands", desc: "Affordable 4-6 nozzle gravity fillers for new bottled water brands entering the UAE market. Low capital cost, simple operation, and easy expansion to more nozzles as demand grows. Ideal for small ESMA-certified water plants." },
              { title: "Edible Oil &amp; Cooking Oil", desc: "Volumetric linear fillers for sunflower oil, olive oil, coconut oil, and ghee in PET bottles and jerry cans. Anti-drip nozzles and bottom-up filling for clean container exteriors and minimal product waste." },
              { title: "Juice &amp; Flavoured Water", desc: "Overflow fillers ensuring consistent fill levels across clear PET bottles — important for retail shelf presentation. CIP-ready for rapid changeover between water, flavoured water, and juice variants within the same production shift." },
              { title: "Household Chemicals", desc: "Corrosion-resistant linear fillers for detergent, bleach, fabric softener, and cleaning liquids. HDPE and PET bottle compatibility with anti-drip and anti-foam nozzle options for the UAE cleaning products sector." },
              { title: "Contract Packing", desc: "Multi-product linear fillers with servo-volumetric dosing and stored recipes for UAE co-packers and contract filling operations. Quick changeover between different products and bottle sizes with minimal downtime." },
              { title: "Personal Care &amp; Cosmetics", desc: "Precision linear fillers for shampoo, body wash, lotion, and perfume. Servo-driven volumetric dosing achieves the ±0.5% accuracy required for high-value cosmetic products sold in the UAE market." },
            ].map((app) => (
              <Card key={app.title}>
                <CardContent className="p-6">
                  <h3 className="font-semibold">{app.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{app.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="px-4 py-12 md:px-6 md:py-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeading title="Key Features" />
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Stainless steel 304/316 frame and product contact parts for food-grade compliance",
              "PLC touchscreen control with recipe storage for multi-product operations",
              "Adjustable nozzle height and guide rails for multiple bottle sizes",
              "CIP-compatible product path for rapid sanitisation between runs",
              "Anti-drip nozzles prevent product spillage and container contamination",
              "Bottom-up filling option for foaming products and viscous liquids",
              "Compact footprint — designed for space-constrained UAE production facilities",
              "Expandable — add more nozzles to increase speed as your business grows",
            ].map((feat) => (
              <div key={feat} className="flex items-start gap-3">
                <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span className="text-sm text-muted-foreground">{feat}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="bg-muted/30 px-4 py-12 md:px-6 md:py-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeading title="Related Equipment" />
          <div className="grid gap-6 sm:grid-cols-3">
            {[
              { title: "All Filling Machines", desc: "Compare rotary, linear, piston, and cup fillers.", href: "/equipment/filling-packaging/filling-machines/" },
              { title: "Rotary Filling Machine", desc: "High-speed carousel fillers for 4,000-20,000+ BPH.", href: "/equipment/filling-packaging/filling-machines/rotary-filling-machine/" },
              { title: "Piston Filling Machine", desc: "Positive-displacement fillers for viscous products.", href: "/equipment/filling-packaging/filling-machines/piston-filling-machine/" },
            ].map((rel) => (
              <Link key={rel.href} href={rel.href} className="group">
                <Card className="h-full transition-shadow hover:shadow-lg">
                  <CardContent className="p-5">
                    <h3 className="font-semibold group-hover:text-primary transition-colors">{rel.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{rel.desc}</p>
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
          <SectionHeading title="Frequently Asked Questions About Linear Filling Machines" />
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 pb-12 md:px-6 md:pb-16">
        <div className="mx-auto max-w-7xl">
          <CTAStrip
            title="Need a Flexible Linear Filler for Your Production Line?"
            description="Tell us about your product range, target speed, and container formats. We will recommend the right linear filling configuration for your UAE operation."
            whatsappMessage="Hi, I'm interested in a linear filling machine for my production line in the UAE."
          />
        </div>
      </section>
    </>
  )
}
