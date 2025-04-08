import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";

function FarmerRegister() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    city: "",
    phone: "",
    farmdetail: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { placeholder, value } = e.target;
    const map = {
      Name: "name",
      City: "city",
      "Phone Number": "phone",
      "Farm Detail": "farmdetail",
      Password: "password",
      "Re-enter Password": "confirmPassword",
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

    const newFarmer = {
      name: formData.name,
      city: formData.city,
      phone: formData.phone,
      farmdetail: formData.farmdetail,
      password: formData.password,
    };

    try {
      const response = await fetch("http://localhost:5000/farmers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newFarmer),
      });

      if (response.ok) {
        alert("Farmer registered successfully!");
        navigate("/login");
      } else {
        alert("Registration failed.");
      }
    } catch (error) {
      console.error("Registration error:", error);
      alert("An error occurred during registration.");
    }
  };

  return (
    <div className="form-container">
      <h2>Farmer Registration</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" required onChange={handleChange} />
        <input type="text" placeholder="City" required onChange={handleChange} />
        <input type="tel" placeholder="Phone Number" required onChange={handleChange} />
        <input type="text" placeholder="Farm Detail" required onChange={handleChange} />
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

export default FarmerRegister;
