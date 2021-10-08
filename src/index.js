import React from "react";
import ReactDom from "react-dom";
import youtuber, {myname , myName} from "./App";
import * as Abhi from "./App";
import "./index.css";


ReactDom.render(<><li>{Abhi.myName()}</li> <li>{myName()}</li> <h1>{myname}</h1></>, document.getElementById("root"));
