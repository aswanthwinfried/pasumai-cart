// src/Components/Registration/ConsumerRegister.jsx
import React from "react";
import "./Register.css";
import { Link } from "react-router-dom";

function ConsumerRegister() {
  return (
    <div className="form-container">
      <h2>Consumer Registration</h2>
      <form>
        <input type="text" placeholder="Name" required />
        <input type="email" placeholder="Email" required />
        <input type="tel" placeholder="Phone Number" required />
        <input type="password" placeholder="Password" required />
        <input type="password" placeholder="Re-enter Password" required />
        {/* <button type="submit">Sign Up</button> */}
        <Link to={"/"} className="button">Sign Up</Link>
      </form>
    </div>
  );
}

export default ConsumerRegister;
