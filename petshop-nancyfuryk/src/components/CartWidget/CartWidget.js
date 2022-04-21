
import { useContext } from 'react';
import { CartContext } from '../../cartContext/cartContext';
import './CartWidget.scss'

export default function CartWidget() {
  let {carrito} = useContext(CartContext);
    return (
      <div className="CartWidget">
        <p></p>
          <img src='miniCart.png'/>
          {carrito.length}
      </div>
    );
  }
 