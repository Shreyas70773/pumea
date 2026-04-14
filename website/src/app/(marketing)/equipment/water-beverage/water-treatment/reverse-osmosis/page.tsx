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
  title: "Reverse Osmosis Plant Dubai — RO Systems for UAE Industries",
  description:
    "Industrial reverse osmosis plants from 500 L/hr to 50,000 L/hr in Dubai UAE. Brackish and seawater RO systems for water bottling, food production, and industrial use. Request a quote.",
  keywords: [
    "reverse osmosis plant",
    "RO system Dubai",
    "RO plant UAE",
    "reverse osmosis system UAE",
    "industrial RO plant Dubai",
  ],
  alternates: {
    canonical: "https://pacificunity.ae/equipment/water-beverage/water-treatment/reverse-osmosis/",
  },
}

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "Equipment", href: "/equipment/" },
  { name: "Water Treatment", href: "/equipment/water-beverage/water-treatment/" },
  { name: "Reverse Osmosis Plant", href: "/equipment/water-beverage/water-treatment/reverse-osmosis/" },
]

const roModels = [
  { model: "PU-RO-500", capacity: "500 L/hr", type: "Brackish", membranes: "2 × 4040", pressure: "10-15 bar", recovery: "65-75%", use: "Small commercial, clinic" },
  { model: "PU-RO-1000", capacity: "1,000 L/hr", type: "Brackish", membranes: "4 × 4040", pressure: "10-15 bar", recovery: "65-75%", use: "Restaurant, small bottling" },
  { model: "PU-RO-2000", capacity: "2,000 L/hr", type: "Brackish", membranes: "4 × 8040", pressure: "10-15 bar", recovery: "70-75%", use: "F&B production, hotel" },
  { model: "PU-RO-5000", capacity: "5,000 L/hr", type: "Brackish", membranes: "6 × 8040", pressure: "12-16 bar", recovery: "70-75%", use: "Beverage plant, dairy" },
  { model: "PU-RO-10K", capacity: "10,000 L/hr", type: "Brackish", membranes: "12 × 8040", pressure: "12-16 bar", recovery: "70-80%", use: "Large factory, pharma" },
  { model: "PU-SWRO-5000", capacity: "5,000 L/hr", type: "Seawater", membranes: "12 × 8040", pressure: "55-70 bar", recovery: "35-45%", use: "Coastal site, island" },
]

const faqs = [
  {
    question: "What is the difference between a brackish water RO plant and a seawater RO plant?",
    answer:
      "Brackish water RO plants treat water with TDS levels between 1,000-10,000 mg/L — this includes UAE municipal water, borehole water, and treated wastewater. They operate at relatively low pressures (10-16 bar) with recovery rates of 65-80%. Seawater RO (SWRO) plants treat water with TDS levels of 30,000-45,000 mg/L — typical of Arabian Gulf seawater. SWRO systems require much higher pressures (55-70 bar), use specialised membranes, and have lower recovery rates (35-45%). SWRO plants are significantly more expensive due to the high-pressure pumps, energy recovery devices, and corrosion-resistant materials required.",
  },
  {
    question: "How much does an RO plant cost in Dubai?",
    answer:
      "RO plant costs in Dubai vary significantly by capacity and type. A compact 500 L/hr brackish water RO unit starts from approximately AED 12,000. A 2,000 L/hr system for food production ranges from AED 35,000 to AED 80,000. Large 10,000 L/hr industrial systems start from AED 200,000. Seawater RO plants are 2-3 times more expensive than equivalent brackish water systems due to the specialised components required. These prices include the RO unit itself — pre-treatment, post-treatment, storage, and installation are quoted separately based on your specific site requirements. Contact Pacific Unity for a detailed quotation.",
  },
  {
    question: "What is the lifespan of an RO membrane in UAE conditions?",
    answer:
      "RO membranes typically last 2-4 years in UAE conditions, depending on feed water quality, operating hours, and maintenance practices. The main factors reducing membrane life in the UAE are: high ambient temperatures accelerating biofouling, inadequate pre-treatment allowing scaling, and insufficient CIP (Clean in Place) frequency. With proper pre-treatment and regular maintenance — quarterly CIP cleaning and monthly performance monitoring — membrane life can be extended to 4-5 years. Replacement membranes cost between AED 500-2,500 each depending on size and type. Pacific Unity supplies replacement membranes and provides CIP services as part of our maintenance contracts.",
  },
  {
    question: "What power supply does an RO plant need?",
    answer:
      "Power requirements depend on the system capacity and type. A 1,000 L/hr brackish water RO plant typically requires 2-3 kW of power (single or three-phase). A 5,000 L/hr system needs approximately 7-10 kW. A 10,000 L/hr industrial plant requires 15-25 kW. Seawater RO plants consume significantly more energy — approximately 3-5 kWh per cubic metre of permeate versus 0.5-1.5 kWh for brackish water systems. All Pacific Unity RO plants are designed for the UAE standard 380V/3-phase/50Hz power supply. Systems for remote sites can be specified with solar power integration or generator compatibility.",
  },
  {
    question: "How much reject water does an RO plant produce?",
    answer:
      "The reject (brine) volume depends on the recovery rate. For UAE municipal water treatment at 70-75% recovery, a 1,000 L/hr RO plant produces approximately 250-300 L/hr of reject water. For seawater RO at 40% recovery, a 1,000 L/hr plant produces approximately 1,500 L/hr of reject. In the UAE, brine discharge is regulated under Law No. 18 of 2024 — TDS must be below 3,000 mg/L for sewer discharge. Many UAE facilities reuse reject water for cooling, irrigation, or cleaning to reduce waste and water costs.",
  },
  {
    question: "Can I expand my RO plant capacity later?",
    answer:
      "Yes. Pacific Unity designs RO plants with expandability in mind. Our frame and piping systems can accommodate additional membrane vessels, allowing capacity increases of 25-50% without replacing the entire unit. The high-pressure pump and control system can be specified for the target future capacity from the outset, with additional membranes added as demand grows. This staged approach reduces the initial capital investment while ensuring the system can grow with your business. Expansion typically takes 1-2 weeks and can often be done with minimal production interruption.",
  },
  {
    question: "Does Pacific Unity supply RO plants for water bottling in the UAE?",
    answer:
      "Yes, Pacific Unity supplies complete RO systems specifically configured for bottled water production in the UAE. These systems include the multi-stage RO unit, ozone treatment for disinfection, UV sterilisation, mineral dosing for taste profile adjustment, and integration with filling line feed tanks. Bottled water RO plants must meet EQM (Emirates Quality Mark) standards and produce water compliant with UAE.S GSO 1025 for packaged drinking water. We also assist with the documentation required for EQM certification and ESMA compliance.",
  },
  {
    question: "What feed water quality can an RO plant handle?",
    answer:
      "Standard brackish water RO plants handle feed water with TDS up to 5,000-10,000 mg/L, turbidity below 1 NTU (after pre-treatment), and temperature between 5-45°C. Seawater RO plants handle feed TDS up to 45,000 mg/L. For UAE municipal water (typically 100-500 mg/L TDS), standard brackish water RO is more than sufficient. Borehole water in the UAE can have TDS ranging from 1,000 to 15,000 mg/L depending on location and depth — requiring either standard or enhanced brackish water RO. A water analysis is always the first step to specify the correct system configuration.",
  },
]

export default function ReverseOsmosisPage() {
  return (
    <>
      <ProductSchema
        name="Reverse Osmosis Plant (RO Plant)"
        description="Industrial reverse osmosis plants from 500 L/hr to 50,000 L/hr for water treatment in Dubai and the UAE. Brackish and seawater configurations."
        image="/images/products/ro-plant.jpg"
        url="/equipment/water-beverage/water-treatment/reverse-osmosis/"
        category="Water Treatment Equipment"
      />
      <FAQPageSchema faqs={faqs} />
      <BreadcrumbSchema items={breadcrumbs} />

      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <Breadcrumbs items={breadcrumbs} />
      </div>

      <section className="bg-gradient-to-br from-background to-muted/40 px-4 pb-12 pt-8 md:px-6 md:pb-16 md:pt-12">
        <div className="mx-auto max-w-7xl">
          <h1 className="max-w-4xl text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            Reverse Osmosis Plant Dubai — Industrial RO Systems for the UAE
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-muted-foreground">
            Industrial-grade reverse osmosis plants for water purification, desalination, and
            process water treatment across the UAE. Brackish and seawater configurations from
            500 L/hr to 50,000 L/hr — supplied with full installation and commissioning.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/request-quote/">Request a Quote <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="px-4 py-12 md:px-6 md:py-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeading title="What Is a Reverse Osmosis Plant?" />
          <div className="prose max-w-none text-muted-foreground">
            <p>
              A reverse osmosis (RO) plant is a water purification system that uses semi-permeable
              membranes to remove dissolved salts, minerals, bacteria, viruses, and chemical
              contaminants from water. RO is the core technology behind virtually every water
              bottling plant, beverage production facility, and pharmaceutical water system
              operating in the UAE today.
            </p>
            <p className="mt-4">
              The technology is particularly relevant to the UAE because the country&apos;s municipal
              water supply originates from large-scale seawater desalination. While this water meets
              WHO drinking standards, it may accumulate dissolved minerals and contaminants during
              distribution through building pipework and storage tanks. An industrial RO plant
              provides a final, controlled purification stage that ensures consistent water quality
              for production processes.
            </p>
            <p className="mt-4">
              RO systems operating in the UAE typically achieve 95-99% salt rejection from municipal
              or borehole water sources, reducing TDS from 200-5,000 mg/L down to 5-50 mg/L.
              Recovery rates range from 65-80% for brackish water applications and 35-45% for
              seawater desalination. Pacific Unity supplies both standard and high-recovery RO
              configurations optimised for UAE water conditions.
            </p>
          </div>
        </div>
      </section>

      {/* Model Range */}
      <section className="bg-muted/30 px-4 py-12 md:px-6 md:py-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeading title="RO Plant Model Range" subtitle="Available in brackish water and seawater configurations." />
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Model</TableHead>
                  <TableHead>Capacity</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Membranes</TableHead>
                  <TableHead>Pressure</TableHead>
                  <TableHead>Recovery</TableHead>
                  <TableHead>Typical Use</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {roModels.map((m) => (
                  <TableRow key={m.model}>
                    <TableCell className="font-medium">{m.model}</TableCell>
                    <TableCell>{m.capacity}</TableCell>
                    <TableCell>{m.type}</TableCell>
                    <TableCell>{m.membranes}</TableCell>
                    <TableCell>{m.pressure}</TableCell>
                    <TableCell>{m.recovery}</TableCell>
                    <TableCell>{m.use}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            Custom capacities up to 50,000 L/hr available.{" "}
            <Link href="/request-quote/" className="text-primary underline">Request a quote</Link>{" "}
            for systems outside the standard range.
          </p>
        </div>
      </section>

      {/* Key Features */}
      <section className="px-4 py-12 md:px-6 md:py-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeading title="Key Features of Pacific Unity RO Plants" />
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Skid-mounted frame — stainless steel or powder-coated carbon steel",
              "High-rejection polyamide thin-film composite membranes",
              "Multistage stainless steel high-pressure pump (Grundfos or CNP)",
              "PLC touchscreen control with auto-flush and CIP programming",
              "TDS, flow, and pressure monitoring with data logging",
              "Auto-shutdown on low feed pressure or high TDS permeate",
              "Compact footprint — designed for UAE industrial zone space constraints",
              "Pre-wired and pre-plumbed for rapid on-site installation",
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
              { title: "Water Treatment Hub", desc: "Complete water treatment solutions overview.", href: "/equipment/water-beverage/water-treatment/" },
              { title: "Water Treatment System", desc: "Integrated pre-treatment + RO + post-treatment.", href: "/equipment/water-beverage/water-treatment/water-treatment-system/" },
              { title: "Desalination Plant", desc: "Seawater desalination equipment for UAE.", href: "/equipment/water-beverage/water-treatment/desalination-plant/" },
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

      <section className="px-4 py-12 md:px-6 md:py-16">
        <div className="mx-auto max-w-3xl">
          <SectionHeading title="Frequently Asked Questions" />
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      <section className="px-4 pb-12 md:px-6 md:pb-16">
        <div className="mx-auto max-w-7xl">
          <CTAStrip
            title="Get an RO Plant Quote"
            description="Tell us your daily water requirement and source water quality. We will specify the right RO system for your operation."
            whatsappMessage="Hi, I need a reverse osmosis plant for my facility in the UAE."
          />
        </div>
      </section>
    </>
  )
}
