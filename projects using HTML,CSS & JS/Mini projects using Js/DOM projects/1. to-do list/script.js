document.addEventListener("DOMContentLoaded", function () {
  const todoForm = document.querySelector(".form");
  const todoInput = document.querySelector("#inp-box");
  const addBtn = document.querySelector(".btn");
  const todoList = document.querySelector(".todos");

  let currentEditTask = null;
  let editMode = false;

  //-> form
  todoForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const todoText = todoInput.value.trim();

    if (todoText !== "") {
      if (editMode) {
        currentEditTask.previousElementSibling.textContent = todoInput.value;

        addBtn.innerText = "Add Todo";
        todoInput.value = null;
        todoInput.placeholder = "Enter Your Task";

        currentEditTask.parentElement.classList.remove("selected");
        editMode = false;
      } else {
        addTodo(todoText);
      }
    } else {
      alert("Enter the valid text");
    }
  });

  //-> 'delete' and 'edit' functionality

  todoList.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      //! delete button functionality
      if (e.target.className == "del") {
        if (confirm("Are you sure you want to delete this task?")) {
          e.target.parentElement.remove();
          todoInput.value = null;

          if (addBtn.innerText !== "Add Todo") {
            addBtn.innerText = "Add Todo";
            todoInput.placeholder = "Enter Your Task";
          }
        }
      }

      //! edit button  functionality
      else if (e.target.classList.contains("edit")) {
        editMode = true;
        addBtn.innerText = "Edit Todo";
        todoInput.placeholder = "Edit Selected Task";
        todoInput.value = e.target.previousElementSibling.textContent;

        todoInput.focus();

        //! for styling
        if (currentEditTask) {
          currentEditTask.parentElement.classList.remove("selected");
          currentEditTask = null;
        }

        e.target.parentElement.classList.add("selected");

        currentEditTask = e.target;
      }
    }
  });

  //-> 'add' todo items functionality
  function addTodo(text) {
    const todoItem = document.createElement("li");
    const span = document.createElement("span");
    const editBtn = document.createElement("button");
    const delBtn = document.createElement("button");

    span.innerText = text;
    editBtn.innerText = `✏️`;
    delBtn.innerText = `❌`;

    todoItem.classList.add("task-list");
    editBtn.classList.add("edit");
    delBtn.classList.add("del");

    todoList.appendChild(todoItem);
    todoItem.appendChild(span);
    todoItem.appendChild(editBtn);
    todoItem.appendChild(delBtn);

    todoInput.value = null;
  }
});
