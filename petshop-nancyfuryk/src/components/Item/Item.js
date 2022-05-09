import {Link} from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import { useState, useContext } from 'react';
import CartContext from '../../cartContextProvider/CartContextProvider'
import './item.scss'

export default function Item({ title, pictureUrl, description, price, id}) {


  const [quantity, setQuantity] = useState(0);

  const { addItem } = useContext(CartContext)

  const handleOnAdd = (count) => {
        
    setQuantity(count)

    const productObj = {
        id, title, price, pictureUrl
    }

    addItem( {...productObj, quantity: count})
    
}
    return (
        <div className="cardProduct">
          <img src={pictureUrl}/>
          <p className="title">{title}</p>
          <p  className="desc">{description}</p>
          <p className="price">{price}</p>
          <Link to={`/item/${id}`} className="verDetalle">Ver detalle</Link>
          <ItemCount initial={1} stock={5} onAdd={handleOnAdd}/>
      </div>
    )
}

