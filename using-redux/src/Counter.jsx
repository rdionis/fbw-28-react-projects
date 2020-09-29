import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./Actions";

const Counter = () => {
  const count = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch(increment(2))}>Increment</button>
      <button onClick={() => dispatch(decrement(2))}>Decrement</button>
    </>
  );
};

export default Counter;
