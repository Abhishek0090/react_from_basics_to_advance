import React from "react";
import ReactDom from "react-dom";

const name = "Abhishek Pal"
const date = new Date().toLocaleDateString();
const time = new Date().toLocaleTimeString();

ReactDom.render(
  <>
  <h1> Hello ,My name is {name}</h1>
  <h2>today Date is {date}</h2>
  <h3>today Date is {time}</h3>
  </>,
  document.getElementById('root')
);