import {useState, useEffect, cloneElement } from "react";
import ItemList from "../ItemList/ItemList";
//import { getProducts } from '../../asyncmock';
import { getDocs, collection, query, where } from 'firebase/firestore'
import { useParams } from "react-router-dom";
import { firestoreDb } from "../../services/firebase/idex";

export default function ItemListContainer() {
  const [products, setProducts] = useState([]);

  const { categoryId } = useParams();

  useEffect(() => {
    
    const collectionRef = categoryId 
      ? query(collection(firestoreDb, 'Products'), where('category', '==', categoryId))
      : collection(firestoreDb, 'Products')

    getDocs(collectionRef).then(response => {
      console.log(response)
      const products = response.docs.map(doc => {
        return { id: doc.id, ...doc.data()}
      })
      setProducts(products)
    })

  }, [categoryId])

 if(products.length === 0){
   return <h1> No hay productos </h1>
 }

    return (
      <>
        <ItemList  products={products}/>
       
      </>
    );
  }