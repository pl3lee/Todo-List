import Project from './project.js';

const ProjectList = (() => {
    let contents = [];
    // id is an integer
    const addProjectNew = (title, id) => {
        let newProject = Project(title, id);
        contents.push(newProject);
        // console.log(newProject);
    };
    const removeProject = (id) => {
        contents.forEach((project, index) => {
            if (project.getId() == id) {
                contents.splice(index, 1);
            }
        });
    };
    const findProjectById = (id) => {
        contents.forEach((element) => {
            // console.log(project);
            if (element.getId() == id) {
                console.log("returned project:");
                console.log(element);
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