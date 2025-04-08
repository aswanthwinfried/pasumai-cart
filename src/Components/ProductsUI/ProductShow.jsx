import React from "react";
import { useNavigate } from "react-router-dom";
import "./ProductShow.css";

const products = [
  { id: 1, name: "Kashmir Apple", price: 250, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjyvewZeCW0-OwrHOhenFL8sQuMxZ71tuSGQ&s" },
  { id: 2, name: "Orange", price: 210, img: "https://www.shutterstock.com/image-photo/fresh-orange-fruits-leaves-background-600nw-1840946851.jpg" },
  { id: 2, name: "Orange", price: 210, img: "https://www.shutterstock.com/image-photo/fresh-orange-fruits-leaves-background-600nw-1840946851.jpg" },
  { id: 1, name: "Kashmir Apple", price: 250, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjyvewZeCW0-OwrHOhenFL8sQuMxZ71tuSGQ&s" },
  { id: 2, name: "Orange", price: 210, img: "https://www.shutterstock.com/image-photo/fresh-orange-fruits-leaves-background-600nw-1840946851.jpg" },
  { id: 1, name: "Kashmir Apple", price: 250, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjyvewZeCW0-OwrHOhenFL8sQuMxZ71tuSGQ&s" },
  { id: 2, name: "Orange", price: 210, img: "https://www.shutterstock.com/image-photo/fresh-orange-fruits-leaves-background-600nw-1840946851.jpg" },
  { id: 1, name: "Kashmir Apple", price: 250, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjyvewZeCW0-OwrHOhenFL8sQuMxZ71tuSGQ&s" },
  { id: 2, name: "Orange", price: 210, img: "https://www.shutterstock.com/image-photo/fresh-orange-fruits-leaves-background-600nw-1840946851.jpg" },


];

const ProductShow = ({ cartItems, setCartItems }) => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const navigate = useNavigate();

  const handleAddToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  const handleGoToCart = () => {
    navigate("/cart");
  };

  const filteredProducts = products.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="product-show">
      <header className="product-header">
        <h2>Fresh Fruits</h2>
        <div className="search-bar">
          <button className="filter-btn">Filter</button>
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="search-icon">🔍</button>
        </div>
        <div className="cart-indicator" onClick={handleGoToCart} style={{ cursor: "pointer" }}>
          Cart 🛒 <span className="cart-count">{cartItems.length}</span>
        </div>
      </header>

      <div className="product-list">
        {filteredProducts.map((item, index) => (
          <div className="product-card" key={index}>
            <img src={item.img} alt={item.name} />
            <h3>{item.name}</h3>
            <p>₹{item.price}/kg</p>
            <button className="add-btn" onClick={() => handleAddToCart(item)}>＋</button>
            <button className="show-btn">Show More</button>
          </div>
        ))}
        {filteredProducts.length === 0 && (
          <p style={{ margin: "20px", textAlign: "center" }}>No products found.</p>
        )}
      </div>
    </div>
  );
};

export default ProductShow;
