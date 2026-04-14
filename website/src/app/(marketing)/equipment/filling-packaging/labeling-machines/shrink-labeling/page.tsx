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
    "Shrink Labeling Machine Dubai UAE — Sleeve Applicators & Shrink Tunnels",
  description:
    "Shrink sleeve labeling machines in Dubai UAE — PVC, PET-G & OPS sleeve applicators with steam and hot-air shrink tunnels. Full-body labeling at 6,000–24,000 BPH. Request a quote.",
  keywords: [
    "shrink labeling machine",
    "shrink sleeve labeling machine Dubai",
    "sleeve applicator UAE",
    "shrink tunnel Dubai",
    "shrink sleeve labeler",
    "full body labeling machine",
    "tamper evident labeling UAE",
  ],
  alternates: {
    canonical:
      "https://pacificunity.ae/equipment/filling-packaging/labeling-machines/shrink-labeling/",
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
    name: "Shrink Labeling",
    href: "/equipment/filling-packaging/labeling-machines/shrink-labeling/",
  },
]

const modelData = [
  {
    model: "PU-SHR-6K",
    speed: "6,000 BPH",
    sleeveType: "PVC / PET-G / OPS",
    containerDia: "25–120 mm",
    tunnel: "Steam (standard)",
    power: "18 kW",
  },
  {
    model: "PU-SHR-12K",
    speed: "12,000 BPH",
    sleeveType: "PVC / PET-G / OPS",
    containerDia: "25–130 mm",
    tunnel: "Steam (standard)",
    power: "28 kW",
  },
  {
    model: "PU-SHR-18K",
    speed: "18,000 BPH",
    sleeveType: "PET-G / OPS",
    containerDia: "30–130 mm",
    tunnel: "Steam (high-capacity)",
    power: "36 kW",
  },
  {
    model: "PU-SHR-24K",
    speed: "24,000 BPH",
    sleeveType: "PET-G / OPS",
    containerDia: "30–120 mm",
    tunnel: "Steam (dual-zone)",
    power: "45 kW",
  },
]

const faqs = [
  {
    question:
      "What is a shrink sleeve labeling machine and how does it work?",
    answer:
      "A shrink sleeve labeling machine applies tubular labels made from heat-shrinkable film (PVC, PET-G, or OPS) around containers. The process involves two stages: first, the sleeve applicator positions a pre-printed tubular sleeve over the container — the sleeve diameter is slightly larger than the widest part of the bottle, so it slides over without contact. Second, the container passes through a shrink tunnel where controlled heat (steam or hot air at 85–100°C) causes the sleeve to shrink tightly around the container, conforming to every contour, curve, and indentation. The result is a seamless, 360-degree label that covers the entire body of the container from cap to base.",
  },
  {
    question:
      "What is the difference between steam shrink tunnels and hot-air shrink tunnels?",
    answer:
      "Steam shrink tunnels use saturated steam at 85–100°C as the heating medium. They provide the most uniform heat distribution, resulting in consistent and wrinkle-free sleeve shrinkage even on complex container shapes. Steam tunnels are the industry standard for high-speed lines (above 8,000 BPH) and are preferred for PET-G and OPS sleeves. Hot-air shrink tunnels use heated air circulated by fans. They are simpler to install (no steam generator or water supply required), have lower capital cost, and suit lower-speed operations. However, they can produce less uniform results on complex shapes. In the UAE, steam tunnels are the dominant choice for beverage and food production due to their superior shrink quality and consistency.",
  },
  {
    question:
      "What materials are used for shrink sleeves in the UAE market?",
    answer:
      "Three main materials are used for shrink sleeves in the UAE. PVC (Polyvinyl Chloride) is the most established and cheapest option, offering shrinkage rates of 60–70% and good print quality. However, PVC is less environmentally friendly and is being phased out by some global brands. PET-G (Glycol-modified Polyethylene Terephthalate) is the fastest-growing material, offering 70–78% shrinkage, excellent clarity, and full compatibility with PET bottle recycling streams — making it the preferred choice for UAE beverage companies with sustainability targets. OPS (Oriented Polystyrene) offers the highest shrinkage rate (up to 80%) with lightweight properties, but is more brittle and requires careful handling. Pacific Unity can specify the optimal material based on your container shape and sustainability goals.",
  },
  {
    question: "What containers can be labeled with shrink sleeves?",
    answer:
      "Shrink sleeve labeling is the most versatile labeling technology in terms of container shape compatibility. Because the sleeve conforms to the container shape during the heat-shrink process rather than being adhered flat against the surface, it can accommodate round, square, oval, hexagonal, contoured, and irregularly shaped containers. This makes shrink sleeves ideal for uniquely shaped bottles designed for brand differentiation, multi-pack cups (yoghurt, dairy), and tapered or necked containers that cannot be wrap-labeled. Container diameters typically range from 25 mm to 130 mm, and sleeve lengths can cover from a partial body band up to the full container height from cap to base.",
  },
  {
    question: "How does shrink sleeve labeling provide tamper evidence?",
    answer:
      "Shrink sleeves can incorporate a perforated tamper-evident band that extends from the label body over the cap or closure. When the consumer opens the product, the perforated section tears away from the main label, providing a clear visual indication that the product has been opened. This tamper-evident function is particularly important in the UAE for dairy products, beverages, pharmaceuticals, and premium food items where product integrity is a consumer concern. The perforation is pre-scored during the sleeve printing process and activates during the heat-shrink stage. Tamper-evident shrink bands can also be applied as standalone bands (without full-body labels) using the same shrink sleeve equipment.",
  },
  {
    question:
      "What production speed can a shrink sleeve labeling machine achieve?",
    answer:
      "Pacific Unity supplies shrink sleeve labeling machines in speed ranges from 6,000 to 24,000 bottles per hour. The 6,000 BPH entry-level models suit small to mid-size food and dairy producers across the UAE. The 12,000 BPH range is the most popular for beverage producers in Dubai, Abu Dhabi, and Sharjah. High-speed 18,000–24,000 BPH models serve large-scale operations and multinational FMCG companies. Actual throughput depends on container size, sleeve length, and the shrink tunnel configuration — taller sleeves and complex shapes may require a slightly slower line speed for optimal shrink quality. The shrink tunnel capacity must match the applicator speed; Pacific Unity sizes the complete system as a matched pair.",
  },
  {
    question:
      "How much space does a shrink sleeve labeling system require?",
    answer:
      "A complete shrink sleeve labeling system includes the sleeve applicator, a connecting conveyor, and the shrink tunnel — plus a steam generator if using a steam tunnel. Typical footprints for the applicator plus tunnel range from approximately 4 × 1.5 metres for a 6,000 BPH system to 8 × 2 metres for a 24,000 BPH system. The steam generator (if external) requires an additional 1 × 1 metre space. Adequate ventilation is required around the shrink tunnel to manage heat and moisture — Pacific Unity recommends a minimum clearance of 1 metre on all sides. In UAE industrial zones such as Jebel Ali, KIZAD, and RAK Industrial City, these footprint requirements are typically easy to accommodate within existing production halls.",
  },
  {
    question:
      "What is the warranty and after-sales support for shrink labeling machines?",
    answer:
      "All Pacific Unity shrink sleeve labeling machines come with a standard 1-year warranty covering manufacturing defects in mechanical, electrical, and pneumatic components. The warranty includes remote technical support via video call for troubleshooting, on-site service calls for UAE-based installations, and free replacement of defective parts. Wear items such as cutting blades, silicone rollers, and conveyor belts are excluded as they are consumable components with defined replacement intervals. Extended warranties of 2 or 3 years are available. After the warranty period, Pacific Unity continues to supply spare parts and offers annual maintenance contracts covering preventive maintenance visits, emergency call-outs, and priority parts supply. All spare parts are stocked in our UAE facility.",
  },
]

export default function ShrinkLabelingPage() {
  return (
    <>
      <ProductSchema
        name="Shrink Sleeve Labeling Machine — Sleeve Applicators & Shrink Tunnels"
        description="Shrink sleeve labeling machines for full-body container decoration in Dubai UAE. PVC, PET-G, and OPS sleeves at 6,000–24,000 BPH."
        image="/images/products/shrink-labeling-machine.jpg"
        url="/equipment/filling-packaging/labeling-machines/shrink-labeling/"
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
            Shrink Labeling Machine Dubai UAE — Sleeve Applicators &amp; Shrink
            Tunnels
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-muted-foreground">
            Full-body shrink sleeve labeling machines for 360-degree container
            decoration. PVC, PET-G, and OPS sleeve applicators paired with steam
            and hot-air shrink tunnels — delivering stunning shelf impact and
            built-in tamper evidence at 6,000–24,000 bottles per hour across the
            UAE.
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
            title="How Shrink Sleeve Labeling Works"
            subtitle="A two-stage process: sleeve application followed by heat-shrink forming."
          />
          <div className="prose max-w-none text-muted-foreground">
            <p>
              Shrink sleeve labeling is fundamentally different from other
              labeling technologies. Instead of adhering a flat label to the
              container surface, a shrink sleeve machine places a pre-printed
              tubular film over the container and then uses heat to shrink the
              film tightly around it. This process creates a seamless,
              360-degree label that conforms to every curve, shoulder, neck,
              and base contour — something no adhesive-based labeling technology
              can achieve.
            </p>
            <p className="mt-4">
              The sleeve applicator feeds pre-formed tubular film from a roll,
              opens it using a mandrel or forming plates, cuts it to the
              programmed length, and drops it over the container passing beneath
              on a conveyor. The sleeve is cut slightly taller and wider than
              the container to allow gravity and light air pressure to position
              it correctly. The container then enters a shrink tunnel — either
              a steam tunnel (using saturated steam at 85–100°C) or a hot-air
              tunnel — where the sleeve shrinks by 60–80% in diameter to grip
              the container surface.
            </p>
            <p className="mt-4">
              In the UAE market, shrink sleeve labeling is used extensively for
              dairy products, premium beverages, household chemicals, and any
              product where full-body decoration or tamper evidence is required.
              Major retailers in Dubai, Abu Dhabi, and across the Emirates
              increasingly favour shrink-sleeved products for their premium shelf
              appearance and anti-counterfeiting benefits.
            </p>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="bg-muted/30 px-4 py-12 md:px-6 md:py-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeading title="Advantages of Shrink Sleeve Labeling" />
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "360-degree full-body decoration — maximum shelf impact and branding space",
              "Conforms to any container shape: round, square, contoured, tapered",
              "Built-in tamper-evident seal without additional packaging components",
              "Moisture, abrasion, and condensation resistant — ideal for UAE climate",
              "No adhesive residue on the container — cleaner recycling process",
              "Supports complex multi-colour print designs with photographic quality",
              "Conceals container imperfections and seam lines",
              "Compatible with PET, HDPE, glass, and aluminium containers",
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
            title="Shrink Labeling Machine Model Range"
            subtitle="Complete sleeve applicator and shrink tunnel systems."
          />
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Model</TableHead>
                  <TableHead>Speed</TableHead>
                  <TableHead>Sleeve Material</TableHead>
                  <TableHead>Container Dia.</TableHead>
                  <TableHead>Tunnel Type</TableHead>
                  <TableHead>Total Power</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {modelData.map((m) => (
                  <TableRow key={m.model}>
                    <TableCell className="font-medium">{m.model}</TableCell>
                    <TableCell>{m.speed}</TableCell>
                    <TableCell>{m.sleeveType}</TableCell>
                    <TableCell>{m.containerDia}</TableCell>
                    <TableCell>{m.tunnel}</TableCell>
                    <TableCell>{m.power}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            Power includes applicator and steam tunnel. Steam generator may
            require additional utilities.{" "}
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
          <SectionHeading title="Shrink Sleeve Applications" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Dairy & Yoghurt",
                desc: "Full-body sleeves for yoghurt cups, laban bottles, and flavoured milk containers. Tamper-evident bands protect product integrity in the UAE retail cold chain.",
              },
              {
                title: "Premium Beverages",
                desc: "High-impact sleeve labels for energy drinks, premium water, RTD cocktails, and health drinks. Metallic and holographic finishes for brand differentiation.",
              },
              {
                title: "Household & Personal Care",
                desc: "Contoured cleaning product bottles, shampoo containers, and air fresheners with complex shapes that require shrink sleeve decoration.",
              },
              {
                title: "Tamper-Evident Bands",
                desc: "Standalone shrink bands for cap sealing on sauces, condiments, and pharmaceutical bottles — providing visual tamper evidence without full-body labeling.",
              },
              {
                title: "Promotional Packs",
                desc: "Multi-pack shrink sleeves bundling 2–6 units together for promotional campaigns in UAE supermarkets and hypermarkets such as Carrefour and Lulu.",
              },
              {
                title: "Contoured Bottles",
                desc: "Uniquely shaped spirits, perfume, and specialty food bottles where flat adhesive labels cannot follow the container profile.",
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
                desc: "Compare BOPP, shrink, sticker, and tax stamp technologies.",
                href: "/equipment/filling-packaging/labeling-machines/",
              },
              {
                title: "BOPP Labeling Machine",
                desc: "Hot-melt glue labeling for high-speed beverage lines.",
                href: "/equipment/filling-packaging/labeling-machines/bopp-labeling/",
              },
              {
                title: "Sticker Labeling Machine",
                desc: "Self-adhesive labeling for food and pharmaceutical products.",
                href: "/equipment/filling-packaging/labeling-machines/sticker-labeling/",
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
          <SectionHeading title="Frequently Asked Questions About Shrink Sleeve Labeling" />
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 pb-12 md:px-6 md:pb-16">
        <div className="mx-auto max-w-7xl">
          <CTAStrip
            title="Need a Shrink Sleeve Labeling System?"
            description="Share your container details and production speed. We will specify the right applicator and shrink tunnel combination for your line."
            whatsappMessage="Hi, I'm interested in a shrink sleeve labeling machine for my production line in the UAE."
          />
        </div>
      </section>
    </>
  )
}
