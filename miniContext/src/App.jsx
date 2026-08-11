import { useState } from 'react'
import Login from "./components/Login";
import Profile from "./components/Profile";
import UserContextP from './Context/UserContextProvider';

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextP>
      <h1>Hello World</h1>
      <Login />
      <Profile />
    </UserContextP>
  )
}

export default App
