import { memo } from "react";

const Todo = ({ addtodo, todos }) => {
  console.log("child render");
  return (
    <>
      <h1> My Todo </h1>
      {todos.map((todo, index) => {
        return <p key={index}>{todo + index} </p>;
      })}
      <button onClick={addtodo}> Add Todo </button> <br />
      <br />
    </>
  );
};
export default memo(Todo);
