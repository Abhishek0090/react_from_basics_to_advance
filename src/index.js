import React from "react";
import ReactDom from "react-dom";

const name = "Abhishek Pal"
const date = new Date().toLocaleDateString();
const time = new Date().toLocaleTimeString();
const img = "https://picsum.photos/300/3 00";
const link = "https://gooogle.com"

ReactDom.render(
  <>
  <h1 contentEditable="true" > Hello ,My name is {name}</h1>
  <img src={img} alt="img" />
  <a href={link} target="_blank">
    <img src={img} alt="random"/>
  </a>
  </>,
  document.getElementById('root')
);