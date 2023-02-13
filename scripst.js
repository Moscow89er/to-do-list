const tasks = [
    'В течении недели взять в работу 10ть карточек 20+',
    'Задача №550713, не отображаются комментарии в CRM (передал в работу в Гелиос',
    'Задача №557098, не отображаются комментарии. Отправить в работу',
    'Задача №552694, не отображаются комментарии. Передать в работу контакты Игоря Владимировича на бухгалтерское сопровождение',
    'Провести ревизию счетов и КЭП, которые должны открыться',
    'Позвонить по базе "Best Agents"',
    'Закрыть задачи в Селлер',
    'Разобраться с GitHub',
    'Разобраться с неправильным отображением странички на iPhone',
    'Добавить возможность переносить задачи в статус выполненных'
];
const taskList = document.querySelector('.task__list');
const form = document.querySelector('.form');
const deleteTask = (evt) => {
    evt.currentTarget.closest('.task').remove();
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
    });
    return taskElement;
};
const renderTask = (taskName) => {
    taskList.append(createTask(taskName));
};
tasks.forEach((item) => {
    renderTask(item);
});
form.addEventListener('reset', () => {
    setTimeout(() => {
      toggleButtonState();
}, 0);
});
form.addEventListener('submit', addTask);