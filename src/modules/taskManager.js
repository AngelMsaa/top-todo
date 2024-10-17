// Purpose: Contains the class for a todo item.

import dom from "./domManipulator.js";

export class Task {
    constructor() {
        this.title = "New Task";
        this.dueDate = null;
        this.priority = "medium";
        this.status = "To Do";
        this.completed = false;
        this.createdAt = new Date();
        this.id = "id" + Math.random().toString(16).slice(2);
    }
}

export class Project {
    constructor(title) {
        this.title = title;
        this.tasks = [];
    }

    addTask(task) {
        this.tasks.push(task);
    }
}