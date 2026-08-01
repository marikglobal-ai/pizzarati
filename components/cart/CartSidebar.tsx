'use client'

import Image from 'next/image'
import { Minus, Pencil, Plus, ShoppingCart, Trash2, X } from 'lucide-react'

import { products } from '@/data/products'
import { useCartStore } from '@/store/cartStore'
import { useLanguageStore } from '@/store/languageStore'
import { useProductCustomizerStore } from '@/store/productCustomizerStore'

const content = {
  en: {
    eyebrow: 'Your order',
    title: 'Shopping Cart',
    closeCart: 'Close cart',
    emptyTitle: 'Your cart is empty',
    emptyDescription: 'Add your favourite pizzas and they will appear here.',
    removeItem: 'Remove',
    editItem: 'Edit',
    decreaseItem: 'Decrease quantity',
    increaseItem: 'Increase quantity',
    extras: 'Extras',
    note: 'Note',
    total: 'Total',
    checkout: 'Checkout',
    minutes: 'min'
  },

  da: {
    eyebrow: 'Din ordre',
    title: 'Indkøbskurv',
    closeCart: 'Luk kurv',
    emptyTitle: 'Din kurv er tom',
    emptyDescription: 'Tilføj dine yndlingspizzaer, så vises de her.',
    removeItem: 'Fjern',
    editItem: 'Rediger',
    decreaseItem: 'Reducer antal',
    increaseItem: 'Øg antal',
    extras: 'Ekstra',
    note: 'Bemærkning',
    total: 'I alt',
    checkout: 'Gå til betaling',
    minutes: 'min'
  }
} as const

export default function CartSidebar() {
  const { items, isOpen, closeCart, increaseItem, decreaseItem, removeItem } = useCartStore()

  const openCustomizer = useProductCustomizerStore(state => state.openCustomizer)

  const language = useLanguageStore(state => state.language)
  const text = content[language]

  const totalPrice = items.reduce((total, item) => total + item.price * item.quantity, 0)

  function handleEditItem(cartId: string) {
    const cartItem = items.find(item => item.cartId === cartId)

    if (!cartItem) return

    const product = products.find(currentProduct => currentProduct.id === cartItem.id)

    if (!product) return

    const productText = product.translations[language]

    closeCart()

    openCustomizer(
      {
        id: product.id,
        name: productText.name,
        description: productText.description,
        price: product.price,
        image: product.image,
        rating: product.rating,
        time: `${product.time} ${text.minutes}`,
        badge: productText.badge,
        extraIngredientIds: product.extraIngredientIds
      },
      {
        cartId: cartItem.cartId,
        selectedExtraIds: cartItem.extras?.map(extra => extra.id) ?? [],
        quantity: cartItem.quantity,
        note: cartItem.note ?? ''
      }
    )
  }

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
        aria-hidden={!isOpen}
        className={`
          fixed right-0 top-0 z-[90] flex h-full w-full max-w-md
          flex-col border-l border-white/10 bg-[#0d0d0d]
          transition-transform duration-300
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        <div className="flex items-center justify-between border-b border-white/10 px-5 py-5 sm:px-6">
          <div>
            <p className="text-xs uppercase tracking-[3px] text-[#d6b45e]">{text.eyebrow}</p>

            <h2 className="mt-1 font-serif text-2xl text-white sm:text-3xl">{text.title}</h2>
          </div>

          <button
            type="button"
            onClick={closeCart}
            aria-label={text.closeCart}
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 text-white transition hover:border-[#d6b45e] hover:text-[#d6b45e]"
          >
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-4 py-5 sm:px-6">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center">
              <ShoppingCart size={54} strokeWidth={1.4} className="text-[#d6b45e]" />

              <h3 className="mt-5 font-serif text-2xl text-white">{text.emptyTitle}</h3>

              <p className="mt-2 max-w-xs text-sm leading-6 text-white/50">{text.emptyDescription}</p>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map(item => (
                <article
                  key={item.cartId}
                  className="flex gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-3 sm:gap-4"
                >
                  <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl sm:h-24 sm:w-24">
                    <Image src={item.image} alt={item.name} fill unoptimized sizes="96px" className="object-cover" />
                  </div>

                  <div className="flex min-w-0 flex-1 flex-col justify-between">
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0">
                        <h3 className="truncate font-serif text-lg text-white sm:text-xl">{item.name}</h3>

                        <p className="mt-1 text-sm text-[#d6b45e]">{item.price} kr</p>

                        {item.extras && item.extras.length > 0 && (
                          <div className="mt-2">
                            <p className="text-[10px] font-semibold uppercase tracking-[1px] text-white/35">
                              {text.extras}
                            </p>

                            <ul className="mt-1 space-y-1 text-xs text-white/50">
                              {item.extras.map(extra => (
                                <li key={extra.id}>
                                  + {extra.name} ({extra.price} kr)
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {item.note && (
                          <p className="mt-2 text-xs leading-5 text-white/40">
                            <span className="font-semibold text-white/55">{text.note}:</span> {item.note}
                          </p>
                        )}
                      </div>

                      <div className="flex shrink-0 items-center gap-3">
                        <button
                          type="button"
                          onClick={() => handleEditItem(item.cartId)}
                          aria-label={`${text.editItem}: ${item.name}`}
                          title={text.editItem}
                          className="text-white/40 transition hover:text-[#d6b45e]"
                        >
                          <Pencil size={17} />
                        </button>

                        <button
                          type="button"
                          onClick={() => removeItem(item.cartId)}
                          aria-label={`${text.removeItem}: ${item.name}`}
                          title={text.removeItem}
                          className="text-white/40 transition hover:text-red-400"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </div>

                    <div className="mt-3 flex items-center justify-between gap-3">
                      <div className="flex items-center rounded-full border border-white/10">
                        <button
                          type="button"
                          onClick={() => decreaseItem(item.cartId)}
                          aria-label={`${text.decreaseItem}: ${item.name}`}
                          className="flex h-9 w-9 items-center justify-center text-white/70 transition hover:text-[#d6b45e]"
                        >
                          <Minus size={15} />
                        </button>

                        <span className="min-w-8 text-center text-sm text-white">{item.quantity}</span>

                        <button
                          type="button"
                          onClick={() => increaseItem(item.cartId)}
                          aria-label={`${text.increaseItem}: ${item.name}`}
                          className="flex h-9 w-9 items-center justify-center text-white/70 transition hover:text-[#d6b45e]"
                        >
                          <Plus size={15} />
                        </button>
                      </div>

                      <span className="shrink-0 font-semibold text-white">{item.price * item.quantity} kr</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>

        <div className="border-t border-white/10 p-5 sm:p-6">
          <div className="flex items-center justify-between gap-4">
            <span className="text-white/60">{text.total}</span>

            <span className="font-serif text-2xl text-[#d6b45e] sm:text-3xl">{totalPrice} kr</span>
          </div>

          <button
            type="button"
            disabled={items.length === 0}
            className="mt-5 w-full rounded-xl bg-[#d6b45e] px-6 py-4 font-semibold uppercase tracking-[2px] text-black transition hover:bg-[#efd27d] disabled:cursor-not-allowed disabled:opacity-40"
          >
            {text.checkout}
          </button>
        </div>
      </aside>
    </>
  )
}
