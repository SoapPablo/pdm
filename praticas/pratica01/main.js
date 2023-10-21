import { getTasks, addTask, updateTask, removeTask } from './tasks.js';

const tasks = getTasks();

tasks.forEach(task => {
    const { id, name, completed } = task;
    console.log(`ID: ${id}, Name: ${name}, Completed: ${completed}`);
});

addTask("Nova Tarefa");
removeTask(1);
updateTask(2, { completed: true });

const updatedTasks = getTasks();

updatedTasks.forEach(task => {
    const { id, name, completed } = task;
    console.log(`ID: ${id}, Name: ${name}, Completed: ${completed}`);
});
