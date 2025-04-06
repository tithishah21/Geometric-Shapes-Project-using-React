import React, { useState } from "react";
import "./assests/styles.css";

const SignUp = ({ toggleForm }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password, confirmPassword } = formData;

    if (!email || !password || !confirmPassword) {
      alert("All fields are required.");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      alert("Invalid email format.");
      return;
    }

    if (password.length < 6) {
      alert("Password must be at least 6 characters.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    alert("Account created successfully!");
  };

  return (
    <div className="form-box sign-up">
      <form onSubmit={handleSubmit} noValidate>
        <h2 className="title">Sign Up</h2>
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
        <div className="input-field">
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            required
            onChange={handleChange}
          />
        </div>
        <button className="btn" type="submit">Register</button>
        <p>
          Already have an account?{" "}
          <span className="switch" onClick={toggleForm}>
            Sign In
          </span>
        </p>
      </form>
    </div>
  );
};

export default SignUp;