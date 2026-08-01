type SectionTitleProps = {
  title: string
  linkText?: string
  linkHref?: string
}

export default function SectionTitle({ title, linkText, linkHref = '#' }: SectionTitleProps) {
  return (
    <div className="mb-8 flex items-center justify-between gap-6">
      <div className="flex items-center gap-5">
        <h2 className="font-serif text-3xl uppercase tracking-wide text-white sm:text-4xl">{title}</h2>

        <span className="hidden h-px w-32 bg-gradient-to-r from-[#d6b45e]/70 to-transparent sm:block" />
      </div>

      {linkText && (
        <a
          href={linkHref}
          className="text-xs font-semibold uppercase tracking-[2px] text-[#d6b45e] transition hover:text-white"
        >
          {linkText} →
        </a>
      )}
    </div>
  )
}
