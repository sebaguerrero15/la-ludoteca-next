import api from "../../../api";
import Image from "next/image";
import { TiShoppingCart } from "react-icons/ti";

const page = async ({ params: { id } }) => {
  const juego = await api.fetch(id);

  return (
    <section className="container mx-auto">
      <div className="min-h-[80vh] grid grid-cols-1 gap-4 md:grid-cols-2 justify-center items-center mb-14">
        <div className="mt-12">
          <Image src={juego.image} alt={juego.name} width={600} height={600} />
        </div>

        <div className="flex flex-col">
          <h3 className="text-4xl font-semibold mt-8">{juego.name}</h3>
          <div className="flex justify-between items-center gap-4">
            <p className="text-2xl font-semibold mt-6">${juego.price}</p>
            <button className="flex items-center mt-4 p-4 rounded-xl text-white text-lg bg-red-700 uppercase">
              Agregar
              <TiShoppingCart className="text-2xl" />
            </button>
          </div>

          <p className="text-lg mt-4 text-justify">{juego.description}</p>
          <h4 className="mt-4 text-xl font-semibold">Contenido</h4>
          <p className="text-lg mt-4 text-justify">{juego.contenido}</p>
        </div>
      </div>
    </section>
  );
};

export default page;
