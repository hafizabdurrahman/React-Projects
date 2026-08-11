import React, {useContext, useState} from 'react';
import UserContext from "../Context/UserContext";

function Login() {
    const {setUser} = useContext(UserContext);

    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    function handleSubmit(e){
        e.preventDefault();
        setUser({username, password})
    }
  return (
    <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Enter your name:' onChange={(e) => setUsername(e.target.value)} />
        <input type="password" placeholder='Enter your password' onChange={(e) => setPassword(e.target.value)} />
        <input type="submit" value="Submit Form" />
    </form>
  )
}

export default Login