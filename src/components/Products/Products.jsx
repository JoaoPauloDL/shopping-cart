import { useState } from "react";
import "./Products.css";
import { useEffect } from "react";
import fetchProducts from "../../api/fetchProducts";
import ProductCard from "../ProductCard/ProductCard";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts("tecnologia").then((response) => {
      setProducts(response);
    });
  }, []);

  console.log(products);
  return (
    <section className="products container">
      {products.map((item) => (
        <ProductCard key={item.id} product={item} />
      ))}
    </section>
  );
};

export default Products;
