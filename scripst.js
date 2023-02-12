const tasks = [
    'Почистить зубы',
    'Позавтракать',
    'Поработать над проектом',
    'Погулять с Хито',
    'Приступить к работе'
];
const taskList = document.querySelector('.task__list');
const form = document.querySelector('.form');
const formInput = document.querySelector('.form__input');
const deleteTask = (evt) => {
    evt.currentTarget.closest('.task').remove();
};
const addTask = (evt) => {
    evt.preventDefault();
    taskList.prepend(createTask(formInput.value));
    form.reset();
};
/*const saveTaskSubmit = () => {
    
};*/
const createTask = (taskName) => {
    const taskTemplate = document.querySelector('#task__template').content;
    const taskElement = taskTemplate.cloneNode(true);
    const taskInput = taskElement.querySelector('.task__input');
    const editButton = taskElement.querySelector('.task__edit-button');
    const deleteButton = taskElement.querySelector('.task__delete-button');
    taskInput.value = taskName;
    deleteButton.addEventListener('click', deleteTask);
    editButton.addEventListener('click', () => {
        taskInput.toggleAttribute('disabled');
    });
    taskInput.addEventListener('keydown', (evt) => {
        if (evt.key === 'Enter') {
         taskInput.setAttribute('disabled', 'disabled');
        }
        console.log('кнопка нажата');
     });
    return taskElement;
};
const renderTask = (taskName) => {
    taskList.append(createTask(taskName));
};
tasks.forEach((item) => {
    renderTask(item);
});
form.addEventListener('submit', addTask);