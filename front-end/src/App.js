import { Routes, Route } from "react-router-dom";
import Announcement from "./Components/Announcement";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import {useState} from "react";

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

  const handleAddToCart = (pin) =>{
    setCart([...cart,  pin ])
    handleSubtotal([...cart,  pin ])
  }

  const handleSubtotal = (cart)=>{
    let subtotal = cart.map(item => item.price).reduce((a,b) => Number(a)+ Number(b),0)
    setTotal(subtotal)
  };

  return (
    <div className="main">
      <Announcement/>
      <NavBar cartNumber={cart.length}/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/pins" element={<Index addToCart={handleAddToCart} />} />
        <Route path="/pins/new" element={<New />} />
        <Route exact path="/pins/:id" element={<Show addToCart={handleAddToCart}/>} />
        <Route path="/pins/:id/edit" element={<Edit />} />
        <Route path="/cart" element={<Cart cart={cart} subtotal={total}/>} />
        <Route path="*" element={<FourOFour />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
