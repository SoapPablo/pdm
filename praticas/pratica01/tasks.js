const tasks = [
  { id: 1, name: "joao", completed: false },
  { id: 2, name: "maria", completed: true },

];

function getTasks() {
  return tasks;
}

function addTask(taskName) {
  const newTask = {
    id: tasks.length + 1,
    name: taskName,
    completed: false,
  };
  tasks.push(newTask);
}

function removeTask(taskId) {
  const filteredTasks = tasks.filter(task => task.id !== taskId);
  tasks.length = 0;
  tasks.push(...filteredTasks);
}

function updateTask(taskId, updatedTask) {
  const taskToUpdate = tasks.find(task => task.id === taskId);
  if (taskToUpdate) {
    Object.assign(taskToUpdate, updatedTask);
  }
}

export { getTasks, addTask, updateTask, removeTask };
