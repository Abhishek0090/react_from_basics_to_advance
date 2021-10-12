import React, { useState } from "react";

const App = () => {
  var currTime = new Date().toLocaleTimeString();

  const [time, setTime] = useState(currTime);

  const onTime = () => {
    setTime(currTime);
  };
  return (
    <>
      <div className="div_style">
        <h1 className="heading_style">{time}</h1>
        <button href="/" className="btn" onClick={onTime}>
          Show time
        </button>
      </div>
    </>
  );
};

export default App;
