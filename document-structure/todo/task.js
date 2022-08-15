const tasksAdd = document.getElementById('tasks__add');
const taskInput = document.getElementById('task__input');
const taskList =  document.getElementById('tasks__list');

function addTask(){
  if (taskInput.value) {
    taskList.insertAdjacentHTML('beforeEnd', 
      `<div class="task"> 
        <div class="task__title">
        ${taskInput.value}
        </div>
          <a href="#" class="task__remove">&times;</a>
       </div>`);
    }
  taskInput.value = null;
}
taskInput.addEventListener('keyup', (ev) => {
  if (ev.key === 'Enter') {
    addTask;
  }
})
tasksAdd.addEventListener('click', (ev) => {
  ev.preventDefault();
  addTask();
})
taskList.addEventListener('click', (ev) => {
  ev.preventDefault();
  const deleteTaskButton = document.querySelectorAll('.task__remove');
  deleteTaskButton.forEach(element => {
    if (element === ev.target) {
      element.parentElement.remove();
    }
  });
}) 

