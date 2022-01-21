// SELECTORS
let todoInput = document.querySelector(".todo-input");
let todoButton = document.querySelector(".todo-button");
let todoList = document.querySelector(".todo-list");
// EVENT LISTNER
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
//FUNCTION
function addTodo(event) {
  // prevent submit event
  event.preventDefault();

  if (todoInput.value) {
    //create div todo class
    let todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    //create li inside todo
    let newTodo = document.createElement("li");
    newTodo.textContent = todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);

    let completedButton = document.createElement("button");
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);

    let trashButton = document.createElement("button");
    trashButton.innerHTML = '<i class="fas fa-trash-alt"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    todoList.appendChild(todoDiv);
    todoInput.value = "";
  } else {
  }
}
function deleteCheck(e) {
  let item = e.target;
  if (item.classList[0] === "trash-btn") {
    let todo = item.parentElement;
    todo.classList.add("fall");
    todo.addEventListener("transitionend", function () {
      todo.remove();
    });
  }
  if (item.classList[0] === "complete-btn") {
    let item = e.target;
    let todo = item.parentElement;
    todo.classList.toggle("completed");
  }
}
