import {useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { getProducts } from '../../asyncmock';
import { useParams } from "react-router-dom";

export default function ItemListContainer() {
  const [products, setProducts] = useState([]);

  const { categoryId } = useParams();

  useEffect(() => {
    getProducts(categoryId).then(prods => {
      setProducts(prods)
    }).catch(error => {
      console.log(error)
    })
  }, [categoryId])

 

    return (
      <>
        <ItemList  products={products}/>
       
      </>
    );
  }