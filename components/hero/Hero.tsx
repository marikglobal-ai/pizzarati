'use client'

import Image from 'next/image'
import { Play } from 'lucide-react'

import Button from '@/components/ui/Button'
import { translations } from '@/i18n/translations'
import { useLanguageStore } from '@/store/languageStore'

const stats = [
  {
    value: '4.9',
    key: 'rating',
    icon: '★'
  },
  {
    value: '20 min',
    key: 'delivery',
    icon: '◷'
  },
  {
    value: '12K+',
    key: 'customers',
    icon: '☺'
  }
] as const

export default function Hero() {
  const language = useLanguageStore(state => state.language)
  const t = translations[language]

  return (
    <section id="home" className="relative overflow-hidden border-b border-white/10 bg-[#090909] pt-20 lg:pt-24">
      <div className="pointer-events-none absolute left-[10%] top-20 h-72 w-72 rounded-full bg-[#c9a34d]/10 blur-[120px] sm:h-96 sm:w-96" />

      <div className="mx-auto grid max-w-[1440px] lg:min-h-[620px] lg:grid-cols-[44%_56%]">
        <div className="relative z-10 flex flex-col justify-center px-5 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-14 xl:px-16">
          <div className="mb-5 flex items-center gap-3 sm:mb-6 sm:gap-4">
            <span className="h-px w-8 bg-[#d5b158] sm:w-10" />

            <p className="text-[10px] font-medium uppercase tracking-[2.5px] text-[#d5b158] sm:text-xs sm:tracking-[3px]">
              {t.hero.eyebrow}
            </p>
          </div>

          <h1 className="font-serif text-[46px] font-medium uppercase leading-[0.92] tracking-[-1.5px] text-white sm:text-[62px] lg:text-[74px] xl:text-[86px]">
            {t.hero.titleFirst}
            <br />
            {t.hero.titleSecond}
            <br />
            <span className="text-[#d5b158]">{t.hero.titleAccent}</span>
          </h1>

          <p className="mt-6 max-w-lg text-sm leading-7 text-white/60 sm:mt-7 sm:text-base">{t.hero.description}</p>

          <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:gap-4">
            <Button className="w-full sm:w-auto">
              {t.hero.orderNow}
              <span aria-hidden="true">→</span>
            </Button>

            <Button variant="outline" className="w-full sm:w-auto">
              {t.hero.viewMenu}
            </Button>
          </div>

          <div className="mt-8 grid max-w-xl grid-cols-3 divide-x divide-[#d5b158]/25 sm:mt-10">
            {stats.map(item => (
              <div key={item.key} className="min-w-0 px-2 first:pl-0 sm:px-5 sm:first:pl-0">
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <span className="text-base text-[#d5b158] sm:text-lg">{item.icon}</span>

                  <span className="truncate text-sm font-semibold uppercase text-[#e2c46e] sm:text-lg lg:text-xl">
                    {item.value}
                  </span>
                </div>

                <p className="mt-1 text-[9px] leading-4 text-white/45 sm:text-[11px]">{t.hero.stats[item.key]}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative min-h-[360px] overflow-hidden sm:min-h-[460px] lg:min-h-full">
          <Image
            src="https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=1600&q=90"
            alt="Fresh Pizzarati pizza"
            fill
            priority
            unoptimized
            sizes="(max-width: 1024px) 100vw, 56vw"
            className="object-cover transition-transform duration-700 hover:scale-[1.03]"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/10" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#090909] via-[#090909]/15 to-transparent lg:z-10" />

          <button
            type="button"
            className="absolute bottom-5 right-5 z-20 flex items-center gap-3 text-left sm:bottom-8 sm:right-8 lg:bottom-10 lg:right-10"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-full border border-[#d5b158] bg-black/55 text-[#d5b158] backdrop-blur-md transition hover:bg-[#d5b158] hover:text-black sm:h-14 sm:w-14">
              <Play size={18} fill="currentColor" />
            </span>

            <span className="text-[10px] font-medium uppercase tracking-[1px] text-white sm:text-xs">
              {t.hero.watch}
              <br />
              {t.hero.ourStory}
            </span>
          </button>
        </div>
      </div>
    </section>
  )
}
