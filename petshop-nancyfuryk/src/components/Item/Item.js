import ItemCount from "../ItemCount/ItemCount";
import './item.scss'

export default function Item({ title, pictureUrl, description, price}) {
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
          <ItemCount initial={1} stock={5} onAdd={handleOnAdd}/>
      </div>
    )
}