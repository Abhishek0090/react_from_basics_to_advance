import React from "react";
import ReactDom from "react-dom";
import cal from "./App";

import "./index.css";

ReactDom.render(
  <div className="design">
  <ul>
      <li>{cal.add(1,3)}</li>
      <li>{cal.sub(2,6)}</li>
      <li>{cal.mul(3,4)}</li>
      <li>{cal.div(2,4)}</li>
  </ul>
  </div>,
  document.getElementById("root")
);
