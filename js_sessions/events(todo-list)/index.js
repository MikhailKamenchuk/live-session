const listElem = document.querySelector('.list');
const tasks = [
    { text: 'Buy milk', done: false },
    { text: 'Pick up Tom from airport', done: false },
    { text: 'Visit party', done: false },
    { text: 'Visit doctor', done: true },
    { text: 'Buy meat', done: true },
];
const renderTasks = tasksList => {
    const tasksElems = tasksList
        .sort((a, b) => a.done - b.done)
        .map(({ text, done }) => {
            const listItemElem = document.createElement('li');
            listItemElem.classList.add('list__item');
            const checkbox = document.createElement('input');
            checkbox.setAttribute('type', 'checkbox');
            checkbox.checked = done;
            checkbox.classList.add('list__item-checkbox');
            if (done) {
                listItemElem.classList.add('list__item_done');
            }
            listItemElem.append(checkbox, text);
            return listItemElem;
        });
    listElem.append(...tasksElems);
};
renderTasks(tasks);

// How web works:
// 1. Get actual data
// 2. render

// Create:
// 1. add eventListener
// 2. create task obj
// 3. add to the task array
// 4. rerender

const addTask = e => {
    const inputEl = document.querySelector('.task-input');
    const task = {
        text: inputEl.nodeValue,
        done: false,
    }
    tasks.push(task);
}

const createBtn = document.querySelector('.create-task-btn');

createBtn.addEventListener('click', addTask)