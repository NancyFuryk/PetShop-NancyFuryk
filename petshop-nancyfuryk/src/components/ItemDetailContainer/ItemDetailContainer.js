import {useState, useEffect } from "react";
import { getProductsById } from '../../asyncmock'
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom";
import { getDoc, doc } from 'firebase/firestore'
import { firestoreDb } from "../../services/firebase/idex";
import ClipLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/react";

export default function ItemDetailContainer() {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  const {productId} = useParams()
  const override = css`
    display: block;
    margin: 0 auto;
    margin-top: 30px;
    `;
  useEffect(() => {
    getDoc(doc(firestoreDb, 'Products', productId)).then(response => {
      console.log(response)
      const producto = {id: response, ...response.data()}
      setProduct(producto)
    })
  }, [])

 

    return (
      <>
        {
          loading ?
          <ClipLoader color={'#a242e2'} size={100} css={override}/>
         : 
          product ?
            <ItemDetail {...product}/> :
            <h1>El producto no existe</h1>
        }
      </>
    );
  }