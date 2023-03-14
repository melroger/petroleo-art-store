import ItemCount from "./ItemCount/ItemCount";
import placeholder from "../../assets/img/placeholder.svg";
import "./ItemDetail.css";


const ItemDetail = ({detail}) => {
  return (
    <div className="itemDetail">
      <div className="wrapper">
        <figure>
          <img src={`${detail.image}`} alt={detail.nombre} />
        </figure>
        <div className='textWrapper'>
              <ul>
                  <li><h3>{detail.nombre}</h3></li>
                  <li><span className="description">{detail.descripcion}</span></li>
                  <li><p>Material:<span>{detail.material}</span></p></li>
                  <li><p>Medidas:<span>{detail.medidas}</span></p></li>
                  <li><p>Autor:<span>{detail.autor}</span></p></li>
              </ul>
              <div className="cardItemFooter">
                {detail.categoria}
                <span>${detail.precio}</span>
              </div>
              {/* <ItemCount /> */}
              <div className="buy-container">
                <div className="counter-container">
                  <div className="less">-</div>
                  <div className="more">+</div>
                  <div className="less">-</div>
                </div>
                <button className='addCart'>comprar</button>
              </div>
              
        </div>        
      </div>
    </div>
  )
}

export default ItemDetail