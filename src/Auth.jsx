import React, { useState } from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import "./assests/styles.css";

const Auth = () => {
  const [showSignIn, setShowSignIn] = useState(true);

  return (
    <div className={`container ${showSignIn ? "sign-in-mode" : "sign-up-mode"}`}>
      {showSignIn ? (
        <SignIn toggleForm={() => setShowSignIn(false)} />
      ) : (
        <SignUp toggleForm={() => setShowSignIn(true)} />
      )}
    </div>
  );
};

export default Auth;