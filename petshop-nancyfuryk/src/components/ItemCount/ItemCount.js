import { useContext, useState } from "react";
import CartContext from "../../cartContextProvider/CartContextProvider";
import './itemCount.scss'

export default function ItemCount({stock, initial, onAdd}) {

   // let {addItem} = useContext(CartContext);
    let {clear} = useContext(CartContext);

    //count = variable, la llamo para mostrar el valor
    //setCount = funcion, la llamo para cambiar el estado

    const [count, setCount] = useState(initial);
    const [changeButton, setChangeButton] = useState(false);

    const handleDecrement = () => {
        count > initial && setCount(count - 1)
    }
    const handleIncrement = () => {
        count < stock && setCount(count + 1)
    }

    return (
      <div className="addCart">
        <div>
          <button onClick={handleDecrement}>-</button>
          <p>{count}</p>
          <button onClick={handleIncrement}>+</button>
        </div> 
          {!changeButton && <button onClick={() => {onAdd(count); setChangeButton(true)}}>Agregar al carrito</button>}

          {changeButton && <button onClick={() => {clear(); setChangeButton(false)}}>Borrar carrito</button>}
          
      </div>
    );
  }
/*{<button onClick={() => clear()}>Borrar carrito</button>}*/

  