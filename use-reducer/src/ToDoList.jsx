import React, { useReducer, useState } from "react";

//getting this code from:
//https://www.youtube.com/watch?v=wcRawY6aJaw&t=154s

//the Reducer is a function that takes two parameters, "state" and "action"
//this function is being created outside of the component on purpose

const Reducer = (state, action) => {
  switch (action.type) {
    case "add-todo":
      return {
        todos: [...state.todos, { text: action.text, completed: false }],
      };
    case "toggle-todo":
      return {
        todos: state.todos.map((t, idx) =>
          idx === action.idx ? { ...t, completed: !t.completed } : t
        ),
      }; //this iterates through the list of todos that we have and it's going to flip completed
    default:
      return state;
  }
};

const App = () => {
  const [{ todos }, dispatch] = useReducer(Reducer, { todos: [] });
  const [text, setText] = useState();
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault(); //you need this so the form won't refresh the whole page each time
          dispatch({ type: "add-todo", text });
          setText("");
        }}
      >
        <input value={text} onChange={(e) => setText(e.target.value)} />
      </form>
      {/* <pre>{JSON.stringify(todos, null, 2)}</pre> */}
      {todos.map((t, idx) => (
        <div
          key={t.text}
          onClick={() => dispatch({ type: "toggle-todo", idx })}
          style={{
            color: "purple",
            fontWeight: "bold",
            fontFamily: "arial",
            textDecoration: t.completed ? "line-through" : "",
            cursor: "pointer",
          }}
        >
          {t.text}
        </div>
      ))}
    </div>
  );
};

export default App;

// useReducer hook is for storing state and is an alternative to the useState hook
