import { SITE_URL, NAP, SOCIAL } from "@/lib/constants"

export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: NAP.name,
        legalName: NAP.legalName,
        url: SITE_URL,
        logo: `${SITE_URL}/images/logo.png`,
        contactPoint: {
          "@type": "ContactPoint",
          telephone: NAP.phone,
          contactType: "sales",
          email: NAP.email,
          areaServed: ["AE", "OM", "QA", "KW", "BH", "SA"],
          availableLanguage: ["English"],
        },
        sameAs: [SOCIAL.linkedin],
        description:
          "Industrial equipment supplier in the UAE specialising in feed processing, water treatment, filling & packaging, and stainless steel tanks.",
        foundingDate: "2025",
        numberOfEmployees: { "@type": "QuantitativeValue", minValue: 10 },
        knowsAbout: [
          "Water Treatment Plants",
          "Reverse Osmosis Systems",
          "Feed Pellet Mills",
          "Filling Machines",
          "Labeling Machines",
          "Stainless Steel Tanks",
        ],
      },
      {
        "@type": "LocalBusiness",
        "@id": `${SITE_URL}/#localbusiness`,
        name: NAP.name,
        url: SITE_URL,
        telephone: NAP.phone,
        email: NAP.email,
        address: {
          "@type": "PostalAddress",
          streetAddress: NAP.address.street,
          addressLocality: NAP.address.city,
          addressRegion: NAP.address.city,
          addressCountry: "AE",
          postalCode: NAP.address.postCode,
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 25.7953,
          longitude: 55.9431,
        },
        priceRange: "$$$",
        image: `${SITE_URL}/images/logo.png`,
        parentOrganization: { "@id": `${SITE_URL}/#organization` },
        areaServed: {
          "@type": "Country",
          name: "United Arab Emirates",
        },
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: NAP.name,
        publisher: { "@id": `${SITE_URL}/#organization` },
        inLanguage: "en",
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
