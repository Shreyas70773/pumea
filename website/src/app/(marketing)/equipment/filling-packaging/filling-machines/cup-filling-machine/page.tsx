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
  title: "Cup Filling Machine Dubai — Yoghurt, Juice & Dairy Cup Fillers",
  description:
    "Cup filling and sealing machines for yoghurt, juice, laban, and dairy products in Dubai UAE. 1,200 to 9,600 cups per hour. Request a quote from Pacific Unity.",
  keywords: [
    "cup filling machine",
    "cup filling machine Dubai",
    "yoghurt filling machine UAE",
    "cup sealing machine",
    "dairy cup filler",
    "juice cup filling machine Dubai",
    "laban filling machine UAE",
  ],
  alternates: {
    canonical: "https://pacificunity.ae/equipment/filling-packaging/filling-machines/cup-filling-machine/",
  },
}

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "Equipment", href: "/equipment/" },
  { name: "Filling & Packaging", href: "/equipment/filling-packaging/" },
  { name: "Filling Machines", href: "/equipment/filling-packaging/filling-machines/" },
  { name: "Cup Filling Machine", href: "/equipment/filling-packaging/filling-machines/cup-filling-machine/" },
]

const cupModels = [
  { lanes: "1", speed: "1,200-1,800", cups: "70-180 mL", sealing: "Heat seal", application: "Small dairy, dips" },
  { lanes: "2", speed: "2,400-3,600", cups: "70-250 mL", sealing: "Heat seal + lid press", application: "Yoghurt, laban, juice" },
  { lanes: "4", speed: "4,800-7,200", cups: "100-500 mL", sealing: "Heat seal + lid press", application: "Medium dairy plant" },
  { lanes: "6", speed: "6,000-8,400", cups: "100-500 mL", sealing: "Heat seal + lid snap", application: "Large yoghurt line" },
  { lanes: "8", speed: "7,200-9,600", cups: "70-250 mL", sealing: "Heat seal + lid press", application: "High-speed juice/dairy" },
]

const faqs = [
  {
    question: "How does a cup filling machine work?",
    answer:
      "A cup filling machine operates in a series of indexed steps. First, pre-formed cups are loaded into the machine — either manually into a magazine or automatically from a de-nester that separates stacked cups one by one. The cups are placed into carriers on a conveyor or rotary table. At the filling station, a dosing system (piston, volumetric, or gravity) dispenses the precise volume of product into each cup. The filled cups then move to the sealing station, where a heat-seal unit presses a pre-cut film or foil lid onto the cup rim under controlled temperature and pressure, creating a tamper-evident hermetic seal. Optional additional stations include lid pressing (snap-on overcap), date coding, and cup ejection onto an outfeed conveyor.",
  },
  {
    question: "What products can be filled using a cup filling machine in the UAE?",
    answer:
      "Cup filling machines are widely used in the UAE for dairy products (yoghurt, laban, flavoured milk, cream cheese, labneh), fresh juice and smoothies, water cups for airlines and catering, hummus and dips, fruit salads, prepared salads, desserts (puddings, custard, mousse), ice cream, and honey portions. The UAE market has particularly high demand for yoghurt and laban cup filling due to the large dairy processing sector, as well as single-serve juice cups for retail and HoReCa (hotel, restaurant, and catering) distribution channels. Cup sizes typically range from 70 mL for airline water cups to 500 mL for family-size yoghurt tubs.",
  },
  {
    question: "What cup sizes can a cup filling machine handle?",
    answer:
      "Cup filling machines handle a wide range of pre-formed container sizes, typically from 70 mL (airline water cups, portion-control dips) to 500 mL (large yoghurt tubs, fresh juice cups). Some machines accommodate tubs up to 1,000 mL for family-size dairy products. The cup diameter typically ranges from 60 mm to 120 mm. When specifying a cup filling machine for your UAE facility, you should define all the cup sizes you plan to run — the machine is configured with changeover tooling (cup carriers, sealing dies) for each size. Pacific Unity supplies machines that handle multiple cup formats with quick-change tooling for minimal downtime during size changeovers.",
  },
  {
    question: "What is the difference between heat sealing and snap-on lid application?",
    answer:
      "Heat sealing presses a foil or plastic film onto the cup rim using a heated die, typically at 150-200°C for 0.5-2 seconds depending on the material. This creates a hermetic, tamper-evident seal that prevents contamination and extends shelf life. Snap-on lids (overcaps) are rigid plastic lids that are pressed onto the cup after heat sealing — they provide a re-closable cover for the consumer. Most yoghurt and dairy cup filling machines in the UAE use both: a heat-sealed inner foil for product protection and food safety compliance, plus a snap-on overcap for consumer convenience and retail shelf presentation.",
  },
  {
    question: "What speed can a cup filling machine achieve?",
    answer:
      "Cup filling machine speeds depend on the number of lanes (cups filled per cycle) and the cycle time. A single-lane machine fills 1,200-1,800 cups per hour, suitable for artisan producers and small dairies. A 4-lane machine achieves 4,800-7,200 cups per hour for medium-scale production. The fastest 8-lane machines reach 7,200-9,600 cups per hour. Rotary cup fillers — which use a carousel similar to rotary bottle fillers — can exceed 12,000 cups per hour for very high-volume operations. Cycle time is influenced by fill volume, sealing time, and whether additional operations (lid pressing, coding) are included in the machine.",
  },
  {
    question: "What hygiene standards do cup filling machines meet for UAE dairy production?",
    answer:
      "Cup filling machines supplied by Pacific Unity for UAE dairy production are designed to meet HACCP, Dubai Municipality FoodWatch, and ESMA food contact requirements. Machines feature stainless steel 304/316 construction, food-grade silicone and EPDM seals, fully enclosed filling and sealing zones with HEPA-filtered positive air pressure, CIP-compatible product paths, and tool-free disassembly for daily cleaning. For extended shelf life (ESL) and aseptic applications, machines include UV or hydrogen peroxide cup sterilisation before filling, sterile air supply to the filling zone, and validated decontamination cycles — meeting the stringent requirements of UAE dairy brands distributing through chilled and ambient supply chains.",
  },
  {
    question: "Can a cup filling machine fill both liquid and semi-solid products?",
    answer:
      "Yes, cup filling machines can be configured with different dosing systems to handle various product consistencies. Gravity or volumetric dosing handles thin liquids like juice and laban. Piston dosing handles semi-solid products like set yoghurt, cream cheese, and hummus. Some machines include dual-dosing capability — for example, a piston doser for yoghurt followed by a gravity doser for fruit topping or sauce, creating layered or topped products in a single pass. This multi-dose capability is popular with UAE dairy producers who make yoghurt with fruit compote or honey drizzle toppings.",
  },
  {
    question: "How much does a cup filling machine cost in Dubai?",
    answer:
      "Cup filling machine costs in Dubai vary based on the number of lanes, speed, automation level, and hygiene specification. A basic single-lane machine suitable for a start-up dairy or artisan producer represents a lower capital investment. A 4-lane semi-automatic machine for medium production volumes falls in the mid-range. Fully automatic 6-8 lane machines with integrated cup de-nesting, filling, sealing, lid pressing, date coding, and outfeed conveyor represent a higher investment. Aseptic or ultra-clean versions for ESL products cost more than standard models. Pacific Unity provides detailed quotations based on your specific requirements — request a quote for pricing that includes installation, commissioning, and training.",
  },
]

export default function CupFillingMachinePage() {
  return (
    <>
      <ProductSchema
        name="Cup Filling Machine"
        description="Cup filling and sealing machines for yoghurt, juice, laban, and dairy products in Dubai and the UAE. 1,200 to 9,600 cups per hour."
        image="/images/products/cup-filling-machine.jpg"
        url="/equipment/filling-packaging/filling-machines/cup-filling-machine/"
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
            Cup Filling Machine Dubai — Yoghurt, Juice &amp; Dairy Cup Fillers
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-muted-foreground">
            Automatic cup filling and sealing machines for yoghurt, laban, fresh juice, dairy desserts,
            and dips — designed for the UAE food and dairy industry. From 1,200 to 9,600 cups per hour
            with heat sealing and snap-on lid application, supplied with installation and a 1-year warranty.
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
            title="How Cup Filling &amp; Sealing Works"
            subtitle="A multi-stage process that fills, seals, and caps pre-formed cups in a single machine."
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { step: "1", label: "Cup De-Nesting", desc: "Pre-formed cups are separated from a stacked magazine and placed into carriers on the machine's conveyor or rotary table. Automatic de-nesters handle stacks of 50-100 cups for continuous operation." },
              { step: "2", label: "Filling", desc: "At the dosing station, a piston or volumetric filler dispenses the precise volume of product into each cup. Multi-dose systems can layer different products — yoghurt with fruit compote, for example." },
              { step: "3", label: "Heat Sealing", desc: "A foil or plastic film is drawn from a roll, cut to size, and pressed onto the cup rim using a heated die. The seal temperature and dwell time are controlled precisely to create a hermetic, tamper-evident closure." },
              { step: "4", label: "Lid Pressing &amp; Ejection", desc: "If required, a snap-on overcap is placed and pressed onto the sealed cup. The finished cups are ejected onto an outfeed conveyor for date coding, packing, and cold storage." },
            ].map((s) => (
              <Card key={s.step}>
                <CardContent className="p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">{s.step}</div>
                  <h3 className="mt-4 text-lg font-semibold">{s.label}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Speed Table */}
      <section className="bg-muted/30 px-4 py-12 md:px-6 md:py-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            title="Cup Filler Speed Range by Lane Count"
            subtitle="More lanes fill more cups per cycle, increasing hourly throughput."
          />
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Lanes</TableHead>
                  <TableHead>Speed (CPH)</TableHead>
                  <TableHead>Cup Size Range</TableHead>
                  <TableHead>Sealing Type</TableHead>
                  <TableHead>Typical Application</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {cupModels.map((row) => (
                  <TableRow key={row.lanes}>
                    <TableCell className="font-medium">{row.lanes}</TableCell>
                    <TableCell>{row.speed}</TableCell>
                    <TableCell>{row.cups}</TableCell>
                    <TableCell>{row.sealing}</TableCell>
                    <TableCell>{row.application}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            CPH = Cups Per Hour. Speeds based on 150 mL yoghurt cups. Actual output varies with cup size,
            fill volume, and sealing time.{" "}
            <Link href="/request-quote/" className="text-primary underline">
              Request a quote for pricing
            </Link>{" "}
            tailored to your dairy or beverage production requirements.
          </p>
        </div>
      </section>

      {/* Dairy & Yoghurt Applications */}
      <section className="px-4 py-12 md:px-6 md:py-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            title="Dairy, Yoghurt &amp; Juice Applications in the UAE"
            subtitle="Cup fillers serve the UAE's thriving dairy and fresh juice sectors."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Yoghurt &amp; Laban", desc: "Set yoghurt, stirred yoghurt, Greek yoghurt, and laban (buttermilk) — the largest application for cup filling machines in the UAE. Machines handle both pourable and thick-set products with piston dosing for consistent cup weights that meet ESMA net content regulations." },
              { title: "Fresh Juice &amp; Smoothies", desc: "Single-serve juice cups for UAE retail chains, airlines, and HoReCa distribution. Heat-sealed cups provide tamper evidence and extended freshness compared to open cups. Popular formats include 200 mL retail cups and 125 mL airline-portion cups." },
              { title: "Cream Cheese &amp; Labneh", desc: "Thick dairy spreads filled into tubs with foil sealing and snap-on lids. Piston dosing ensures accurate fills of these high-viscosity products, while wide-bore nozzles prevent air pockets that affect product quality and shelf presentation." },
              { title: "Hummus &amp; Dips", desc: "Portion-control cups and retail tubs for hummus, muhammara, baba ghanoush, and other Middle Eastern dips. Modified atmosphere packaging (MAP) options available for nitrogen flushing to extend shelf life without preservatives." },
              { title: "Desserts &amp; Puddings", desc: "Custard, rice pudding, mousse, and crème caramel in portion cups. Multi-dose systems can create layered products — caramel base with custard overlay — in a single filling cycle for UAE dessert manufacturers." },
              { title: "Water Cups (Airlines &amp; Catering)", desc: "Small sealed water cups (70-125 mL) for airlines, catering companies, and event services across the UAE. High-speed 8-lane machines produce the volumes needed for large-scale catering operations servicing Dubai International Airport and Abu Dhabi airport." },
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
              "Stainless steel 304/316 frame and product contact parts — HACCP-compliant",
              "Automatic cup de-nesting from stacked magazines — 50-100 cup capacity",
              "Piston and volumetric dosing options for liquid and semi-solid products",
              "Heat sealing with temperature, pressure, and dwell time control",
              "Snap-on overcap placement for consumer-friendly re-closable packaging",
              "Quick-change tooling for different cup sizes — changeover in 10-20 minutes",
              "CIP-ready product path for rapid sanitation between production runs",
              "Optional nitrogen flushing (MAP) for extended shelf life packaging",
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
              { title: "Piston Filling Machine", desc: "Viscous product fillers for sauces, creams, and oils.", href: "/equipment/filling-packaging/filling-machines/piston-filling-machine/" },
              { title: "Water Treatment Plants", desc: "RO systems for juice and dairy production water.", href: "/equipment/water-beverage/water-treatment/" },
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
          <SectionHeading title="Frequently Asked Questions About Cup Filling Machines" />
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 pb-12 md:px-6 md:pb-16">
        <div className="mx-auto max-w-7xl">
          <CTAStrip
            title="Need a Cup Filler for Dairy or Juice Production?"
            description="Tell us about your product, cup size, and target speed. We will recommend the right cup filling machine for your UAE facility."
            whatsappMessage="Hi, I'm interested in a cup filling machine for dairy/juice production in the UAE."
          />
        </div>
      </section>
    </>
  )
}
