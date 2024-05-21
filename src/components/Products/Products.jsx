import { useContext } from "react";
import "./Products.css";
import { useEffect } from "react";
import fetchProducts from "../../api/fetchProducts";
import ProductCard from "../ProductCard/ProductCard";
import Loading from "../Loading/Loading";
import AppContext from "../../context/AppContext";

const Products = () => {
  
  const {products, setProducts, loading, setLoading} = useContext(AppContext)

  useEffect(() => {
    fetchProducts("Mais vendidos").then((response) => {
      setProducts(response);
      setLoading(false)
    });
  }, []);

  console.log(products);
  return loading ? (
    <Loading />
  ) : (
    <section className="products container">
      {products.map((item) => (
        <ProductCard key={item.id} product={item} />
      ))}
    </section>
  );
};

export default Products;
