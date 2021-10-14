import React, { useState } from "react";

const App = () => {
  const [name, setName] = useState("hello");
  const [Mname, setMname] = useState("");
  const [Lname, setLname] = useState("");
  const [last, setLast] = useState("");

  const inputEvent = (e) => {
    setName(e.target.value);
  };

  const inputLast = (e) => {
    setLast(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault(); //to prevent default reload after submitting
    setMname(name);
    setLname(last)
  };

  return (
    <>
      <div>
        <form action="" onSubmit={onSubmit}>
          <div className="div_style">
            <h1 style={{ textAlign: "center" }}>Hello {Mname} {Lname}</h1>
            <input
              type="text"
              placeholder="Enter Your Name"
              onChange={inputEvent}
              value={name}
            />
            <input
              type="text"
              placeholder="Enter Your LastName"
              onChange={inputLast}
              value={last}
            />
            
            <button type="submit" className="btn">
              Submit 🤩
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default App;
