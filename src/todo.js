import { format, isValid } from 'date-fns';
import DisplayController from './displayController.js';
import Project from './project.js';

function Todo(title, project) {
    let description = '';
    let dueDate = new Date('');
    let priority = 0; // 0 (default), 1, 2, 3
    let completed = false;
    this.getTitle = () => title;
    this.getDescription = () => description;
    this.getDueDate = () => dueDate;
    this.getPriority = () => priority;
    this.setTitle = (newTitle) => title = newTitle;
    this.setDescription = (desc) => description = desc;
    this.setDueDate = (year, month, day) => dueDate = new Date(year, month - 1, day);
    this.setPriority = (newPriority) => priority = newPriority;
    this.getStatus = () => completed;
    this.toggleStatus = () => completed = !completed;
    this.getDom = (id) => {
        const todoDiv = document.createElement('div');
        todoDiv.classList.add('todo');
        const stringId = `todo${id}`;
        todoDiv.id = stringId;

        const todoStatus = document.createElement('div');
        todoStatus.classList.add('todo-status');
        todoStatus.id = stringId;
        todoDiv.appendChild(todoStatus);
        const statusIcon = document.createElement('span');
        statusIcon.classList.add('material-symbols-outlined', 'radio');
        statusIcon.id = stringId;
        statusIcon.textContent = 'radio_button_unchecked';
        if (completed) statusIcon.classList.add('completed');
        todoStatus.appendChild(statusIcon);
        todoStatus.addEventListener('click', (event) => {
            this.toggleStatus();
            event.target.replaceChildren();
            const statusIcon = document.createElement('span');
            statusIcon.classList.add('material-symbols-outlined', 'radio');
            statusIcon.id = stringId;
            statusIcon.textContent = 'radio_button_unchecked';
            if (completed) statusIcon.classList.add('completed');
            event.target.appendChild(statusIcon);
        });
        const todoTitleDate = document.createElement('div');
        todoTitleDate.classList.add('todo-title-date-container');
        todoTitleDate.id = stringId;
        todoDiv.appendChild(todoTitleDate);
        const todoTitle = document.createElement('div');
        const todoDate = document.createElement('div');
        todoTitleDate.appendChild(todoTitle);
        todoTitleDate.appendChild(todoDate);
        todoTitle.classList.add('todo-title');
        todoTitle.id = stringId;
        todoTitle.textContent = title;
        todoDate.classList.add('todo-date');
        todoDate.id = stringId;
        if (isValid(dueDate)) todoDate.textContent = format(dueDate, 'yyyy-MM-dd');

        const todoPriority = document.createElement('div');
        todoPriority.classList.add('todo-priority');
        todoPriority.id = stringId;
        let priorityString = '';
        for (let i = priority; i > 0; i--) {
            priorityString += '!';
        }
        todoPriority.textContent = priorityString;
        todoDiv.appendChild(todoPriority);

        const todoDelete = document.createElement('div');
        todoDiv.appendChild(todoDelete);
        todoDelete.classList.add('todo-delete');
        todoDelete.id = stringId;
        const deleteIcon = document.createElement('span');
        deleteIcon.classList.add('material-symbols-outlined');
        deleteIcon.id = stringId;
        deleteIcon.textContent = 'delete';
        todoDelete.appendChild(deleteIcon);
        todoDelete.addEventListener('click', (event) => {
            project.removeTodo(this);
            DisplayController.displayTodoList(project);
        });

        const todoInfo = document.createElement('div');
        todoDiv.appendChild(todoInfo);
        todoInfo.classList.add('todo-info');
        todoInfo.id = stringId;
        const infoIcon = document.createElement('span');
        infoIcon.classList.add('material-symbols-outlined');
        infoIcon.id = stringId;
        infoIcon.textContent = 'info';
        todoInfo.addEventListener('click', (event) => {
            const infoName = document.querySelector('#name.actual-info');
            const infoDate = document.querySelector('#date.actual-info');
            const infoPriority = document.querySelector('#priority.actual-info');
            const infoDescription = document.querySelector('#description.actual-info');
            infoName.textContent = title;

            if (isValid(dueDate)) {
                infoDate.textContent = format(dueDate, 'yyyy-MM-dd');
            } else {
                infoDate.textContent = 'Unspecified';
            }
            infoPriority.textContent = priority;
            infoDescription.textContent = description;
            const infoModal = document.querySelector('#todo-info.modal');
            infoModal.classList.remove('closed');
        });
        todoInfo.appendChild(infoIcon);

        return todoDiv;
    };
}
export default Todo;
