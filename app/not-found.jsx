"use client";

import Image from "next/image";

export default function Custom404() {
    return (

    <section className="min-h-[80vh]">
      <div className="flex justify-center">
        <Image src={"/error404.png"} width={650} height={650} alt="error 404" className="object-cover" object-cover={true} />
      </div>
    </section>

    )
  }