import {useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail"
import { getProducts } from '../../asyncmock'

export default function ItemDetailContainer() {
  const [item, setItem] = useState([]);

  useEffect(() => {
    getProducts().then(item => {
        setItem(item)
    }).catch(error => {
      console.log(error)
    })
  }, [])

 

    return (
      <>
        <ItemDetail items={item}/>
      </>
    );
  }