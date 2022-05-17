import { Fragment, useContext, useState } from "react";
import { Link } from "react-router-dom";
import  cartContext  from "../../cartContextProvider/CartContextProvider";
import { firestoreDb } from "../../services/firebase/idex";
import { getDocs, writeBatch, query, where, collection, documentId, addDoc } from "firebase/firestore";
import './cart.scss'
import ClipLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/react";



export default function Cart() {
    const override = css`
    display: block;
    margin: 0 auto;
    margin-top: 30px;
    `;

    const [loading, setLoading] = useState(false)
    const [buy, setBuy] = useState(false)
    const [orden, setOrden] = useState('')
    let {subtotal, cart, clearCart, clear } = useContext(cartContext);

    const [datos, setDatos] = useState({
        nombre: '',
        telefono: '',
        email: ''
    })
    const [popup, setPopup] = useState(false)
    const popUp = () => {
        setPopup(true)
    }

    const handleInputChange = (event) => {
        console.log(event.target.name)
        console.log(event.target.value)
        setDatos({
            ...datos,
            [event.target.name] : event.target.value,
            [event.target.telefono] : event.target.value,
            [event.target.email] : event.target.value
        })
        console.log(datos, "datos :D")
    }

    const createOrder = () =>{
        setLoading(true)

        const objOrder = {
            items: cart,
            buyer: {
                ...datos
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
                        clearCart()
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
                
                
                setOrden(id)
                clearCart()
                setBuy(true)

            }).catch(err => {
                console.log(err)
            }).finally(() => {
                setLoading(false)
            })
    }

    if(loading) {
        return <ClipLoader color={'#a242e2'} size={100} css={override}/>
    }
   
    if(buy){
        return <div className="msjExito"><p>Compra exitosa!</p> <p>Su numero de orden es {orden}</p></div>
    }
    if(cart.length === 0){
       return <div  className="cartVacio"><p>No hay productos en el carrito</p> <Link to="/">Ir a agregar productos</Link></div>
    }
    return (
        <>
            <h1 className="cartTitle">Mi Carrito</h1>
           
            <div className="cartContainer">
            
            {popup ?
            <>
                { cart.map(prod => <div className="cart" key={prod.id}>
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
                <div className="eliminar" onClick={() => clearCart(prod.id)}>X</div> 
             </div>)}
             

            <div className="total">
            <p>Total: ${subtotal()}</p>
            </div> 

            <div className="terminarCompra">
            <button onClick={() => createOrder()}>Finalizar Compra</button>
            </div>
            </>

            :
            <div className="formUser">
                <p>Completa tus datos para finalizar la compra</p>
                <form className="row">
                    <div>
                        <input type="text" placeholder="Nombre y apellido" className="form-control" onChange={handleInputChange} name="nombre"></input>
                    </div>
                    <div>
                        <input type="text" placeholder="Telefono" className="form-control" onChange={handleInputChange} name="telefono"></input>
                    </div>
                    <div>
                        <input type="text" placeholder="Mail" className="form-control" onChange={handleInputChange} name="mail"></input>
                    </div>
                    <button onClick={popUp}>Continuar</button>
                </form>
            </div>}
            </div>
            
        </>
    );
}