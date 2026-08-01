import { create } from 'zustand'
import type { CategoryKey } from '@/constants/categories'

type MenuStore = {
  activeCategory: CategoryKey
  searchQuery: string
  setActiveCategory: (category: CategoryKey) => void
  setSearchQuery: (query: string) => void
}

export const useMenuStore = create<MenuStore>(set => ({
  activeCategory: 'pizza',
  searchQuery: '',

  setActiveCategory: category =>
    set({
      activeCategory: category,
      searchQuery: ''
    }),

  setSearchQuery: query =>
    set({
      searchQuery: query
    })
}))
