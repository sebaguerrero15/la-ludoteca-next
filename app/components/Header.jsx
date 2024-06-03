"use client";

import Link from "next/link";
import Image from "next/image";
import Nav from "./Nav";
import MobileNav from "./MobileNav"


const Header = () => {


    
  return (
    <header className="py-8 text-white bg-gray-800">
        <div className="container mx-auto flex items-center">
            <div className="flex justify-start px-[120px]">
            <Link href="/">
                <h1 className="text-4xl font-bold">La Ludoteca</h1>
            </Link>
          {/* imagen logo */}
          {/* <Image src="/logo.png" width={100} height={100} alt="logo web" /> */}
            </div>
            
        

        {/* desktop nav */}
        <div className="hidden md:flex items-center justify-center gap-8">
          <Nav /> 
        </div>

        <div className="md:hidden sm:flex sm:mr-0">
            <MobileNav />
        </div>
        </div>

        
    </header>
  )
}

export default Header