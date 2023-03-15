import ItemCount from "./ItemCount/ItemCount";
import "./ItemDetail.css";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";

const ItemDetail = ({detail}) => {
  const navigate = useNavigate();
  const { addItem } = useContext(CartContext);
  const [count, setCount] = useState(1);


  return (
    <div className="itemDetail">
      <div className="wrapper">
        <figure>
          <img src={`${detail.image}`} alt={detail.nombre} />
        </figure>
        <div className='textWrapper'>
              <ul>
                  <li><h3>{detail.nombre}</h3></li>
                  <li><p className="description">{detail.descripcion}</p></li>
                  <li><p>Autor: <span>{detail.autor}</span></p></li>
                  <li><p>Material: {detail.material} </p></li>
                  <li><p>Medidas: {detail.medidas} </p></li>
                  <li><p>Stock: {detail.stock} </p></li>
              </ul>
              <div className="cardItemFooter">
                <span className="tag">{detail.categoria}</span>
                <span className="price">${detail.precio}</span>
              </div>
              
              <div className="buy-container">
                <ItemCount count={count} setCount={setCount} />
                <button className='addCart btn' onClick={() => addItem(detail, count)}>
                  comprar
                </button>
              </div>
              <button className="btn" onClick={() => navigate('/')}>Seguir comprando</button>
              <button className="btn" onClick={() => navigate('/cart')}>Ir a carrito</button>
        </div>  
      </div>
    </div>
  )
}

export default ItemDetail