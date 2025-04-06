import React, { useState } from "react";
import "./assests/styles.css";

const SignIn = ({ toggleForm }) => {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = formData;

    if (!email || !password) {
      alert("Please fill in all fields.");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      alert("Invalid email format.");
      return;
    }

    if (password.length < 6) {
      alert("Password should be at least 6 characters.");
      return;
    }

    alert("Logged in successfully!");
  };

  return (
    <div className="form-box sign-in">
      <form onSubmit={handleSubmit} noValidate>
        <h2 className="title">Sign In</h2>
        <div className="input-field">
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            onChange={handleChange}
          />
        </div>
        <div className="input-field">
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            onChange={handleChange}
          />
        </div>
        <button className="btn" type="submit">Login</button>
        <p>
          Don’t have an account?{" "}
          <span className="switch" onClick={toggleForm}>
            Sign Up
          </span>
        </p>
      </form>
    </div>
  );
};

export default SignIn;