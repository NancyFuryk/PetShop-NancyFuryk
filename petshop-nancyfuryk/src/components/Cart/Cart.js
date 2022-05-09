import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import  cartContext  from "../../cartContextProvider/CartContextProvider";
import { firestoreDb } from "../../services/firebase/idex";
import { getDocs, writeBatch, query, where, collection, documentId, addDoc } from "firebase/firestore";
import './cart.scss'

export default function Cart() {
    const [loading, setLoading] = useState(false)
    let {subtotal, cart, clearCart } = useContext(cartContext);

    const createOrder = () =>{
        setLoading(true)

        const objOrder = {
            items: cart,
            buyer: {
                name: 'nancy',
                phone: '1234567890',
                email: 'nancy@gmail.com'
            },
            total: subtotal(),
            date: new Date()
        }
        const ids = cart.map(prod => prod.id)
        const batch = writeBatch(firestoreDb)
        const collectionRef = collection(firestoreDb, "Products")

        const outOfStock = []

        getDocs(query(collectionRef, where(documentId(), 'in', ids)))
            .then(response => {
                response.docs.forEach(doc => {
                    const dataDoc = doc.data()
                    const prodQuantity = cart.find(prod => prod.id === doc.id)?.quantity

                    if(dataDoc.stock >= prodQuantity){
                        batch.update(doc.ref, {stock: dataDoc.stock - prodQuantity})
                    }else{
                        outOfStock.push({id: doc.id, ...dataDoc})
                    }
                })
            }).then(() => {
                if(outOfStock.length === 0) {
                    const collectionRef = collection(firestoreDb, 'orders')
                    return addDoc(collectionRef, objOrder)
                }else {
                    return Promise.reject()                
                }
            }).then(({ id }) => {
                batch.commit()
                console.log(`Numero de orden ${id}`)
            }).catch(err => {
                console.log(err)
            }).finally(() => {
                setLoading(false)
            })
    }
    if(loading) {
        return <h1>Se esta generando su orden</h1>
    }
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
                    <button onClick={() => createOrder()}>Finalizar Compra</button>
                </div>

            </div>
        </>
    );
}