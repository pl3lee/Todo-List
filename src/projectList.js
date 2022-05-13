import DisplayController from './displayController.js';
import Project from './project.js';

const ProjectList = (() => {
    let contents = [];
    const addProjectNew = (title, id) => {
        let newProject = new Project(title, id);
        contents.push(newProject);
    };
    const removeProject = (project) => {
        let index = contents.indexOf(project);
        if (index != -1) {
            contents.splice(index, 1);
            project.clearTodo();
        }
        if (project == DisplayController.getCurrentlySelectedProject()) {
            DisplayController.displayTodoList(project);
        }
        console.log(contents.length);
    };
    const findProjectById = (id) => {
        contents.forEach((element) => {
            if (element.getId() == id) {
                return element;
            }
        });
    }
    const addProjectExisting = (project) => {
        contents.push(project);
    };
    const numProjects = () => contents.length;
    return {
        contents,
        addProjectNew,
        removeProject,
        findProjectById,
        addProjectExisting,
        numProjects,
    } 
})();




export default ProjectList;