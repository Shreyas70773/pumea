import Link from "next/link"

type InternalLinkGridProps = {
  title: string
  subtitle?: string
  links: Array<{ label: string; href: string; description?: string }>
}

export function InternalLinkGrid({ title, subtitle, links }: InternalLinkGridProps) {
  return (
    <section className="rounded-xl border p-6 md:p-8">
      <h3 className="text-xl font-semibold">{title}</h3>
      {subtitle && <p className="mt-2 text-sm text-muted-foreground">{subtitle}</p>}
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        {links.map((item) => (
          <Link key={item.href} href={item.href} className="rounded-md border p-3 text-sm transition-colors hover:bg-muted">
            <p className="font-medium">{item.label}</p>
            {item.description && <p className="mt-1 text-muted-foreground">{item.description}</p>}
          </Link>
        ))}
      </div>
    </section>
  )
}
