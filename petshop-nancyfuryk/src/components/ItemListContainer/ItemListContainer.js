import {useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList"
import { getProducts } from '../../asyncmock'

export default function ItemListContainer() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then(prods => {
      setProducts(prods)
    }).catch(error => {
      console.log(error)
    })
  }, [])

 

    return (
      <>
        <ItemList  products={products}/>
       
      </>
    );
  }