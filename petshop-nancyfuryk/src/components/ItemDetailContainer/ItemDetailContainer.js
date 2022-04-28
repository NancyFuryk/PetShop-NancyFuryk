import {useState, useEffect } from "react";
import { getProductsById } from '../../asyncmock'
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom";
import { getDoc, doc } from 'firebase/firestore'
import { firestoreDb } from "../../services/firebase/idex";

export default function ItemDetailContainer() {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  const {productId} = useParams()

  useEffect(() => {
    /*getProductsById(productId).then(item => {
      setProduct(item)
    }).catch(error => {
      console.log(error)
    }).finally(() => {
      setLoading(false)
    })*/
    getDoc(doc(firestoreDb, 'Products', productId)).then(response => {
      console.log(response)
      const producto = {id: response, ...response.data()}
      setProduct(producto)
    })

    /*return(() => {
      setProduct()
    })*/
  }, [])

 

    return (
      <>
        {
          loading ?
            <h1>Cargando...</h1> : 
          product ?
            <ItemDetail {...product}/> :
            <h1>El producto no existe</h1>
        }
      </>
    );
  }