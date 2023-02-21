const express = require('express')
const app = express();
const path = require('path') 
app.get("",(req,res)=>{
    // res.send("Hello")
    res.sendFile(path.join(__dirname,'/index.html'))
})
app.get("/about",(req,res)=>{
    res.send(`<a href="/">Home</a> <a href="about">About</a><h2>about</h2>`)
})
app.get("/*",(req,res)=>{
    res.send(`<a href="/">Home</a> <a href="about">About</a><h2>404 Page not found</h2>`)
})

app.listen("8000",()=>{
    console.log("server satrted at localhost:8000");
})