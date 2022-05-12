import 'date-fns';
const Todo = (title) => {
    let description = '';
    let dueDate = new Date;
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
    // id is a string, format: todo<num>
    const getDom = (id) => {
        let todoDiv = document.createElement('div');
        todoDiv.classList.add('todo');
        todoDiv.id = id;

        let todoStatus = document.createElement('div');
        todoStatus.classList.add('todo-status');
        todoStatus.id = id;
        todoDiv.appendChild(todoStatus);
        let statusIcon = document.createElement('span');
        statusIcon.classList.add("material-symbols-outlined", "completed", "radio");
        statusIcon.id = id;
        statusIcon.textContent = 'radio_button_unchecked';
        todoStatus.appendChild(statusIcon);
        todoStatus.addEventListener('click', (event) => {
            //todo
        });
        let todoTitleDate = document.createElement('div');
        todoTitleDate.classList.add('todo-title-date-container');
        todoTitleDate.id = id;
        todoDiv.appendChild(todoTitleDate);
        let todoTitle = document.createElement('div');
        let todoDate = document.createElement('div');
        todoTitleDate.appendChild(todoTitle);
        todoTitleDate.appendChild(todoDate);
        todoTitle.classList.add('todo-title');
        todoTitle.id = id;
        todoTitle.textContent = title;
        todoDate.classList.add('todo-date');
        todoDate.id = id;
        todoDate.textContent = format(dueDate, 'MM/dd/yyyy');

        let todoPriority = document.createElement('div');
        todoPriority.classList.add('todo-priority');
        todoPriority.id = id;
        let priorityString = '';
        for (let i = priority; i > 0; i--) {
            priorityString = priorityString + '!';
        }
        todoPriority.textContent = priorityString;
        todoDiv.appendChild(todoPriority);

        let todoInfo = document.createElement('div');
        todoDiv.appendChild(todoInfo);
        todoInfo.classList.add('todo-info');
        todoInfo.id = id;
        let infoIcon = document.createElement('span');
        infoIcon.classList.add("material-symbols-outlined");
        infoIcon.id = id;
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