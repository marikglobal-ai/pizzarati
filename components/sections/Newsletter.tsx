'use client'

import { useState } from 'react'
import { ArrowRight, Mail } from 'lucide-react'

import Container from '@/components/ui/Container'
import { useLanguageStore } from '@/store/languageStore'

const content = {
  en: {
    eyebrow: 'Special offer',
    title: 'Get 10% off your first order',
    description:
      'Subscribe to our newsletter and receive promotions, new menu updates and special offers from Pizzarati.',
    success: 'Thank you! Your discount is on the way.',
    placeholder: 'Your email address',
    button: 'Subscribe',
    note: 'No spam. Only pizza, discounts and good news.'
  },

  da: {
    eyebrow: 'Særligt tilbud',
    title: 'Få 10% rabat på din første ordre',
    description: 'Tilmeld dig vores nyhedsbrev og modtag kampagner, menuopdateringer og særlige tilbud fra Pizzarati.',
    success: 'Tak! Din rabat er på vej.',
    placeholder: 'Din e-mailadresse',
    button: 'Tilmeld',
    note: 'Ingen spam. Kun pizza, rabatter og gode nyheder.'
  }
} as const

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const language = useLanguageStore(state => state.language)
  const text = content[language]

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (!email.trim()) return

    setSubmitted(true)
    setEmail('')
  }

  return (
    <section className="border-b border-white/10 bg-[#0b0b0b] py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="relative overflow-hidden rounded-[32px] border border-[#d6b45e]/25 bg-gradient-to-br from-[#17130b] via-[#101010] to-[#080808] px-6 py-10 sm:px-10 sm:py-12 lg:px-14">
          <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#d6b45e]/10 blur-[100px]" />

          <div className="relative grid items-center gap-10 lg:grid-cols-[1fr_520px]">
            <div>
              <div className="flex items-center gap-3 text-[#d6b45e]">
                <Mail size={20} strokeWidth={1.5} />

                <p className="text-xs font-semibold uppercase tracking-[3px]">{text.eyebrow}</p>
              </div>

              <h2 className="mt-5 max-w-2xl font-serif text-3xl leading-tight text-white sm:text-4xl lg:text-5xl">
                {text.title}
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-7 text-white/55">{text.description}</p>
            </div>

            <div>
              {submitted ? (
                <div className="rounded-2xl border border-[#d6b45e]/40 bg-[#d6b45e]/10 px-6 py-5 text-sm text-[#efd27d]">
                  {text.success}
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
                  <input
                    type="email"
                    value={email}
                    onChange={event => setEmail(event.target.value)}
                    placeholder={text.placeholder}
                    required
                    className="min-h-14 min-w-0 flex-1 rounded-xl border border-white/10 bg-black/40 px-5 text-sm text-white outline-none transition placeholder:text-white/30 focus:border-[#d6b45e]"
                  />

                  <button
                    type="submit"
                    className="inline-flex min-h-14 shrink-0 items-center justify-center gap-3 rounded-xl bg-[#d6b45e] px-6 font-semibold uppercase tracking-[1.5px] text-black transition hover:bg-[#efd27d]"
                  >
                    {text.button}
                    <ArrowRight size={18} />
                  </button>
                </form>
              )}

              <p className="mt-3 text-xs text-white/35">{text.note}</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
