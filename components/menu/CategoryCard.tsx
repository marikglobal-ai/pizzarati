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
        group flex min-w-[130px] flex-col items-center justify-center
        rounded-full border px-5 py-7 text-center
        transition duration-300
        ${
          active
            ? 'border-[#d6b45e] bg-[#d6b45e]/10 shadow-[0_0_30px_rgba(214,180,94,.18)]'
            : 'border-white/15 bg-white/[0.02] hover:border-[#d6b45e]/70 hover:bg-[#d6b45e]/5'
        }
      `}
    >
      <Icon size={34} strokeWidth={1.5} className="text-[#d6b45e] transition duration-300 group-hover:scale-110" />

      <span className="mt-4 text-sm font-semibold uppercase tracking-[1px] text-white">{name}</span>

      <span className="mt-1 text-[10px] uppercase tracking-[1px] text-[#d6b45e]">{items} items</span>
    </button>
  )
}
