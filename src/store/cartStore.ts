import { create } from "zustand"
import type { Product } from "../types/product"

type CartItem = Product & { quantity: number }

type CartState = {
  items: CartItem[]
  addToCart: (product: Product) => void
}

export const useCartStore = create<CartState>((set) => ({

  items: [],

  addToCart: (product) =>
    set((state) => {

      const existing = state.items.find(
        item => item.id === product.id
      )

      if (existing) {
        return {
          items: state.items.map(item =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        }
      }

      return {
        items: [...state.items, { ...product, quantity: 1 }]
      }

    })

}))