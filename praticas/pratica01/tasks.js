const tasks = [
  {
    id: 1,
    name: "",
    completed: true
  },
  {
    id: 2,
    name: "",
    completed: false
  }
];

function getTasks() {
  return tasks;
};

// f)

function addTask(taskName) {

  const newTask = {
    id: 04,
    name: taskName,
    completed: false,
  };

  tasks.push(newTask);
}