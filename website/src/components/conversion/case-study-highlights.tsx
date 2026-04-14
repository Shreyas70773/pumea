import Link from "next/link"
import { CASE_STUDIES } from "@/lib/content-map"

export function CaseStudyHighlights() {
  return (
    <section className="rounded-xl border p-6 md:p-8">
      <h3 className="text-xl font-semibold">Related Project Highlights</h3>
      <div className="mt-4 grid gap-4 md:grid-cols-2">
        {CASE_STUDIES.map((study) => (
          <Link key={study.slug} href={`/case-studies/${study.slug}/`} className="rounded-lg border bg-muted/20 p-4 transition-colors hover:bg-muted/40">
            <p className="text-xs uppercase tracking-wide text-muted-foreground">{study.location}</p>
            <h4 className="mt-1 font-semibold">{study.title}</h4>
            <p className="mt-2 text-sm text-muted-foreground">{study.challenge}</p>
          </Link>
        ))}
      </div>
    </section>
  )
}
