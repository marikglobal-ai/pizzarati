import CategoryCard from '@/components/menu/CategoryCard'
import Container from '@/components/ui/Container'
import { categories } from '@/constants/categories'

export default function Categories() {
  return (
    <section id="menu" className="border-b border-white/10 bg-[#080808] py-8">
      <Container>
        <div className="flex gap-5 overflow-x-auto pb-3">
          {categories.map((category, index) => (
            <CategoryCard
              key={category.name}
              name={category.name}
              items={category.items}
              icon={category.icon}
              active={index === 0}
            />
          ))}
        </div>
      </Container>
    </section>
  )
}
