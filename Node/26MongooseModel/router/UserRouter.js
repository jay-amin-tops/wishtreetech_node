const express = require("express");
const route = express.Router();
const User = require("../model/Usermodel")
// const bcrypt = require("bcryptjs")
route.get("/", (req, resp) => {
    resp.render("login");
})
route.post("/login", (req, resp) => {
    // resp.render("index");
    resp.send("called");
})
route.get("/registration", (req, resp) => {
    // resp.render("index");
    resp.render("registrationpage");
})
// route.post("/registration", (req, resp) => {
//     // resp.render("index");
//     console.log("req.body",req.body);
//     // resp.render("registrationpage");
// })
// route.get("/register", (req, resp) => {
//     // resp.render("index");
//     console.log("called get req.body",req);
//     // resp.send("called get method");
// })
route.post("/register", async (req, resp) => {
    console.log("req.body",req.body.username);
    const UserData = new User({Name: req.body.username, Password: req.body.password,Email:req.body.email,Mobile:req.body.mobile});
    const result = await UserData.save();
    resp.send({"Respose":result});
    // resp.render("index");
    // resp.send("called post method");
    // resp.send("called",JSON.stringify({"test":"data"}));
    // resp.send({"test":req});
})
route.get("/index", (req, resp) => {
    // resp.render("index");
    resp.send("called");
})

module.exports = route;