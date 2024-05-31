"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaShoppingCart } from "react-icons/fa";



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

  return (
    <nav className="flex justify-center items-center gap-8 text-lg uppercase">
           {menu.map((item, index) => (
            <Link 
            className={pathname === item.url ? "text-amber-500" : ""} 
            key={index} href={item.url}
            >
                <h2>{item.nombre}</h2>
            </Link>
           ))}
           <Link href="/carrito">
            <button>
            <FaShoppingCart className="text-2xl"/>
            </button></Link>
        </nav>
  )
}

export default Nav