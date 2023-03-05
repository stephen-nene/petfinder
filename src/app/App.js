import React from "react";
import { BrowserRouter as Router, Route, Routes,  } from 'react-router-dom';

import Home from "../components/home/Home"
import Login from "../components/login/Login";
import MyPets from "../components/myPets/MyPets";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/mypets" element={<MyPets/>} />
      </Routes>
    </Router>
  );
}

export default App;
