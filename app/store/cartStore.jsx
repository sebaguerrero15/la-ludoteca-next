import {db} from "../../api.js"
import { create } from "zustand";



const useCartStore = create((set) => ({
  juegos: db,
  items: [],
  addToCart: (item) => set((state) => ({ items: [...state.items, item] })),
  removeCart: (id) => set((state) => ({ items: state.items.filter((item) => item.id !== id) })),
  increaseCart: (id) => set((state) => ({ items: state.items.map((item) => (item.id === id && item.quantity < item.stock ? { ...item, quantity: item.quantity + 1 } : item)) })),
  decreaseCart: (id) => set((state) => ({ items: state.items.map((item) => (item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item)) })),  

  })
);

export default useCartStore;