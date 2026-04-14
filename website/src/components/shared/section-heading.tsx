interface SectionHeadingProps {
  title: string
  subtitle?: string
  as?: "h2" | "h3"
  className?: string
}

export function SectionHeading({
  title,
  subtitle,
  as: Tag = "h2",
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={`mb-8 ${className}`}>
      <Tag className="text-2xl font-bold tracking-tight md:text-3xl">{title}</Tag>
      {subtitle && (
        <p className="mt-2 max-w-3xl text-muted-foreground">{subtitle}</p>
      )}
    </div>
  )
}
