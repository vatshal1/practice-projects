import React from "react";

export default function ItemsComponent({ task, todos, setTodos }) {
  function changeHandler(e, id) {
    // console.log("change handler", e.target.checked);
    const updatedTodos = todos.map((todo) => {
      if (id === todo.id) {
        return { ...todo, completed: e.target.checked };
      }
      return todo;
    });

    setTodos(updatedTodos);
  }

  function deleteHandler(index) {
    // console.log("delete handler", index);

    const updateTodos = todos.filter((todo) => todo.id !== index);

    setTodos(updateTodos);
    console.log(updateTodos);
  }

  return (
    <>
      <input
        type="checkbox"
        id={task.id}
        onChange={(e) => changeHandler(e, task.id)}
        checked={task.completed}
      />

      <label
        className={`${task.completed ? "line-through" : "no-underline"} ml-1`}
        htmlFor={task.id}
      >
        {task.text}
      </label>

      <button
        className="px-2 py-1 bg-gray-400 ml-4 rounded-sm cursor-pointer"
        onClick={() => deleteHandler(task.id)}
      >
        delete
      </button>
    </>
  );
}
