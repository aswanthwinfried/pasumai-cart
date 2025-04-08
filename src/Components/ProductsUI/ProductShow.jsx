import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ProductShow.css";

const ProductShow = ({ cartItems, setCartItems }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  // Fetch data from json-server
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

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
        <div
          className="cart-indicator"
          onClick={handleGoToCart}
          style={{ cursor: "pointer" }}
        >
          Cart 🛒 <span className="cart-count">{cartItems.length}</span>
        </div>
      </header>

      <div className="product-list">
        {filteredProducts.map((item) => (
          <div className="product-card" key={item.id}>
            <img src={item.img} alt={item.name} />
            <h3>{item.name}</h3>
            <p>₹{item.price}/kg</p>
            <div className="button-group">
            <button className="add-btn" onClick={() => handleAddToCart(item)}>
              ＋
            </button>
            <button className="show-btn">Show More</button>
            </div>
          </div>
        ))}
        {filteredProducts.length === 0 && (
          <p style={{ margin: "20px", textAlign: "center" }}>
            No products found.
          </p>
        )}
      </div>
    </div>
  );
};

export default ProductShow;
