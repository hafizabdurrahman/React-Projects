import React, {useEffect, useState} from 'react'
import { Layout } from './components'
import { TodoProvider } from "./contexts/TodoContext"

function App() {
  const [todos, setTodos] = useState([]);

  function addTodo(todo){
    if (todo) {
      setTodos(prev => [{id: Date.now(), name: todo, completed: false}, ...prev])
    }
  }

  function updateTodo(id, todo){
    setTodos(prev => prev.map(prevTodo => {
      return prevTodo.id === id ? todo : prevTodo
    }))
  }

  function deleteTodo(id){
    setTodos(prev => prev.filter(prevTodo => prevTodo.id !== id))
  }

  function computeComplete(id){
    setTodos(prev => prev.map(prevTodo => (
      prevTodo.id === id ? {...prevTodo, completed: !prevTodo.complete} : prevTodo
    )))
  }
  
  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem("todos")); 
    if(savedTodos && savedTodos.length > 0){
      setTodos(savedTodos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  return (
    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, computeComplete}}>
      <Layout />
    </TodoProvider>
  )
}

export default App