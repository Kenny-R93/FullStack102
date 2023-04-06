// Create an IIFE named taskManager that contains the following functionality:
// A private variable named tasks to store task descriptions. It should be initialized as an empty array.
// A addTask function that takes a task description as an argument and adds it to the tasks array.
// A displayTasks function that logs all tasks in the tasks array to the console.
// The IIFE should return an object with the addTask and displayTasks functions.


let taskManager = (function() {         // Create an IIFE named taskManager that contains the following functionality:
    let tasks = [];         //  A private variable named tasks to store task descriptions. It should be initialized as an empty array.

    function addTask(description) {         //  A addTask function that takes a task description as an argument and adds it to the tasks array.
    tasks.push(description)
    return addTask;
    };

    function displayTasks() {           // A displayTasks function that logs all tasks in the tasks array to the console.
        for (index of tasks){
            console.log(index);
        }
    };
    return {
        addTask: addTask,
        displayTasks: displayTasks
    };
})();

taskManager.addTask("Review JS Objects");           // Add three sample tasks using the taskManager's addTask function.
taskManager.addTask("Review JS functions");
taskManager.addTask("Go to the gym");

taskManager.displayTasks();         // Use the taskManager to display the list of tasks.