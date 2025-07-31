<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Task Tracker</title>
  <style>
  body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background: #f2f4f8;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding: 40px;
  }

  .task-tracker {
    background: #ffffff;
    border: 2px solid #4a90e2;
    border-radius: 12px;
    padding: 20px;
    width: 420px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }

  h3 {
    color: #4a90e2;
    margin-bottom: 15px;
    text-align: center;
  }

  input[type="text"] {
    width: 70%;
    padding: 10px;
    font-size: 15px;
    border: 2px solid #cfd8dc;
    border-radius: 6px;
    outline: none;
  }

  input[type="text"]:focus {
    border-color: #4a90e2;
  }

  .add-btn {
    background-color: #4a90e2;
    color: white;
    border: none;
    padding: 10px 15px;
    font-size: 18px;
    cursor: pointer;
    border-radius: 6px;
    transition: background 0.3s;
  }

  .add-btn:hover {
    background-color: #357ab8;
  }

  .task {
    display: flex;
    align-items: center;
    background: #e3f2fd;
    border-radius: 8px;
    padding: 8px 12px;
    margin-top: 10px;
    transition: background 0.3s;
  }

  .task.completed {
    background-color: #dcedc8;
  }

  .task input[type="checkbox"] {
    margin-right: 10px;
    transform: scale(1.3);
    cursor: pointer;
  }

  .task span {
    flex-grow: 1;
    font-size: 16px;
  }

  .task.completed span {
    text-decoration: line-through;
    color: #607d8b;
  }

  .delete-btn {
    cursor: pointer;
    margin-left: 10px;
    font-size: 18px;
    color: #e53935;
    transition: transform 0.2s;
  }

  .delete-btn:hover {
    transform: scale(1.2);
  }
</style>

</head>
<body>

<div class="task-tracker">
  <h3>Task Tracker</h3>
  <input id="taskInput" type="text" placeholder="Start writing and press enter to create task">
  <button class="add-btn" onclick="addTask()">↵</button>
  <div id="taskList"></div>
</div>

<script src="script.js"></script>
</body>
</html>




