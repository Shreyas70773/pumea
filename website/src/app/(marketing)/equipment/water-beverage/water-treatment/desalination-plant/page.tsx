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
  title: "Desalination Plant Equipment Dubai & UAE",
  description:
    "Desalination plant equipment for the UAE. Containerised and skid-mounted seawater reverse osmosis (SWRO) systems for remote sites, islands, and industrial facilities. Request a quote.",
  keywords: [
    "desalination plant",
    "desalination plant UAE",
    "seawater desalination Dubai",
    "SWRO plant UAE",
    "desalination equipment Dubai",
  ],
  alternates: {
    canonical: "https://pacificunity.ae/equipment/water-beverage/water-treatment/desalination-plant/",
  },
}

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "Equipment", href: "/equipment/" },
  { name: "Water Treatment", href: "/equipment/water-beverage/water-treatment/" },
  { name: "Desalination Plant", href: "/equipment/water-beverage/water-treatment/desalination-plant/" },
]

const faqs = [
  {
    question: "What is a desalination plant and how does it work?",
    answer:
      "A desalination plant removes salt and dissolved minerals from seawater or brackish water to produce fresh water suitable for drinking, agriculture, or industrial use. The most common technology is seawater reverse osmosis (SWRO), which forces seawater through semi-permeable membranes at high pressure (55-70 bar) to separate pure water from dissolved salts. The UAE is the world's third-largest producer of desalinated water, with major facilities like the Jebel Ali plant producing over 2.2 million cubic metres daily. Smaller containerised and skid-mounted desalination plants serve remote coastal sites, islands, construction camps, and industrial facilities that lack municipal water connections.",
  },
  {
    question: "Does the UAE need more desalination plants?",
    answer:
      "Yes. The UAE's annual natural freshwater replenishment through rainfall is only approximately 150 million cubic metres — a fraction of national consumption. The UAE Water Security Strategy 2036 targets significant increases in desalination capacity, with a shift toward energy-efficient reverse osmosis technology powered by renewable energy. The Hassyan Independent Water Plant in Dubai, expected to be the world's second-largest RO desalination facility, exemplifies this trend. Beyond utility-scale plants, there is growing demand for smaller desalination systems serving island developments, remote industrial sites, and agricultural operations across the UAE — particularly in Abu Dhabi, Fujairah, and the Northern Emirates.",
  },
  {
    question: "How much does a small desalination plant cost in the UAE?",
    answer:
      "Small containerised desalination plants suitable for remote sites in the UAE typically range from AED 150,000 to AED 800,000 depending on capacity. A 5,000 L/hr SWRO system in a standard shipping container starts from approximately AED 350,000. A 10,000 L/hr containerised plant ranges from AED 500,000 to AED 900,000. These prices include the containerised RO system with intake, pre-treatment, membranes, energy recovery, and basic post-treatment. Site-specific costs for intake pipework, brine disposal, civil works, and electrical connections are quoted separately. Contact Pacific Unity for a detailed project quotation.",
  },
  {
    question: "What is the difference between desalination and regular water treatment?",
    answer:
      "Regular water treatment processes municipal or borehole water with relatively low dissolved solids (100-5,000 mg/L TDS) and operates at moderate pressures (10-16 bar). Desalination treats seawater with very high dissolved solids (35,000-45,000 mg/L TDS) and requires specialised high-pressure equipment (55-70 bar), corrosion-resistant materials (super duplex stainless steel, FRP), and energy recovery devices to manage the significantly higher energy consumption. Seawater desalination typically uses 3-5 kWh per cubic metre of fresh water produced, compared to 0.5-1.5 kWh for brackish water RO.",
  },
  {
    question: "What are the main types of desalination technology?",
    answer:
      "The two primary desalination technologies are reverse osmosis (RO) and thermal distillation. Reverse osmosis forces seawater through membranes under high pressure — it is now the dominant technology worldwide due to lower energy consumption. Thermal distillation includes Multi-Stage Flash (MSF) and Multi-Effect Distillation (MED), which heat seawater to produce steam that is then condensed into fresh water. The UAE has historically relied on MSF plants co-located with power stations (like Jebel Ali), but new installations overwhelmingly use RO technology. Pacific Unity supplies RO-based desalination systems in both skid-mounted and containerised configurations.",
  },
  {
    question: "How is brine disposal managed for desalination plants in the UAE?",
    answer:
      "Brine disposal is regulated under UAE environmental law to prevent ecological damage to marine environments. For coastal SWRO plants, brine is typically discharged through diffuser systems that ensure rapid dilution in the receiving water body. The discharge must meet temperature limits (ambient + 5°C maximum) and salinity concentration limits. For inland or remote sites, zero liquid discharge (ZLD) systems may be required, which recover nearly all water from the brine stream. The UAE's Environment Agency Abu Dhabi (EAD) and Dubai Municipality regulate brine disposal through environmental impact assessments and discharge permits.",
  },
  {
    question: "Can Pacific Unity supply a containerised desalination plant for a remote site?",
    answer:
      "Yes. Pacific Unity supplies containerised seawater desalination plants housed in standard 20ft or 40ft shipping containers. These mobile units include intake pumps, pre-treatment, the SWRO membrane array with energy recovery, post-treatment, and control systems — all pre-assembled and tested before shipping. Containerised plants are ideal for island resorts, construction camps, remote industrial sites, and temporary installations across the UAE. They can be operational within days of delivery, requiring only connection to a seawater intake, brine discharge point, power supply, and treated water storage.",
  },
  {
    question: "What is energy recovery in a desalination plant?",
    answer:
      "Energy recovery devices capture the hydraulic energy remaining in the high-pressure brine stream after it passes through the RO membranes. This energy is transferred to the incoming feed water, reducing the overall power consumption of the plant by 40-60%. The most common types are pressure exchangers (isobaric devices) and Pelton turbines. For medium and large SWRO plants, energy recovery is essential for economic viability — reducing energy consumption from approximately 6-8 kWh/m³ to 3-4 kWh/m³. Pacific Unity includes energy recovery devices as standard on all SWRO systems above 2,000 L/hr capacity.",
  },
]

export default function DesalinationPlantPage() {
  return (
    <>
      <ProductSchema
        name="Desalination Plant Equipment"
        description="Containerised and skid-mounted seawater desalination plants for the UAE. SWRO technology for remote sites, islands, and industrial facilities."
        image="/images/products/desalination-plant.jpg"
        url="/equipment/water-beverage/water-treatment/desalination-plant/"
        category="Water Treatment Equipment"
      />
      <FAQPageSchema faqs={faqs} />
      <BreadcrumbSchema items={breadcrumbs} />

      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <Breadcrumbs items={breadcrumbs} />
      </div>

      <section className="bg-linear-to-br from-background to-muted/40 px-4 pb-12 pt-8 md:px-6 md:pb-16 md:pt-12">
        <div className="mx-auto max-w-7xl">
          <h1 className="max-w-4xl text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            Desalination Plant Equipment Dubai &amp; UAE
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-muted-foreground">
            Seawater and brackish water desalination systems for the United Arab Emirates.
            Containerised and skid-mounted SWRO plants for remote coastal sites, island
            developments, construction camps, and industrial facilities without municipal water
            supply. The UAE is the world&apos;s third-largest producer of desalinated water per capita —
            and demand continues to grow.
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
          <SectionHeading title="Desalination in the UAE — Context and Opportunity" />
          <div className="prose max-w-none text-muted-foreground">
            <p>
              The UAE ranks among the top three countries globally for desalinated water
              production per capita. Major utility-scale plants like the Jebel Ali Power and
              Desalination Plant produce over 2.2 million cubic metres of desalinated water daily,
              while the upcoming Hassyan Independent Water Plant in Dubai will be one of the
              world&apos;s largest RO-based desalination facilities.
            </p>
            <p className="mt-4">
              But desalination is not only a utility-scale operation. Across the UAE, there is
              significant demand for smaller, distributed desalination systems. Island resort
              developments in Abu Dhabi, coastal construction projects in Fujairah, agricultural
              operations in Al Ain and the Northern Emirates, and industrial facilities located
              away from municipal water networks all require independent water production
              capability.
            </p>
            <p className="mt-4">
              Pacific Unity supplies containerised and skid-mounted seawater reverse osmosis
              (SWRO) systems designed for these applications. Our desalination equipment is
              engineered for the Arabian Gulf&apos;s specific conditions — high salinity (40,000-45,000
              mg/L TDS), elevated water temperatures (25-35°C), and the presence of marine
              organisms that require robust pre-treatment.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-muted/30 px-4 py-12 md:px-6 md:py-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            title="Desalination Plant Configurations"
            subtitle="Available in containerised (20ft/40ft) and skid-mounted formats."
          />
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Configuration</TableHead>
                  <TableHead>Capacity Range</TableHead>
                  <TableHead>Feed Water</TableHead>
                  <TableHead>Format</TableHead>
                  <TableHead>Best For</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">Compact SWRO</TableCell>
                  <TableCell>500-2,000 L/hr</TableCell>
                  <TableCell>Seawater</TableCell>
                  <TableCell>Skid-mounted</TableCell>
                  <TableCell>Small resorts, research stations</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Containerised SWRO</TableCell>
                  <TableCell>2,000-10,000 L/hr</TableCell>
                  <TableCell>Seawater</TableCell>
                  <TableCell>20ft/40ft container</TableCell>
                  <TableCell>Islands, camps, remote industrial</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Industrial SWRO</TableCell>
                  <TableCell>10,000-50,000 L/hr</TableCell>
                  <TableCell>Seawater</TableCell>
                  <TableCell>Multi-skid / building</TableCell>
                  <TableCell>Large industrial, district supply</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Brackish Water</TableCell>
                  <TableCell>1,000-25,000 L/hr</TableCell>
                  <TableCell>Borehole / well</TableCell>
                  <TableCell>Skid-mounted</TableCell>
                  <TableCell>Agriculture, inland industrial</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </section>

      <section className="px-4 py-12 md:px-6 md:py-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeading title="Key Features" />
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Seawater-grade high-pressure pumps with energy recovery devices",
              "Corrosion-resistant materials — super duplex stainless steel and FRP",
              "Pre-treatment: multi-media filtration + UF or disc filtration",
              "Post-treatment: remineralisation, pH adjustment, and disinfection",
              "PLC automation with remote monitoring and alarm capability",
              "Containerised units pre-assembled and factory-tested before shipping",
              "Designed for Arabian Gulf conditions — high salinity and temperature",
              "Brine management solutions compliant with UAE environmental regulations",
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
              { title: "Water Treatment Hub", desc: "Full range of water treatment solutions.", href: "/equipment/water-beverage/water-treatment/" },
              { title: "Reverse Osmosis Plant", desc: "Brackish water RO for municipal and borehole sources.", href: "/equipment/water-beverage/water-treatment/reverse-osmosis/" },
              { title: "Stainless Steel Tanks", desc: "Storage tanks for treated water and process liquids.", href: "/equipment/tanks-vessels/" },
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
            title="Discuss Your Desalination Project"
            description="Whether you need a containerised unit for a remote site or a large-scale plant for industrial supply — our team can help."
            whatsappMessage="Hi, I'm interested in desalination plant equipment for a project in the UAE."
          />
        </div>
      </section>
    </>
  )
}
