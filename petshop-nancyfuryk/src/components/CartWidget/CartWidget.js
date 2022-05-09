
import { useContext } from 'react';
import CartContext from '../../cartContextProvider/CartContextProvider'
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
 