import { Beef, CakeSlice, CupSoda, Pizza, Salad, Sandwich, Soup } from 'lucide-react'

export type CategoryKey = 'pizza' | 'burgers' | 'kebab' | 'durum' | 'salads' | 'drinks' | 'desserts'

export const categories = [
  {
    key: 'pizza' as const,
    items: 18,
    icon: Pizza
  },
  {
    key: 'burgers' as const,
    items: 12,
    icon: Sandwich
  },
  {
    key: 'kebab' as const,
    items: 10,
    icon: Beef
  },
  {
    key: 'durum' as const,
    items: 8,
    icon: Soup
  },
  {
    key: 'salads' as const,
    items: 7,
    icon: Salad
  },
  {
    key: 'drinks' as const,
    items: 15,
    icon: CupSoda
  },
  {
    key: 'desserts' as const,
    items: 6,
    icon: CakeSlice
  }
]
