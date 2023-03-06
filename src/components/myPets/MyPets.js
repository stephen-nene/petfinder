import React, { useEffect, useState } from "react";
import NavBar from '../nav/navbar';

export default function MyPets() {
  const [users, setUsers] = useState([]);
  const [loggedInUserId, setLoggedInUserId] = useState(null);

  useEffect(() => {
    fetch('https://petfinder-backend.stephennene.repl.co/users')
      .then(response => response.json())
      .then(data => {
        setUsers(data);
      })
      .catch(error => console.log(error));

    const user_id = sessionStorage.getItem('user_id');

    fetch('https://petfinder-backend.stephennene.repl.co/users/' + user_id)
      .then(response => response.json())
      .then(data => {
        setLoggedInUserId(data.user.id);
      })
      .catch(error => console.log(error));
  }, []);

  const handleLogin = () => {
    window.location.href = '/login';
  };

  const handleSignup = () => {
    window.location.href = '/signup';
  };

  return (
    <div>
      <NavBar />
      <h3>my pets</h3>
      {loggedInUserId ? (
        <p>Logged in as {users.find(user => user.id === loggedInUserId).name}</p>
      ) : (
        <div>
          <button onClick={handleLogin}>Login</button>
          <button onClick={handleSignup}>Signup</button>
        </div>
      )}
        {loggedInUserId && users.length > 0 && (
        <div>
            <h4>Your pets:</h4>
            <ul>
            {users.find(user => user.id === loggedInUserId).pets.map(pet => (
                <li key={pet.id}>{pet.name}</li>
            ))}
            </ul>
        </div>
        )}
    </div>
  );
}
