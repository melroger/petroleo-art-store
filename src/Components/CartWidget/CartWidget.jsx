import shoppingCart from './../../assets/img/shoppingCart.png';
import "./CartWidget.css";


const CartWidget = () => {
  return (
    <div className="cartWidget">
        <a href="/">
            <img src={shoppingCart} />
        </a>
        <span className="notification">6</span>
    </div>
  )
}

export default CartWidget
