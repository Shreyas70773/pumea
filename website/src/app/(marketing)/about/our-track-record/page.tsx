import type { Metadata } from "next"
import Link from "next/link"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import { BreadcrumbSchema } from "@/components/seo/schema/breadcrumb"
import { CTAStrip } from "@/components/shared/cta-strip"
import { SectionHeading } from "@/components/shared/section-heading"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Globe,
  FolderKanban,
  CalendarDays,
  Container,
  Factory,
  FlaskConical,
  Cylinder,
  GlassWater,
  CheckCircle,
  ShieldCheck,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Proven in West Africa, Now Serving the UAE | Pacific Unity MEA",
  description:
    "Pacific Unity MEA brings 13+ years of proven industrial project experience across 9 countries to the UAE. 200+ completed projects in feed processing, liquid storage, water treatment, and more.",
  keywords: [
    "Pacific Unity track record",
    "industrial equipment supplier UAE",
    "feed processing projects Africa",
    "turnkey industrial projects",
    "Pacific Unity MEA experience",
    "North Star Impex Singapore",
  ],
  alternates: {
    canonical: "https://pacificunity.ae/about/our-track-record/",
  },
}

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about/" },
  { name: "Our Track Record", href: "/about/our-track-record/" },
]

const stats = [
  { icon: FolderKanban, value: "200+", label: "Projects Completed" },
  { icon: Globe, value: "9", label: "Countries" },
  { icon: CalendarDays, value: "13+", label: "Years Experience" },
  { icon: Container, value: "4", label: "Continents Served" },
]

const caseStudies = [
  {
    title: "Yedid Agro — Integrated Animal Feed Plant",
    location: "Sunyani, Ghana",
    industry: "Agro-processing",
    icon: Factory,
    client:
      "Integrated animal feed manufacturer producing both poultry feed and fish feed from a single facility.",
    equipment: [
      "Soybean hammer mill",
      "Feed mixer",
      "Pellet making machine",
      "Fish feed twin-screw extruder",
      "Bucket elevator",
      "Raw material silos",
      "Control panel",
    ],
    capacity: "1–2 metric tonnes per hour (combined)",
    status:
      "Poultry feed line operational. Fish feed line installed — commissioning pending.",
    result:
      "Enabled in-house feed production, reducing the client's dependency on imported feed.",
  },
  {
    title: "Casa Praco — Industrial Liquid Storage",
    location: "West Africa",
    industry: "Ethanol / Industrial",
    icon: Cylinder,
    client: "Industrial ethanol producer requiring large-scale liquid storage.",
    equipment: [
      "2× ethanol tanks (10 million litres each)",
      "2× water tanks (3 million litres each)",
      "1× water tank (1.5 million litres)",
      "1× stainless steel process tank (75,000 L)",
      "1× soya oil tank (52,000 L)",
    ],
    capacity:
      "20 million litres ethanol + 7.5 million litres water + 127,000 litres specialty storage",
    status: "Operational",
    result:
      "One of the largest liquid storage installations in our portfolio — over 27.6 million litres of total storage capacity.",
  },
  {
    title: "Unitec — Herbal Medicine Extraction",
    location: "TBC",
    industry: "Herbal / Nutraceutical",
    icon: FlaskConical,
    client:
      "Herbal and nutraceutical manufacturer requiring a multi-stage extraction system.",
    equipment: [
      "2,200 L herbal extraction vessel",
      "2× jacketed cooling tanks",
      "Agitated storage tank",
      "Cooling tower",
      "RO water storage",
    ],
    capacity: "2,200 L batch — 3-stage process (boiling, cooling, storage)",
    status: "Operational",
    result:
      "Force cooling system cuts cycle time by 60–70%, significantly increasing daily batch throughput.",
  },
  {
    title: "Industrial Tank & Production Line",
    location: "TBC",
    industry: "Industrial Storage",
    icon: Container,
    client:
      "Industrial client requiring combined bulk and hygienic process storage.",
    equipment: [
      "Bolted epoxy-coated steel tank",
      "100,000 L stainless steel tank",
      "Complete production line",
    ],
    capacity: "100,000 L stainless steel tank + bolted tank",
    status: "Operational",
    result:
      "Combined corrosion-resistant bulk storage with hygienic stainless steel process storage in a single integrated solution.",
  },
  {
    title: "OYE — Complete Water Bottling Plant",
    location: "TBC",
    industry: "Beverage / FMCG",
    icon: GlassWater,
    client: "Packaged drinking water brand requiring a complete turnkey line.",
    equipment: [
      "Water treatment (reverse osmosis)",
      "Bottle blowing machine",
      "Filling machine",
      "Capping machine",
      "Labelling machine",
      "Conveyors",
      "Shrink wrap packaging",
    ],
    capacity: "Complete turnkey bottling line",
    status: "Operational",
    result:
      "End-to-end solution from raw water treatment through to finished, labelled product — a single-source turnkey delivery.",
  },
]

const portfolioSummary = [
  {
    project: "Yedid Agro Feed Plant",
    location: "Sunyani, Ghana",
    industry: "Agro-processing",
    scale: "1–2 TPH",
    status: "Operational",
  },
  {
    project: "Casa Praco Storage",
    location: "West Africa",
    industry: "Ethanol / Industrial",
    scale: "20 ML+",
    status: "Operational",
  },
  {
    project: "Unitec Herbal Extraction",
    location: "TBC",
    industry: "Herbal / Nutraceutical",
    scale: "2,200 L batch",
    status: "Operational",
  },
  {
    project: "Industrial Tank & Line",
    location: "TBC",
    industry: "Industrial Storage",
    scale: "100 KL SS tank",
    status: "Operational",
  },
  {
    project: "OYE Water Bottling",
    location: "TBC",
    industry: "Beverage / FMCG",
    scale: "Turnkey line",
    status: "Operational",
  },
]

const equipmentCategories = [
  "Feed mills (hammer mills, mixers, pellet mills)",
  "Twin-screw extruders (fish feed / floating feed)",
  "Industrial tanks (stainless steel, epoxy-coated, bolted)",
  "Water treatment systems (reverse osmosis, filtration)",
  "Filling machines (liquid, paste, powder)",
  "Labelling machines (sticker, BOPP, shrink sleeve)",
  "Extraction vessels (herbal, nutraceutical)",
  "Bottle blowing machines",
  "Conveyors and material handling",
  "Control panels and automation",
]

export default function OurTrackRecordPage() {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />

      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <Breadcrumbs items={breadcrumbs} />
      </div>

      {/* Hero */}
      <section className="bg-linear-to-br from-background to-muted/40 px-4 pb-12 pt-8 md:px-6 md:pb-16 md:pt-12">
        <div className="mx-auto max-w-7xl">
          <h1 className="max-w-4xl text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            Proven in West Africa, Now Serving the UAE
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-muted-foreground">
            We are new to the UAE market — but we bring over a decade of proven
            experience from 9 countries. Here is what we have delivered.
          </p>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="border-y bg-muted/30 px-4 py-10 md:px-6">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <stat.icon className="mx-auto h-8 w-8 text-primary" />
              <p className="mt-3 text-3xl font-bold tracking-tight">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Our Background */}
      <section className="px-4 py-12 md:px-6 md:py-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            title="Our Background"
            subtitle="A group built across multiple entities, now entering the UAE and GCC market."
          />
          <div className="prose max-w-none text-muted-foreground">
            <p>
              Pacific Unity MEA is the UAE entity of a group that includes{" "}
              <strong className="text-foreground">
                North Star Impex
              </strong>{" "}
              (Singapore, founded 2013),{" "}
              <strong className="text-foreground">Fine Techno Pack</strong>{" "}
              (Ghana,{" "}
              <Link
                href="https://ftplgh.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline"
              >
                ftplgh.com
              </Link>{" "}
              — West Africa operations front),{" "}
              <strong className="text-foreground">NSI Projects</strong> (Kenya),{" "}
              <strong className="text-foreground">Stelastra</strong> (India),
              and{" "}
              <strong className="text-foreground">
                NSI Impex Machinery
              </strong>{" "}
              (China).
            </p>
            <p className="mt-4">
              Together, the group has delivered over 200 industrial projects
              worldwide — across feed processing, liquid storage, water
              treatment, beverage bottling, and herbal extraction. Pacific Unity
              MEA is now the group&apos;s entity serving the United Arab
              Emirates and the wider GCC market, registered in Ras Al Khaimah
              Free Zone.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="bg-muted/30 px-4 py-12 md:px-6 md:py-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            title="Project Case Studies"
            subtitle="Five representative projects from our portfolio — each one real, verifiable, and backed by documentation."
          />
          <div className="space-y-8">
            {caseStudies.map((study) => (
              <Card key={study.title}>
                <CardContent className="p-6 md:p-8">
                  <div className="flex flex-col gap-6 md:flex-row">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                      <study.icon className="h-7 w-7 text-primary" />
                    </div>
                    <div className="flex-1 space-y-4">
                      <div>
                        <h3 className="text-xl font-semibold">{study.title}</h3>
                        <div className="mt-2 flex flex-wrap gap-2">
                          <Badge variant="secondary">{study.location}</Badge>
                          <Badge variant="outline">{study.industry}</Badge>
                        </div>
                      </div>

                      <p className="text-muted-foreground">{study.client}</p>

                      <div>
                        <h4 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                          Equipment Supplied
                        </h4>
                        <ul className="mt-2 grid gap-1.5 sm:grid-cols-2">
                          {study.equipment.map((item) => (
                            <li
                              key={item}
                              className="flex items-start gap-2 text-sm text-muted-foreground"
                            >
                              <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="grid gap-4 sm:grid-cols-3">
                        <div>
                          <h4 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                            Capacity
                          </h4>
                          <p className="mt-1 text-sm">{study.capacity}</p>
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                            Status
                          </h4>
                          <p className="mt-1 text-sm">{study.status}</p>
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                            Key Result
                          </h4>
                          <p className="mt-1 text-sm">{study.result}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Summary Table */}
      <section className="px-4 py-12 md:px-6 md:py-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            title="Portfolio Summary"
            subtitle="An at-a-glance view of the projects detailed above."
          />
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Project</TableHead>
                  <TableHead>Location</TableHead>
                  <TableHead>Industry</TableHead>
                  <TableHead>Scale</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {portfolioSummary.map((row) => (
                  <TableRow key={row.project}>
                    <TableCell className="font-medium">
                      {row.project}
                    </TableCell>
                    <TableCell>{row.location}</TableCell>
                    <TableCell>{row.industry}</TableCell>
                    <TableCell>{row.scale}</TableCell>
                    <TableCell>
                      <Badge
                        variant="secondary"
                        className="bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
                      >
                        {row.status}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </section>

      {/* Equipment Delivered */}
      <section className="bg-muted/30 px-4 py-12 md:px-6 md:py-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            title="Equipment Categories Delivered"
            subtitle="The breadth of industrial equipment we have sourced, shipped, installed, and commissioned."
          />
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {equipmentCategories.map((category) => (
              <div
                key={category}
                className="flex items-start gap-3 rounded-lg border bg-background p-4"
              >
                <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span className="text-sm">{category}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Honest Position */}
      <section className="px-4 py-12 md:px-6 md:py-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeading title="Our Honest Position" />
          <Card className="border-primary/20 bg-primary/5">
            <CardContent className="p-6 md:p-8">
              <div className="flex gap-4">
                <ShieldCheck className="mt-1 h-8 w-8 shrink-0 text-primary" />
                <div className="prose max-w-none text-muted-foreground">
                  <p>
                    We are a new entity in the UAE, registered in Ras Al Khaimah
                    Free Zone. We do not claim decades of UAE-specific
                    experience.
                  </p>
                  <p className="mt-4">
                    What we offer is proven capability — the engineering
                    knowledge, supply chain relationships, and project management
                    expertise built across 200+ projects in 9 countries. Every
                    project we reference on this page is real, verifiable, and
                    backed by documentation.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator />

      {/* CTA */}
      <section className="px-4 py-12 md:px-6 md:py-16">
        <div className="mx-auto max-w-7xl">
          <CTAStrip
            title="Want to Discuss a Project?"
            description="Tell us about your requirements. We will share relevant project references and explain exactly how our experience applies to your operation."
            whatsappMessage="Hi, I'd like to learn more about Pacific Unity's track record and discuss a potential project."
          />
        </div>
      </section>
    </>
  )
}
