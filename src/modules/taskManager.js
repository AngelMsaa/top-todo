/**
 * Represents a task with various properties such as title, due date, priority, status, and completion status.
 * 
 * @class
 */
export class Task {
    
    /**
     * Creates an instance of Task.
     * 
     * @constructor
     * @param {string} [title="New Task"] - The title of the task.
     * @param {Date|null} [dueDate=null] - The due date of the task.
     * @param {string} [priority="medium"] - The priority level of the task.
     * @param {string} [status="To Do"] - The current status of the task.
     * @param {boolean} [completed=false] - Indicates whether the task is completed.
     */
    constructor(title = "New Task", dueDate = null, priority = "medium", status = "To Do", completed = false) {
        this._title = title;
        this.dueDate = dueDate;
        this._priority = priority;
        this.status = status;
        this.completed = completed;
        this.createdAt = new Date();
        this.id = "id" + Math.random().toString(16).slice(2);
    }

    /**
     * Sets the title of the task.
     * 
     * @param {string} title - The new title of the task.
     */
    set title(title) {
        this._title = title;
    }

    /**
     * Gets the title of the task.
     * 
     * @returns {string} The title of the task.
     */
    get title() {
        return this._title;
    }

    get priority() {    
        return this._priority;
    }

    set priority(priority) {
        this._priority = priority;
    }

    changePriority() {
        const prioritiesList = ["very low", "low", "medium", "high", "very high"];
        const currentPriorityIndex = prioritiesList.indexOf(this.priority);
        const newPriorityIndex = (currentPriorityIndex + 1) % 5;

        this.priority = prioritiesList[newPriorityIndex];
    }
}

/**
 * Represents a project with a title and a list of tasks.
 */
export class Project {
    /**
     * Creates a new Project.
     * @param {string} title - The title of the project.
     */
    constructor(title) {
        this.title = title;
        this.tasks = [];
    }

    /**
     * Adds a task to the project.
     * @param {Object} task - The task to add.
     */
    addTask(task) {
        this.tasks.push(task);
    }

    deleteTask(id) {
        this.tasks = this.tasks.filter(task => task.id !== id);
    }

    /**
     * 
     * @param {*} id - The ID of the task to be found and returned.
     * @returns - a task Object.
     */
    getTaskById(id) {
        for (let i = 0; i < this.tasks.length; i++) {
            if (this.tasks[i].id === id) {
                return this.tasks[i];
            }
        }
    }
}