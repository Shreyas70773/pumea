import { SITE_URL, NAP } from "@/lib/constants"

interface ProductSchemaProps {
  name: string
  description: string
  image: string
  url: string
  category: string
  brand?: string
}

export function ProductSchema({
  name,
  description,
  image,
  url,
  category,
  brand = NAP.name,
}: ProductSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name,
    description,
    image: `${SITE_URL}${image}`,
    url: `${SITE_URL}${url}`,
    brand: { "@type": "Brand", name: brand },
    category,
    manufacturer: { "@id": `${SITE_URL}/#organization` },
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "AED",
      priceSpecification: {
        "@type": "PriceSpecification",
        priceCurrency: "AED",
      },
      seller: { "@id": `${SITE_URL}/#organization` },
      areaServed: { "@type": "Country", name: "United Arab Emirates" },
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
