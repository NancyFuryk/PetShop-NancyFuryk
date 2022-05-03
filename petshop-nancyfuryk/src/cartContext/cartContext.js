import { createContext, useState } from 'react'

const CartContext = createContext()

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    
   // const addItem = (products) => [...cart, products];
    console.log(cart)
    /*const removeItem = (id) => {
        setCart([cart.filter((name) => name.id !== id)]);
    }

    /*const clear = () => {
        setCart([]);
    }*/

    const addItem = (productToAdd) => {
        setCart([...cart, productToAdd])
    }
    const getQuantity = () => {
        let count = 0
        cart.forEach(prod => {
            count += prod.quantity
        })
        return count
    }
    const subtotal = () => {
        let countprice = 0
        cart.forEach(prod => {
            countprice += prod.price * prod.quantity
        })
        console.log(countprice, "countrprice")
        return countprice
    }
    const isInCart = (id) => {
        return cart.some(prod => prod.id === id)
    }
    const clearCart = (id) => {
        setCart(cart.filter((title) => title.id !== id));
    }

    return(
       
            <CartContext.Provider value={{
                cart,
                addItem,
                getQuantity,
                isInCart,
                clearCart,
                subtotal
            }}>
                {children}
            </CartContext.Provider>
      
    );
}

export default CartContext;