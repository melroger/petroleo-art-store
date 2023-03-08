import placeholder from "../../assets/img/placeholder.svg";
import "./Item.css"

const Item = ({product}) => {
    return (
    <div className="cardItem">
      <figure>
        <img src={placeholder} alt={product.name} />
      </figure>
      <ul className='textWrapper'>
          <li><h3>{product.name}</h3></li>
          <li>Descripcion:<span>{product.description}</span></li>
          <li>Material:<span>{product.material}</span></li>
          <li>Medidas:<span>{product.measure}</span></li>
          <li>Autor:<span>{product.autor}</span></li>
      </ul>
      <div className="cardItemFooter">
        {product.category}
        <span>${product.price}</span>
      </div>
    </div>
  )
}

export default Item