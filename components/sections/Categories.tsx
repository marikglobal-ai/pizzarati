'use client'

import CategoryCard from '@/components/menu/CategoryCard'
import Container from '@/components/ui/Container'
import { categories } from '@/constants/categories'
import { translations } from '@/i18n/translations'
import { useLanguageStore } from '@/store/languageStore'

export default function Categories() {
  const language = useLanguageStore(state => state.language)
  const t = translations[language]

  return (
    <section id="menu" className="border-b border-white/10 bg-[#080808] py-8">
      <Container>
        <div className="flex gap-5 overflow-x-auto pb-3">
          {categories.map((category, index) => (
            <CategoryCard
              key={category.key}
              name={t.categories[category.key]}
              items={category.items}
              itemsLabel={t.categories.items}
              icon={category.icon}
              active={index === 0}
            />
          ))}
        </div>
      </Container>
    </section>
  )
}
