"use client";

import Image from "next/image";
import Link from "next/link";
import NavFooter from "../components/NavFooter"
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="py-16 bg-stone-900 text-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 justify-center items-center md:grid-cols-4">

            {/* informacion */}
            <div className="flex flex-col">
              <h3 className="text-xl font-semibold text-slate-300 uppercase">información</h3>
              <p>Sobre Nosotros</p>
              <p>Contáctanos en nuestras Redes Sociales:</p>
              <div className="flex items-center gap-3 text-3xl mt-3 cursor-pointer">
                <FaFacebook />
                <FaInstagram />
                <FaWhatsapp />
              </div>
            </div>
            {/* menu web  */}
            <div className="flex flex-col">
            <h3 className="text-xl font-semibold text-slate-300 uppercase">menú</h3>
                <NavFooter />
            </div>
            {/* logo */}
            <div className="flex flex-col">
              <Link href="/">
              <Image src="/logolaludoteca.png" alt="logo" width={200} height={200} />
              </Link>
            </div>
            {/* logo webpay */}
            <div className="flex flex-col">
              <Image src="/webpay.png" alt="webpay" width={450} height={450} />
            </div>
          </div>
          {/* derechos reservados */}
            <div className="mt-12 text-center">
             <h3 className="text-xl text-slate-300">La Ludoteca - Todos los Derechos Reservados S.Guerrero</h3>
            </div>
        </div>
    </footer>
  )
}

export default Footer