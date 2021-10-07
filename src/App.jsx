import React from "react";

function App() {
  //new Date(year, month , day , hours , minutes ,seconds , milliseconds)
  let currDate = new Date();
  currDate = currDate.getHours();
  let greet = "";
  const cssStyle = {};

  if (currDate > 1 && currDate < 12) {
    greet = "Good Morning";
    cssStyle.color = "Green";
  } else if (currDate >= 12 && currDate < 16) {
    greet = "Good Afternoon";
    cssStyle.color = "Orange";
  } else if (currDate >= 17 && currDate < 6) {
    greet = "Good Evening";
    cssStyle.color = "Brown";
  } else {
    greet = "Good night";
    cssStyle.color = "Black";
  }
  return (
    <>
      <div className="design">
        <h1>
          Hello Abhishek , <span style={cssStyle}>{greet}</span>
        </h1>
      </div>
    </>
  );
}

export default App;
