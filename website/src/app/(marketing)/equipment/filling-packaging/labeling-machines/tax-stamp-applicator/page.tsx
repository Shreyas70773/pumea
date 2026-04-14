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
    "Tax Stamp Applicator Dubai UAE — Excise & Revenue Stamp Machines",
  description:
    "Tax stamp applicator machines in Dubai UAE for excise and revenue stamps on tobacco, spirits, and energy drinks. FTA-compliant stamp application at 4,000–18,000 units per hour. Request a quote.",
  keywords: [
    "tax stamp applicator",
    "tax stamp applicator Dubai",
    "excise stamp machine UAE",
    "revenue stamp applicator",
    "tobacco stamp applicator",
    "FTA tax stamp machine",
    "excise tax stamp UAE",
  ],
  alternates: {
    canonical:
      "https://pacificunity.ae/equipment/filling-packaging/labeling-machines/tax-stamp-applicator/",
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
    name: "Tax Stamp Applicator",
    href: "/equipment/filling-packaging/labeling-machines/tax-stamp-applicator/",
  },
]

const modelData = [
  {
    model: "PU-TSA-4K",
    speed: "4,000 UPH",
    stampType: "T-stamp (bridge seal)",
    products: "Spirit bottles, wine bottles",
    inspection: "Camera verification",
    power: "1 kW",
  },
  {
    model: "PU-TSA-8K",
    speed: "8,000 UPH",
    stampType: "T-stamp / top seal",
    products: "Spirit bottles, beer bottles",
    inspection: "Camera + rejection",
    power: "1.5 kW",
  },
  {
    model: "PU-TSA-12K",
    speed: "12,000 UPH",
    stampType: "Pack stamp (top / side)",
    products: "Cigarette packs, shisha tins",
    inspection: "Camera + rejection",
    power: "1.5 kW",
  },
  {
    model: "PU-TSA-18K",
    speed: "18,000 UPH",
    stampType: "Pack stamp (multi-position)",
    products: "High-speed cigarette lines",
    inspection: "Dual camera + PLC rejection",
    power: "2 kW",
  },
]

const faqs = [
  {
    question: "What is a tax stamp applicator and why is it required in the UAE?",
    answer:
      "A tax stamp applicator is a machine that automatically applies government-issued excise or revenue stamps to products subject to excise tax. In the UAE, the Federal Tax Authority (FTA) introduced excise tax in October 2017 under Federal Decree-Law No. 7 of 2017, targeting tobacco products (100% tax), carbonated drinks (50%), energy drinks (100%), and sweetened drinks (50%). The FTA requires physical digital tax stamps (DTS) to be affixed to each unit of tobacco products and — through the expanding Digital Tax Stamp scheme — increasingly to other excise goods. These stamps contain a unique encrypted code that enables track-and-trace from manufacturer to retailer, combating smuggling and counterfeiting. A tax stamp applicator integrates into your packaging line to apply these stamps accurately, consistently, and at production speed.",
  },
  {
    question: "What products require tax stamps in the UAE?",
    answer:
      "Under current UAE FTA regulations, digital tax stamps are mandatory for all tobacco products sold in the UAE, including cigarettes, cigars, cigarillos, roll-your-own tobacco, shisha (waterpipe) tobacco, and heated tobacco products. The stamp must be applied in a way that opening the package destroys the stamp, providing tamper evidence. The UAE has been expanding the Digital Tax Stamp programme, with spirits and alcoholic beverages increasingly brought under stamp requirements in certain Emirates. Energy drinks and sweetened beverages are subject to excise tax but currently use different tracking methods. Manufacturers, importers, and licensed warehouses in the UAE that handle these products must have tax stamp applicator equipment on their production or packing lines.",
  },
  {
    question: "How does a tax stamp applicator work?",
    answer:
      "A tax stamp applicator feeds individual stamps from a reel or magazine, applies adhesive (if the stamps are not pre-glued), positions the stamp on the product at the programmed location, and presses it firmly to create a secure bond. For spirit bottles, the stamp is typically applied as a T-stamp (bridge seal) across the cap and bottle neck so that opening the bottle breaks the stamp. For cigarette packs, the stamp is applied to the top, side, or overwrap in a position specified by the FTA. After application, a vision camera inspects each stamp to verify correct placement, readability of the digital code, and adhesion quality. Products that fail inspection are automatically rejected from the line. The entire process runs at 4,000–18,000 units per hour depending on the product type.",
  },
  {
    question: "What is the UAE Digital Tax Stamp (DTS) programme?",
    answer:
      "The UAE Digital Tax Stamp (DTS) programme is a government initiative managed by the Federal Tax Authority in partnership with technology providers. Each digital tax stamp contains a unique encrypted identifier — typically a 2D data matrix code — that is linked to a central FTA database. The stamp records the product type, manufacturer, production date, and destination market. At each stage of the supply chain — from factory to distributor to retailer — the stamp can be scanned to verify authenticity and track movement. The system enables the FTA to monitor real-time stock levels, detect diverted or smuggled goods, and ensure full excise tax collection. Manufacturers must integrate their stamp applicator with the FTA reporting system, transmitting applied stamp codes to the central database after each production run.",
  },
  {
    question: "Can a tax stamp applicator be integrated into an existing packaging line?",
    answer:
      "Yes, tax stamp applicators are designed to integrate into existing packaging lines with minimal modification. For spirit and beverage bottles, the applicator is typically installed after the labeling and capping stations but before the case packer. For cigarette packs, the applicator is integrated after the overwrapping machine. Pacific Unity supplies tax stamp applicators with adjustable mounting frames, conveyor speed synchronisation, and PLC communication protocols (Modbus, Ethernet/IP, or ProfiNet) that connect to your existing line control system. Integration typically requires 3–5 days for mechanical installation, electrical connection, camera calibration, and stamp application accuracy verification. We handle the full integration process at your UAE facility.",
  },
  {
    question: "What happens if the tax stamp applicator places a stamp incorrectly?",
    answer:
      "Modern tax stamp applicators include inline vision inspection that photographs every stamp immediately after application. The inspection system checks for stamp presence, correct position (within ±0.5 mm tolerance), stamp orientation, code readability (by decoding the 2D data matrix or QR code), and adhesion integrity. If any parameter fails, the system triggers an automatic rejection mechanism — typically a pneumatic pusher or air blast that diverts the non-conforming product into a rejection bin. The rejected product and its stamp code are logged in the system. This reject data is important for FTA audit compliance, as every stamp must be accounted for: either applied to a product, rejected and recorded, or returned as unused. Pacific Unity configures the vision parameters during commissioning to match your specific stamp and product requirements.",
  },
  {
    question: "How much does a tax stamp applicator cost in the UAE?",
    answer:
      "Tax stamp applicator costs depend on the speed, product type, and level of inspection integration. Entry-level applicators for spirit bottle T-stamping at 4,000 units per hour start from approximately AED 120,000. Mid-range systems for cigarette pack stamping at 8,000–12,000 units per hour range from AED 180,000 to AED 350,000. High-speed systems for major tobacco manufacturers at 18,000 units per hour can exceed AED 500,000. These prices typically include the applicator unit, vision camera, rejection system, and basic PLC integration. Additional costs may apply for FTA database connectivity software, custom mounting frames, and conveyor modifications. Request a quote for pricing specific to your product format, production speed, and integration requirements.",
  },
  {
    question: "What support does Pacific Unity provide for tax stamp applicator installations in the UAE?",
    answer:
      "Pacific Unity provides complete project support for tax stamp applicator installations across the UAE. This includes initial consultation to assess your production line and stamp requirements, equipment specification and procurement (4–6 week lead time for standard models), mechanical installation and conveyor integration at your facility, electrical connection and PLC integration with your existing line, vision camera calibration and stamp position programming, operator training on machine operation, stamp loading, and fault recovery, FTA database connectivity testing (in collaboration with your IT team and the FTA technology partner), and commissioning with documented qualification reports. Post-installation, we provide 1-year warranty, spare parts supply from our UAE facility, and optional annual maintenance contracts. Our engineers have experience with FTA stamp requirements and the specific formats mandated for tobacco and spirits products in the UAE market.",
  },
]

export default function TaxStampApplicatorPage() {
  return (
    <>
      <ProductSchema
        name="Tax Stamp Applicator — Excise & Revenue Stamp Machines"
        description="Tax stamp applicator machines for excise and revenue stamps in Dubai UAE. FTA-compliant application for tobacco, spirits, and energy drinks at 4,000–18,000 UPH."
        image="/images/products/tax-stamp-applicator.jpg"
        url="/equipment/filling-packaging/labeling-machines/tax-stamp-applicator/"
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
            Tax Stamp Applicator Dubai UAE — Excise &amp; Revenue Stamp
            Machines
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-muted-foreground">
            Automatic tax stamp applicators for UAE Federal Tax Authority
            compliance. Apply excise and revenue stamps to tobacco products,
            spirits, and energy drinks at 4,000–18,000 units per hour — with
            integrated vision inspection and automatic rejection for guaranteed
            stamp accuracy.
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

      {/* What Are Tax Stamps */}
      <section className="px-4 py-12 md:px-6 md:py-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            title="What Are Tax Stamps and Why Are They Required?"
            subtitle="Government-mandated stamps for excise tax compliance and supply chain integrity."
          />
          <div className="prose max-w-none text-muted-foreground">
            <p>
              Tax stamps — also known as excise stamps, revenue stamps, or
              fiscal marks — are government-issued security labels applied to
              products subject to excise tax. Each stamp carries a unique
              encrypted digital code that links the individual product unit to
              a central government database, enabling track-and-trace from the
              point of manufacture to the point of sale. Tax stamps serve three
              critical functions: they prove that excise tax has been paid on the
              product, they provide a tamper-evident seal that indicates whether
              the package has been opened, and they enable authorities to detect
              smuggled, counterfeit, or diverted goods.
            </p>
            <p className="mt-4">
              In the United Arab Emirates, the Federal Tax Authority (FTA)
              introduced excise tax under Federal Decree-Law No. 7 of 2017. The
              UAE&apos;s Digital Tax Stamp (DTS) programme requires physical
              stamps to be applied to all tobacco products sold in the country,
              with the programme progressively expanding to other excise goods.
              Tobacco products carry a 100% excise tax rate, while carbonated
              drinks are taxed at 50% and energy drinks at 100%. The DTS stamps
              are produced to the highest security standards, incorporating
              layered authentication features that are virtually impossible to
              counterfeit.
            </p>
            <p className="mt-4">
              For manufacturers and importers operating in the UAE, having a
              reliable, high-speed tax stamp applicator on the production or
              packing line is not optional — it is a legal requirement.
              Non-compliance can result in product seizure, substantial fines,
              and suspension of FTA registration. Pacific Unity supplies tax
              stamp applicators configured specifically for the UAE DTS
              programme, with full integration support including FTA database
              connectivity.
            </p>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="bg-muted/30 px-4 py-12 md:px-6 md:py-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            title="Tax Stamp Applications"
            subtitle="Products and industries requiring tax stamp applicators in the UAE."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Cigarettes & Tobacco",
                desc: "Digital tax stamps on cigarette packs, cigarillo boxes, roll-your-own tobacco pouches, and heated tobacco cartridge packs. Stamp placement per FTA specification — typically top-of-pack with tear-line integration.",
              },
              {
                title: "Shisha & Waterpipe Tobacco",
                desc: "Stamps on shisha tobacco tins, jars, and cartons. The stamp must be applied so that opening the container visibly damages or destroys the stamp, providing tamper evidence as required by UAE FTA regulations.",
              },
              {
                title: "Spirits & Alcoholic Beverages",
                desc: "T-stamp (bridge seal) application across bottle caps and necks. Opening the bottle breaks the stamp, proving the product has not been tampered with. Applicable to whisky, vodka, gin, and other spirits sold in the UAE.",
              },
              {
                title: "Energy Drinks",
                desc: "Stamp and tracking systems for energy drink cans and bottles subject to 100% excise tax in the UAE. Integration with can-line and PET-line speeds.",
              },
              {
                title: "Sweetened Beverages",
                desc: "Products with added sugar or sweeteners subject to 50% excise tax. Digital tracking integration for compliance with the expanding FTA excise programme.",
              },
              {
                title: "Future Expansion",
                desc: "The UAE FTA has indicated plans to expand the DTS programme to additional product categories. Pacific Unity's modular applicators are designed for easy reconfiguration as stamp requirements evolve.",
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

      {/* Key Features */}
      <section className="px-4 py-12 md:px-6 md:py-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeading title="Key Features of Pacific Unity Tax Stamp Applicators" />
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Placement accuracy of ±0.5 mm for FTA-compliant stamp positioning",
              "Integrated vision camera verifying stamp presence, position, and code readability",
              "Automatic rejection of non-conforming products with reject logging",
              "Speeds from 4,000 to 18,000 units per hour covering all production scales",
              "T-stamp, top-seal, side-seal, and bridge-seal configurations",
              "PLC integration with existing line via Modbus, Ethernet/IP, or ProfiNet",
              "FTA database connectivity support for digital stamp code reporting",
              "Compact footprint for retrofit into existing production lines in UAE factories",
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
      <section className="bg-muted/30 px-4 py-12 md:px-6 md:py-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            title="Tax Stamp Applicator Model Range"
            subtitle="Configurations for spirits, tobacco, and high-speed production lines."
          />
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Model</TableHead>
                  <TableHead>Speed</TableHead>
                  <TableHead>Stamp Type</TableHead>
                  <TableHead>Products</TableHead>
                  <TableHead>Inspection</TableHead>
                  <TableHead>Power</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {modelData.map((m) => (
                  <TableRow key={m.model}>
                    <TableCell className="font-medium">{m.model}</TableCell>
                    <TableCell>{m.speed}</TableCell>
                    <TableCell>{m.stampType}</TableCell>
                    <TableCell>{m.products}</TableCell>
                    <TableCell>{m.inspection}</TableCell>
                    <TableCell>{m.power}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            UPH = units per hour. Actual speed depends on product dimensions and
            stamp format.{" "}
            <Link
              href="/request-quote/"
              className="text-primary underline"
            >
              Request a quote for pricing
            </Link>{" "}
            based on your product and FTA stamp requirements.
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
                title: "Sticker Labeling Machine",
                desc: "Self-adhesive labeling with serialisation integration.",
                href: "/equipment/filling-packaging/labeling-machines/sticker-labeling/",
              },
              {
                title: "Shrink Labeling Machine",
                desc: "Full-body sleeve labeling for tamper evidence.",
                href: "/equipment/filling-packaging/labeling-machines/shrink-labeling/",
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
          <SectionHeading title="Frequently Asked Questions About Tax Stamp Applicators" />
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 pb-12 md:px-6 md:pb-16">
        <div className="mx-auto max-w-7xl">
          <CTAStrip
            title="Need a Tax Stamp Applicator for UAE Compliance?"
            description="Tell us about your product, production speed, and FTA stamp requirements. We will specify the right applicator system and handle the complete installation."
            whatsappMessage="Hi, I need a tax stamp applicator for FTA compliance in the UAE."
          />
        </div>
      </section>
    </>
  )
}
