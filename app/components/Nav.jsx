"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaShoppingCart } from "react-icons/fa";
import useCartStore from "../store/cartStore"

const menu = [
    {
        nombre: "Juegos Destacados",
        url: "/destacados"
    },
    {
        nombre: "Accesorios",
        url: "/accesorios"
    },
    {
        nombre: "Todos los Juegos", 
        url: "/todos"
    },
]

const Nav = () => {
    const pathname = usePathname();
    const carritoItems = useCartStore((state) => state.items);

  return (
    <nav className="flex justify-center items-center gap-8 text-lg uppercase">
           {menu.map((item, index) => (
            <Link 
            className={`${pathname === item.url ? "text-amber-500" : ""}`} 
            key={index} href={item.url}
            >
                <p className="hover:border-b hover:transition-all duration-50 font-semibold">{item.nombre}</p>
            </Link>
           ))}
           <Link href="/carrito">
            <button>
                <span className="text-sm font-bold absolute rounded-full bg-emerald-500 text-white px-1">{carritoItems.length}</span>
                <FaShoppingCart className="text-3xl"/>
            </button>
            </Link>
        </nav>
  )
}

export default Nav