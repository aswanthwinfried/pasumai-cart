// src/Components/Registration/FarmerRegister.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./Register.css";

function FarmerRegister() {
  return (
    <div className="form-container">
      <h2>Farmer Registration</h2>
      <form>
        <input type="text" placeholder="Name" required />
        <input type="text" placeholder="City" required />
        <input type="tel" placeholder="Phone Number" required />
        <input type="text" placeholder="Farm Detail" required />
        <input type="password" placeholder="Password" required />
        <input type="password" placeholder="Re-enter Password" required />
        {/* <button type="submit">Sign Up</button> */}
        <Link to={"/"} className="button">Sign Up</Link>

      </form>
    </div>
  );
}

export default FarmerRegister;
