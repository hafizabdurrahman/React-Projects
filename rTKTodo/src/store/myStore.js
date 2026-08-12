import { configureStore } from "@reduxjs/toolkit";
import todoReducer, { todoSlice } from "../feature/logic";


const myStore = configureStore({
    reducer: {
        myTodos : todoReducer
    }
});

export default myStore;