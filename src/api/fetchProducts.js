const fetchProducts = async (query) => {
  const resp = await fetch(
    `https://api.mercadolibre.com/sites/MLB/search?q=${query}`
  );
  const data = await resp.json();
  return data.results;
};

export default fetchProducts;
