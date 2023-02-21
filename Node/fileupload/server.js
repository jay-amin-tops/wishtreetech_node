var express = require("express"); //Express Web Server
var busboy = require("connect-busboy"); //middleware for form/file upload
var path = require("path"); //used for file path
const bodyParser = require("body-parser");
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "hbs");
const fileUpload = require('express-fileupload');
app.use(fileUpload());
app.use(express.static(path.join(__dirname, "public")));

/* ========================================================== 
Create a Route (/upload) to handle the Form submission 
(handle POST requests to /upload)
Express v4  Route definition
============================================================ */
app.get("/", (req, res) => {
  res.render("index");
});
app.route("/upload").post(function (req, res, next) {
    console.log(req.files);
    console.log("Object.keys(req.files).length",Object.keys(req.files).length);
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded.');
      }
    
      // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
      let sampleFile = req.files.fileUploaded;
      console.log(sampleFile);
      // Use the mv() method to place the file somewhere on your server
      sampleFile.mv('img/filename.jpg', function(err) {
        if (err)
        console.log(err);
          return res.status(500).send(err);
    
        res.send('File uploaded!');
      });
  });

var server = app.listen(3030, function () {
  console.log("Listening on port %d", server.address().port);
});
