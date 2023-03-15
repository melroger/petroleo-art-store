import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";

import "./CartPage.css";
import { addDoc, collection, getFirestore } from "firebase/firestore";

const Cart = () => {
    const { cart, clear, removeItem } = useContext(CartContext);
    const navigate = useNavigate();

    const createOrder = (event) => {
        event.preventDefault();
        const db = getFirestore();
        const querySnapshot = collection(db, 'orders');
        
        addDoc(querySnapshot, {
            buyer: {
                email:'test@test.com',
                name:  'Melanie Roger',
                phone:'099111222333'
            },
            products: cart.map((product) => {
                return{
                    title: product.nombre,
                    price: product.precio,
                    id: product.id,
                    quantity: product.quantity
                };
            }),
            total: cart.reduce((acc, curr) => acc + curr.precio * curr.quantity, 0),
        })
        .then((response) => {
            console.log(response.id);
            alert("order id")
        })
        .catch( (error) => console.log(error))
    };

    return (
      <div className="cartPage">
        <div className="wrapper">
          <div className="cartProduct">
              <h2>Resumen de Compra:</h2>
              {cart.map((product) => (
                  <div key={product.nombre} className="singleProduct">
                      <h3>{product.nombre}</h3>
                        <button onClick={() => removeItem(product.id)}>X</button>
                    <span>{product.quantity}</span>
                  </div>
              ))}
              
          </div>   
          {cart.length > 0 && <div>
            <button onClick={clear}>Vaciar carrito</button>
            <button onClick={createOrder}>Finalizar compra</button>
          </div>
           }       
          {cart.length === 0 && <div className="noProducts">
            No hay productos
            <button className="btn" onClick={() => navigate('/')}>Seguir comprando</button>
          </div>}
        </div>
      </div>
        
    )
};

export default Cart;