var http = require('http');
var fs = require('fs');

http.createServer(function (req,res) {
    fs.readFile("filename.html",function (err,data) {
        // console.log(res);
        // console.log(data);
        res.writeHead(200,{'Content-type':'text/html','cors':'no-cors'});
        res.write(data)
        return res.end()
    })
}).listen(8080);