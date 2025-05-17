import React, { useState } from "react";

function App() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);
  // const [check, setCheck] = useState(false);

  function clickHandler() {
    console.log("click handler");
    if (text.trim()) {
      setTodos((prev) => [...prev, text]);
      setText("");
    }
  }

  function deleteHandler(index) {
    console.log("delete", index);

    const updateTodos = [...todos];
    updateTodos.splice(index, 1);

    setTodos(updateTodos);
    console.log(updateTodos);
  }

  // function changeHandler(e, index) {
  //   console.log(e.target.checked, index);
  //   e.target.checked ? setCheck(true) : setCheck(false);
  // }

  return (
    <>
      <h1>Todo List</h1>

      <input
        onChange={(e) => setText(e.target.value)}
        value={text}
        placeholder="Enter todos"
        className="border"
      />

      <button
        className="px-2 py-1 bg-gray-400 ml-4"
        onClick={() => clickHandler()}
      >
        Add
      </button>

      {todos.map((task, i) => {
        return (
          <div key={i}>
            <input type="checkbox" id={i} />

            <label htmlFor={i}>{task}</label>

            <button
              className="px-2 py-1 bg-gray-400 ml-4"
              onClick={() => deleteHandler(i)}
            >
              delete
            </button>
          </div>
        );
      })}
    </>
  );
}

export default App;
