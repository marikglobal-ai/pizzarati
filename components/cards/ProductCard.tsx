import Image from 'next/image'

type ProductCardProps = {
  name: string
  description: string
  price: number
  image: string
  rating: number
  time: string
  badge?: string
}

export default function ProductCard({ name, description, price, image, rating, time, badge }: ProductCardProps) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-[#d6b45e]/25 bg-[#101010] transition duration-300 hover:-translate-y-2 hover:border-[#d6b45e]/70 hover:shadow-[0_18px_50px_rgba(214,180,94,.14)]">
      <div className="relative h-56 overflow-hidden sm:h-64">
        <Image
          src={image}
          alt={name}
          fill
          unoptimized
          className="object-cover transition duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />

        {badge && (
          <span className="absolute left-4 top-4 rounded-md border border-[#d6b45e]/60 bg-black/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-[1px] text-[#d6b45e] backdrop-blur">
            {badge}
          </span>
        )}
      </div>

      <div className="p-5">
        <h3 className="font-serif text-2xl text-white">{name}</h3>

        <p className="mt-2 min-h-12 text-sm leading-6 text-white/50">{description}</p>

        <div className="mt-4 flex items-center gap-5 text-xs text-white/60">
          <span className="flex items-center gap-2">
            <span className="text-[#d6b45e]">★</span>
            {rating}
          </span>

          <span className="flex items-center gap-2">
            <span className="text-[#d6b45e]">◷</span>
            {time}
          </span>
        </div>

        <div className="mt-6 flex items-center justify-between">
          <span className="text-2xl font-semibold text-white">{price} kr</span>

          <button
            type="button"
            aria-label={`Add ${name} to cart`}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-[#d6b45e] text-2xl text-black transition duration-300 hover:scale-110 hover:bg-[#efd27d]"
          >
            +
          </button>
        </div>
      </div>
    </article>
  )
}

