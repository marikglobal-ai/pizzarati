'use client'
import Image from 'next/image'
import { useCartStore } from '@/store/cartStore'

export default function Navbar() {
  const totalItems = useCartStore(state => state.items.reduce((total, item) => total + item.quantity, 0))
  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-black/70 backdrop-blur-xl">
      <div className="mx-auto flex h-24 max-w-[1440px] items-center justify-between px-6 lg:px-12">
        {/* Логотип */}
        <a href="#" className="flex items-center gap-4">
          <Image
            src="/logo/pizzarati-logo.png"
            alt="Pizzarati logo"
            width={70}
            height={70}
            priority
            className="h-16 w-16 object-contain"
          />
        </a>

        {/* Навигация */}
        <nav className="hidden items-center gap-10 lg:flex">
          <a
            href="#home"
            className="text-sm font-medium uppercase tracking-[2px] text-[#d6b45e] transition hover:text-white"
          >
            Home
          </a>

          <a
            href="#menu"
            className="text-sm font-medium uppercase tracking-[2px] text-white/80 transition hover:text-[#d6b45e]"
          >
            Menu
          </a>

          <a
            href="#about"
            className="text-sm font-medium uppercase tracking-[2px] text-white/80 transition hover:text-[#d6b45e]"
          >
            About us
          </a>

          <a
            href="#delivery"
            className="text-sm font-medium uppercase tracking-[2px] text-white/80 transition hover:text-[#d6b45e]"
          >
            Delivery
          </a>

          <a
            href="#contact"
            className="text-sm font-medium uppercase tracking-[2px] text-white/80 transition hover:text-[#d6b45e]"
          >
            Contact
          </a>
        </nav>

        {/* Правая часть */}
        <div className="flex items-center gap-4">
          <button
            type="button"
            aria-label="Open cart"
            className="relative flex h-12 w-12 items-center justify-center rounded-full border border-[#d6b45e]/60 text-[#d6b45e] transition duration-300 hover:bg-[#d6b45e] hover:text-black"
          >
            <span className="text-xl">🛒</span>

            <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-[#d6b45e] px-1 text-xs font-bold text-black">
              {totalItems}
            </span>
          </button>

          <button className="hidden rounded-md border border-[#d6b45e] px-6 py-3 text-sm font-semibold uppercase tracking-[2px] text-[#d6b45e] transition duration-300 hover:bg-[#d6b45e] hover:text-black sm:block">
            Order now
          </button>
        </div>
      </div>
    </header>
  )
}
