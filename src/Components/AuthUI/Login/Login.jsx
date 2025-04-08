import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const [role, setRole] = useState("consumer");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = `http://localhost:5000/${role}s?phone=${phone}&password=${password}`;

    try {
      const res = await fetch(url);
      const data = await res.json();

      if (data.length > 0) {
        alert(`Login successful as ${role}`);
        navigate(role === "consumer" ? "/conshome" : "/farmerhome");
      } else {
        alert("Invalid credentials");
      }
    } catch (err) {
      console.error("Login error:", err);
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="role-selection">
          <label>
            <input type="radio" value="consumer" checked={role === "consumer"} onChange={(e) => setRole(e.target.value)} />
            Consumer
          </label>
          <label>
            <input type="radio" value="farmer" checked={role === "farmer"} onChange={(e) => setRole(e.target.value)} />
            Farmer
          </label>
        </div>
        <input type="tel" placeholder="Phone Number" required value={phone} onChange={(e) => setPhone(e.target.value)} />
        <input type="password" placeholder="Password" required value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit" className="button">Login</button>
      </form>
    </div>
  );
}

export default Login;
