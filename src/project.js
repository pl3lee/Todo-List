import Todo from './todo.js';

const Project = (title) => {
    let todoList = [];
    const getTitle = () => title;
    const setTitle = (newTitle) => title = newTitle;
    const addTodo = (todo) => todoList.push(todo);
    const getTodoAt = (index) => todoList.at(index);
    const getDom = () => {
        //todo
    }
    return {
        getTitle,
        setTitle,
        addTodo,
        getTodoAt,
        getDom,
    };
};

export default Project;