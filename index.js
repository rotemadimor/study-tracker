// Make sure this runs only after the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  const addButton = document.getElementById("addContainerBtn");
  addButton.addEventListener("click", addToDoContainer);
});


let containerCount = 1;

function addToDoContainer() {
  const container = document.createElement("div");
  container.className = "container";

  const inputId = `taskInput${containerCount}`;
  const listId = `taskList${containerCount}`;

  container.innerHTML = `
    <h3>To-Do List ${containerCount}</h3>
    <input type="text" id="${inputId}" placeholder="Enter a task..." />
    <button class="addTaskBtn" data-input="${inputId}" data-list="${listId}">Add Task</button>
    <ul id="${listId}" class="task-list"></ul>
  `;

  document.getElementById("containersArea").appendChild(container);
  containerCount++;

  // Add event listener to the new Add Task button
  const lastButton = container.querySelector(".addTaskBtn");
  lastButton.addEventListener("click", () => {
    addTask(inputId, listId);
  });
}

function addTask(inputId, listId) {
  const input = document.getElementById(inputId);
  const taskText = input.value.trim();
  if (taskText === "") return;

  const li = document.createElement("li");
  li.className = "task";

  // Create a label that wraps the checkbox and the text
  const label = document.createElement("label");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  // Append checkbox and text node directly to label
  label.appendChild(checkbox);
  label.appendChild(document.createTextNode(" " + taskText));

  // Append label to li
  li.appendChild(label);

  // Add li to the list
  document.getElementById(listId).appendChild(li);

  input.value = "";
}




