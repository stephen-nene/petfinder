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
      {/* <main id="main"> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login  />} />
          <Route path="/mypets" element={<MyPets/>} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      {/* </main> */}
    </Router>
  );
}

export default App;
