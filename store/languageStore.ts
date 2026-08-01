import { create } from 'zustand'
import type { Language } from '@/i18n/translations'

type LanguageStore = {
  language: Language
  setLanguage: (language: Language) => void
}

export const useLanguageStore = create<LanguageStore>(set => ({
  language: 'en',

  setLanguage: language => {
    set({ language })

    if (typeof window !== 'undefined') {
      window.localStorage.setItem('pizzarati-language', language)
    }
  }
}))
