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
  CircleDot,
  Cog,
  GlassWater,
  MilkOff,
  PackageCheck,
  RotateCcw,
  ShieldCheck,
  Zap,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Filling Machine Dubai UAE — Rotary, Linear & Piston Filling Systems",
  description:
    "Industrial filling machines for water, juice, dairy, and viscous liquids in Dubai UAE. Rotary, linear, piston, and cup fillers from 500 to 20,000 BPH. Request a quote from Pacific Unity.",
  keywords: [
    "filling machine",
    "filling machine Dubai",
    "beverage filling machine",
    "liquid filling machine UAE",
    "rotary filling machine",
    "piston filling machine",
    "cup filling machine",
    "linear filling machine",
    "water bottling machine UAE",
  ],
  alternates: {
    canonical: "https://pacificunity.ae/equipment/filling-packaging/filling-machines/",
  },
}

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "Equipment", href: "/equipment/" },
  { name: "Filling & Packaging", href: "/equipment/filling-packaging/" },
  { name: "Filling Machines", href: "/equipment/filling-packaging/filling-machines/" },
]

const throughputData = [
  { type: "Rotary Gravity Filler", low: "4,000", high: "20,000", products: "Water, thin juices", changeover: "15-30 min", heads: "12-72" },
  { type: "Rotary Pressure Filler", low: "6,000", high: "36,000", products: "Carbonated drinks, beer", changeover: "20-40 min", heads: "24-120" },
  { type: "Inline Linear Filler", low: "500", high: "6,000", products: "Water, edible oil, chemicals", changeover: "10-20 min", heads: "4-16" },
  { type: "Piston Filler", low: "500", high: "6,000", products: "Sauces, creams, oils, honey", changeover: "15-25 min", heads: "2-12" },
  { type: "Cup Filler & Sealer", low: "1,200", high: "9,600", products: "Yoghurt, juice, dairy desserts", changeover: "10-20 min", heads: "1-8" },
  { type: "Overflow Filler", low: "1,000", high: "8,000", products: "Thin liquids, clear bottles", changeover: "10-15 min", heads: "4-20" },
]

const faqs = [
  {
    question: "What types of filling machines are available for beverage production in Dubai?",
    answer:
      "Pacific Unity supplies four main categories of filling machines for beverage and liquid production in Dubai and across the UAE: rotary filling machines for high-speed water and juice lines (2,000-20,000+ BPH), linear filling machines for mid-volume operations and flexible product changeovers, piston filling machines for viscous products such as sauces, creams, and honey, and cup filling and sealing machines for yoghurt, dairy desserts, and single-serve juice cups. Each type is available with volumetric, gravity, or overflow filling principles depending on product characteristics and accuracy requirements.",
  },
  {
    question: "How do I choose the right filling machine for my production line in the UAE?",
    answer:
      "Selecting the correct filling machine depends on five key factors: product viscosity (thin liquids like water suit gravity or overflow fillers, while thick products like sauces require piston fillers), target output speed (rotary machines handle higher speeds than linear ones), container type and size (bottles, cups, pouches, or jars), fill accuracy required (pharmaceutical products demand ±0.5% accuracy), and budget. Pacific Unity provides a free production assessment for UAE-based facilities to recommend the optimal machine type, filling heads, and line configuration based on your specific product portfolio and growth plans.",
  },
  {
    question: "What is the difference between a rotary and a linear filling machine?",
    answer:
      "A rotary filling machine uses a carousel design where containers rotate continuously past filling stations, enabling very high throughput — typically 4,000 to 36,000 bottles per hour. A linear filling machine moves containers in a straight line past stationary filling nozzles, with typical speeds of 500-6,000 BPH. Rotary machines are ideal for high-volume, single-product lines such as water bottling plants, while linear machines offer faster product changeover and lower capital cost, making them better suited for facilities in the UAE that fill multiple products or smaller production runs.",
  },
  {
    question: "What speed can a filling machine achieve in bottles per hour?",
    answer:
      "Filling machine speeds vary by type and configuration. A small 4-head linear filler handles 500-1,500 BPH, suitable for start-up operations. A mid-range 8-head linear machine reaches 2,000-4,000 BPH. Rotary gravity fillers with 24-48 heads achieve 8,000-20,000 BPH for water and thin juices. High-speed rotary pressure fillers with 60-120 heads can exceed 36,000 BPH for carbonated beverages. Cup filling machines typically range from 1,200 to 9,600 cups per hour depending on the number of lanes. Pacific Unity configures each machine to match your specific production targets and container sizes.",
  },
  {
    question: "How much does a filling machine cost in Dubai UAE?",
    answer:
      "Filling machine costs in Dubai depend on the type, speed, and level of automation. A basic 4-head linear filling machine suitable for a small production facility starts from a lower investment, while a high-speed 48-head rotary filler for a water bottling plant represents a significantly larger capital expenditure. Piston fillers for viscous products and cup filling machines fall in between. Pacific Unity does not publish fixed pricing because every machine is configured to specific requirements — container size, fill volume, product type, and automation level all affect the final cost. Request a quote for accurate pricing tailored to your production needs.",
  },
  {
    question: "Can Pacific Unity supply a complete water bottling line in the UAE?",
    answer:
      "Yes, Pacific Unity specialises in complete turnkey water bottling lines for the UAE market. A typical line includes water treatment (RO plant), ozone and UV sterilisation, bottle blow moulding, rinsing, filling, capping, labelling, date coding, shrink wrapping, and palletising. We have delivered over 200 projects across 9 countries, including the OYE complete water bottling plant. Our lines are configured for 2,000 to 20,000 BPH depending on your production targets and can be installed in 4-6 weeks from confirmed order with a full 1-year warranty on all equipment.",
  },
  {
    question: "What maintenance does a filling machine require in UAE conditions?",
    answer:
      "Regular maintenance is essential for reliable filling machine performance, particularly in the UAE where ambient temperatures and dust levels are high. Daily tasks include nozzle cleaning, seal inspection, and lubrication checks. Weekly maintenance covers conveyor belt tension, sensor calibration, and filling accuracy verification. Monthly tasks include valve overhaul, gasket replacement, and full machine sanitisation. Pacific Unity provides a detailed maintenance schedule with every machine and offers annual maintenance contracts. We maintain spare parts stock in the UAE to minimise downtime — most common wear parts can be delivered within 24-48 hours.",
  },
  {
    question: "What is the lead time for filling machine delivery to Dubai?",
    answer:
      "Standard lead time for filling machine delivery to Dubai and the wider UAE is 4-6 weeks from confirmed order for standard configurations. Custom-engineered machines or high-capacity rotary systems may require 8-12 weeks. This timeline includes manufacturing, factory acceptance testing, sea freight to Jebel Ali port, customs clearance, delivery to your site, installation, commissioning, and operator training. Pacific Unity manages the entire process from order to handover. Fast-track delivery can be arranged for urgent projects at additional cost — contact us for specific timelines based on your requirements.",
  },
  {
    question: "Are Pacific Unity filling machines suitable for ESMA and Dubai Municipality compliance?",
    answer:
      "All filling machines supplied by Pacific Unity are designed to meet UAE food safety and quality standards. Machines feature stainless steel 304 or 316 contact parts, food-grade gaskets and seals, CIP (clean-in-place) compatibility, and enclosed filling zones to prevent contamination. They comply with ESMA (Emirates Authority for Standardisation and Metrology) requirements for food contact equipment and Dubai Municipality FoodWatch HACCP standards. Pacific Unity provides all necessary compliance documentation, including material certificates, as part of every machine delivery to support your facility licensing and audit requirements.",
  },
  {
    question: "Can a filling machine handle both water and juice on the same line?",
    answer:
      "Yes, many filling machines can be configured for multi-product operation. Linear filling machines are particularly well suited to product changeovers — switching from water to juice typically takes 15-30 minutes including a CIP cycle. Rotary fillers can also handle multiple products but changeover times are longer (30-60 minutes) due to more nozzles and valves to clean. Key considerations for multi-product lines include choosing compatible filling principles (gravity works for both water and thin juices), specifying CIP-capable nozzles, and ensuring the control system stores recipes for each product. Pacific Unity designs multi-product filling systems for UAE facilities that need production flexibility.",
  },
]

export default function FillingMachinesPage() {
  return (
    <>
      <ProductSchema
        name="Filling Machine — Rotary, Linear & Piston Filling Systems"
        description="Industrial filling machines for water, juice, dairy, and viscous liquids in Dubai and the UAE. Rotary, linear, piston, and cup fillers from 500 to 20,000+ BPH."
        image="/images/products/filling-machine.jpg"
        url="/equipment/filling-packaging/filling-machines/"
        category="Filling & Packaging Equipment"
      />
      <FAQPageSchema faqs={faqs} />
      <BreadcrumbSchema items={breadcrumbs} />

      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <Breadcrumbs items={breadcrumbs} />
      </div>

      {/* Hero */}
      <section className="bg-linear-to-br from-background to-muted/40 px-4 pb-12 pt-8 md:px-6 md:pb-16 md:pt-12">
        <div className="mx-auto max-w-7xl">
          <Badge variant="secondary" className="mb-4">
            9,900 Monthly Searches &middot; $4.87 CPC
          </Badge>
          <h1 className="max-w-4xl text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            Filling Machine Dubai UAE — Rotary, Linear &amp; Piston Filling Systems
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-muted-foreground">
            Industrial filling machines for water, juice, dairy, sauces, and viscous liquids — supplied,
            installed, and commissioned across the United Arab Emirates. From compact 500 BPH piston
            fillers to high-speed 20,000+ BPH rotary lines, Pacific Unity configures every machine to
            your exact production requirements.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/request-quote/">
                Request a Quote <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/equipment/filling-packaging/filling-machines/rotary-filling-machine/">
                View Rotary Fillers
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* What Are Filling Machines */}
      <section className="px-4 py-12 md:px-6 md:py-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            title="What Is a Filling Machine?"
            subtitle="The core equipment in any liquid packaging line — from water bottling to sauce production."
          />
          <div className="prose max-w-none text-muted-foreground">
            <p>
              A filling machine is an industrial device that dispenses a precise volume of liquid,
              semi-liquid, or paste product into containers such as bottles, cups, jars, pouches, or
              cans. Filling machines form the central stage of any liquid packaging line, sitting
              between the container preparation equipment (rinsers, blow moulders) and the sealing
              or capping equipment downstream.
            </p>
            <p className="mt-4">
              In the UAE&apos;s rapidly growing food and beverage manufacturing sector, filling machines
              are essential for businesses producing bottled water, juices, dairy products, sauces,
              edible oils, cleaning chemicals, and personal care products. The choice of filling
              machine type — rotary, linear, piston, or cup — depends on the product&apos;s viscosity,
              the required production speed, the container format, and the desired fill accuracy.
            </p>
            <p className="mt-4">
              Pacific Unity supplies filling machines from leading manufacturers, configured
              specifically for UAE operating conditions. Every machine includes installation,
              commissioning, operator training, and a 1-year warranty. With over 200 projects
              delivered across 9 countries — including complete water bottling plants, juice lines,
              and dairy filling systems — our team has the experience to recommend and implement the
              right filling solution for your production goals.
            </p>
          </div>
        </div>
      </section>

      {/* Types of Filling Machines */}
      <section className="bg-muted/30 px-4 py-12 md:px-6 md:py-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            title="Types of Filling Machines"
            subtitle="Four main categories cover virtually every liquid filling application in the UAE market."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Link href="/equipment/filling-packaging/filling-machines/rotary-filling-machine/" className="group">
              <Card className="h-full transition-shadow hover:shadow-lg">
                <CardContent className="p-6">
                  <RotateCcw className="h-8 w-8 text-primary" />
                  <h3 className="mt-3 text-lg font-semibold group-hover:text-primary transition-colors">
                    Rotary Filling Machine
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    High-speed carousel-based fillers for water, juice, and carbonated beverages.
                    Throughput from 2,000 to 20,000+ BPH with 12-72 filling heads. The standard
                    choice for high-volume water bottling plants in Dubai and across the Gulf region,
                    offering continuous motion filling for maximum output with minimal floor space.
                  </p>
                  <span className="mt-3 inline-flex items-center text-sm text-primary">
                    Learn more <ArrowRight className="ml-1 h-3.5 w-3.5" />
                  </span>
                </CardContent>
              </Card>
            </Link>
            <Link href="/equipment/filling-packaging/filling-machines/linear-filling-machine/" className="group">
              <Card className="h-full transition-shadow hover:shadow-lg">
                <CardContent className="p-6">
                  <Zap className="h-8 w-8 text-primary" />
                  <h3 className="mt-3 text-lg font-semibold group-hover:text-primary transition-colors">
                    Linear Filling Machine
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Straight-line fillers using gravity, overflow, or volumetric principles. Speeds
                    from 500 to 6,000 BPH with 4-16 nozzles. Ideal for small to medium UAE
                    production facilities that require quick product changeovers, flexible container
                    sizes, and lower initial capital investment compared to rotary systems.
                  </p>
                  <span className="mt-3 inline-flex items-center text-sm text-primary">
                    Learn more <ArrowRight className="ml-1 h-3.5 w-3.5" />
                  </span>
                </CardContent>
              </Card>
            </Link>
            <Link href="/equipment/filling-packaging/filling-machines/piston-filling-machine/" className="group">
              <Card className="h-full transition-shadow hover:shadow-lg">
                <CardContent className="p-6">
                  <Cog className="h-8 w-8 text-primary" />
                  <h3 className="mt-3 text-lg font-semibold group-hover:text-primary transition-colors">
                    Piston Filling Machine
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Positive-displacement fillers designed for viscous and semi-viscous products.
                    Handles sauces, creams, oils, honey, tahini, and thick pastes with exceptional
                    accuracy (±0.5%). Available in 2 to 12 head configurations for UAE food
                    manufacturers requiring precise volumetric filling of challenging products.
                  </p>
                  <span className="mt-3 inline-flex items-center text-sm text-primary">
                    Learn more <ArrowRight className="ml-1 h-3.5 w-3.5" />
                  </span>
                </CardContent>
              </Card>
            </Link>
            <Link href="/equipment/filling-packaging/filling-machines/cup-filling-machine/" className="group">
              <Card className="h-full transition-shadow hover:shadow-lg">
                <CardContent className="p-6">
                  <GlassWater className="h-8 w-8 text-primary" />
                  <h3 className="mt-3 text-lg font-semibold group-hover:text-primary transition-colors">
                    Cup Filling Machine
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Combined filling and sealing machines for pre-formed cups and tubs. Used
                    extensively for yoghurt, laban, fresh juice, dairy desserts, and dips across
                    the UAE. Speeds from 1,200 to 9,600 cups per hour with automatic lid placement
                    and heat sealing for tamper-evident packaging.
                  </p>
                  <span className="mt-3 inline-flex items-center text-sm text-primary">
                    Learn more <ArrowRight className="ml-1 h-3.5 w-3.5" />
                  </span>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* How to Choose */}
      <section className="px-4 py-12 md:px-6 md:py-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            title="How to Choose the Right Filling Machine"
            subtitle="Five critical factors determine the best filling technology for your production line."
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardContent className="p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">1</div>
                <h3 className="mt-4 text-lg font-semibold">Product Viscosity</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Thin, free-flowing liquids like water and dilute juices work well with gravity or
                  overflow fillers. Medium-viscosity products such as cooking oils and thick juices
                  suit volumetric fillers. High-viscosity products including sauces, creams, honey,
                  and pastes require piston fillers that use positive displacement to push the
                  product into the container with consistent force.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">2</div>
                <h3 className="mt-4 text-lg font-semibold">Production Speed</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Your target output in bottles per hour (BPH) directly influences the machine type.
                  Below 2,000 BPH, linear fillers offer the best value. Between 2,000 and 6,000 BPH,
                  both linear and small rotary machines compete. Above 6,000 BPH, rotary filling
                  machines are the only practical option, with the largest systems exceeding
                  36,000 BPH for carbonated beverage production.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">3</div>
                <h3 className="mt-4 text-lg font-semibold">Container Type &amp; Size</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Different filling machines handle different container formats. Rotary and linear
                  machines fill bottles and jars. Cup filling machines handle pre-formed cups and
                  tubs with integrated sealing. The range of container sizes you plan to fill also
                  matters — linear machines typically offer wider size range flexibility with quicker
                  changeover tooling than rotary systems.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">4</div>
                <h3 className="mt-4 text-lg font-semibold">Fill Accuracy</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Standard filling accuracy for most food and beverage applications in the UAE is
                  ±1% of the target fill volume. Pharmaceutical and high-value products may require
                  ±0.5%. Piston fillers and flow-meter-based fillers deliver the highest accuracy.
                  Gravity fillers are slightly less precise but perfectly adequate for water and
                  standard beverages within ESMA tolerance requirements.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">5</div>
                <h3 className="mt-4 text-lg font-semibold">Product Changeover Frequency</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  If your UAE facility fills multiple products (for example, water, flavoured water,
                  and juice), changeover time becomes a critical factor. Linear filling machines
                  typically change over in 10-20 minutes. Rotary machines require 30-60 minutes due
                  to more nozzles and larger product contact surfaces. Piston fillers with CIP
                  capability can switch between viscous products in 15-25 minutes.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-lg font-semibold">Budget &amp; Future Growth</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Linear filling machines have a lower capital cost but also lower maximum throughput.
                  Rotary machines cost more upfront but offer the highest speed and lowest cost per
                  unit at scale. Many UAE start-ups begin with a linear filler and upgrade to rotary
                  as demand grows. Pacific Unity designs lines with expansion in mind, so
                  upgrading later does not require replacing the entire infrastructure.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Throughput Comparison Table */}
      <section className="bg-muted/30 px-4 py-12 md:px-6 md:py-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            title="Filling Machine Throughput Comparison"
            subtitle="Compare speed ranges, head counts, and product suitability across all filling machine types."
          />
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Machine Type</TableHead>
                  <TableHead>Speed Low (BPH)</TableHead>
                  <TableHead>Speed High (BPH)</TableHead>
                  <TableHead>Suitable Products</TableHead>
                  <TableHead>Changeover Time</TableHead>
                  <TableHead>Filling Heads</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {throughputData.map((row) => (
                  <TableRow key={row.type}>
                    <TableCell className="font-medium">{row.type}</TableCell>
                    <TableCell>{row.low}</TableCell>
                    <TableCell>{row.high}</TableCell>
                    <TableCell>{row.products}</TableCell>
                    <TableCell>{row.changeover}</TableCell>
                    <TableCell>{row.heads}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            BPH = Bottles Per Hour (or cups per hour for cup fillers). Actual speeds depend on
            container size, fill volume, and product viscosity.{" "}
            <Link href="/request-quote/" className="text-primary underline">
              Request a quote for pricing
            </Link>{" "}
            tailored to your specific production parameters.
          </p>
        </div>
      </section>

      {/* Applications */}
      <section className="px-4 py-12 md:px-6 md:py-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            title="Industries &amp; Applications"
            subtitle="Filling machines for every liquid product manufactured in the UAE."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: GlassWater,
                title: "Bottled Water &amp; Beverages",
                desc: "Complete water bottling and juice filling lines for the UAE market. Rotary and linear fillers configured for 200 mL to 10 L containers, meeting ESMA standards for packaged drinking water and beverages.",
              },
              {
                icon: MilkOff,
                title: "Dairy &amp; Yoghurt",
                desc: "Cup filling and sealing machines for yoghurt, laban, flavoured milk, and dairy desserts. Aseptic and ultra-clean configurations for extended shelf life products sold through UAE retail chains.",
              },
              {
                icon: PackageCheck,
                title: "Sauces, Oils &amp; Condiments",
                desc: "Piston and servo-driven fillers for tahini, hummus, hot sauce, cooking oil, vinegar, and honey. Designed for the viscous products that dominate UAE and Middle Eastern food manufacturing.",
              },
              {
                icon: CircleDot,
                title: "Chemicals &amp; Personal Care",
                desc: "Corrosion-resistant filling machines for detergents, cleaning chemicals, shampoos, and cosmetic products. Available in HDPE-compatible and anti-drip configurations for non-food UAE manufacturers.",
              },
            ].map((app) => (
              <Card key={app.title}>
                <CardContent className="p-6">
                  <app.icon className="h-8 w-8 text-primary" />
                  <h3 className="mt-3 font-semibold">{app.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{app.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Water Bottling Line Configuration */}
      <section className="bg-muted/30 px-4 py-12 md:px-6 md:py-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            title="Water Bottling Line Configuration"
            subtitle="How a filling machine integrates into a complete bottling line for the UAE market."
          />
          <div className="prose max-w-none text-muted-foreground">
            <p>
              A water bottling line in the UAE typically consists of seven to ten stages, with the
              filling machine at its centre. Understanding how the filler integrates with upstream
              and downstream equipment is critical for maximising line efficiency and ensuring
              compliance with ESMA and Dubai Municipality standards.
            </p>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardContent className="p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">1</div>
                <h3 className="mt-4 text-lg font-semibold">Water Treatment (RO Plant)</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Raw water is purified through reverse osmosis, remineralised for taste, and
                  sterilised with UV and ozone. The treated water feeds directly into the filling
                  machine&apos;s product tank via a closed, sanitised pipeline.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">2</div>
                <h3 className="mt-4 text-lg font-semibold">Bottle Blow Moulding or Supply</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  PET preforms are blown into bottles immediately before filling (inline blowing),
                  or pre-blown bottles are fed from bulk storage. Inline blowing reduces storage
                  space and contamination risk — a significant advantage in UAE&apos;s dusty
                  industrial environments.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">3</div>
                <h3 className="mt-4 text-lg font-semibold">Rinsing</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Bottles are rinsed with ozonated water or sterile air to remove dust and
                  particulates before entering the filler. The rinser is synchronised with the
                  filling machine speed to avoid bottlenecks on the line.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">4</div>
                <h3 className="mt-4 text-lg font-semibold">Filling &amp; Capping</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  The filling machine dispenses the precise volume of product into each bottle.
                  Immediately after filling, a capping machine applies and tightens the closure.
                  In monobloc designs, the rinser, filler, and capper operate as a single integrated
                  unit for maximum hygiene and speed.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">5</div>
                <h3 className="mt-4 text-lg font-semibold">Labelling &amp; Coding</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Filled and capped bottles pass through a labelling machine (self-adhesive, sleeve,
                  or OPP wrap-around) and then a date/batch coder. Labelling must comply with UAE
                  bilingual (English/Arabic) requirements under ESMA food labelling standards.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">6</div>
                <h3 className="mt-4 text-lg font-semibold">Packing &amp; Palletising</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Bottles are grouped and packed into shrink-wrapped trays, cartons, or handled
                  packs. Automatic palletisers stack packed cases onto pallets ready for warehouse
                  storage or distribution across the UAE retail network.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild variant="outline">
              <Link href="/equipment/water-beverage/water-treatment/">
                View Water Treatment Equipment <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Sub-page Links */}
      <section className="px-4 py-12 md:px-6 md:py-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            title="Explore Filling Machine Types"
            subtitle="Detailed specifications, applications, and FAQs for each filling technology."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Link href="/equipment/filling-packaging/filling-machines/rotary-filling-machine/" className="group">
              <Card className="h-full transition-shadow hover:shadow-lg">
                <CardContent className="p-6">
                  <Badge variant="outline" className="mb-3">High Speed</Badge>
                  <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                    Rotary Filling Machine
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Carousel-based fillers for high-volume water and beverage production. 2,000-20,000+ BPH.
                  </p>
                  <span className="mt-3 inline-flex items-center text-sm text-primary">
                    View details <ArrowRight className="ml-1 h-3.5 w-3.5" />
                  </span>
                </CardContent>
              </Card>
            </Link>
            <Link href="/equipment/filling-packaging/filling-machines/piston-filling-machine/" className="group">
              <Card className="h-full transition-shadow hover:shadow-lg">
                <CardContent className="p-6">
                  <Badge variant="outline" className="mb-3">Viscous Products</Badge>
                  <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                    Piston Filling Machine
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Positive-displacement fillers for sauces, creams, oils, and thick pastes. ±0.5% accuracy.
                  </p>
                  <span className="mt-3 inline-flex items-center text-sm text-primary">
                    View details <ArrowRight className="ml-1 h-3.5 w-3.5" />
                  </span>
                </CardContent>
              </Card>
            </Link>
            <Link href="/equipment/filling-packaging/filling-machines/cup-filling-machine/" className="group">
              <Card className="h-full transition-shadow hover:shadow-lg">
                <CardContent className="p-6">
                  <Badge variant="outline" className="mb-3">Dairy &amp; Juice</Badge>
                  <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                    Cup Filling Machine
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Fill-and-seal machines for yoghurt, laban, juice cups, and dairy desserts. Up to 9,600 CPH.
                  </p>
                  <span className="mt-3 inline-flex items-center text-sm text-primary">
                    View details <ArrowRight className="ml-1 h-3.5 w-3.5" />
                  </span>
                </CardContent>
              </Card>
            </Link>
            <Link href="/equipment/filling-packaging/filling-machines/linear-filling-machine/" className="group">
              <Card className="h-full transition-shadow hover:shadow-lg">
                <CardContent className="p-6">
                  <Badge variant="outline" className="mb-3">Flexible</Badge>
                  <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                    Linear Filling Machine
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Straight-line fillers with gravity, overflow, and volumetric options. 500-6,000 BPH.
                  </p>
                  <span className="mt-3 inline-flex items-center text-sm text-primary">
                    View details <ArrowRight className="ml-1 h-3.5 w-3.5" />
                  </span>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Pacific Unity */}
      <section className="bg-muted/30 px-4 py-12 md:px-6 md:py-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeading title="Why Choose Pacific Unity for Filling Equipment in the UAE?" />
          <div className="grid gap-8 md:grid-cols-2">
            <div className="prose max-w-none text-muted-foreground">
              <p>
                Pacific Unity MEA — headquartered in Ras Al Khaimah, UAE and backed by parent company
                North Star Impex (Singapore, established 2013) — is a specialist supplier of filling
                machines and complete packaging lines for the food, beverage, and industrial sectors.
                Our track record includes over 200 projects across 9 countries, from single filling
                machines to complete turnkey production plants.
              </p>
              <ul className="mt-4 space-y-2">
                <li>200+ projects delivered across the Middle East and Asia</li>
                <li>Turnkey capability — from water treatment to palletising</li>
                <li>OYE complete water bottling plant among flagship projects</li>
                <li>Nationwide UAE installation and commissioning</li>
                <li>1-year warranty on all equipment</li>
                <li>4-6 week standard lead time from order to operation</li>
                <li>Spare parts stocked in the UAE for rapid support</li>
                <li>Annual maintenance contracts available</li>
              </ul>
            </div>
            <div className="flex items-center justify-center rounded-2xl bg-muted p-8">
              <div className="text-center">
                <ShieldCheck className="mx-auto h-16 w-16 text-primary" />
                <p className="mt-4 text-2xl font-bold">200+ Projects</p>
                <p className="mt-2 text-muted-foreground">Across 9 countries</p>
                <p className="mt-4 text-sm text-muted-foreground">
                  1-year warranty &middot; 4-6 week lead time &middot; UAE-wide service
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Equipment Links */}
      <section className="px-4 py-12 md:px-6 md:py-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeading title="Related Equipment" />
          <div className="grid gap-6 sm:grid-cols-3">
            {[
              {
                title: "Water Treatment Plants",
                desc: "RO systems and water purification for bottling lines.",
                href: "/equipment/water-beverage/water-treatment/",
              },
              {
                title: "Reverse Osmosis Plants",
                desc: "Industrial RO systems from 500 to 50,000 L/hr.",
                href: "/equipment/water-beverage/water-treatment/reverse-osmosis/",
              },
              {
                title: "Filling & Packaging Hub",
                desc: "Complete overview of filling and packaging solutions.",
                href: "/equipment/filling-packaging/",
              },
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
      <section className="bg-muted/30 px-4 py-12 md:px-6 md:py-16">
        <div className="mx-auto max-w-3xl">
          <SectionHeading title="Frequently Asked Questions About Filling Machines in the UAE" />
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 pb-12 md:px-6 md:pb-16">
        <div className="mx-auto max-w-7xl">
          <CTAStrip
            title="Need a Filling Machine for Your Production Line?"
            description="Tell us about your product, target speed, and container format. We will recommend the right filling solution and provide a detailed quotation."
            whatsappMessage="Hi, I'm interested in filling machines for my production facility in the UAE."
          />
        </div>
      </section>
    </>
  )
}
