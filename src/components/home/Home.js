import React, { useState, useEffect } from 'react';
import NavBar  from '../nav/navbar';

function Home() {
  const [pets, setPets] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const response = await fetch('https://petfinder-backend.stephennene.repl.co/pets');
        if (!response.ok) {
          throw new Error('Failed to fetch pets');
        }
        const data = await response.json();
        console.log(data.pets[0])
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

  return (
<div>
      <NavBar />

 </div>
  );
}

export default Home;
