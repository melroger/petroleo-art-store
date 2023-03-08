import { product } from '../../data/products';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../../Components/ItemList/ItemList';
import "./ItemListContainer.css";
import filterbg from '../../assets/img/filter-bg.svg'; 

const ItemListContainer = () => {
    const [productList, setProductList] = useState([]); //vacio porque lo rellena ejecucion de useEffect
    const {categoryId} = useParams();
    const getProducts = new Promise((resolve, reject) => {
        if (categoryId) {
            const filteredProducts = product.filter((item) => item.category === categoryId )
            setTimeout(() => {
                resolve(filteredProducts);
            }, 1000);
        } else {
            setTimeout(() => {
                resolve(product)
            }, 1000);
        }
    });

    useEffect(() => {
        getProducts.then((response) => {
            setProductList(response)
        })
        .catch((error) => {console.log(error)});
    }, [categoryId]);

  return (
    <div className='itemListContainer'>
        <img className='filter-bg' src={filterbg} />
        <div className='wrapper'>
            <ItemList productList={productList} />
        </div>
    </div>
  )
}

export default ItemListContainer