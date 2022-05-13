import {ProductPage} from './Components/Product.jsx'
import './App.css';
import { Routes, Route, } from "react-router-dom";
import {HomePage} from "./Components/HomePage"
import  {NavBar}  from "./Components/Navbar"
import {Cart} from "./Components/Cart"

function App() {
  return (
   <>
   {/* <Header /> */}
   <NavBar />
    <Routes>
    
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/products:id" element={<ProductPage />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
  
   </>
  );
}

export default App;
