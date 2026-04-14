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
import {
  ArrowRight,
  CheckCircle,
  Zap,
  Settings,
  Shield,
  Truck,
} from "lucide-react"

export const metadata: Metadata = {
  title:
    "Hammer Mill Dubai UAE — Feed Grinding Equipment for Farms & Feed Mills",
  description:
    "Industrial hammer mills for feed grinding in Dubai and the UAE. SFSP water drop and standard hammer mills from 1 TPH to 20 TPH for poultry feed, livestock feed, fish feed, and biomass processing. Request a quote from Pacific Unity MEA.",
  keywords: [
    "hammer mill",
    "hammer mill Dubai",
    "hammer mill UAE",
    "feed grinding machine",
    "hammer mill for feed",
    "SFSP hammer mill",
    "grain grinding machine UAE",
    "poultry feed hammer mill",
  ],
  alternates: {
    canonical:
      "https://pacificunity.ae/equipment/feed-processing/crushers/hammer-mill/",
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
]

const standardModels = [
  {
    model: "PU-HM-56",
    type: "Standard",
    motorPower: "22 kW",
    capacity: "1–3 TPH",
    rotorDiameter: "560 mm",
    hammers: 24,
    screenArea: "0.15 m²",
    use: "Small farms, starter mills",
  },
  {
    model: "PU-HM-66",
    type: "Standard",
    motorPower: "37 kW",
    capacity: "3–5 TPH",
    rotorDiameter: "660 mm",
    hammers: 32,
    screenArea: "0.22 m²",
    use: "Medium farms, feed lots",
  },
  {
    model: "PU-HM-80",
    type: "Standard",
    motorPower: "55 kW",
    capacity: "5–8 TPH",
    rotorDiameter: "800 mm",
    hammers: 40,
    screenArea: "0.35 m²",
    use: "Commercial feed mills",
  },
]

const sfspModels = [
  {
    model: "PU-SFSP-56×40",
    type: "SFSP Water Drop",
    motorPower: "30 kW",
    capacity: "2–4 TPH",
    rotorDiameter: "560 mm",
    hammers: 32,
    screenArea: "0.20 m²",
    use: "Small–medium feed mills",
  },
  {
    model: "PU-SFSP-66×60",
    type: "SFSP Water Drop",
    motorPower: "55 kW",
    capacity: "5–8 TPH",
    rotorDiameter: "660 mm",
    hammers: 48,
    screenArea: "0.38 m²",
    use: "Medium–large feed plants",
  },
  {
    model: "PU-SFSP-80×80",
    type: "SFSP Water Drop",
    motorPower: "90 kW",
    capacity: "8–15 TPH",
    rotorDiameter: "800 mm",
    hammers: 64,
    screenArea: "0.58 m²",
    use: "Large-scale feed factories",
  },
  {
    model: "PU-SFSP-110×100",
    type: "SFSP Water Drop",
    motorPower: "132 kW",
    capacity: "12–20 TPH",
    rotorDiameter: "1,100 mm",
    hammers: 80,
    screenArea: "0.82 m²",
    use: "High-volume integration",
  },
]

const allModels = [...standardModels, ...sfspModels]

const applications = [
  {
    title: "Poultry Feed",
    description:
      "Grind maize, soybean meal, wheat, and premix ingredients to a uniform 1–3 mm particle size required for broiler and layer mash or pre-pelleting preparation. Consistent particle size distribution ensures optimal feed conversion ratios in poultry operations across the UAE and wider GCC region.",
  },
  {
    title: "Livestock & Ruminant Feed",
    description:
      "Process whole grains, oilseed cakes, dried forages, and mineral supplements into coarse-ground feed for cattle, goats, sheep, and camels. Adjustable screen sizes allow operators to produce anything from fine meal to coarse-cracked grain depending on animal species and growth stage.",
  },
  {
    title: "Aquaculture Feed",
    description:
      "Achieve the ultra-fine grind (below 0.5 mm) needed for floating and sinking fish feed pellets. Fine grinding improves starch gelatinisation during extrusion and enhances pellet water stability — both critical for tilapia, catfish, and shrimp feed production in Middle East and African aquaculture operations.",
  },
  {
    title: "Biomass & Waste Processing",
    description:
      "Reduce agricultural residues such as date palm fronds, straw, wood chips, and dried food waste into particles suitable for biomass pelleting or composting. Hammer mills handle fibrous and tough materials that roller mills cannot, making them essential for biomass-to-energy projects in the UAE.",
  },
  {
    title: "Grain Milling & Flour Processing",
    description:
      "Pre-grind grains before roller milling or process low-volume speciality flours. Hammer mills serve as the primary size-reduction step in many grain processing operations, particularly in small and medium-scale flour mills throughout the Middle East and Africa.",
  },
]

const selectionGuide = [
  {
    factor: "Required Capacity",
    guidance:
      "Match the hammer mill throughput to your feed plant's peak production requirement. Standard hammer mills suit operations up to 5 TPH; SFSP water drop models are recommended for 5 TPH and above due to their superior efficiency and lower specific energy consumption.",
  },
  {
    factor: "Target Particle Size",
    guidance:
      "Select screen hole diameters based on your end product: 3–5 mm for coarse livestock feed, 1.5–3 mm for poultry mash, and 0.5–1.5 mm for aquatic feed pre-pelleting. Finer screens reduce throughput — size the hammer mill motor accordingly.",
  },
  {
    factor: "Raw Material Type",
    guidance:
      "Grain hardness and moisture content affect grinding performance. Maize and wheat grind efficiently at 12–14% moisture. Oilseed cakes require wider hammer gaps. Fibrous materials like hay or date palm fronds need more hammers and higher tip speeds.",
  },
  {
    factor: "Energy Efficiency",
    guidance:
      "SFSP water drop hammer mills consume 15–25% less energy per tonne than standard designs due to the water-drop shaped grinding chamber, which reduces recirculation. For operations running 12+ hours per day, the energy savings quickly offset the higher equipment cost.",
  },
  {
    factor: "Noise & Dust Control",
    guidance:
      "All hammer mills generate noise (85–105 dB) and dust. Plan for sound insulation enclosures and pulse-jet dust collection systems. SFSP models with integrated air-assist discharge produce less ambient dust than gravity-discharge standard mills.",
  },
]

const faqs = [
  {
    question: "What is a hammer mill and how does it work?",
    answer:
      "A hammer mill is a size-reduction machine that uses high-speed rotating hammers to impact and shatter raw materials into smaller particles. The material enters the grinding chamber through a feed inlet and is struck repeatedly by the swinging hammers, which rotate at tip speeds of 70–100 metres per second. As particles are reduced in size, they pass through a perforated screen at the bottom or sides of the chamber. The screen hole diameter determines the final particle size — smaller holes produce finer output but reduce throughput. Hammer mills are the most widely used grinding machines in the global animal feed industry.",
  },
  {
    question:
      "What is the difference between a standard hammer mill and an SFSP water drop hammer mill?",
    answer:
      "A standard hammer mill has a cylindrical grinding chamber and relies on gravity to discharge the ground material through the bottom screen. An SFSP water drop hammer mill has a teardrop-shaped (water-drop) grinding chamber designed so that material follows a more efficient grinding path with less recirculation. This design reduces specific energy consumption by 15–25%, lowers operating temperature, and produces a more uniform particle size distribution. SFSP models also typically include air-assisted discharge, which further improves throughput and reduces dust. For operations above 3–5 TPH, the SFSP design is the preferred choice in modern feed mills across the UAE and globally.",
  },
  {
    question: "How much does a hammer mill cost in the UAE?",
    answer:
      "Hammer mill prices vary based on capacity, type, and configuration. Request a quote for pricing tailored to your specific requirements. Pacific Unity MEA supplies hammer mills with full delivery to any location in the UAE, including Dubai, Abu Dhabi, Sharjah, and Ras Al Khaimah. Each quotation includes the hammer mill unit, motor, starter panel, spare screens, a set of replacement hammers, and our standard one-year warranty. Installation and commissioning services are quoted separately based on site conditions.",
  },
  {
    question: "What capacity hammer mill do I need for a poultry feed mill?",
    answer:
      "The required hammer mill capacity depends on your daily feed production target and operating hours. A small farm producing 5–10 tonnes per day in a single shift typically needs a 1–3 TPH unit (PU-HM-56 or PU-SFSP-56×40). A medium commercial operation producing 30–50 tonnes per day requires a 5–8 TPH machine (PU-HM-80 or PU-SFSP-66×60). Large integrated poultry companies producing 100+ tonnes per day should consider our PU-SFSP-80×80 or PU-SFSP-110×100 models, possibly with two units running in parallel for redundancy.",
  },
  {
    question:
      "How often do hammer mill screens and hammers need to be replaced?",
    answer:
      "Hammer replacement intervals depend on the material being ground and operating hours. When grinding maize and soybean meal, hammers typically last 800–1,200 operating hours before requiring rotation or replacement. Screens last 500–1,000 hours depending on the material abrasiveness and hole size. Grinding mineral-rich premixes or bone meal accelerates wear significantly — expect to replace hammers every 300–500 hours in those applications. Pacific Unity supplies replacement hammers and screens manufactured from high-manganese steel (Mn13) for extended service life. We recommend keeping a full set of spare hammers and at least two spare screens on site.",
  },
  {
    question: "Can a hammer mill grind wet or high-moisture materials?",
    answer:
      "Hammer mills perform best with materials at 12–15% moisture content. Materials above 16–18% moisture tend to clog the screens and reduce grinding efficiency. For wet materials such as fresh cassava, green forages, or food waste with moisture above 20%, a pre-drying step is recommended before hammer milling. Alternatively, a wet-type grinder or a cutter mill is more suitable for high-moisture applications. If you are processing materials with variable moisture content in your UAE facility, contact Pacific Unity and we will recommend the optimal grinding solution for your specific feedstock.",
  },
  {
    question:
      "What safety features are included with Pacific Unity hammer mills?",
    answer:
      "All Pacific Unity hammer mills include essential safety features as standard: a magnetic separator at the feed inlet to catch tramp metal before it enters the grinding chamber, a vibration sensor that triggers automatic shutdown if bearing imbalance is detected, an interlocked access door that prevents the chamber from being opened while the rotor is spinning, and an overload relay in the motor starter panel. SFSP models additionally include a temperature sensor on the grinding chamber to detect overheating caused by screen blockage. We also supply optional explosion venting panels for facilities processing dusty, combustible materials in compliance with ATEX guidelines.",
  },
  {
    question: "What is the lead time for hammer mill delivery to Dubai?",
    answer:
      "Standard lead time for hammer mill delivery to Dubai and the wider UAE is 4–6 weeks from order confirmation. This includes manufacturing, factory testing, sea freight from our production facility, customs clearance, and delivery to your site. For urgent requirements, Pacific Unity can arrange air freight with a reduced lead time of 2–3 weeks at an additional cost. We maintain stock of common spare parts — hammers, screens, bearings, and belts — at our Ras Al Khaimah facility for immediate dispatch. Installation and commissioning typically require an additional 2–3 days on site depending on the complexity of your feed line integration.",
  },
  {
    question:
      "How does a hammer mill integrate into a complete feed production line?",
    answer:
      "In a typical feed production line, the hammer mill sits between the raw material intake and the mixer. Raw grains and ingredients are received, cleaned, and pre-dosed by volumetric or gravimetric feeders into the hammer mill. The ground material is pneumatically or mechanically conveyed to a batch mixer where premixes, oils, and additives are blended. After mixing, the feed either goes directly to bagging (for mash feed) or to a pellet mill for pelleting. Pacific Unity designs and supplies complete feed processing lines — including hammer mills, mixers, pellet mills, coolers, and bagging systems — as integrated turnkey solutions for operations across the UAE and Middle East.",
  },
  {
    question:
      "Does Pacific Unity provide installation and after-sales service for hammer mills in the UAE?",
    answer:
      "Yes. Pacific Unity MEA provides full installation, commissioning, and operator training for every hammer mill delivered in the UAE. Our technical team is based in Ras Al Khaimah and can reach any site in the UAE within 24 hours for service calls. We offer a standard one-year warranty covering manufacturing defects and mechanical failures under normal operating conditions. After the warranty period, we provide annual maintenance contracts that include scheduled inspections, bearing lubrication, hammer and screen condition assessments, and priority spare parts supply. With over 200 projects completed across nine countries, our after-sales support is a core part of the Pacific Unity offering.",
  },
]

export default function HammerMillPage() {
  return (
    <>
      <ProductSchema
        name="Hammer Mill — Feed Grinding Equipment"
        description="Industrial hammer mills for animal feed grinding in the UAE. Standard and SFSP water drop models from 1 TPH to 20 TPH for poultry, livestock, aquaculture, and biomass processing."
        image="/images/products/hammer-mill.jpg"
        url="/equipment/feed-processing/crushers/hammer-mill/"
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
          <Badge variant="secondary" className="mb-4">
            Feed Processing Equipment
          </Badge>
          <h1 className="max-w-4xl text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            Hammer Mill Dubai UAE — Feed Grinding Equipment for Farms &amp; Feed
            Mills
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-muted-foreground">
            Industrial hammer mills for grinding maize, wheat, soybean meal, and
            raw ingredients into animal feed. Pacific Unity MEA supplies both
            standard hammer mills and high-efficiency{" "}
            <Link
              href="/equipment/feed-processing/crushers/hammer-mill/sfsp-water-drop/"
              className="text-primary underline"
            >
              SFSP water drop hammer mills
            </Link>{" "}
            from 1 TPH to 20 TPH — delivered, installed, and commissioned across
            the UAE, the GCC, and East Africa.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/request-quote/">
                Request a Quote{" "}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="#models">View Model Range</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* What Is a Hammer Mill */}
      <section className="px-4 py-12 md:px-6 md:py-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            title="What Is a Hammer Mill?"
            subtitle="The most widely used grinding machine in the global animal feed industry."
          />
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="prose max-w-none text-muted-foreground">
              <p>
                A hammer mill is a high-speed impact grinder that reduces raw
                materials — grains, oilseeds, minerals, and fibrous biomass —
                into uniform particles suitable for animal feed production, flour
                milling, and industrial processing. Inside the grinding chamber,
                a rotor fitted with swinging steel hammers spins at 2,500–3,600
                RPM, striking the material at tip speeds of 70–100 m/s. Broken
                particles pass through a perforated screen surrounding the
                rotor; the screen hole diameter (typically 1–8 mm) determines
                the final particle size.
              </p>
              <p className="mt-4">
                Hammer mills have remained the dominant grinding technology in
                feed manufacturing for over a century because of their
                simplicity, versatility, and tolerance of foreign objects. Unlike
                roller mills, which can be damaged by a single stone or bolt, a
                hammer mill can absorb moderate tramp material without
                catastrophic failure — though a magnetic separator at the inlet
                is always recommended.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">
                Two Types — Standard vs SFSP Water Drop
              </h3>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                <Card>
                  <CardContent className="p-5">
                    <h4 className="font-semibold">Standard Hammer Mill</h4>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Cylindrical grinding chamber with gravity discharge.
                      Cost-effective for small to medium operations (1–8 TPH).
                      Ideal for single-ingredient grinding on farms and starter
                      feed mills.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-5">
                    <h4 className="font-semibold">
                      SFSP Water Drop Hammer Mill
                    </h4>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Teardrop-shaped chamber with air-assisted discharge.
                      15–25% more energy efficient. Produces a more uniform
                      particle size. Preferred for commercial feed mills above 3
                      TPH.{" "}
                      <Link
                        href="/equipment/feed-processing/crushers/hammer-mill/sfsp-water-drop/"
                        className="text-primary underline"
                      >
                        Learn more
                      </Link>
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specs */}
      <section
        id="models"
        className="bg-muted/30 px-4 py-12 md:px-6 md:py-16"
      >
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            title="Hammer Mill Technical Specifications"
            subtitle="Standard and SFSP water drop models covering 1 to 20 TPH."
          />
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Model</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Motor Power</TableHead>
                  <TableHead>Capacity</TableHead>
                  <TableHead>Rotor ⌀</TableHead>
                  <TableHead>Hammers</TableHead>
                  <TableHead>Screen Area</TableHead>
                  <TableHead>Typical Use</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {allModels.map((m) => (
                  <TableRow key={m.model}>
                    <TableCell className="font-medium">{m.model}</TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          m.type === "Standard" ? "outline" : "secondary"
                        }
                      >
                        {m.type}
                      </Badge>
                    </TableCell>
                    <TableCell>{m.motorPower}</TableCell>
                    <TableCell>{m.capacity}</TableCell>
                    <TableCell>{m.rotorDiameter}</TableCell>
                    <TableCell>{m.hammers}</TableCell>
                    <TableCell>{m.screenArea}</TableCell>
                    <TableCell>{m.use}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            Capacities are based on grinding dry maize through a 2.5 mm screen.
            Actual throughput varies by material and screen size.{" "}
            <Link href="/request-quote/" className="text-primary underline">
              Request a quote
            </Link>{" "}
            for pricing and custom configurations.
          </p>
        </div>
      </section>

      {/* Applications */}
      <section className="px-4 py-12 md:px-6 md:py-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            title="Hammer Mill Applications"
            subtitle="From poultry feed to biomass processing — one machine, many uses."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {applications.map((app) => (
              <Card key={app.title} className="h-full">
                <CardContent className="p-5">
                  <h3 className="font-semibold">{app.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {app.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why UAE */}
      <section className="bg-muted/30 px-4 py-12 md:px-6 md:py-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            title="Why Choose a Hammer Mill for UAE Feed Production?"
            subtitle="Local feed manufacturing reduces import dependency and supports the UAE's food security strategy."
          />
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="flex flex-col gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <Zap className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-semibold">
                Reduce Feed Import Costs
              </h3>
              <p className="text-sm text-muted-foreground">
                The UAE imports over 90% of its animal feed. Manufacturing
                compound feed locally from imported raw ingredients — maize,
                soybean meal, wheat — is significantly cheaper than importing
                finished feed. A hammer mill is the first and most essential
                machine in any feed production line, grinding raw materials to
                the correct particle size before mixing and pelleting.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <Shield className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-semibold">
                Support UAE Food Security
              </h3>
              <p className="text-sm text-muted-foreground">
                The UAE National Food Security Strategy aims to make the country
                one of the best in the Global Food Security Index by 2051.
                Domestic feed manufacturing capacity is a critical pillar of this
                strategy. Pacific Unity has already delivered feed plant
                equipment — including hammer mills, pellet mills, and mixers —
                across the UAE and to operations in Ghana, Kenya, and other
                African markets.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <Settings className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-semibold">
                Self-Sufficiency for Farms
              </h3>
              <p className="text-sm text-muted-foreground">
                Many poultry and livestock farms in the UAE operate their own
                on-farm feed mills. A compact hammer mill paired with a
                horizontal mixer allows farms to produce custom feed
                formulations in-house, control ingredient quality, and respond to
                nutritional requirements without depending on third-party feed
                suppliers. Our Yedid Agro project in Ghana demonstrated this
                model with a complete 1–2 TPH feed plant installation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Model Comparison */}
      <section className="px-4 py-12 md:px-6 md:py-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            title="Standard vs SFSP Water Drop — Which Hammer Mill Is Right for You?"
          />
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Feature</TableHead>
                  <TableHead>Standard Hammer Mill</TableHead>
                  <TableHead>SFSP Water Drop Hammer Mill</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[
                  {
                    feature: "Grinding Chamber Shape",
                    standard: "Cylindrical",
                    sfsp: "Teardrop (water drop)",
                  },
                  {
                    feature: "Discharge Method",
                    standard: "Gravity",
                    sfsp: "Air-assisted (pneumatic)",
                  },
                  {
                    feature: "Energy Efficiency",
                    standard: "Baseline",
                    sfsp: "15–25% lower kWh/tonne",
                  },
                  {
                    feature: "Particle Size Uniformity",
                    standard: "Good",
                    sfsp: "Excellent — narrower distribution",
                  },
                  {
                    feature: "Operating Temperature",
                    standard: "Higher — more recirculation",
                    sfsp: "Lower — less heat build-up",
                  },
                  {
                    feature: "Dust at Discharge",
                    standard: "Moderate — needs dust collector",
                    sfsp: "Low — air-assist captures fines",
                  },
                  {
                    feature: "Capacity Range",
                    standard: "1–8 TPH",
                    sfsp: "2–20 TPH",
                  },
                  {
                    feature: "Best For",
                    standard: "Farms, small mills, low budgets",
                    sfsp: "Commercial and industrial feed mills",
                  },
                  {
                    feature: "Relative Cost",
                    standard: "Lower",
                    sfsp: "Higher — offset by energy savings",
                  },
                ].map((row) => (
                  <TableRow key={row.feature}>
                    <TableCell className="font-medium">
                      {row.feature}
                    </TableCell>
                    <TableCell>{row.standard}</TableCell>
                    <TableCell>{row.sfsp}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </section>

      {/* Selection Guide */}
      <section className="bg-muted/30 px-4 py-12 md:px-6 md:py-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            title="How to Choose the Right Hammer Mill"
            subtitle="Five factors to consider when selecting a hammer mill for your operation."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {selectionGuide.map((item, i) => (
              <Card key={item.factor} className="h-full">
                <CardContent className="p-5">
                  <span className="text-2xl font-bold text-primary/30">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-2 font-semibold">{item.factor}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {item.guidance}
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
          <SectionHeading title="Key Features of Pacific Unity Hammer Mills" />
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Heavy-duty welded steel housing with reinforced grinding chamber",
              "High-manganese steel (Mn13) hammers for extended wear life",
              "Quick-change screen system — swap screens in under 10 minutes",
              "Dynamically balanced rotor to minimise vibration and bearing wear",
              "SKF or NSK heavy-duty bearings with grease lubrication ports",
              "V-belt drive with motor slide base for easy tension adjustment",
              "Magnetic separator at feed inlet for tramp metal protection",
              "Optional PLC control panel with auto-start/stop and fault display",
            ].map((feat) => (
              <div key={feat} className="flex items-start gap-3">
                <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span className="text-sm text-muted-foreground">{feat}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery & Installation */}
      <section className="bg-muted/30 px-4 py-12 md:px-6 md:py-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            title="Delivery & Installation in the UAE"
            subtitle="From our Ras Al Khaimah facility to your site — end to end."
          />
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="prose max-w-none text-muted-foreground">
              <p>
                Pacific Unity MEA, headquartered in Ras Al Khaimah, manages the
                entire supply chain for hammer mill delivery across the UAE and
                the wider Middle East and Africa region. Our parent company,
                North Star Impex Singapore (established 2013), sources equipment
                from vetted manufacturers with ISO 9001 and CE certifications.
              </p>
              <p className="mt-4">
                Standard lead time is 4–6 weeks from order confirmation,
                covering manufacturing, factory acceptance testing, sea freight,
                UAE customs clearance, and last-mile delivery. Our installation
                team handles mechanical installation, electrical connection,
                commissioning, and operator training — typically completed within
                2–3 days for a standalone hammer mill or 1–2 weeks for a
                complete feed line.
              </p>
            </div>
            <div className="space-y-4">
              {[
                {
                  icon: Truck,
                  label: "Lead Time",
                  value: "4–6 weeks ex-works to UAE site",
                },
                {
                  icon: Shield,
                  label: "Warranty",
                  value: "1 year parts and labour",
                },
                {
                  icon: Settings,
                  label: "Installation",
                  value:
                    "Full mechanical, electrical, commissioning, and training",
                },
                {
                  icon: CheckCircle,
                  label: "Spare Parts",
                  value:
                    "Hammers, screens, bearings, and belts stocked in RAK",
                },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">{item.label}</p>
                    <p className="text-sm text-muted-foreground">
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
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
                title: "SFSP Water Drop Hammer Mill",
                desc: "High-efficiency grinding for commercial feed mills.",
                href: "/equipment/feed-processing/crushers/hammer-mill/sfsp-water-drop/",
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
          <SectionHeading title="Frequently Asked Questions About Hammer Mills" />
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 pb-12 pt-4 md:px-6 md:pb-16">
        <div className="mx-auto max-w-7xl">
          <CTAStrip
            title="Get a Hammer Mill Quote"
            description="Tell us your required capacity, raw materials, and target particle size. We will recommend the right hammer mill for your operation and provide a delivered price to your UAE location."
            whatsappMessage="Hi, I need a hammer mill for my feed production operation in the UAE. Can you send me specifications and pricing?"
          />
        </div>
      </section>
    </>
  )
}
