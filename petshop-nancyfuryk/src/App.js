import ReactDOM from 'react-dom';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/Cart/Cart";
import ContextProvider from './cartContext/cartContext';



function App() {
  return (
    <div className="App">
      <ContextProvider>
        <BrowserRouter>
          <NavBar/>
           <Routes>
            <Route  path='/' element={<ItemListContainer/>}/>
            <Route  path='/item/:productId' element={<ItemDetailContainer/>}/>
            <Route  path='/category/:categoryId' element={<ItemListContainer/>}/>
            <Route  path='/cart' element={<Cart/>}/>
          </Routes>
        </BrowserRouter>
      </ContextProvider>
   
    </div>
  );
}

export default App;
