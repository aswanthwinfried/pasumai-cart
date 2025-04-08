import React from "react";
import { useState } from "react";
import "./ProductShow.css";

const products = [
  {
    id: 1,
    name: "Kashmir Apple",
    price: 250,
    img: "https://media.istockphoto.com/id/184276818/photo/red-apple.jpg?s=1024x1024&w=is&k=20&c=d1zu5oXbrdTrk2AtTyUtvnWLF7ZeIbTgqSXabU4ABi4=",
  },
  {
    id: 2,
    name: "Orange",
    price: 210,
    img: "https://www.shutterstock.com/image-photo/fresh-orange-fruits-leaves-background-600nw-1840946851.jpg",
  },
  {
    id: 1,
    name: "Kashmir Apple",
    price: 250,
    img: "https://media.istockphoto.com/id/184276818/photo/red-apple.jpg?s=1024x1024&w=is&k=20&c=d1zu5oXbrdTrk2AtTyUtvnWLF7ZeIbTgqSXabU4ABi4=",
  },
  {
    id: 2,
    name: "Orange",
    price: 210,
    img: "https://www.shutterstock.com/image-photo/fresh-orange-fruits-leaves-background-600nw-1840946851.jpg",
  },
  {
    id: 1,
    name: "Kashmir Apple",
    price: 250,
    img: "https://media.istockphoto.com/id/184276818/photo/red-apple.jpg?s=1024x1024&w=is&k=20&c=d1zu5oXbrdTrk2AtTyUtvnWLF7ZeIbTgqSXabU4ABi4=",
  },
  {
    id: 2,
    name: "Orange",
    price: 210,
    img: "https://www.shutterstock.com/image-photo/fresh-orange-fruits-leaves-background-600nw-1840946851.jpg",
  },
  {
    id: 1,
    name: "Kashmir Apple",
    price: 250,
    img: "https://media.istockphoto.com/id/184276818/photo/red-apple.jpg?s=1024x1024&w=is&k=20&c=d1zu5oXbrdTrk2AtTyUtvnWLF7ZeIbTgqSXabU4ABi4=",
  },
  {
    id: 2,
    name: "Orange",
    price: 210,
    img: "https://www.shutterstock.com/image-photo/fresh-orange-fruits-leaves-background-600nw-1840946851.jpg",
  },
  {
    id: 1,
    name: "Kashmir Apple",
    price: 250,
    img: "https://media.istockphoto.com/id/184276818/photo/red-apple.jpg?s=1024x1024&w=is&k=20&c=d1zu5oXbrdTrk2AtTyUtvnWLF7ZeIbTgqSXabU4ABi4=",
  },
  {
    id: 2,
    name: "Orange",
    price: 210,
    img: "https://www.shutterstock.com/image-photo/fresh-orange-fruits-leaves-background-600nw-1840946851.jpg",
  },

  
];

const ProductShow = () => {
    const [cartCount, setCartCount] = useState(0); 
  
    const handleAddToCart = () => {
      setCartCount((prev) => prev + 1);
    };
  
    return (
      <div className="product-show">
        <header className="product-header">
          <h2>Fresh Fruits</h2>
          <div className="search-bar">
            <button className="filter-btn">Filter</button>
            <input type="text" placeholder="Search" />
            <button className="search-icon">🔍</button>
          </div>
          <div className="cart-indicator">
            Cart 🛒 <span className="cart-count">{cartCount}</span>
          </div>
        </header>
  
        <div className="product-list">
          {products.map((item, index) => (
            <div className="product-card" key={index}>
              <img src={item.img} alt={item.name} />
              <h3>{item.name}</h3>
              <p>₹{item.price}/per kg</p>
              <button className="add-btn" onClick={handleAddToCart}>＋</button>
              <button className="show-btn">Show More</button>
            </div>
          ))}
        </div>
      </div>
    );
  };

export default ProductShow;
