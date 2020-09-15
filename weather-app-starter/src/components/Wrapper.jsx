import React from "react";

const Wrapper = (props) => {
  return <div className="wrapper">{props.children}</div>;
  //this component will contain all the components that get passed into it
};

export default Wrapper;
