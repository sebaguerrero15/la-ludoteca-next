"use client";

import Carrousel from "./components/Carrousel";
import Destacados from "./destacados/page";
import {Separator} from "./components/ui/separator"

export default function Home() {

  

  return (
    <section className="h-full">
      <div className="container mx-auto">
        <Carrousel />
        <Separator />
        <Destacados />
      </div>
    </section>
  );
}
