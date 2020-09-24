import React, { useReducer } from "react";
import "./App.css";
import ToDoList from "./ToDoList";

//getting this code from:
//https://www.youtube.com/watch?v=wcRawY6aJaw&t=154s

//the Reducer is a function that takes two parameters, "state" and "action"
//this function is being created outside of the component on purpose
const Reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return state + 1;
    //IMPORTANT: we don't want to mutate the state, which why we don't use "state++"; we want to create a different version of the state
    case "decrement":
      return state - 1;
    default:
      return state;
  }
};

const App = () => {
  const [count, dispatch] = useReducer(Reducer, 0);

  return (
    <div className="App">
      <div>count: {count}</div>
      <button onClick={() => dispatch({ type: "increment" })}>increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>decrement</button>
      <ToDoList />
    </div>
  );
};

export default App;

// useReducer hook is for storing state and is an alternative to the useState hook
