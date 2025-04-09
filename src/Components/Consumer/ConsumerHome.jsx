import React, { useState } from "react";
import "./ConsumerHome.css";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ConsumerHome() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeSection, setActiveSection] = useState("home");

  const bannerImages = [
    {
      src: "https://as2.ftcdn.net/v2/jpg/01/47/51/17/1000_F_147511773_kUtulf4Dbydv9nonNx2q5vhh6JPwGaVq.jpg",
      title: "Fresh Vegetables",
      subtitle: "Up to 30% Off This Week",
    },
    {
      src: "https://www.shutterstock.com/image-photo/fruits-260nw-92036825.jpg",
      title: "Organic Fruits",
      subtitle: "Sweet & Juicy Offers",
    },
    {
      src: "https://keeraigal.com/wp-content/uploads/2023/05/banner-resize1.jpg",
      title: "Healthy Greens",
      subtitle: "Green Goodness Deals",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const categories = [
    {
      title: "Vegetables",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT96YPQ3-hh7GohSpaqjF1bAh3m7iOkvnpPTQ&s",
    },
    {
      title: "Greens",
      img: "https://img.cdnx.in/177965/1649422146937_SKU-0221_0.png?width=600&format=webp",
    },
    {
      title: "Fruits",
      img: "https://c4.wallpaperflare.com/wallpaper/311/699/596/fruit-allsorts-pineapple-melon-wallpaper-preview.jpg",
    },
  ];

  const filteredCategories = categories.filter((cat) =>
    cat.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="consumer-home">
      <header className="navbar">
        <div className="logo1">PasumaiCart</div>
        <input
          type="text"
          placeholder="Search"
          className="search-box"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="cart">
          <FaShoppingCart />
        </div>
      </header>

      <nav className="navigation">
        <a href="#" onClick={() => setActiveSection("home")}>Home</a>
        <a href="#" onClick={() => setActiveSection("category")}>Shop by Category</a>
        <a href="#" onClick={() => setActiveSection("deals")}>Offers/Deals</a>
        <a href="#" onClick={() => setActiveSection("orders")}>My Orders</a>
        <a href="#" onClick={() => setActiveSection("profile")}>Profile</a>
      </nav>

      {/* Render sections dynamically based on activeSection */}
      {activeSection === "home" && (
        <>
          <section className="carousel-banner">
            <Slider {...settings}>
              {bannerImages.map((item, index) => (
                <div key={index} className="carousel-slide">
                  <img src={item.src} alt={item.title} className="carousel-img" />
                  <div className="caption">
                    <h2>{item.title}</h2>
                    <p>{item.subtitle}</p>
                  </div>
                </div>
              ))}
            </Slider>
          </section>

          {/* 🔥 Home Page Content */}
          <section className="home-content">
            <div className="welcome-message">
              <h2>Welcome to PasumaiCart 🌿</h2>
              <p>Your one-stop destination for fresh, organic, and locally sourced produce.</p>
            </div>

            <div className="featured-products">
              <h3>🌟 Featured Categories</h3>
              <div className="category-grid">
                {categories.map((cat, index) => (
                  <div className="category-card" key={index}>
                    <img src={cat.img} alt={cat.title} />
                    <h4>{cat.title}</h4>
                  </div>
                ))}
              </div>
            </div>

            <div className="why-us">
              <h3>Why Choose PasumaiCart?</h3>
              <ul>
                <li>✅ 100% Organic and Fresh Produce</li>
                <li>🚜 Directly Sourced from Local Farmers</li>
                <li>📦 Same-Day Delivery Available</li>
              </ul>
            </div>
          </section>
        </>
      )}

      {activeSection === "category" && (
        <section className="categories">
          {filteredCategories.map((cat, index) => (
            <div className="category-card" key={index}>
              <h3>{cat.title}</h3>
              <img src={cat.img} alt={cat.title} />
              <Link to={"/prodshow"}>Show More →</Link>
            </div>
          ))}
        </section>
      )}

{activeSection === "deals" && (
  <section className="deals-section">
    <h2>Exciting Offers & Deals</h2>
    <p className="deal-subtitle">Limited-time discounts on your favorite products. Grab them before they’re gone!</p>

    <div className="deal-banner">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ_aAXgfPHIv-fmoJ-bfWR3Do1krDsoSkC0Q&s"
        alt="Mega Sale Banner"
        className="deal-banner-img"
      />
    </div>

    <div className="deal-cards">
      <div className="deal-card">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvcuW-RfQeYTbaAz_K8jbyjfaedVN0ai0M1Q&s"
          alt="Onions"
        />
        <h3>Fresh Onions</h3>
        <p className="deal-price"><span className="old-price">₹50</span> ₹35/kg</p>
        <button className="deal-btn">Add to Cart</button>
      </div>

      <div className="deal-card">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJKRPXQYgZjJmuQTgXVQNLoZRxRWe7aW09wg&s"
          alt="Tomatoes"
        />
        <h3>Tomatoes</h3>
        <p className="deal-price"><span className="old-price">₹40</span> ₹28/kg</p>
        <button className="deal-btn">Add to Cart</button>
      </div>

      <div className="deal-card">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrzaaHtWSE2UakaXkz3lo3WltO6edBBHyFlA&s"
          alt="Apples"
        />
        <h3>Shimla Apples</h3>
        <p className="deal-price"><span className="old-price">₹150</span> ₹99/kg</p>
        <button className="deal-btn">Add to Cart</button>
      </div>
    </div>

    <div className="deal-footer">
      <p>🕒 Hurry! These deals are valid till stocks last.</p>
      <Link to="" className="view-more-deals">View All Offers →</Link>
    </div>
  </section>
)}




      {activeSection === "orders" && (
        <section className="orders-section">
          <h2>🧾 Your Orders Will Appear Here</h2>
          <h2>Placed Order Shows Here!</h2>
        </section>
      )}

      {activeSection === "profile" && (
        <section className="profile-section">
          <h2>👤 Your Profile Details</h2>
        </section>
      )}
    </div>
  );
}

export default ConsumerHome;
