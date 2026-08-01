'use client'

import { BadgeCheck, Bike, Flame, Leaf } from 'lucide-react'

import Container from '@/components/ui/Container'
import SectionTitle from '@/components/ui/SectionTitle'
import { useLanguageStore } from '@/store/languageStore'

const content = {
  en: {
    title: 'Why Choose Us',
    linkText: 'About Pizzarati',
    advantages: [
      {
        title: 'Fresh Ingredients',
        description: 'Fresh vegetables, premium cheese and carefully selected ingredients.',
        icon: Leaf
      },
      {
        title: 'Stone Oven',
        description: 'Every pizza is baked at high temperature for a crispy Italian crust.',
        icon: Flame
      },
      {
        title: 'Fast Delivery',
        description: 'Your order is prepared quickly and delivered hot to your door.',
        icon: Bike
      },
      {
        title: 'Premium Quality',
        description: 'Consistent taste, careful preparation and quality in every order.',
        icon: BadgeCheck
      }
    ]
  },

  da: {
    title: 'Hvorfor vælge os',
    linkText: 'Om Pizzarati',
    advantages: [
      {
        title: 'Friske råvarer',
        description: 'Friske grøntsager, premiumost og nøje udvalgte ingredienser.',
        icon: Leaf
      },
      {
        title: 'Stenovn',
        description: 'Hver pizza bages ved høj temperatur for at få en sprød italiensk bund.',
        icon: Flame
      },
      {
        title: 'Hurtig levering',
        description: 'Din ordre tilberedes hurtigt og leveres varm direkte til døren.',
        icon: Bike
      },
      {
        title: 'Premium kvalitet',
        description: 'Ensartet smag, omhyggelig tilberedning og høj kvalitet i hver ordre.',
        icon: BadgeCheck
      }
    ]
  }
} as const

export default function WhyChooseUs() {
  const language = useLanguageStore(state => state.language)
  const text = content[language]

  return (
    <section id="about" className="border-b border-white/10 bg-[#0b0b0b] py-16 sm:py-20 lg:py-24">
      <Container>
        <SectionTitle title={text.title} linkText={text.linkText} linkHref="#about" />

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {text.advantages.map(advantage => {
            const Icon = advantage.icon

            return (
              <article
                key={advantage.title}
                className="group rounded-[26px] border border-white/10 bg-white/[0.025] p-7 transition-all duration-300 hover:-translate-y-2 hover:border-[#d6b45e]/60 hover:bg-[#d6b45e]/[0.04] hover:shadow-[0_20px_55px_rgba(214,180,94,.1)]"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#d6b45e]/35 bg-[#d6b45e]/10 text-[#d6b45e] transition duration-300 group-hover:scale-110 group-hover:border-[#d6b45e]">
                  <Icon size={28} strokeWidth={1.5} />
                </div>

                <h3 className="mt-6 font-serif text-2xl text-white">{advantage.title}</h3>

                <p className="mt-3 text-sm leading-7 text-white/50">{advantage.description}</p>

                <div className="mt-7 h-px w-14 bg-[#d6b45e]/50 transition-all duration-300 group-hover:w-24" />
              </article>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
