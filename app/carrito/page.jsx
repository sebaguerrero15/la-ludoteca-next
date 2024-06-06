"use client";

import { useMemo } from "react";
import Image from "next/image";
import { FaRegArrowAltCircleLeft, FaRegArrowAltCircleRight } from "react-icons/fa";
import useCartStore  from "../store/cartStore";

function Carrito() {
  const items = useCartStore((state) => state.items);
  const remove = useCartStore((state) => state.removeCart);
  const totalPago = useMemo(() => items.reduce((acc, item) => acc + item.price, 0), [items]);


  return (
    <>
    {items == 0 ? (<p className="min-h-[80vh] mt-12 text-2xl text-center">Tu carrito esta vacio</p>)
      :(<section className="min-h-[80vh]">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold text-center uppercase m-8">Carrito de Compras</h2>
          {items.map((item) => (
            <>
              <div key={item.id} className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
                <div className="flex items-center gap-4 mt-4">
                  <Image src={item.image} alt={item.name} width={100} height={100} />
                  <h4 className="text-xl">{item.name}</h4>
                </div>
                <div className="flex items-center space-x-[120px]">
                  <div className="flex items-center gap-4 text-xl">
                    <p className="text-xl">Cantidad:</p>
                  <FaRegArrowAltCircleLeft  className="text-3xl" />
                  <p className="px-2 border-2 border-slate-900">1</p>
                  <FaRegArrowAltCircleRight className="text-3xl" />
                  </div>
                  <p className="text-xl font-semibold">$ {item.price}</p>
                  <button onClick={() => remove(item.id)} className="px-3 py-1 font-bold rounded-full text-white bg-red-700">x</button>
                  
                </div>
              </div>
              <div className="border-b border-3 border-slate-400 m-4"></div>
            </>
          ))}
          <div className="flex justify-end items-center gap-8 mr-[250px] py-5">
            <p className="text-2xl font-bold border-b-2 border-zinc-950">Total a Pagar:</p>
            <p className="text-center text-3xl font-bold">$ {totalPago}</p>
          </div>
        </div>
      </section>
      )} 
    </>
    )
    }

export default Carrito