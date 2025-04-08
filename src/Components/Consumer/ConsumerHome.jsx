// src/Components/Consumer/ConsumerHome.jsx
import React from "react";
import "./ConsumerHome.css";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ConsumerHome() {
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

  return (
    <div className="consumer-home">
      <header className="navbar">
        <div className="logo">PasumaiCart</div>
        <input type="text" placeholder="Search" className="search-box" />
        <div className="cart">
          <FaShoppingCart />
          <span>0</span>
        </div>
      </header>

      <nav className="navigation">
        <a href="#">Home</a>
        <a href="#">Shop by Category</a>
        <a href="#">Offers/Deals</a>
        <a href="#">My Orders</a>
        <a href="#">Profile</a>
      </nav>

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

      <section className="categories">
        <div className="category-card">
          <h3>Vegetables</h3>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT96YPQ3-hh7GohSpaqjF1bAh3m7iOkvnpPTQ&s"
            alt="Vegetables"
          />
          <Link to={"/prodshow"}>Show More →</Link>

        </div>
        <div className="category-card">
          <h3>Greens</h3>
          <img
            src="https://img.cdnx.in/177965/1649422146937_SKU-0221_0.png?width=600&format=webp"
            alt="Greens"
          />
          <Link to={"/prodshow"}>Show More →</Link>
          </div>
        <div className="category-card">
          <h3>Fruits</h3>
          <img
            src="https://c4.wallpaperflare.com/wallpaper/311/699/596/fruit-allsorts-pineapple-melon-wallpaper-preview.jpg"
            alt="Fruits"
          />
          <Link to={"/prodshow"}>Show More →</Link>
          </div>

 
          
      </section>
    </div>
  );
}

export default ConsumerHome;
