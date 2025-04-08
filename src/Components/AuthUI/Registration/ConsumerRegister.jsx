import React, { useState } from "react";
import "./Register.css";
import { useNavigate } from "react-router-dom";

function ConsumerRegister() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { placeholder, value } = e.target;

    const map = {
      Name: "name",
      Email: "email",
      "Phone Number": "phone",
      Password: "password",
      "Re-enter Password": "confirmPassword"
    };

    const key = map[placeholder];
    if (key) {
      setFormData({ ...formData, [key]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const newUser = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      password: formData.password,
    };

    try {
      const response = await fetch("http://localhost:5000/consumers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newUser),
      });

      if (response.ok) {
        alert("Registered successfully!");
        navigate("/login");
      } else {
        alert("Registration failed.");
      }
    } catch (error) {
      console.error("Error registering:", error);
    }
  };

  return (
    <div className="form-container">
      <h2>Consumer Registration</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" required onChange={handleChange} />
        <input type="email" placeholder="Email" required onChange={handleChange} />
        <input type="tel" placeholder="Phone Number" required onChange={handleChange} />
        <input type="password" placeholder="Password" required onChange={handleChange} />
        <input
          type="password"
          placeholder="Re-enter Password"
          required
          onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
        />
        <button type="submit" className="button">Sign Up</button>
      </form>
    </div>
  );
}

export default ConsumerRegister;
