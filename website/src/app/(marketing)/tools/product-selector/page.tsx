"use client"

import { useState } from "react"
import Link from "next/link"

const options = {
  feed: "/equipment/feed-processing/pellet-mills/",
  water: "/equipment/water-beverage/water-treatment/",
  packaging: "/equipment/filling-packaging/filling-machines/",
}

export default function ProductSelectorPage() {
  const [value, setValue] = useState<keyof typeof options>("feed")

  return (
    <section className="mx-auto max-w-3xl px-4 pb-12 pt-10 md:px-6">
      <h1 className="text-3xl font-bold tracking-tight">Product Selector</h1>
      <p className="mt-2 text-sm text-muted-foreground">Choose your primary objective and jump to the most relevant category.</p>
      <div className="mt-6 rounded-xl border p-6">
        <select className="w-full rounded-md border p-2" value={value} onChange={(e) => setValue(e.target.value as keyof typeof options)}>
          <option value="feed">Feed Production</option>
          <option value="water">Water Treatment</option>
          <option value="packaging">Filling & Packaging</option>
        </select>

        <Link href={options[value]} className="mt-4 inline-block rounded-md border px-4 py-2 text-sm hover:bg-muted">
          Go to Recommended Category
        </Link>
      </div>
    </section>
  )
}
