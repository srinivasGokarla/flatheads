import {ProductPage} from './Components/Product.jsx'
import './App.css';
import { Routes, Route, } from "react-router-dom";
import {HomePage} from "./Components/Home"
import  PrimarySearchAppBar from "./Components/Navbar"


function App() {
  return (
   <>
   {/* <Header /> */}
   <PrimarySearchAppBar />
    <Routes>
    
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/products:id" element={<ProductPage />} />
     
      </Routes>
  
   </>
  );
}

export default App;
