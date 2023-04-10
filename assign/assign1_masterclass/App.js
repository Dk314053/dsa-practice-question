import "./styles.css";
import React, { useState } from "react";
export default function App() {
  const [update, setUpdate] = useState("");
  const value = [];
  for (let i = 1; i <= 10; i++) {
    value.push(i * update);
  }

  const handleClick = () => {
    console.log(value);
    setUpdate(Math.floor(Math.random() * 100));
  };
  return (
    <div className="main">
      <ul className="unorder">
        {value.map((ele) => {
          return <li className="list1">{ele}</li>;
        })}
      </ul>
      <br />
      <button className="btn" onClick={handleClick}>
        Click
      </button>
    </div>
  );
}

// [ "create state ,store number , Generate table ",
// "cerate a button , update state with random value,
// update table" ],
