import chevronUpIcon from '../assets/chevron-up.svg';
import deleteIcon from '../assets/delete.svg';

const domManipulator = {
    init() {
    },

    /**
     * Creates a task element.
     *
     * @param {Object} task - The task object.
     * @param {string} task.id - The unique identifier for the task.
     * @param {string} task.title - The title of the task.
     * @param {string} task.dueDate - The due date of the task.
     * @returns {HTMLElement} The created task element.
     */
    createTask(task) {
        const taskElement = document.createElement('div');
        taskElement.className = 'task';
        taskElement.id = task.id;
        const taskTitle = task.title;
        taskElement.innerHTML = `
                <div class="checkbox-wrapper-31" data-action="change-task-status">
                    <input type="checkbox"/>
                    <svg viewBox="0 0 35.6 35.6">
                        <circle class="background" cx="17.8" cy="17.8" r="17.8"></circle>
                        <circle class="stroke" cx="17.8" cy="17.8" r="14.37"></circle>
                        <polyline class="check" points="11.78 18.12 15.55 22.23 25.17 12.87"></polyline>
                    </svg>
                </div>
                <div class="task-metadata">
                    <span class="task-title">
                        ${taskTitle}
                    </span>
                    <div class="due-by">
                        Due by: 
                        <span class="due-date">
                        ${task.dueDate}
                        </span>
                        <button class="priority button-4 icon-button">
                            <img class="priority" src="${chevronUpIcon}">
                        </button>
                    </div>
                </div>
                <button class="priority button-4 icon-button" data-action="delete-task">
                    <img class="deleteIcon" src="${deleteIcon}">
                </button>
        `;
        return taskElement;
    },
    

    /**
     * Adds a task to the DOM.
     *
     * @param {Object} task - The task object to be added.
     */
    addTask(task) {
        const taskElement = this.createTask(task);

        const tasksContainerSelector = document.querySelector(".tasks");
        tasksContainerSelector.appendChild(taskElement);
    },

    removeTask(taskId) {
        const taskElement = document.getElementById(taskId);
        taskElement.remove();
    },

    /**
     * Refreshes a task in the DOM by deleting the previous task and replacing it with the updated task.
     *
     * @param {Object} task - The task object containing updated task information.
     * @param {string} task.id - The unique identifier of the task.
     * @returns {void}
     */
    refreshTask(task) {
        const taskElementNew = this.createTask(task);
        
        const taskElementOld = document.getElementById(task.id);
        const tasksContainerSelector = document.querySelector(".tasks");
        tasksContainerSelector.replaceChild(taskElementNew, taskElementOld);
    },

    /**
     * Allows the user to edit a task title by double-clicking on it.
     * 
     * @param {Object} task - The task object containing the task details.
     * @param {string} task.id - The unique identifier of the task.
     * @param {string} task.title - The current title of the task.
     * 
     * @description
     * This method enables the task title to be editable when the user double-clicks on it.
     * It sets the `contenteditable` attribute to `true` and focuses on the task title element.
     * The new title is saved when the user blurs the input or presses the Enter key.
     * 
     * @example
     * // Assuming you have a task object with an id and title
     * const task = { id: 'task-1', title: 'Sample Task' };
     * doubleClickEditTask(task);
     */
    doubleClickEditTask(task) {
        const taskElement = document.getElementById(task.id);
        const taskTitleElement = taskElement.querySelector(".task-title");

        taskTitleElement.setAttribute("contenteditable", "true");
        taskTitleElement.focus();

        const saveTaskTitle = () => {
            taskTitleElement.setAttribute("contenteditable", "false");
            const newTitle = taskTitleElement.textContent;
            task.title = newTitle;
            this.refreshTask(task);
        };

        taskTitleElement.addEventListener("blur", saveTaskTitle);
        taskTitleElement.addEventListener("keydown", (event) => {
            if (event.key === "Enter") {
            event.preventDefault();
            saveTaskTitle();
            }
        });
        task.title = taskElement.textContent;
    },

    /**
     * Binds a double-click event to a task element that triggers the editing of the task.
     *
     * @param {Object} task - The task object containing task details.
     * @param {string} task.id - The unique identifier of the task.
     */
    bindDoubleClickEvent(task) {
        const taskElement = document.getElementById(task.id);
        const taskTitleElement = taskElement.querySelector(".task-title");

        taskTitleElement.addEventListener("dblclick", () => {
            this.doubleClickEditTask(task);
        });
    }
}

export { domManipulator };