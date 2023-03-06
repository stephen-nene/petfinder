import React, { useEffect, useState } from "react";
import NavBar from '../nav/navbar';

export default function MyPets() {
  const [users, setUsers] = useState([]);
  const [loggedInUserId, setLoggedInUserId] = useState(null);

  useEffect(() => {
    fetch('https://petfinder-backend.stephennene.repl.co/users')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setUsers(data);
      })
      .catch(error => console.log(error));

    // Get the user_id from the session storage
    const user_id = sessionStorage.getItem('user_id');

    // Fetch the details of the logged-in user
    fetch('https://petfinder-backend.stephennene.repl.co/users/' + user_id)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setLoggedInUserId(data.user.username);

      })
      .catch(error => console.log(error));
  }, []);

  console.log(users);

  return (
    <div>
      <NavBar />
      <h3>my pets</h3>
      <p>Logged in as user with id: {loggedInUserId}</p>
    </div>
  );
}
