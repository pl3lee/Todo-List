import './style.css';
import DisplayController from './displayController.js'
import Project from './project.js';
import ProjectList from './projectList.js';
import Todo from './todo.js';
let test1 = Project("Sample Project 100", 0);
let test2 = Project("Sample Project 2", 1);
test1.addTodo(Todo('bruh'));
test1.addTodo(Todo('Hello'));
ProjectList.addProjectExisting(test1);
ProjectList.addProjectExisting(test2);
console.log(ProjectList.numProjects());
DisplayController.addProject(test1);
DisplayController.addProject(test2);
console.log(ProjectList.contents);
DisplayController.displayTodoList(0);
