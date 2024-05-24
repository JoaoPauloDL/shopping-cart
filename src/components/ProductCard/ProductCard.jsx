import { BsFillCartPlusFill } from "react-icons/bs";
import "./ProductCard.css";
import propTypes from "prop-types";
import formatCurrency from "../../utils/formatCurrency";
import { useContext } from "react";
import AppContext from "../../context/AppContext";

const ProductCard = ({ product }) => {
  const { cartItems, setCartItems } = useContext(AppContext);

  const handleAddCart = () => {
    setCartItems([...cartItems, product]);
  };
  return (
    <section className="product-card">
      <img
        src={product.thumbnail.replace(/\w\.jpg/gi, "W.jpg")}
        alt="product"
        className="card__image"
      />

      <div className="card__infos">
        <h2 className="card__price">{formatCurrency(product.price)}</h2>
        <h2 className="card__title"> {product.title}</h2>
      </div>
      <button
        type="button"
        className="button__add-cart"
        onClick={handleAddCart}
      >
        <BsFillCartPlusFill />
      </button>
    </section>
  );
};

ProductCard.propTypes = {
  product: propTypes.shape({
    thumbnail: propTypes.string.isRequired,
    price: propTypes.number.isRequired,
    title: propTypes.string.isRequired,
  }).isRequired,
};

export default ProductCard;
