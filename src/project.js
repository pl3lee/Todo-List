import Todo from './todo.js';
import DisplayController from './displayController.js';
import ProjectList from './projectList.js';
function Project(title, id) {
    let todoList = [];
    this.title = title;
    this.getTitle = () => this.title;
    this.setTitle = (newTitle) => title = newTitle;
    this.addTodo = (todo) => todoList.push(todo);
    this.getTodoAt = (index) => todoList.at(index);
    this.numTodo = () => todoList.length;
    this.removeTodo = (todo) => {
        let index = todoList.indexOf(todo);
        if (index != -1) {
            todoList.splice(index, 1);
        }
    };
    this.clearTodo = () => this.todoList = [];
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
            ProjectList.removeProject(this);
        });
        projectDelete.appendChild(deleteIcon);
        projectDiv.appendChild(projectDelete);
        projectDiv.addEventListener('click', (event) => {
            DisplayController.removeSelectedClass();
            event.stopPropagation()
            event.currentTarget.classList.add('selected');
            DisplayController.displayTodoList(this);
            DisplayController.setCurrentlySelectedProject(this);
        });
        this.dom = projectDiv;
        return projectDiv;
    };
};

export default Project;