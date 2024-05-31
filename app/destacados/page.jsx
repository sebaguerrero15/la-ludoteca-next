
import Link from "next/link";
import Image from "next/image";
import { TiShoppingCart } from "react-icons/ti";
import {db} from "../data";


const Destacados = async () => {
 const juegos = await db.list();

  return (
    <section className="min-h-[80vh]">
      <div className="container mx-auto">
      <h2 className="text-2xl font-semibold text-center uppercase mt-11">
            Productos Destacados
          </h2>
        <ul className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center items-center mt-6 ">
          {juegos.map((juego, index) => (
            <li key={index} className=" flex flex-col justify-center items-center">
              <div className="flex flex-col text-center relative items-center w-[250px] h-[250px]">
                <Link href={`/${juego.id}`} key={juego.id}>
                <Image src={juego.image} alt={juego.name} fill className="object-relative" object-cover />
                </Link>
              </div>
                  <h3 className="text-bold text-xl">{juego.name}</h3>
                  <p className="text-xl font-semibold">${juego.price}</p>
                  <button className="flex items-center gap-2 p-3 rounded-lg text-white text-lg bg-red-700 mb-16">
                    Agregar
                    <TiShoppingCart className="text-2xl"/>
                  </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Destacados