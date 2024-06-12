"use client";

import {Sheet, SheetContent, SheetTrigger} from "../components/ui/sheet"
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { FiAlignJustify } from "react-icons/fi";
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

const MobileNav = () => {
  const pathname = usePathname()


  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <FiAlignJustify className="text-4xl text-white cursor-pointer" />
      </SheetTrigger>
      <SheetContent className="flex flex-col items-center">
        {/* logo */}
        <div className="my-[50px]">
        <Link href="/">
            <Image src="/logolaludoteca.png" width={200} height={200} alt="logo web" />
            </Link>
        </div>
        <nav className="flex flex-col justify-center items-center gap-12 text-white">
          {menu.map((item, index) => (
            <Link 
            href={item.url} 
            key={index}
            className={`${item.url === pathname && "text-yellow-400"} text-xl`}
            >
              {item.nombre}</Link>
          ))}
          <Link href="/carrito"><FaShoppingCart className="text-3xl hover:text-yellow-400 transition-all duration-200"/></Link>
        </nav>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNav