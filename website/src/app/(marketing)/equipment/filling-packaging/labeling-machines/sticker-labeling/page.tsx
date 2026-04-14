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
  title: "Sticker Labeling Machine Dubai — Self-Adhesive Label Applicators",
  description:
    "Sticker labeling machines in Dubai UAE — self-adhesive pressure-sensitive label applicators for round, flat, and oval containers. Wrap-around, front-back & top labeling at 2,000–20,000 BPH.",
  keywords: [
    "sticker labeling machine",
    "sticker labeling machine Dubai",
    "self-adhesive labeling machine UAE",
    "pressure sensitive labeling machine",
    "label applicator Dubai",
    "wrap around labeling machine",
    "front back labeling machine",
  ],
  alternates: {
    canonical:
      "https://pacificunity.ae/equipment/filling-packaging/labeling-machines/sticker-labeling/",
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
    name: "Sticker Labeling",
    href: "/equipment/filling-packaging/labeling-machines/sticker-labeling/",
  },
]

const modelData = [
  {
    model: "PU-STK-2K",
    speed: "2,000 BPH",
    config: "Single-side wrap-around",
    containers: "Round (Ø30–120 mm)",
    accuracy: "±0.5 mm",
    power: "1.5 kW",
  },
  {
    model: "PU-STK-5K",
    speed: "5,000 BPH",
    config: "Wrap-around or front-back",
    containers: "Round, flat, oval",
    accuracy: "±0.5 mm",
    power: "2 kW",
  },
  {
    model: "PU-STK-10K",
    speed: "10,000 BPH",
    config: "Dual-head front-back",
    containers: "Round, flat, oval, square",
    accuracy: "±0.5 mm",
    power: "2.5 kW",
  },
  {
    model: "PU-STK-20K",
    speed: "20,000 BPH",
    config: "High-speed wrap-around",
    containers: "Round (Ø40–110 mm)",
    accuracy: "±0.5 mm",
    power: "3 kW",
  },
  {
    model: "PU-STK-TOP",
    speed: "3,000–8,000 BPH",
    config: "Top labeling",
    containers: "Flat tops, boxes, trays",
    accuracy: "±1 mm",
    power: "1.5 kW",
  },
]

const faqs = [
  {
    question: "What is a sticker labeling machine and how does it work?",
    answer:
      "A sticker labeling machine — also called a self-adhesive or pressure-sensitive labeling machine — applies pre-printed labels that have adhesive already coated on their backing liner. The machine peels labels from the liner using a sharp-angled peel plate, and as the label separates from the backing, it is pressed onto the passing container by a rubber roller or brush applicator. An electronic sensor detects each label gap on the liner to ensure precise timing. The container may be rotated on a wrap station (for wrap-around labels) or held stationary while a label is pressed onto a flat surface (for front-back or top labeling). The adhesive bonds on contact without heat — hence the term pressure-sensitive — making sticker labeling one of the simplest and most reliable labeling methods available.",
  },
  {
    question: "What container shapes can sticker labeling machines handle?",
    answer:
      "Sticker labeling machines are the most versatile labeling technology in terms of container shape compatibility. They can apply labels to round bottles and jars (wrap-around configuration), flat and oval containers (front-back dual-label configuration), tapered and conical bottles (with servo-driven speed matching), and flat top surfaces of boxes, trays, and pouches (top-labeling configuration). Unlike BOPP labeling machines that require round containers, sticker labelers can handle virtually any shape. A single sticker labeling machine can often be reconfigured for multiple container types with a changeover time of 10–20 minutes — making them ideal for contract packagers and multi-SKU producers in the UAE.",
  },
  {
    question: "What is the difference between wrap-around and front-back labeling?",
    answer:
      "Wrap-around labeling applies a single label that wraps partially or fully around the circumference of a round container. The label typically covers 70–100% of the container surface in a continuous band. Front-back labeling applies two separate labels — one on the front and one on the back of the container — in a single pass through the machine. This configuration uses two labeling heads positioned opposite each other. Front-back labeling is the standard for food products, sauces, cooking oils, and pharmaceutical items sold in the UAE, where ESMA regulations require bilingual Arabic-English labeling with nutritional information panels that benefit from a dedicated rear label.",
  },
  {
    question: "How accurate is label placement on a sticker labeling machine?",
    answer:
      "Modern sticker labeling machines achieve label placement accuracy of ±0.5 mm — the highest of any labeling technology. This precision is achieved through a combination of servo-driven label dispensing, electronic gap detection sensors, and container orientation control. For pharmaceutical products, where label misalignment can cause regulatory rejection, ±0.5 mm accuracy is essential. Vision inspection systems can be added to verify label position, print quality, and barcode readability after application — rejecting any bottles that fall outside specification. Pacific Unity supplies sticker labeling machines with optional vision inspection integration for pharmaceutical and high-value product applications in the UAE.",
  },
  {
    question: "What is top labeling and when is it used?",
    answer:
      "Top labeling applies a label to the flat upper surface of a container, box, or tray. The label is dispensed from above and pressed down onto the product as it passes on a conveyor. Top labeling is commonly used for ready-meal trays, bakery packaging, butter tubs, fresh produce clamshells, and corrugated shipping cartons. In the UAE food production sector, top labeling is frequently combined with thermal-transfer or inkjet date coding to print batch numbers, production dates, and expiry dates directly onto the label during application. Pacific Unity supplies top labeling machines as standalone units or integrated with front-back labeling systems for three-surface labeling in a single pass.",
  },
  {
    question: "Can sticker labeling machines integrate with serialisation and track-and-trace?",
    answer:
      "Yes, sticker labeling machines are the preferred platform for serialisation and track-and-trace integration in the UAE. The machine can be configured with an inline thermal-transfer overprinter (TTO) or laser coder that prints a unique serial number, 2D data matrix code, or QR code onto each label immediately before application. A downstream vision camera then verifies that the code is present, readable, and matches the expected sequence. This integration is mandatory for pharmaceutical products under UAE Ministry of Health and Prevention (MOHAP) track-and-trace regulations, and is increasingly required for tobacco and selected food products under FTA digital tracking initiatives.",
  },
  {
    question: "How quickly can you change labels on a sticker labeling machine?",
    answer:
      "Label changeover on a sticker labeling machine is the fastest of any labeling technology — typically 10–20 minutes depending on whether only the label roll changes (5–10 minutes) or the container format also changes (15–20 minutes including guide rail adjustment and sensor recalibration). This quick changeover makes sticker labelers ideal for multi-SKU operations common in the UAE food and pharmaceutical sectors, where a single line may run 10–20 different products per week. Some Pacific Unity models feature tool-free guide rail adjustment and stored recipe programs on the PLC touchscreen, allowing operators to recall previous product settings and reduce changeover time further.",
  },
  {
    question: "What is the warranty and lead time for sticker labeling machines in the UAE?",
    answer:
      "All Pacific Unity sticker labeling machines are supplied with a 1-year warranty covering manufacturing defects in mechanical, electrical, and electronic components. The warranty includes remote technical support and on-site service for UAE installations. Wear parts such as peel plates, label sensors, and rubber applicator rollers are excluded as consumable items. Standard delivery lead time to any location in the UAE is 4–6 weeks from confirmed order, including machine procurement, testing, shipping, and customs clearance. On-site installation and commissioning typically takes 2–3 working days for standalone machines and 3–5 days for integrated line installations. Extended warranties and annual maintenance contracts are available.",
  },
]

export default function StickerLabelingPage() {
  return (
    <>
      <ProductSchema
        name="Sticker Labeling Machine — Self-Adhesive Label Applicators"
        description="Self-adhesive sticker labeling machines for round, flat, and oval containers in Dubai UAE. Wrap-around, front-back, and top labeling at 2,000–20,000 BPH."
        image="/images/products/sticker-labeling-machine.jpg"
        url="/equipment/filling-packaging/labeling-machines/sticker-labeling/"
        category="Labeling Equipment"
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
            Sticker Labeling Machine Dubai — Self-Adhesive Label Applicators
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-muted-foreground">
            The most versatile labeling technology for food, pharmaceutical,
            cosmetic, and chemical products. Self-adhesive (pressure-sensitive)
            label applicators for wrap-around, front-back, and top labeling —
            handling round, flat, oval, and square containers at 2,000–20,000
            bottles per hour across the UAE.
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

      {/* How It Works */}
      <section className="px-4 py-12 md:px-6 md:py-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            title="How Pressure-Sensitive Sticker Labeling Works"
            subtitle="A peel-and-apply process that delivers the highest accuracy of any labeling technology."
          />
          <div className="prose max-w-none text-muted-foreground">
            <p>
              Self-adhesive labeling — commonly called sticker labeling — uses
              labels that are pre-printed and die-cut on a continuous backing
              liner (release paper). Each label has a pressure-sensitive adhesive
              already coated on its reverse side, protected by the silicone-coated
              liner until the moment of application. The labeling machine feeds
              the label web at a controlled speed, and a precision peel plate
              bends the liner at a sharp angle — typically 25–30 degrees — which
              causes the rigid label to separate from the flexible liner. As the
              label peels away, it contacts the passing container and the
              pressure-sensitive adhesive bonds instantly on contact.
            </p>
            <p className="mt-4">
              For wrap-around labeling on round containers, the bottle rotates
              against a sponge or rubber roller that presses the label smoothly
              onto the surface. For front-back labeling on flat or oval
              containers, two labeling heads operate simultaneously from opposite
              sides of the conveyor, applying both labels in a single pass. For
              top labeling, the label is dispensed downward onto the flat upper
              surface of a tray, box, or container.
            </p>
            <p className="mt-4">
              In the UAE, sticker labeling is the dominant technology for food
              products, pharmaceuticals, cosmetics, and specialty chemicals. Its
              ability to handle diverse container shapes, deliver ±0.5 mm
              placement accuracy, and support fast changeover between products
              makes it the workhorse of multi-SKU production facilities across
              Dubai, Abu Dhabi, Sharjah, and the Northern Emirates.
            </p>
          </div>
        </div>
      </section>

      {/* Configurations */}
      <section className="bg-muted/30 px-4 py-12 md:px-6 md:py-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            title="Labeling Configurations"
            subtitle="One platform, multiple configurations for every container type."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Wrap-Around",
                desc: "A single label wraps partially or fully around a round container. The standard for beverages, sauces, and personal care products. Covers 70–100% of the circumference.",
              },
              {
                title: "Front & Back",
                desc: "Two labels applied simultaneously — one on the front, one on the back. Essential for UAE bilingual labeling compliance with Arabic product information on the rear panel.",
              },
              {
                title: "Top Labeling",
                desc: "Label applied to the flat upper surface of trays, boxes, and clamshell containers. Common for ready meals, bakery products, and fresh produce in the UAE market.",
              },
              {
                title: "Top & Bottom",
                desc: "Dual labeling on top and bottom surfaces. Used for premium food trays, promotional packaging, and products requiring compliance labels on the underside.",
              },
              {
                title: "Corner Wrap / Tamper Seal",
                desc: "L-shaped labels that wrap around a box corner or seal a lid to a base, providing tamper evidence for pharmaceutical and premium food packaging.",
              },
              {
                title: "Vial & Syringe Labeling",
                desc: "Micro-precision labeling for small cylindrical containers. Pharmaceutical-grade accuracy for vials (Ø10–30 mm) and pre-filled syringes with serialisation integration.",
              },
            ].map((cfg) => (
              <Card key={cfg.title}>
                <CardContent className="p-6">
                  <h3 className="font-semibold">{cfg.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {cfg.desc}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="px-4 py-12 md:px-6 md:py-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeading title="Advantages of Sticker Labeling" />
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Highest placement accuracy of any labeling technology — ±0.5 mm",
              "Handles round, flat, oval, square, and irregular container shapes",
              "Fastest changeover time — 10–20 minutes between products",
              "No heat, glue tanks, or solvents — clean, simple operation",
              "Ideal platform for serialisation and track-and-trace integration",
              "Low energy consumption (1.5–3 kW) compared to BOPP or shrink systems",
              "Supports paper, polypropylene, polyester, and clear-on-clear label materials",
              "Optional vision inspection for pharmaceutical-grade quality assurance",
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
      <section className="bg-muted/30 px-4 py-12 md:px-6 md:py-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            title="Sticker Labeling Machine Model Range"
            subtitle="From entry-level single-head to high-speed dual-head configurations."
          />
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Model</TableHead>
                  <TableHead>Speed</TableHead>
                  <TableHead>Configuration</TableHead>
                  <TableHead>Containers</TableHead>
                  <TableHead>Accuracy</TableHead>
                  <TableHead>Power</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {modelData.map((m) => (
                  <TableRow key={m.model}>
                    <TableCell className="font-medium">{m.model}</TableCell>
                    <TableCell>{m.speed}</TableCell>
                    <TableCell>{m.config}</TableCell>
                    <TableCell>{m.containers}</TableCell>
                    <TableCell>{m.accuracy}</TableCell>
                    <TableCell>{m.power}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            All models include PLC touchscreen, automatic label detection, and
            missing-label rejection.{" "}
            <Link
              href="/request-quote/"
              className="text-primary underline"
            >
              Request a quote for pricing
            </Link>{" "}
            tailored to your container format and production speed.
          </p>
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
                desc: "Compare BOPP, shrink, sticker, and tax stamp technologies.",
                href: "/equipment/filling-packaging/labeling-machines/",
              },
              {
                title: "Tax Stamp Applicator",
                desc: "Excise and revenue stamp machines for regulated products.",
                href: "/equipment/filling-packaging/labeling-machines/tax-stamp-applicator/",
              },
              {
                title: "Filling Machines",
                desc: "Liquid, paste, and powder filling systems for your line.",
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
          <SectionHeading title="Frequently Asked Questions About Sticker Labeling" />
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 pb-12 md:px-6 md:pb-16">
        <div className="mx-auto max-w-7xl">
          <CTAStrip
            title="Need a Sticker Labeling Machine?"
            description="Share your container dimensions, label format, and production speed. We will recommend the right configuration and provide a detailed quotation."
            whatsappMessage="Hi, I'm interested in a sticker labeling machine for my production line in the UAE."
          />
        </div>
      </section>
    </>
  )
}
