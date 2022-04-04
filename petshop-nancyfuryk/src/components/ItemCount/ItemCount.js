import { useState } from "react";
import './itemCount.scss'

export default function ItemCount({onAdd, stock, initial}) {

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
          <button onClick={() => onAdd(count)}>Agregar al carrito</button>
      </div>
    );
  }