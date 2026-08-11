import React, {useState, useContext, useEffect} from 'react';
import {Card, Button, UI} from "./components";
import useTheme from './contexts/ThemeContext';
import {Provider} from './contexts/ThemeContext'

function App() {
  const [mode, setMode] = useState('light');
  return(
    <Provider value={{mode, setMode}}>
      <UI />
    </Provider>
  )
}

export default App