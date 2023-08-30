import { getTasks, removeTask, addTask, updateTask } from './tasks'

const tarefas = getTasks();

getTasks().forEach(element => {
    const { id, name, completed } = element;

    console.log(id, name, completed)
});

addTask("react-native");
removeTask(2)
updateTask(1, { name: "react-native", completed: true })

getTasks().forEach(element => {
    const { id, name, completed } = element;

    console.log(id, name, completed)
})