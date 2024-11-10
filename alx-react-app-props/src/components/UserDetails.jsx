// src/components/UserDetails.jsx

import { useContext } from 'react';
import UserContext from '../UserContext'; // Import the UserContext

function UserDetails() {
  // Consume the userData from UserContext
  const userData = useContext(UserContext);

  return (
    <div>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
    </div>
  );
}

export default UserDetails;
