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
  title: "Piston Filling Machine Dubai UAE — Viscous Liquid Filling",
  description:
    "Piston filling machines for sauces, creams, oils, honey, and viscous liquids in Dubai UAE. 2 to 12 heads, ±0.5% accuracy. Request a quote from Pacific Unity.",
  keywords: [
    "piston filling machine",
    "piston filler Dubai",
    "viscous liquid filling machine UAE",
    "sauce filling machine",
    "cream filling machine",
    "honey filling machine Dubai",
    "paste filling machine UAE",
  ],
  alternates: {
    canonical: "https://pacificunity.ae/equipment/filling-packaging/filling-machines/piston-filling-machine/",
  },
}

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "Equipment", href: "/equipment/" },
  { name: "Filling & Packaging", href: "/equipment/filling-packaging/" },
  { name: "Filling Machines", href: "/equipment/filling-packaging/filling-machines/" },
  { name: "Piston Filling Machine", href: "/equipment/filling-packaging/filling-machines/piston-filling-machine/" },
]

const pistonModels = [
  { heads: "2", speed: "500-1,000", volume: "50-1,000 mL", products: "Sauces, creams", drive: "Pneumatic", accuracy: "±0.5%" },
  { heads: "4", speed: "1,000-2,000", volume: "50-1,000 mL", products: "Oils, syrups, tahini", drive: "Pneumatic / Servo", accuracy: "±0.5%" },
  { heads: "6", speed: "1,500-3,000", volume: "100-5,000 mL", products: "Sauces, honey, cosmetics", drive: "Servo", accuracy: "±0.5%" },
  { heads: "8", speed: "2,500-4,500", volume: "100-5,000 mL", products: "Pastes, condiments, gels", drive: "Servo", accuracy: "±0.3%" },
  { heads: "12", speed: "3,500-6,000", volume: "50-2,000 mL", products: "High-volume sauce lines", drive: "Servo", accuracy: "±0.3%" },
]

const faqs = [
  {
    question: "How does a piston filling machine work?",
    answer:
      "A piston filling machine uses a cylinder-and-piston mechanism to draw a precise volume of product from a hopper and then dispense it into a container. During the suction stroke, the piston retracts and product flows into the cylinder through an inlet valve. During the discharge stroke, the piston advances, the inlet valve closes, the outlet valve opens, and the product is pushed into the container. The fill volume is determined by the piston stroke length, which is adjustable — longer strokes draw more product. This positive-displacement principle means accuracy is consistent regardless of product viscosity, making piston fillers the preferred choice for thick and semi-viscous products.",
  },
  {
    question: "What products can a piston filling machine handle?",
    answer:
      "Piston filling machines excel with medium to high-viscosity products that gravity and overflow fillers cannot handle effectively. Common products filled with piston machines in the UAE include: hot sauce, chilli sauce, ketchup, mayonnaise, tahini, hummus, cooking paste, honey, date syrup, molasses, peanut butter, cream cheese, cosmetic creams, hair gel, shampoo, liquid soap, lubricants, and adhesives. The machines can also handle products with particulates — such as salsa with diced vegetables or fruit preserves with fruit pieces — using wide-bore pistons and valves designed not to crush the particles.",
  },
  {
    question: "What accuracy does a piston filling machine achieve?",
    answer:
      "Standard pneumatic piston fillers achieve fill accuracy of ±0.5% to ±1% of the target volume, which is sufficient for most food and beverage applications in the UAE. Servo-driven piston fillers achieve ±0.3% to ±0.5% accuracy, which is required for pharmaceutical products and high-value cosmetics where even small overfills represent significant product waste over a production run. The accuracy is maintained consistently across different viscosities because the piston physically displaces a fixed volume of product — unlike gravity or flow-meter-based systems where viscosity changes can affect fill volume.",
  },
  {
    question: "What is the difference between a pneumatic and a servo-driven piston filler?",
    answer:
      "A pneumatic piston filler uses compressed air to drive the piston. It is simpler, more affordable, and well suited for basic filling applications with moderate speed requirements. A servo-driven piston filler uses an electric servo motor to control the piston, offering more precise control over piston speed, acceleration, and fill volume. Servo-driven machines achieve higher accuracy (±0.3% versus ±0.5%), can store multiple product recipes for quick changeover, and provide smoother operation at higher speeds. For UAE manufacturers filling multiple product types or requiring high accuracy, servo-driven piston fillers offer a better return on investment despite the higher initial cost.",
  },
  {
    question: "Can a piston filling machine handle hot products?",
    answer:
      "Yes, piston filling machines can be configured for hot-fill applications. Standard machines handle products up to 60°C. For products requiring higher temperatures — such as sauces and preserves filled at 80-95°C for pasteurisation — the machine is specified with heat-resistant seals, jacketed hoppers to maintain product temperature, and stainless steel construction rated for elevated temperatures. Pacific Unity supplies hot-fill piston machines for UAE food manufacturers who need to fill sauces, jams, and pickled products at pasteurisation temperatures for extended shelf life without refrigeration.",
  },
  {
    question: "How long does a piston filling machine changeover take?",
    answer:
      "Product changeover time for a piston filler depends on the previous and next product and the number of heads. For similar products (switching between two types of sauce, for example), a CIP wash and changeover typically takes 15-25 minutes for a 4-head machine. Switching between very different products (such as from honey to a thin sauce) may take 20-35 minutes due to a more thorough cleaning cycle. Servo-driven machines with stored recipes reduce changeover time because the fill volume and piston speed settings are recalled instantly. Pacific Unity configures CIP-ready piston fillers for UAE facilities that run multiple products per shift.",
  },
  {
    question: "What container types can a piston filling machine fill?",
    answer:
      "Piston filling machines are highly versatile in terms of container compatibility. They can fill glass bottles, PET bottles, HDPE bottles, jars (glass and plastic), tubs, pails, pouches, tubes, and cans. Fill volumes typically range from 50 mL to 5,000 mL, with some heavy-duty models handling up to 20 litres for industrial products. The machine's container handling system (conveyor, indexing mechanism, and nozzle height adjustment) is configured for your specific container range. Quick-change parts allow switching between different container sizes within the same production shift.",
  },
  {
    question: "How much does a piston filling machine cost in the UAE?",
    answer:
      "Piston filling machine costs in the UAE depend on the number of heads, drive type (pneumatic or servo), fill volume range, and the level of automation. A basic 2-head pneumatic piston filler represents a lower capital investment, while a 12-head servo-driven machine with automatic CIP and recipe storage is a significantly larger investment. The specific product also affects cost — machines for abrasive or corrosive products require special cylinder linings and seal materials. Pacific Unity provides detailed quotations based on your exact requirements. Request a quote for pricing that includes the machine, installation, commissioning, and operator training.",
  },
]

export default function PistonFillingMachinePage() {
  return (
    <>
      <ProductSchema
        name="Piston Filling Machine"
        description="Piston filling machines for sauces, creams, oils, honey, and viscous liquids in Dubai and the UAE. 2 to 12 heads with ±0.5% accuracy."
        image="/images/products/piston-filling-machine.jpg"
        url="/equipment/filling-packaging/filling-machines/piston-filling-machine/"
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
            Piston Filling Machine Dubai UAE — Viscous Liquid Filling
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-muted-foreground">
            Precision piston filling machines for sauces, creams, oils, honey, tahini, and thick
            pastes — engineered for the UAE food, cosmetic, and chemical industries. Available with
            2 to 12 filling heads and fill accuracy of ±0.5%, supplied with installation and a
            1-year warranty.
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
            title="How Piston Filling Works"
            subtitle="Positive displacement for consistent accuracy with thick and viscous products."
          />
          <div className="grid gap-8 md:grid-cols-2">
            <div className="prose max-w-none text-muted-foreground">
              <p>
                A piston filling machine operates on the positive-displacement principle. Each
                filling head contains a precision-machined cylinder and a closely fitting piston.
                During the suction stroke, the piston retracts within the cylinder, creating a
                vacuum that draws product from the hopper through an inlet valve. The volume of
                product drawn in is determined by how far the piston retracts — this stroke length
                is adjustable, allowing operators to set the exact fill volume required.
              </p>
              <p className="mt-4">
                During the discharge stroke, the piston advances, the inlet valve closes, the
                outlet nozzle valve opens, and the product is forced into the waiting container.
                Because the piston physically displaces a fixed volume of product, the fill
                accuracy remains consistent regardless of viscosity changes — a critical advantage
                when filling products like honey (which becomes thinner when warm) or sauces (which
                may vary between batches).
              </p>
              <p className="mt-4">
                For UAE food manufacturers producing sauces, condiments, dairy products, and
                similar viscous goods, piston fillers deliver the reliability and accuracy that
                gravity and overflow fillers simply cannot achieve with thick products. Pacific
                Unity supplies both pneumatic and servo-driven piston fillers, with servo models
                offering superior speed control and stored recipe functionality for multi-product
                operations.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { step: "1", label: "Suction Stroke", desc: "Piston retracts, drawing product into the cylinder from the hopper." },
                { step: "2", label: "Inlet Valve Closes", desc: "The inlet valve seals, trapping the measured volume inside the cylinder." },
                { step: "3", label: "Discharge Stroke", desc: "Piston advances, pushing the product through the outlet nozzle into the container." },
                { step: "4", label: "Cycle Reset", desc: "The container moves forward, a new container positions, and the cycle repeats." },
              ].map((s) => (
                <Card key={s.step}>
                  <CardContent className="p-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm text-primary-foreground font-bold">{s.step}</div>
                    <h3 className="mt-2 text-sm font-semibold">{s.label}</h3>
                    <p className="mt-1 text-xs text-muted-foreground">{s.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Model Table */}
      <section className="bg-muted/30 px-4 py-12 md:px-6 md:py-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            title="Piston Filler Configurations"
            subtitle="Available in pneumatic and servo-driven versions for UAE food and industrial applications."
          />
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Heads</TableHead>
                  <TableHead>Speed (BPH)</TableHead>
                  <TableHead>Fill Range</TableHead>
                  <TableHead>Products</TableHead>
                  <TableHead>Drive Type</TableHead>
                  <TableHead>Accuracy</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {pistonModels.map((row) => (
                  <TableRow key={row.heads}>
                    <TableCell className="font-medium">{row.heads}</TableCell>
                    <TableCell>{row.speed}</TableCell>
                    <TableCell>{row.volume}</TableCell>
                    <TableCell>{row.products}</TableCell>
                    <TableCell>{row.drive}</TableCell>
                    <TableCell>{row.accuracy}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            Speeds based on 500 mL containers. Actual output varies with fill volume, product viscosity,
            and container type.{" "}
            <Link href="/request-quote/" className="text-primary underline">
              Request a quote for pricing
            </Link>{" "}
            based on your production parameters.
          </p>
        </div>
      </section>

      {/* Viscous Product Applications */}
      <section className="px-4 py-12 md:px-6 md:py-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            title="Viscous Product Applications in the UAE"
            subtitle="Piston fillers handle the thick, challenging products that other filling technologies cannot."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Sauces &amp; Condiments", desc: "Hot sauce, chilli paste, ketchup, mayonnaise, barbecue sauce, and salad dressings. The dominant product category for piston fillers in the UAE food manufacturing sector, with many producers based in Dubai Industrial City and KIZAD." },
              { title: "Tahini, Hummus &amp; Dips", desc: "Thick pastes and dips central to Middle Eastern cuisine. Piston fillers handle the high viscosity and particulate content (in the case of chunky hummus) without blockage or inconsistent fills." },
              { title: "Honey &amp; Date Syrup", desc: "High-viscosity natural products with temperature-dependent flow characteristics. Piston fillers maintain consistent accuracy whether the product is warm and runny or cool and thick — critical for UAE honey exporters." },
              { title: "Cooking Oils &amp; Ghee", desc: "Edible oils including sunflower, olive, coconut, and ghee (clarified butter). Piston fillers with anti-drip nozzles prevent spillage and ensure clean container exteriors for retail presentation." },
              { title: "Cosmetics &amp; Personal Care", desc: "Creams, lotions, gels, shampoos, and hair treatments. Servo-driven piston fillers deliver the ±0.3% accuracy required for high-value cosmetic products sold in the UAE retail market." },
              { title: "Industrial Chemicals", desc: "Adhesives, sealants, lubricants, and cleaning gels. Corrosion-resistant cylinder linings and special seal materials handle aggressive chemical products safely." },
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
              "Stainless steel 316L cylinders and pistons — food-grade and corrosion-resistant",
              "Adjustable stroke length for fill volume changes without tooling swap",
              "CIP-ready design for rapid sanitisation between product runs",
              "Anti-drip nozzles prevent product spillage and container contamination",
              "PLC touchscreen control with recipe storage (servo models)",
              "Hopper agitator available for products prone to separation or settling",
              "Wide-bore pistons and valves for products with particulates (up to 15 mm)",
              "Hot-fill configuration available for products up to 95°C",
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
              { title: "Cup Filling Machine", desc: "Fill-and-seal machines for yoghurt, dips, and dairy.", href: "/equipment/filling-packaging/filling-machines/cup-filling-machine/" },
              { title: "Linear Filling Machine", desc: "Gravity and overflow fillers for thin liquids.", href: "/equipment/filling-packaging/filling-machines/linear-filling-machine/" },
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
          <SectionHeading title="Frequently Asked Questions About Piston Filling Machines" />
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 pb-12 md:px-6 md:pb-16">
        <div className="mx-auto max-w-7xl">
          <CTAStrip
            title="Need a Piston Filler for Viscous Products?"
            description="Tell us about your product viscosity, target speed, and container format. We will recommend the right piston filling configuration for your UAE facility."
            whatsappMessage="Hi, I'm interested in a piston filling machine for viscous products in the UAE."
          />
        </div>
      </section>
    </>
  )
}
