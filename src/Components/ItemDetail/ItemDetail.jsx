import ItemCount from "./ItemCount/ItemCount";
import placeholder from "../../assets/img/placeholder.svg";
import "./ItemDetail.css";

const ItemDetail = ({detail}) => {
  return (
    <div className="itemDetail">
      <figure>
        <img src={placeholder} alt={detail.name} />
      </figure>
      <div className='textWrapper'>
            <ul className='textWrapper'>
                <li><h3>{detail.name}</h3></li>
                <li>Descripcion:<span>{detail.description}</span></li>
                <li>Material:<span>{detail.material}</span></li>
                <li>Medidas:<span>{detail.measure}</span></li>
                <li>Autor:<span>{detail.autor}</span></li>
            </ul>
            <div className="cardItemFooter">
              {detail.category}
              <span>${detail.price}</span>
            </div>
            {/* <ItemCount /> */}
            <button className='addCart'>comprar</button>
      </div>
    </div>
  )
}

export default ItemDetail