const listContainer = document.querySelector('.item-container__items');
const form = document.querySelector('.item-container__list-content');

let tasks = [];

const storage = localStorage.getItem('listItem');
tasks = storage === null ? [] : JSON.parse(storage);

const task = {
  description: '',
  completed: false,
  index: null,
};

const displayTask = () => {
  // tasks.sort((a, b) => a.index - b.index);
  tasks.forEach((e) => {
    const li = document.createElement('li');
    const input = document.createElement('input');
    const span = document.createElement('input');
    const i = document.createElement('i');
    i.classList.add('icon', 'fa-solid', 'fa-ellipsis-vertical');

    input.type = 'checkbox';
    input.setAttribute('id', e.index);
    li.className = 'list-container__items--item';
    span.className = 'task-name';
    span.value = e.description;
    li.append(input, span, i);
    listContainer.appendChild(li);
  });
};

displayTask();

const updateIndex = () => {
  for (let k = 0; k < tasks.length; k += 1) {
    tasks[k].index = k +1;
  }
};

const addTask = () => {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const task_ = {
      description: form.elements[0].value,
      completed: false,
      index: tasks.length + 1,
    };
    // task.description = form.elements[0].value;
    // task.index = tasks.length + 1;
    tasks.push(task_);
    localStorage.setItem('listItem', JSON.stringify(tasks));
    form.elements.item.value = '';
    window.location.reload();
    form.focus();
  });
};

const removeTask = (index) => {
  tasks.splice(index, 1);
  updateIndex();
  window.localStorage.setItem('listItem', JSON.stringify(tasks));
};

const removeBtn = document.querySelector('.item-container__remove-all');
const removecompletedTask = () => {
  const newList = tasks.filter((element) => element.completed === false);
  tasks = newList;
  updateIndex();
  window.localStorage.setItem('listItem', JSON.stringify(tasks));
};

removeBtn.addEventListener('click', removecompletedTask());

const updateTask = (index, value) => {
  tasks[index].description = value;
  window.localStorage.setItem('listItem', JSON.stringify(tasks));
};

const status = (index, type) => {
  tasks[index].completed = type;
  window.localStorage.setItem('listItem', JSON.stringify(tasks));
};

export {
  addTask, removeTask, updateTask, status, removecompletedTask,
};
