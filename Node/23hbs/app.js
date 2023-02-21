const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");
const request = require("request");
// const url = require("url");
const fs = require("fs");
var json = require("hbs-json");
hbs.registerHelper("json", json);
const bodyParser = require("body-parser");

app.use(express.static("public"));
// app.use(express.static("images"));
app.use(bodyParser.urlencoded({ extended: true }));

const fileUpload = require("express-fileupload");
app.use(fileUpload());
// app.use('/css', express.static(__dirname + 'public/css'))
app.use('/images', express.static(path.join(__dirname,'images')));

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "template"));
const getCityInfo = require("./cityinfo");

var partialsDir = __dirname + "/template/partials";

hbs.registerPartials(partialsDir);

var demo = {
  name: "Rohan",
  age: 26,
  image: "vadim.PNG",
};
var arr = [
  {
    name: "Rohan",
    age: 26,
  },
  {
    name: "user 1",
    age: 25,
  },
];
app.get("", (req, res) => {
  // console.log("callled");
  res.render("indexinsidetemp", { demo: demo });
  // res.render('index', { demo: demo })
  // res.send("Hello")
  // res.sendFile(path.join(__dirname,'/index.html'))
});
app.get("/home", (req, res) => {
  res.render("indexinsidetemp", { demo: demo });
  // res.render('index', { demo: demo })
  // res.send("Hello")
  // res.sendFile(path.join(__dirname,'/index.html'))
});
app.get("/about", (req, res) => {
  res.render("aboutus");
  // res.send(`<a href="/">Home</a> <a href="about">About</a><h2>about</h2>`)
});
app.get("/json", (req, res) => {
  // res.render('aboutus')
  res.send({ demo: demo });
  // res.json("testing")
  // res.send("testing")
});
app.get("/getcitylatlng", async (req, res) => {
  // console.log(req.query.citydata);
  var searchres = {};
  if (req.query.citydata != undefined) {
    const CityData = await getCityInfo(req.query.citydata);
    // console.log(CityData.results[0].geometry.lat);
    searchres = {
      lat: CityData.results[0].geometry.lat,
      lng: CityData.results[0].geometry.lng,
    };
  } else {
    searchres = "No data";
  }
  console.log("SearchRes", searchres);
  res.render("cityinfo", { searchres: searchres });
});
// app.get("/getcityinformation", (req, res) => {
//     res.render('cityinfo', { demo: demo })
// })
app.get("/array", (req, res) => {
  // res.render('aboutus')
  res.send(arr);
});
app.get("/readimg", (req, res) => {
  // var request = url.parse(req.url, true);

  // Extracting the path of file
  var action = "images/vadim.PNG";

  // Path Refinements
  var filePath = path.join(__dirname, action).split("%20").join(" ");
  console.log(filePath);
  // Checking if the path exists
  fs.exists(filePath, function (exists) {
    if (!exists) {
      res.writeHead(404, {
        "Content-Type": "text/plain",
      });
      res.end("404 Not Found");
      return;
    }

    // Extracting file extension
    var ext = path.extname(action);

    // Setting default Content-Type
    var contentType = "text/plain";

    // Checking if the extension of
    // image is '.png'
    if (ext === ".png") {
      contentType = "image/png";
    }

    // Setting the headers
    res.writeHead(200, {
      "Content-Type": contentType,
    });

    // Reading the file
    fs.readFile(filePath, function (err, content) {
      // Serving the image
      res.end(content);
    });
  });
});
app.get("/ahmedabadinfo", async (req, res) => {
  const url = `https://api.opencagedata.com/geocode/v1/json?q=ahmedabad&key=faed4d9eb29d483a866000c901ccb680`;
  let Resdata = null;
  await new Promise((resolve, reject) => {
    request({ url: url, json: true }, (error, response) => {
      Resdata = response.body.results[0];
      resolve(Resdata);
    });
  });
  console.log(Resdata.formatted);
  // res.send({demo:Resdata})
  // res.render('indexinsidetemp',{demo:demo})
  res.render("showcityinfo", { demo: Resdata.formatted });
});
app.get("/login", (req, res) => {
  res.render("login");
});
app.post("/login", (req, res) => {
  console.log("Got body:", req.body);
});
app.get("/uploadfile", (req, res) => {
  res.render("fileupload");
});
app.post("/upload", (req, res) => {
    console.log("req.files",req.files.image);
    console.log("req.body",req.body);
  if (!req.files.image || Object.keys(req.files.image).length === 0) {
    return res.status(400).send("No files were uploaded.");
  }
  let sampleFile = req.files.image;
//   console.log("File name", sampleFile.name);
//   console.log("mimetype", sampleFile.mimetype);
//   sampleFile.mv('images/filename.jpg',function (err) {
  sampleFile.mv(`images/${sampleFile.name}`, function (err) {
    console.log(err);
    if (err) {
        console.log(err);
        return res.status(500).send(err);
    }
    res.send({"filename":sampleFile.name});
  });
  //   console.log(sampleFile);
});
app.get("/*", (req, res) => {
  res.send(
    `<a href="/">Home</a> <a href="about">About</a><h2>404 Page not found</h2>`
  );
});

app.listen("8000", () => {
  console.log("server satrted at localhost:8000");
});
