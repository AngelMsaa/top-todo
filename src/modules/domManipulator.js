const domManipulator = {
    init() {
    },

    addTask(task) {
        const taskElement = document.createElement('div');
        taskElement.className = 'task';
        taskElement.id = task.id;
        taskElement.innerHTML = `
            <div class="checkbox-wrapper-31">
            <input type="checkbox"/>
            <svg viewBox="0 0 35.6 35.6">
                <circle class="background" cx="17.8" cy="17.8" r="17.8"></circle>
                <circle class="stroke" cx="17.8" cy="17.8" r="14.37"></circle>
                <polyline class="check" points="11.78 18.12 15.55 22.23 25.17 12.87"></polyline>
            </svg>
            </div>
            <div class="task-metadata">
            <span class="task-name">
                ${task.title}
            </span>
            <div class="due-by">
                Due by: 
                <span class="due-date">
                ${task.dueDate}
                </span>
                <button class="priority button-4 icon-button">
                <img class="priority" src="./assets/chevron-up.svg">
                </button>
            </div>
            </div>
        `;

        const tasksContainerSelector = document.querySelector(".tasks");
        tasksContainerSelector.appendChild(taskElement);


    }

}

export { domManipulator };