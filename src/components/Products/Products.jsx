import { useState } from "react";
import "./Products.css";
import { useEffect } from "react";
import fetchProducts from "../../api/fetchProducts";
import ProductCard from "../ProductCard/ProductCard";
import Loading from "../Loading/Loading";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts("tecnologia").then((response) => {
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
