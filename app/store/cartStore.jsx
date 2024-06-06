import {db} from "../../api.js"
import { create } from "zustand";


const useCartStore = create((set) => ({
  juegos: db,
  items: [],
  addToCart: (item) => set((state) => ({ items: [...state.items, item] })),
  removeCart: (id) => set((state) => ({ items: state.items.filter((item) => item.id !== id) })),
})
);

export default useCartStore;