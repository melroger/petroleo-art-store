import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../../Components/ItemList/ItemList';
import { getFirestore, getDocs, collection, query, where } from 'firebase/firestore';

const ItemListContainer = () => {
    const [productList, setProductList] = useState([]); 
    const {categoryId} = useParams();

    const getProducts = () => {
      const db = getFirestore();
      const querySnapshot = collection(db, 'arte');

      if(categoryId){
        const filteredQuery = query(
          querySnapshot,
          where('categoria', '==', categoryId)
        );
        getDocs(filteredQuery)
        .then((response) => {
          const list = response.docs.map((doc) => {
            return {
              id: doc.id, 
              ...doc.data()
            };
          });
          setProductList(list);
        })
        .catch((error) => console.log(error));
      } else {
        getDocs(querySnapshot)
        .then((response) => {
          const list = response.docs.map((doc) => {
            return {
              id: doc.id, 
              ...doc.data()
            };
          });
          setProductList(list);
        })
        .catch((error) => console.log(error));
      }
      
    }

    useEffect(() => { getProducts(); }, [categoryId]);

    return (
        <div className='itemListContainer'>
            <div className='wrapper'>
                <ItemList productList={productList} />
            </div>
        </div>
    )
}

export default ItemListContainer