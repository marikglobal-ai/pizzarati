import ProductCard from '@/components/cards/ProductCard'
import Container from '@/components/ui/Container'
import SectionTitle from '@/components/ui/SectionTitle'
import { products } from '@/data/products'

export default function BestSellers() {
  const bestSellers = products.filter(product => product.bestseller)

  return (
    <section className="border-b border-white/10 bg-[#080808] py-16">
      <Container>
        <SectionTitle title="Best Sellers" linkText="View all menu" linkHref="#menu" />

        <div className="grid gap-7 sm:grid-cols-2 xl:grid-cols-4">
          {bestSellers.map(product => (
            <ProductCard
              key={product.id}
              name={product.name}
              description={product.description}
              price={product.price}
              image={product.image}
              rating={product.rating}
              time={product.time}
              badge={product.badge}
            />
          ))}
        </div>
      </Container>
    </section>
  )
}
