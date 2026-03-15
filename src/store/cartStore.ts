import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import type { Product } from "../types/product";

interface CartItem extends Product {
  quantity: number;
}

interface CartState {
  items: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void; 
  clearCart: () => void;
}

export const useCartStore = create<CartState>()(
  devtools(
    persist(
      (set) => ({
        items: [],
        
        addToCart: (product) =>
          set((state) => {
            const existingItem = state.items.find((item) => item.id === product.id);
            if (existingItem) {
              return {
                items: state.items.map((item) =>
                  item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                ),
              };
            }
            return { items: [...state.items, { ...product, quantity: 1 }] };
          }),

        // НОВА Логіка видалення
        removeFromCart: (productId: string) =>
          set((state) => ({
            // Залишаємо лише ті товари, ID яких НЕ збігається з productId
            items: state.items.filter((item) => item.id !== productId),
          })),

        clearCart: () => set({ items: [] }),
      }),
      { name: "cart-storage" } 
    )
  )
);