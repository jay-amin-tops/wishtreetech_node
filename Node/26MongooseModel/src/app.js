const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");
const mongoose = require("mongoose");
var json = require("hbs-json");
hbs.registerHelper("json", json);
// const request = require("request");
const bodyParser = require("body-parser");
const bcrypt = require("bcryptjs")
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
// var request = url.parse(req.url, true);

const PORT = 3000;
const viewPath = path.join(__dirname, "../templates/views");
app.set("view engine", "hbs");
app.set("views", viewPath);
var partialsDir = __dirname + "/../templates/partials"; 
// var partialsDir = path.join(__dirname,"../templates/partials");

hbs.registerPartials(partialsDir);

const UserRouter = require("../router/UserRouter");
app.use("/", UserRouter)


mongoose.connect("mongodb://127.0.0.1:27017/wishtree").then(() => {
    console.log("Db connected successfully !!!")
}).catch(err => {
    console.log(err);
})

app.listen(PORT, (req, resp) => {
    console.log("Server running on port " + PORT);
})