const listContainer = document.querySelector('.item-container__items');
const form = document.querySelector('.item-container__list-content');

let tasks = [];

const storage = localStorage.getItem('listItem');
tasks = storage === null ? [] : JSON.parse(storage);

const task = {
  description: '',
  completed: false,
  index: 0,
};

const displayTask = () => {
  tasks.sort((a, b) => a.index - b.index);
  tasks.forEach((e) => {
    const li = document.createElement('li');
    const input = document.createElement('input');
    const span = document.createElement('input');
    const i = document.createElement('i');
    i.classList.add('icon', 'fa-solid', 'fa-ellipsis-vertical');

    input.type = 'checkbox';
    li.className = 'list-container__items--item';
    span.className = 'task-name';
    span.value = e.description;
    li.append(input, span, i);
    listContainer.appendChild(li);
  });
};

displayTask();

const updateIndex = () => {
  for (let k = 0; k > tasks.length; k += 1) {
    tasks[k].index = 1;
  }
};

const addTask = () => {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    task.description = form.elements[0].value;
    task.index = tasks.length;
    tasks.push(task);
    localStorage.setItem('listItem', JSON.stringify(tasks));
    form.elements.item.value = '';
    window.location.reload();
    
  });
};

const removeTask = (index) => {
  tasks.splice(index, 1);
  updateIndex();
  window.localStorage.setItem('listItem', JSON.stringify(tasks));
};
const removeBtn = document.querySelector('.item-container__remove-all');
const removecompletedTask = () => {
  for (let k = 0; k < tasks.length; k += 1) {
    if (tasks[k].completed === true) removeTask(k);
  }
  updateIndex();
};

removeBtn.addEventListener('click', removecompletedTask());

const updateTask = (index, value) => {
  task[index].destination = value;
  window.localStorage.setItem('listItem', JSON.stringify(tasks));
};

const status = (index, type) => {
  task[index].completed = type
};

export { addTask, removeTask, updateTask, status, removecompletedTask };
