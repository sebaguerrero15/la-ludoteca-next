

import Carrousel from "./components/Carrousel";
import Destacados from "./destacados/page";


export const metadata = {
  title: 'La Ludoteca',
  description: 'Tienda de Juegos de Mesa y Accesorios',
}

export default function Home() {

  return (
    <main className="h-full">
      <div className="container mx-auto">
        <Carrousel />
        <Destacados />
      </div>
    </main>
  );
}
