import React, { useState, useEffect } from 'react';
import NavBar  from '../nav/navbar';

function Home() {
  const [pets, setPets] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const response = await fetch('http://0.0.0.0:9292/pets');
        if (!response.ok) {
          throw new Error('Failed to fetch pets');
        }
        const data = await response.json();
        console.log(data)
        setPets(data);
        setError(null);
      } catch (error) {
        console.error(error);
        setError(error.message);
        setPets([]);
      }
    };
    fetchPets();
  }, []);

  const handleAddToMyPets = (petId) => {
    // Add logic for adding pet to "My Pets"
    console.log(`Adding pet with id ${petId} to My Pets`);
  }

  return (
    <div>
      <NavBar />
      <div className="container mt-4">
          {/* <img src=} className="card-img-top" alt={`Picture of ${pet.name}`} /> */}
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {pets.length > 0 && pets.map(pet => (
            <div key={pet.pet.id} className="col">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">{pet.pet.name}</h5>
                  <p className="card-text">{pet.pet.breed}</p>
                  <p className="card-text">{pet.pet.age} years old</p>
                  <p className="card-text">{pet.pet.gender}</p>
                  <p className="card-text">{pet.pet.owner_id ? `Owned by ${pet.pet.owner_id}` : 'No owner'}</p>
                </div>
                <div className="card-footer">
                  <button onClick={() => handleAddToMyPets(pet.id)} className="btn btn-primary">
                    Add to My Pets
                  </button>
                </div>
              </div>
            </div>
          ))}
          {pets.length === 0 && !error && <p>Loading pets...</p>}
          {error && <p>Error: {error}</p>}
        </div>
      </div>
    </div>
  );
}

export default Home;
