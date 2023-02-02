
const fs = require("fs");
const users = require('./users.json')

let userData = {
    name:"testing",
    age:"35",
    language:["Hack","ruby","Python"]
}

users.push(userData)

fs.writeFile("users.json",JSON.stringify(users), err=> {
      
    // Check for errors
    if (err) throw err;
      
    console.log(err); // Print users 
});