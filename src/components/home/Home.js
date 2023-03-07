import React, { useState } from 'react';
import NavBar from '../nav/navbar';
import './Home.css';

function Home({ users, logUserId, updatePetValue, getPet }) {
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
      console.log(data.pets)
      setError(null);
    } catch (error) {
      console.error(error);
      setError(error.message);
      setPets([]);
    }
  };

  const getOwner = (pet) => {
    return users.find((user) => user.id === pet.owner_id);
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
          <div>
            <p>Logged in as {logUserId}</p>
            <button className="btn btn-primary mb-3" onClick={handleButtonClick}>
              Populate Pets
            </button>
          </div>
        )}
        {error && <div className="alert alert-danger">{error}</div>}
        {isFetched && (
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {pets.map((pet) => (
              <div key={pet.id} className="col">
                <div className="card h-100">
                  <div className="card-header">
                    <h5 className="card-title mb-0">{pet.name}</h5>
                    <h6 className="card-subtitle text-muted">{pet.type}</h6>
                    <img
                      src={pet.url}
                      alt={pet.name}
                      className="card-img-top rounded-start"
                      style={{ width: '50%' }}
                    />
                  </div>
                  <div className="card-body">
                    <p className="card-text">{pet.description}</p>
                    <ul className="list-unstyled mb-0">
                      <li>Age: {pet.age}</li>
                      <li>Gender: {pet.gender}</li>
                      <li>Breed: {pet.breed}</li>
                      <li
                        className={`pet-owner ${
                          getOwner(pet) ? 'has-owner' : ''
                        }`}
                      >
                        Owner:{' '}
                        {getOwner(pet)
                          ? getOwner(pet).username
                          : 'Unknown'}
                      </li>
                    </ul>
                  </div>
                  {pet.owner_id === null && (
                    <div className="card-footer">
                      <button onClick={() => {
                          getPet(pet);
                          updatePetValue(pet.id, 'owner_id', logUserId);
                      }} className="btn btn-primary">
                        Add to My Pets
                      </button>
                    </div>
                  )}
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
