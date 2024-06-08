const taskInput = document.getElementById('taskInput');
const categorySelect = document.getElementById('categorySelect');
const taskList = document.getElementById('taskList');

taskInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter' && this.value.trim() !== '') {
        createTask(this.value.trim(), categorySelect.value);
        this.value = '';
        categorySelect.value = ''; // Reset category select after adding task
    }
});

function createTask(taskText, category) {
    const li = document.createElement('li');
    li.innerHTML = `
        <span class="${category ? category : ''}">${taskText}</span>
        <span class="delete-btn">&#x2715;</span>
    `;
    taskList.appendChild(li);

    li.querySelector('.delete-btn').addEventListener('click', function() {
        li.remove();
    });

    // Add strike-through when task is clicked
    li.addEventListener('click', function() {
        li.querySelector('span').classList.toggle('strike-through');
    });
}