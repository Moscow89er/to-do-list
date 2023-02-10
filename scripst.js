const tasks = [
    'Почистить зубы',
    'Позавтракать',
    'Поработать над проектом',
    'Погулять с Хито',
    'Приступить к работе'
];
const taskList = document.querySelector('.task__list');
const form = document.querySelector('.form');
const deleteTask = (evt) => {
    evt.currentTarget.closest('.task').remove();
};
const editTask = (evt) => {

};
const addTask = (evt) => {
    evt.preventDefault();
    const formInput = document.querySelector('.form__input');
    taskList.prepend(createTask(formInput.value));
    form.reset();
};
const createTask = (taskName) => {
    const taskTemplate = document.querySelector('#task__template').content;
    const taskElement = taskTemplate.cloneNode(true);
    const name = taskElement.querySelector('.task__name');
    const editButton = taskElement.querySelector('.task__edit-button');
    const deleteButton = taskElement.querySelector('.task__delete-button');

    console.log(taskName);
    name.value = taskName;
    deleteButton.addEventListener('click', deleteTask);

    
    return taskElement;
};
const renderTask = (taskName) => {
    taskList.append(createTask(taskName));
};
tasks.forEach((item) => {
    renderTask(item);
});
form.addEventListener('submit', addTask);