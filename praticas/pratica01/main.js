import { getTasks, addTask, updateTask, removeTask } from './tasks';

const tasksList = getTasks();

//addTask("Minha Nova Tarefa");

//removeTask(2);

//updateTask(1, { completed: true });

tasksList.forEach(({ id, name, completed }) => {
    console.log(`ID: ${id}, Nome: ${name}, Concluída: ${completed}`);
});