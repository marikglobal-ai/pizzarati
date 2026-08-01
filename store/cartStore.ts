import { create } from 'zustand'

export type CartItem = {
  id: number
  name: string
  price: number
  image: string
  quantity: number
}

type CartStore = {
  items: CartItem[]
  addItem: (product: Omit<CartItem, 'quantity'>) => void
  totalItems: () => number
}

export const useCartStore = create<CartStore>((set, get) => ({
  items: [],

  addItem: product => {
    set(state => {
      const existingItem = state.items.find(item => item.id === product.id)

      if (existingItem) {
        return {
          items: state.items.map(item => (item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item))
        }
      }

      return {
        items: [
          ...state.items,
          {
            ...product,
            quantity: 1
          }
        ]
      }
    })
  },

  totalItems: () => get().items.reduce((total, item) => total + item.quantity, 0)
}))
