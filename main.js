import inquirer from "inquirer";
import chalk from "chalk";
let todolist = [];
let conditions = true;
console.log(chalk.magenta.bold("\n \t  TODO-LIST APPLICATION\n"));
let main = async () => {
    while (conditions) {
        let option = await inquirer.prompt([
            {
                name: "choice",
                type: "list",
                message: "select an option you want to do:",
                choices: ["Add task", "Delete task", "Update task", "View todo-list", "Exit"],
            }
        ]);
        if (option.choice === "Add task") {
            await addtask();
        }
        else if (option.choice === "Delete task") {
            await deleteTask();
        }
        else if (option.choice === "Update task") {
            await updateTask();
        }
        else if (option.choice === "View todo-list") {
            await viewTask();
        }
        else if (option.choice === "Exit") {
            conditions = false;
        }
    }
};
//function to add new rtask to the list
let addtask = async () => {
    let newtask = await inquirer.prompt([
        {
            name: "task",
            type: "input",
            message: "Enter your new task :"
        }
    ]);
    todolist.push(newtask.task);
    console.log(`\n ${newtask.task}task added successfully in todo-list`);
};
//function to view all todo-list tasks
let viewTask = () => {
    console.log("\n your todo-list: \n");
    todolist.forEach((task, index) => {
        console.log(`${index + 1}: ${task}`);
    });
};
//function to delete a task from the list
let deleteTask = async () => {
    await viewTask();
    let taskIndex = await inquirer.prompt([
        {
            name: "index",
            type: "number",
            message: "Enter the index no of the task you want to delete:",
        }
    ]);
    let deletedTask = todolist.splice(taskIndex.index - 1, 1);
    console.log(`\n ${deletedTask} this task has been delelted successfully from your todo-list\n`);
};
//function to update a task
let updateTask = async () => {
    await viewTask();
    let update_task_index = await inquirer.prompt([
        {
            name: "index",
            type: "number",
            message: "Enter the 'index no' of the task you want to update: "
        },
        {
            name: "new_task",
            type: "input",
            message: "Now enter new name :",
        }
    ]);
    todolist[update_task_index.index - 1] = update_task_index.new_task;
    console.log(`\n Task at index no. ${update_task_index.index - 1} updated successfully [For update list check option: "view Todo-list"]`);
};
main();
