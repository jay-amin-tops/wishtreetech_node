const fs = require("fs");
const yargs = require("yargs");

const todos =require ('./todos.js')
const argv = yargs.argv;
var command = argv._[0];
console.log(command);
if (command == "addTodo") {
    // console.log(argv.title);
    todos.addTodo(argv.title);
}else if (command == "readTodo") {
    var todo = todos.readTodo(argv.title);
    if (todo) {
        // console.log(todo);
        todos.logTodo(todo)
    } else {
        console.log("no data");
    }
}else if(command == 'deleteTodo'){
    var todo = todos.deleteTodo(argv.title);
    console.log(todo);
}else if (command == 'listTodos'){
    var allTodos = todos.listTodos()
    allTodos.forEach((todo) => todos.logTodo(todo));
}
