import React from "react";
import ReactDom from "react-dom";
import './index.css';

const name = "Abhishek Pal"

const img = "https://picsum.photos/200/300";
const img2 = "https://picsum.photos/250/300";
const img3 = "https://picsum.photos/300/300";
const link = "https://gooogle.com"

ReactDom.render(
  <>
  <div className="container">
  <h1 className="heading"> Hello ,My name is {name}</h1>
  <img src={img} alt="img" />
  <img src={img2} alt="img" />
  <a href={link} target="_blank">
    <img src={img3} alt="random"/>
  </a>
  </div>
  </>,
  document.getElementById('root')
);