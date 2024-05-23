import React, { Fragment } from "react";
import  "./JsxComponent.css";

const JsxComponent = () => {
  // let a = 20, b = 30;
  return (
    <Fragment>
      {/* <h2>This is JsxComponent</h2>
        <h2>Addition of two number: {a+b}</h2>    
        <h3>{a>50 ? "a is greater than 50":"a is less than 50"}</h3> */}
        <p class="text">Click Here To Start Learning</p>
      <p class="start"><button>START</button></p>
    </Fragment>
  );
};
export default JsxComponent;
