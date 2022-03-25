import './style.css';
import { addTask } from './modules/func.js';
import { clearCompletedTasks, markTask, selectAtask } from './modules/interact.js';

const form = document.querySelector('.item-container__list-content');


const checkbox = document.querySelectorAll('input[type=checkbox]');

const checkMark = (input) => {
  input.addEventListener('change', () => {
    if (input.checked) {
      input.nextElementSibling.classList.add('checked');
    } else input.nextElementSibling.classList.remove('checked');
  });
};

checkbox.forEach((e) => checkMark(e));


addTask();

selectAtask();

markTask();

clearCompletedTasks();