const fs = require('fs')
fs.readFile("users.json",function (err,data) {
    console.log(data);
    console.log(err);
    if(err) throw err;

    const userData = JSON.parse(data);
    console.log(userData);
})