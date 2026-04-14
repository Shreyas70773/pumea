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
import { ArrowRight, Droplets, Factory, FlaskConical, GlassWater, ShieldCheck } from "lucide-react"

export const metadata: Metadata = {
  title: "Water Treatment Plant Dubai — RO Systems & Filtration Equipment",
  description:
    "Industrial water filtration systems, RO plants, and water treatment equipment in Dubai UAE. Complete solutions from 500 L/hr to 50,000 L/hr. Request a quote.",
  keywords: [
    "water filtration system",
    "water treatment system",
    "water treatment plant Dubai",
    "RO system Dubai",
    "water purification system UAE",
    "reverse osmosis plant UAE",
    "industrial water treatment UAE",
  ],
  alternates: {
    canonical: "https://pacificunity.ae/equipment/water-beverage/water-treatment/",
  },
}

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "Equipment", href: "/equipment/" },
  { name: "Water & Beverage", href: "/equipment/water-beverage/" },
  { name: "Water Treatment", href: "/equipment/water-beverage/water-treatment/" },
]

const capacityData = [
  { capacity: "500 L/hr", daily: "4,000 L/day", use: "Small restaurant, clinic, or bakery", membranes: "1-2", footprint: "1 × 0.5 m" },
  { capacity: "1,000 L/hr", daily: "8,000 L/day", use: "Medium food outlet, small bottling unit", membranes: "2-4", footprint: "1.5 × 0.7 m" },
  { capacity: "2,000 L/hr", daily: "16,000 L/day", use: "Hotel, mid-size F&B producer", membranes: "4-6", footprint: "2 × 1 m" },
  { capacity: "5,000 L/hr", daily: "40,000 L/day", use: "Commercial beverage plant, dairy", membranes: "6-12", footprint: "3 × 1.5 m" },
  { capacity: "10,000 L/hr", daily: "80,000 L/day", use: "Large bottling plant, pharmaceutical", membranes: "12-24", footprint: "4 × 2 m" },
  { capacity: "25,000 L/hr", daily: "200,000 L/day", use: "Industrial complex, labour camp", membranes: "24-48", footprint: "6 × 3 m" },
  { capacity: "50,000 L/hr", daily: "400,000 L/day", use: "District-level supply, large factory", membranes: "48+", footprint: "10 × 5 m" },
]

const faqs = [
  {
    question: "How much does a water treatment plant cost in Dubai?",
    answer:
      "Water treatment plant costs in Dubai depend on capacity, water source, and treatment stages required. A compact 500 L/hr reverse osmosis system suitable for a restaurant or small food outlet typically starts from AED 15,000. Medium-capacity systems for beverage production (2,000-5,000 L/hr) range from AED 45,000 to AED 180,000. Large industrial installations at 10,000 L/hr and above start from AED 250,000 and can exceed AED 1,000,000 for fully automated plants with pre-treatment, post-mineralisation, and UV sterilisation. Pacific Unity provides detailed quotations based on your specific water quality analysis and production requirements.",
  },
  {
    question: "What is the difference between a water filtration system and a water treatment plant?",
    answer:
      "A water filtration system is a broad term covering any equipment that removes contaminants from water — this includes simple carbon filters, sediment filters, and membrane-based systems. A water treatment plant is a more comprehensive installation that combines multiple filtration stages (pre-treatment, reverse osmosis, post-treatment, and disinfection) into an integrated system designed to produce water meeting specific quality standards. In the UAE, industrial facilities typically require a complete water treatment plant rather than a standalone filter, because municipal water — which originates primarily from seawater desalination — still contains dissolved minerals and chlorine that need controlled removal for food-grade or pharmaceutical-grade applications.",
  },
  {
    question: "How does reverse osmosis work in a water treatment plant?",
    answer:
      "Reverse osmosis (RO) works by forcing water through a semi-permeable membrane under high pressure, typically 10-15 bar for brackish water and 55-70 bar for seawater. The membrane has pores small enough to block dissolved salts, heavy metals, bacteria, and viruses while allowing pure water molecules to pass through. In a complete RO plant, the process begins with pre-filtration (sediment and carbon filters to protect the membranes), followed by the high-pressure RO stage, and then post-treatment which may include remineralisation, UV sterilisation, and pH adjustment. A properly designed RO system removes 95-99% of total dissolved solids from the feed water.",
  },
  {
    question: "What capacity water treatment plant do I need for my business in the UAE?",
    answer:
      "The required capacity depends on your daily water consumption and peak demand. As a guideline: a small restaurant or bakery in Dubai typically needs 500-1,000 L/hr; a hotel kitchen or medium food manufacturer needs 2,000-5,000 L/hr; a commercial beverage or bottled water plant requires 5,000-25,000 L/hr; and a large industrial facility or district cooling plant may need 25,000-50,000+ L/hr. The calculation should account for the RO system's recovery rate — typically 50-75% for UAE municipal water — meaning you need to feed more raw water than the treated water you receive. Pacific Unity provides a free site assessment to determine the correct capacity for your specific operation.",
  },
  {
    question: "Is UAE tap water safe and why do businesses need water treatment?",
    answer:
      "UAE tap water meets WHO drinking water standards and is safe to drink. However, it originates from seawater desalination and may pick up dissolved minerals, chlorine residuals, and sediment during distribution and storage in building tanks. For industrial use — particularly food and beverage production, pharmaceutical manufacturing, and boiler feed water — businesses in the UAE require water treatment to meet stricter quality parameters. The UAE's Water Quality Regulations 2025 mandate turbidity below 0.5 NTU for food service and free chlorine residuals between 0.2-0.5 mg/L throughout distribution. An RO-based water treatment plant ensures consistent water quality regardless of seasonal variations in the municipal supply.",
  },
  {
    question: "What is the difference between RO, ultrafiltration, and nanofiltration?",
    answer:
      "Reverse osmosis (RO) has the finest pore size (0.0001 microns), removing 95-99% of dissolved salts, heavy metals, and all microorganisms. It is the standard for drinking water, beverage production, and pharmaceutical applications in the UAE. Nanofiltration (NF) has a slightly larger pore size (0.001 microns) and removes 80-90% of divalent salts (calcium, magnesium) but allows monovalent salts (sodium) to pass through — making it suitable for water softening and selective mineral removal. Ultrafiltration (UF) has a pore size of 0.01-0.1 microns and removes suspended solids, bacteria, and some viruses but does not remove dissolved salts — it is used as a pre-treatment stage before RO or as a standalone system where salt removal is not required, such as in certain industrial process water applications.",
  },
  {
    question: "What maintenance does a water treatment plant require in Dubai?",
    answer:
      "Regular maintenance is essential for reliable performance in Dubai's climate. Pre-filters (sediment and carbon) should be replaced every 3-6 months depending on feed water quality. RO membranes typically last 2-4 years with proper care and require chemical cleaning (CIP — Clean in Place) every 3-6 months to remove scaling and biofilm. The high ambient temperatures in the UAE (water tank temperatures can exceed 40°C in summer) accelerate biofilm growth, making regular sanitation of storage tanks critical. UV lamps should be replaced annually. Pacific Unity includes a 12-month maintenance schedule with every installation and offers ongoing annual maintenance contracts to ensure consistent water quality and compliance.",
  },
  {
    question: "Can Pacific Unity install a water treatment plant anywhere in the UAE?",
    answer:
      "Yes, Pacific Unity supplies, installs, and commissions water treatment plants across all emirates of the UAE, including Dubai, Abu Dhabi, Sharjah, Ras Al Khaimah, Ajman, Umm Al Quwain, and Fujairah. Our technical team handles the complete process from initial site assessment and water quality analysis through to equipment delivery, installation, commissioning, and operator training. Typical installation timelines range from 1-2 weeks for compact systems to 4-6 weeks for large industrial plants. We also provide nationwide after-sales support and spare parts supply.",
  },
  {
    question: "What certifications should a water treatment plant have for UAE compliance?",
    answer:
      "In the UAE, water treatment equipment must carry ECAS (Emirates Conformity Assessment Scheme) certification issued by the Ministry of Industry and Advanced Technology (MoIAT). For higher-risk applications or bottled water production, the Emirates Quality Mark (EQM) is required, which involves factory audits and ongoing surveillance. All components that contact water must comply with UAE.S GSO 2231 for food contact materials. Additionally, facilities operating their own water treatment must develop a Drinking Water Safety Plan (DWSP) and arrange regular testing through EIAC-accredited laboratories — weekly for microbiological parameters and quarterly for chemical parameters under the Water Quality Regulations 2025.",
  },
  {
    question: "How long does it take to get a water treatment plant delivered and installed in Dubai?",
    answer:
      "From confirmed order to operational plant, typical timelines are: 4-6 weeks for standard capacity systems using readily available components, and 6-10 weeks for custom-engineered or high-capacity plants that require specific membrane configurations. This includes manufacturing or procurement (2-4 weeks), shipping to the UAE (1-2 weeks), and on-site installation and commissioning (1-2 weeks). Pacific Unity maintains stock of commonly required components in the UAE to reduce lead times. Emergency or fast-track projects can often be accommodated with prior arrangement.",
  },
]

export default function WaterTreatmentPage() {
  return (
    <>
      <ProductSchema
        name="Water Filtration System & Water Treatment Plant"
        description="Industrial water treatment plants and RO systems for food production, beverage manufacturing, and commercial use in the UAE. Capacities from 500 L/hr to 50,000 L/hr."
        image="/images/products/water-treatment-plant.jpg"
        url="/equipment/water-beverage/water-treatment/"
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
          <Badge variant="secondary" className="mb-4">
            201,000+ Global Monthly Searches
          </Badge>
          <h1 className="max-w-4xl text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            Water Filtration System &amp; Water Treatment Plant — Dubai UAE
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-muted-foreground">
            Industrial water treatment plants, reverse osmosis systems, and complete water
            purification solutions for food production, beverage manufacturing, pharmaceuticals,
            and commercial operations across the United Arab Emirates. Capacities from 500 L/hr
            to 50,000 L/hr — supplied, installed, and maintained by Pacific Unity.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/request-quote/">
                Request a Quote <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/equipment/water-beverage/water-treatment/reverse-osmosis/">
                View RO Plants
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* What Is */}
      <section className="px-4 py-12 md:px-6 md:py-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            title="What Is a Water Treatment Plant?"
            subtitle="Essential equipment for any business that uses water in its production process."
          />
          <div className="prose max-w-none text-muted-foreground">
            <p>
              A water treatment plant is an integrated system that removes impurities, dissolved
              solids, bacteria, and chemical contaminants from raw water to produce water that
              meets specific quality standards for its intended use. In the UAE — where virtually
              all municipal water originates from seawater desalination — water treatment plants
              are essential for businesses that require consistent, high-purity water for
              production.
            </p>
            <p className="mt-4">
              The United Arab Emirates produces more desalinated water per capita than almost any
              other nation on earth. While this means the UAE has one of the most advanced water
              supply infrastructures in the world, desalinated water still requires further
              treatment for many industrial applications. Total dissolved solids (TDS) in UAE
              municipal supply typically range from 100-500 mg/L, and residual chlorine from
              disinfection can affect the taste and quality of food and beverage products. An
              industrial water treatment plant — typically centred around reverse osmosis
              technology — provides precise control over water quality, reducing TDS to below
              50 mg/L and removing up to 99% of all contaminants.
            </p>
            <p className="mt-4">
              Pacific Unity supplies complete water treatment solutions across the UAE, from
              compact 500 L/hr units for restaurants and small food outlets to large-scale 50,000
              L/hr industrial plants for beverage manufacturers, pharmaceutical companies, and
              district-level water supply. Every system is supplied with installation,
              commissioning, operator training, and a 1-year warranty.
            </p>
          </div>
        </div>
      </section>

      {/* How RO Works */}
      <section className="bg-muted/30 px-4 py-12 md:px-6 md:py-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            title="How a Reverse Osmosis Water Treatment Plant Works"
            subtitle="A step-by-step guide to the most widely used water purification technology in the UAE."
          />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardContent className="p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">1</div>
                <h3 className="mt-4 text-lg font-semibold">Raw Water Intake &amp; Pre-Treatment</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Raw water from the municipal supply or borehole enters the system. A sediment
                  filter (typically 5 microns) removes suspended particles, sand, and rust. This
                  protects the downstream equipment and extends the life of the RO membranes. In
                  the UAE, where water tanks on building rooftops can accumulate sediment,
                  pre-filtration is especially important.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">2</div>
                <h3 className="mt-4 text-lg font-semibold">Activated Carbon Filtration</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Granular activated carbon (GAC) or carbon block filters remove chlorine, organic
                  compounds, and taste/odour contaminants. Chlorine removal is critical because
                  it degrades RO membranes. UAE municipal water contains residual chlorine at
                  0.2-0.5 mg/L — this must be fully removed before the RO stage to prevent
                  membrane damage.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">3</div>
                <h3 className="mt-4 text-lg font-semibold">Anti-Scalant Dosing</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  A chemical dosing pump injects anti-scalant solution into the feed water. This
                  prevents calcium carbonate, silica, and other minerals from forming scale on the
                  RO membrane surface. Proper anti-scalant dosing is particularly important in
                  the UAE where water hardness can be elevated depending on the source and
                  distribution path.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">4</div>
                <h3 className="mt-4 text-lg font-semibold">High-Pressure RO Membrane Filtration</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  A high-pressure pump forces the pre-treated water through semi-permeable RO
                  membranes at 10-15 bar (for brackish/municipal water) or 55-70 bar (for
                  seawater). The membranes reject 95-99% of dissolved salts, heavy metals,
                  bacteria, and viruses. The purified water (permeate) passes through, while the
                  concentrated reject water (brine) is discharged. Recovery rates for UAE
                  municipal water typically range from 50-75%.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">5</div>
                <h3 className="mt-4 text-lg font-semibold">Post-Treatment &amp; Remineralisation</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  RO permeate has very low mineral content and slightly acidic pH (typically
                  5.5-6.5). For drinking water and beverage applications, a remineralisation
                  stage adds back calcium and magnesium to achieve the desired taste and pH
                  balance (6.5-8.5 as required by UAE standards). A post-carbon filter provides
                  a final polish.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">6</div>
                <h3 className="mt-4 text-lg font-semibold">UV Sterilisation &amp; Storage</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Ultraviolet (UV) sterilisation destroys any remaining microorganisms without
                  adding chemicals. The treated water is stored in a food-grade stainless steel
                  tank until needed. In the UAE, where ambient temperatures can exceed 45°C,
                  storage tanks must be insulated or chilled to prevent bacterial regrowth —
                  particularly for food and beverage applications.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* UAE Context */}
      <section className="px-4 py-12 md:px-6 md:py-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            title="Water Treatment in the UAE — Why It Matters"
            subtitle="The UAE's unique water landscape creates specific requirements for industrial operators."
          />
          <div className="prose max-w-none text-muted-foreground">
            <p>
              The United Arab Emirates is one of the top three countries globally for desalinated
              water production per capita, with facilities such as the Jebel Ali Power and
              Desalination Plant producing over 2.2 million cubic metres of water daily. The
              country&apos;s annual natural water replenishment through rainfall is only approximately
              150 million cubic metres — a fraction of what is consumed. This absolute reliance
              on desalination has created the most sophisticated water supply infrastructure in
              the Gulf region, but it also means that every business using water in its
              operations must understand the characteristics of desalinated water.
            </p>
            <p className="mt-4">
              UAE municipal water starts with extremely low TDS (desalinated water is near-pure)
              but picks up minerals and contaminants during distribution through concrete
              pipelines, building risers, and rooftop storage tanks — a system that serves over
              10 million residents across 7 emirates. For food and beverage manufacturers in
              Dubai, Abu Dhabi, and the Northern Emirates, this variability is a production risk.
              A water treatment plant eliminates that risk by providing consistent water quality
              regardless of building age, tank condition, or seasonal variation.
            </p>
            <p className="mt-4">
              The UAE&apos;s Water Quality Regulations 2025, enforced by the Abu Dhabi Department of
              Energy and Dubai Municipality, mandate that food production facilities maintain
              turbidity below 0.5 NTU, free chlorine between 0.2-0.5 mg/L, and zero E. coli
              per 100 mL. Facilities must submit a Drinking Water Safety Plan and arrange regular
              testing through accredited laboratories. Installing a properly designed water
              treatment plant is the most reliable way to meet these requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Capacity Table */}
      <section className="bg-muted/30 px-4 py-12 md:px-6 md:py-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            title="Water Treatment Plant Capacity Guide"
            subtitle="Choose the right system size based on your daily water consumption and business type."
          />
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Capacity</TableHead>
                  <TableHead>Daily Output</TableHead>
                  <TableHead>Typical Application</TableHead>
                  <TableHead>Membranes</TableHead>
                  <TableHead>Footprint</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {capacityData.map((row) => (
                  <TableRow key={row.capacity}>
                    <TableCell className="font-medium">{row.capacity}</TableCell>
                    <TableCell>{row.daily}</TableCell>
                    <TableCell>{row.use}</TableCell>
                    <TableCell>{row.membranes}</TableCell>
                    <TableCell>{row.footprint}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            All capacities based on 70% recovery rate from UAE municipal water feed. Actual output
            may vary based on feed water TDS and temperature.{" "}
            <Link href="/request-quote/" className="text-primary underline">
              Request a free site assessment
            </Link>{" "}
            for an accurate capacity recommendation.
          </p>
        </div>
      </section>

      {/* Applications */}
      <section className="px-4 py-12 md:px-6 md:py-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeading title="Applications &amp; Industries" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: GlassWater,
                title: "Bottled Water &amp; Beverages",
                desc: "Complete RO systems for packaged drinking water, carbonated drinks, juice production, and dairy processing. Meeting ESMA and EQM standards for bottled water sold in the UAE market.",
              },
              {
                icon: Factory,
                title: "Food Production",
                desc: "Process water treatment for bakeries, sauce production, meat processing, and commercial kitchens across Dubai and the UAE. Compliance with Dubai Municipality FoodWatch and HACCP requirements.",
              },
              {
                icon: FlaskConical,
                title: "Pharmaceutical &amp; Cosmetic",
                desc: "High-purity water for pharmaceutical manufacturing, cosmetic production, and laboratory use. Multi-stage RO with UV and EDI polishing for USP-grade water requirements.",
              },
              {
                icon: Droplets,
                title: "Industrial Process Water",
                desc: "Boiler feed water, cooling tower make-up, and industrial cleaning water. Reducing scaling, corrosion, and downtime for manufacturing facilities in Jebel Ali, KIZAD, and industrial zones across the UAE.",
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

      {/* RO vs UF vs NF Comparison */}
      <section className="bg-muted/30 px-4 py-12 md:px-6 md:py-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            title="RO vs Ultrafiltration vs Nanofiltration — Which Technology Do You Need?"
            subtitle="Choosing the right membrane technology depends on your water source and quality requirements."
          />
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Feature</TableHead>
                  <TableHead>Reverse Osmosis (RO)</TableHead>
                  <TableHead>Nanofiltration (NF)</TableHead>
                  <TableHead>Ultrafiltration (UF)</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">Pore Size</TableCell>
                  <TableCell>0.0001 microns</TableCell>
                  <TableCell>0.001 microns</TableCell>
                  <TableCell>0.01-0.1 microns</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Salt Removal</TableCell>
                  <TableCell>95-99%</TableCell>
                  <TableCell>80-90% (divalent salts)</TableCell>
                  <TableCell>None</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Operating Pressure</TableCell>
                  <TableCell>10-70 bar</TableCell>
                  <TableCell>5-20 bar</TableCell>
                  <TableCell>1-5 bar</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Bacteria Removal</TableCell>
                  <TableCell>Yes (&gt;99.9%)</TableCell>
                  <TableCell>Yes (&gt;99%)</TableCell>
                  <TableCell>Yes (&gt;99.99%)</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Energy Consumption</TableCell>
                  <TableCell>Higher</TableCell>
                  <TableCell>Moderate</TableCell>
                  <TableCell>Lower</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Best For (UAE)</TableCell>
                  <TableCell>Drinking water, F&amp;B, pharma</TableCell>
                  <TableCell>Water softening, colour removal</TableCell>
                  <TableCell>Pre-treatment, process water</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Typical UAE Application</TableCell>
                  <TableCell>Bottled water plants, commercial kitchens</TableCell>
                  <TableCell>Hotel water softening, laundries</TableCell>
                  <TableCell>RO pre-treatment, greywater recycling</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            For most food, beverage, and pharmaceutical applications in the UAE, reverse osmosis
            is the recommended technology due to its superior salt and contaminant removal.
            Ultrafiltration is commonly used as a pre-treatment stage before RO to extend
            membrane life, and nanofiltration serves specific softening applications.
          </p>
        </div>
      </section>

      {/* Sub-pages Links */}
      <section className="px-4 py-12 md:px-6 md:py-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            title="Water Treatment Solutions"
            subtitle="Explore our range of water treatment equipment for the UAE market."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Link href="/equipment/water-beverage/water-treatment/water-treatment-system/" className="group">
              <Card className="h-full transition-shadow hover:shadow-lg">
                <CardContent className="p-6">
                  <Badge variant="outline" className="mb-3">Highest CPC — $12.74</Badge>
                  <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                    Industrial Water Treatment System
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Complete water treatment systems designed for UAE industrial operations.
                    Pre-treatment, RO, post-treatment, and storage — integrated and ready to install.
                  </p>
                  <span className="mt-3 inline-flex items-center text-sm text-primary">
                    Learn more <ArrowRight className="ml-1 h-3.5 w-3.5" />
                  </span>
                </CardContent>
              </Card>
            </Link>
            <Link href="/equipment/water-beverage/water-treatment/reverse-osmosis/" className="group">
              <Card className="h-full transition-shadow hover:shadow-lg">
                <CardContent className="p-6">
                  <Badge variant="outline" className="mb-3">Core Technology</Badge>
                  <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                    Reverse Osmosis Plant (RO Plant)
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Standalone and integrated RO systems from 500 L/hr to 50,000 L/hr. Brackish
                    water and seawater configurations available for all UAE applications.
                  </p>
                  <span className="mt-3 inline-flex items-center text-sm text-primary">
                    Learn more <ArrowRight className="ml-1 h-3.5 w-3.5" />
                  </span>
                </CardContent>
              </Card>
            </Link>
            <Link href="/equipment/water-beverage/water-treatment/desalination-plant/" className="group">
              <Card className="h-full transition-shadow hover:shadow-lg">
                <CardContent className="p-6">
                  <Badge variant="outline" className="mb-3">22,200 Monthly Searches</Badge>
                  <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                    Desalination Plant Equipment
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Seawater and brackish water desalination systems for the UAE. Containerised
                    and skid-mounted solutions for remote sites, islands, and industrial complexes.
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

      {/* Delivery & Installation */}
      <section className="bg-muted/30 px-4 py-12 md:px-6 md:py-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeading title="Delivery &amp; Installation Across the UAE" />
          <div className="grid gap-8 md:grid-cols-2">
            <div className="prose max-w-none text-muted-foreground">
              <p>
                Pacific Unity handles the complete supply chain — from engineering design and
                procurement through to delivery, installation, commissioning, and operator
                training. Every water treatment plant is installed by our technical team and
                tested against your specific water quality targets before handover.
              </p>
              <ul className="mt-4 space-y-2">
                <li>Delivery across all 7 UAE emirates</li>
                <li>Typical lead time: 4-6 weeks from confirmed order</li>
                <li>On-site installation and pipe work</li>
                <li>Full commissioning with water quality verification</li>
                <li>Operator training included</li>
                <li>1-year warranty on all systems</li>
                <li>Ongoing maintenance contracts available</li>
              </ul>
            </div>
            <div className="flex items-center justify-center rounded-2xl bg-muted p-8">
              <div className="text-center">
                <ShieldCheck className="mx-auto h-16 w-16 text-primary" />
                <p className="mt-4 text-2xl font-bold">1 Year Warranty</p>
                <p className="mt-2 text-muted-foreground">On all water treatment equipment</p>
                <p className="mt-4 text-sm text-muted-foreground">
                  Spare parts available even post-warranty. Annual maintenance
                  contracts from AED 5,000/year.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-12 md:px-6 md:py-16">
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            title="Frequently Asked Questions About Water Treatment in the UAE"
          />
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 pb-12 md:px-6 md:pb-16">
        <div className="mx-auto max-w-7xl">
          <CTAStrip
            title="Need a Water Treatment Plant for Your Facility?"
            description="Tell us about your water requirements and we will recommend the right system. Free site assessment available across the UAE."
            whatsappMessage="Hi, I'm interested in water treatment equipment for my facility in the UAE."
          />
        </div>
      </section>
    </>
  )
}
