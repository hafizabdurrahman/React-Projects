import React, {useContext} from 'react';
import UserContext from '../Context/UserContext';

function Profile() {
    const {user} = useContext(UserContext);
  if (!user) return <h3>Login First</h3>
  return(
    <>
        <h2>Hello, {user.username}</h2>
        <h2>Your password is, {user.password}</h2>
    </>
  )
}

export default Profile