import CartWidget from "../CartWidget/CartWidget";
import './NavBar.scss'


export default function NavBar() {
    return (
      <div className="navBar">
        <div className='navBarContainer'>
            <li><a href='#'><img src="logoPata.png"/></a></li>
            <li><a href='#'>Perros</a></li>
            <li><a href='#'>Gatos</a></li>
            <li><a href='#'>Aves</a></li>
            <li><a href='#'>Pajaros</a></li>
            <li><a href='#'>Roedores</a></li>
            <li><a href='#'>Ofertas</a></li>
        </div>
          <CartWidget/>  
      </div>
    );
  }