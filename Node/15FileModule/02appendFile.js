var fs = require('fs');
fs.appendFile("mynewfile2.txt","Data",function (err) {
    if(err) throw err;
    console.log("success");
    // if (err) {
    //     console.log("Error",err);
    // }else{
    //     console.log("called");
    // }
})