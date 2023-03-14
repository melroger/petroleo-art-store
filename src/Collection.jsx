
import {collection, getDocs, getFirestore} from "firebase/firestore"
import { useState, useEffect } from 'react'

const Collection = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "arte");
        getDocs(itemsCollection).then((snapshot)=>{
            const doc = snapshot.docs.map((doc)=>doc.data());
            console.log(doc)
        });
    },[]);
  return (
    <div>
        <h1>Colletion</h1>
        {products.map((product) => (
                <div key={product.id}>
                    <h2>nombre: {product.autor}</h2>
                    <p>autor: {product.nombre}</p>
                </div>
            ))}
    </div>
    
  )
}

export default Collection;