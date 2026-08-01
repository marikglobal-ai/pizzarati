'use client'

import { Quote, Star } from 'lucide-react'

import Container from '@/components/ui/Container'
import SectionTitle from '@/components/ui/SectionTitle'
import { useLanguageStore } from '@/store/languageStore'

const content = {
  en: {
    title: 'What Our Customers Say',
    linkText: 'View all reviews',
    reviews: [
      {
        name: 'Michael Andersen',
        role: 'Regular customer',
        text: 'Best pizza in town. The ingredients are always fresh and the delivery is super fast.'
      },
      {
        name: 'Sofie Larsen',
        role: 'Local customer',
        text: 'Amazing taste, beautiful packaging and great service every single time.'
      },
      {
        name: 'Jakob Nielsen',
        role: 'Pizza lover',
        text: 'I order from Pizzarati at least once a week. The quality is always consistent.'
      }
    ]
  },

  da: {
    title: 'Det siger vores kunder',
    linkText: 'Se alle anmeldelser',
    reviews: [
      {
        name: 'Michael Andersen',
        role: 'Fast kunde',
        text: 'Byens bedste pizza. Råvarerne er altid friske, og leveringen er superhurtig.'
      },
      {
        name: 'Sofie Larsen',
        role: 'Lokal kunde',
        text: 'Fantastisk smag, flot emballage og virkelig god service hver eneste gang.'
      },
      {
        name: 'Jakob Nielsen',
        role: 'Pizzaelsker',
        text: 'Jeg bestiller fra Pizzarati mindst én gang om ugen. Kvaliteten er altid stabil.'
      }
    ]
  }
} as const

export default function Testimonials() {
  const language = useLanguageStore(state => state.language)
  const text = content[language]

  return (
    <section id="reviews" className="border-b border-white/10 bg-[#080808] py-16 sm:py-20 lg:py-24">
      <Container>
        <SectionTitle title={text.title} linkText={text.linkText} linkHref="#reviews" />

        <div className="grid gap-6 lg:grid-cols-3">
          {text.reviews.map(review => (
            <article
              key={review.name}
              className="group relative overflow-hidden rounded-[26px] border border-white/10 bg-white/[0.025] p-7 transition-all duration-300 hover:-translate-y-2 hover:border-[#d6b45e]/60 hover:shadow-[0_20px_55px_rgba(214,180,94,.1)]"
            >
              <Quote
                size={54}
                strokeWidth={1}
                className="absolute right-5 top-5 text-white/10 transition group-hover:text-[#d6b45e]/20"
              />

              <div className="flex items-center gap-1 text-[#d6b45e]">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} size={17} fill="currentColor" strokeWidth={1.5} />
                ))}
              </div>

              <p className="mt-6 min-h-[96px] text-sm leading-7 text-white/60">“{review.text}”</p>

              <div className="mt-7 border-t border-white/10 pt-5">
                <h3 className="font-serif text-xl text-white">{review.name}</h3>

                <p className="mt-1 text-xs uppercase tracking-[1.5px] text-[#d6b45e]">{review.role}</p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}
