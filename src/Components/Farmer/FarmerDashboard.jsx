import React, { useState, useEffect } from 'react';
import './FarmerDashboard.css';

const FarmerDashboard = () => {
  const [showForm, setShowForm] = useState(false);
  const [productData, setProductData] = useState({ name: '', price: '', img: '' });
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [activeTab, setActiveTab] = useState("products");

  useEffect(() => {
    fetchProducts();
    fetchOrders();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await fetch('http://localhost:5000/products');
      const data = await res.json();
      setProducts(data);
    } catch (err) {
      console.error('Error fetching products:', err);
    }
  };

  const fetchOrders = async () => {
    try {
      const res = await fetch('http://localhost:5000/orders');
      const data = await res.json();
      setOrders(data);
    } catch (err) {
      console.error('Error fetching orders:', err);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = { ...productData, price: parseFloat(productData.price) };
      if (editMode) {
        await fetch(`http://localhost:5000/products/${editingId}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });
        alert('Product updated!');
      } else {
        await fetch('http://localhost:5000/products', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });
        alert('Product added!');
      }

      setProductData({ name: '', price: '', img: '' });
      setShowForm(false);
      setEditMode(false);
      setEditingId(null);
      fetchProducts();
    } catch (err) {
      console.error('Error submitting form:', err);
    }
  };

  const handleEdit = (product) => {
    setProductData(product);
    setEditingId(product.id);
    setEditMode(true);
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this product?');
    if (!confirmDelete) return;

    try {
      await fetch(`http://localhost:5000/products/${id}`, {
        method: 'DELETE',
      });
      alert('Product deleted!');
      fetchProducts();
    } catch (err) {
      console.error('Error deleting product:', err);
    }
  };

  return (
    <div className="dashboard-container">
      <nav className="navbar">
        <h2 className="logo4">Pasumai Cart</h2>
        <ul className="nav-links">
          <li onClick={() => setActiveTab("products")}>My Products</li>
          <li onClick={() => setActiveTab("orders")}>Orders</li>
          <li onClick={() => setActiveTab("earnings")}>Earnings</li>
          <li onClick={() => setActiveTab("profile")}>Profile</li>
          <li onClick={() => alert("Logged out!")}>Logout</li>
        </ul>
      </nav>

      <div className="dashboard-content">
        <h3>Dashboard Overview</h3>
        <div className="stats-boxes">
          <div className="box"><p>Total Orders 2025</p><h4>{orders.length}</h4></div>
          <div className="box"><p>Today's Orders</p><h4>05</h4></div>
          <div className="box"><p>Pending Orders</p><h4>01</h4></div>
          <div className="box"><p>Total Products</p><h4>{products.length}</h4></div>
        </div>

        {activeTab === "products" && (
          <>
            <div className="btn1-container">
              <button className="add1-btn" onClick={() => {
                setShowForm(!showForm);
                setEditMode(false);
                setProductData({ name: '', price: '', img: '' });
              }}>
                {showForm ? 'Close Form' : 'Add New Product'}
              </button>
            </div>

            {showForm && (
              <form className="add-product-form" onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  placeholder="Product Name"
                  value={productData.name}
                  onChange={handleChange}
                  required
                />
                <input
                  type="number"
                  name="price"
                  placeholder="Price (per kg)"
                  value={productData.price}
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="img"
                  placeholder="Image URL"
                  value={productData.img}
                  onChange={handleChange}
                  required
                />
                <button type="submit">{editMode ? 'Update Product' : 'Submit'}</button>
              </form>
            )}

            <div className="product-list">
              <h3>My Products</h3>
              {products.length === 0 ? (
                <p>No products found.</p>
              ) : (
                <table>
                  <thead>
                    <tr>
                      <th>Image</th>
                      <th>Name</th>
                      <th>Price</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map((prod) => (
                      <tr key={prod.id}>
                        <td><img src={prod.img} alt={prod.name} width="60" /></td>
                        <td>{prod.name}</td>
                        <td>₹{prod.price}</td>
                        <td>
                          <button onClick={() => handleEdit(prod)}>Edit</button>
                          <button onClick={() => handleDelete(prod.id)}>Delete</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </>
        )}

        {activeTab === "orders" && (
          <div className="orders-section">
            <h3>📦 Order Management</h3>
            {orders.length === 0 ? (
              <p>No orders available at the moment.</p>
            ) : (
              <table>
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Qty</th>
                    <th>Buyer</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order) => (
                    <tr key={order.id}>
                      <td><img src={order.img} alt={order.name} width="60" /></td>
                      <td>{order.name}</td>
                      <td>₹{order.price}</td>
                      <td>{order.quantity}</td>
                      <td>{order.buyer}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        )}

        {activeTab === "earnings" && (
          <div className="earnings-section">
            <h3>💰 Earnings Summary</h3>
            <p>Total Earnings: ₹12,350</p>
            <p>This Month: ₹3,200</p>
            <p>Pending Payments: ₹850</p>
          </div>
        )}

        {activeTab === "profile" && (
          <div className="profile-section">
            <h3>👤 Farmer Profile</h3>
            <p><strong>Name:</strong> Ramesh Kumar</p>
            <p><strong>Email:</strong> ramesh.farmer@example.com</p>
            <p><strong>Location:</strong> Dindigul, Tamil Nadu</p>
            <button onClick={() => alert("Edit profile coming soon!")}>Edit Profile</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default FarmerDashboard;
