import React, { useState } from "react";

const App = () => {
  const [fullName, setFullName] = useState({
    fname : '',
    lname : '',
    email : '',
    number : ''
  });

  const inputEvent = (e) => {

    const {name , value} = e.target
      setFullName((preValue)=>{
        console.log(preValue)
        return {
          ...preValue,
          [name] : value
        }
      //   if(name === 'fName'){
      //       return{
      //           fname : value,
      //           lname : preValue.lname
      //       }
      //   }
      //   else if(name === 'lName'){
      //       return{
      //           fname : preValue.fname,
      //           lname : value
      //       }
      //   }
      //   else if(name === 'email'){
      //       return{
      //           fname : preValue.fname,
      //           lname : preValue.lname,
      //           email : value
      //       }
      //   }
      //   else if(name === 'number'){
      //       return{
      //           fname : preValue.fname,
      //           lname : preValue.lname,
      //           email : preValue.email,
      //           number : preValue.number
      //       }
        // }
      })
  };


  const onSubmit = (e) => {
    e.preventDefault(); //to prevent default reload after submitting
    prompt("Form submitted")
  };

  return (
    <>
      <div>
        <form action="" onSubmit={onSubmit}>
          <div className="div_style">
            <h1 style={{ textAlign: "center" }}>Hello {fullName.fname}<br/> {fullName.lname} <br/> {fullName.email} <br/> {fullName.number}</h1>
            <input
              type="text"
              placeholder="Enter Your Name"
              name = "fname"
              onChange={inputEvent}
              value={fullName.fname}
            />
            <input
              type="text"
              placeholder="Enter Your LastName"
              name = "lname"
              onChange={inputEvent}
              value={fullName.lname}
            />
            <input
              type="email"
              placeholder="Enter Your Email"
              name = "email"
              onChange={inputEvent}
              value={fullName.email}
            />
            <input
              type="number"
              placeholder="Enter Your Mobile"
              name = "number"
              onChange={inputEvent}
              value={fullName.number}
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
