import React, { useState } from "react";
import NavBar from "../nav/navbar";
import "./login.css";
const { sessionStorage } = window;

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLoginSubmit = (event) => {
    event.preventDefault();

    fetch("https://petfinder-backend.stephennene.repl.co/users/authenticate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle successful login
        console.log(data, loggedIn);
        setLoggedIn(true);
        sessionStorage.setItem('user_id', data.id);
        window.location.replace("/mypets");
      })
      .catch((error) => {
        setErrorMessage("Invalid username or password");
      });
  };

  return (
    <div className="main">

      <NavBar />
    <div className="loginstuff">
      <div className="form-container">
        <form className="form-peice" onSubmit={handleLoginSubmit}>
          <h1>Login</h1>
          {errorMessage && <div className="error">{errorMessage}</div>}
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={handleUsernameChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </div>
          <div className="form-group">
            <button type="submit">Login</button>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
}
