// import React from "react";
// import NavBar  from '../nav/navbar';

// export default function MyPets (){
//     return (

//         <div>
//             <NavBar/>
//             <h3>
//                my pets
//             </h3>
//         </div>
//     )

// }
import React, { useState, useEffect } from "react";

export default function MyPets() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
      fetch('/users/all')
        .then(response => response.json())
        .then(data => setUsers(data))
        .then(data => console.log(data))
        .catch(error => console.log(error));

      console.log(users)
    }, [users]);

  return (
    <div>
      <h2>All Users</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
