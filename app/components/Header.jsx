"use client";

import Link from "next/link";
import Image from "next/image";
import Nav from "./Nav";
import MobileNav from "./MobileNav"


const Header = () => {

  return (
    <header className="py-8 text-white bg-black">
        <div className="container flex items-center">
            <div className="flex justify-start px-[120px]">
          {/* imagen logo */}
            <Link href="/">
            <Image src="/logolaludoteca.png" width={200} height={200} alt="logo web" />
            </Link>
         
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