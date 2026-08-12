import React from 'react'
import { TodoForm, TodoItem } from "./index"
import useTodo from "../contexts/TodoContext"
function Layout() {
    const {addTodo, todos} = useTodo();
    const [todo, setTodo] = React.useState("");
    function handleSubmit(e){
        e.preventDefault();
        addTodo(todo)
    }
  return (
    <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
            <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
            <div className="mb-4">
                <TodoForm onSubmit={handleSubmit} todo={todo} onChange={(e) => setTodo(e.target.value)}/> 
            </div>
            <div className="flex flex-wrap gap-y-3">
                {
                    todos.map(todo => <TodoItem key={todo.id} todo={todo}/>)
                }
            </div>
        </div>
    </div>
  )
}

export default Layout