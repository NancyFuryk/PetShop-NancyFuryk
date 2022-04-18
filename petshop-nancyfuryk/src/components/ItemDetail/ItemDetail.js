import './ItemDetail.scss'
import ItemCount from "../ItemCount/ItemCount";
import { useState } from 'react';
import { Link, NavLink } from "react-router-dom";


export default function ItemDetail({ id, title, pictureUrl, description, price, stock}) {
    const [cant, setCant] = useState(0);

    const handleOnAdd = (quantity) => {
        console.log(`se agrego ${quantity}`)
        alert(`${quantity} productos agregados al carrito`)
        setCant(quantity)
    }

    return(
        <div className='itemDetail'>
            <li>
                <img src={pictureUrl}/>
                <div className='containerInfo'>
                    <p className="title">{title}</p>
                    <p className="desc">{description}</p>
                    <p className="price">$ {price}</p>
                   {cant > 0 ? <Link to='/cart'>Ir al carrito</Link> : <ItemCount initial={1} stock={5} onAdd={handleOnAdd}/>}
                </div>
            </li>      
        </div>
    )
}