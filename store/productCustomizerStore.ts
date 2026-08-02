import { create } from 'zustand'

import type { PizzaSizeOption } from '@/data/menuTypes'

export type CustomizerProduct = {
  id: number
  name: string
  description: string
  price: number
  menuPrice?: number
  image: string
  rating: number
  time: string
  badge?: string
  extraIngredientIds?: string[]
  pizzaSizes?: PizzaSizeOption[]
}

export type CustomizerInitialValues = {
  cartId: string
  selectedExtraIds: string[]
  quantity: number
  note: string
  selectedSizeKey?: string
  selectedDoughKey?: string
  selectedMealKey?: string
}

type ProductCustomizerStore = {
  product: CustomizerProduct | null
  initialValues: CustomizerInitialValues | null
  isOpen: boolean

  openCustomizer: (product: CustomizerProduct, initialValues?: CustomizerInitialValues) => void

  closeCustomizer: () => void
}

export const useProductCustomizerStore = create<ProductCustomizerStore>(set => ({
  product: null,
  initialValues: null,
  isOpen: false,

  openCustomizer: (product, initialValues) =>
    set({
      product,
      initialValues: initialValues ?? null,
      isOpen: true
    }),

  closeCustomizer: () =>
    set({
      product: null,
      initialValues: null,
      isOpen: false
    })
}))
