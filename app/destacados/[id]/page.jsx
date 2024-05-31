
import db  from "../../data";

export default  async function ProductDetails({ params: { id } }) {
  const juego = await db.fetch(id);

  return (

    <article>
      <h1>{juego.id}</h1>
    </article>
  );
};

