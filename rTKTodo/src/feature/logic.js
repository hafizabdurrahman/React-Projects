import { createSlice, nanoid } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    name: 'myTodo',
    initialState: {
        tasks: [{
            id: nanoid(),
            name: "Here is my todo",
        }]
    },
    reducers: {
        addTodo: function(s, a) {
            const task = {
                id: nanoid(),
                name: a.payload.text
            };
            s.tasks.push(task);
        },
        removeTodo: function(s, a) {
            s.tasks = s.tasks.filter(task => task.id !== a.payload);
        },
        updateTodo: function(s, a) {
            const task = s.tasks.find(t => t.id === a.payload.ref);
            if (task) task.name = a.payload.text;
        }
    }
});

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;

export default todoSlice.reducer;