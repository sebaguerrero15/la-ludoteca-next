"use client";

import Link from "next/link";
import { TiShoppingCart } from "react-icons/ti";
import formatCurrency from "../../helpers/currency"
import toast, {Toaster} from 'react-hot-toast';
import useCartStore from "../../store/cartStore";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css"
import api from "../../../api"


// export async function generateMetadata() {
//   return {
//     title: `${juegos.name} - La Ludoteca`,
//     description: juegos.description,
//   };
// }

const JuegoId = ({ params: { id } }) => {
  const notify = () => toast.success('Producto Agregado al Carrito de Compras', {
    style: {
      border: '1px solid #000000',
      padding: '16px',
      color: '#000000',
    },
    iconTheme: {
      primary: '#000000',
      secondary: '#FFFAEE',
    },
  });
  const addToCart = useCartStore((state) => state.addToCart);
 const juegos = api.fetch(id)

  return (
    <section className="container mx-auto">
      <title>{juegos.name}</title>
      <div className="min-h-[80vh] grid grid-cols-1 gap-4 md:grid-cols-2 justify-center items-center mb-14">
        <div className="mt-12">
            <ImageGallery 
            items={juegos.images} 
            showPlayButton={false} 
            showFullscreenButton={false}
            showNav={false}
            />
        </div>

        <div className="flex flex-col">
          <h3 className="text-4xl font-semibold mt-8">{juegos.name}</h3>
          <div className="flex justify-between items-center gap-4">
            <p className="text-2xl font-semibold mt-6">{formatCurrency(juegos.price)}</p>
              <div className="flex justify-center items-center gap-4">

              {juegos.stock == 0 ? (<button disabled={juegos.stock == 0} className="flex items-center font-bold mt-4 px-3 py-1 rounded-3xl border-2 border-slate-800 text-slate-800 text-lg bg-transparent transition-all duration-300 uppercase">Sin Stock</button>):(
                <button onClick={() => {addToCart(juegos); notify()}} className="flex items-center font-bold mt-4 px-3 py-1 rounded-3xl border-2 border-slate-800 hover:bg-sky-950 hover:text-white text-slate-800 text-lg bg-transparent transition-all duration-300 uppercase">
                  Agregar
                  <TiShoppingCart className="text-2xl" />
                </button >)}


                <Link href="/carrito">
                <button className="flex items-center font-bold mt-4 px-3 py-1 rounded-3xl border-2 border-slate-800 hover:bg-sky-950 hover:text-white text-slate-800 text-lg bg-transparent transition-all duration-300 uppercase">
                  Ir al Carrito
                </button>
                </Link>
                <Toaster position="bottom-right" reverseOrder={false} />
              </div>
          </div>

          <p className="text-lg mt-4 text-justify">{juegos.description}</p>
            <div className="bg-gray-300 rounded-xl mt-2 px-3">
              <h4 className="mt-4 text-xl font-semibold">Contenido:</h4>
              <p className="text-lg text-justify">{juegos.contenido}</p>
            </div>
        </div>
      </div>
        <div className="flex justify-center my-10">
          <iframe src={juegos.video} frameborder="0" width={800} height={800}></iframe>
        </div>
    </section>
  );
};

export default JuegoId;
