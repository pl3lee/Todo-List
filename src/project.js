import Todo from './todo.js';
import DisplayController from './displayController.js';
// id is an int in a project
const Project = (title, id) => {
    let todoList = [];
    const getTitle = () => title;
    const setTitle = (newTitle) => title = newTitle;
    const addTodo = (todo) => todoList.push(todo);
    const getTodoAt = (index) => todoList.at(index);
    const numTodo = () => todoList.length;
    // id is an int
    const getId = () => id;
    const getDom = () => {
        let stringId = "project" + id;
        let projectDiv = document.createElement('div');
        projectDiv.classList.add("project");
        projectDiv.id = stringId;
        let projectName = document.createElement('div');
        projectName.classList.add('project-name');
        projectName.id = stringId;
        projectName.textContent = title;
        projectDiv.appendChild(projectName);
        let projectDelete = document.createElement('div');
        projectDelete.classList.add('project-delete');
        projectDelete.id = stringId;
        let deleteIcon = document.createElement('span');
        deleteIcon.classList.add('material-symbols-outlined');
        deleteIcon.textContent = 'delete';
        deleteIcon.id = stringId;
        deleteIcon.addEventListener('click', (event) => {
            DisplayController.deleteProject(event.currentTarget.id);
        });
        projectDelete.appendChild(deleteIcon);
        projectDiv.appendChild(projectDelete);
        return projectDiv;
    };
    return {
        title,
        id,
        getId,
        getTitle,
        setTitle,
        addTodo,
        getTodoAt,
        getDom,
        numTodo,
    };
};

export default Project;