import { format } from 'date-fns';
import Project from './project.js';
import ProjectList from './projectList.js';
import Todo from './todo.js';

const DisplayController = (() => {
    let projectCount = 0;
    let currentlySelectedProject = 0;
    const projectList = document.querySelector('.project-list');
    const addProjectBtn = document.querySelector('#add-project.button');
    let todoList = document.querySelector('.todo-list');
    const addProjectDoneBtn = document.querySelector('#add-project.modal-footer > #done.button');
    const addProjectCancelBtn = document.querySelector('#add-project.modal-footer > #cancel.button');
    const addProjectModal = document.querySelector('#add-project.modal');
    const projectNameInput = document.querySelector('input#project-name');
    const addTodoBtn = document.querySelector('#add-todo.button');
    const addTodoDoneBtn = document.querySelector('#add-todo.modal-footer > #done.button');
    const addTodoCancelBtn = document.querySelector('#add-todo.modal-footer > #cancel.button');
    const addTodoModal = document.querySelector('#add-todo.modal');
    const todoNameInput = document.querySelector('input#todo-name');
    const todoDateInput = document.querySelector('input#todo-date');
    const todoPriorityInput = document.querySelector('select#todo-priority');
    const todoDescriptionInput = document.querySelector('textarea#todo-description');

    const infoModal = document.querySelector('#todo-info.modal');
    const infoName = document.querySelector('#name.actual-info');
    const infoDate = document.querySelector('#date.actual-info');
    const infoPriority = document.querySelector('#priority.actual-info');
    const infoDescription = document.querySelector('#description.actual-info');
    const infoDoneBtn = document.querySelector('#todo-info.modal #done.button');
    const setCurrentlySelectedProject = (project) => {
        currentlySelectedProject = project;
    };
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
                const newProject = new Project(projectNameInput.value, projectCount);
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
            todoDescriptionInput.value = '';
            addTodoModal.classList.add('closed');
        });
        addTodoDoneBtn.addEventListener('click', (event) => {
            if (todoNameInput.value == '') {
                todoNameInput.setAttribute('placeholder', 'Please enter to-do name');
            } else {
                const newTodo = new Todo(todoNameInput.value, currentlySelectedProject);
                if (todoDateInput.value != '') {
                    const year = todoDateInput.value.substring(0, 4);
                    const month = todoDateInput.value.substring(5, 7);
                    const day = todoDateInput.value.substring(8, 10);
                    newTodo.setDueDate(Number(year), Number(month), Number(day));
                }
                newTodo.setPriority(todoPriorityInput.value);
                newTodo.setDescription(todoDescriptionInput.value);
                currentlySelectedProject.addTodo(newTodo);
                addTodoModal.classList.add('closed');
                displayTodoList(currentlySelectedProject);
                todoNameInput.value = '';
                todoDateInput.value = '';
                todoDescriptionInput.value = '';
                todoPriorityInput.value = 0;
            }
        });
        infoDoneBtn.addEventListener('click', (event) => {
            infoModal.classList.add('closed');
        });
    };
    const removeSelectedClass = () => {
        const selectedProject = document.querySelector('.project.selected');
        if (selectedProject) {
            selectedProject.classList.remove('selected');
        }
    };
    const addProject = (project) => {
        const id = projectCount;
        projectCount++;
        const projectDiv = project.getDom(id);
        if (projectCount - 1 == 0) {
            projectDiv.classList.add('selected');
            setCurrentlySelectedProject(project);
        }
        projectList.appendChild(projectDiv);
    };

    const deleteProject = (id) => {
        const select = `#${id}.project`;
        const project = document.querySelector(select);
        projectList.removeChild(project);
    };

    const displayTodoList = (project) => {
        todoList.replaceChildren();
        const projectLen = project.numTodo();
        for (let i = 0; i < projectLen; i++) {
            const todo = project.getTodoAt(i);
            console.log(todo);
            todoList.appendChild(todo.getDom(i));
        }
    };
    const emptyTodoList = () => {
        const main = document.querySelector('.main-content');
        todoList = document.querySelector('.todo-list');
        const newTodoList = document.createElement('div');
        newTodoList.classList.add('todo-list');
        main.replaceChild(newTodoList, todoList);
        todoList = newTodoList;
    };
    const getCurrentlySelectedProject = () => currentlySelectedProject;
    return {
        addProject,
        deleteProject,
        displayTodoList,
        removeSelectedClass,
        setupDefaultEventListeners,
        setCurrentlySelectedProject,
        getCurrentlySelectedProject,
        emptyTodoList,
    };
})();

export default DisplayController;
