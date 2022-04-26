import './ItemDetail.scss'
import ItemCount from "../ItemCount/ItemCount";
import { useState, useContext } from 'react';
import { Link, useNavigate } from "react-router-dom";
import CartContext from '../../cartContext/CartContext'


export default function ItemDetail({ id, title, pictureUrl, description, price, stock}) {
    const [quantity, setQuantity] = useState(0);

    const { addItem } = useContext(CartContext)

    const handleOnAdd = (count) => {
        
        alert(`${count} productos agregados al carrito`)
        setQuantity(count)

        const productObj = {
            id, title, price
        }

        addItem( {...productObj, quantity: count})
        
    }

    return(
        <div className='itemDetail'>
            <li>
                <img src={pictureUrl}/>
                <div className='containerInfo'>
                    <p className="title">{title}</p>
                    <p className="desc">{description}</p>
                    <p className="price">$ {price}</p>
                   {quantity > 0 ? <Link to='/cart'>Ir al carrito</Link> : <ItemCount initial={1} stock={5} onAdd={handleOnAdd}/>}
                </div>
            </li>      
        </div>
    )
}