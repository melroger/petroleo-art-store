import placeholder from "../../assets/img/placeholder.svg";
import "./Item.css"

const Item = ({product}) => {
    return (
    <div className="cardItem">
      <figure>
        <img src={`${product.image}`} alt={product.nombre} />
      </figure>
      <ul className='textWrapper'>
          <li><h3>{product.nombre}</h3></li>
          <li><p>Material: {product.material} </p></li>
          <li><p>Medidas: {product.medidas} </p></li>
          <li><p>Autor:<span>{product.autor}</span></p></li>
      </ul>
      <div className="cardItemFooter">
        <span className="tag">{product.categoria}</span>
        <span className="price">${product.precio}</span>
      </div>
    </div>
  )
}

export default Item