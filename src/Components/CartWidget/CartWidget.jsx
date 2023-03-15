import shoppingCart from './../../assets/img/shoppingCart.png';
import "./CartWidget.css";
import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {
  const {cart} = useContext(CartContext);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(cart.reduce((prev, curr) => prev + curr.quantity, 0))
    }, [cart]);
  return (
    <Link to={'/cart'}>
        <div className="cartWidget">
            <a href="/">
                <img src={shoppingCart} />
            </a>
            <span className="notification">{total}</span>
        </div>
    </Link>

  )
}

export default CartWidget
