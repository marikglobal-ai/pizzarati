'use client'

import { Search, X } from 'lucide-react'

import ProductCard from '@/components/cards/ProductCard'
import Container from '@/components/ui/Container'
import SectionTitle from '@/components/ui/SectionTitle'
import { products } from '@/data/products'
import { useLanguageStore } from '@/store/languageStore'
import { useMenuStore } from '@/store/menuStore'

const sectionTranslations = {
  en: {
    title: 'Our Menu',
    linkText: 'View all menu',
    minutes: 'min',
    addToCart: 'Add to cart',
    searchPlaceholder: 'Search products...',
    emptyTitle: 'No products found',
    emptyDescription: 'Try another search or choose a different category.'
  },

  da: {
    title: 'Vores menu',
    linkText: 'Se hele menuen',
    minutes: 'min',
    addToCart: 'Tilføj til kurv',
    searchPlaceholder: 'Søg efter produkter...',
    emptyTitle: 'Ingen produkter fundet',
    emptyDescription: 'Prøv en anden søgning eller vælg en anden kategori.'
  }
} as const

export default function BestSellers() {
  const language = useLanguageStore(state => state.language)

  const activeCategory = useMenuStore(state => state.activeCategory)

  const searchQuery = useMenuStore(state => state.searchQuery)

  const setSearchQuery = useMenuStore(state => state.setSearchQuery)

  const text = sectionTranslations[language]

  const filteredProducts = products.filter(product => {
    const productText = product.translations[language]

    const matchesCategory = product.category === activeCategory

    const normalizedQuery = searchQuery.trim().toLocaleLowerCase()

    const matchesSearch =
      normalizedQuery.length === 0 ||
      productText.name.toLocaleLowerCase().includes(normalizedQuery) ||
      productText.description.toLocaleLowerCase().includes(normalizedQuery)

    return matchesCategory && matchesSearch
  })

  return (
    <section className="border-b border-white/10 bg-[#080808] py-16 sm:py-20 lg:py-24">
      <Container>
        <SectionTitle title={text.title} linkText={text.linkText} linkHref="#menu" />

        <div className="mb-8 flex justify-end">
          <div className="relative w-full sm:max-w-md">
            <Search size={18} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#d6b45e]" />

            <input
              type="search"
              value={searchQuery}
              onChange={event => setSearchQuery(event.target.value)}
              placeholder={text.searchPlaceholder}
              className="h-14 w-full rounded-2xl border border-white/10 bg-white/[0.03] pl-12 pr-12 text-sm text-white outline-none transition placeholder:text-white/30 focus:border-[#d6b45e]/70 focus:bg-[#d6b45e]/[0.03]"
            />

            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                aria-label="Clear search"
                className="absolute right-4 top-1/2 flex -translate-y-1/2 items-center justify-center text-white/40 transition hover:text-white"
              >
                <X size={18} />
              </button>
            )}
          </div>
        </div>

        {filteredProducts.length > 0 ? (
          <div className="grid gap-7 sm:grid-cols-2 xl:grid-cols-4">
            {filteredProducts.map(product => {
              const productText = product.translations[language]

              return (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  name={productText.name}
                  description={productText.description}
                  price={product.price}
                  image={product.image}
                  rating={product.rating}
                  time={`${product.time} ${text.minutes}`}
                  badge={productText.badge}
                  addToCartLabel={text.addToCart}
                />
              )
            })}
          </div>
        ) : (
          <div className="rounded-[26px] border border-dashed border-white/15 bg-white/[0.02] px-6 py-16 text-center">
            <Search size={38} strokeWidth={1.3} className="mx-auto text-[#d6b45e]" />

            <h3 className="mt-5 font-serif text-2xl text-white">{text.emptyTitle}</h3>

            <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-white/45">{text.emptyDescription}</p>
          </div>
        )}
      </Container>
    </section>
  )
}
