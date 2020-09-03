import React from "react";
import "./App.css";
import Test from "./components/Test";
import AnotherTest from "./components/AnotherTest";

const App = () => {
  return (
    <div>
      <h1>Dummy Project</h1>
      <Test name="Raquel" />
      <Test name="Raquel" />
      <Test name="Raquel" />
      <AnotherTest quality="awesome" />
    </div>
  );
};

// function App() {
//   return (
//     <div>
//       <h1>Dummy Project</h1>
//     </div>
//   );
// }

export default App;
