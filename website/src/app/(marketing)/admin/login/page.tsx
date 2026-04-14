"use client"

import { useMemo, useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import { SectionHeading } from "@/components/shared/section-heading"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const ADMIN_USERNAME = "admin"
const ADMIN_PASSWORD = "pacificunity123"

export default function AdminLoginPage() {
  const router = useRouter()
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const nextPath = useMemo(() => {
    if (typeof window === "undefined") return "/admin/blog/"

    const value = new URLSearchParams(window.location.search).get("next")
    return value && value.startsWith("/") ? value : "/admin/blog/"
  }, [])

  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Admin", href: "/admin/login/" },
    { name: "Login", href: "/admin/login/" },
  ]

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setError("")

    if (username.trim() !== ADMIN_USERNAME || password !== ADMIN_PASSWORD) {
      setError("Invalid login. Please check username and password.")
      return
    }

    window.localStorage.setItem("pacificunity.admin.loggedIn", "true")
    router.push(nextPath)
  }

  return (
    <>
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <Breadcrumbs items={breadcrumbs} />
      </div>

      <section className="px-4 pb-12 pt-8 md:px-6 md:pb-16 md:pt-12">
        <div className="mx-auto max-w-md">
          <SectionHeading
            title="Admin Login"
            subtitle="Sign in before uploading blog content."
          />

          <Card>
            <CardContent className="p-6">
              <form className="space-y-4" onSubmit={onSubmit}>
                <div className="space-y-2">
                  <label htmlFor="username" className="text-sm font-medium">Username</label>
                  <Input id="username" value={username} onChange={(event) => setUsername(event.target.value)} placeholder="admin" autoComplete="username" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="password" className="text-sm font-medium">Password</label>
                  <Input id="password" type="password" value={password} onChange={(event) => setPassword(event.target.value)} autoComplete="current-password" />
                </div>

                {error && <p className="text-sm text-destructive">{error}</p>}

                <div className="flex flex-col gap-3 sm:flex-row">
                  <Button type="submit">Login</Button>
                  <Button asChild variant="outline" type="button">
                    <Link href="/blog/">Back to Blog</Link>
                  </Button>
                </div>
              </form>

              <p className="mt-4 text-xs text-muted-foreground">
                Demo credentials: username <strong>admin</strong>, password <strong>pacificunity123</strong>.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  )
}
