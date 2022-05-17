import {useState, useEffect} from "react";
import ItemList from "../ItemList/ItemList";
//import { getProducts } from '../../asyncmock';
import { getDocs, collection, query, where } from 'firebase/firestore'
import { useParams } from "react-router-dom";
import { firestoreDb } from "../../services/firebase/idex";
import ClipLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/react";

export default function ItemListContainer() {
  const [products, setProducts] = useState([]);

  const { categoryId } = useParams();

  const override = css`
    display: block;
    margin: 0 auto;
    margin-top: 30px;
    `;

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
   return <ClipLoader color={'#a242e2'} size={100} css={override}/>
 }

    return (
      <>
        <ItemList  products={products}/>
       
      </>
    );
  }