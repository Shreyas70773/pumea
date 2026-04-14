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
import { Badge } from "@/components/ui/badge"
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
    "SFSP Water Drop Hammer Mill Dubai — High-Efficiency Feed Grinding",
  description:
    "SFSP water drop hammer mills for high-efficiency feed grinding in Dubai UAE. 15–25% lower energy consumption, 2–20 TPH capacity range. Ideal for commercial poultry, livestock, and aquaculture feed plants. Request a quote from Pacific Unity MEA.",
  keywords: [
    "SFSP hammer mill",
    "water drop hammer mill",
    "SFSP water drop hammer mill Dubai",
    "feed grinding machine UAE",
    "high efficiency hammer mill",
    "SFSP feed grinder",
  ],
  alternates: {
    canonical:
      "https://pacificunity.ae/equipment/feed-processing/crushers/hammer-mill/sfsp-water-drop/",
  },
}

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "Equipment", href: "/equipment/" },
  { name: "Feed Processing", href: "/equipment/feed-processing/" },
  { name: "Crushers", href: "/equipment/feed-processing/crushers/" },
  {
    name: "Hammer Mill",
    href: "/equipment/feed-processing/crushers/hammer-mill/",
  },
  {
    name: "SFSP Water Drop",
    href: "/equipment/feed-processing/crushers/hammer-mill/sfsp-water-drop/",
  },
]

const sfspModels = [
  {
    model: "PU-SFSP-56×40",
    motorPower: "30 kW",
    capacity: "2–4 TPH",
    rotorSpeed: "2,960 RPM",
    hammers: 32,
    screenArea: "0.20 m²",
    weight: "~850 kg",
  },
  {
    model: "PU-SFSP-66×60",
    motorPower: "55 kW",
    capacity: "5–8 TPH",
    rotorSpeed: "2,960 RPM",
    hammers: 48,
    screenArea: "0.38 m²",
    weight: "~1,400 kg",
  },
  {
    model: "PU-SFSP-80×80",
    motorPower: "90 kW",
    capacity: "8–15 TPH",
    rotorSpeed: "1,480 RPM",
    hammers: 64,
    screenArea: "0.58 m²",
    weight: "~2,200 kg",
  },
  {
    model: "PU-SFSP-110×100",
    motorPower: "132 kW",
    capacity: "12–20 TPH",
    rotorSpeed: "1,480 RPM",
    hammers: 80,
    screenArea: "0.82 m²",
    weight: "~3,500 kg",
  },
]

const advantages = [
  {
    title: "15–25% Lower Energy Consumption",
    description:
      "The water-drop shaped grinding chamber eliminates the dead zones found in cylindrical mills, reducing recirculation and wasted energy. For a feed mill running 16 hours per day, this translates to meaningful electricity cost savings over the equipment lifetime.",
  },
  {
    title: "More Uniform Particle Size Distribution",
    description:
      "The teardrop geometry guides material through a single optimised grinding path. Particles are struck fewer times on average but more effectively, producing a narrower particle size distribution. This improves feed conversion ratios and pellet quality in downstream processing.",
  },
  {
    title: "Lower Operating Temperature",
    description:
      "Reduced recirculation means less frictional heat build-up inside the grinding chamber. Lower temperatures preserve heat-sensitive nutrients such as vitamins and amino acids in animal feed ingredients — particularly important for aquaculture and poultry premixes.",
  },
  {
    title: "Air-Assisted Discharge",
    description:
      "SFSP models use pneumatic (air-assisted) discharge rather than gravity. This accelerates material removal from the chamber, reduces screen blinding, and minimises dust at the discharge point. The integrated fan also serves as the first stage of the pneumatic conveying system to the mixer or batch hopper.",
  },
  {
    title: "Higher Throughput per kW",
    description:
      "Combining efficient chamber geometry with air-assisted discharge, SFSP water drop hammer mills achieve 15–30% higher throughput per kilowatt of installed motor power compared to standard cylindrical hammer mills of equivalent rotor size.",
  },
  {
    title: "Reduced Maintenance Downtime",
    description:
      "The even grinding action distributes hammer and screen wear more uniformly. Hammers and screens last longer, and the quick-open chamber design allows screen changes in under 10 minutes — minimising production interruptions in busy feed plants.",
  },
]

const faqs = [
  {
    question: "What does SFSP stand for in SFSP hammer mill?",
    answer:
      "SFSP stands for 'Shui Di Fen Sui Pin' in Chinese, which translates to 'water drop crusher' or 'water drop grinder'. The name refers to the teardrop (water-drop) shape of the grinding chamber, which distinguishes these machines from conventional cylindrical hammer mills. The SFSP designation has become a standard classification in the global feed equipment industry, used by manufacturers worldwide to identify this high-efficiency hammer mill design.",
  },
  {
    question: "Why is the water-drop shape more efficient than a cylindrical chamber?",
    answer:
      "In a cylindrical hammer mill, material tends to recirculate in the chamber — particles that are already small enough to pass through the screen get carried around for additional unnecessary impacts, wasting energy and generating heat. The water-drop (teardrop) shape creates a directed material flow path: particles move from the wide upper section of the chamber towards the narrow lower section where the screen is located. This geometry reduces recirculation by 40–60%, meaning each particle receives fewer but more effective impacts before exiting. The result is lower energy consumption per tonne of ground material and a more uniform particle size.",
  },
  {
    question: "What capacity range do SFSP water drop hammer mills cover?",
    answer:
      "Pacific Unity supplies SFSP water drop hammer mills covering a capacity range from 2 TPH to 20 TPH when grinding dry maize through a 2.5 mm screen. The smallest model (PU-SFSP-56×40) is suitable for small to medium feed mills producing 20–40 tonnes per day. The largest model (PU-SFSP-110×100) serves high-volume feed factories producing 150–300 tonnes per day. Actual throughput varies based on the raw material, moisture content, and target screen size. For operations below 2 TPH, a standard hammer mill may be more cost-effective.",
  },
  {
    question: "Can an SFSP water drop hammer mill grind materials other than grain?",
    answer:
      "Yes. SFSP water drop hammer mills can process a wide range of materials including maize, wheat, barley, sorghum, soybean meal, rapeseed meal, sunflower meal, dried cassava chips, rice bran, and mineral premixes. They also handle fibrous materials such as dried alfalfa, hay, and straw, though throughput is lower for fibrous feeds. For very hard materials like bone meal or mineral rocks, or for materials with moisture above 16%, alternative grinding solutions may be more suitable. Contact Pacific Unity for material-specific recommendations.",
  },
  {
    question: "How does an SFSP hammer mill integrate with a pellet mill?",
    answer:
      "In a typical feed production line, the SFSP hammer mill sits upstream of the batch mixer and the pellet mill. Raw ingredients are dosed by the batching system into the hammer mill, which grinds them to the required particle size (typically 0.5–2.5 mm for pelleting). The ground material is conveyed pneumatically to a batch mixer where premixes, oils, and liquids are added. After mixing, the blended mash is conditioned with steam and fed into the pellet mill. Pacific Unity supplies complete turnkey feed lines integrating hammer mills with pellet mills, mixers, coolers, and packaging systems.",
  },
  {
    question: "What is the power requirement for an SFSP water drop hammer mill?",
    answer:
      "Motor power ranges from 30 kW for the PU-SFSP-56×40 to 132 kW for the PU-SFSP-110×100. All models are designed for the standard UAE three-phase power supply at 380V/50Hz. The main motor drives the rotor via V-belts, and an additional 3–7.5 kW motor powers the air-assist fan on most models. Total installed power for a complete grinding station — including feeder, hammer mill, cyclone, and fan — is approximately 20–30% higher than the hammer mill motor alone. Pacific Unity provides full electrical schematics and load calculations with every quotation.",
  },
  {
    question: "What spare parts should I keep in stock for an SFSP hammer mill?",
    answer:
      "We recommend maintaining the following spare parts inventory for uninterrupted operation: two full sets of hammers (high-manganese Mn13 steel), two to three spare screens in your most-used hole sizes, one set of main bearings (SKF or NSK), a spare set of V-belts, and bearing grease. For high-volume operations running 16+ hours per day, doubling the hammer and screen inventory is advisable. Pacific Unity stocks all common spare parts at our Ras Al Khaimah facility for rapid dispatch across the UAE and GCC region.",
  },
  {
    question: "Does Pacific Unity install SFSP hammer mills in the UAE?",
    answer:
      "Yes. Pacific Unity MEA provides complete turnkey installation for all SFSP water drop hammer mills delivered in the UAE. Our installation scope includes foundation preparation guidance, mechanical installation and alignment, electrical connection to your site power supply, commissioning with test runs using your actual raw materials, and hands-on operator training. Our technical team, based in Ras Al Khaimah, has installed feed processing equipment across the UAE and in nine countries across the Middle East and Africa, including the Yedid Agro feed plant project in Ghana. Standard delivery is 4–6 weeks with a one-year warranty.",
  },
]

export default function SFSPWaterDropPage() {
  return (
    <>
      <ProductSchema
        name="SFSP Water Drop Hammer Mill"
        description="High-efficiency SFSP water drop hammer mills for animal feed grinding in the UAE. 2–20 TPH capacity range with 15–25% lower energy consumption than standard hammer mills."
        image="/images/products/sfsp-water-drop-hammer-mill.jpg"
        url="/equipment/feed-processing/crushers/hammer-mill/sfsp-water-drop/"
        category="Feed Processing Equipment"
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
            High-Efficiency Feed Grinding
          </Badge>
          <h1 className="max-w-4xl text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            SFSP Water Drop Hammer Mill Dubai — High-Efficiency Feed Grinding
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-muted-foreground">
            The SFSP water drop hammer mill is the preferred grinding machine for
            modern commercial feed plants. Its teardrop-shaped grinding chamber
            delivers 15–25% lower energy consumption and a more uniform particle
            size than conventional cylindrical{" "}
            <Link
              href="/equipment/feed-processing/crushers/hammer-mill/"
              className="text-primary underline"
            >
              hammer mills
            </Link>
            . Pacific Unity MEA supplies SFSP models from 2 to 20 TPH across the
            UAE, the GCC, and Africa.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/request-quote/">
                Request a Quote{" "}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/equipment/feed-processing/crushers/hammer-mill/">
                Compare All Hammer Mills
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="px-4 py-12 md:px-6 md:py-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            title="How the SFSP Water Drop Design Works"
            subtitle="A smarter grinding chamber geometry for lower energy and better results."
          />
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="prose max-w-none text-muted-foreground">
              <p>
                The defining feature of an SFSP water drop hammer mill is its
                teardrop-shaped grinding chamber. Unlike conventional cylindrical
                hammer mills where material recirculates continuously around the
                full circumference of the rotor, the water-drop geometry creates
                a directed flow pattern. Raw material enters at the top of the
                wider section, is struck by high-speed rotating hammers, and
                follows a converging path towards the screen at the narrow base
                of the chamber.
              </p>
              <p className="mt-4">
                This design eliminates the &quot;dead zones&quot; in
                cylindrical chambers where already-ground particles recirculate
                and absorb unnecessary impacts. The result: each particle passes
                through the screen faster, the rotor does less redundant work,
                and the ground product exits at a lower temperature. For feed
                mills in the UAE running extended shifts in ambient temperatures
                of 35–50°C, reduced heat generation inside the grinder is a
                meaningful operational advantage.
              </p>
              <p className="mt-4">
                SFSP models also incorporate an air-assist fan at the discharge,
                drawing ground material through the screen by negative pressure.
                This prevents screen blinding (clogging), improves throughput
                consistency, and serves as the first stage of pneumatic conveying
                to downstream equipment such as the batch mixer or{" "}
                <Link
                  href="/equipment/feed-processing/pellet-mills/"
                  className="text-primary underline"
                >
                  pellet mill
                </Link>
                .
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">
                Key Design Advantages
              </h3>
              {advantages.slice(0, 4).map((adv) => (
                <div key={adv.title} className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <p className="font-medium">{adv.title}</p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {adv.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Grid */}
      <section className="bg-muted/30 px-4 py-12 md:px-6 md:py-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            title="Why Choose an SFSP Water Drop Hammer Mill?"
            subtitle="Purpose-built for commercial feed plants that demand efficiency and consistency."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {advantages.map((adv) => (
              <Card key={adv.title} className="h-full">
                <CardContent className="p-5">
                  <h3 className="font-semibold">{adv.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {adv.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specs */}
      <section className="px-4 py-12 md:px-6 md:py-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            title="SFSP Water Drop Hammer Mill Specifications"
            subtitle="Four models covering 2 to 20 TPH for operations of every scale."
          />
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Model</TableHead>
                  <TableHead>Motor Power</TableHead>
                  <TableHead>Capacity</TableHead>
                  <TableHead>Rotor Speed</TableHead>
                  <TableHead>Hammers</TableHead>
                  <TableHead>Screen Area</TableHead>
                  <TableHead>Weight</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {sfspModels.map((m) => (
                  <TableRow key={m.model}>
                    <TableCell className="font-medium">{m.model}</TableCell>
                    <TableCell>{m.motorPower}</TableCell>
                    <TableCell>{m.capacity}</TableCell>
                    <TableCell>{m.rotorSpeed}</TableCell>
                    <TableCell>{m.hammers}</TableCell>
                    <TableCell>{m.screenArea}</TableCell>
                    <TableCell>{m.weight}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            Capacities are based on grinding dry maize through a ⌀2.5 mm
            screen. Actual throughput varies by material density, moisture
            content, and screen configuration.{" "}
            <Link href="/request-quote/" className="text-primary underline">
              Request a quote
            </Link>{" "}
            for pricing and detailed data sheets.
          </p>
        </div>
      </section>

      {/* UAE Context */}
      <section className="bg-muted/30 px-4 py-12 md:px-6 md:py-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            title="SFSP Hammer Mills for UAE & Middle East Feed Production"
          />
          <div className="prose max-w-none text-muted-foreground">
            <p>
              The UAE and wider GCC region are experiencing growing demand for
              locally manufactured animal feed as governments prioritise food
              security and self-sufficiency. The UAE alone imports over 90% of
              its animal feed requirements — a dependency that exposes livestock
              and poultry operations to volatile international commodity prices
              and supply chain disruptions.
            </p>
            <p className="mt-4">
              Establishing domestic feed manufacturing capacity starts with
              reliable grinding equipment. The SFSP water drop hammer mill is the
              workhorse of any modern feed plant, and Pacific Unity MEA has
              delivered this equipment to operations across the UAE, Saudi
              Arabia, Oman, Kenya, Ghana, and beyond. Our installation at Yedid
              Agro in Ghana — a complete 1–2 TPH feed plant — demonstrates our
              capability to deliver turnkey solutions from Dubai to any location
              in the Middle East and Africa.
            </p>
            <p className="mt-4">
              With spare parts stocked at our Ras Al Khaimah facility, a
              one-year warranty, and a technical team that can reach any UAE site
              within 24 hours, Pacific Unity is the local partner for feed
              equipment in the region. Whether you are setting up a new feed
              mill in Dubai, upgrading an existing plant in Abu Dhabi, or
              expanding a poultry operation in Al Ain, we have the equipment and
              expertise to support your project.
            </p>
          </div>
        </div>
      </section>

      {/* Related Equipment */}
      <section className="px-4 py-12 md:px-6 md:py-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeading title="Related Equipment" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "All Hammer Mills",
                desc: "Compare standard and SFSP water drop models.",
                href: "/equipment/feed-processing/crushers/hammer-mill/",
              },
              {
                title: "Pellet Mill",
                desc: "Ring die and flat die pellet mills for feed pelleting.",
                href: "/equipment/feed-processing/pellet-mills/",
              },
              {
                title: "Feed Processing Equipment",
                desc: "Complete feed line solutions — mixers, coolers, and more.",
                href: "/equipment/feed-processing/",
              },
              {
                title: "Water Treatment Systems",
                desc: "Industrial water purification for farms and factories.",
                href: "/equipment/water-beverage/water-treatment/",
              },
            ].map((rel) => (
              <Link key={rel.href} href={rel.href} className="group">
                <Card className="h-full transition-shadow hover:shadow-lg">
                  <CardContent className="p-5">
                    <h3 className="font-semibold transition-colors group-hover:text-primary">
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

      {/* FAQs */}
      <section className="bg-muted/30 px-4 py-12 md:px-6 md:py-16">
        <div className="mx-auto max-w-3xl">
          <SectionHeading title="Frequently Asked Questions — SFSP Water Drop Hammer Mill" />
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 pb-12 pt-4 md:px-6 md:pb-16">
        <div className="mx-auto max-w-7xl">
          <CTAStrip
            title="Get an SFSP Hammer Mill Quote"
            description="Tell us your capacity requirement and raw materials. We will recommend the right SFSP water drop model and provide a delivered price to your UAE or international location."
            whatsappMessage="Hi, I'm interested in an SFSP water drop hammer mill for my feed plant. Can you send me specifications and pricing?"
          />
        </div>
      </section>
    </>
  )
}
