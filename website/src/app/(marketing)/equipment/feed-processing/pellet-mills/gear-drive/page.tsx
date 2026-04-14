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
    "Gear Drive Pellet Mill Dubai — Heavy-Duty Feed Pelletising Equipment",
  description:
    "Gear drive pellet mills for commercial animal feed production in Dubai UAE. Heavy-duty ring die pelletisers from 3-20 TPH. Request a quote from Pacific Unity.",
  keywords: [
    "gear drive pellet mill",
    "gear driven pellet mill Dubai",
    "heavy duty pellet mill UAE",
    "commercial feed pellet mill",
    "ring die pellet mill gear drive",
    "pelletising equipment Dubai",
  ],
  alternates: {
    canonical:
      "https://pacificunity.ae/equipment/feed-processing/pellet-mills/gear-drive/",
  },
}

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "Equipment", href: "/equipment/" },
  { name: "Pellet Mills", href: "/equipment/feed-processing/pellet-mills/" },
  {
    name: "Gear Drive",
    href: "/equipment/feed-processing/pellet-mills/gear-drive/",
  },
]

const gearDriveModels = [
  {
    model: "PU-GD-5",
    capacity: "3-6 TPH",
    power: "55-90 kW",
    dieDia: "420 mm",
    gearType: "Helical",
    rollers: "2",
    application: "Commercial feed mill, multi-species",
  },
  {
    model: "PU-GD-8",
    capacity: "5-10 TPH",
    power: "90-132 kW",
    dieDia: "508 mm",
    gearType: "Helical",
    rollers: "2-3",
    application: "Large-scale integrator, 16-24 hr operation",
  },
  {
    model: "PU-GD-12",
    capacity: "8-15 TPH",
    power: "132-185 kW",
    dieDia: "520 mm",
    gearType: "Helical",
    rollers: "3",
    application: "High-volume commercial production",
  },
  {
    model: "PU-GD-20",
    capacity: "12-20 TPH",
    power: "185-250 kW",
    dieDia: "600 mm",
    gearType: "Helical",
    rollers: "3",
    application: "Major integrator, export-grade feed mill",
  },
]

const faqs = [
  {
    question: "What makes a gear drive pellet mill better than a belt driven model?",
    answer:
      "A gear drive pellet mill transmits power from the electric motor to the main shaft through a precision-machined hardened alloy steel gearbox, providing 95-97% energy efficiency compared to 88-92% for belt driven models. The gearbox delivers constant torque without the risk of belt slippage, which is critical when processing high-density formulations or running at maximum capacity. Gear drive units handle higher sustained loads, have a longer mechanical service life (15-25 years vs 10-15 years), and require less frequent maintenance. For any feed mill operating above 5 TPH or running more than 16 hours per day, a gear drive pellet mill is the standard recommendation.",
  },
  {
    question: "What capacity range do gear drive pellet mills cover?",
    answer:
      "Pacific Unity supplies gear drive pellet mills from 3 TPH to 20+ TPH. The 3-6 TPH range suits medium commercial feed mills producing for a single species or a small number of farms. The 5-10 TPH range is the most popular configuration for multi-species commercial operations in the UAE and Africa. The 8-15 TPH range serves high-volume integrators producing poultry feed for 500,000+ birds. The 12-20 TPH range is designed for major feed milling operations supplying multiple farms or exporting finished feed across the region. All capacities are based on standard poultry feed (corn-soya) with a 3.5 mm die — actual throughput varies by formulation.",
  },
  {
    question: "How does the gearbox in a gear drive pellet mill work?",
    answer:
      "The gearbox uses helical or herringbone gears machined from case-hardened alloy steel (typically 20CrMnTi or equivalent). The motor drives the input shaft, which meshes with an intermediate gear that in turn drives the main output shaft connected to the ring die. The gear ratio is designed to reduce the motor speed (typically 1,450-1,475 RPM for a 4-pole motor on 50 Hz) down to the optimal die speed of 150-250 RPM depending on die diameter. Helical gears provide smoother engagement and lower noise than straight-cut gears. The gearbox is oil-bath lubricated with forced oil circulation and a heat exchanger on larger models to manage the thermal load during continuous operation.",
  },
  {
    question: "What is the expected lifespan of a gear drive pellet mill?",
    answer:
      "With proper maintenance, a gear drive pellet mill has a mechanical service life of 15-25 years. The gearbox itself can last the full lifespan of the machine if oil is changed at the recommended intervals (every 3,000-5,000 operating hours) and gear alignment is maintained. The main shaft bearings typically require replacement every 8,000-15,000 hours. Wear components — ring dies (1,500-3,000 hours) and roller shells (1,000-2,000 hours) — are consumables that are replaced regularly regardless of the drive type. Pacific Unity supplies all replacement components and offers annual service contracts to maximise equipment lifespan.",
  },
  {
    question: "How much does a gear drive pellet mill cost?",
    answer:
      "Gear drive pellet mill pricing depends on capacity, level of automation, and the scope of the supply (standalone unit or complete line). Request a quote for pricing on any model in our range. Pacific Unity provides transparent quotations that include the pellet mill, ring die, roller shells, conditioner, motor, and all standard accessories. We also offer complete turn-key feed mill line packages that bundle the pellet mill with hammer mills, mixers, coolers, crumblers, and packaging systems — giving you a single total project cost. Our team in the UAE will conduct a site assessment to determine the optimal configuration for your specific production requirements.",
  },
  {
    question: "Can a gear drive pellet mill handle multiple feed types?",
    answer:
      "Yes, gear drive pellet mills are designed for multi-species feed production. By changing the ring die, you can switch between different pellet diameters — 2-3 mm for fish or shrimp feed, 3-4 mm for poultry, 4-6 mm for cattle and small ruminants, and 6-12 mm for camels or horses. Die changeovers take approximately 30-60 minutes with the built-in hydraulic die clamp (available on models PU-GD-8 and above). The conditioner settings (steam volume, retention time) are adjusted via the PLC control panel to match each formulation. This versatility makes gear drive pellet mills ideal for commercial feed mills in the UAE that produce multiple product lines.",
  },
  {
    question: "What power supply is required for a gear drive pellet mill in the UAE?",
    answer:
      "Gear drive pellet mills require three-phase power at 380V/50Hz — the standard industrial supply in the UAE. The main motor size ranges from 55 kW for the PU-GD-5 up to 250 kW for the PU-GD-20. In addition to the main motor, the conditioner motor (typically 5.5-15 kW) and feeder motor (1.5-3 kW) require power. Total connected load for a pellet mill with conditioner ranges from approximately 65 kW to 270 kW. Facilities in UAE industrial zones such as KIZAD, RAK Industrial City, and Jebel Ali Free Zone typically have adequate power infrastructure. For sites with limited supply, we can specify energy-efficient motors (IE3 or IE4 class) and soft starters or variable frequency drives to manage peak demand.",
  },
  {
    question: "Does Pacific Unity install gear drive pellet mills in the UAE?",
    answer:
      "Yes, Pacific Unity handles the complete supply chain from our base in Ras Al Khaimah, UAE. This includes equipment specification and engineering, procurement and manufacturing coordination, international freight and UAE customs clearance, on-site unloading and installation, mechanical and electrical commissioning, test runs with your actual feed formulations, operator and maintenance staff training, and handover with full documentation. Typical installation for a standalone gear drive pellet mill takes 3-5 days. For a complete feed mill line, installation takes 2-4 weeks. All equipment is supplied with a 1-year warranty and we maintain spare parts stock in the UAE for rapid support.",
  },
]

export default function GearDrivePelletMillPage() {
  return (
    <>
      <ProductSchema
        name="Gear Drive Pellet Mill — Heavy-Duty Feed Pelletiser"
        description="Gear drive ring die pellet mills for commercial animal feed production in the UAE. 3-20 TPH capacity with hardened alloy steel gearbox."
        image="/images/products/gear-drive-pellet-mill.jpg"
        url="/equipment/feed-processing/pellet-mills/gear-drive/"
        category="Feed Processing Equipment"
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
            Gear Drive Pellet Mill Dubai — Heavy-Duty Feed Pelletising Equipment
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-muted-foreground">
            Heavy-duty gear drive ring die pellet mills built for continuous
            commercial feed production. Capacities from 3 to 20+ TPH —
            engineered for the demands of large-scale poultry, livestock, and
            aquaculture feed manufacturing in the UAE and across the Middle
            East and Africa.
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

      {/* How Gear Drive Works */}
      <section className="px-4 py-12 md:px-6 md:py-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            title="How a Gear Drive Pellet Mill Works"
            subtitle="Direct mechanical power transmission for maximum efficiency and reliability."
          />
          <div className="prose max-w-none text-muted-foreground">
            <p>
              A gear drive pellet mill uses a precision-engineered gearbox to
              transfer power from the electric motor to the main shaft that
              rotates the ring die. Unlike belt driven models that rely on
              flexible V-belts and pulleys, the gear drive system provides a
              rigid, direct mechanical coupling between the motor and the die.
              This eliminates belt slippage, reduces energy losses to just 3-5%,
              and delivers consistent torque at all operating loads.
            </p>
            <p className="mt-4">
              The gearbox contains helical gears machined from case-hardened
              alloy steel — typically 20CrMnTi — heat-treated to achieve a
              surface hardness of 58-62 HRC. Helical gear profiles provide
              smoother meshing, lower noise levels, and higher load capacity
              compared to straight-cut gears. The gear ratio reduces the motor
              speed from 1,450 RPM (standard for 4-pole motors on the UAE&apos;s
              50 Hz supply) to the optimal die rotation speed of 150-250 RPM,
              depending on die diameter and the specific formulation being
              processed.
            </p>
            <p className="mt-4">
              For feed mills operating in the UAE and the wider Gulf region,
              where ambient temperatures regularly exceed 40°C, the gear drive
              design offers a significant advantage: gearboxes maintain
              consistent performance regardless of heat, whereas V-belts can
              stretch, slip, and degrade faster in high-temperature environments.
              This is one of the key reasons that commercial feed operations in
              Dubai, Abu Dhabi, and the Northern Emirates overwhelmingly specify
              gear drive pellet mills for new installations.
            </p>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="bg-muted/30 px-4 py-12 md:px-6 md:py-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            title="Advantages of Gear Drive Pellet Mills"
            subtitle="Why gear drive is the industry standard for commercial feed production."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "95-97% energy efficiency — 10-15% better than belt driven models at equivalent throughput",
              "Constant torque delivery without belt slip — critical for dense, high-fibre formulations",
              "15-25 year mechanical service life with proper gearbox maintenance",
              "Lower long-term operating cost despite higher initial investment",
              "Handles sustained 24/7 operation at full capacity without overheating",
              "Quieter operation — helical gears produce less noise than belt systems",
              "Compact footprint — no need for external belt guards or tensioning systems",
              "Reduced maintenance downtime — gearbox oil change every 3,000-5,000 hours vs belt replacement every 2,000-4,000 hours",
              "Ideal for UAE climate — heat-resistant gearbox unaffected by ambient temperatures exceeding 40°C",
              "Suitable for multi-species production — handles frequent die changes and formulation switches",
            ].map((feat) => (
              <div key={feat} className="flex items-start gap-3">
                <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span className="text-sm text-muted-foreground">{feat}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Model Range */}
      <section className="px-4 py-12 md:px-6 md:py-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            title="Gear Drive Pellet Mill Model Range"
            subtitle="Available from 3 TPH to 20+ TPH for commercial feed production."
          />
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Model</TableHead>
                  <TableHead>Capacity</TableHead>
                  <TableHead>Motor Power</TableHead>
                  <TableHead>Die Diameter</TableHead>
                  <TableHead>Gear Type</TableHead>
                  <TableHead>Rollers</TableHead>
                  <TableHead>Application</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {gearDriveModels.map((m) => (
                  <TableRow key={m.model}>
                    <TableCell className="font-medium">{m.model}</TableCell>
                    <TableCell>{m.capacity}</TableCell>
                    <TableCell>{m.power}</TableCell>
                    <TableCell>{m.dieDia}</TableCell>
                    <TableCell>{m.gearType}</TableCell>
                    <TableCell>{m.rollers}</TableCell>
                    <TableCell>{m.application}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            Capacities are based on standard poultry feed (corn-soya) with a
            3.5 mm die. Actual throughput varies by formulation and raw material
            characteristics. Request a quote for pricing and detailed technical
            specifications.
          </p>
        </div>
      </section>

      {/* Related Equipment */}
      <section className="bg-muted/30 px-4 py-12 md:px-6 md:py-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeading title="Related Equipment" />
          <div className="grid gap-6 sm:grid-cols-3">
            {[
              {
                title: "Belt Driven Pellet Mills",
                desc: "Cost-effective pelletisers for 1-5 TPH farm-level feed production.",
                href: "/equipment/feed-processing/pellet-mills/belt-driven/",
              },
              {
                title: "Fish Feed Extruders",
                desc: "Twin-screw extruders for floating and sinking aquaculture feed.",
                href: "/equipment/feed-processing/pellet-mills/fish-feed/",
              },
              {
                title: "All Pellet Mills",
                desc: "Complete pellet mill range with gear drive vs belt driven comparison.",
                href: "/equipment/feed-processing/pellet-mills/",
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
      <section className="px-4 py-12 md:px-6 md:py-16">
        <div className="mx-auto max-w-3xl">
          <SectionHeading title="Frequently Asked Questions — Gear Drive Pellet Mills" />
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 pb-12 md:px-6 md:pb-16">
        <div className="mx-auto max-w-7xl">
          <CTAStrip
            title="Ready for a Gear Drive Pellet Mill Quote?"
            description="Share your production targets and feed formulations. Our engineering team will specify the right gear drive model and complete line configuration for your operation."
            whatsappMessage="Hi, I'm interested in a gear drive pellet mill. Can you provide specifications and pricing?"
          />
        </div>
      </section>
    </>
  )
}
