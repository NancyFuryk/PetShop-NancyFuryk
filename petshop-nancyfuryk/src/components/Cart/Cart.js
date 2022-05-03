import { useContext } from "react";
import { Link } from "react-router-dom";
import  cartContext  from "../../cartContext/CartContext";
import './cart.scss'

export default function Cart() {
    let {subtotal, cart, clearCart } = useContext(cartContext);

    if(cart.length === 0){
       return <div><p>No hay productos en el carrito</p> <Link to="/">Ir a agregar productos</Link></div>
    }
    return (
        <>
            <h1>Mi Carrito</h1>
            <div className="cartContainer">
                {
                    cart.map(prod => <div className="cart" key={prod.id}>
                                        <img src={prod.pictureUrl}/>
                                        <div className="datailCart">
                                            <p className="title">{prod.title}</p>
                                            <p>${prod.price}</p>
                                            <div className="quantity">
                                                <p>Unidades: {prod.quantity}</p>
                                            </div>
                                        </div>
                                       <div className="subtotal">
                                            <p>Subtotal: ${prod.price * prod.quantity}</p>
                                       </div>
                                       <div className="eliminar" onClick={() => clearCart(prod.id)}>Eliminar</div> 
                                    </div>)
                }
                <div className="total">
                    <p>Total: ${subtotal()}</p>
                </div> 
                <div className="terminarCompra">
                    <button>Finalizar Compra</button>
                </div>
            </div>
        </>
    );
}