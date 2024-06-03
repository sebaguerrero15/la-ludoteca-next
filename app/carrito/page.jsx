"use client";

import Image from "next/image";
import useStore from "../../store/useStore"

const Carrito = () => {
  const cart = useStore((state) => state.cart);
  const remove = useStore((state) => state.removeFromCart);

  return (
    <section className="min-h-[80vh]">
      <div className="container mx-auto">
      <h2 className="text-2xl font-bold text-center uppercase m-8">Carrito de Compras</h2>
      {cart.map((item) => (
        <>
        <div key={item.id} className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
          <div className="flex items-center gap-4 mt-4">
            <Image src={item.image} alt={item.name} width={100} height={100} />
            <h4 className="text-xl">{item.name}</h4>
          </div>
            <div className="flex items-center space-x-[120px]">
              <p className="text-xl">Cantidad: 1</p>
              <p className="text-xl font-semibold">$ {item.price}</p>
              <button onClick={() => remove(item.id)} className="p-3 rounded-md text-white bg-red-700">X</button>
            </div>
        </div>
      <div className="border-b border-3 border-slate-400 m-4"></div>
      </>
      ))}
      <div className="flex justify-end items-center gap-8 mr-[250px] py-5">
        <p className="text-2xl font-bold">Total a Pagar:</p>
        <p className="text-center">$ 5.000</p>
      </div>
      </div>
    </section>
  )
}

export default Carrito