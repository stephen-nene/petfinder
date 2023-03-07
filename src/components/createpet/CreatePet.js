import React, { useState } from "react";
import NavBar from "../nav/navbar";

export default function CreatePet({logUserId}) {
  const [petData, setPetData] = useState({ name: "", age: "", species: "", breed: "", animal_type: "",owner_id: logUserId ,url: "" });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setPetData({ ...petData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(petData,logUserId)

//     try {
//       const response = await fetch("https://petfinder-backend.stephennene.repl.co/pets/create", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(petData),
//       });
//       const data = await response.json();
//       alert(data.message);
//     } catch (error) {
//       console.error(error);
//       alert("Failed to create pet.");
//     }
  };

  return (
    <div>
      <NavBar />
      <h1>Create a new pet</h1>
      <form onSubmit={handleFormSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" className="form-control" id="name" name="name" value={petData.name} onChange={handleInputChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="name">Animal-type</label>
          <input type="text" className="form-control" id="animal_type" name="animal_type" value={petData.animal_type} onChange={handleInputChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="age">Age</label>
          <input type="number" className="form-control" id="age" name="age" value={petData.age} onChange={handleInputChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="species">Species</label>
          <input type="text" className="form-control" id="species" name="species" value={petData.species} onChange={handleInputChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="breed">Breed</label>
          <input type="text" className="form-control" id="breed" name="breed" value={petData.breed} onChange={handleInputChange} required />
        </div>
        <div className="form-group">
            <label htmlFor="url">Pet URL</label>
            <input type="url" className="form-control" id="url" name="url" value={petData.url} onChange={handleInputChange} required />
        </div>
        <button type="submit" className="btn btn-primary">Create</button>
      </form>
    </div>
  );
}
