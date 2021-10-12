import React, { useState } from "react";


const App = ()=>{
    var currTime = new Date().toLocaleTimeString()
    const [time, setTime] = useState(currTime)
    setInterval(() => {
     setTime(currTime)
    }, 1000);

  return (
    <>
     <div className="div_style">
     <h1 className="heading_style" style={{fontSize:"5rem"}}>{time}</h1>
     </div>
    </>
  );
};

export default App;
