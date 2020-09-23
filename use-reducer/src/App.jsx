import React, { useReducer } from "react";

//the Reducer is a function that takes two parameters, "state" and "action"
//this function is being created outside of the component on purpose
const Reducer = (state, action) => {
  switch(action.type){
    case "increment"
  }
};

const App = () => {
  const [count, dispatch] = useReducer(reducer, 0);
  return (
    <div className="App">
      <div>count: {count}</div>
      <button onClick={() => dispatch({ type: "increment" })}>increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>decrement</button>
    </div>
  );
};

export default App;

// useReducer hook is for storing state and is an alternative to the useState hook
