const tasks = [
  { id: 1, name: "Tarefa 1", completed: false },
  { id: 2, name: "Tarefa 2", completed: true },
  { id: 3, name: "Tarefa 3", completed: false }
];

function getTasks() {
  return tasks;
}

function addTask(taskName) {
  let maxId = 0;
  for (const task of tasks) {
    if (task.id > maxId) {
      maxId = task.id;
    }
  }

  const newTask = {
    id: maxId + 1,
    name: taskName,
    completed: false
  };
  tasks.push({ ...newTask });

  function removeTask(taskId) {
    tasks = tasks.filter(task => task.id !== taskId);
  }

  function updateTask(taskId, updatedProperties) {
    const taskToUpdate = tasks.find(task => task.id === taskId);
  
    if (taskToUpdate) {
      Object.assign(taskToUpdate, updatedProperties);
    }
  }
};
