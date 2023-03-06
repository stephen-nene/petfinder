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

  fetchData();
}, [logUserId]);

if (error) {
  return (
    <div>
      <NavBar/>
      <p>Error fetching data from server.</p>
      <button>Login</button>
      <button>Sign Up</button>
    </div>
  );
}

return (
  <div>
    <NavBar/>
    <h3>My Pets</h3>
    {pets.map(pet => (
      <div key={pet.id}>
        <p>Name: {pet.name}</p>
        <p>Age: {pet.age}</p>
        <p>Species: {pet.species}</p>
      </div>
    ))}
  </div>
);
}
