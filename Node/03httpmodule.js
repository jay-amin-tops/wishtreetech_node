// const { createServer } = require("http");
const http = require("http");


let server = http.createServer(function (req,res) {
    console.log("checking");
    res.write("testing");
    res.end();
})

server.listen(5000)