import React from "react";
import ReactDOM from "react-dom";

const myname  = "Abhishek"
const myrole = "Software developer"

ReactDOM.render(
  <>
   <h1>{`my name is ${myname} ${myrole}`}</h1>
   <p>my age is {10+10}</p>
  </>,
  document.getElementById("root")
);
