import { handleSwitchClick } from './functionality';
import React, { useState, useRef } from "react";
import NavBar from "../../src/components/nav/navbar";
import "./login.css";

export default function Login() {
  const [isLoginForm, setIsLoginForm] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);

  const formHolder = useRef(null);

  const handleFormSubmit = (event) => {
    event.preventDefault();

    fetch("/users/authenticate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: username, password: password }),
    })
      .then((response) => {
        if (!response.ok) throw new Error(response.status);
        return response.json();
      })
      .then((data) => setUser(data))
      .catch((error) => console.error(error));
  };
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (

    <div className="navdiv">
      <NavBar />
      <div className="container">
        <section id="formHolder">
          <div className="row">
            {/* brandbox*/}
            <div className="col-sm-6 brand">
              <a href="/" className="logo">
                Pets <span>.</span>
              </a>
              <div className="heading">
                <h2>Pet Finder</h2>
                <p>You are at the right place</p>
              </div>

              <div className="success-msg">
                <p>Great! You are one of our members now</p>
                <a href="/mypets" className="profile">
                  Your Profile
                </a>
              </div>
            </div>

            {/* form box */}
            <div className="col-sm-6 form">
                      {/* {errorMessage && (
          <div className="error-message">{errorMessage}</div>
        )} */}
              {/* login form */}
              <div className={`form-peice ${isLoginForm ? "switched" : ""}`}>
                <form className="login-form" action="#" method="post">
                  <div className="form-group">
                    <label htmlFor="loginemail">Email Address</label>
                    <input
                      type="email"
                      name="user_name"
                     onChange={handleUsernameChange}
                      value={username}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="loginPassword">Password</label>
                    <input
                      type="password"
                      name="loginPassword"
                      value={password}
                      onChange={handlePasswordChange}
                      required
                    />
                  </div>

                  <div className="CTA">
                    <input type="submit" onClick={handleFormSubmit} value="Login" id="login" />
                    <a href="#new" className="switch"     // onClick={handleSwitchClick}>
                    onClick={(event) => handleSwitchClick(event, isLoginForm, setIsLoginForm, formHolder)}>
                      I'm New
                    </a>
                  </div>
                </form>
              </div>

              {/* signup form */}
              <div className={`form-peice ${!isLoginForm ? "switched" : ""}`}>
                <form className="signup-form" action="#" method="post">
                  <div className="form-group">
                    <label htmlFor="username">Full Name</label>
                    <input
                      type="text"
                      name="username"
                      id="username"
                      className="name"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email Adderss</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="email"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      className="pass"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="passwordConfirm">Confirm Password</label>
                    <input
                      type="password"
                      name="passwordConfirm"
                      id="passwordConfirm"
                      className="passConfirm"
                      required
                    />
                  </div>

                  <div className="CTA">
                    <input type="submit" value="Signup" id="signup" />
                    <a href="#signup" className="switch" onClick={(event) => handleSwitchClick(event, isLoginForm, setIsLoginForm, formHolder)}>
                  I have an account
                  </a>
                  </div>
                  </form>
                  </div>
                  </div>
                  </div>
                  </section>
                  </div>
                  {user && (
        <div>
          Logged in as {user.username}
        </div>
      )}
                  </div>


  );
}
