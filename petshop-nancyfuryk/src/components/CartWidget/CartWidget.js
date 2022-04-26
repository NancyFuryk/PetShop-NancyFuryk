
import { useContext } from 'react';
import CartContext from '../../cartContext/CartContext'
import './CartWidget.scss'

export default function CartWidget() {
  let { getQuantity } = useContext(CartContext);
    return (
      <div className="CartWidget">
        <img src='miniCart.png'/>
          { getQuantity() }
      </div>
    );
  }
 