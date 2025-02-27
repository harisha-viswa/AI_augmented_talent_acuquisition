import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

const Signup = () => {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
    accountType: "free", // Default selection
  });

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    console.log("Form Data:", formData);

    // Later, connect to Azure DB
  };

  return (
  <div className="d-flex align-items-center justify-content-center" 
    style={{ 
      width: "100vw", 
      minHeight: "100vh", 
      backgroundColor: "#E0F7FA", 
      display: "flex", 
      flexDirection: "column",
    }}>
    <div className="container-fluid flex-grow-1 d-flex align-items-center justify-content-center"
>
      <div className="row w-75">

        {/* Sign-Up Form */}
        <div className="col-md-5 p-4 border rounded shadow bg-white" style={{ height: "90vh" }}>

          <h2 className="text-center mb-4">SIGN UP</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Email ID:</label>
              <input
                type="email"
                name="email"
                className="form-control"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Username:</label>
              <input
                type="text"
                name="username"
                className="form-control"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Password:</label>
              <input
                type="password"
                name="password"
                className="form-control"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Re-confirm Password:</label>
              <input
                type="password"
                name="confirmPassword"
                className="form-control"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>

            {/* Account Type Selection */}
            <div className="mb-3">
              <label className="form-label d-block">Type:</label>
              <div className="form-check form-check-inline">
                <input
                  type="radio"
                  className="form-check-input"
                  name="accountType"
                  value="recruiter"
                  checked={formData.accountType === "recruiter"}
                  onChange={handleChange}
                />
                <label className="form-check-label">Recruiter</label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  type="radio"
                  className="form-check-input"
                  name="accountType"
                  value="candidate"
                  checked={formData.accountType === "candidate"}
                  onChange={handleChange}
                />
                <label className="form-check-label">Candidate</label>
              </div>
            </div>

            <button type="submit" className="btn w-100 text-white" style={{ backgroundColor: "#008080", border: "none" }}>
              Create Account
            </button>
          </form>
        </div>

        {/* Image Placeholder */}
        <div className="col-md-7 d-flex align-items-center justify-content-center border rounded shadow bg-light p-0" style={{ height: "90vh" }}>
        <img
        src="/images/signup_image.jpg"
        alt="Signup Illustration"
        className="img-fluid"
        style={{ width: "100%", height: "100vh", objectFit: "cover",borderRadius: "8px" }} 
      />
        </div>
      </div>
    </div>
  </div>
  );
};

export default Signup;