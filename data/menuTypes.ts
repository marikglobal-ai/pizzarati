export type ProductLanguage = 'en' | 'da'

export type ProductTranslation = {
  name: string
  description: string
  badge?: string
}

export type Product = {
  id: number

  category: 'pizza' | 'burgers' | 'kebab' | 'durum' | 'salads' | 'drinks' | 'desserts'

  price: number
  image: string
  rating: number
  time: number
  bestseller: boolean

  customizable?: boolean
  extraIngredientIds?: string[]

  translations: Record<ProductLanguage, ProductTranslation>
}
