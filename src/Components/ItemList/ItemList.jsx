import Item from '../Item/Item.jsx';
import { Link } from 'react-router-dom';
import "./ItemList.css";

const ItemList = ({productList}) => {
  return (
    <div className='itemList'>
    {
      productList.map((product) => (
        <div key={product.id} className="wrapperCard">
          <Link to={`/item/${product.id}`}>
            <Item product={product} />
          </Link>
        </div>
      ))
    }
    </div>
  );
};

export default ItemList