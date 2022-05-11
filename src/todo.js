import 'date-fns';
const Todo = (title) => {
    let description = '';
    let dueDate = new Date;
    let priority = 0; //0 (default), 1, 2, 3
    let completed = false;
    const getTitle = () => title;
    const getDescription = () => description;
    const getDueDate = () => dueDate;
    const getPriority = () => priority;
    const setTitle = (newTitle) => title = newTitle;
    const setDescription = (desc) => description = desc;
    const setDueDate = (year, month, day) => dueDate = new Date(year, month - 1, day);
    const setPriority = (newPriority) => priority = newPriority;
    const getStatus = () => completed;
    const toggleStatus = () => completed = !completed;
    const getDom = () => {
        //todo
    };
    return {
        getTitle,
        getDescription,
        getDueDate,
        getPriority,
        setTitle,
        setDescription,
        setDueDate,
        setPriority,
        getStatus,
        toggleStatus
    };
};
export default Todo;