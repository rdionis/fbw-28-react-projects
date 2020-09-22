import React from "react";
import ReactDOM from "react-dom";
import Game from "./components/Game";
import "./index.css";

const index = () => {
  return (
    <div>
      <Game />
    </div>
  );
};

export default index;

// ========================================

ReactDOM.render(<Game />, document.getElementById("root"));
