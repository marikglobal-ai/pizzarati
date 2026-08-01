'use client'

import Image from 'next/image'
import { Mail, MapPin, Phone } from 'lucide-react'
import { FaFacebookF, FaInstagram } from 'react-icons/fa'

import Container from '@/components/ui/Container'
import { useLanguageStore } from '@/store/languageStore'

const content = {
  en: {
    description: 'Premium pizza, fresh ingredients and fast delivery across Denmark.',

    navigationTitle: 'Navigation',
    navigation: {
      home: 'Home',
      menu: 'Menu',
      about: 'About us',
      reviews: 'Reviews',
      contact: 'Contact'
    },

    contactTitle: 'Contact',
    location: 'Frederikshavn, Denmark',

    openingTitle: 'Opening Hours',
    days: {
      mondayThursday: 'Monday – Thursday',
      fridaySaturday: 'Friday – Saturday',
      sunday: 'Sunday'
    },

    copyright: '© 2026 Pizzarati. All rights reserved.',
    privacy: 'Privacy Policy',
    terms: 'Terms & Conditions',

    instagramLabel: 'Open Instagram',
    facebookLabel: 'Open Facebook'
  },

  da: {
    description: 'Premium pizza, friske råvarer og hurtig levering i hele Danmark.',

    navigationTitle: 'Navigation',
    navigation: {
      home: 'Hjem',
      menu: 'Menu',
      about: 'Om os',
      reviews: 'Anmeldelser',
      contact: 'Kontakt'
    },

    contactTitle: 'Kontakt',
    location: 'Frederikshavn, Danmark',

    openingTitle: 'Åbningstider',
    days: {
      mondayThursday: 'Mandag – torsdag',
      fridaySaturday: 'Fredag – lørdag',
      sunday: 'Søndag'
    },

    copyright: '© 2026 Pizzarati. Alle rettigheder forbeholdes.',
    privacy: 'Privatlivspolitik',
    terms: 'Vilkår og betingelser',

    instagramLabel: 'Åbn Instagram',
    facebookLabel: 'Åbn Facebook'
  }
} as const

export default function Footer() {
  const language = useLanguageStore(state => state.language)
  const text = content[language]

  return (
    <footer id="contact" className="bg-[#070707]">
      <Container>
        <div className="grid gap-12 py-14 sm:py-16 md:grid-cols-2 xl:grid-cols-4">
          <div>
            <div className="flex items-center gap-4">
              <Image
                src="/logo/pizzarati-logo.png"
                alt="Pizzarati logo"
                width={70}
                height={70}
                className="h-16 w-16 object-contain"
              />

              <span className="font-serif text-2xl tracking-[4px] text-[#d6b45e]">PIZZARATI</span>
            </div>

            <p className="mt-5 max-w-sm text-sm leading-7 text-white/45">{text.description}</p>

            <div className="mt-6 flex gap-3">
              <a
                href="#"
                aria-label={text.instagramLabel}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white/60 transition hover:border-[#d6b45e] hover:text-[#d6b45e]"
              >
                <FaInstagram size={19} />
              </a>

              <a
                href="#"
                aria-label={text.facebookLabel}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white/60 transition hover:border-[#d6b45e] hover:text-[#d6b45e]"
              >
                <FaFacebookF size={17} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-serif text-xl text-white">{text.navigationTitle}</h3>

            <nav className="mt-5 flex flex-col gap-3 text-sm text-white/50">
              <a href="#home" className="transition hover:text-[#d6b45e]">
                {text.navigation.home}
              </a>

              <a href="#menu" className="transition hover:text-[#d6b45e]">
                {text.navigation.menu}
              </a>

              <a href="#about" className="transition hover:text-[#d6b45e]">
                {text.navigation.about}
              </a>

              <a href="#reviews" className="transition hover:text-[#d6b45e]">
                {text.navigation.reviews}
              </a>

              <a href="#contact" className="transition hover:text-[#d6b45e]">
                {text.navigation.contact}
              </a>
            </nav>
          </div>

          <div>
            <h3 className="font-serif text-xl text-white">{text.contactTitle}</h3>

            <div className="mt-5 space-y-4 text-sm text-white/50">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 shrink-0 text-[#d6b45e]" />

                <span>{text.location}</span>
              </div>

              <div className="flex items-center gap-3">
                <Phone size={18} className="shrink-0 text-[#d6b45e]" />

                <a href="tel:+4512345678" className="transition hover:text-white">
                  +45 12 34 56 78
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={18} className="shrink-0 text-[#d6b45e]" />

                <a href="mailto:hello@pizzarati.dk" className="break-all transition hover:text-white">
                  hello@pizzarati.dk
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-serif text-xl text-white">{text.openingTitle}</h3>

            <div className="mt-5 space-y-3 text-sm text-white/50">
              <div className="flex justify-between gap-6">
                <span>{text.days.mondayThursday}</span>
                <span className="shrink-0 text-white/75">11:00 – 22:00</span>
              </div>

              <div className="flex justify-between gap-6">
                <span>{text.days.fridaySaturday}</span>
                <span className="shrink-0 text-white/75">11:00 – 23:00</span>
              </div>

              <div className="flex justify-between gap-6">
                <span>{text.days.sunday}</span>
                <span className="shrink-0 text-white/75">12:00 – 22:00</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-white/10 py-6 text-xs text-white/35 sm:flex-row sm:items-center sm:justify-between">
          <p>{text.copyright}</p>

          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <a href="#" className="transition hover:text-white">
              {text.privacy}
            </a>

            <a href="#" className="transition hover:text-white">
              {text.terms}
            </a>
          </div>
        </div>
      </Container>
    </footer>
  )
}
