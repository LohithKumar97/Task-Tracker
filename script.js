let tasks = [];

function addTask() {
  const input = document.getElementById("taskInput");
  const text = input.value.trim();
  if (text !== "") {
    tasks.push({ description: text, completed: false });
    input.value = "";
    renderTasks();
  }
}

function toggleTask(index) {
  tasks[index].completed = !tasks[index].completed;
  renderTasks();
}

function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}

function renderTasks() {
  const list = document.getElementById("taskList");
  list.innerHTML = "";

  // Separate pending and completed tasks
  const pending = tasks.filter(task => !task.completed);
  const completed = tasks.filter(task => task.completed);

  const allTasks = [...pending, ...completed];

  allTasks.forEach((task, index) => {
    const div = document.createElement("div");
    div.className = "task" + (task.completed ? " completed" : "");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.completed;
    checkbox.onchange = () => toggleTask(tasks.indexOf(task));

    const span = document.createElement("span");
    span.textContent = task.description;

    const del = document.createElement("span");
    del.textContent = "🗑️";
    del.className = "delete-btn";
    del.onclick = () => deleteTask(tasks.indexOf(task));

    div.appendChild(checkbox);
    div.appendChild(span);
    div.appendChild(del);

    list.appendChild(div);
  });
}

// Optional: Allow Enter key to add task
document.getElementById("taskInput").addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    addTask();
  }
});
