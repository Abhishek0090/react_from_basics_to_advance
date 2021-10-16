import React, { useState } from "react";

const App = () => {
  const [fullName, setFullName] = useState({
    fname : '',
    lname : ''
  });

  const inputEvent = (e) => {

    const value = e.target.value
    const name = e.target.name 
      setFullName((preValue)=>{
        // console.log(preValue)
        if(name === 'fName'){
            return{
                fname : value,
                lname : preValue.lname
            }
        }
        else if(name === 'lName'){
            return{
                fname : preValue.fname,
                lname : value
            }
        }
      })
  };


  const onSubmit = (e) => {
    e.preventDefault(); //to prevent default reload after submitting
  };

  return (
    <>
      <div>
        <form action="" onSubmit={onSubmit}>
          <div className="div_style">
            <h1 style={{ textAlign: "center" }}>Hello {fullName.fname} {fullName.lname}</h1>
            <input
              type="text"
              placeholder="Enter Your Name"
              name = "fName"
              onChange={inputEvent}
              value={fullName.fname}
            />
            <input
              type="text"
              placeholder="Enter Your LastName"
              name = "lName"
              onChange={inputEvent}
              value={fullName.lname}
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
