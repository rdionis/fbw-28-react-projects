import React from "react";
import "../App.css";
// import Background from "../img/img1.jpg";
import Poems from "./Poems";
import DancingVideos from "./DancingVideos";

const App = () => {
  return (
    <>
      <main className="main-container">
        <h1 className="main-title">Dancing words</h1>
        <div className="content">
          <Poems />
          <DancingVideos />
        </div>
      </main>
    </>
  );
};

export default App;
