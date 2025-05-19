import React, { useState, useEffect } from "react";
import ItemsComponent from "./ItemsComponent";

function App() {
  const [inpText, setInpText] = useState("");
  const [todos, setTodos] = useState(() => {
    const todoList = localStorage.getItem("items");
    return todoList ? JSON.parse(todoList) : [];
  });

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(todos));
  }, [todos]);

  function clickHandler() {
    // console.log("click handler");
    if (inpText.trim()) {
      setTodos((prev) => [
        ...prev,
        { id: Math.random(), text: inpText, completed: false },
      ]);
      setInpText("");
    }
  }

  return (
    <>
      <h1>Todo List</h1>

      <input
        onChange={(e) => setInpText(e.target.value)}
        value={inpText}
        placeholder="Enter todos"
        className="border"
      />

      <button
        className="px-2 py-1 bg-gray-400 ml-4"
        onClick={() => clickHandler()}
      >
        Add
      </button>

      {todos.map((item) => {
        return (
          <div key={item.id}>
            <ItemsComponent task={item} todos={todos} setTodos={setTodos} />
          </div>
        );
      })}
    </>
  );
}

export default App;
