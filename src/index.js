import './style.css';
import DisplayController from './displayController.js'
import Project from './project.js';
import ProjectList from './projectList.js';
import Todo from './todo.js';

DisplayController.setupDefaultEventListeners();
let defaultProject = new Project("Default", 0);
ProjectList.addProjectExisting(defaultProject);
DisplayController.addProject(defaultProject);
// let test1 = new Project("Sample Project 100", 0);
// let test2 = new Project("Sample Project 2", 1);
// test1.addTodo(Todo('bruh', test1));
// test1.addTodo(Todo('Hello', test1));

// test2.addTodo(Todo('World', test2));
// ProjectList.addProjectExisting(test1);
// ProjectList.addProjectExisting(test2);


// DisplayController.addProject(test1);
// DisplayController.addProject(test2);

// DisplayController.displayTodoList(test1);
