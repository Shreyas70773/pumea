"use client"

import { BLOG_STORAGE_KEY, defaultBlogPosts, type BlogPost } from "@/lib/blog"

function isBlogPost(value: unknown): value is BlogPost {
  if (!value || typeof value !== "object") return false

  const candidate = value as Record<string, unknown>
  return (
    typeof candidate.slug === "string" &&
    typeof candidate.title === "string" &&
    typeof candidate.excerpt === "string" &&
    typeof candidate.content === "string" &&
    typeof candidate.author === "string" &&
    typeof candidate.publishedAt === "string"
  )
}

export function readStoredBlogPosts(): BlogPost[] {
  try {
    const raw = window.localStorage.getItem(BLOG_STORAGE_KEY)
    if (!raw) return []

    const parsed = JSON.parse(raw) as unknown
    if (!Array.isArray(parsed)) return []

    return parsed.filter(isBlogPost)
  } catch {
    return []
  }
}

export function writeStoredBlogPosts(posts: BlogPost[]) {
  window.localStorage.setItem(BLOG_STORAGE_KEY, JSON.stringify(posts))
}

export function mergeAndSortBlogPosts(posts: BlogPost[]) {
  const deduped = new Map<string, BlogPost>()

  for (const post of posts) {
    deduped.set(post.slug, post)
  }

  return Array.from(deduped.values()).sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  )
}

export function getAllClientVisiblePosts() {
  return mergeAndSortBlogPosts([...defaultBlogPosts, ...readStoredBlogPosts()])
}

export function toSlug(input: string) {
  return input
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
}
