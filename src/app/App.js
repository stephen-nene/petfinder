import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../components/home/Home";
import Login from "../components/login/Login";
import SignUp from "../components/login/SignUp";
import MyPets from "../components/myPets/MyPets";
// import { useEffect, useState } from 'react';

function App() {
  return (
    <Router>
      <a href="#main" style={{ position: "absolute", top: "-9999px", left: "-9999px" }}>
        Skip to content
      </a>
      <header>
        {/* header content */}
      </header>
      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/mypets" element={<MyPets />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </main>
      <footer>
        {/* footer content */}
      </footer>
    </Router>
  );
}

export default App;
