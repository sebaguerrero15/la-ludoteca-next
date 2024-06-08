import {db} from "../../api.js"
import { create } from "zustand";
import Swal from "sweetalert2"


const useCartStore = create((set) => ({
  juegos: db,
  items: [],

  addToCart: (newItem) => set((state) => {
    const itemExists = state.items.some((item) => item.id === newItem.id);
    if (itemExists) {
      Swal.fire({
        title: "Producto Ya Existe",
        text: "Este producto ya está en el carrito.",
        icon: "warning",
      });
      return state; // No cambia el estado si el producto ya existe
    }

    return {
      items: [...state.items, newItem],
    };
  
  }),

  removeCart: (id) => {
    Swal.fire({
      title: "¿Estás seguro?",
      text: "No podrás revertir esto!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#000",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, Eliminar Producto!"
    }).then((result) => {
      if (result.isConfirmed) {
        set((state) => ({
          items: state.items.filter((item) => item.id !== id)
        }));
        Swal.fire({
          title: "Producto Eliminado!",
          text: "El producto ha sido eliminado.",
          icon: "success"
        });
      }
    });
  },

  increaseCart: (id) => set((state) => ({ items: state.items.map((item) => (item.id === id && item.quantity < item.stock ? { ...item, quantity: item.quantity + 1 } : item)) })),

  decreaseCart: (id) => set((state) => ({ items: state.items.map((item) => (item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item)) })),
  
  clearCart: () => {
    Swal.fire({
      title: "¿Estás seguro?",
      text: "Esto eliminará todos los productos del carrito.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#000",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, limpiar el carrito!"
    }).then((result) => {
      if (result.isConfirmed) {
        set({ items: [] });
        Swal.fire({
          title: "Carrito Limpio!",
          text: "Todos los productos han sido eliminados.",
          icon: "success"
        });
      }
      <Toaster position="bottom-right" reverseOrder={false} />
    });
  },

  })
);

export default useCartStore;