import React, { useState } from 'react';
import NavBar from '../nav/navbar';

function Home() {
  const [pets, setPets] = useState([]);
  const [error, setError] = useState(null);
  const [isFetched, setIsFetched] = useState(false);

  const fetchPets = async () => {
    try {
      const response = await fetch('https://petfinder-backend.stephennene.repl.co/pets');
      if (!response.ok) {
        throw new Error('Failed to fetch pets');
      }
      const data = await response.json();
      setPets(data.pets);
      setError(null);
    } catch (error) {
      console.error(error);
      setError(error.message);
      setPets([]);
    }
  };

  const handleButtonClick = () => {
    setIsFetched(true);
    fetchPets();
  };

  return (
    <div>
      <NavBar />
      <div className="container mt-3">
        {!isFetched && (
          <button className="btn btn-primary mb-3" onClick={handleButtonClick}>
            Fetch Pets
          </button>
        )}
        {error && <div className="alert alert-danger">{error}</div>}
        {isFetched && (
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {pets.map((pet) => (
              <div key={pet.id} className="col">
                <div className="card h-100">
                  {/* <img src={pet.photoUrl} className="card-img-top" alt={pet.name} /> */}
                  <div className="card-body">
                    <h5 className="card-title">name:{pet.name}</h5>
                    <p className="card-text">{pet.description}</p>
                    <button className="btn btn-primary">Add to My Pets</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
