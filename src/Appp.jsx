import { React, useState } from "react";
import ListItem from "./ListItem";

const Appp = () => {
  const [inputList, setInputList] = useState("");

  const [items, setItems] = useState([]);

  const itemEvent = (e) => {
    setInputList(e.target.value);
  };
  const addItem = () => {
    setItems((preValue=>{
        return [...preValue,inputList]
    }));
    setInputList("")
  };
  const deleteItem = (id)=>{
      setItems((preValue)=>{
          return preValue.filter((arr,index)=>{
               return index!== id; 
          })
      })
  }

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>TODO List</h1>
          <br />

          <div className="trial_div">
            <input
              type="text"
              name="name"
              placeholder="Add a item"
              onChange={itemEvent}
              value={inputList}
            />
            <button className="btn" onClick={addItem}>
              +
            </button>
          </div>
          <ul>
            {items.map((val,index) => {
             return <ListItem key={index} id={index} item = {val} deleteItem={deleteItem}/>
            })}
            
          </ul>
        </div>
      </div>
    </>
  );
};

export default Appp;
