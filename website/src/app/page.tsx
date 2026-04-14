import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { FAQAccordion } from "@/components/shared/faq-accordion"
import { CTAStrip } from "@/components/shared/cta-strip"
import { FAQPageSchema } from "@/components/seo/schema/faq-page"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { WhatsAppFAB } from "@/components/layout/whatsapp-fab"
import {
  Droplets,
  Factory,
  Tag,
  Container,
  Wheat,
  Wrench,
  ArrowRight,
  CheckCircle,
  Globe,
  Award,
  Building2,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Pacific Unity MEA — Industrial Equipment Supplier Dubai",
  description:
    "Feed processing, water treatment, filling & packaging, and stainless steel tank equipment for the UAE. Proven track record across 9 countries. Request a quote.",
  alternates: { canonical: "https://pacificunity.ae/" },
}

const categories = [
  {
    icon: Droplets,
    title: "Water Treatment & Beverage",
    description: "RO plants, water filtration systems, and desalination equipment for industrial and commercial use in the UAE.",
    href: "/equipment/water-beverage/water-treatment",
  },
  {
    icon: Tag,
    title: "Labeling Machines",
    description: "BOPP, shrink sleeve, and self-adhesive labeling machines for beverage, pharmaceutical, and food industries.",
    href: "/equipment/filling-packaging/labeling-machines",
  },
  {
    icon: Wheat,
    title: "Feed Processing Equipment",
    description: "Pellet mills, hammer mills, mixers, and extruders for poultry, livestock, and aquaculture feed production.",
    href: "/equipment/feed-processing/pellet-mills",
  },
  {
    icon: Factory,
    title: "Filling & Packaging",
    description: "Rotary, piston, linear, and cup filling machines for water, beverages, sauces, and pharmaceutical products.",
    href: "/equipment/filling-packaging/filling-machines",
  },
  {
    icon: Container,
    title: "Tanks & Vessels",
    description: "Stainless steel tanks, fermentation tanks, extraction vessels, and zinc aluminium storage solutions.",
    href: "/equipment/tanks-vessels",
  },
  {
    icon: Wrench,
    title: "Services & Support",
    description: "Installation, commissioning, maintenance, and spare parts supply across the UAE.",
    href: "/about/our-track-record",
  },
]

const stats = [
  { value: "200+", label: "Projects Completed", icon: CheckCircle },
  { value: "9", label: "Countries Served", icon: Globe },
  { value: "13+", label: "Years of Experience", icon: Award },
  { value: "4-6 wk", label: "Typical Delivery", icon: Building2 },
]

const homeFaqs = [
  {
    question: "What types of industrial equipment does Pacific Unity supply in the UAE?",
    answer:
      "Pacific Unity supplies feed processing equipment (pellet mills, hammer mills, mixers, extruders), water treatment plants and RO systems, filling and packaging machines (rotary, piston, linear filling; BOPP, shrink, and sticker labeling), stainless steel tanks, fermentation vessels, extraction vessels, and zinc aluminium storage tanks. We serve industries across the UAE including poultry farming, aquaculture, beverage manufacturing, and food processing.",
  },
  {
    question: "Does Pacific Unity provide installation services in Dubai and the UAE?",
    answer:
      "Yes, Pacific Unity provides full installation and commissioning services for all equipment we supply across the UAE. Our technical team handles everything from plant layout consulting and equipment delivery through to on-site installation, testing, and commissioning. We also provide operator training as part of every installation project. Typical installation timelines range from 1 to 8 weeks depending on the scale of the project.",
  },
  {
    question: "What is Pacific Unity's experience and track record?",
    answer:
      "Pacific Unity is backed by North Star Impex, established in Singapore in 2013 with over 200 completed projects across 9 countries including Ghana, Senegal, Ivory Coast, Burkina Faso, Kenya, Ethiopia, India, China, and Singapore. Our completed projects include a 1-2 TPH poultry and fish feed processing plant in Ghana, 20 million litre ethanol storage infrastructure in West Africa, a complete packaged drinking water bottling plant, and pharmaceutical-grade herbal extraction processing units. We are now bringing this proven expertise to the UAE and wider GCC market.",
  },
]

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <FAQPageSchema faqs={homeFaqs} />

        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/50 px-4 py-20 md:px-6 md:py-28">
          <div className="mx-auto max-w-7xl">
            <Badge variant="secondary" className="mb-4">
              Proven in West Africa — Now Serving the UAE
            </Badge>
            <h1 className="max-w-4xl text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              Industrial Equipment Supplier in Dubai &amp; UAE
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
              Feed processing, water treatment, filling &amp; packaging, and stainless steel
              tank equipment — supplied, installed, and supported across the United Arab Emirates.
              Backed by 200+ projects across 9 countries.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <Link href="/equipment/water-beverage/water-treatment/">
                  Explore Equipment <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/request-quote/">Request a Quote</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="border-y bg-muted/30 px-4 py-12 md:px-6">
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <stat.icon className="mx-auto mb-2 h-6 w-6 text-primary" />
                <p className="text-3xl font-bold">{stat.value}</p>
                <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Equipment Categories */}
        <section className="px-4 py-16 md:px-6 md:py-20">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-3xl font-bold tracking-tight">Our Equipment Categories</h2>
            <p className="mt-2 max-w-2xl text-muted-foreground">
              From water treatment plants to feed pellet mills — complete industrial equipment
              solutions for the UAE market.
            </p>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {categories.map((cat) => (
                <Link key={cat.href} href={cat.href} className="group">
                  <Card className="h-full transition-shadow hover:shadow-lg">
                    <CardContent className="p-6">
                      <cat.icon className="h-10 w-10 text-primary" />
                      <h3 className="mt-4 text-lg font-semibold group-hover:text-primary transition-colors">
                        {cat.title}
                      </h3>
                      <p className="mt-2 text-sm text-muted-foreground">{cat.description}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Track Record */}
        <section className="bg-muted/30 px-4 py-16 md:px-6 md:py-20">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-3xl font-bold tracking-tight">Proven Track Record</h2>
            <p className="mt-2 max-w-2xl text-muted-foreground">
              From a 1-2 TPH feed processing plant in Ghana to 20 million litres of ethanol
              storage in West Africa — we deliver results.
            </p>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <Card>
                <CardContent className="p-6">
                  <Badge className="mb-3">Feed Processing</Badge>
                  <h3 className="text-lg font-semibold">Poultry &amp; Fish Feed Plant — Ghana</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Delivered a complete 1-2 TPH dual-line feed processing plant for Yedid Agro in
                    Sunyani, Ghana. Equipment included hammer mills, feed mixers, pellet mills, and
                    a twin-screw fish feed extruder with silos and conveying systems.
                  </p>
                  <Link href="/about/our-track-record/" className="mt-4 inline-flex items-center text-sm font-medium text-primary hover:underline">
                    View all projects <ArrowRight className="ml-1 h-3.5 w-3.5" />
                  </Link>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <Badge className="mb-3">Tanks &amp; Storage</Badge>
                  <h3 className="text-lg font-semibold">20 Million Litre Storage — West Africa</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Built and installed 20 million litres of ethanol storage tanks plus 7.5 million
                    litres of water storage for Casa Praco. Included stainless steel process tanks
                    and soya oil storage — one of the largest installations in our portfolio.
                  </p>
                  <Link href="/about/our-track-record/" className="mt-4 inline-flex items-center text-sm font-medium text-primary hover:underline">
                    View all projects <ArrowRight className="ml-1 h-3.5 w-3.5" />
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="px-4 py-16 md:px-6 md:py-20">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight">Frequently Asked Questions</h2>
            <FAQAccordion faqs={homeFaqs} className="mt-8" />
          </div>
        </section>

        {/* CTA */}
        <section className="px-4 pb-16 md:px-6 md:pb-20">
          <div className="mx-auto max-w-7xl">
            <CTAStrip />
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFAB />
    </>
  )
}
