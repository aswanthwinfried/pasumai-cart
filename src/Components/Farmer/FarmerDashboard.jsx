import React from 'react';
import './FarmerDashboard.css';

const FarmerDashboard = () => {
  return (
    <div className="dashboard-container">
      {/* Navigation Bar */}
      <nav className="navbar">
        <h2 className="logo">Pasumai Cart</h2>
        <ul className="nav-links">
          <li>My Products</li>
          <li>Orders</li>
          <li>Earnings</li>
          <li>Profile</li>
          <li>Logout</li>
        </ul>
      </nav>

      {/* Main Dashboard */}
      <div className="dashboard-content">
        <h3>Dashboard Overview</h3>
        <div className="stats-boxes">
          <div className="box">
            <p>Total Orders 2025</p>
            <h4>541</h4>
          </div>
          <div className="box">
            <p>Today's Orders</p>
            <h4>05</h4>
          </div>
          <div className="box">
            <p>Pending Orders</p>
            <h4>01</h4>
          </div>
          <div className="box">
            <p>Total Products</p>
            <h4>05</h4>
          </div>
        </div>

        <div className="btn1-container">
          <button className="add1-btn">Add New Product</button>
        </div>
      </div>
    </div>
  );
};

export default FarmerDashboard;
