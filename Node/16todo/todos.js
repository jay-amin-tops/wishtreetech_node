const fs = require("fs");

var addTodo = (title)=>{
    var todos = fetchTodos();
    var todo = {title};

    var duplicateToDos = todos.filter((todo)=>todo.title === title)
    console.log(duplicateToDos);
    if (duplicateToDos.length == 0) {
        todos.push(todo);
        console.log(todos);
        saveTodo(todos);
        // return todo
    }
}
var saveTodo = (todos)=>{
    fs.writeFileSync('todos-data.json',JSON.stringify(todos));
} 
var listTodos = (title)=>{
    return fetchTodos();
} 
var readTodo = (title)=>{
    var allData = fetchTodos();
    var filterTodosData = allData.filter((todo)=>todo.title === title)
    return filterTodosData[0];
} 
var deleteTodo = (title)=>{
    var allData = fetchTodos();
    var filterTodosData = allData.filter((todo)=>todo.title !== title)
    // console.log(filterTodosData);
    saveTodo(filterTodosData);
    return allData.length !== filterTodosData.length
    // return filterTodosData[0];
} 
var logTodo = (todo)=>{
    console.log(`It's title is : ${todo.title}` );
    // let HTMLExample = '<table>
    //     <tr></tr>
    // </table>'
    // let HTMLExample1 = "<input type="text">"
    // let HTMLExample1 = '<input type="text">'
    // let HTMLExample1 = `<input type="text">`
    // let data ="Something"
    // let HTMLExampleSingleQ = '<table>'
    // HTMLExampleSingleQ +='<tr><td>data</td></tr>'
    // HTMLExampleSingleQ +='<tr><td>'+data+'</td></tr>'
    // HTMLExampleSingleQ +='</table>'
    // let HTMLExample = `<table>
    //         <tr><td>${data}</td></tr>
    // </table>'
} 

var fetchTodos = ()=>{
    try {
        var todoString = fs.readFileSync('todos-data.json');
        return JSON.parse(todoString)
        // console.log(todoString);
        // console.log( JSON.parse(todoString));
    } catch (error) {
        console.log(error);
        return []
    }
}
module.exports = {
    addTodo,
    readTodo,
    logTodo,
    deleteTodo,
    listTodos
}