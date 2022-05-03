import CartWidget from "../CartWidget/CartWidget";
import './NavBar.scss'
import { useState, useEffect } from "react";
import { getCategories } from '../../asyncmock';
import { Link, NavLink } from "react-router-dom";


export default function NavBar() {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    getCategories().then(categories => {
      setCategories(categories)
    })
  })

    return (
      <div className="navBar">
        <div className='navBarContainer'>
            <li>
              <Link to='/'><img src="logoPata.png"/></Link>
            </li>
            {/*<li><a href='#'>Perros</a></li>
            <li><a href='#'>Gatos</a></li>
            <li><a href='#'>Aves</a></li>
            <li><a href='#'>Pajaros</a></li>
            <li><a href='#'>Roedores</a></li>
             <li><a href='#'>Ofertas</a></li>*/}
             { categories.map(cat => <NavLink key={cat.id} to={`/category/${cat.id}`}>{cat.description}</NavLink>)}
        </div>
       
          
         <Link to="/cart">
           <CartWidget/>
         </Link>
        
      </div>
    );
  }