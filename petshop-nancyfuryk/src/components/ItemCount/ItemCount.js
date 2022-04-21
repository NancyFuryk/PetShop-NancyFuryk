import { useContext, useState } from "react";
import { CartContext } from "../../cartContext/cartContext";
import './itemCount.scss'

export default function ItemCount({stock, initial}) {

    let {addItem} = useContext(CartContext);
    let {clear} = useContext(CartContext);

    //count = variable, la llamo para mostrar el valor
    //setCount = funcion, la llamo para cambiar el estado

    const [count, setCount] = useState(initial);

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
          <button onClick={() => addItem(alert(`Seleccionaste ${count} productos`))}>Agregar al carrito</button>
          <button onClick={() => clear()}>Borrar carrito</button>
      </div>
    );
  }


  