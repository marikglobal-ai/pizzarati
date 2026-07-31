import Image from 'next/image'

type ProductCardProps = {
  name: string
  price: number
  image: string
  rating: number
}

export default function ProductCard({ name, price, image, rating }: ProductCardProps) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-white/10 bg-[#111] transition duration-300 hover:-translate-y-2 hover:border-[#d4af37] hover:shadow-[0_20px_50px_rgba(212,175,55,.15)]">
      <div className="relative h-64 overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition duration-500 group-hover:scale-110"
          unoptimized
        />

        <div className="absolute right-4 top-4 rounded-full bg-black/70 px-3 py-1 text-sm text-[#d4af37] backdrop-blur">
          ⭐ {rating}
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-semibold text-white">{name}</h3>

        <div className="mt-5 flex items-center justify-between">
          <span className="text-2xl font-bold text-[#d4af37]">{price} kr</span>

          <button className="rounded-xl bg-[#d4af37] px-5 py-3 font-semibold text-black transition hover:scale-105">
            Add
          </button>
        </div>
      </div>
    </article>
  )
}
