'use client'

import Image from 'next/image'
import { X, Minus, Plus, Trash2 } from 'lucide-react'
import { useCartStore } from '@/store/cartStore'

export default function CartSidebar() {
  const { items, isOpen, closeCart, increaseItem, decreaseItem, removeItem } = useCartStore()

  const totalPrice = items.reduce((total, item) => total + item.price * item.quantity, 0)

  return (
    <>
      <div
        onClick={closeCart}
        className={`
          fixed inset-0 z-[80] bg-black/70 backdrop-blur-sm
          transition-opacity duration-300
          ${isOpen ? 'visible opacity-100' : 'invisible opacity-0'}
        `}
      />

      <aside
        className={`
          fixed right-0 top-0 z-[90] flex h-full w-full max-w-md
          flex-col border-l border-white/10 bg-[#0d0d0d]
          transition-transform duration-300
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">
          <div>
            <p className="text-xs uppercase tracking-[3px] text-[#d6b45e]">Your order</p>

            <h2 className="mt-1 font-serif text-3xl text-white">Shopping Cart</h2>
          </div>

          <button
            type="button"
            onClick={closeCart}
            aria-label="Close cart"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white transition hover:border-[#d6b45e] hover:text-[#d6b45e]"
          >
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-5">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center">
              <span className="text-5xl">🛒</span>

              <h3 className="mt-5 font-serif text-2xl text-white">Your cart is empty</h3>

              <p className="mt-2 max-w-xs text-sm leading-6 text-white/50">
                Add your favourite pizzas and they will appear here.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map(item => (
                <article key={item.id} className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-3">
                  <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-xl">
                    <Image src={item.image} alt={item.name} fill unoptimized className="object-cover" />
                  </div>

                  <div className="flex min-w-0 flex-1 flex-col justify-between">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className="font-serif text-xl text-white">{item.name}</h3>

                        <p className="mt-1 text-sm text-[#d6b45e]">{item.price} kr</p>
                      </div>

                      <button
                        type="button"
                        onClick={() => removeItem(item.id)}
                        aria-label={`Remove ${item.name}`}
                        className="text-white/40 transition hover:text-red-400"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>

                    <div className="mt-3 flex items-center justify-between">
                      <div className="flex items-center rounded-full border border-white/10">
                        <button
                          type="button"
                          onClick={() => decreaseItem(item.id)}
                          className="flex h-9 w-9 items-center justify-center text-white/70 transition hover:text-[#d6b45e]"
                        >
                          <Minus size={15} />
                        </button>

                        <span className="min-w-8 text-center text-sm text-white">{item.quantity}</span>

                        <button
                          type="button"
                          onClick={() => increaseItem(item.id)}
                          className="flex h-9 w-9 items-center justify-center text-white/70 transition hover:text-[#d6b45e]"
                        >
                          <Plus size={15} />
                        </button>
                      </div>

                      <span className="font-semibold text-white">{item.price * item.quantity} kr</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>

        <div className="border-t border-white/10 p-6">
          <div className="flex items-center justify-between">
            <span className="text-white/60">Total</span>

            <span className="font-serif text-3xl text-[#d6b45e]">{totalPrice} kr</span>
          </div>

          <button
            type="button"
            disabled={items.length === 0}
            className="mt-5 w-full rounded-xl bg-[#d6b45e] px-6 py-4 font-semibold uppercase tracking-[2px] text-black transition hover:bg-[#efd27d] disabled:cursor-not-allowed disabled:opacity-40"
          >
            Checkout
          </button>
        </div>
      </aside>
    </>
  )
}
