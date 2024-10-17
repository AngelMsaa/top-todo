import { domManipulator } from "./modules/domManipulator.js";
import { Task, Project } from "./modules/taskManager.js";
import './input.css';

const rootProject = new Project("root");
let currentProject = rootProject;

document.addEventListener("click", (event) => {
    if (event.target.getAttribute("data-action")) {
        console.log("ohaio oniichan")
        switch (event.target.getAttribute("data-action")) {
            case "createTask":
                const newTask = new Task()
                domManipulator.addTask(newTask)
                currentProject.addTask(newTask)
                console.log(currentProject.tasks)
                break;
        }
    }
})