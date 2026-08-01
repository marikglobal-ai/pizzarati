'use client'

import ProductCard from '@/components/cards/ProductCard'
import Container from '@/components/ui/Container'
import SectionTitle from '@/components/ui/SectionTitle'
import { products } from '@/data/products'
import { useLanguageStore } from '@/store/languageStore'

const sectionTranslations = {
  en: {
    title: 'Best Sellers',
    linkText: 'View all menu',
    minutes: 'min',
    addToCart: 'Add to cart'
  },
  da: {
    title: 'Bestsellere',
    linkText: 'Se hele menuen',
    minutes: 'min',
    addToCart: 'Tilføj til kurv'
  }
} as const

export default function BestSellers() {
  const language = useLanguageStore(state => state.language)
  const text = sectionTranslations[language]

  const bestSellers = products.filter(product => product.bestseller)

  return (
    <section className="border-b border-white/10 bg-[#080808] py-16 sm:py-20 lg:py-24">
      <Container>
        <SectionTitle title={text.title} linkText={text.linkText} linkHref="#menu" />

        <div className="grid gap-7 sm:grid-cols-2 xl:grid-cols-4">
          {bestSellers.map(product => {
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
      </Container>
    </section>
  )
}
