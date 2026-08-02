export type ProductLanguage = 'en' | 'da'

export type ProductTranslation = {
  name: string
  description: string
  badge?: string
}

export type PizzaSizeKey = 'medium' | 'large' | 'xxl' | 'deepPan'

export type PizzaSizeOption = {
  key: PizzaSizeKey
  diameter?: number
  price: number
}

export type Product = {
  id: number

  category: 'pizza' | 'burgers' | 'kebab' | 'durum' | 'salads' | 'drinks' | 'desserts'

  price: number

  // Цена варианта «меню»: картофель фри + напиток 33 cl
  menuPrice?: number

  image: string
  rating: number
  time: number
  bestseller: boolean

  customizable?: boolean
  extraIngredientIds?: string[]

  pizzaSizes?: PizzaSizeOption[]

  translations: Record<ProductLanguage, ProductTranslation>
}
