# Next.js + Convex Setup Guide for Pacific Unity MEA

**Quick Start Guide for Development Team**

---

## 🚀 INITIAL SETUP

### 1. Create Next.js Project

```bash
npx create-next-app@latest pacific-unity --typescript --tailwind --app --no-src-dir
cd pacific-unity
```

### 2. Install Convex

```bash
npm install convex
npx convex dev
```

This will:
- Create `convex/` directory
- Set up Convex configuration
- Generate authentication files

### 3. Install Additional Dependencies

```bash
npm install @convex-dev/react
npm install @radix-ui/react-dialog @radix-ui/react-select
npm install lucide-react
npm install zod
npm install react-hook-form @hookform/resolvers
```

### 4. Configure Environment Variables

Create `.env.local`:
```env
NEXT_PUBLIC_CONVEX_URL=your-convex-url
CONVEX_DEPLOY_KEY=your-deploy-key
```

---

## 📁 PROJECT STRUCTURE SETUP

### Create Directory Structure

```bash
mkdir -p app/{equipment,solutions,services,resources,locations}
mkdir -p components/{layout,ui,product,forms,sections,calculators,seo}
mkdir -p lib
mkdir -p public/images/{logo,products,solutions,icons}
mkdir -p convex
```

---

## 🔧 CONVEX DATABASE SETUP

### 1. Define Schema (`convex/schema.ts`)

```typescript
import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  products: defineTable({
    name: v.string(),
    slug: v.string(),
    category: v.string(),
    subcategory: v.optional(v.string()),
    description: v.string(),
    specifications: v.any(),
    images: v.array(v.string()),
    priceRange: v.optional(v.string()),
    seoTitle: v.string(),
    seoDescription: v.string(),
    priority: v.number(),
    createdAt: v.number(),
  })
    .index("by_slug", ["slug"])
    .index("by_category", ["category"])
    .index("by_priority", ["priority"]),

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
  })
    .index("by_slug", ["slug"])
    .index("by_type", ["type"]),

  caseStudies: defineTable({
    title: v.string(),
    slug: v.string(),
    content: v.string(),
    images: v.array(v.string()),
    projectType: v.string(),
    createdAt: v.number(),
  })
    .index("by_slug", ["slug"]),

  blogPosts: defineTable({
    title: v.string(),
    slug: v.string(),
    content: v.string(),
    excerpt: v.string(),
    author: v.string(),
    publishedAt: v.number(),
    tags: v.array(v.string()),
  })
    .index("by_slug", ["slug"])
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

### 2. Create Queries (`convex/products.ts`)

```typescript
import { query } from "./_generated/server";
import { v } from "convex/values";

export const getBySlug = query({
  args: { slug: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("products")
      .withIndex("by_slug", (q) => q.eq("slug", args.slug))
      .first();
  },
});

export const getByCategory = query({
  args: { category: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("products")
      .withIndex("by_category", (q) => q.eq("category", args.category))
      .collect();
  },
});

export const getTopPriority = query({
  args: { limit: v.optional(v.number()) },
  handler: async (ctx, args) => {
    const limit = args.limit ?? 10;
    return await ctx.db
      .query("products")
      .withIndex("by_priority")
      .order("desc")
      .take(limit);
  },
});
```

### 3. Create Mutations (`convex/products.ts`)

```typescript
import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const create = mutation({
  args: {
    name: v.string(),
    slug: v.string(),
    category: v.string(),
    description: v.string(),
    seoTitle: v.string(),
    seoDescription: v.string(),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("products", {
      ...args,
      specifications: {},
      images: [],
      createdAt: Date.now(),
      priority: 0,
    });
  },
});
```

---

## 🎨 COMPONENT SETUP

### 1. Root Layout (`app/layout.tsx`)

```typescript
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ConvexClientProvider } from "@/components/providers/ConvexProvider";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pacific Unity MEA | Industrial Equipment Supplier Dubai",
  description: "Premium industrial equipment supplier in Dubai & UAE",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ConvexClientProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </ConvexClientProvider>
      </body>
    </html>
  );
}
```

### 2. Convex Provider (`components/providers/ConvexProvider.tsx`)

```typescript
"use client";

import { ConvexProvider, ConvexReactClient } from "convex/react";
import { ReactNode } from "react";

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

export function ConvexClientProvider({ children }: { children: ReactNode }) {
  return <ConvexProvider client={convex}>{children}</ConvexProvider>;
}
```

---

## 📄 PAGE EXAMPLE

### Product Page (`app/equipment/feed-processing/pellet-mills/gear-drive-pellet-mill/page.tsx`)

```typescript
import { Metadata } from "next";
import { api } from "@/convex/_generated/api";
import { preloadQuery } from "convex/nextjs";
import ProductDetails from "@/components/product/ProductDetails";

export async function generateMetadata(): Promise<Metadata> {
  const preloaded = await preloadQuery(api.products.getBySlug, {
    slug: "gear-drive-pellet-mill",
  });

  const product = await preloaded._valueJSON();

  return {
    title: product?.seoTitle || "Gear Drive Pellet Mill Dubai",
    description: product?.seoDescription || "Premium gear drive pellet mill",
  };
}

export default async function GearDrivePelletMillPage() {
  const preloaded = await preloadQuery(api.products.getBySlug, {
    slug: "gear-drive-pellet-mill",
  });

  return <ProductDetails preloaded={preloaded} />;
}
```

---

## 🎯 DEVELOPMENT WORKFLOW

### 1. Start Development Servers

```bash
# Terminal 1: Next.js dev server
npm run dev

# Terminal 2: Convex dev server
npx convex dev
```

### 2. Access Applications

- Next.js: http://localhost:3000
- Convex Dashboard: https://dashboard.convex.dev

### 3. Add Data to Convex

Use Convex Dashboard or create seed script:

```typescript
// convex/seed.ts
import { mutation } from "./_generated/server";

export const seedProducts = mutation({
  handler: async (ctx) => {
    // Add your product data here
    await ctx.db.insert("products", {
      name: "Gear Drive Pellet Mill",
      slug: "gear-drive-pellet-mill",
      category: "feed-processing",
      subcategory: "pellet-mills",
      description: "...",
      seoTitle: "Gear Drive Pellet Mill Dubai | Pacific Unity",
      seoDescription: "...",
      specifications: {},
      images: [],
      priority: 31,
      createdAt: Date.now(),
    });
  },
});
```

---

## 📦 DEPLOYMENT

### 1. Build for Production

```bash
npm run build
```

### 2. Deploy Convex

```bash
npx convex deploy
```

### 3. Deploy Next.js

**Vercel (Recommended):**
```bash
npm install -g vercel
vercel
```

**Other Platforms:**
- Netlify
- AWS Amplify
- Self-hosted (Node.js server)

---

## 🔍 SEO SETUP

### 1. Dynamic Sitemap (`app/sitemap.ts`)

```typescript
import { MetadataRoute } from "next";
import { api } from "@/convex/_generated/api";
import { preloadQuery } from "convex/nextjs";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const products = await preloadQuery(api.products.getAll);
  const solutions = await preloadQuery(api.solutions.getAll);

  const productUrls = (await products._valueJSON()).map((product) => ({
    url: `https://pacificunity.ae/equipment/${product.slug}`,
    lastModified: new Date(product.createdAt),
  }));

  const solutionUrls = (await solutions._valueJSON()).map((solution) => ({
    url: `https://pacificunity.ae/solutions/${solution.slug}`,
    lastModified: new Date(solution.createdAt),
  }));

  return [
    {
      url: "https://pacificunity.ae",
      lastModified: new Date(),
    },
    ...productUrls,
    ...solutionUrls,
  ];
}
```

### 2. Robots.txt (`app/robots.ts`)

```typescript
import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin/", "/api/"],
    },
    sitemap: "https://pacificunity.ae/sitemap.xml",
  };
}
```

---

## ✅ CHECKLIST

- [ ] Next.js project created
- [ ] Convex installed and configured
- [ ] Database schema defined
- [ ] Root layout created
- [ ] Convex provider setup
- [ ] Homepage created
- [ ] Header/Footer components
- [ ] First product page
- [ ] Forms setup
- [ ] SEO metadata configured
- [ ] Environment variables set
- [ ] Ready for development!

---

**This setup provides a modern, lightweight, type-safe foundation for the Pacific Unity MEA website!** 🚀

