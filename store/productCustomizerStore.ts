import { create } from 'zustand'

export type CustomizerProduct = {
  id: number
  name: string
  description: string
  price: number
  image: string
  rating: number
  time: string
  badge?: string
  extraIngredientIds?: string[]
}

export type CustomizerInitialValues = {
  cartId: string
  selectedExtraIds: string[]
  quantity: number
  note: string
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
