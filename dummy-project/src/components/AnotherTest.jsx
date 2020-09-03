import React from "react";

const AnotherTest = ({ quality }) => {
  // deconstructing the props
  // same as const {quality} = props ---> another way of deconstructing
  return (
    <div>
      <button>I am {quality}!</button>
    </div>
  );
};

export default AnotherTest;

/*same as const AnotherTest = (props) => {
        return (
            <div>
              <button>I am {props.quality}!</button>
            </div>
  );*/
