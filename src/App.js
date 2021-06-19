import React, { useState } from "react";
import "./index.css";
import ToDoList from "./ToDoList";

function App() {
  const [inputList, setInputList] = useState("");
  const [items, setItems] = useState([]);

  const itemEvent = (e) => {
    setInputList(e.target.value);
  };

  // Here we array of element to add new array
  const listOfItem = () => {
    setItems((olditems) => {
      return [...olditems, inputList];
    });
    setInputList("");
  };

  // Delete the array on element with the index number
  const deleteItems = (id) => {
    setItems((olditems) => {
      debugger;
      return olditems.filter((arrElem, index) => {
        return index !== id;
      });
    });
  };

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>ToDo List</h1>
          <br />
          <input
            type="text"
            placeholder="Add a List"
            value={inputList}
            onChange={itemEvent}
          />
          <button onClick={listOfItem}>+</button>
          <ol>
            {items.map((itemval, index) => {
              return (
                <ToDoList
                  key={index}
                  id={index}
                  text={itemval}
                  onSelect={deleteItems}
                />
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
}

export default App;
