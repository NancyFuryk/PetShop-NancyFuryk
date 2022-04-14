import {Link} from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import './item.scss'

export default function Item({ title, pictureUrl, description, price, id, category}) {
    const handleOnAdd = (quantity) => {
        console.log(`se agrego ${quantity}`)
        alert(`${quantity} productos agregados al carrito`)
    
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

