function addTask() {
    const input = document.getElementById("taskInput");
    const task = input.value.trim();

    if (task === "") {
        alert("Please enter a task!");
        return;
    }

    const li = document.createElement("li");
    const taskText = document.createElement("span");
    taskText.textContent = task;

    const completeButton = document.createElement("button");
    completeButton.textContent = "✓";
    completeButton.onclick = function () {
        taskText.classList.toggle("completed");
    };

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.onclick = function () {
        li.remove();
    };

    li.appendChild(taskText);
    li.appendChild(completeButton);
    li.appendChild(deleteButton);
    document.getElementById("taskList").appendChild(li);
    input.value = "";
}
