"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";


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
    <nav className="flex flex-col justify-start gap-2 items-start text-lg uppercase">
           {menu.map((item, index) => (
            <Link 
            className={`${pathname === item.url ? "text-yellow-400" : ""}`} 
            key={index} href={item.url}
            >
                <h2>{item.nombre}</h2>
            </Link>
           ))}
        </nav>
  )
}

export default Nav