import React ,{ useState, useEffect }from "react";
import NavBar from '../nav/navbar';

export default function MyPets({ logUserId}) {
  const [pets, setPets ] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`https://petfinder-backend.stephennene.repl.co/mypet?owner_id=${logUserId}`);
        const data = await response.json();
        setPets(data.pets);
      } catch (error) {
        setError(error);
      }
    }

    if (logUserId) {
      fetchData();
    } else {
      setError(new Error('you have to login to view your pets'));
    }
  }, [logUserId]);

  if (error) {
    return (
      <div>
        <NavBar/>
        <p className="alert alert-danger">{error.message}</p>
        {/* <a href="/" className="btn btn-primary me-2">Login</a>  <a href="/" className="btn btn-secondary">Sign Up</a> */}
      </div>
    );
  }

  if (!logUserId) {
    return (
      <div>
        <NavBar/>
        <p className="alert alert-danger">you have to login to view your pets</p>
        {/* <a href="/" className="btn btn-primary me-2">Login</a>  <a href="/" className="btn btn-secondary">Sign Up</a> */}
      </div>
    );
  }

  return (
    <div>
      <NavBar/>
      <h3>My Pets</h3>
      {pets.map(pet => (
        <div key={pet.id} className="card my-3">
          <div className="card-header">
            <h5 className="card-title mb-0">{pet.name}</h5>
          </div>
          <div className="card-body">
            <p className="card-text">Age: {pet.age}</p>
            <p className="card-text">Gender: {pet.gender}</p>
            <p className="card-text">Breed: {pet.breed}</p>
          </div>
          <div className="card-footer">
            {/* <button className="btn btn-danger me-2">Delete</button>            <button className="btn btn-primary">Edit</button> */}
          </div>
        </div>
      ))}
    </div>
  );
}
