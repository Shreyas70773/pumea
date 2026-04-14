"use client"

import Link from "next/link"
import { useMemo } from "react"
import { useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { getAllClientVisiblePosts } from "@/lib/blog-storage"
import { BlogList } from "@/components/blog/blog-list"

export function BlogExperience() {
  const searchParams = useSearchParams()
  const selectedSlug = searchParams.get("post")

  const selectedPost = useMemo(() => {
    if (!selectedSlug) return null

    const posts = getAllClientVisiblePosts()
    return posts.find((post) => post.slug === selectedSlug) ?? null
  }, [selectedSlug])

  if (!selectedSlug) {
    return <BlogList />
  }

  if (!selectedPost) {
    return (
      <div className="rounded-xl border bg-muted/30 p-6 md:p-8">
        <h2 className="text-2xl font-semibold">Article not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          This post may not exist in your current browser storage.
        </p>
        <Button asChild className="mt-4" variant="outline">
          <Link href="/blog/">Back to all posts</Link>
        </Button>
      </div>
    )
  }

  return (
    <article className="rounded-xl border p-6 md:p-8">
      <p className="text-xs uppercase tracking-wide text-muted-foreground">
        {new Date(selectedPost.publishedAt).toLocaleDateString("en-AE", {
          day: "2-digit",
          month: "short",
          year: "numeric",
        })}
      </p>
      <h2 className="mt-2 text-3xl font-bold tracking-tight">{selectedPost.title}</h2>
      <p className="mt-2 text-sm text-muted-foreground">By {selectedPost.author}</p>

      <div className="mt-6 space-y-4 text-base leading-7 text-foreground/90">
        {selectedPost.content.split("\n\n").map((paragraph, index) => (
          <p key={`${selectedPost.slug}-${index}`}>{paragraph}</p>
        ))}
      </div>

      <div className="mt-8">
        <Button asChild variant="outline">
          <Link href="/blog/">Back to all posts</Link>
        </Button>
      </div>
    </article>
  )
}
