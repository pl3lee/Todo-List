import './style.css';
import DisplayController from './displayController.js';
import Project from './project.js';
import ProjectList from './projectList.js';
import Todo from './todo.js';

const WebpageController = (() => {
    const setUpWebpage = () => {
        DisplayController.setupDefaultEventListeners();
        const defaultProject = new Project('Default', 0);
        addProject(defaultProject);
    };
    const addProject = (project) => {
        ProjectList.addProjectExisting(project);
        DisplayController.addProject(project);
    };

    return {
        setUpWebpage,
        addProject,
    };
})();

WebpageController.setUpWebpage();
