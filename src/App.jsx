// src/App.jsx
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Auth from "./Components/AuthUI/Auth";
import ConsumerRegister from "./Components/AuthUI/Registration/ConsumerRegister";
import FarmerRegister from "./Components/AuthUI/Registration/FarmerRegister";
import Login from "./Components/AuthUI/Login/Login";
import ConsumerHome from "./Components/Consumer/ConsumerHome";
import ProductShow from "./Components/ProductsUI/ProductShow";
import CartPage from "./Components/Cart/CartPage";

function App() {
  const [cartItems, setCartItems] = useState([]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/consumer-register" element={<ConsumerRegister />} />
        <Route path="/farmer-register" element={<FarmerRegister />} />
        <Route path="/login" element={<Login />} />
        <Route path="/conshome" element={<ConsumerHome />} />
        <Route path="/prodshow" element={<ProductShow cartItems={cartItems} setCartItems={setCartItems} />} />
        <Route path="/cart" element={<CartPage cartItems={cartItems} setCartItems={setCartItems} />} />
      </Routes>
    </Router>
  );
}

export default App;
