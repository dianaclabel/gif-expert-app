import { GifItem } from "./Gifitem.jsx";
import { useFetchGifs } from "../hooks/useFetchGifs.js";

export const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);

  console.log({ isLoading });

  return (
    <>
      <h3>{category}</h3>

      {isLoading && <h2>cargando...</h2>}

      <div className="card-grid">
        {images.map((image) => (
          <GifItem key={image.id} {...image} />
        ))}
      </div>

      {/* <button onClick={() => setCounter(counter + 1)}> +1</button> */}
    </>
  );
};
