import './ItemDetail.scss'
import ItemCount from "../ItemCount/ItemCount";


export default function ItemDetail({ items }) {
    const handleOnAdd = (quantity) => {
        console.log(`se agrego ${quantity}`)
        alert(`${quantity} productos agregados al carrito`)
    
    }
    return (
        <>
            
            <ul className="itemDetail">
                {items.map(i => {
                    return(
                        <li key={i.id}>
                            <img src={i.pictureUrl}/>
                            <div className='containerInfo'>
                                <p className="title">{i.title}</p>
                                <p className="desc">{i.description}</p>
                                <p className="price">$ {i.price}</p>
                                <ItemCount initial={1} stock={5} onAdd={handleOnAdd}/>
                            </div>
                            
                        </li>
                    )
                })}
            </ul>
           

        </>
        
    )
}