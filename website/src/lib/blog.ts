export type BlogPost = {
  slug: string
  title: string
  excerpt: string
  content: string
  author: string
  publishedAt: string
}

export const BLOG_STORAGE_KEY = "pacificunity.blog.posts"

export const defaultBlogPosts: BlogPost[] = [
  {
    slug: "how-to-choose-pellet-mill-capacity",
    title: "How to Choose the Right Pellet Mill Capacity",
    excerpt:
      "A practical framework for mapping feed demand, shift patterns, and expansion plans to pellet mill sizing.",
    content:
      "Choosing pellet mill capacity starts with daily tonnage targets, operating hours, and raw material characteristics. Teams should also account for maintenance windows and future growth.",
    author: "Pacific Unity Team",
    publishedAt: "2026-03-01",
  },
  {
    slug: "water-treatment-basics-for-uae-manufacturers",
    title: "Water Treatment Basics for UAE Manufacturers",
    excerpt:
      "Key considerations for selecting RO and treatment stages in food, beverage, and industrial use cases.",
    content:
      "Water treatment design in the UAE should be based on source water quality, target output quality, and line reliability requirements. Proper pre-treatment and membrane selection are critical.",
    author: "Pacific Unity Team",
    publishedAt: "2026-03-08",
  },
]
