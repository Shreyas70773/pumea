"use client"

import { useEffect, useMemo, useState } from "react"
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
  const [isLoggedIn] = useState(() => {
    if (typeof window === "undefined") return false
    return window.localStorage.getItem("pacificunity.admin.loggedIn") === "true"
  })
  const [title, setTitle] = useState("")
  const [excerpt, setExcerpt] = useState("")
  const [author, setAuthor] = useState("Pacific Unity Team")
  const [content, setContent] = useState("")
  const [seoTitle, setSeoTitle] = useState("")
  const [metaDescription, setMetaDescription] = useState("")
  const [focusKeyword, setFocusKeyword] = useState("")
  const [publishedAt, setPublishedAt] = useState(new Date().toISOString().slice(0, 10))
  const [error, setError] = useState("")

  const previewSlug = useMemo(() => toSlug(title || "new-post"), [title])

  useEffect(() => {
    if (!isLoggedIn) {
      router.replace("/admin/login?next=/admin/blog/")
    }
  }, [isLoggedIn, router])

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
      seoTitle: seoTitle.trim() || undefined,
      metaDescription: metaDescription.trim() || undefined,
      focusKeyword: focusKeyword.trim() || undefined,
    }

    const existingStored = readStoredBlogPosts()
    const updatedStored = mergeAndSortBlogPosts([...existingStored, newPost])
    writeStoredBlogPosts(updatedStored)

    router.push(`/blog/?post=${slug}`)
  }

  if (!isLoggedIn) {
    return (
      <section className="px-4 pb-12 pt-8 md:px-6 md:pb-16 md:pt-12">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm text-muted-foreground">Checking admin access...</p>
        </div>
      </section>
    )
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

                <div className="space-y-3 rounded-lg border bg-muted/20 p-4">
                  <h2 className="text-sm font-semibold">SEO Options</h2>
                  <div className="space-y-2">
                    <label htmlFor="seoTitle" className="text-sm font-medium">SEO Title</label>
                    <Input
                      id="seoTitle"
                      value={seoTitle}
                      onChange={(event) => setSeoTitle(event.target.value)}
                      placeholder="Optional. Overrides the article title in search snippets."
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="metaDescription" className="text-sm font-medium">Meta Description</label>
                    <Textarea
                      id="metaDescription"
                      value={metaDescription}
                      onChange={(event) => setMetaDescription(event.target.value)}
                      rows={3}
                      placeholder="Optional. Short search description (around 140–160 chars)."
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="focusKeyword" className="text-sm font-medium">Focus Keyword</label>
                    <Input
                      id="focusKeyword"
                      value={focusKeyword}
                      onChange={(event) => setFocusKeyword(event.target.value)}
                      placeholder="Optional. Primary keyword for this post."
                    />
                  </div>
                </div>

                <p className="text-xs text-muted-foreground">Slug preview: /blog/{previewSlug}/</p>

                {error && <p className="text-sm text-destructive">{error}</p>}

                <div className="flex flex-col gap-3 sm:flex-row">
                  <Button type="submit">Publish Post</Button>
                  <Button asChild type="button" variant="outline">
                    <Link href="/blog/">Back to Blog</Link>
                  </Button>
                  <Button
                    type="button"
                    variant="ghost"
                    onClick={() => {
                      window.localStorage.removeItem("pacificunity.admin.loggedIn")
                      router.push("/admin/login")
                    }}
                  >
                    Log out
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
