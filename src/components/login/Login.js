import React, { useState } from "react";
import './login.css';

export default function LoginPage(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showSignup, setShowSignup] = useState(false);
    const [showForgotPassword, setShowForgotPassword] = useState(false);



      const handleLogin = (e) => {
        e.preventDefault();
        // Code to handle login
      };

      const handleSignup = (e) => {
        e.preventDefault();
        // Code to handle signup
      };

      const handleForgotPassword = (e) => {
        e.preventDefault();
        // Code to handle forgot password
      };


    return(
        <div className='mainLogin'>
            <h1>login</h1>
    <div className="login-page">
      {showSignup ? (
        <form onSubmit={handleSignup}>
          <h2>Sign Up</h2>
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
          <label>
            Confirm Password:
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </label>
          <button type="submit">Sign Up</button>
          <p>
            Already have an account?{" "}
            <span onClick={() => setShowSignup(false)}>Log In</span>
          </p>
        </form>
      ) : showForgotPassword ? (
        <form onSubmit={handleForgotPassword}>
          <h2>Forgot Password</h2>
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <button type="submit">Reset Password</button>
          <p>
            Remember your password?{" "}
            <span onClick={() => setShowForgotPassword(false)}>Log In</span>
          </p>
        </form>
      ) : (
        <form onSubmit={handleLogin}>
          <h2>Log In</h2>
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
          <button type="submit">Log In</button>
          <p>
            Don't have an account?{" "}
            <span onClick={() => setShowSignup(true)}>Sign Up</span>
          </p>
          <p>
            Forgot your password?{" "}
            <span onClick={() => setShowForgotPassword(true)}>
              Reset it here
            </span>
          </p>
        </form>
      )}
    </div>
        </div>
    )
}

