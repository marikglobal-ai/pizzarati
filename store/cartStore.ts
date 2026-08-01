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
  isOpen: boolean

  openCart: () => void
  closeCart: () => void
  toggleCart: () => void

  addItem: (product: Omit<CartItem, 'quantity'>) => void
  increaseItem: (id: number) => void
  decreaseItem: (id: number) => void
  removeItem: (id: number) => void

  totalItems: () => number
  totalPrice: () => number
}

export const useCartStore = create<CartStore>((set, get) => ({
  items: [],
  isOpen: false,

  openCart: () => set({ isOpen: true }),

  closeCart: () => set({ isOpen: false }),

  toggleCart: () =>
    set(state => ({
      isOpen: !state.isOpen
    })),

  addItem: product => {
    set(state => {
      const existingItem = state.items.find(item => item.id === product.id)

      if (existingItem) {
        return {
          items: state.items.map(item => (item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item)),
          isOpen: true
        }
      }

      return {
        items: [
          ...state.items,
          {
            ...product,
            quantity: 1
          }
        ],
        isOpen: true
      }
    })
  },

  increaseItem: id =>
    set(state => ({
      items: state.items.map(item => (item.id === id ? { ...item, quantity: item.quantity + 1 } : item))
    })),

  decreaseItem: id =>
    set(state => ({
      items: state.items
        .map(item => (item.id === id ? { ...item, quantity: item.quantity - 1 } : item))
        .filter(item => item.quantity > 0)
    })),

  removeItem: id =>
    set(state => ({
      items: state.items.filter(item => item.id !== id)
    })),

  totalItems: () => get().items.reduce((total, item) => total + item.quantity, 0),

  totalPrice: () => get().items.reduce((total, item) => total + item.price * item.quantity, 0)
}))
