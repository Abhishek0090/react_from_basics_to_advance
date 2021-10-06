import React from "react";
import ReactDOM from "react-dom";

const myname  = "Abhishek"

ReactDOM.render(
  <>
   <h1>my name is {myname}</h1>
   <p>my age is {10+10}</p>
   <p>my age is {Math.random()}</p>
  </>,
  document.getElementById("root")
);
