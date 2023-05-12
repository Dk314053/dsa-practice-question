import React, { useCallback } from "react";
import { useState } from "react";

import Todo from "./Todo";
export default function UseCallback() {
  const [count, setCount] = useState(0);
  const [todos, setTodo] = useState([]);

  const increament = () => {
    setCount(count + 1);
  };
  const addtodo = useCallback(() => {
    setTodo((prev) => [...prev, `new entry`]);
  }, [todos]);

  // const addtodo=()=>{
  // setTodo((prev)=>[...prev,`new entry`])
  // }

  // before call back we use above method then if we click on
  // add button then child component todo were rerender but after using
  // that problem was solved

  return (
    <div className="App1">
      <Todo todos={todos} addtodo={addtodo} />
      <div className="count">
        Count:{count}
        <br />
        <br />
        <button onClick={increament}>Add </button> <br />
      </div>
    </div>
  );
}
