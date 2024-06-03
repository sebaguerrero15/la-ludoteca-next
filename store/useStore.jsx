"use client";

import { create } from "zustand"
import { persist, createJSONStorage } from "zustand/middleware"


const useStore = create(
    persist(
      (set) => ({
        cart: [],
        addToCart: (item) => set((state) => ({
          cart: [...state.cart, item]
        })),
        removeFromCart: (id) => set((state) => ({
          cart: state.cart.filter(item => item.id !== id)
        })),
        clearCart: () => set(() => ({ cart: [] })),
      }),
      {
        name: 'ludoteca-storage', // name of the item in the storage (must be unique)
        storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
      },
    )
  );
  
  export default useStore;