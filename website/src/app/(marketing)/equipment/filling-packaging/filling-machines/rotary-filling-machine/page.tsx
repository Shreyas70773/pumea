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
  title: "Rotary Filling Machine Dubai — High-Speed Beverage Filling",
  description:
    "High-speed rotary filling machines for water, juice, and carbonated beverages in Dubai UAE. 2,000 to 20,000+ BPH with 12-72 filling heads. Request a quote from Pacific Unity.",
  keywords: [
    "rotary filling machine",
    "rotary filling machine Dubai",
    "high speed filling machine UAE",
    "beverage filling machine",
    "water bottle filling machine",
    "rotary filler UAE",
  ],
  alternates: {
    canonical: "https://pacificunity.ae/equipment/filling-packaging/filling-machines/rotary-filling-machine/",
  },
}

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "Equipment", href: "/equipment/" },
  { name: "Filling & Packaging", href: "/equipment/filling-packaging/" },
  { name: "Filling Machines", href: "/equipment/filling-packaging/filling-machines/" },
  { name: "Rotary Filling Machine", href: "/equipment/filling-packaging/filling-machines/rotary-filling-machine/" },
]

const speedData = [
  { heads: "12", speed: "2,000-4,000", container: "200 mL – 2 L", application: "Start-up water plant, small juice line" },
  { heads: "18", speed: "3,000-6,000", container: "200 mL – 2 L", application: "Growing water brand, flavoured water" },
  { heads: "24", speed: "4,000-8,000", container: "330 mL – 1.5 L", application: "Medium-volume water/juice bottling" },
  { heads: "36", speed: "6,000-12,000", container: "330 mL – 1.5 L", application: "Large water plant, multi-shift operation" },
  { heads: "48", speed: "10,000-16,000", container: "330 mL – 1 L", application: "High-speed water or CSD line" },
  { heads: "72", speed: "16,000-20,000+", container: "200 mL – 600 mL", application: "Ultra-high-speed PET water line" },
]

const faqs = [
  {
    question: "How does a rotary filling machine work?",
    answer:
      "A rotary filling machine uses a continuously rotating carousel (or turret) fitted with multiple filling valves arranged in a circle. Empty bottles enter the machine on a star wheel, are gripped by neck handling or base plates, and rotate past the filling valves. As each bottle rotates through approximately 270 degrees, the filling valve opens, dispenses the product, and closes before the bottle exits onto the discharge conveyor. The continuous rotary motion — as opposed to the start-stop motion of linear fillers — enables very high throughput because bottles are always in motion and multiple bottles are filled simultaneously. A 48-head rotary filler, for example, fills 48 bottles per revolution.",
  },
  {
    question: "What speed can a rotary filling machine achieve?",
    answer:
      "Rotary filling machine speeds depend on the number of filling heads and the container size. A 12-head gravity filler handles 2,000-4,000 bottles per hour (BPH), suitable for start-up water bottling operations in the UAE. A 24-head machine achieves 4,000-8,000 BPH for medium-volume production. A 48-head machine reaches 10,000-16,000 BPH. The largest 72-head machines exceed 20,000 BPH for small-format PET water bottles. Carbonated beverage fillers with counter-pressure valves typically achieve slightly lower speeds — approximately 80-90% of the equivalent still water filler — due to the additional pressurisation and de-foaming time required.",
  },
  {
    question: "What products can a rotary filling machine handle?",
    answer:
      "Rotary filling machines are designed primarily for free-flowing and low-viscosity liquids. The most common applications in the UAE include still water, sparkling water, carbonated soft drinks, fruit juices, energy drinks, iced tea, flavoured water, and light edible oils. Different valve types handle different product categories: gravity valves for still water and non-carbonated beverages, counter-pressure (isobaric) valves for carbonated drinks, and hot-fill valves for juice and tea products that require filling at 82-88°C for pasteurisation. Products with particulates (such as pulpy juice) require special wide-bore valves to prevent blockage.",
  },
  {
    question: "What is the difference between a monobloc and a standalone rotary filler?",
    answer:
      "A monobloc (also called a tribloc or combi machine) integrates the rinser, filler, and capper into a single enclosed unit with shared drives and controls. Bottles transfer between stages via star wheels without open conveyors, minimising contamination risk. A standalone rotary filler is the filling unit only, connected to separate rinsing and capping machines via air conveyors or mechanical conveyors. Monobloc machines are preferred for water and beverage production in the UAE because they occupy less floor space, reduce the number of transfer points where contamination can occur, and are easier to clean and maintain as a single unit.",
  },
  {
    question: "How much floor space does a rotary filling machine need?",
    answer:
      "Floor space requirements vary by head count and whether the machine is a standalone filler or a monobloc unit. A 12-head standalone filler occupies approximately 2 × 1.5 metres. A 24-head monobloc (rinser-filler-capper) requires approximately 4 × 3 metres. A 48-head monobloc needs approximately 6 × 4 metres. These dimensions are for the machine only — you also need space for infeed and outfeed conveyors, operator access, and CIP connections. Pacific Unity provides detailed factory layout drawings as part of every quotation to ensure the machine fits your UAE facility with proper access clearances.",
  },
  {
    question: "What maintenance does a rotary filling machine require?",
    answer:
      "Daily maintenance includes nozzle and valve cleaning, filling accuracy checks, and lubrication of star wheel guides. Weekly tasks cover valve seal and O-ring inspection, conveyor belt tension checks, and sensor calibration. Monthly maintenance involves complete valve overhaul, replacement of worn guide rails and wear parts, and a thorough CIP cycle of the entire product path. In the UAE, where ambient temperatures are high and dust is prevalent, air filtration systems protecting the filling zone require frequent filter changes — typically monthly rather than quarterly. Pacific Unity provides a detailed maintenance manual and spare parts list with every machine, plus optional annual maintenance contracts.",
  },
  {
    question: "Can a rotary filling machine be upgraded to increase speed later?",
    answer:
      "Upgrading a rotary filling machine to increase speed is generally not straightforward because the number of filling heads is fixed by the carousel diameter. However, speed improvements of 10-20% can often be achieved by optimising valve timing, upgrading to faster-acting valve actuators, or improving the infeed system to reduce gaps between bottles. For significant speed increases, a new machine with more heads is typically required. Pacific Unity advises UAE customers to specify a machine slightly above their current requirements to allow for growth — for example, choosing a 24-head machine when current demand only requires 18 heads.",
  },
  {
    question: "Does Pacific Unity supply rotary filling machines for carbonated drinks?",
    answer:
      "Yes, Pacific Unity supplies rotary filling machines configured specifically for carbonated beverages including soft drinks, sparkling water, and beer. Carbonated drink fillers use counter-pressure (isobaric) filling valves that pressurise the bottle with CO₂ before filling, preventing foaming and CO₂ loss. The filling zone is enclosed to maintain a clean atmosphere, and the machine includes a CO₂ recovery system to minimise gas waste. These machines are available from 12 to 72 heads and are suitable for glass bottles, PET bottles, and aluminium cans. All machines include installation, commissioning, and a 1-year warranty for UAE customers.",
  },
]

export default function RotaryFillingMachinePage() {
  return (
    <>
      <ProductSchema
        name="Rotary Filling Machine"
        description="High-speed rotary filling machines for water, juice, and carbonated beverages in Dubai and the UAE. 2,000 to 20,000+ BPH with 12-72 filling heads."
        image="/images/products/rotary-filling-machine.jpg"
        url="/equipment/filling-packaging/filling-machines/rotary-filling-machine/"
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
          <h1 className="max-w-4xl text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            Rotary Filling Machine Dubai — High-Speed Beverage Filling
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-muted-foreground">
            High-speed rotary filling machines for water bottling, juice production, and carbonated
            beverage lines across the UAE. Carousel-based continuous motion fillers from 2,000 to
            20,000+ bottles per hour — supplied with installation, commissioning, and a 1-year warranty.
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
            title="How a Rotary Filling Machine Works"
            subtitle="Continuous carousel motion enables the highest throughput of any filling technology."
          />
          <div className="prose max-w-none text-muted-foreground">
            <p>
              A rotary filling machine operates on a carousel (turret) principle. The turret carries
              a ring of filling valves — anywhere from 12 to 72 or more — arranged around its
              circumference. Empty bottles are fed into the machine via a star wheel that spaces
              them evenly and places each bottle under a filling valve. As the turret rotates, the
              filling valve opens and dispenses a precisely measured quantity of product into the
              bottle. By the time the bottle has completed roughly three-quarters of a full
              revolution, filling is complete, the valve closes, and the bottle is transferred to
              the next stage — typically a capping machine.
            </p>
            <p className="mt-4">
              The key advantage of rotary filling over linear filling is that multiple bottles are
              filled simultaneously and continuously, without the start-stop indexing that limits
              linear machine speeds. A 48-head rotary filler, for example, fills 48 bottles during
              every single revolution of the turret. At typical rotation speeds and with 500 mL PET
              bottles, this translates to 12,000-16,000 bottles per hour — throughput that would
              require four or five linear filling machines operating in parallel.
            </p>
            <p className="mt-4">
              In the UAE water and beverage market, rotary filling machines are the standard choice
              for production lines above 4,000 BPH. Pacific Unity supplies gravity-type rotary
              fillers for still water and juices, counter-pressure fillers for carbonated soft drinks
              and sparkling water, and hot-fill rotary machines for pasteurised juice and tea products
              that require filling at elevated temperatures (82-88°C).
            </p>
          </div>
        </div>
      </section>

      {/* Speed Range Table */}
      <section className="bg-muted/30 px-4 py-12 md:px-6 md:py-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            title="Rotary Filler Speed Range by Head Count"
            subtitle="Higher head counts deliver proportionally higher throughput for UAE production lines."
          />
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Filling Heads</TableHead>
                  <TableHead>Speed (BPH)</TableHead>
                  <TableHead>Container Range</TableHead>
                  <TableHead>Typical Application</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {speedData.map((row) => (
                  <TableRow key={row.heads}>
                    <TableCell className="font-medium">{row.heads}</TableCell>
                    <TableCell>{row.speed}</TableCell>
                    <TableCell>{row.container}</TableCell>
                    <TableCell>{row.application}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            Speeds based on 500 mL PET bottles with gravity filling. Actual BPH varies with container
            size and product type.{" "}
            <Link href="/request-quote/" className="text-primary underline">
              Request a quote for pricing
            </Link>{" "}
            based on your specific requirements.
          </p>
        </div>
      </section>

      {/* Applications */}
      <section className="px-4 py-12 md:px-6 md:py-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            title="Rotary Filler Applications in the UAE"
            subtitle="The preferred filling technology for high-volume liquid production across the Gulf region."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Still Water Bottling",
                desc: "Gravity-type rotary fillers for 200 mL to 2 L PET water bottles. The dominant filling technology in UAE water plants, handling ESMA-compliant packaged drinking water at speeds from 4,000 to 20,000+ BPH with fill accuracy within ±1% of target volume.",
              },
              {
                title: "Carbonated Soft Drinks",
                desc: "Counter-pressure (isobaric) rotary fillers for CSD production. The bottle is pre-pressurised with CO₂ to match the product pressure before filling begins, preventing foaming and maintaining carbonation levels. Glass, PET, and aluminium can formats available.",
              },
              {
                title: "Juice &amp; Tea (Hot Fill)",
                desc: "Hot-fill rotary machines for pasteurised juice, iced tea, and functional beverages. Product is filled at 82-88°C to achieve in-container sterilisation, eliminating the need for preservatives. Special heat-resistant PET bottles or glass containers required.",
              },
              {
                title: "Edible Oil",
                desc: "Volumetric rotary fillers with anti-drip nozzles for cooking oil, olive oil, and sunflower oil in PET and glass bottles. Servo-driven flow meters ensure accurate fills regardless of temperature-related viscosity changes common in UAE warehouses.",
              },
              {
                title: "Flavoured &amp; Enhanced Water",
                desc: "Modified gravity fillers for flavoured water, vitamin water, and electrolyte drinks. CIP-ready product path enables rapid changeover between plain water and flavoured variants — a common requirement for UAE beverage brands with multiple SKUs.",
              },
              {
                title: "Dairy Beverages",
                desc: "Aseptic and ultra-clean rotary fillers for UHT milk, flavoured milk, and yoghurt drinks. Extended shelf life configurations with sterile air overpressure in the filling zone, meeting the stringent hygiene requirements of the UAE dairy industry.",
              },
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
      <section className="bg-muted/30 px-4 py-12 md:px-6 md:py-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeading title="Key Features" />
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Stainless steel 304/316 product contact parts — food-grade and corrosion-resistant",
              "PLC touchscreen control with recipe storage for multi-product operation",
              "Automatic CIP (clean-in-place) for rapid sanitisation between production runs",
              "Neck handling for lightweight PET bottles — no container deformation",
              "Enclosed filling zone with HEPA-filtered air for hygiene-critical applications",
              "Monobloc integration available — rinser, filler, and capper in a single unit",
              "Servo-driven turret for precise speed control and gentle bottle handling",
              "Quick-change star wheels for different bottle diameters within the same machine",
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
      <section className="px-4 py-12 md:px-6 md:py-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeading title="Related Equipment" />
          <div className="grid gap-6 sm:grid-cols-3">
            {[
              { title: "All Filling Machines", desc: "Compare rotary, linear, piston, and cup fillers.", href: "/equipment/filling-packaging/filling-machines/" },
              { title: "Linear Filling Machine", desc: "Mid-volume straight-line fillers for flexible operations.", href: "/equipment/filling-packaging/filling-machines/linear-filling-machine/" },
              { title: "Water Treatment Plants", desc: "RO systems to feed your water bottling line.", href: "/equipment/water-beverage/water-treatment/" },
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
          <SectionHeading title="Frequently Asked Questions About Rotary Filling Machines" />
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 pb-12 md:px-6 md:pb-16">
        <div className="mx-auto max-w-7xl">
          <CTAStrip
            title="Need a High-Speed Rotary Filler?"
            description="Tell us your target BPH, product type, and container format. We will recommend the optimal rotary filling configuration for your UAE facility."
            whatsappMessage="Hi, I'm interested in a rotary filling machine for my production line in the UAE."
          />
        </div>
      </section>
    </>
  )
}
