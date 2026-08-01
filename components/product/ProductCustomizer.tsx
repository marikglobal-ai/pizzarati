'use client'

import Image from 'next/image'
import { Check, Minus, Plus, X } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'

import { extraIngredients } from '@/data/extras'
import { useCartStore } from '@/store/cartStore'
import { useLanguageStore } from '@/store/languageStore'
import { useProductCustomizerStore } from '@/store/productCustomizerStore'

const content = {
  en: {
    close: 'Close',
    rating: 'Rating',
    preparation: 'Preparation',
    basePrice: 'Base price',
    extrasTitle: 'Extra ingredients',
    extrasDescription: 'Choose any ingredients you would like to add.',
    noExtras: 'No extra ingredients are available for this product.',
    noteTitle: 'Special instructions',
    notePlaceholder: 'For example: no onions, bake well done...',
    quantity: 'Quantity',
    total: 'Total',
    addToCart: 'Add to cart'
  },

  da: {
    close: 'Luk',
    rating: 'Bedømmelse',
    preparation: 'Tilberedning',
    basePrice: 'Grundpris',
    extrasTitle: 'Ekstra ingredienser',
    extrasDescription: 'Vælg de ingredienser, du ønsker at tilføje.',
    noExtras: 'Der er ingen ekstra ingredienser til dette produkt.',
    noteTitle: 'Særlige ønsker',
    notePlaceholder: 'For eksempel: uden løg, ekstra sprød...',
    quantity: 'Antal',
    total: 'I alt',
    addToCart: 'Tilføj til kurv'
  }
} as const

export default function ProductCustomizer() {
  const product = useProductCustomizerStore(state => state.product)
  const isOpen = useProductCustomizerStore(state => state.isOpen)
  const closeCustomizer = useProductCustomizerStore(state => state.closeCustomizer)

  const addItem = useCartStore(state => state.addItem)

  const language = useLanguageStore(state => state.language)
  const text = content[language]

  const [selectedExtraIds, setSelectedExtraIds] = useState<string[]>([])
  const [quantity, setQuantity] = useState(1)
  const [note, setNote] = useState('')

  const availableExtras = useMemo(() => {
    if (!product?.extraIngredientIds) return []

    return extraIngredients.filter(extra => product.extraIngredientIds?.includes(extra.id))
  }, [product])

  const selectedExtras = useMemo(
    () => availableExtras.filter(extra => selectedExtraIds.includes(extra.id)),
    [availableExtras, selectedExtraIds]
  )

  const extrasPrice = selectedExtras.reduce((total, extra) => total + extra.price, 0)

  const unitPrice = product ? product.price + extrasPrice : 0
  const totalPrice = unitPrice * quantity

  useEffect(() => {
    if (!isOpen) return

    setSelectedExtraIds([])
    setQuantity(1)
    setNote('')

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [isOpen, product?.id])

  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        closeCustomizer()
      }
    }

    if (isOpen) {
      window.addEventListener('keydown', handleEscape)
    }

    return () => {
      window.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen, closeCustomizer])

  function toggleExtra(extraId: string) {
    setSelectedExtraIds(current =>
      current.includes(extraId) ? current.filter(id => id !== extraId) : [...current, extraId]
    )
  }

  function decreaseQuantity() {
    setQuantity(current => Math.max(1, current - 1))
  }

  function increaseQuantity() {
    setQuantity(current => current + 1)
  }

  function handleAddToCart() {
    if (!product) return

    addItem({
      id: product.id,
      name: product.name,
      price: unitPrice,
      image: product.image,
      quantity,
      extras: selectedExtras.map(extra => ({
        id: extra.id,
        name: extra.translations[language],
        price: extra.price
      })),
      note: note.trim() || undefined
    })

    closeCustomizer()
  }

  if (!product) return null

  return (
    <>
      <div
        onClick={closeCustomizer}
        className={`
          fixed inset-0 z-[100] bg-black/80 backdrop-blur-md
          transition-all duration-300
          ${isOpen ? 'visible opacity-100' : 'invisible opacity-0'}
        `}
      />

      <section
        role="dialog"
        aria-modal="true"
        aria-hidden={!isOpen}
        aria-labelledby="product-customizer-title"
        className={`
          fixed inset-x-0 bottom-0 z-[110] mx-auto flex max-h-[92vh]
          w-full max-w-5xl flex-col overflow-hidden rounded-t-[30px]
          border border-white/10 bg-[#0d0d0d]
          shadow-[0_-30px_100px_rgba(0,0,0,.7)]
          transition-transform duration-300
          lg:inset-y-1/2 lg:bottom-auto lg:max-h-[88vh]
          lg:-translate-y-1/2 lg:rounded-[30px]
          ${isOpen ? 'translate-y-0' : 'translate-y-full lg:translate-y-[calc(-50%+120vh)]'}
        `}
      >
        <div className="flex items-center justify-between border-b border-white/10 px-5 py-4 sm:px-7">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[2.5px] text-[#d6b45e]">
              {text.basePrice}: {product.price} kr
            </p>

            <h2 id="product-customizer-title" className="mt-1 font-serif text-2xl text-white sm:text-3xl">
              {product.name}
            </h2>
          </div>

          <button
            type="button"
            onClick={closeCustomizer}
            aria-label={text.close}
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 text-white transition hover:border-[#d6b45e] hover:text-[#d6b45e]"
          >
            <X size={20} />
          </button>
        </div>

        <div className="grid flex-1 overflow-y-auto lg:grid-cols-[42%_58%]">
          <div className="relative min-h-[280px] overflow-hidden sm:min-h-[360px] lg:min-h-full">
            <Image
              src={product.image}
              alt={product.name}
              fill
              unoptimized
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/10" />

            {product.badge && (
              <span className="absolute left-5 top-5 rounded-full border border-[#d6b45e]/60 bg-black/75 px-4 py-2 text-[10px] font-semibold uppercase tracking-[1.4px] text-[#d6b45e] backdrop-blur-md">
                {product.badge}
              </span>
            )}

            <div className="absolute bottom-5 left-5 right-5">
              <p className="max-w-md text-sm leading-6 text-white/65">{product.description}</p>

              <div className="mt-4 flex gap-5 text-xs uppercase tracking-[1px] text-white/60">
                <span>
                  <span className="text-[#d6b45e]">★</span> {product.rating}
                </span>

                <span>
                  <span className="text-[#d6b45e]">◷</span> {product.time}
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col p-5 sm:p-7">
            <div>
              <h3 className="font-serif text-2xl text-white">{text.extrasTitle}</h3>

              <p className="mt-2 text-sm leading-6 text-white/45">{text.extrasDescription}</p>
            </div>

            {availableExtras.length > 0 ? (
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {availableExtras.map(extra => {
                  const isSelected = selectedExtraIds.includes(extra.id)

                  return (
                    <button
                      key={extra.id}
                      type="button"
                      onClick={() => toggleExtra(extra.id)}
                      aria-pressed={isSelected}
                      className={`
                        flex min-h-14 items-center justify-between gap-3
                        rounded-2xl border px-4 py-3 text-left transition
                        ${
                          isSelected
                            ? 'border-[#d6b45e] bg-[#d6b45e]/10'
                            : 'border-white/10 bg-white/[0.025] hover:border-[#d6b45e]/50'
                        }
                      `}
                    >
                      <div className="flex min-w-0 items-center gap-3">
                        <span
                          className={`
                            flex h-6 w-6 shrink-0 items-center justify-center
                            rounded-md border transition
                            ${
                              isSelected
                                ? 'border-[#d6b45e] bg-[#d6b45e] text-black'
                                : 'border-white/20 text-transparent'
                            }
                          `}
                        >
                          <Check size={14} strokeWidth={3} />
                        </span>

                        <span className="truncate text-sm text-white/80">{extra.translations[language]}</span>
                      </div>

                      <span className="shrink-0 text-xs font-semibold text-[#d6b45e]">+{extra.price} kr</span>
                    </button>
                  )
                })}
              </div>
            ) : (
              <p className="mt-6 rounded-2xl border border-dashed border-white/10 p-5 text-sm text-white/40">
                {text.noExtras}
              </p>
            )}

            <div className="mt-7">
              <label htmlFor="product-note" className="text-xs font-semibold uppercase tracking-[1.5px] text-white/55">
                {text.noteTitle}
              </label>

              <textarea
                id="product-note"
                value={note}
                onChange={event => setNote(event.target.value)}
                placeholder={text.notePlaceholder}
                maxLength={200}
                rows={3}
                className="mt-3 w-full resize-none rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm leading-6 text-white outline-none transition placeholder:text-white/25 focus:border-[#d6b45e]/70"
              />
            </div>

            <div className="mt-7 flex flex-col gap-5 border-t border-white/10 pt-6 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[1.5px] text-white/45">{text.quantity}</p>

                <div className="mt-3 flex w-fit items-center rounded-full border border-white/10">
                  <button
                    type="button"
                    onClick={decreaseQuantity}
                    aria-label={text.quantity}
                    className="flex h-11 w-11 items-center justify-center text-white/70 transition hover:text-[#d6b45e]"
                  >
                    <Minus size={16} />
                  </button>

                  <span className="min-w-10 text-center font-semibold text-white">{quantity}</span>

                  <button
                    type="button"
                    onClick={increaseQuantity}
                    aria-label={text.quantity}
                    className="flex h-11 w-11 items-center justify-center text-white/70 transition hover:text-[#d6b45e]"
                  >
                    <Plus size={16} />
                  </button>
                </div>
              </div>

              <div className="sm:text-right">
                <p className="text-xs uppercase tracking-[1.5px] text-white/45">{text.total}</p>

                <p className="mt-1 font-serif text-3xl text-[#d6b45e]">{totalPrice} kr</p>
              </div>
            </div>

            <button
              type="button"
              onClick={handleAddToCart}
              className="mt-6 w-full rounded-2xl bg-[#d6b45e] px-6 py-4 font-semibold uppercase tracking-[2px] text-black transition hover:bg-[#efd27d] hover:shadow-[0_0_35px_rgba(214,180,94,.25)]"
            >
              {text.addToCart} · {totalPrice} kr
            </button>
          </div>
        </div>
      </section>
    </>
  )
}
