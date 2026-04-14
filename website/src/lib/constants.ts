export const SITE_URL = "https://pacificunity.ae"
export const SITE_NAME = "Pacific Unity MEA"
export const SITE_LEGAL_NAME = "PACIFIC UNITY MEA FZ-LLC"

export const NAP = {
  name: "Pacific Unity",
  legalName: "PACIFIC UNITY MEA FZ-LLC",
  address: {
    street: "Compass Building, Al Shohada Road",
    area: "AL Hamra Industrial Zone-FZ",
    city: "Ras Al Khaimah",
    country: "United Arab Emirates",
    postCode: "FAMC1871",
  },
  phone: "+971 54 350 9370",
  phoneClean: "971543509370",
  email: "info@pacificunity.ae",
  whatsapp: "971543509370",
} as const

export const SOCIAL = {
  linkedin: "https://linkedin.com/company/pacific-unity-mea",
  whatsapp: `https://wa.me/${NAP.whatsapp}`,
} as const

export const NAV_ITEMS = [
  {
    label: "Equipment",
    href: "/equipment",
    children: [
      { label: "Water Treatment", href: "/equipment/water-beverage/water-treatment" },
      { label: "Filling Machines", href: "/equipment/filling-packaging/filling-machines" },
      { label: "Labeling Machines", href: "/equipment/filling-packaging/labeling-machines" },
      { label: "Pellet Mills", href: "/equipment/feed-processing/pellet-mills" },
      { label: "Hammer Mills", href: "/equipment/feed-processing/crushers/hammer-mill" },
      { label: "Tanks & Vessels", href: "/equipment/tanks-vessels" },
    ],
  },
  {
    label: "Industries",
    href: "/industries",
    children: [
      { label: "Poultry & Livestock", href: "/industries/poultry-livestock" },
      { label: "Aquaculture", href: "/industries/aquaculture" },
      { label: "Beverage Manufacturing", href: "/industries/beverage-manufacturing" },
      { label: "Food Processing", href: "/industries/food-processing" },
    ],
  },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about/our-track-record" },
] as const

export const WHATSAPP_DEFAULT_MESSAGE = "Hi, I found your website and I'm interested in learning more about your industrial equipment."

export function getWhatsAppUrl(message?: string) {
  const msg = encodeURIComponent(message ?? WHATSAPP_DEFAULT_MESSAGE)
  return `https://wa.me/${NAP.whatsapp}?text=${msg}`
}
