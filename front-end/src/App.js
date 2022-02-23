import { Routes, Route } from "react-router-dom";
import Announcement from "./Components/Announcement";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import {useEffect, useState} from "react";

import Edit from "./Pages/Edit";
import FourOFour from "./Pages/FourOFour";
import Home from "./Pages/Home";
import Index from "./Pages/Index";
import New from "./Pages/New";
import Show from "./Pages/Show";
// import NewLetter from "./Components/NewLetter";
// import Register from "./Pages/Register";
// import Login from "./Pages/Login";
import Cart from "./Pages/Cart";

function App() {
  const [cart, setCart] = useState([])
  const [total, setTotal ] = useState(0)

  
  // useEffect(()=>{  
  //   if(cart.length > 0){
  //     localStorage.setItem('cart', JSON.stringify(cart));
  //   }
  // },[cart])
  // console.log(JSON.parse(localStorage.getItem("cart")))

  const handleAddToCart = (pin, quantity) =>{
    let newObj = {...pin} 
     newObj.quantity = quantity
    setCart([...cart, newObj])
    handleSubtotal([...cart,  newObj ])
  }

  const handleSubtotal = (cart)=>{
    let subtotal = cart.map(item => Number(item.price) * item.quantity).reduce((a,b) => a + b,0)
    setTotal (subtotal)
  };

  return (
    <div className="main">
      <Announcement/>
      <NavBar cart={cart}/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/pins" element={<Index addToCart={handleAddToCart} />} />
        <Route path="/pins/new" element={<New />} />
        <Route exact path="/pins/:id" element={<Show addToCart={handleAddToCart}/>} />
        <Route path="/pins/:id/edit" element={<Edit />} />
        <Route path="/cart" element={<Cart setCart={setCart} cart={cart} setTotal={setTotal} subtotal={total}/>} />
        <Route path="*" element={<FourOFour />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
