import { renderList } from './render.js';
import { tasks } from './storage.js';

const listElem = document.querySelector('.list');
const inputElem = document.querySelector('.task-input');

export const updateTask = (event) => {
  const checkedEl = event.target;

  if (checkedEl.tagName !== 'INPUT') {
    return
  };

  const taskById = tasks.find(elem => elem.id === +checkedEl.dataset.id);
  taskById.done = !taskById.done;

  taskById.done
    ? taskById.doneDate = new Date()
    : taskById.doneDate = null;


  renderList(tasks);
};

export const createTask = () => {
  if (inputElem.value == '') {
    return;
  };

  tasks.push({
    id: tasks.length + 1,
    text: inputElem.value,
    done: false,
    createDate: new Date(),
    doneDate: null,
  });

  inputElem.value = '';
  renderList(tasks);
};
