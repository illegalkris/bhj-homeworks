const taskInput = document.getElementById("task__input");
const tasksAdd = document.getElementById("tasks__add");
const tasksList = document.getElementById("tasks__list")

function addTask(task) {
   const newTask = document.createElement("div");
   newTask.classList.add("task");
   const taskTitle = document.createElement("div");
   taskTitle.classList.add("task__title");
   taskTitle.textContent = task;
   const remove = document.createElement("a");
   remove.href = "#";
   remove.classList.add("task__remove");
   remove.textContent = "×";
   tasksList.appendChild(newTask);
   newTask.appendChild(taskTitle);
   newTask.appendChild(remove);

   function removeTask() {
      newTask.remove();
   }

   remove.onclick = removeTask;
}


document.addEventListener("keypress", event => {
   let enteredTask = taskInput.value;
   let newTask = enteredTask.trim();
   if (event.keyCode === 13) {
      event.preventDefault();
      if (newTask != "") {
         addTask(newTask);
         taskInput.value = "";
      }
   }
});

tasksAdd.addEventListener("click", event => {
   let enteredTask = taskInput.value;
   let newTask = enteredTask.trim();
   event.preventDefault();
   if (newTask != "") {
      addTask(newTask);
      taskInput.value = "";
   }
})