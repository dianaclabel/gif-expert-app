export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=SqRM3ZfhIjlTAYZgWz2WYbGSVIKhqE7P&q=${category}&limit=10`;
  // nos otorgara 10 imegenes porque hemos puesto el parametro " limit = 10 " en la url
  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }));

  return gifs;
};
