"use client";
import Link from "next/link";
import Image from "next/image";
import toast, {Toaster} from 'react-hot-toast';
import { TiShoppingCart } from "react-icons/ti";
import useCartStore  from "../store/cartStore";


//  export const metadata = {
//   title: 'Destacados - La Ludoteca',
//   description: 'Juegos de mesa destacados por nuestros clientes',
// }

const Destacados = () => {
  const notify = () => toast.success('Producto Agregado al Carrito de Compras', {
    style: {
      border: '1px solid #713200',
      padding: '16px',
      color: '#713200',
    },
    iconTheme: {
      primary: '#713200',
      secondary: '#FFFAEE',
    },
  });
  const juegos = useCartStore((state) => state.juegos);
  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <section className="min-h-[80vh]">
      <div className="container mx-auto">
      <h2 className="text-2xl font-semibold text-center uppercase mt-11">
            Productos Destacados
          </h2>
        <ul className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center items-center mt-6 ">
          {juegos.map((juego) => (
            <li key={juego.id} className=" flex flex-col justify-center items-center">
              <div className="flex flex-col text-center relative items-center w-[250px] h-[250px]">
                <Link href={`/destacados/${juego.id}`}>
                <Image src={juego.image} alt={juego.name} fill className="object-relative" />
                </Link>
              </div>
                  <h3 className="text-bold text-xl">{juego.name}</h3>
                  <p className="text-xl font-semibold">${juego.price}</p>

                  {juego.stock == 0 ? (<button disabled={juego.stock == 0} className="px-3 py-1 rounded-3xl border-2 border-slate-800 text-slate-800 text-lg bg-transparent mb-16">Sin Stock</button>):(
                  <button onClick={() => {addToCart(juego); notify()}} className="flex items-center gap-2 px-3 py-1 rounded-3xl border-2 border-slate-800 hover:bg-sky-950 hover:text-white text-slate-800 text-lg bg-transparent mb-16 transition-all duration-300">
                    Agregar
                    <TiShoppingCart className="text-2xl"/>
                  </button>)}

                  <Toaster position="bottom-right" reverseOrder={false} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Destacados