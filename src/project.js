import Todo from './todo.js';
import DisplayController from './displayController.js';
// id is an int in a project
function Project(title, id) {
    let todoList = [];
    this.getTitle = () => title;
    this.setTitle = (newTitle) => title = newTitle;
    this.addTodo = (todo) => todoList.push(todo);
    this.getTodoAt = (index) => todoList.at(index);
    this.numTodo = () => todoList.length;
    // id is an int
    this.getId = () => id;
    this.getDom = () => {
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
        projectDiv.addEventListener('click', (event) => {
            DisplayController.removeSelectedClass();
            event.stopPropagation()
            event.currentTarget.classList.add('selected');
            // console.log(this);
            DisplayController.displayTodoList(this);
            DisplayController.setCurrentlySelectedProject(this);
        });
        return projectDiv;
    };
};

export default Project;