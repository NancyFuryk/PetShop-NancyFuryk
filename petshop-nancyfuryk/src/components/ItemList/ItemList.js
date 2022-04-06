import Item from "../Item/Item"
import './itemList.scss'


export default function ItemList({products}) {
    return (
        <>
            <ul className="itemList">
            {products.map(product =><Item key={product.id}{...product} />)}
            </ul>
        </>
        
    )
}