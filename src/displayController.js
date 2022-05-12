import Project from './project.js';
import ProjectList from './projectList.js';
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
        let id = projectCount;
        projectCount++;
        let projectDiv = project.getDom(id);
        if (projectCount - 1 == 0) projectDiv.classList.add('selected');
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
        // let targetProject = ProjectList.findProjectById(id);
        // let targetProject;
        // ProjectList.contents.forEach((element) => {
        //     // console.log(project);
        //     if (element.getId() == id) {
        //         console.log("returned project:");
        //         console.log(element);
        //         targetProject = element;
        //     }
        // });
        // console.log(targetProject);
        let projectLen = project.numTodo();
        // console.log(targetProjectLen);
        for (let i = 0; i < projectLen; i++) {
            let todo = project.getTodoAt(i);
            // console.log(todo);
            todoList.appendChild(todo.getDom(i));
        }
    }
    return {
        addProject,
        deleteProject,
        displayTodoList,
        removeSelectedClass,
    };
})();

export default DisplayController;