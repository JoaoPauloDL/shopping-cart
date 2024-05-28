import { BsCartDashFill } from "react-icons/bs";
import propTypes from 'prop-types'
import "./CartItem.css";
import formatCurrency from "../../utils/formatCurrency";
import { useContext } from "react";
import AppContext from "../../context/AppContext";

const CartItem = ({ data }) => {

  const {cartItems, setCartItems} = useContext(AppContext)

  const handleRemoveItem = () => {
    const updatedItems = cartItems.filter((item) => item.id != data.id);
    setCartItems(updatedItems)
  }
  

  return (
    <section className="cart-item">
      <img src={data.thumbnail} alt="imagem do produto" className="cart-item-image" />
      <div className="cart-item-content">
        <h3 className="cart-item-title">{data.title}</h3>
        <h3 className="cart-item-price">{formatCurrency(data.price)}</h3>
        <button 
        type="button" 
        className="button__remove-item"
        onClick={handleRemoveItem}
        >
            <BsCartDashFill/>
        </button>
      </div>
    </section>
  );
};

export default CartItem;

CartItem.propTypes = {
    data: propTypes.shape({
      id: propTypes.oneOfType([propTypes.number, propTypes.string]).isRequired,
      thumbnail: propTypes.string.isRequired,
      price: propTypes.number.isRequired,
      title: propTypes.string.isRequired,
    }).isRequired,
  };