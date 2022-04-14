import './ItemDetail.scss'
import ItemCount from "../ItemCount/ItemCount";


export default function ItemDetail({ id, title, pictureUrl, description, price, stock}) {
    const handleOnAdd = (quantity) => {
        console.log(`se agrego ${quantity}`)
        alert(`${quantity} productos agregados al carrito`)
    
    }

    return(
        <div className='itemDetail'>
            <li>
                <img src={pictureUrl}/>
                <div className='containerInfo'>
                    <p className="title">{title}</p>
                    <p className="desc">{description}</p>
                    <p className="price">$ {price}</p>
                    <ItemCount initial={1} stock={5} onAdd={handleOnAdd}/>
                </div>
            </li>      
        </div>
    )
}