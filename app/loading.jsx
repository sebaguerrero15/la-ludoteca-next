"use client";

import {PacmanLoader} from "react-spinners"

const Loading = () => {
  return (
    <section className="min-h-[80vh] flex justify-center items-center">
        <div className="mx-auto">
            <PacmanLoader color="#1F2937" />
        </div>
    </section>
  )
}

export default Loading