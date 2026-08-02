import { create } from 'zustand'
import type { PizzaSizeKey } from '@/data/menuTypes'

export type CartExtra = {
  id: string
  name: string
  price: number
}

export type CartPizzaSize = {
  key: PizzaSizeKey
  name: string
  diameter?: number
}

export type CartDough = {
  key: string
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
  pizzaSize?: CartPizzaSize
  dough?: CartDough
  note?: string
}

type CartItemInput = Omit<CartItem, 'cartId' | 'quantity'> & {
  quantity?: number
}

type CartStore = {
  items: CartItem[]
  isOpen: boolean

  openCart: () => void
  closeCart: () => void
  toggleCart: () => void

  addItem: (product: CartItemInput) => void
  updateItem: (cartId: string, product: CartItemInput) => void

  increaseItem: (cartId: string) => void
  decreaseItem: (cartId: string) => void
  removeItem: (cartId: string) => void

  totalItems: () => number
  totalPrice: () => number
}

function createCartId(product: CartItemInput) {
  const extrasKey = [...(product.extras ?? [])]
    .map(extra => extra.id)
    .sort()
    .join('-')

  const sizeKey = product.pizzaSize?.key ?? ''
  const doughKey = product.dough?.key ?? ''
  const noteKey = product.note?.trim().toLowerCase() ?? ''

  return `${product.id}-${sizeKey}-${doughKey}-${extrasKey}-${noteKey}`
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

  updateItem: (oldCartId, product) => {
    set(state => {
      const newCartId = createCartId(product)
      const quantity = product.quantity ?? 1

      const matchingItem = state.items.find(item => item.cartId === newCartId && item.cartId !== oldCartId)

      if (matchingItem) {
        return {
          items: state.items
            .filter(item => item.cartId !== oldCartId)
            .map(item =>
              item.cartId === newCartId
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
        items: state.items.map(item =>
          item.cartId === oldCartId
            ? {
                ...product,
                cartId: newCartId,
                quantity
              }
            : item
        ),
        isOpen: true
      }
    })
  },

  increaseItem: cartId =>
    set(state => ({
      items: state.items.map(item =>
        item.cartId === cartId
          ? {
              ...item,
              quantity: item.quantity + 1
            }
          : item
      )
    })),

  decreaseItem: cartId =>
    set(state => ({
      items: state.items
        .map(item =>
          item.cartId === cartId
            ? {
                ...item,
                quantity: item.quantity - 1
              }
            : item
        )
        .filter(item => item.quantity > 0)
    })),

  removeItem: cartId =>
    set(state => ({
      items: state.items.filter(item => item.cartId !== cartId)
    })),

  totalItems: () => get().items.reduce((total, item) => total + item.quantity, 0),

  totalPrice: () => get().items.reduce((total, item) => total + item.price * item.quantity, 0)
}))
