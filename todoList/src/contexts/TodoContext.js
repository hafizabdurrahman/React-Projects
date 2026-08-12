import { createContext, useContext } from "react";

const TodoContext = createContext({
    todos: [
        {
            id: Date.now(),
            name: "My Todo",
            completed: false
        },
    ],
    addTodo: (todo) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    computeComplete: (id) => {}
});

export const TodoProvider = TodoContext.Provider;


export default function useTodo(){
    return useContext(TodoContext);
}