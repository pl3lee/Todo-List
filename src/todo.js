import {format, isValid} from 'date-fns';
import DisplayController from './displayController.js';
import Project from './project.js';
const Todo = (title, project) => {
    let description = '';
    let dueDate = new Date('');
    let priority = 0; //0 (default), 1, 2, 3
    let completed = false;
    const getTitle = () => title;
    const getDescription = () => description;
    const getDueDate = () => dueDate;
    const getPriority = () => priority;
    const setTitle = (newTitle) => title = newTitle;
    const setDescription = (desc) => description = desc;
    const setDueDate = (year, month, day) => dueDate = new Date(year, month - 1, day);
    const setPriority = (newPriority) => priority = newPriority;
    const getStatus = () => completed;
    const toggleStatus = () => completed = !completed;
    // id is an integer
    const getDom = (id) => {
        let todoDiv = document.createElement('div');
        todoDiv.classList.add('todo');
        let stringId = "todo" + id;
        todoDiv.id = stringId;

        let todoStatus = document.createElement('div');
        todoStatus.classList.add('todo-status');
        todoStatus.id = stringId;
        todoDiv.appendChild(todoStatus);
        let statusIcon = document.createElement('span');
        statusIcon.classList.add("material-symbols-outlined", "radio");
        statusIcon.id = stringId;
        statusIcon.textContent = 'radio_button_unchecked';
        if (completed) statusIcon.classList.add('completed');
        todoStatus.appendChild(statusIcon);
        todoStatus.addEventListener('click', (event) => {
            toggleStatus();
            // console.log(statusIcon);
            event.target.replaceChildren();
            let statusIcon = document.createElement('span');
            statusIcon.classList.add("material-symbols-outlined", "radio");
            statusIcon.id = stringId;
            statusIcon.textContent = 'radio_button_unchecked';
            if (completed) statusIcon.classList.add('completed');
            event.target.appendChild(statusIcon);
            // DisplayController.displayTodoList(project);
        });
        let todoTitleDate = document.createElement('div');
        todoTitleDate.classList.add('todo-title-date-container');
        todoTitleDate.id = stringId;
        todoDiv.appendChild(todoTitleDate);
        let todoTitle = document.createElement('div');
        let todoDate = document.createElement('div');
        todoTitleDate.appendChild(todoTitle);
        todoTitleDate.appendChild(todoDate);
        todoTitle.classList.add('todo-title');
        todoTitle.id = stringId;
        todoTitle.textContent = title;
        todoDate.classList.add('todo-date');
        todoDate.id = stringId;
        if (isValid(dueDate)) todoDate.textContent = format(dueDate, 'yyyy-MM-dd');
        

        let todoPriority = document.createElement('div');
        todoPriority.classList.add('todo-priority');
        todoPriority.id = stringId;
        let priorityString = '';
        for (let i = priority; i > 0; i--) {
            priorityString = priorityString + '!';
        }
        todoPriority.textContent = priorityString;
        todoDiv.appendChild(todoPriority);

        let todoInfo = document.createElement('div');
        todoDiv.appendChild(todoInfo);
        todoInfo.classList.add('todo-info');
        todoInfo.id = stringId;
        let infoIcon = document.createElement('span');
        infoIcon.classList.add("material-symbols-outlined");
        infoIcon.id = stringId;
        infoIcon.textContent = 'info';
        todoInfo.appendChild(infoIcon);

        return todoDiv;
    };
    return {
        getTitle,
        getDescription,
        getDueDate,
        getPriority,
        setTitle,
        setDescription,
        setDueDate,
        setPriority,
        getStatus,
        toggleStatus,
        getDom,
    };
};
export default Todo;