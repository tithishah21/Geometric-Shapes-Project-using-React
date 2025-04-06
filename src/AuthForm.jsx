import React, { useEffect, useState } from "react";
import "./AuthForm.css"; // your converted CSS from Registration.css

export default function AuthForm() {
  const [isSignIn, setIsSignIn] = useState(true);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const toggleForm = () => setIsSignIn(!isSignIn);

  useEffect(() => {
    setTimeout(() => {
      setIsSignIn(true);
    }, 200);
  }, []);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }));
  };

  const validateForm = () => {
    const { username, email, password, confirmPassword } = formData;
    if (!username || !email || !password || !confirmPassword) {
      alert("Please fill in all fields.");
      return;
    }
    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }
    alert("Form submitted!");
  };

  return (
    <div id="container" className={`container ${isSignIn ? "sign-in" : "sign-up"}`}>
      <div className="row">
        {/* Sign Up Form */}
        <div className="col align-items-center flex-col sign-up">
          <div className="form-wrapper align-items-center">
            <div className="form sign-up">
              <div className="input-group">
                <i className="bx bx-user"></i>
                <input type="text" id="username" placeholder="Username" onChange={handleChange} value={formData.username} />
              </div>
              <div className="input-group">
                <i className="bx bx-mail-send"></i>
                <input type="email" id="email" placeholder="Email" onChange={handleChange} value={formData.email} />
              </div>
              <div className="input-group">
                <i className="bx bxs-lock-alt"></i>
                <input type="password" id="password" placeholder="Password" onChange={handleChange} value={formData.password} />
              </div>
              <div className="input-group">
                <i className="bx bxs-lock-alt"></i>
                <input type="password" id="confirmPassword" placeholder="Confirm password" onChange={handleChange} value={formData.confirmPassword} />
              </div>
              <button onClick={validateForm}>Sign up</button>
              <p>
                <span>Already have an account?</span>
                <b onClick={toggleForm} className="pointer">Sign in here</b>
              </p>
            </div>
          </div>
        </div>

        {/* Sign In Form */}
        <div className="col align-items-center flex-col sign-in">
          <div className="form-wrapper align-items-center">
            <div className="form sign-in">
              <div className="input-group">
                <i className="bx bxs-user"></i>
                <input type="text" placeholder="Username" required />
              </div>
              <div className="input-group">
                <i className="bx bxs-lock-alt"></i>
                <input type="password" placeholder="Password" required />
              </div>
              <button>Sign in</button>
              <p><b>Forgot password?</b></p>
              <p>
                <span>Don't have an account?</span>
                <b onClick={toggleForm} className="pointer">Sign up here</b>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Content Row */}
      <div className="row content-row">
        <div className="col align-items-center flex-col">
          <div className="text sign-in"><h2>Welcome</h2></div>
          <div className="img sign-in"></div>
        </div>
        <div className="col align-items-center flex-col">
          <div className="img sign-up"></div>
          <div className="text sign-up"><h2>Join with us</h2></div>
        </div>
      </div>
    </div>
  );
}
