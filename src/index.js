import { domManipulator } from "./modules/domManipulator.js";
import { Task, Project } from "./modules/taskManager.js";
import './input.css';

const rootProject = new Project("root");
let currentProject = rootProject;

document.addEventListener("click", (event) => {
    const actionElement = event.target.closest("[data-action]");
    if (actionElement) {
        const action = actionElement.getAttribute("data-action");
        switch (action) {
            case "createTask":
                const newTask = new Task()
                domManipulator.addTask(newTask) // Add task to the DOM
                currentProject.addTask(newTask) // Add task to the current project
                domManipulator.bindDoubleClickEvent(newTask); //Bind double click event to edit task title on double click
                break;
            case "change-task-status":
                {
                    const taskElement = event.target.closest(".task");
                    const taskId = taskElement.id;
                    const task = currentProject.getTaskById(taskId);

                    task.completed = !task.completed;
                    const taskTitle = taskElement.querySelector(".task-title");

                    taskTitle.style.textDecoration = task.completed ? "line-through" : "none";

                }
                break;
            case "delete-task":
                { 
                    const taskElement = event.target.closest(".task");
                    const taskId = taskElement.id;
                    const task = currentProject.getTaskById(taskId);

                    currentProject.deleteTask(taskId);
                    domManipulator.removeTask(taskId);
                    console.log("deleted")
                }
                break;
                
        }
    }
})