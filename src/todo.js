document.addEventListener("DOMContentLoaded", () => {
    const appDiv = document.getElementById('app');
    const input = document.getElementById('taskInput');
    const addButton = document.getElementById('addButton');
    const taskList = document.getElementById('taskList');
  
    let tasks = [];
  
    // Function to render tasks
    const renderTasks = () => {
      taskList.innerHTML = '';
      tasks.forEach((task, index) => {
        const listItem = document.createElement('li');
        listItem.className = 'task-item';
  
        const taskText = document.createElement('span');
        taskText.textContent = task.text;
        taskText.style.textDecoration = task.completed ? 'line-through' : 'none';
        taskText.style.color = task.completed ? '#aaa' : '#000';
        taskText.addEventListener('click', () => toggleCompletion(index));
  
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'delete-button';
        deleteButton.addEventListener('click', () => deleteTask(index));
  
        listItem.appendChild(taskText);
        listItem.appendChild(deleteButton);
        taskList.appendChild(listItem);
      });
    };
  
    // Function to add a task
    const addTask = () => {
      const taskText = input.value.trim();
      if (taskText) {
        tasks.push({ text: taskText, completed: false });
        input.value = '';
        renderTasks();
      }
    };
  
    // Function to toggle task completion
    const toggleCompletion = (index) => {
      tasks[index].completed = !tasks[index].completed;
      renderTasks();
    };
  
    // Function to delete a task
    const deleteTask = (index) => {
      tasks.splice(index, 1);
      renderTasks();
    };
  
    // Attach event listeners
    addButton.addEventListener('click', addTask);
  
    renderTasks(); // Initial render
  });