import {getDoc, doc, getFirestore}  from "firebase/firestore"
import { useState, useEffect } from "react"

const Document = () => {
    const[product, setProduct] = useState([]);
    console.log(product)

    useEffect(() => {
        const db = getFirestore();

        const oneItem = doc(db, "arte", "4xeEL87aFBaVN6tedlrz");
        getDoc(oneItem).then((snapshot)=>{
            if(snapshot.exists()){
                const docs = snapshot.data();
                setProduct(docs);
            }
        })
    }, []);
  return (
    <div>
        <div>Document</div>
        <h4>{product.nombre}</h4>
        <h4>{product.autor}</h4>
        <h4>{product.precio}</h4>
        <h4>{product.medidas}</h4>
        <img src={product.imagen} />
    </div>
    
  )
}

export default Document;