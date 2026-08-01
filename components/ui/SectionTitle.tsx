type SectionTitleProps = {
  title: string
  linkText?: string
  linkHref?: string
}

export default function SectionTitle({ title, linkText, linkHref = '#' }: SectionTitleProps) {
  return (
    <div className="mb-10 flex flex-col gap-5 sm:mb-12 sm:flex-row sm:items-end sm:justify-between">
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-4 sm:gap-5">
          <h2 className="shrink-0 font-serif text-2xl uppercase leading-tight tracking-[1px] text-white sm:text-3xl lg:text-4xl">
            {title}
          </h2>

          <span className="hidden h-px flex-1 bg-gradient-to-r from-[#d6b45e]/70 to-transparent sm:block" />
        </div>
      </div>

      {linkText && (
        <a
          href={linkHref}
          className="shrink-0 text-xs font-semibold uppercase tracking-[2px] text-[#d6b45e] transition hover:text-white"
        >
          {linkText} →
        </a>
      )}
    </div>
  )
}
