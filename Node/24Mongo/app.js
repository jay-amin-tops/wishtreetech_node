const express = require("express");
const app = express();
app.use(express.json())
const mongoose = require("mongoose");
mongoose.connect("mongodb://0.0.0.0:27017/newdb").then(()=>{
    console.log("db connected");
}).catch(err=>{
    console.log(err);
})

// const EmployeeSchema = new mongoose.Schema({
//     Name:String,
//     Email:String,
//     Dept:String,
//     Salary:Number
// })
const EmployeeSchema = new mongoose.Schema({
    Name:String,
    Email:String,
    Dept:String,
    Salary:Number
},{strict:false})
const EmployeeDetail = new mongoose.model('EmployeeDetail',EmployeeSchema);


app.get("/employees",async(req,res)=>{
    const result = await EmployeeDetail.find();
    res.send(result)
})

app.get("/addemployees", async (req, resp) => {

    try {
        const student = new EmployeeDetail({Name: "testing", Email: "email@mail.com",Dept:"Dev",Salary:100000,Data:"test",Check:"data"});
        const result = await student.save();
        resp.send(result)
    } catch (error) {
        resp.send(error)
    }
})

app.listen(3000,(req,resp)=>{
    console.log("express connected");
})