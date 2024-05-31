"use client";

import Image from "next/image";

const Footer = () => {
  return (
    <footer className="py-16 bg-zinc-900 text-white">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">

            {/* informacion */}
            <div className="flex flex-col">
              <h3 className="text-xl text-slate-300 uppercase">información</h3>
            </div>
            {/* menu web  */}
            <div className="flex flex-col">
            <h3 className="text-xl text-slate-300 uppercase">menú</h3>
            </div>
            {/* logo webpay */}
            <div className="flex flex-col gap-4">
              <Image src="/webpay.png" alt="webpay" width={450} height={450} />
            </div>
          </div>
          {/* derechos reservados */}
            <div className="mt-12 text-center">
             <h3 className="text-xl text-slate-300">Todos los Derechos Reservados S.Guerrero</h3>
            </div>
        </div>
    </footer>
  )
}

export default Footer