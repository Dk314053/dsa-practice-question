import "./styles.css";
import React, { useState } from "react";
export default function App() {
  const [greet, setGreet] = useState("good evening");
  const arr = ["hello", "good morning", "good afternoon", "Good night"];
  const [value, setValue] = useState(0);

  const handleClick = () => {
    setGreet(arr[value]);
    setValue(value + 1);
    if (arr.length === value) {
      setValue(0);
    }
  };
  return (
    <div className="container">
      <h1 className="content">{greet}</h1>

      <button className="btn2" onClick={handleClick}>
        Click me{" "}
      </button>
    </div>
  );
}

// [
//   "create an array with multiple greetings",
//   "create a button and handle click on button ",
//   "show the next greeting message on h1"
// ]
