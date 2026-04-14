"use client"

import { useMemo } from "react"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { defaultBlogPosts } from "@/lib/blog"
import { getAllClientVisiblePosts } from "@/lib/blog-storage"

export function BlogList() {
  const posts = useMemo(() => {
    if (typeof window === "undefined") {
      return defaultBlogPosts
    }

    return getAllClientVisiblePosts()
  }, [])

  return (
    <div className="grid gap-6 md:grid-cols-2">
      {posts.map((post) => (
        <Card key={post.slug}>
          <CardContent className="p-6">
            <p className="text-xs uppercase tracking-wide text-muted-foreground">
              {new Date(post.publishedAt).toLocaleDateString("en-AE", {
                day: "2-digit",
                month: "short",
                year: "numeric",
              })}
            </p>
            <h2 className="mt-2 text-xl font-semibold">{post.title}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{post.excerpt}</p>
            <p className="mt-2 text-xs text-muted-foreground">By {post.author}</p>
            <Link href={`/blog/?post=${post.slug}`} className="mt-4 inline-block text-sm font-medium text-primary hover:underline">
              Read article
            </Link>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
