import React, { useState } from "react";


const App = ()=>{
   
    const [name, setName] = useState("hello")
    const [Mname, setMname] = useState("")

    const inputEvent = (e)=>{
        setName(e.target.value)
    }

    const onSubmit = ()=>{
        setMname(name)
    }

  return (
    <>
    <div className="div_style">
    <h1>{Mname}</h1>
    <input type="text" name="name" id="name" placeholder="Enter Your Name" onChange={inputEvent} value={name} />
    <button className="btn" onClick={onSubmit}>Submit 🤩</button>
    </div>
    </>
  );
};

export default App;
