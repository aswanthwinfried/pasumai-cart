// src/Components/Login/Login.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
  const [role, setRole] = useState("consumer");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login as:", role);
    // Perform role-based login logic here
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="role-selection">
          <label>
            <input
              type="radio"
              value="consumer"
              checked={role === "consumer"}
              onChange={(e) => setRole(e.target.value)}
            />
            Consumer
          </label>
          <label>
            <input
              type="radio"
              value="farmer"
              checked={role === "farmer"}
              onChange={(e) => setRole(e.target.value)}
            />
            Farmer
          </label>
        </div>
        <input type="tel" placeholder="Phone Number" required />
        <input type="password" placeholder="Password" required />
        {/* <button type="submit">Login</button> */}
        <Link to={"/conshome"} className="button">Login</Link>
      </form>
    </div>
  );
}

export default Login;
