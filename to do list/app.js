// Add a new task
document.getElementById('add-task').addEventListener('click', function() {
    const taskInput = document.getElementById('new-task');
    const taskText = taskInput.value.trim();

    if (taskText) {
        addTask(taskText);
        taskInput.value = '';
    }
});

// Add task to the list
function addTask(taskText) {
    const taskList = document.getElementById('task-list');
    const li = document.createElement('li');

    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;
    taskSpan.addEventListener('click', toggleComplete);

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', removeTask);

    li.appendChild(taskSpan);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
}

// Toggle task completion
function toggleComplete() {
    this.parentElement.classList.toggle('completed');
}

// Remove task
function removeTask() {
    const taskItem = this.parentElement;
    taskItem.remove();
}
