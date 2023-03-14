import ItemCount from "./ItemCount/ItemCount";
import "./ItemDetail.css";
import { useState } from "react";


const ItemDetail = ({detail}) => {
  const [count, setCount] = useState(0);
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
                <button className='addCart btn'>
                  comprar
                </button>
              </div>
        </div>  
      </div>
    </div>
  )
}

export default ItemDetail