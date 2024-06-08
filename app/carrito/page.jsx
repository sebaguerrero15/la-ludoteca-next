"use client";

import { useMemo } from "react";
import Image from "next/image";
import formatCurrency from "../helpers/currency"
import { FaRegArrowAltCircleLeft, FaRegArrowAltCircleRight } from "react-icons/fa";
import { TiDelete } from "react-icons/ti";
import useCartStore  from "../store/cartStore";

function Carrito() {
  const items = useCartStore((state) => state.items);
  const remove = useCartStore((state) => state.removeCart);
  const increase = useCartStore((state) => state.increaseCart);
  const decrease = useCartStore((state) => state.decreaseCart);
  const clear = useCartStore((state) => state.clearCart);
  const totalPago = useMemo(() => items.reduce((acc, item) => acc + (item.price * item.quantity), 0), [items]);



  return (
    <>
    {items == 0 ? (<p className="min-h-[80vh] mt-12 text-2xl text-center">Tu carrito de compras esta vacio</p>)
      :(<section className="min-h-[80vh]">
        <div>
          <h2 className="text-2xl font-bold text-center uppercase m-8">Carrito de Compras</h2>
          {items.map((item) => (
            <>
              <div key={item.id} className="grid grid-cols-1 lg:grid-cols-2">
                <div className="flex items-center gap-4 mt-4">
                  <Image src={item.image} alt={item.name} width={100} height={100} />
                  <h4 className="text-xl">{item.name}</h4>
                </div>
                <div className="flex items-center space-x-[50px] xl:space-x-[120px]">
                  <div className="flex items-center gap-4 text-xl">
                    <p className="text-xl">Cantidad:</p>
                  <FaRegArrowAltCircleLeft onClick={() => decrease(item.id)}  className="text-3xl cursor-pointer" />
                  <p className="px-2 border-2 border-slate-900">{item.quantity}</p>
                  <FaRegArrowAltCircleRight onClick={() => increase(item.id)} className="text-3xl cursor-pointer" />
                  </div>
                  <p className="text-xl font-semibold">{formatCurrency(item.price)}</p>
                  <button onClick={() => remove(item.id)}>
                    <TiDelete className="text-4xl text-red-600" />
                  </button>
                  
                </div>
              </div>
              <div className="border-b border-3 border-slate-400 m-4"></div>
            </>
          ))}
          <div className="flex justify-end items-center gap-8 mr-[130px] py-5">
            <p className="text-2xl font-bold border-b-2 border-zinc-950">Total a Pagar:</p>
            <p className="text-center text-3xl font-bold">{formatCurrency(totalPago)}</p>
            <button onClick={() => clear()} className="ml-12 p-2 font-semibold border-2 border-slate-900 rounded-xl hover:bg-slate-700 hover:text-white transition-all duration-300">Vaciar Carrito</button>
          </div>
        </div>
      </section>
      )} 
    </>
    )
    }

export default Carrito