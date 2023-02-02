var fs = require('fs');

fs.writeFile("mynewfile2.txt","content!",function (err) {
    if (err) throw err;
    console.log("called");
})