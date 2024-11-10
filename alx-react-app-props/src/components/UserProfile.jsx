<<<<<<< HEAD
const UserProfile = (props) => {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>Age: {props.age}</p>
      <p>Bio: {props.bio}</p>
    </div>
  );
};
=======
import React, { useContext } from 'react';
import UserContext from './UserContext';

function UserDetails() {
  // Access user data directly from the context
  const userData = useContext(UserContext);

  return (
    <div>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
    </div>
  );
}

export default UserDetails;
>>>>>>> 6f5d88ccc54e08b97f4c502f128dda0f9dcb8a04
