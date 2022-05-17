import './ItemDetail.scss'
import ItemCount from "../ItemCount/ItemCount";
import { useState, useContext } from 'react';
import { Link, useNavigate } from "react-router-dom";
import CartContext from '../../cartContextProvider/CartContextProvider'


export default function ItemDetail({ id, title, pictureUrl, description, price, stock}) {
    const [quantity, setQuantity] = useState(0);

    const { addItem, isInCart, clear } = useContext(CartContext)

    const handleOnAdd = (count) => {
        
        setQuantity(count)

        const productObj = {
            id, title, price, pictureUrl
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
                   { isInCart(id) > 0 ?<div className='cartDeatail'> <Link to='/cart'>Ir al carrito</Link> <button  onClick={() => clear()}>Borrar carrito</button></div>: <ItemCount initial={1} stock={5} onAdd={handleOnAdd}/>}
                   
                </div>
            </li>      
        </div>
    )
}