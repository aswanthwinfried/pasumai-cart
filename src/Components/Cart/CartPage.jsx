// src/Components/Cart/CartPage.jsx
import React from "react";
import "../Cart/CartPage.css"; // optional styling

const CartPage = ({ cartItems, setCartItems }) => {
  const handleRemove = (indexToRemove) => {
    const updated = cartItems.filter((_, index) => index !== indexToRemove);
    setCartItems(updated);
  };

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart-page">
      <h2>Your Cart 🛒</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="cart-list">
            {cartItems.map((item, index) => (
              <li key={index} className="cart-item">
                <img src={item.img} alt={item.name} width="80" />
                <div>
                  <h4>{item.name}</h4>
                  <p>Price: ₹{item.price}</p>
                  <button onClick={() => handleRemove(index)}>Remove</button>
                </div>
              </li>
            ))}
          </ul>
          <h3>Total: ₹{totalPrice}</h3>
        </>
      )}
    </div>
  );
};

export default CartPage;
