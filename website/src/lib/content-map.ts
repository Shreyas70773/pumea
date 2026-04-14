export type IntentStage = "tofu" | "mofu" | "bofu"

export type Solution = {
  slug: string
  title: string
  summary: string
  outcomes: string[]
  relatedSystems: string[]
  relatedIndustries: string[]
  relatedEquipment: Array<{ label: string; href: string }>
}

export type SystemType = {
  slug: string
  title: string
  summary: string
  components: Array<{ label: string; href: string }>
  idealForIndustries: string[]
  ctaIntent: IntentStage
}

export type CaseStudy = {
  slug: string
  title: string
  industry: string
  location: string
  challenge: string
  solution: string
  outcomes: string[]
  relatedSolutionSlug: string
  relatedSystemSlug: string
}

export const SOLUTIONS: Solution[] = [
  {
    slug: "feed-mill-modernization",
    title: "Feed Mill Modernization",
    summary: "Upgrade legacy feed lines to improve throughput, consistency, and operating efficiency.",
    outcomes: [
      "Increase hourly throughput with bottleneck removal",
      "Reduce rework via better grind/mix/pellet control",
      "Lower energy and maintenance overhead",
    ],
    relatedSystems: ["feed-production-line"],
    relatedIndustries: ["poultry-livestock", "aquaculture"],
    relatedEquipment: [
      { label: "Pellet Mills", href: "/equipment/feed-processing/pellet-mills/" },
      { label: "Hammer Mills", href: "/equipment/feed-processing/crushers/hammer-mill/" },
      { label: "Feed Mixers", href: "/equipment/feed-processing/feed-mixers/" },
    ],
  },
  {
    slug: "water-quality-compliance",
    title: "Water Quality Compliance",
    summary: "Design compliant process water systems for food, beverage, and industrial production.",
    outcomes: [
      "Meet target process-water quality specs",
      "Improve consistency across production shifts",
      "Reduce line interruptions from utility issues",
    ],
    relatedSystems: ["water-treatment-plant"],
    relatedIndustries: ["beverage-manufacturing", "food-processing"],
    relatedEquipment: [
      { label: "Water Treatment", href: "/equipment/water-beverage/water-treatment/" },
      { label: "Reverse Osmosis", href: "/equipment/water-beverage/water-treatment/reverse-osmosis/" },
      { label: "Desalination Plant", href: "/equipment/water-beverage/water-treatment/desalination-plant/" },
    ],
  },
  {
    slug: "packaging-line-automation",
    title: "Packaging Line Automation",
    summary: "Integrate filling, capping, and labeling modules to stabilize output and reduce manual dependency.",
    outcomes: [
      "Increase packaging line uptime",
      "Improve fill/label consistency",
      "Scale SKU handling with predictable changeovers",
    ],
    relatedSystems: ["beverage-filling-line", "labeling-packaging-line"],
    relatedIndustries: ["beverage-manufacturing", "food-processing"],
    relatedEquipment: [
      { label: "Filling Machines", href: "/equipment/filling-packaging/filling-machines/" },
      { label: "Capping Machines", href: "/equipment/filling-packaging/capping-machines/" },
      { label: "Labeling Machines", href: "/equipment/filling-packaging/labeling-machines/" },
    ],
  },
]

export const SYSTEMS: SystemType[] = [
  {
    slug: "feed-production-line",
    title: "Feed Production Line",
    summary: "A full feed line combining grinding, mixing, pelletizing, cooling, and packaging modules.",
    components: [
      { label: "Hammer Mills", href: "/equipment/feed-processing/crushers/hammer-mill/" },
      { label: "Feed Mixers", href: "/equipment/feed-processing/feed-mixers/" },
      { label: "Pellet Mills", href: "/equipment/feed-processing/pellet-mills/" },
    ],
    idealForIndustries: ["poultry-livestock", "aquaculture"],
    ctaIntent: "mofu",
  },
  {
    slug: "beverage-filling-line",
    title: "Beverage Filling Line",
    summary: "Integrated water treatment, filling, capping, and labeling for beverage production workflows.",
    components: [
      { label: "Water Treatment", href: "/equipment/water-beverage/water-treatment/" },
      { label: "Filling Machines", href: "/equipment/filling-packaging/filling-machines/" },
      { label: "Capping Machines", href: "/equipment/filling-packaging/capping-machines/" },
    ],
    idealForIndustries: ["beverage-manufacturing"],
    ctaIntent: "mofu",
  },
  {
    slug: "water-treatment-plant",
    title: "Water Treatment Plant",
    summary: "End-to-end utility system for filtration, RO, disinfection, and process-ready output.",
    components: [
      { label: "Water Treatment", href: "/equipment/water-beverage/water-treatment/" },
      { label: "RO Systems", href: "/equipment/water-beverage/water-treatment/reverse-osmosis/" },
      { label: "Desalination Plants", href: "/equipment/water-beverage/water-treatment/desalination-plant/" },
    ],
    idealForIndustries: ["food-processing", "beverage-manufacturing"],
    ctaIntent: "bofu",
  },
]

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "ghana-feed-line-expansion",
    title: "1–2 TPH Feed Line Expansion — Ghana",
    industry: "Poultry & Aquaculture",
    location: "Sunyani, Ghana",
    challenge: "Scale feed output while supporting both poultry and fish-feed workflows.",
    solution: "Combined pellet mill + fish feed extrusion-ready architecture with mixer and grinding upgrades.",
    outcomes: ["Improved line consistency", "Dual-segment feed capability", "Faster commissioning"],
    relatedSolutionSlug: "feed-mill-modernization",
    relatedSystemSlug: "feed-production-line",
  },
  {
    slug: "uae-beverage-line-optimization",
    title: "Beverage Line Optimization — UAE",
    industry: "Beverage Manufacturing",
    location: "Dubai, UAE",
    challenge: "Reduce downtime from disconnected utility and packaging modules.",
    solution: "Integrated water treatment + filling + capping + labeling with unified process handover.",
    outcomes: ["Lower stoppage frequency", "More stable quality output", "Shorter response cycle"],
    relatedSolutionSlug: "packaging-line-automation",
    relatedSystemSlug: "beverage-filling-line",
  },
]

export const COMPARE_PAGES = [
  {
    a: "gear-drive-pellet-mill",
    b: "belt-driven-pellet-mill",
    title: "Gear Drive vs Belt Driven Pellet Mill",
    description: "Compare drivetrain options for throughput, maintenance, and lifecycle suitability.",
  },
]

export const BEST_PAGES = [
  {
    product: "pellet-mill",
    useCase: "aquaculture",
    title: "Best Pellet Mill for Aquaculture",
    description: "Selection criteria for aquaculture-focused feed production and expansion planning.",
  },
]

export const COST_PAGES = [
  {
    solution: "feed-production-line",
    location: "uae",
    title: "Feed Production Line Cost in UAE",
    description: "Planning ranges and key cost drivers for feed line deployments in the UAE.",
  },
]

export const INDUSTRY_APPLICATIONS = [
  {
    industry: "poultry-livestock",
    application: "feed-line-design",
    title: "Poultry & Livestock Feed Line Design",
    description: "Design priorities and module selection for poultry and livestock feed operations.",
    links: [
      { label: "Feed Production System", href: "/systems/feed-production-line/" },
      { label: "Pellet Mills", href: "/equipment/feed-processing/pellet-mills/" },
    ],
  },
  {
    industry: "beverage-manufacturing",
    application: "line-integration",
    title: "Beverage Line Integration",
    description: "Integrating utilities and packaging modules for stable beverage production output.",
    links: [
      { label: "Beverage Filling Line", href: "/systems/beverage-filling-line/" },
      { label: "Filling Machines", href: "/equipment/filling-packaging/filling-machines/" },
    ],
  },
]

export const RESOURCES = [
  {
    slug: "feed-mill-capacity-planning-guide",
    title: "Feed Mill Capacity Planning Guide",
    type: "guide",
    summary: "A practical planning framework for selecting module capacities and shift assumptions.",
  },
  {
    slug: "water-treatment-spec-sheet-template",
    title: "Water Treatment Spec Sheet Template",
    type: "spec-sheet",
    summary: "A template to align utility specs, quality targets, and procurement requirements.",
  },
  {
    slug: "budget-estimation-checklist",
    title: "Budget Estimation Checklist",
    type: "calculator",
    summary: "Input checklist for estimating budget ranges by system scope and throughput.",
  },
]

export function getSolutionBySlug(slug: string) {
  return SOLUTIONS.find((item) => item.slug === slug)
}

export function getSystemBySlug(slug: string) {
  return SYSTEMS.find((item) => item.slug === slug)
}

export function getCaseStudyBySlug(slug: string) {
  return CASE_STUDIES.find((item) => item.slug === slug)
}
