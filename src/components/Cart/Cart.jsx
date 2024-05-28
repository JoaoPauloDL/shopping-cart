import { useContext } from "react";
import AppContext from "../../context/AppContext";
import CartItem from "../CartItem/CartItem";
import "./Cart.css";
import formatCurrency from "../../utils/formatCurrency";

const Cart = () => {

  const { cartItems, isCartVisible } = useContext(AppContext);
  
  const total = cartItems.reduce((acc, cartItem) => acc + cartItem.price, 0);

  return (
    <section className={`cart ${isCartVisible ? 'cart--active' : ''}`}>
      <div className="cart-items">
        {
            cartItems.map((cartItem) => <CartItem key={cartItem.id} data={cartItem}/>)
        }
      </div>
      <div className="cart-resume">{formatCurrency(total)}</div>
    </section>
  );
};

export default Cart;
