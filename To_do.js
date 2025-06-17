const todoInput = document.getElementById("todo-input")
const addTaskButton = document.getElementById("add-task-btn")
const todoList = document.getElementById("todo-list")

let tasks = []

addTaskButton.addEventListener('click', () => {
    const tasktest = todoInput.value.trim()
    if (tasktest === "") return

    const newTask = {
      id: Date.now(),
      text: tasktest,
      completed: false
     }
     tasks.push(newTask)
     todoInput.value  = ""

      console.log(tasks);
})