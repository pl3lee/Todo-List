import Project from './project.js';

const DisplayController = (() => {
    let projectCount = 0;
    // let currentlySelectedProject = -1;
    let projectList = document.querySelector('.project-list');
    let addProjectBtn = document.querySelector('#add-project.button');
    let todoList = document.querySelector('.todo-list');
    let addTodoBtn = document.querySelector('#add-todo.button');
    const removeSelectedClass = () => {
        let selectedProject = document.querySelector('.project.selected');
        if (selectedProject) {
            selectedProject.classList.remove('selected');
        }
    };
    const addProject = (project) => {
        // let projectList = document.querySelector('.project-list')
        let id = 'project' + projectCount;
        projectCount++;
        let projectDiv = project.getDom(id);
        projectDiv.addEventListener('click', (event) => {
            removeSelectedClass();
            event.stopPropagation()
            event.currentTarget.classList.add('selected');
        });
        if (projectCount - 1 == 0) projectDiv.classList.add('selected');
        projectList.appendChild(projectDiv);
    };

    const deleteProject = (id) => {
        let select = "#" + id + '.project';
        let project = document.querySelector(select);
        projectList.removeChild(project);
    };

    return {
        addProject,
        deleteProject,
    };
})();

export default DisplayController;