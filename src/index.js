import './style.css';
import DisplayController from './displayController.js'
import Project from './project.js';
import ProjectList from './projectList.js';
let test1 = Project("Sample Project 100", 0);
let test2 = Project("Sample Project 2", 1);
ProjectList.addProjectExisting(test1);
ProjectList.addProjectExisting(test2);
console.log(ProjectList.numProjects());
DisplayController.addProject(test1);
DisplayController.addProject(test2);

DisplayController.displayTodoList(0);
