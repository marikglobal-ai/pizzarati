'use client'

import Image from 'next/image'
import { Menu, ShoppingCart, X } from 'lucide-react'
import { useEffect, useState } from 'react'

import { translations } from '@/i18n/translations'
import { useCartStore } from '@/store/cartStore'
import { useLanguageStore } from '@/store/languageStore'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const openCart = useCartStore(state => state.openCart)
  const totalItems = useCartStore(state => state.items.reduce((total, item) => total + item.quantity, 0))

  const language = useLanguageStore(state => state.language)
  const setLanguage = useLanguageStore(state => state.setLanguage)

  const t = translations[language]

  useEffect(() => {
    const savedLanguage = window.localStorage.getItem('pizzarati-language')

    if (savedLanguage === 'en' || savedLanguage === 'da') {
      setLanguage(savedLanguage)
    }
  }, [setLanguage])

  function closeMobileMenu() {
    setIsMenuOpen(false)
  }

  const navigation = [
    { label: t.navbar.home, href: '#home' },
    { label: t.navbar.menu, href: '#menu' },
    { label: t.navbar.about, href: '#about' },
    { label: t.navbar.delivery, href: '#delivery' },
    { label: t.navbar.contact, href: '#contact' }
  ]

  return (
    <>
      <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-black/80 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-4 sm:px-6 lg:h-24 lg:px-12">
          <a href="#home" onClick={closeMobileMenu} className="flex shrink-0 items-center gap-3">
            <Image
              src="/logo/pizzarati-logo.png"
              alt="Pizzarati logo"
              width={64}
              height={64}
              priority
              className="h-12 w-12 object-contain sm:h-14 sm:w-14 lg:h-16 lg:w-16"
            />

            <span className="hidden font-serif text-lg tracking-[3px] text-[#d6b45e] sm:block lg:text-xl">
              PIZZARATI
            </span>
          </a>

          <nav className="hidden items-center gap-7 lg:flex xl:gap-10">
            {navigation.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                className={`
                  text-xs font-medium uppercase tracking-[2px]
                  transition hover:text-[#d6b45e]
                  ${index === 0 ? 'text-[#d6b45e]' : 'text-white/75'}
                `}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <div className="hidden items-center rounded-full border border-white/10 bg-white/[0.03] p-1 sm:flex">
              <button
                type="button"
                onClick={() => setLanguage('en')}
                aria-pressed={language === 'en'}
                className={`
                  rounded-full px-3 py-1.5 text-[10px] font-bold uppercase transition
                  ${language === 'en' ? 'bg-[#d6b45e] text-black' : 'text-white/55 hover:text-white'}
                `}
              >
                EN
              </button>

              <button
                type="button"
                onClick={() => setLanguage('da')}
                aria-pressed={language === 'da'}
                className={`
                  rounded-full px-3 py-1.5 text-[10px] font-bold uppercase transition
                  ${language === 'da' ? 'bg-[#d6b45e] text-black' : 'text-white/55 hover:text-white'}
                `}
              >
                DA
              </button>
            </div>

            <button
              type="button"
              onClick={openCart}
              aria-label={t.navbar.openCart}
              className="relative flex h-11 w-11 items-center justify-center rounded-full border border-[#d6b45e]/60 text-[#d6b45e] transition duration-300 hover:bg-[#d6b45e] hover:text-black sm:h-12 sm:w-12"
            >
              <ShoppingCart size={19} strokeWidth={1.7} />

              <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-[#d6b45e] px-1 text-[10px] font-bold text-black">
                {totalItems}
              </span>
            </button>

            <a
              href="#menu"
              className="hidden rounded-lg border border-[#d6b45e] px-5 py-3 text-xs font-semibold uppercase tracking-[1.8px] text-[#d6b45e] transition duration-300 hover:bg-[#d6b45e] hover:text-black xl:inline-flex"
            >
              {t.navbar.orderNow}
            </a>

            <button
              type="button"
              onClick={() => setIsMenuOpen(current => !current)}
              aria-label={isMenuOpen ? t.navbar.closeMenu : t.navbar.openMenu}
              aria-expanded={isMenuOpen}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white transition hover:border-[#d6b45e] hover:text-[#d6b45e] lg:hidden"
            >
              {isMenuOpen ? <X size={21} /> : <Menu size={21} />}
            </button>
          </div>
        </div>
      </header>

      <div
        className={`
          fixed inset-0 z-40 bg-black/75 backdrop-blur-sm
          transition-all duration-300 lg:hidden
          ${isMenuOpen ? 'visible opacity-100' : 'invisible opacity-0'}
        `}
        onClick={closeMobileMenu}
      >
        <nav
          className={`
            ml-auto flex h-full w-full max-w-sm flex-col
            border-l border-white/10 bg-[#0b0b0b]
            px-6 pb-8 pt-28 transition-transform duration-300
            ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
          `}
          onClick={event => event.stopPropagation()}
        >
          <div className="flex flex-col gap-1">
            {navigation.map(item => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMobileMenu}
                className="border-b border-white/10 py-5 font-serif text-2xl text-white transition hover:text-[#d6b45e]"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="mt-auto">
            <p className="mb-3 text-[10px] font-semibold uppercase tracking-[2px] text-white/40">{t.navbar.language}</p>

            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => setLanguage('en')}
                className={`
                  flex-1 rounded-xl px-4 py-3 text-xs font-bold uppercase transition
                  ${
                    language === 'en'
                      ? 'bg-[#d6b45e] text-black'
                      : 'border border-white/10 text-white/60 hover:border-[#d6b45e] hover:text-[#d6b45e]'
                  }
                `}
              >
                {t.navbar.english}
              </button>

              <button
                type="button"
                onClick={() => setLanguage('da')}
                className={`
                  flex-1 rounded-xl px-4 py-3 text-xs font-bold uppercase transition
                  ${
                    language === 'da'
                      ? 'bg-[#d6b45e] text-black'
                      : 'border border-white/10 text-white/60 hover:border-[#d6b45e] hover:text-[#d6b45e]'
                  }
                `}
              >
                {t.navbar.danish}
              </button>
            </div>

            <a
              href="#menu"
              onClick={closeMobileMenu}
              className="mt-4 flex w-full items-center justify-center rounded-xl border border-[#d6b45e] px-5 py-4 text-xs font-semibold uppercase tracking-[2px] text-[#d6b45e]"
            >
              {t.navbar.orderNow}
            </a>
          </div>
        </nav>
      </div>
    </>
  )
}
