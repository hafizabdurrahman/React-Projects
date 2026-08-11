import React, {useState, useContext, useEffect} from 'react';
import {Card, Button} from "./index";
import useTheme from '../contexts/ThemeContext';

function UI() {
    const {mode, setMode} = useTheme();
    useEffect(() => {
        document.documentElement.classList.toggle("dark", mode === "dark");
    }, [mode])
    function changeTheme(){
        setMode(prev => (prev === "light"? "dark" : "light"))
    }
  return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 transition-colors duration-300">
        <Card>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
            Welcome
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
            This is a simple card with a button, styled using Tailwind CSS and supporting dark mode.
            </p>
            <div className="flex justify-center">
              <Button onClick={changeTheme}>Change theme: {mode}</Button>
            </div>
          </Card>
      </div>
  )
}

export default UI