import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../components/home/Home";
import Login from "../components/login/Login";
import SignUp from "../components/login/SignUp";
import MyPets from "../components/myPets/MyPets";
import CreatePet from "../components/createpet/CreatePet";

function App() {
  const [logUserId, setLogUserId] = useState(null);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://petfinder-backend.stephennene.repl.co/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home logUserId={logUserId} users={users} />} />
        <Route
          path="/login"
          element={<Login logUserId={logUserId} setLogUserId={setLogUserId} />}
        />
        <Route path="/mypets" element={<MyPets logUserId={logUserId} />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/create" element={ <CreatePet logUserId={logUserId}/> } />
      </Routes>
    </Router>
  );
}

export default App;
