export const GifGrid = ({ category }) => {
  const getGift = async () => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=SqRM3ZfhIjlTAYZgWz2WYbGSVIKhqE7P&q=${category}&limit=20`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map((img) => ({
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url,
    }));

    console.log(gifs);
  };

  getGift();

  return (
    <>
      <h3>{category}</h3>
      <p>Hola mundo</p>
    </>
  );
};
