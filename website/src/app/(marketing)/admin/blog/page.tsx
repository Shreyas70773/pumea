"use client"

import { useMemo, useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import { SectionHeading } from "@/components/shared/section-heading"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { type BlogPost } from "@/lib/blog"
import {
  getAllClientVisiblePosts,
  mergeAndSortBlogPosts,
  readStoredBlogPosts,
  toSlug,
  writeStoredBlogPosts,
} from "@/lib/blog-storage"

export default function AdminBlogPage() {
  const router = useRouter()
  const [title, setTitle] = useState("")
  const [excerpt, setExcerpt] = useState("")
  const [author, setAuthor] = useState("Pacific Unity Team")
  const [content, setContent] = useState("")
  const [publishedAt, setPublishedAt] = useState(new Date().toISOString().slice(0, 10))
  const [error, setError] = useState("")

  const previewSlug = useMemo(() => toSlug(title || "new-post"), [title])

  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Admin", href: "/admin/blog/" },
    { name: "Blog Upload", href: "/admin/blog/" },
  ]

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setError("")

    if (!title.trim() || !excerpt.trim() || !content.trim() || !author.trim()) {
      setError("Please fill in title, excerpt, content, and author.")
      return
    }

    const slug = toSlug(title)
    if (!slug) {
      setError("Could not generate a valid slug from title.")
      return
    }

    const allVisible = getAllClientVisiblePosts()
    if (allVisible.some((post) => post.slug === slug)) {
      setError("A post with this slug already exists. Please change the title.")
      return
    }

    const newPost: BlogPost = {
      slug,
      title: title.trim(),
      excerpt: excerpt.trim(),
      content: content.trim(),
      author: author.trim(),
      publishedAt,
    }

    const existingStored = readStoredBlogPosts()
    const updatedStored = mergeAndSortBlogPosts([...existingStored, newPost])
    writeStoredBlogPosts(updatedStored)

    router.push(`/blog/?post=${slug}`)
  }

  return (
    <>
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <Breadcrumbs items={breadcrumbs} />
      </div>

      <section className="px-4 pb-12 pt-8 md:px-6 md:pb-16 md:pt-12">
        <div className="mx-auto max-w-4xl">
          <SectionHeading
            title="Admin: Upload Blog Post"
            subtitle="Create and publish a blog article directly from the browser. Posts are stored in local browser storage for this prototype."
          />

          <Card>
            <CardContent className="p-6">
              <form className="space-y-5" onSubmit={onSubmit}>
                <div className="space-y-2">
                  <label htmlFor="title" className="text-sm font-medium">Title</label>
                  <Input id="title" value={title} onChange={(event) => setTitle(event.target.value)} placeholder="e.g. Feed Mill Maintenance Checklist for UAE Plants" />
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="author" className="text-sm font-medium">Author</label>
                    <Input id="author" value={author} onChange={(event) => setAuthor(event.target.value)} />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="publishedAt" className="text-sm font-medium">Publish Date</label>
                    <Input id="publishedAt" type="date" value={publishedAt} onChange={(event) => setPublishedAt(event.target.value)} />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="excerpt" className="text-sm font-medium">Excerpt</label>
                  <Textarea id="excerpt" value={excerpt} onChange={(event) => setExcerpt(event.target.value)} rows={3} placeholder="A short summary shown on the blog listing page." />
                </div>

                <div className="space-y-2">
                  <label htmlFor="content" className="text-sm font-medium">Content</label>
                  <Textarea id="content" value={content} onChange={(event) => setContent(event.target.value)} rows={10} placeholder="Write the full article here. Use blank lines between paragraphs." />
                </div>

                <p className="text-xs text-muted-foreground">Slug preview: /blog/{previewSlug}/</p>

                {error && <p className="text-sm text-destructive">{error}</p>}

                <div className="flex flex-col gap-3 sm:flex-row">
                  <Button type="submit">Publish Post</Button>
                  <Button asChild type="button" variant="outline">
                    <Link href="/blog/">Back to Blog</Link>
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  )
}
