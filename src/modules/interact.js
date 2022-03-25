import {
  status, removeTask, updateTask, removecompletedTask
} from './func.js';

const checkbox = document.querySelectorAll('input[type="checkbox"]');
const taskName = document.querySelectorAll('.task-name');
const deleteList = document.querySelectorAll('.item-container__remove-all');

const removeHighLight = () => {
  taskName.forEach((e) => {
    e.parentElement.classList.remove('list-highlight');
    e.nextElementSibling.classList.remove('icon-delete');
  });
};

const markTask = () => {
  for (let k = 0; k < checkbox.length; k += 1) {
    checkbox[k].addEventListener('change', () => {
      if (checkbox[k].checked) {
        checkbox[k].classList.add('input-after');
        checkbox[k].nextElementSibling.classList.add('checked');
        status(i, true);
      } else {
        checkbox[k].classList.remove('input-after')
        checkbox[k].nextElementSibling.classList.remove('checked');
        status(k, false);
      }
    });
  }
};

const selectAtask = () => {
  for (let k = 0; k < taskName.length; k += 1) {
    taskName[k].addEventListener('click', () => {
      removeHighLight();
      taskName[k].parentElement.classList.add('list-highlight');
      taskName[k].nextElementSibling.classList.add('icon-delete');

      deleteList[k].addEventListener('click', () => {
        removeTask(k);
        window.location.reload();
      });
      taskName[k].addEventListener('input', () => {
        updateTask(i, taskName[k].value);
      });
    });
  };
};



const clearCompletedTasks = () => {
  const clearButton = document.querySelector('.item-container__remove-all');
  clearButton.addEventListener('click', () => {
    removecompletedTask();
    window.location.reload();
  });
};

export { markTask, selectAtask, clearCompletedTasks };