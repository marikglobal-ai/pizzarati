'use client'

import CategoryCard from '@/components/menu/CategoryCard'
import Container from '@/components/ui/Container'
import { categories } from '@/constants/categories'
import { translations } from '@/i18n/translations'
import { useLanguageStore } from '@/store/languageStore'
import { useMenuStore } from '@/store/menuStore'

export default function Categories() {
  const language = useLanguageStore(state => state.language)
  const activeCategory = useMenuStore(state => state.activeCategory)
  const setActiveCategory = useMenuStore(state => state.setActiveCategory)

  const t = translations[language]

  return (
    <section id="menu" className="border-b border-white/10 bg-[#080808] py-8">
      <Container>
        <div className="flex gap-5 overflow-x-auto pb-3">
          {categories.map(category => (
            <CategoryCard
              key={category.key}
              name={t.categories[category.key]}
              items={category.items}
              itemsLabel={t.categories.items}
              icon={category.icon}
              active={activeCategory === category.key}
              onClick={() => setActiveCategory(category.key)}
            />
          ))}
        </div>
      </Container>
    </section>
  )
}
