import React from "react";
import { Link } from "react-router-dom"; 
import "../styles/Login.css";
 // Ensure this file is correctly imported

function Login() {
  return (
    <div className="login-container">
      <div className="login-wrapper">
        {/* Recruiter Login Card */}
        <div className="card">
          <h2>Recruiter Login</h2>
          <input type="text" className="input-field" placeholder="Username" />
          <input type="password" className="input-field" placeholder="Password" />
          <button className="login-button">Login</button>
        </div>

        {/* Candidate Login Card */}
        <div className="card">
          <h2>Candidate Login</h2>
          <input type="text" className="input-field" placeholder="Username" />
          <input type="password" className="input-field" placeholder="Password" />
          <button className="login-button">Login</button>
        </div>

        {/* New User Element */}
        <div className="new-user">
            <span>New User? </span>
            <Link to="/register" className="register-link">Register Here</Link> {/* This should redirect to Registration Page */}
        </div>
      </div>
    </div>
  );
}

export default Login;
