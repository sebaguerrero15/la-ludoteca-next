"use client";

import Carrousel from "./components/Carrousel";
import Destacados from "./destacados/page";

export default function Home() {

  

  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        {/* carrousel */}
        <Carrousel />
        <Destacados />
      </div>
    </section>
  );
}
