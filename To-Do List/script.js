const todoListEl = document.getElementById("todo-list");
const taskInput = document.getElementById("task-input");
const addBtn = document.getElementById("add-btn");

let todoList = [];

if (document.cookie.includes("todoList=")) {
  const cookieValue = document.cookie
    .split("; ")
    .find(row => row.startsWith("todoList="))
    .split("=")[1];

  todoList = JSON.parse(cookieValue);
}

function renderTodoList() {
  todoListEl.innerHTML = "";

  todoList.forEach((task, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <span class="task">${task}</span>
      <button class="edit-btn" data-index="${index}">Edit</button>
      <button class="delete-btn" data-index="${index}">Delete</button>
    `;
    todoListEl.appendChild(li);
  });
}

renderTodoList();

addBtn.addEventListener("click", () => {
  const task = taskInput.value.trim();

  if (task !== "") {
    todoList.push(task);
    const expirationDate = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toUTCString();
    document.cookie = `todoList=${JSON.stringify(todoList)};expires=${expirationDate}`;
    renderTodoList();
    taskInput.value = "";
  }
});

todoListEl.addEventListener("click", event => {
  if (event.target.classList.contains("delete-btn")) {
    const index = event.target.dataset.index;
    todoList.splice(index, 1);
    const expirationDate = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toUTCString();
    document.cookie = `todoList=${JSON.stringify(todoList)};expires=${expirationDate}`;
    renderTodoList();
  }
});

todoListEl.addEventListener("click", event => {
  if (event.target.classList.contains("edit-btn")) {
    const index = event.target.dataset.index;
    const task = prompt("Edit task:");
    if (task !== null && task !== "") {
      todoList[index] = task;
      const expirationDate = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toUTCString();
      document.cookie = `todoList=${JSON.stringify(todoList)};expires=${expirationDate}`;
      renderTodoList();
    }
  }
});
