import type { LucideIcon } from 'lucide-react'

type CategoryCardProps = {
  name: string
  items: number
  icon: LucideIcon
  active?: boolean
}

export default function CategoryCard({ name, items, icon: Icon, active = false }: CategoryCardProps) {
  return (
    <button
      type="button"
      className={`
        group flex min-w-[145px] flex-col items-center justify-center
        rounded-[32px] border px-6 py-6 text-center
        transition-all duration-300
        hover:-translate-y-1
        ${
          active
            ? 'border-[#d6b45e] bg-[#d6b45e]/10 shadow-[0_0_35px_rgba(214,180,94,.22)]'
            : 'border-white/15 bg-white/[0.02] hover:border-[#d6b45e]/80 hover:bg-[#d6b45e]/5 hover:shadow-[0_0_25px_rgba(214,180,94,.12)]'
        }
      `}
    >
      <div
        className={`
          flex h-14 w-14 items-center justify-center rounded-full
          border transition-all duration-300
          ${active ? 'border-[#d6b45e] bg-[#d6b45e]/10' : 'border-white/10 bg-black/30 group-hover:border-[#d6b45e]/60'}
        `}
      >
        <Icon size={30} strokeWidth={1.5} className="text-[#d6b45e] transition duration-300 group-hover:scale-110" />
      </div>

      <span className="mt-4 text-sm font-semibold uppercase tracking-[1.5px] text-white">{name}</span>

      <span className="mt-1 text-[10px] uppercase tracking-[1px] text-[#d6b45e]">{items} items</span>
    </button>
  )
}
