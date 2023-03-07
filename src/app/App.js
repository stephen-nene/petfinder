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

  const updatePetValue = async (petId, value) => {
    try {
      const response = await fetch(`https://petfinder-backend.stephennene.repl.co/pets/update/${petId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ value })
      });
      const data = await response.json();
      console.log(data); // do something with the response data
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home updatePetValue={updatePetValue} logUserId={logUserId} users={users} />} />
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
