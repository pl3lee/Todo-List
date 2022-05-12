import Project from './project.js';
import ProjectList from './projectList.js';
import Todo from './todo.js'
import {format} from 'date-fns';
const DisplayController = (() => {
    let projectCount = 0;
    let currentlySelectedProject = 0;
    let projectList = document.querySelector('.project-list');
    let addProjectBtn = document.querySelector('#add-project.button');
    let todoList = document.querySelector('.todo-list');
    let addProjectDoneBtn = document.querySelector('#add-project.modal-footer > #done.button');
    let addProjectCancelBtn = document.querySelector('#add-project.modal-footer > #cancel.button');
    let addProjectModal = document.querySelector('#add-project.modal');
    let projectNameInput = document.querySelector('input#project-name');
    let addTodoBtn = document.querySelector('#add-todo.button');
    let addTodoDoneBtn = document.querySelector('#add-todo.modal-footer > #done.button');
    let addTodoCancelBtn = document.querySelector('#add-todo.modal-footer > #cancel.button');
    let addTodoModal = document.querySelector('#add-todo.modal');
    let todoNameInput = document.querySelector('input#todo-name');
    let todoDateInput = document.querySelector('input#todo-date');
    let todoPriorityInput = document.querySelector('select#todo-priority');
    const setCurrentlySelectedProject = (project) => currentlySelectedProject = project;
    const setupDefaultEventListeners = () => {
        addProjectBtn.addEventListener('click', (event) => {
            addProjectModal.classList.remove('closed');
        });
        addProjectCancelBtn.addEventListener('click', (event) => {
            projectNameInput.value = '';
            addProjectModal.classList.add('closed');
        });
        addProjectDoneBtn.addEventListener('click', (event) => {
            if (projectNameInput.value == '') {
                projectNameInput.setAttribute('placeholder', 'Please enter project name');
            } else {
                let newProject = new Project(projectNameInput.value, projectCount);
                addProject(newProject);
                ProjectList.addProjectExisting(newProject);
                projectNameInput.value = '';
                addProjectModal.classList.add('closed');
            }
        });
        todoDateInput.setAttribute('min', format(new Date(), 'yyyy-MM-dd'));
        addTodoBtn.addEventListener('click', (event) => {
            addTodoModal.classList.remove('closed');
        });
        addTodoCancelBtn.addEventListener('click', (event) => {
            todoNameInput.value = '';
            todoDateInput.value = '';
            todoPriorityInput.value = 0;
            addTodoModal.classList.add('closed');
        });
        addTodoDoneBtn.addEventListener('click', (event) => {
            if (todoNameInput.value == '') {
                todoNameInput.setAttribute('placeholder', 'Please enter to-do name');
            } else {
                let newTodo = Todo(todoNameInput.value, currentlySelectedProject);
                if (todoDateInput.value != '') {
                    let year = todoDateInput.value.substring(0, 4);
                    let month = todoDateInput.value.substring(5, 7);
                    let day = todoDateInput.value.substring(8, 10);
                    newTodo.setDueDate(Number(year), Number(month), Number(day));
                }
                newTodo.setPriority(todoPriorityInput.value);
                currentlySelectedProject.addTodo(newTodo);
                addTodoModal.classList.add('closed');
                displayTodoList(currentlySelectedProject);
                todoNameInput.value = '';
                todoDateInput.value = '';
                todoPriorityInput.value = 0;
            }
        });
    }
    const removeSelectedClass = () => {
        let selectedProject = document.querySelector('.project.selected');
        if (selectedProject) {
            selectedProject.classList.remove('selected');
        }
    };
    const addProject = (project) => {
        // let projectList = document.querySelector('.project-list')
        let id = projectCount;
        projectCount++;
        let projectDiv = project.getDom(id);
        if (projectCount - 1 == 0) {
            projectDiv.classList.add('selected');
            setCurrentlySelectedProject(project);
        }
        projectList.appendChild(projectDiv);
    };

    const deleteProject = (id) => {
        let select = "#" + id + '.project';
        let project = document.querySelector(select);
        projectList.removeChild(project);
    };

    // id is an integer
    const displayTodoList = (project) => {
        todoList.replaceChildren();
        let projectLen = project.numTodo();
        for (let i = 0; i < projectLen; i++) {
            let todo = project.getTodoAt(i);
            console.log(todo);
            todoList.appendChild(todo.getDom(i));
        }
    }
    return {
        addProject,
        deleteProject,
        displayTodoList,
        removeSelectedClass,
        setupDefaultEventListeners,
        setCurrentlySelectedProject,
    };
})();

export default DisplayController;