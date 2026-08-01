import { create } from 'zustand'

export type CartExtra = {
  id: string
  name: string
  price: number
}

export type CartItem = {
  cartId: string
  id: number
  name: string
  price: number
  image: string
  quantity: number
  extras?: CartExtra[]
  note?: string
}

type AddCartItem = Omit<CartItem, 'cartId' | 'quantity'> & {
  quantity?: number
}

type CartStore = {
  items: CartItem[]
  isOpen: boolean

  openCart: () => void
  closeCart: () => void
  toggleCart: () => void

  addItem: (product: AddCartItem) => void
  increaseItem: (cartId: string) => void
  decreaseItem: (cartId: string) => void
  removeItem: (cartId: string) => void

  totalItems: () => number
  totalPrice: () => number
}

function createCartId(product: AddCartItem) {
  const extrasKey = [...(product.extras ?? [])]
    .map(extra => extra.id)
    .sort()
    .join('-')

  const noteKey = product.note?.trim().toLowerCase() ?? ''

  return `${product.id}-${extrasKey}-${noteKey}`
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
      const cartId = createCartId(product)
      const quantity = product.quantity ?? 1

      const existingItem = state.items.find(item => item.cartId === cartId)

      if (existingItem) {
        return {
          items: state.items.map(item =>
            item.cartId === cartId
              ? {
                  ...item,
                  quantity: item.quantity + quantity
                }
              : item
          ),
          isOpen: true
        }
      }

      return {
        items: [
          ...state.items,
          {
            ...product,
            cartId,
            quantity
          }
        ],
        isOpen: true
      }
    })
  },

  increaseItem: cartId =>
    set(state => ({
      items: state.items.map(item => (item.cartId === cartId ? { ...item, quantity: item.quantity + 1 } : item))
    })),

  decreaseItem: cartId =>
    set(state => ({
      items: state.items
        .map(item => (item.cartId === cartId ? { ...item, quantity: item.quantity - 1 } : item))
        .filter(item => item.quantity > 0)
    })),

  removeItem: cartId =>
    set(state => ({
      items: state.items.filter(item => item.cartId !== cartId)
    })),

  totalItems: () => get().items.reduce((total, item) => total + item.quantity, 0),

  totalPrice: () => get().items.reduce((total, item) => total + item.price * item.quantity, 0)
}))
