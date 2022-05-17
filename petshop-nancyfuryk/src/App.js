import ReactDOM from 'react-dom';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/Cart/Cart";
import { CartContextProvider } from './cartContextProvider/CartContextProvider';



function App() {
  return (
    <div className="App">
      <CartContextProvider>
        <BrowserRouter>
          <NavBar/>
           <Routes>
            <Route  path='/' element={<ItemListContainer/>}/>
            <Route  path='/item/:productId' element={<ItemDetailContainer/>}/>
            <Route  path='/category/:categoryId' element={<ItemListContainer/>}/>
            <Route  path='/cart' element={<Cart/>}/>
          </Routes>
          <Footer/>
        </BrowserRouter>
      </CartContextProvider>
   
    </div>
  );
}

export default App;
