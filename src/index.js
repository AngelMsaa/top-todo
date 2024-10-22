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
            case "taskCheckboxStatusChange":
                const taskElement = event.target.closest(".task");
                const taskId = taskElement.id;
                const task = currentProject.getTaskById(taskId);

                console.log(task.completed)
                task.completed = !task.completed;
                console.log(task.completed)
                break;
        }
    }
})