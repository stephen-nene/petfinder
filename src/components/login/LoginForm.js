import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./LoginForm.css";
import Auth from "./Auth";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await Auth.login(email, password);
  };

  return (
    <div className="login-form">
      <h2>Log In</h2>
      <form onSubmit={handleSubmit}>
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
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>
        <p>
          Forgot your password?{" "}
          <Link to="/forgot-password">Reset it here</Link>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
