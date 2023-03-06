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
    event.preventDefault();

    if (!formData.username || !formData.email || !formData.password ) {
      alert("Please fill in all fields.");
      return;
    }

    fetch("https://petfinder-backend.stephennene.repl.co/users/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        window.location.replace("/login"); // redirect to login page
      })
      .catch((error) => {
        console.error(error);

      });
  };


  const handleSubmit = (event) => {
  };

  return (
    <div className="main">

      <NavBar />
    <div className="signupstuff">
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

        <input type="submit"onClick={signUp} value="Sign Up" />
      </form>
    </div>
    </div>
  );
}
