import React from "react";
import {Todo, TodoAdder} from "./components";
import { Provider } from "react-redux";
import myStore from "./store/myStore"

function App() {

  return (
    <Provider store={myStore}>
      <div className="text-5xl">Todo using redux toolkit</div>
      <TodoAdder />
      <Todo />
    </Provider>
  )
}

export default App
