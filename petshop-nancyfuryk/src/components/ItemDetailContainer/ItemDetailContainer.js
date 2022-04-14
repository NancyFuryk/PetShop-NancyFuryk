import {useState, useEffect } from "react";
import { getProductsById } from '../../asyncmock'
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom";

export default function ItemDetailContainer() {
  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(true);

  const {productId} = useParams()

  useEffect(() => {
    getProductsById(productId).then(item => {
      setProduct(item)
    }).catch(error => {
      console.log(error)
    }).finally(() => {
      setLoading(false)
    })

    return(() => {
      setProduct()
    })
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