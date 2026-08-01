'use client'

import Image from 'next/image'

import { useProductCustomizerStore } from '@/store/productCustomizerStore'

type ProductCardProps = {
  id: number
  name: string
  description: string
  price: number
  image: string
  rating: number
  time: string
  badge?: string
  addToCartLabel: string
  extraIngredientIds?: string[]
}

export default function ProductCard({
  id,
  name,
  description,
  price,
  image,
  rating,
  time,
  badge,
  addToCartLabel,
  extraIngredientIds
}: ProductCardProps) {
  const openCustomizer = useProductCustomizerStore(state => state.openCustomizer)

  function handleOpenCustomizer() {
    openCustomizer({
      id,
      name,
      description,
      price,
      image,
      rating,
      time,
      badge,
      extraIngredientIds
    })
  }

  return (
    <article className="group overflow-hidden rounded-[26px] border border-white/10 bg-[#101010] transition-all duration-300 hover:-translate-y-2 hover:border-[#d6b45e]/70 hover:shadow-[0_22px_55px_rgba(214,180,94,.14)]">
      <div className="relative h-72 overflow-hidden sm:h-80">
        <Image
          src={image}
          alt={name}
          fill
          unoptimized
          sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.06]"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

        {badge && (
          <span className="absolute left-4 top-4 rounded-full border border-[#d6b45e]/60 bg-black/75 px-4 py-2 text-[10px] font-semibold uppercase tracking-[1.4px] text-[#d6b45e] backdrop-blur-md">
            {badge}
          </span>
        )}
      </div>

      <div className="p-6">
        <h3 className="font-serif text-3xl text-white">{name}</h3>

        <p className="mt-3 min-h-[52px] text-sm leading-6 text-white/55">{description}</p>

        <div className="mt-5 flex items-center gap-6 text-xs uppercase tracking-[1px] text-white/60">
          <span className="flex items-center gap-2">
            <span className="text-[#d6b45e]">★</span>
            {rating}
          </span>

          <span className="flex items-center gap-2">
            <span className="text-[#d6b45e]">◷</span>
            {time}
          </span>
        </div>

        <div className="mt-7 flex items-center justify-between border-t border-white/10 pt-5">
          <span className="text-2xl font-semibold text-white">{price} kr</span>

          <button
            type="button"
            onClick={handleOpenCustomizer}
            aria-label={`${addToCartLabel}: ${name}`}
            title={addToCartLabel}
            className="flex h-13 w-13 items-center justify-center rounded-full border border-[#d6b45e] bg-[#d6b45e] text-2xl font-light text-black transition-all duration-300 hover:scale-110 hover:bg-[#efd27d] hover:shadow-[0_0_25px_rgba(214,180,94,.35)]"
          >
            +
          </button>
        </div>
      </div>
    </article>
  )
}
