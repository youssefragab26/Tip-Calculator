const taskTitle = document.getElementById("task-title");
const submitButton = document.getElementById("submit-button");
const TaskOne = document.getElementById("TaskOne");
function newTask() {
    TaskOne.innerHTML = taskTitle.value;

}
submitButton.addEventListener("click", newTask);