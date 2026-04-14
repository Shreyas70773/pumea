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
import { Badge } from "@/components/ui/badge"
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
  title: "Industrial Water Treatment System Dubai — Complete Solutions",
  description:
    "Complete industrial water treatment systems in Dubai and the UAE. Pre-treatment, reverse osmosis, post-treatment, and storage integrated into turnkey solutions. Request a quote.",
  keywords: [
    "water treatment system",
    "water treatment system Dubai",
    "industrial water treatment UAE",
    "water purification system Dubai",
    "complete water treatment plant",
  ],
  alternates: {
    canonical: "https://pacificunity.ae/equipment/water-beverage/water-treatment/water-treatment-system/",
  },
}

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "Equipment", href: "/equipment/" },
  { name: "Water Treatment", href: "/equipment/water-beverage/water-treatment/" },
  { name: "Water Treatment System", href: "/equipment/water-beverage/water-treatment/water-treatment-system/" },
]

const systemComponents = [
  { component: "Raw Water Pump", function: "Draws water from municipal supply or storage tank", material: "Stainless steel / Cast iron" },
  { component: "Multi-Media Filter", function: "Removes suspended solids, turbidity, and sediment", material: "FRP vessel with graded media" },
  { component: "Activated Carbon Filter", function: "Removes chlorine, organics, taste, and odour", material: "FRP vessel with GAC media" },
  { component: "Water Softener", function: "Removes hardness (calcium and magnesium ions)", material: "FRP vessel with ion exchange resin" },
  { component: "Anti-Scalant Dosing", function: "Prevents membrane scaling and fouling", material: "Chemical dosing pump + tank" },
  { component: "Micron Cartridge Filter", function: "Final particulate removal before RO membranes", material: "5-micron PP cartridges" },
  { component: "High-Pressure Pump", function: "Generates required pressure for RO process", material: "Stainless steel multistage" },
  { component: "RO Membrane Array", function: "Removes 95-99% of dissolved solids and contaminants", material: "Polyamide thin-film composite" },
  { component: "Post-Mineralisation", function: "Adds back minerals for taste and pH balance", material: "Calcite or mineral ball filter" },
  { component: "UV Steriliser", function: "Destroys remaining bacteria and viruses", material: "Stainless steel chamber + UV lamp" },
  { component: "Treated Water Tank", function: "Stores purified water for distribution", material: "Food-grade SS304 or SS316L" },
  { component: "Distribution Pump", function: "Delivers treated water to production points", material: "Stainless steel" },
]

const faqs = [
  {
    question: "What is included in a complete water treatment system from Pacific Unity?",
    answer:
      "A complete water treatment system from Pacific Unity includes pre-treatment (multi-media filtration, activated carbon filtration, and water softening), the core reverse osmosis unit with high-pressure pump and membrane array, post-treatment (remineralisation, UV sterilisation, and pH adjustment), treated water storage in food-grade stainless steel tanks, and a distribution pump system. We also include the control panel with PLC automation, all interconnecting pipework, and a CIP (Clean in Place) system for membrane maintenance. Every system is delivered with installation, commissioning, operator training, and a comprehensive 12-month warranty covering all components.",
  },
  {
    question: "How much does a complete water treatment system cost in the UAE?",
    answer:
      "Water treatment system costs in the UAE depend on the capacity, water source quality, and treatment stages required. A compact system for a small food outlet (500-1,000 L/hr) typically ranges from AED 20,000 to AED 50,000. Mid-range systems for commercial food production (2,000-5,000 L/hr) cost between AED 60,000 and AED 200,000. Large industrial systems (10,000 L/hr and above) start from AED 300,000 and can exceed AED 1,500,000 for fully automated plants with advanced monitoring. Pacific Unity provides detailed quotations after conducting a water quality analysis and understanding your specific production requirements.",
  },
  {
    question: "How long does it take to install a water treatment system in Dubai?",
    answer:
      "Installation timelines depend on the system complexity and site readiness. A standard pre-assembled skid-mounted system (up to 5,000 L/hr) can be installed and commissioned in 3-5 working days once the site is prepared. Larger systems requiring custom pipe-work, electrical connections, and civil works may take 2-4 weeks for installation and commissioning. The total project timeline from order confirmation to operational plant is typically 4-6 weeks for standard systems and 8-12 weeks for custom-engineered installations.",
  },
  {
    question: "What water quality can I expect from a reverse osmosis treatment system?",
    answer:
      "A properly designed RO treatment system reduces total dissolved solids by 95-99%. Starting from typical UAE municipal water at 200-500 mg/L TDS, the treated water will have 5-25 mg/L TDS. Turbidity will be below 0.1 NTU. Bacteria removal exceeds 99.99%. After post-treatment remineralisation, the pH is adjusted to 6.5-7.5. These parameters comfortably exceed UAE drinking water standards and meet the requirements for food production under the Water Quality Regulations 2025.",
  },
  {
    question: "Can a water treatment system handle seawater in the UAE?",
    answer:
      "Yes, but seawater reverse osmosis (SWRO) requires a different system configuration than brackish or municipal water treatment. Seawater in the Arabian Gulf has a TDS of approximately 40,000-45,000 mg/L — significantly higher than municipal water. SWRO systems operate at much higher pressures (55-70 bar) and use specialised membranes designed for high-salinity rejection. Pacific Unity supplies containerised and skid-mounted SWRO systems for remote coastal sites, island developments, and industrial facilities without municipal water connections.",
  },
  {
    question: "What maintenance is required for an industrial water treatment system?",
    answer:
      "Regular maintenance includes: monthly inspection of pressure gauges and flow rates, quarterly replacement of sediment and carbon pre-filters, quarterly to bi-annual CIP (Clean in Place) membrane cleaning, annual UV lamp replacement, annual resin replacement or regeneration for water softeners, and ongoing monitoring of treated water quality. In the UAE, the high ambient temperatures during summer months require more frequent CIP cycles to prevent biofouling. Pacific Unity offers annual maintenance contracts starting from AED 8,000/year that cover all consumables and quarterly service visits.",
  },
  {
    question: "Do I need a water treatment system to meet HACCP requirements in the UAE?",
    answer:
      "HACCP (Hazard Analysis and Critical Control Points) requires that water used in food production meets defined safety and quality standards at all times. While UAE municipal water is safe to drink, the variability introduced by building distribution systems and storage tanks means that an in-house water treatment system is the most reliable way to demonstrate HACCP compliance. The system provides a documented critical control point with measurable parameters (TDS, chlorine, turbidity, microbiological counts) that can be monitored, logged, and audited — exactly what HACCP and Dubai Municipality FoodWatch inspectors look for.",
  },
  {
    question: "Can Pacific Unity customise a water treatment system for my specific needs?",
    answer:
      "Yes. Every industrial water treatment system we supply is configured for the specific application and water source. We begin with a water quality analysis of your current supply to determine the exact treatment stages required. The system design accounts for your peak demand, operating hours, space constraints, and regulatory requirements. We can integrate additional stages such as ozone treatment, electrodeionisation (EDI) for ultra-pure water, or specific chemical dosing for pH correction. The control system can be tailored to include remote monitoring, data logging, and alarm notifications.",
  },
]

export default function WaterTreatmentSystemPage() {
  return (
    <>
      <ProductSchema
        name="Industrial Water Treatment System"
        description="Complete industrial water treatment systems for Dubai and the UAE. Pre-treatment, RO, post-treatment, and storage in turnkey configurations from 500 L/hr to 50,000 L/hr."
        image="/images/products/water-treatment-system.jpg"
        url="/equipment/water-beverage/water-treatment/water-treatment-system/"
        category="Water Treatment Equipment"
      />
      <FAQPageSchema faqs={faqs} />
      <BreadcrumbSchema items={breadcrumbs} />

      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <Breadcrumbs items={breadcrumbs} />
      </div>

      {/* Hero */}
      <section className="bg-linear-to-br from-background to-muted/40 px-4 pb-12 pt-8 md:px-6 md:pb-16 md:pt-12">
        <div className="mx-auto max-w-7xl">
          <Badge variant="destructive" className="mb-4">
            Highest CPC — $12.74 per Click
          </Badge>
          <h1 className="max-w-4xl text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            Industrial Water Treatment System Dubai — Complete Solutions
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-muted-foreground">
            Turnkey water treatment systems engineered for the UAE market. From raw water intake
            to purified output — every component integrated, installed, and commissioned by Pacific
            Unity. Systems from 500 L/hr to 50,000 L/hr for food production, beverage
            manufacturing, pharmaceutical, and industrial applications.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/request-quote/">
                Request a Quote <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* What is a WTS */}
      <section className="px-4 py-12 md:px-6 md:py-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeading title="What Is an Industrial Water Treatment System?" />
          <div className="prose max-w-none text-muted-foreground">
            <p>
              An industrial water treatment system is a complete, integrated solution that takes
              raw water from any source — municipal supply, borehole, or seawater — and produces
              water meeting specific quality standards for its intended use. Unlike individual
              filters or standalone RO units, a water treatment system combines all necessary
              stages into a single, automated plant with centralised controls and monitoring.
            </p>
            <p className="mt-4">
              In the UAE, where water quality requirements are governed by the Emirates Conformity
              Assessment Scheme (ECAS) and the Water Quality Regulations 2025, an integrated
              water treatment system provides the most reliable path to compliance. Every stage —
              from pre-filtration through reverse osmosis to UV sterilisation — is designed to
              work together, with each component sized to match the overall system capacity. This
              eliminates the common problem of mismatched components that occurs when individual
              filters and pumps are sourced separately.
            </p>
            <p className="mt-4">
              Pacific Unity designs, supplies, and installs water treatment systems across Dubai,
              Abu Dhabi, Sharjah, Ras Al Khaimah, and all UAE emirates. Our systems serve food
              manufacturers in Al Quoz and Jebel Ali, beverage producers across Dubai Industrial
              City, pharmaceutical companies in Dubai Science Park, and hotel groups throughout
              the country. Every installation includes a 1-year comprehensive warranty and
              operator training.
            </p>
          </div>
        </div>
      </section>

      {/* Components Table */}
      <section className="bg-muted/30 px-4 py-12 md:px-6 md:py-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            title="Components of a Complete Water Treatment System"
            subtitle="Every Pacific Unity system includes these components, configured for your specific water source and output requirements."
          />
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Component</TableHead>
                  <TableHead>Function</TableHead>
                  <TableHead>Material / Type</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {systemComponents.map((c) => (
                  <TableRow key={c.component}>
                    <TableCell className="font-medium">{c.component}</TableCell>
                    <TableCell>{c.function}</TableCell>
                    <TableCell>{c.material}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="px-4 py-12 md:px-6 md:py-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeading title="Why Choose an Integrated Water Treatment System?" />
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Single-supplier accountability — one warranty, one service contact",
              "Components sized to work together — no mismatched capacities",
              "PLC automation with touchscreen control panel",
              "Pre-programmed CIP (Clean in Place) for membrane maintenance",
              "Remote monitoring capability for multi-site operations",
              "Compliant with UAE ECAS, EQM, and Water Quality Regulations 2025",
              "Skid-mounted for rapid installation — operational in days, not weeks",
              "Full documentation package for HACCP, ISO, and municipal audits",
            ].map((benefit) => (
              <div key={benefit} className="flex items-start gap-3">
                <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span className="text-sm text-muted-foreground">{benefit}</span>
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
            <Link href="/equipment/water-beverage/water-treatment/" className="group">
              <Card className="h-full transition-shadow hover:shadow-lg">
                <CardContent className="p-5">
                  <h3 className="font-semibold group-hover:text-primary transition-colors">
                    Water Treatment Hub
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Complete overview of all water treatment solutions for the UAE.
                  </p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/equipment/water-beverage/water-treatment/reverse-osmosis/" className="group">
              <Card className="h-full transition-shadow hover:shadow-lg">
                <CardContent className="p-5">
                  <h3 className="font-semibold group-hover:text-primary transition-colors">
                    Reverse Osmosis Plant
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Standalone RO systems from 500 L/hr to 50,000 L/hr.
                  </p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/equipment/water-beverage/water-treatment/desalination-plant/" className="group">
              <Card className="h-full transition-shadow hover:shadow-lg">
                <CardContent className="p-5">
                  <h3 className="font-semibold group-hover:text-primary transition-colors">
                    Desalination Plant
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Seawater desalination for coastal and remote UAE sites.
                  </p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-12 md:px-6 md:py-16">
        <div className="mx-auto max-w-3xl">
          <SectionHeading title="Frequently Asked Questions" />
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 pb-12 md:px-6 md:pb-16">
        <div className="mx-auto max-w-7xl">
          <CTAStrip
            title="Get a Complete Water Treatment System Quote"
            description="Send us your water quality report and daily requirements. We will design a system matched to your specific needs."
            whatsappMessage="Hi, I need a complete water treatment system for my facility in the UAE."
          />
        </div>
      </section>
    </>
  )
}
