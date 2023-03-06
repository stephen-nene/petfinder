import React, { useState } from "react";
import NavBar from "../nav/navbar";
import "./login.css"

export default function SignUp() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });


  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const signUp = (event) => {
    // handle sign up logic
    event.preventDefault();

    fetch("http://0.0.0.0:9292/users/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        window.location.replace("/login");
        // Do something with the newly created user data
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleSubmit = (event) => {
  };

  return (
    <div className="signupstuff">
      <NavBar />
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            name="username"
            id="username"
            value={formData.username}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            id="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </div>
        {/* <div>
          <label htmlFor="password">confirm-Password:</label>
          <input
            type="password"
            name="password"
            id="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </div> */}

        <input type="submit"onClick={signUp} value="Sign Up" />
      </form>
    </div>
  );
}
