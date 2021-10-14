import React, { useState } from "react";


const App = ()=>{
    let color = "red"
    const [bg, setBg] = useState(color)
        const [name, setName] = useState("click  me 😏")
    
    const bgChange =()=>{
        let newColor = "blue";
        setBg(newColor)
        setName("HAckurr 😍😍")
    }

    const bgdouble = ()=>{
        let doub = "pink"
        setBg(doub)
        setName('Bruhh 😎😋😋')
    }
  return (
    <>
     <div className="div_style" style={{backgroundColor : bg}}>
     <button onClick={bgChange} className="btn" onDoubleClick={bgdouble}>{name}</button>
     </div>
    </>
  );
};

export default App;
