# Pacific Unity MEA - Next.js + Convex File Structure

**Tech Stack:** Next.js 14+ (App Router), React, TypeScript, Convex Database  
**Approach:** Super lightweight, TSX only, no separate JS files

---

## 📁 ROOT DIRECTORY FILES

```
pacific-unity/
├── package.json
├── package-lock.json
├── tsconfig.json
├── next.config.js (or .ts)
├── tailwind.config.js (if using Tailwind)
├── postcss.config.js (if using PostCSS)
├── .env.local
├── .env.example
├── .gitignore
├── .eslintrc.json
├── .prettierrc
├── README.md
└── convex.json (Convex config)
```

---

## 📁 NEXT.JS APP DIRECTORY STRUCTURE

```
/app/
├── layout.tsx (Root layout)
├── page.tsx (Homepage)
├── about/
│   └── page.tsx
├── contact/
│   └── page.tsx
├── request-quote/
│   └── page.tsx
├── equipment/
│   ├── feed-processing/
│   │   ├── page.tsx (Category page)
│   │   ├── crushers/
│   │   │   ├── page.tsx (Crushers category)
│   │   │   ├── sfsp-water-drop-hammer-mill/
│   │   │   │   └── page.tsx
│   │   │   └── ultra-fine-pulverizer/
│   │   │       └── page.tsx
│   │   ├── mixers/
│   │   │   ├── page.tsx
│   │   │   └── twin-shaft-paddle-mixer/
│   │   │       └── page.tsx
│   │   ├── pellet-mills/
│   │   │   ├── page.tsx (Pellet Mills category)
│   │   │   ├── gear-drive-pellet-mill/
│   │   │   │   └── page.tsx
│   │   │   ├── belt-driven-pellet-mill/
│   │   │   │   └── page.tsx
│   │   │   ├── automatic-pellet-mill/
│   │   │   │   └── page.tsx
│   │   │   └── pellet-mill-price/
│   │   │       └── page.tsx
│   │   ├── extruders/
│   │   │   ├── page.tsx
│   │   │   ├── mfph-twin-screw-extruder/
│   │   │   │   └── page.tsx
│   │   │   └── phyl-raw-material-extruder/
│   │   │       └── page.tsx
│   │   ├── dryers/
│   │   │   ├── page.tsx
│   │   │   └── mfhg-steam-dryer/
│   │   │       └── page.tsx
│   │   ├── coaters/
│   │   │   ├── page.tsx
│   │   │   └── pellet-coater/
│   │   │       └── page.tsx
│   │   ├── coolers/
│   │   │   ├── page.tsx
│   │   │   └── feed-cooler/
│   │   │       └── page.tsx
│   │   ├── ripeners/
│   │   │   ├── page.tsx
│   │   │   └── feed-ripener/
│   │   │       └── page.tsx
│   │   ├── crumblers/
│   │   │   ├── page.tsx
│   │   │   └── pellet-crumbler/
│   │   │       └── page.tsx
│   │   ├── cleaners-sifters/
│   │   │   ├── page.tsx
│   │   │   └── cleaner-sifter/
│   │   │       └── page.tsx
│   │   ├── conveying-equipment/
│   │   │   ├── page.tsx
│   │   │   └── material-handling/
│   │   │       └── page.tsx
│   │   ├── dust-removal-equipment/
│   │   │   ├── page.tsx
│   │   │   └── dust-collection/
│   │   │       └── page.tsx
│   │   ├── silos-rear-truck-dumpers/
│   │   │   ├── page.tsx
│   │   │   ├── silos/
│   │   │   │   └── page.tsx
│   │   │   └── rear-truck-dumper/
│   │   │       └── page.tsx
│   │   ├── packaging-palletizing/
│   │   │   ├── page.tsx
│   │   │   ├── packaging-equipment/
│   │   │   │   └── page.tsx
│   │   │   └── palletizing-equipment/
│   │   │       └── page.tsx
│   │   ├── control-systems/
│   │   │   ├── page.tsx
│   │   │   └── computer-control-system/
│   │   │       └── page.tsx
│   │   ├── auxiliary-equipment/
│   │   │   ├── page.tsx
│   │   │   └── accessories/
│   │   │       └── page.tsx
│   │   └── animal-feed-premix/
│   │       ├── page.tsx
│   │       └── premix-equipment/
│   │           └── page.tsx
│   ├── water-beverage/
│   │   ├── page.tsx
│   │   ├── water-treatment/
│   │   │   ├── page.tsx
│   │   │   ├── reverse-osmosis-plant/
│   │   │   │   └── page.tsx
│   │   │   └── ro-plant-price/
│   │   │       └── page.tsx
│   │   ├── steam-boilers/
│   │   │   ├── page.tsx
│   │   │   └── steam-boiler/
│   │   │       └── page.tsx
│   │   ├── homogenizers-pasteurizers/
│   │   │   ├── page.tsx
│   │   │   └── homogenizer-pasteurizer/
│   │   │       └── page.tsx
│   │   └── carbonators-intermix/
│   │       ├── page.tsx
│   │       └── carbonator-intermix/
│   │           └── page.tsx
│   ├── filling-packaging/
│   │   ├── page.tsx
│   │   ├── filling-machines/
│   │   │   ├── page.tsx
│   │   │   ├── rotary-filling-machine/
│   │   │   │   └── page.tsx
│   │   │   ├── piston-filling-machine/
│   │   │   │   └── page.tsx
│   │   │   ├── cup-filling-machine/
│   │   │   │   └── page.tsx
│   │   │   └── linear-filling-machine/
│   │   │       └── page.tsx
│   │   ├── labeling-machines/
│   │   │   ├── page.tsx
│   │   │   ├── bopp-labeling/
│   │   │   │   └── page.tsx
│   │   │   ├── shrink-labeling/
│   │   │   │   └── page.tsx
│   │   │   ├── sticker-labeling/
│   │   │   │   └── page.tsx
│   │   │   └── tax-stamp-applicator/
│   │   │       └── page.tsx
│   │   └── pet-blowing/
│   │       ├── page.tsx
│   │       └── pet-blowing-machine/
│   │           └── page.tsx
│   └── tanks-vessels/
│       ├── page.tsx
│       ├── stainless-steel-tanks/
│       │   ├── page.tsx
│       │   ├── mixing-tanks/
│       │   │   └── page.tsx
│       │   ├── storage-tanks/
│       │   │   └── page.tsx
│       │   └── blending-vessels/
│       │       └── page.tsx
│       ├── fermentation-tanks/
│       │   ├── page.tsx
│       │   └── fermentation-tank/
│       │       └── page.tsx
│       ├── extraction-vessels/
│       │   ├── page.tsx
│       │   └── extraction-vessel/
│       │       └── page.tsx
│       └── zinc-aluminium-tanks/
│           ├── page.tsx
│           └── zinc-aluminium-tank/
│               └── page.tsx
├── solutions/
│   ├── feed-processing/
│   │   ├── animal-feed-pellet-line/
│   │   │   ├── page.tsx (Main page)
│   │   │   ├── [capacity]/
│   │   │   │   └── page.tsx (Dynamic route: 1-5-ton, 10-ton, etc.)
│   │   ├── aquatic-feed-production-line/
│   │   │   ├── page.tsx
│   │   │   ├── pellet-line/
│   │   │   │   └── page.tsx
│   │   │   └── extruded-line/
│   │   │       └── page.tsx
│   │   ├── pet-food-production-line/
│   │   │   └── page.tsx
│   │   └── biomass-pellet-line/
│   │       └── page.tsx
│   └── water-bottling-lines/
│       ├── page.tsx
│       └── water-filling-line/
│           └── page.tsx
├── services/
│   ├── page.tsx (Services overview)
│   ├── installation/
│   │   └── page.tsx
│   ├── maintenance/
│   │   └── page.tsx
│   ├── training/
│   │   └── page.tsx
│   ├── spare-parts/
│   │   └── page.tsx
│   └── commissioning/
│       └── page.tsx
├── resources/
│   ├── buying-guides/
│   │   ├── page.tsx
│   │   ├── how-to-choose-pellet-mill/
│   │   │   └── page.tsx
│   │   ├── how-to-choose-water-treatment-plant/
│   │   │   └── page.tsx
│   │   ├── feed-mill-capacity-selection/
│   │   │   └── page.tsx
│   │   ├── how-to-choose-filling-machine/
│   │   │   └── page.tsx
│   │   └── stainless-steel-tank-selection/
│   │       └── page.tsx
│   ├── comparison-guides/
│   │   ├── page.tsx
│   │   ├── gear-drive-vs-belt-driven-pellet-mill/
│   │   │   └── page.tsx
│   │   ├── rotary-vs-piston-filling-machine/
│   │   │   └── page.tsx
│   │   └── bopp-vs-shrink-labeling/
│   │       └── page.tsx
│   ├── case-studies/
│   │   ├── page.tsx
│   │   ├── [slug]/
│   │   │   └── page.tsx (Dynamic route)
│   ├── faq/
│   │   ├── page.tsx
│   │   ├── feed-processing/
│   │   │   └── page.tsx
│   │   ├── water-treatment/
│   │   │   └── page.tsx
│   │   └── packaging/
│   │       └── page.tsx
│   └── blog/
│       ├── page.tsx (Blog listing)
│       └── [slug]/
│           └── page.tsx (Dynamic route for blog posts)
└── locations/
    ├── page.tsx
    ├── dubai/
    │   └── page.tsx
    ├── uae/
    │   └── page.tsx
    ├── saudi-arabia/
    │   └── page.tsx
    └── riyadh/
        └── page.tsx
```

---

## 📁 COMPONENTS DIRECTORY

```
/components/
├── layout/
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── Navigation.tsx
│   └── Sidebar.tsx
├── ui/
│   ├── Button.tsx
│   ├── Card.tsx
│   ├── Input.tsx
│   ├── Textarea.tsx
│   ├── Select.tsx
│   ├── Modal.tsx
│   └── Loading.tsx
├── product/
│   ├── ProductCard.tsx
│   ├── ProductGrid.tsx
│   ├── ProductSpecs.tsx
│   ├── ProductGallery.tsx
│   └── ProductComparison.tsx
├── forms/
│   ├── ContactForm.tsx
│   ├── QuoteForm.tsx
│   └── NewsletterForm.tsx
├── sections/
│   ├── Hero.tsx
│   ├── Features.tsx
│   ├── Testimonials.tsx
│   ├── CTASection.tsx
│   └── TrustSignals.tsx
├── calculators/
│   ├── ROICalculator.tsx
│   └── CapacityCalculator.tsx
└── seo/
    ├── Breadcrumbs.tsx
    ├── SchemaMarkup.tsx
    └── MetaTags.tsx
```

---

## 📁 CONVEX DATABASE STRUCTURE

```
/convex/
├── schema.ts (Database schema)
├── products.ts (Product queries/mutations)
├── solutions.ts (Solution queries/mutations)
├── services.ts (Service queries/mutations)
├── caseStudies.ts (Case study queries/mutations)
├── blogPosts.ts (Blog post queries/mutations)
├── contacts.ts (Contact form submissions)
├── quotes.ts (Quote requests)
└── _generated/
    └── [auto-generated Convex files]
```

### Convex Schema Example (`convex/schema.ts`):
```typescript
import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  products: defineTable({
    name: v.string(),
    slug: v.string(),
    category: v.string(),
    description: v.string(),
    specifications: v.any(),
    images: v.array(v.string()),
    priceRange: v.optional(v.string()),
    seoTitle: v.string(),
    seoDescription: v.string(),
    createdAt: v.number(),
  }).index("by_slug", ["slug"])
    .index("by_category", ["category"]),

  solutions: defineTable({
    name: v.string(),
    slug: v.string(),
    type: v.string(),
    description: v.string(),
    capacity: v.optional(v.string()),
    equipment: v.array(v.string()),
    seoTitle: v.string(),
    seoDescription: v.string(),
    createdAt: v.number(),
  }).index("by_slug", ["slug"])
    .index("by_type", ["type"]),

  caseStudies: defineTable({
    title: v.string(),
    slug: v.string(),
    content: v.string(),
    images: v.array(v.string()),
    projectType: v.string(),
    createdAt: v.number(),
  }).index("by_slug", ["slug"]),

  blogPosts: defineTable({
    title: v.string(),
    slug: v.string(),
    content: v.string(),
    excerpt: v.string(),
    author: v.string(),
    publishedAt: v.number(),
    tags: v.array(v.string()),
  }).index("by_slug", ["slug"])
    .index("by_published", ["publishedAt"]),

  contacts: defineTable({
    name: v.string(),
    email: v.string(),
    phone: v.optional(v.string()),
    message: v.string(),
    submittedAt: v.number(),
  }),

  quotes: defineTable({
    name: v.string(),
    email: v.string(),
    phone: v.string(),
    product: v.optional(v.string()),
    message: v.string(),
    submittedAt: v.number(),
  }),
});
```

---

## 📁 STYLING (Tailwind CSS - Recommended)

```
/styles/
├── globals.css (Global styles, Tailwind imports)
└── components.css (Component-specific styles if needed)
```

**Note:** With Tailwind, most styling is done via className in TSX files. Minimal CSS files needed.

---

## 📁 UTILITIES & HELPERS

```
/lib/
├── utils.ts (Utility functions)
├── constants.ts (App constants)
├── types.ts (TypeScript types)
├── convex.ts (Convex client setup)
└── seo.ts (SEO helper functions)
```

---

## 📁 ASSETS

```
/public/
├── images/
│   ├── logo/
│   │   ├── logo.svg
│   │   └── logo.png
│   ├── products/
│   │   └── [product images...]
│   ├── solutions/
│   │   └── [solution images...]
│   └── icons/
│       └── [icon SVGs...]
├── favicon.ico
├── apple-touch-icon.png
├── robots.txt
└── sitemap.xml (or generate dynamically)
```

---

## 📁 CONFIGURATION FILES

### `package.json` (Dependencies):
```json
{
  "name": "pacific-unity",
  "version": "1.0.0",
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "convex:dev": "convex dev",
    "convex:deploy": "convex deploy"
  },
  "dependencies": {
    "next": "^14.0.0",
    "react": "^18.0.0",
    "react-dom": "^18.0.0",
    "convex": "^1.0.0",
    "@convex-dev/react": "^1.0.0"
  },
  "devDependencies": {
    "@types/node": "^20.0.0",
    "@types/react": "^18.0.0",
    "@types/react-dom": "^18.0.0",
    "typescript": "^5.0.0",
    "tailwindcss": "^3.4.0",
    "autoprefixer": "^10.4.0",
    "postcss": "^8.4.0",
    "eslint": "^8.0.0",
    "eslint-config-next": "^14.0.0"
  }
}
```

### `tsconfig.json`:
```json
{
  "compilerOptions": {
    "target": "ES2020",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

### `next.config.js`:
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['your-image-domain.com'],
    formats: ['image/webp', 'image/avif'],
  },
  // SEO: Generate sitemap dynamically
  async generateBuildId() {
    return 'pacific-unity-v1'
  },
}

module.exports = nextConfig
```

---

## 📁 FILE COUNT SUMMARY

### TSX Pages: ~120+ files
- All page.tsx files in app directory

### Components: ~30-40 TSX files
- Layout, UI, Product, Form, Section components

### Convex Functions: ~10-15 TS files
- Database queries, mutations, actions

### Configuration: ~10 files
- package.json, tsconfig.json, next.config.js, etc.

### Assets: 200+ files
- Images, icons, fonts

**Total: ~370+ files (much lighter than traditional setup)**

---

## 🚀 SETUP COMMANDS

```bash
# Initialize Next.js project
npx create-next-app@latest pacific-unity --typescript --tailwind --app

# Install Convex
npm install convex
npx convex dev

# Install additional dependencies
npm install @convex-dev/react

# Run development
npm run dev
# In separate terminal:
npx convex dev
```

---

## 📋 KEY FEATURES

1. **TypeScript Only:** All files are .tsx or .ts (no .js)
2. **Lightweight:** Minimal dependencies, Tailwind for styling
3. **Convex Integration:** Real-time database, no separate backend
4. **SEO Optimized:** Next.js App Router with metadata API
5. **Server Components:** Default to server components for performance
6. **Dynamic Routes:** Use [slug] for blog posts, case studies
7. **Image Optimization:** Next.js Image component
8. **Type Safety:** Full TypeScript coverage

---

## 🎯 FILE CREATION PRIORITY

### Phase 1 (Critical):
1. ✅ Root config files (package.json, tsconfig.json, next.config.js)
2. ✅ Convex setup (schema.ts, initial queries)
3. ✅ Layout components (Header, Footer, Navigation)
4. ✅ Homepage (app/page.tsx)
5. ✅ Top 10 priority product pages

### Phase 2 (High):
6. ✅ All product pages
7. ✅ Solution pages
8. ✅ Service pages
9. ✅ Forms (Contact, Quote)

### Phase 3 (Medium):
10. ✅ Resource pages
11. ✅ Location pages
12. ✅ Blog structure
13. ✅ Case studies

---

**END OF NEXT.JS + CONVEX FILE STRUCTURE**

This structure is optimized for Next.js 14+ with App Router, TypeScript, and Convex database - super lightweight and modern! 🚀

