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
  CheckCircle,
  Tag,
  Layers,
  Sticker,
  Stamp,
  Factory,
  Wine,
  Milk,
  Pill,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Labeling Machine Dubai & UAE — BOPP, Shrink & Self-Adhesive Labelers",
  description:
    "Industrial labeling machines in Dubai UAE — BOPP labeling, shrink sleeve labeling, sticker labeling, and tax stamp applicators. 200+ installations across 9 countries. Request a quote.",
  keywords: [
    "labeling machine",
    "labeling machine Dubai",
    "labelling machine UAE",
    "BOPP labeling machine",
    "shrink labeling machine",
    "sticker labeling machine",
    "self-adhesive labeling machine",
    "tax stamp applicator",
    "label applicator Dubai",
  ],
  alternates: {
    canonical:
      "https://pacificunity.ae/equipment/filling-packaging/labeling-machines/",
  },
}

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "Equipment", href: "/equipment/" },
  { name: "Filling & Packaging", href: "/equipment/filling-packaging/" },
  {
    name: "Labeling Machines",
    href: "/equipment/filling-packaging/labeling-machines/",
  },
]

const specsData = [
  {
    type: "BOPP Labeling Machine",
    speed: "6,000–30,000 BPH",
    labelType: "BOPP film + hot-melt glue",
    containerShape: "Round",
    accuracy: "±1 mm",
    power: "3–8 kW",
  },
  {
    type: "Shrink Sleeve Labeler",
    speed: "6,000–24,000 BPH",
    labelType: "PVC / PET-G / OPS shrink sleeve",
    containerShape: "Round, square, contoured",
    accuracy: "±1.5 mm",
    power: "15–45 kW (incl. tunnel)",
  },
  {
    type: "Sticker Labeling Machine",
    speed: "2,000–20,000 BPH",
    labelType: "Self-adhesive (pressure-sensitive)",
    containerShape: "Round, flat, oval",
    accuracy: "±0.5 mm",
    power: "1.5–3 kW",
  },
  {
    type: "Tax Stamp Applicator",
    speed: "4,000–18,000 BPH",
    labelType: "Excise / revenue stamp",
    containerShape: "Round, square (bottles & packs)",
    accuracy: "±0.5 mm",
    power: "1–2 kW",
  },
]

const faqs = [
  {
    question:
      "What types of labeling machines are available for industrial use in the UAE?",
    answer:
      "There are four primary types of industrial labeling machines used in the UAE market. BOPP (Biaxially Oriented Polypropylene) labeling machines apply printed film labels using hot-melt glue and are the dominant technology for water and carbonated beverage bottling lines running at 6,000 to 30,000 bottles per hour. Shrink sleeve labeling machines apply heat-shrinkable sleeves that conform to complex container shapes, providing 360-degree decoration and tamper evidence. Sticker (self-adhesive) labeling machines apply pressure-sensitive labels and are the most versatile option, suitable for round, flat, and oval containers across food, pharmaceutical, and cosmetic products. Tax stamp applicators are specialised machines that apply excise or revenue stamps to tobacco products, spirits, and energy drinks as required under UAE Federal Tax Authority regulations.",
  },
  {
    question: "How much does a labeling machine cost in Dubai?",
    answer:
      "Labeling machine costs in Dubai depend on the technology, speed, and level of automation. A basic semi-automatic sticker labeling machine for small-scale production starts from approximately AED 15,000. Mid-range automatic sticker labelers capable of 5,000–10,000 bottles per hour range from AED 60,000 to AED 150,000. High-speed BOPP labeling machines for water and beverage lines (12,000–30,000 BPH) typically cost between AED 250,000 and AED 700,000. Shrink sleeve labeling systems, which include both the applicator and the shrink tunnel, range from AED 180,000 to AED 500,000. Tax stamp applicators start from approximately AED 120,000. All prices exclude installation and commissioning. Request a quote for pricing tailored to your specific production requirements.",
  },
  {
    question:
      "Which labeling technology is best for water bottles in the UAE?",
    answer:
      "For water bottle labeling in the UAE, BOPP (Biaxially Oriented Polypropylene) labeling is the most widely adopted technology. BOPP labels offer a premium, transparent look that showcases the product inside, have excellent moisture resistance essential for chilled and condensation-prone bottles in the UAE climate, and the lowest per-label cost at high volumes. BOPP labelers operate at speeds matching typical UAE water bottling lines — 12,000 to 30,000 bottles per hour. The hot-melt adhesive system provides reliable adhesion even in the high humidity and temperature fluctuations common in UAE warehouses and transport. For premium brands requiring full-body decoration, shrink sleeve labeling is an alternative worth considering.",
  },
  {
    question:
      "What is the difference between BOPP labeling and sticker labeling?",
    answer:
      "BOPP labeling and sticker (self-adhesive) labeling differ fundamentally in how the label is attached to the container. BOPP labels are supplied as continuous rolls of printed film that are cut to size on the machine and bonded using hot-melt glue — this makes them significantly cheaper per unit at high volumes (typically 40–60% less than equivalent sticker labels). Sticker labels come pre-cut with an adhesive backing on a liner, offering higher placement accuracy (±0.5 mm versus ±1 mm for BOPP), easier changeover between label designs, and compatibility with a wider range of container shapes including flat and oval surfaces. BOPP labeling is preferred for high-speed beverage lines where cost efficiency matters, while sticker labeling is preferred for food, pharmaceutical, and cosmetic products where label precision and design flexibility are priorities.",
  },
  {
    question: "Do labeling machines need compressed air to operate?",
    answer:
      "Most industrial labeling machines require a compressed air supply for functions such as label cutting, bottle separation, and pneumatic actuators. Typical air consumption is 0.3–0.8 m³/min at 6–8 bar for BOPP and shrink labelers. Sticker labeling machines generally have lower air requirements or may operate without compressed air entirely, depending on the model — some modern servo-driven sticker labelers are fully electric. Tax stamp applicators typically require minimal compressed air (0.1–0.3 m³/min). When planning your labeling machine installation in the UAE, ensure your facility has an adequately sized compressor or budget for one as part of the project. Pacific Unity can specify the correct compressor capacity during the quotation stage.",
  },
  {
    question: "How long does it take to install a labeling machine in Dubai?",
    answer:
      "Installation timelines depend on the complexity of the system and the readiness of your production line. A standalone sticker labeling machine can be installed, aligned, and commissioned in 2–3 days. A BOPP labeling machine integrated into an existing bottling line typically takes 5–7 days including mechanical installation, electrical connection, conveyor alignment, and speed synchronisation with upstream filling equipment. Shrink sleeve systems require 5–10 days due to the additional shrink tunnel setup and steam or hot-air calibration. Lead time from order to delivery is typically 4–6 weeks for standard models. Pacific Unity provides full installation, commissioning, and operator training at your facility anywhere in the UAE.",
  },
  {
    question:
      "Can a single labeling machine handle different bottle sizes?",
    answer:
      "Yes, most modern labeling machines are designed for quick changeover between container sizes. BOPP labelers accommodate different bottle diameters through adjustable guide rails and programmable label length settings — changeover typically takes 15–30 minutes. Sticker labeling machines offer the fastest changeovers (10–20 minutes) as they require only guide rail adjustment and label sensor recalibration. Shrink sleeve labelers handle the widest range of container shapes without mechanical changeover, since the sleeve conforms to the container during the heat-shrink process — only the sleeve diameter and shrink tunnel temperature need adjustment. Pacific Unity recommends discussing your full container range during the specification stage so the machine can be configured with the appropriate adjustment range.",
  },
  {
    question: "What maintenance does a labeling machine require?",
    answer:
      "Regular maintenance extends machine life and minimises downtime. Daily tasks include cleaning label sensors, checking glue nozzles (for BOPP machines), inspecting the label feed path, and verifying alignment accuracy. Weekly maintenance involves lubricating mechanical components, checking belt tension, cleaning the hot-melt glue tank (BOPP systems), and inspecting pneumatic cylinders and seals. Quarterly servicing should include a comprehensive inspection of servo motors, encoder calibration, electrical connections, and replacement of wear parts such as cutting blades and suction pads. In the UAE's climate, extra attention to glue viscosity is important — hot-melt adhesives are sensitive to ambient temperature, and BOPP machines running in non-air-conditioned production areas during summer may require glue temperature adjustments. Pacific Unity supplies all spare parts and offers annual maintenance contracts.",
  },
  {
    question:
      "Does Pacific Unity provide labeling machines for the pharmaceutical industry in the UAE?",
    answer:
      "Yes, Pacific Unity supplies labeling machines configured for pharmaceutical compliance in the UAE. Pharmaceutical labeling requires features beyond standard food and beverage machines: serialisation and track-and-trace integration (mandatory under UAE Ministry of Health and Prevention regulations), tamper-evident label application, high-accuracy placement (±0.5 mm or better), vision inspection systems to verify label presence and print quality, and batch/lot code printing integration. Our sticker labeling machines and tax stamp applicators can be integrated with serialisation printers and camera inspection systems to meet UAE pharmaceutical labeling requirements. All pharmaceutical labeling solutions include IQ/OQ validation documentation.",
  },
  {
    question:
      "What is the warranty on Pacific Unity labeling machines?",
    answer:
      "All Pacific Unity labeling machines are supplied with a standard 1-year warranty covering manufacturing defects in mechanical, electrical, and pneumatic components. The warranty includes remote technical support, on-site troubleshooting for UAE-based installations, and replacement of defective parts at no charge. Wear parts such as cutting blades, suction cups, seals, and glue nozzles are excluded from warranty as they are consumable items with defined replacement intervals. Extended warranty packages of 2 or 3 years are available at additional cost. Beyond the warranty period, Pacific Unity continues to supply spare parts and offers annual maintenance contracts to keep your labeling equipment operating at peak performance.",
  },
]

export default function LabelingMachinesPage() {
  return (
    <>
      <ProductSchema
        name="Labeling Machine — BOPP, Shrink Sleeve & Self-Adhesive Labelers"
        description="Industrial labeling machines for BOPP labeling, shrink sleeve labeling, sticker labeling, and tax stamp application in Dubai and the UAE. Speeds from 2,000 to 30,000 BPH."
        image="/images/products/labeling-machine.jpg"
        url="/equipment/filling-packaging/labeling-machines/"
        category="Labeling Equipment"
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
            33,100 Global Monthly Searches
          </Badge>
          <h1 className="max-w-4xl text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            Labeling Machine Dubai &amp; UAE — BOPP, Shrink &amp; Self-Adhesive
            Labelers
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-muted-foreground">
            Industrial labeling machines for every bottle, jar, and container on
            your production line. BOPP labeling, shrink sleeve labeling, sticker
            labeling, and tax stamp applicators — supplied, installed, and
            supported across the United Arab Emirates by Pacific Unity MEA.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/request-quote/">
                Request a Quote <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/equipment/filling-packaging/labeling-machines/bopp-labeling/">
                View BOPP Labelers
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* What Are Labeling Machines */}
      <section className="px-4 py-12 md:px-6 md:py-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            title="What Are Labeling Machines?"
            subtitle="The equipment that turns an unlabelled container into a branded, shelf-ready product."
          />
          <div className="prose max-w-none text-muted-foreground">
            <p>
              A labeling machine is an automated system that applies printed
              labels to containers — bottles, jars, cans, pouches, and cartons —
              at speeds ranging from a few hundred to over 30,000 units per
              hour. In the modern manufacturing environment, labeling machines
              are one of the final and most critical stages of the packaging
              line: they carry the product&apos;s branding, ingredient lists,
              barcodes, regulatory information, and — in the UAE — mandatory
              bilingual (Arabic and English) product declarations.
            </p>
            <p className="mt-4">
              In the UAE and broader Middle East market, labeling requirements
              are governed by the Emirates Authority for Standardisation and
              Metrology (ESMA) and the Gulf Standardisation Organisation (GSO).
              All pre-packaged food products sold in the UAE must display labels
              in Arabic, include nutritional information per GSO 2233, and carry
              a valid barcode. For regulated products such as tobacco, spirits,
              energy drinks, and sweetened beverages, the UAE Federal Tax
              Authority (FTA) requires the application of digital excise tax
              stamps — creating demand for specialised tax stamp applicator
              machines.
            </p>
            <p className="mt-4">
              Pacific Unity MEA, headquartered in Ras Al Khaimah, supplies the
              full range of industrial labeling technologies to manufacturers
              across the United Arab Emirates, Saudi Arabia, Oman, Bahrain, and
              the broader GCC. With over 200 projects completed across 9
              countries since our parent company North Star Impex was established
              in Singapore in 2013, we offer proven labeling solutions for every
              production scale — from a small food manufacturer running 2,000
              bottles per hour to a large beverage plant operating at 30,000
              bottles per hour.
            </p>
          </div>
        </div>
      </section>

      {/* Types of Labeling Machines */}
      <section className="bg-muted/30 px-4 py-12 md:px-6 md:py-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            title="Types of Labeling Machines Explained"
            subtitle="Four core technologies, each suited to different products, production speeds, and label materials."
          />

          <div className="grid gap-6 md:grid-cols-2">
            <Link
              href="/equipment/filling-packaging/labeling-machines/bopp-labeling/"
              className="group"
            >
              <Card className="h-full transition-shadow hover:shadow-lg">
                <CardContent className="p-6">
                  <Tag className="h-8 w-8 text-primary" />
                  <h3 className="mt-3 text-lg font-semibold group-hover:text-primary transition-colors">
                    BOPP Labeling Machine (Hot-Melt Glue)
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Applies BOPP film labels using hot-melt adhesive. The
                    industry standard for high-speed water and beverage bottling
                    lines in the UAE. Speeds of 6,000–30,000 BPH with the lowest
                    per-label cost of any labeling technology. Labels offer
                    excellent clarity, moisture resistance, and a premium
                    no-label look.
                  </p>
                  <span className="mt-3 inline-flex items-center text-sm text-primary">
                    BOPP labeling machines{" "}
                    <ArrowRight className="ml-1 h-3.5 w-3.5" />
                  </span>
                </CardContent>
              </Card>
            </Link>
            <Link
              href="/equipment/filling-packaging/labeling-machines/shrink-labeling/"
              className="group"
            >
              <Card className="h-full transition-shadow hover:shadow-lg">
                <CardContent className="p-6">
                  <Layers className="h-8 w-8 text-primary" />
                  <h3 className="mt-3 text-lg font-semibold group-hover:text-primary transition-colors">
                    Shrink Sleeve Labeling Machine
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Applies heat-shrinkable sleeves that conform to any container
                    shape, delivering 360-degree full-body decoration. Ideal for
                    contoured bottles, dairy cups, and products requiring
                    tamper-evident seals. Speeds of 6,000–24,000 BPH including
                    integrated shrink tunnel.
                  </p>
                  <span className="mt-3 inline-flex items-center text-sm text-primary">
                    Shrink labeling machines{" "}
                    <ArrowRight className="ml-1 h-3.5 w-3.5" />
                  </span>
                </CardContent>
              </Card>
            </Link>
            <Link
              href="/equipment/filling-packaging/labeling-machines/sticker-labeling/"
              className="group"
            >
              <Card className="h-full transition-shadow hover:shadow-lg">
                <CardContent className="p-6">
                  <Sticker className="h-8 w-8 text-primary" />
                  <h3 className="mt-3 text-lg font-semibold group-hover:text-primary transition-colors">
                    Sticker Labeling Machine (Self-Adhesive)
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Applies pre-printed pressure-sensitive labels with a peel
                    and apply mechanism. The most versatile labeling technology —
                    handles round, flat, oval, and tapered containers. Speeds of
                    2,000–20,000 BPH with the highest label placement accuracy
                    (±0.5 mm).
                  </p>
                  <span className="mt-3 inline-flex items-center text-sm text-primary">
                    Sticker labeling machines{" "}
                    <ArrowRight className="ml-1 h-3.5 w-3.5" />
                  </span>
                </CardContent>
              </Card>
            </Link>
            <Link
              href="/equipment/filling-packaging/labeling-machines/tax-stamp-applicator/"
              className="group"
            >
              <Card className="h-full transition-shadow hover:shadow-lg">
                <CardContent className="p-6">
                  <Stamp className="h-8 w-8 text-primary" />
                  <h3 className="mt-3 text-lg font-semibold group-hover:text-primary transition-colors">
                    Tax Stamp Applicator
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Applies government excise and revenue stamps to regulated
                    products including tobacco, spirits, and energy drinks.
                    Mandatory for UAE FTA compliance. Speeds of 4,000–18,000 BPH
                    with vision inspection for verification.
                  </p>
                  <span className="mt-3 inline-flex items-center text-sm text-primary">
                    Tax stamp applicators{" "}
                    <ArrowRight className="ml-1 h-3.5 w-3.5" />
                  </span>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Applications by Industry */}
      <section className="px-4 py-12 md:px-6 md:py-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            title="Labeling Machine Applications by Industry"
            subtitle="From bottled water in Dubai to pharmaceuticals in Abu Dhabi — the right labeler for every sector."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Wine,
                title: "Water & Beverages",
                desc: "BOPP and shrink labeling for PET water bottles, carbonated soft drinks, juices, and energy drinks. High-speed lines matched to UAE bottling plant throughputs of 12,000–30,000 BPH.",
              },
              {
                icon: Milk,
                title: "Dairy & Food",
                desc: "Sticker and shrink labeling for yoghurt cups, sauce bottles, cooking oil containers, and food jars. Wrap-around, front-back, and top labeling configurations for ESMA-compliant bilingual labels.",
              },
              {
                icon: Pill,
                title: "Pharmaceuticals & Cosmetics",
                desc: "Precision sticker labeling for medicine bottles, syringes, vials, and cosmetic tubes. Serialisation-ready with vision inspection, meeting UAE Ministry of Health track-and-trace regulations.",
              },
              {
                icon: Factory,
                title: "Tobacco & Spirits",
                desc: "Tax stamp applicators for cigarette packs, shisha tobacco tins, and spirit bottles. Compliant with UAE FTA excise tax stamp requirements and digital tracking systems.",
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

      {/* Selection Guide */}
      <section className="bg-muted/30 px-4 py-12 md:px-6 md:py-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            title="How to Choose the Right Labeling Machine"
            subtitle="A practical selection guide for manufacturers in the UAE."
          />
          <div className="prose max-w-none text-muted-foreground">
            <p>
              Choosing the correct labeling machine for your production line
              involves evaluating five key factors. Getting this decision right
              saves capital expenditure, avoids production bottlenecks, and
              ensures your labeling meets both brand standards and UAE regulatory
              requirements.
            </p>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                step: "1",
                title: "Container Shape & Material",
                text: "Round PET bottles suit all labeling types. Square, contoured, or tapered containers require shrink sleeve or sticker labeling. Glass bottles need gentle handling — BOPP labelers with soft-grip starwheels are recommended.",
              },
              {
                step: "2",
                title: "Production Speed",
                text: "Match your labeler speed to your filling line output. Under-specifying creates a bottleneck; over-specifying wastes capital. BOPP machines lead on speed (up to 30,000 BPH), while sticker labelers are optimal for lower-volume, multi-SKU operations.",
              },
              {
                step: "3",
                title: "Label Coverage & Design",
                text: "Wrap-around labels covering 70–100% of the container circumference suit BOPP and sticker labelers. Full-body coverage from cap to base requires shrink sleeves. Front-and-back dual labels are best handled by sticker labeling machines.",
              },
              {
                step: "4",
                title: "Per-Label Cost",
                text: "BOPP labels are the cheapest per unit at high volumes. Sticker labels cost more but offer faster changeover. Shrink sleeves fall between the two on cost but provide the most visual impact. Factor in total cost of ownership including adhesive and energy consumption.",
              },
              {
                step: "5",
                title: "Regulatory Requirements",
                text: "Products subject to UAE excise tax need a tax stamp applicator. Pharmaceutical products require serialisation integration. All products sold in the UAE must carry bilingual (Arabic/English) labels per ESMA standards — ensure your label design and machine accommodate this.",
              },
              {
                step: "6",
                title: "Changeover Frequency",
                text: "If you run multiple SKUs or label variants on the same line, prioritise machines with quick changeover. Sticker labelers typically changeover in 10–20 minutes; BOPP machines take 15–30 minutes. Shrink sleevers need minimal mechanical changeover but require tunnel temperature adjustment.",
              },
            ].map((item) => (
              <Card key={item.step}>
                <CardContent className="p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                    {item.step}
                  </div>
                  <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {item.text}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specs Table */}
      <section className="px-4 py-12 md:px-6 md:py-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            title="Labeling Machine Technical Specifications"
            subtitle="Compare key parameters across all four labeling technologies."
          />
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Type</TableHead>
                  <TableHead>Speed</TableHead>
                  <TableHead>Label Material</TableHead>
                  <TableHead>Container Shapes</TableHead>
                  <TableHead>Accuracy</TableHead>
                  <TableHead>Power</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {specsData.map((row) => (
                  <TableRow key={row.type}>
                    <TableCell className="font-medium">{row.type}</TableCell>
                    <TableCell>{row.speed}</TableCell>
                    <TableCell>{row.labelType}</TableCell>
                    <TableCell>{row.containerShape}</TableCell>
                    <TableCell>{row.accuracy}</TableCell>
                    <TableCell>{row.power}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            Speeds based on standard round PET bottles. Actual throughput
            depends on container dimensions, label size, and line
            configuration.{" "}
            <Link
              href="/request-quote/"
              className="text-primary underline"
            >
              Request a quote for pricing
            </Link>{" "}
            tailored to your specific production line.
          </p>
        </div>
      </section>

      {/* Why Pacific Unity */}
      <section className="bg-muted/30 px-4 py-12 md:px-6 md:py-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            title="Why Choose Pacific Unity for Labeling Machines in the UAE?"
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "200+ successful projects across 9 countries in the Middle East & Asia",
              "Headquartered in Ras Al Khaimah, UAE — local stock, local support",
              "Full project scope: supply, installation, commissioning & operator training",
              "1-year warranty on all labeling machines with on-site support",
              "Spare parts availability in the UAE for minimal downtime",
              "Integration with existing filling, capping, and packaging lines",
              "Multi-brand compatibility — we recommend the best machine for your application, not a single brand",
              "Experience across water, beverages, dairy, food, pharma, and tobacco sectors",
            ].map((feat) => (
              <div key={feat} className="flex items-start gap-3">
                <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span className="text-sm text-muted-foreground">{feat}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Equipment Links */}
      <section className="px-4 py-12 md:px-6 md:py-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            title="Explore Labeling Solutions"
            subtitle="View detailed specifications for each labeling technology."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "BOPP Labeling Machine",
                desc: "Hot-melt glue labeling for water and beverage lines.",
                href: "/equipment/filling-packaging/labeling-machines/bopp-labeling/",
                badge: "Most Popular",
              },
              {
                title: "Shrink Labeling Machine",
                desc: "Full-body sleeve applicators and shrink tunnels.",
                href: "/equipment/filling-packaging/labeling-machines/shrink-labeling/",
                badge: "360° Coverage",
              },
              {
                title: "Sticker Labeling Machine",
                desc: "Pressure-sensitive label applicators for all containers.",
                href: "/equipment/filling-packaging/labeling-machines/sticker-labeling/",
                badge: "Most Versatile",
              },
              {
                title: "Tax Stamp Applicator",
                desc: "Excise and revenue stamp machines for UAE compliance.",
                href: "/equipment/filling-packaging/labeling-machines/tax-stamp-applicator/",
                badge: "FTA Compliant",
              },
            ].map((sub) => (
              <Link key={sub.href} href={sub.href} className="group">
                <Card className="h-full transition-shadow hover:shadow-lg">
                  <CardContent className="p-5">
                    <Badge variant="outline" className="mb-3">
                      {sub.badge}
                    </Badge>
                    <h3 className="font-semibold group-hover:text-primary transition-colors">
                      {sub.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {sub.desc}
                    </p>
                    <span className="mt-3 inline-flex items-center text-sm text-primary">
                      Learn more{" "}
                      <ArrowRight className="ml-1 h-3.5 w-3.5" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          <div className="mt-8">
            <SectionHeading
              title="Related Equipment"
              as="h3"
            />
            <div className="grid gap-6 sm:grid-cols-3">
              {[
                {
                  title: "Filling Machines",
                  desc: "Liquid, paste, and powder filling systems for your production line.",
                  href: "/equipment/filling-packaging/filling-machines/",
                },
                {
                  title: "Capping Machines",
                  desc: "Automatic capping and sealing equipment for all closure types.",
                  href: "/equipment/filling-packaging/capping-machines/",
                },
                {
                  title: "Packaging Machines",
                  desc: "Shrink wrapping, cartoning, and end-of-line packaging solutions.",
                  href: "/equipment/filling-packaging/packaging-machines/",
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
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-muted/30 px-4 py-12 md:px-6 md:py-16">
        <div className="mx-auto max-w-3xl">
          <SectionHeading title="Frequently Asked Questions About Labeling Machines in the UAE" />
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 pb-12 md:px-6 md:pb-16">
        <div className="mx-auto max-w-7xl">
          <CTAStrip
            title="Need a Labeling Machine for Your Production Line?"
            description="Tell us about your containers, labels, and production speed. We will recommend the right labeling technology and provide a detailed quotation."
            whatsappMessage="Hi, I'm interested in labeling machines for my production line in the UAE."
          />
        </div>
      </section>
    </>
  )
}
