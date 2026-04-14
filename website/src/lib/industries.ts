export type Industry = {
  slug: string
  name: string
  shortDescription: string
  intro: string
  keyNeeds: string[]
  recommendedLinks: Array<{ label: string; href: string }>
}

export const INDUSTRIES: Industry[] = [
  {
    slug: "poultry-livestock",
    name: "Poultry & Livestock",
    shortDescription: "Feed milling, water treatment, and storage solutions for poultry and livestock operations.",
    intro:
      "From farm-integrated feed plants to commercial feed mills, poultry and livestock operations need consistent feed quality, reliable uptime, and efficient handling systems.",
    keyNeeds: [
      "Pelletisation and grinding systems sized to daily feed demand",
      "Reliable mixers and process flow to maintain feed consistency",
      "Water treatment and storage systems for plant and utility operations",
    ],
    recommendedLinks: [
      { label: "Pellet Mills", href: "/equipment/feed-processing/pellet-mills/" },
      { label: "Hammer Mills", href: "/equipment/feed-processing/crushers/hammer-mill/" },
      { label: "Feed Mixers", href: "/equipment/feed-processing/feed-mixers/" },
    ],
  },
  {
    slug: "aquaculture",
    name: "Aquaculture",
    shortDescription: "Equipment for aquafeed production, water quality control, and process reliability.",
    intro:
      "Aquaculture production depends on precise feed formulation and stable process quality. The right combination of grinding, pelletising or extrusion, and utility systems improves output and feed performance.",
    keyNeeds: [
      "Fine grinding and controlled pellet/extruder process parameters",
      "Scalable lines for floating and sinking feed workflows",
      "Water treatment support for process and cleaning requirements",
    ],
    recommendedLinks: [
      { label: "Fish Feed Systems", href: "/equipment/feed-processing/pellet-mills/fish-feed/" },
      { label: "Pellet Mills", href: "/equipment/feed-processing/pellet-mills/" },
      { label: "Water Treatment", href: "/equipment/water-beverage/water-treatment/" },
    ],
  },
  {
    slug: "beverage-manufacturing",
    name: "Beverage Manufacturing",
    shortDescription: "Water treatment, filling, capping, and labeling systems for beverage production lines.",
    intro:
      "Beverage plants need integrated utilities and packaging modules that can maintain quality at speed, while supporting frequent format and SKU changes.",
    keyNeeds: [
      "RO and water treatment for consistent process water quality",
      "Filling and capping systems matched to required throughput",
      "Labeling and packaging line integration for smooth output flow",
    ],
    recommendedLinks: [
      { label: "Water Treatment", href: "/equipment/water-beverage/water-treatment/" },
      { label: "Filling Machines", href: "/equipment/filling-packaging/filling-machines/" },
      { label: "Labeling Machines", href: "/equipment/filling-packaging/labeling-machines/" },
    ],
  },
  {
    slug: "food-processing",
    name: "Food Processing",
    shortDescription: "Processing support equipment for hygiene, packaging, and utility reliability in food plants.",
    intro:
      "Food processing operations require hygienic system design, dependable utilities, and packaging performance to protect product quality and production continuity.",
    keyNeeds: [
      "Process water treatment and quality consistency",
      "Accurate and repeatable filling/capping for packaged products",
      "Storage and process tanks built for food-grade environments",
    ],
    recommendedLinks: [
      { label: "Water Treatment", href: "/equipment/water-beverage/water-treatment/" },
      { label: "Filling & Packaging", href: "/equipment/filling-packaging/" },
      { label: "Tanks & Vessels", href: "/equipment/tanks-vessels/" },
    ],
  },
]

export function getIndustryBySlug(slug: string) {
  return INDUSTRIES.find((industry) => industry.slug === slug)
}
