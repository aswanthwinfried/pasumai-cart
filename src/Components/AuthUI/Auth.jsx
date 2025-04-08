import React from 'react'
import { Link } from 'react-router-dom'
import "../AuthUI/Auth.css"

function Auth() {
  return (
    <div className="container">
      <div className="auth-card">
        <div className="logo">V EN</div>
        <h1 className="title">Welcome to Pasumai Cart</h1>
        <div className="button-group">
          {/* <button className="btn register-btn">Farmer Registration</button>
          <button className="btn register-btn">Consumer Registration</button> */}

        <Link to="/farmer-register" className="btn register-btn">Farmer Registration</Link>
        <Link to="/consumer-register" className="btn register-btn">Consumer Registration</Link>
        </div>
        {/* <button className="btn login-btn">Login →</button> */}
        <Link to="/login" className="btn login-btn">Login →</Link>
      </div>
    </div>
    
  )
}

export default Auth