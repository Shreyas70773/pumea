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
  title: "BOPP Labeling Machine Dubai — Hot-Melt Glue Labeling Systems",
  description:
    "BOPP labeling machines in Dubai UAE — hot-melt glue labeling systems for water bottles, beverages, and PET containers. Speeds up to 30,000 BPH. Request a quote.",
  keywords: [
    "BOPP labeling machine",
    "BOPP labeling machine Dubai",
    "hot melt glue labeling machine",
    "OPP labeling machine UAE",
    "water bottle labeling machine",
    "beverage labeling machine Dubai",
  ],
  alternates: {
    canonical:
      "https://pacificunity.ae/equipment/filling-packaging/labeling-machines/bopp-labeling/",
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
  {
    name: "BOPP Labeling",
    href: "/equipment/filling-packaging/labeling-machines/bopp-labeling/",
  },
]

const modelData = [
  {
    model: "PU-BOPP-6K",
    speed: "6,000 BPH",
    bottles: "200 mL – 2 L",
    labelHeight: "30–180 mm",
    glueType: "Hot-melt (EVA/APAO)",
    power: "3 kW",
  },
  {
    model: "PU-BOPP-12K",
    speed: "12,000 BPH",
    bottles: "200 mL – 2 L",
    labelHeight: "30–200 mm",
    glueType: "Hot-melt (APAO)",
    power: "5 kW",
  },
  {
    model: "PU-BOPP-20K",
    speed: "20,000 BPH",
    bottles: "330 mL – 1.5 L",
    labelHeight: "40–200 mm",
    glueType: "Hot-melt (APAO)",
    power: "6 kW",
  },
  {
    model: "PU-BOPP-30K",
    speed: "30,000 BPH",
    bottles: "330 mL – 1.5 L",
    labelHeight: "50–200 mm",
    glueType: "Hot-melt (APAO)",
    power: "8 kW",
  },
]

const faqs = [
  {
    question: "What is a BOPP labeling machine and how does it work?",
    answer:
      "A BOPP labeling machine applies pre-printed Biaxially Oriented Polypropylene (BOPP) film labels to containers using hot-melt adhesive. The machine draws label film from a large roll, cuts individual labels to the programmed length using a rotating drum cutter, applies a thin layer of hot-melt glue to the leading and trailing edges of the label (or across the full surface depending on configuration), and wraps the label around the container as it rotates on a turret or passes through the labeling station. The entire process takes less than one second per bottle at high speeds. The hot-melt glue sets within seconds, providing an immediate bond without the need for curing or drying time.",
  },
  {
    question: "Why is BOPP labeling the preferred choice for water bottles in the UAE?",
    answer:
      "BOPP labeling dominates the UAE water bottling industry for several compelling reasons. First, the cost per label is the lowest of any labeling technology — BOPP film costs approximately 40–60% less than equivalent self-adhesive labels at high volumes. Second, BOPP labels have exceptional moisture resistance, which is critical because water bottles in the UAE frequently develop condensation when moved between air-conditioned environments and the ambient heat (often exceeding 45°C in summer). Third, BOPP labels offer a clear, glossy appearance that creates a premium no-label look, which is the market expectation for bottled water in the UAE and GCC. Fourth, BOPP labeling machines match the high throughputs of UAE water bottling lines, operating at 12,000 to 30,000 bottles per hour.",
  },
  {
    question: "What speed range do BOPP labeling machines cover?",
    answer:
      "Pacific Unity supplies BOPP labeling machines covering speeds from 6,000 bottles per hour (BPH) for smaller production lines up to 30,000 BPH for high-speed water and beverage operations. The 6,000 BPH models are suitable for start-up bottling plants, small-scale juice manufacturers, and contract packaging operations in the UAE. The 12,000 BPH range is the most popular for mid-size water and soft drink producers across Dubai, Abu Dhabi, and the Northern Emirates. The 20,000–30,000 BPH models serve large-scale producers and multinational beverage companies operating in the UAE market. Speed can be adjusted downward for label accuracy optimisation or smaller bottle formats.",
  },
  {
    question: "What types of containers can a BOPP labeling machine handle?",
    answer:
      "BOPP labeling machines are designed primarily for round containers — PET bottles, glass bottles, and cylindrical cans. Most machines accommodate bottle diameters from 50 mm to 120 mm and bottle volumes from 200 mL to 2 litres. Some models can handle larger containers up to 5 litres with modified starwheel configurations. BOPP labeling is not suitable for square, oval, or flat-sided containers because the wrap-around label application requires a cylindrical surface for consistent glue contact and smooth appearance. For non-round containers, Pacific Unity recommends shrink sleeve labeling or sticker labeling as alternative technologies.",
  },
  {
    question: "How much does BOPP labeling cost per bottle compared to sticker labeling?",
    answer:
      "The total labeling cost per bottle includes both the label material and the adhesive. For a standard 500 mL water bottle in the UAE market, a BOPP label typically costs AED 0.015–0.025 per label (including film and hot-melt glue), whereas an equivalent self-adhesive (sticker) label costs AED 0.035–0.060 per label. This represents a saving of approximately 50–60% per unit with BOPP labeling at volumes above 50,000 bottles per day. However, the initial capital investment for a BOPP labeling machine is higher than for a sticker labeler, so the break-even point depends on your production volume. For most UAE beverage producers running above 8,000 BPH, BOPP labeling delivers a lower total cost of ownership within 6–12 months.",
  },
  {
    question: "What maintenance does a BOPP labeling machine require in the UAE climate?",
    answer:
      "BOPP labeling machines require particular attention to the hot-melt glue system in the UAE climate. Daily maintenance includes cleaning the glue nozzles and checking the glue tank temperature — hot-melt adhesives are sensitive to ambient conditions, and during the UAE summer months (May–October), the elevated factory temperatures can affect glue viscosity if the production area is not climate-controlled. Weekly tasks include inspecting the label cutting drum, cleaning the vacuum drum, checking the timing belts, and lubricating the turret bearings. Quarterly maintenance involves a comprehensive check of servo motors, encoder calibration, and replacement of wear parts such as cutting blades and glue nozzles. Pacific Unity includes a 12-month maintenance schedule with every installation and offers ongoing maintenance contracts.",
  },
  {
    question: "Can BOPP labels include Arabic text as required by UAE regulations?",
    answer:
      "Yes, BOPP labels fully support bilingual Arabic and English text as required by UAE ESMA regulations for pre-packaged products. BOPP film accepts high-resolution gravure and flexographic printing, producing crisp Arabic typography and detailed graphics. The film can be printed in up to 10 colours, which accommodates the complex design requirements of bilingual labels including nutritional panels, ingredient lists, and barcode zones. Label design is handled by your print supplier — Pacific Unity can recommend experienced BOPP label printers based in the UAE and wider GCC region who are familiar with local regulatory requirements.",
  },
  {
    question: "What is the lead time for a BOPP labeling machine delivery to the UAE?",
    answer:
      "Standard lead time for BOPP labeling machines delivered to the UAE is 4–6 weeks from confirmed order and deposit. This includes machine manufacturing or procurement from our supply chain, factory acceptance testing (FAT), packing, shipping to the UAE, and customs clearance. On-site installation and commissioning typically add 5–7 working days. For urgent requirements, Pacific Unity maintains a limited stock of commonly specified models at our UAE facility, which can reduce lead time to 2–3 weeks. Extended lead times of 8–10 weeks may apply for custom configurations or very high-speed models (above 20,000 BPH). All machines are delivered with a 1-year warranty covering manufacturing defects.",
  },
]

export default function BoppLabelingPage() {
  return (
    <>
      <ProductSchema
        name="BOPP Labeling Machine — Hot-Melt Glue Labeling Systems"
        description="BOPP labeling machines for water bottles and beverages in Dubai UAE. Hot-melt glue labeling at speeds from 6,000 to 30,000 BPH."
        image="/images/products/bopp-labeling-machine.jpg"
        url="/equipment/filling-packaging/labeling-machines/bopp-labeling/"
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
          <h1 className="max-w-4xl text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            BOPP Labeling Machine Dubai — Hot-Melt Glue Labeling Systems
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-muted-foreground">
            High-speed BOPP labeling machines for water bottles, soft drinks,
            juices, and beverage containers. Hot-melt adhesive application at
            6,000–30,000 bottles per hour — the UAE&apos;s most cost-effective
            labeling technology for round PET and glass bottles.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/request-quote/">
                Request a Quote <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/equipment/filling-packaging/labeling-machines/">
                All Labeling Machines
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* How BOPP Works */}
      <section className="px-4 py-12 md:px-6 md:py-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            title="How BOPP Labeling Works"
            subtitle="A high-speed process that combines precision cutting, hot-melt adhesive, and rotary application."
          />
          <div className="prose max-w-none text-muted-foreground">
            <p>
              BOPP labeling — also referred to as OPP labeling or hot-melt glue
              labeling — uses rolls of pre-printed Biaxially Oriented
              Polypropylene film as the label material. Unlike self-adhesive
              labels that arrive with adhesive already applied to the backing,
              BOPP labels receive their adhesive during the labeling process
              itself. This is the key advantage: the label film is
              significantly cheaper than pre-glued alternatives, and the
              hot-melt adhesive system provides a strong, moisture-resistant bond
              that performs exceptionally well in the UAE&apos;s hot and humid
              conditions.
            </p>
            <p className="mt-4">
              The labeling process follows a precise sequence. First, the BOPP
              film unwinds from a roll mounted on the machine. A high-speed
              rotary drum cuts individual labels to the exact programmed length.
              Hot-melt glue — typically an APAO (Amorphous Poly Alpha Olefin)
              adhesive heated to 140–170°C — is applied to the label edges by
              a glue roller or spray system. The label is then transferred to
              the container as it passes through the labeling station, wrapping
              smoothly around the bottle surface. The glue sets within 2–3
              seconds, completing the bond before the bottle exits the machine.
            </p>
            <p className="mt-4">
              In the UAE, BOPP labeling is the dominant technology for water
              bottling plants across Dubai, Abu Dhabi, Al Ain, and the Northern
              Emirates. The technology&apos;s combination of low label cost, high
              speed, and clean visual appearance makes it the clear choice for
              any producer running more than 6,000 bottles per hour on round
              containers.
            </p>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="bg-muted/30 px-4 py-12 md:px-6 md:py-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeading title="Advantages of BOPP Labeling" />
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Lowest per-label cost — 40–60% cheaper than self-adhesive labels at volume",
              "Excellent moisture resistance for chilled and condensation-prone bottles",
              "Premium transparent no-label appearance demanded by UAE water brands",
              "Speeds from 6,000 to 30,000 BPH matching high-throughput bottling lines",
              "Hot-melt adhesive sets instantly — no drying or curing time required",
              "Supports up to 10-colour gravure and flexographic printing",
              "Compatible with UAE bilingual labeling requirements (Arabic & English)",
              "Environmentally friendly — BOPP film is fully recyclable with PET bottles",
            ].map((adv) => (
              <div key={adv} className="flex items-start gap-3">
                <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span className="text-sm text-muted-foreground">{adv}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Model Range */}
      <section className="px-4 py-12 md:px-6 md:py-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            title="BOPP Labeling Machine Model Range"
            subtitle="Available configurations to match any production scale."
          />
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Model</TableHead>
                  <TableHead>Speed</TableHead>
                  <TableHead>Bottle Range</TableHead>
                  <TableHead>Label Height</TableHead>
                  <TableHead>Glue Type</TableHead>
                  <TableHead>Power</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {modelData.map((m) => (
                  <TableRow key={m.model}>
                    <TableCell className="font-medium">{m.model}</TableCell>
                    <TableCell>{m.speed}</TableCell>
                    <TableCell>{m.bottles}</TableCell>
                    <TableCell>{m.labelHeight}</TableCell>
                    <TableCell>{m.glueType}</TableCell>
                    <TableCell>{m.power}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            All models include PLC touchscreen, auto label-break detection, and
            glue temperature control.{" "}
            <Link
              href="/request-quote/"
              className="text-primary underline"
            >
              Request a quote for pricing
            </Link>{" "}
            based on your production requirements.
          </p>
        </div>
      </section>

      {/* Applications */}
      <section className="bg-muted/30 px-4 py-12 md:px-6 md:py-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeading title="BOPP Labeling Applications" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Drinking Water",
                desc: "The primary application in the UAE. BOPP labels on 200 mL–2 L PET water bottles with transparent or white film, high-gloss finish, and moisture-resistant adhesive.",
              },
              {
                title: "Carbonated Soft Drinks",
                desc: "Full wrap-around BOPP labels for CSD bottles including Coca-Cola, Pepsi, and local brands. Adhesive formulated for pressurised containers.",
              },
              {
                title: "Juices & Dairy Drinks",
                desc: "Opaque and metallic BOPP labels for juice bottles, flavoured milk, and laban containers. Supports high-colour-count designs for premium shelf appeal.",
              },
              {
                title: "Cooking Oil",
                desc: "BOPP labels for 500 mL–5 L cooking oil bottles. Oil-resistant adhesive formulations prevent label lifting in oily production environments.",
              },
              {
                title: "Personal Care",
                desc: "Shampoo, shower gel, and hand wash bottles with clear BOPP labels providing a clean, premium product appearance.",
              },
              {
                title: "Household Chemicals",
                desc: "Cleaning products and detergent bottles with chemical-resistant BOPP film and adhesive suitable for alkaline and acidic environments.",
              },
            ].map((app) => (
              <Card key={app.title}>
                <CardContent className="p-6">
                  <h3 className="font-semibold">{app.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {app.desc}
                  </p>
                </CardContent>
              </Card>
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
              {
                title: "All Labeling Machines",
                desc: "Compare BOPP, shrink, sticker, and tax stamp labeling technologies.",
                href: "/equipment/filling-packaging/labeling-machines/",
              },
              {
                title: "Shrink Labeling Machine",
                desc: "Full-body shrink sleeve labeling for contoured containers.",
                href: "/equipment/filling-packaging/labeling-machines/shrink-labeling/",
              },
              {
                title: "Filling Machines",
                desc: "Liquid filling systems to pair with your labeling line.",
                href: "/equipment/filling-packaging/filling-machines/",
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
      <section className="bg-muted/30 px-4 py-12 md:px-6 md:py-16">
        <div className="mx-auto max-w-3xl">
          <SectionHeading title="Frequently Asked Questions About BOPP Labeling" />
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 pb-12 md:px-6 md:pb-16">
        <div className="mx-auto max-w-7xl">
          <CTAStrip
            title="Need a BOPP Labeling Machine?"
            description="Share your bottle specifications and production speed. We will recommend the right BOPP labeler and provide a detailed quotation."
            whatsappMessage="Hi, I'm interested in a BOPP labeling machine for my bottling line in the UAE."
          />
        </div>
      </section>
    </>
  )
}
