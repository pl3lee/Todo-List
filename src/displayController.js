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

    // id is an integer
    const displayTodoList = (id) => {
        todoList.replaceChildren();
        let targetProject = ProjectList.findProjectById(id);
        console.log(targetProject);
        let targetProjectLen = targetProject.numTodo();
        for (let i = 0; i < targetProjectLen; i++) {
            let todo = targetProject.getTodoAt(i);
            todoList.appendChild(todo.getDom("todo" + i));
        }
    }
    return {
        addProject,
        deleteProject,
        displayTodoList,
    };
})();

export default DisplayController;