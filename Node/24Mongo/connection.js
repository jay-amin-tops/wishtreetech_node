const mongoose = require("mongoose");
const express = require("express");
const app = express();
const PORT = 5000;
app.use(express.json());
mongoose
  .connect("mongodb://127.0.0.1:27017/myshinynewdb")
  .then(() => {
    console.log("Db connected successfully !!!  ");
  })
  .catch((err) => {
    console.log(err);
  });

const EmployeeSchema = new mongoose.Schema({
  Name: String,
  Email: String,
  Dept: String,
  Salary: Number,
});
const EmployeeDetail = new mongoose.model("EmployeeDetail", EmployeeSchema);

app.get("/employees", async (req, resp) => {
  try {
    const result = await EmployeeDetail.find();
    resp.send(result);
  } catch (error) {
    resp.send(error);
  }
});
app.get("/employees", async (req, resp) => {
  try {
    const data = {
      Name: "Navil",
      Email: "navil@gmail.com",
      Dept: "Node",
      Sal: "5000",
    };
    EmployeeDetail.insertOne(data)
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  } catch (error) {
    resp.send(error);
  }
});
app.get("/insertmany", async (req, resp) => {
  try {
    const data = [
      {
        Name: "Akshita",
        Email: "akshita@gmail.com",
        Dept: "Node",
        Sal: "7000",
      },
      { Name: "Parth", Email: "parth@gmail.com", Dept: "java", Sal: "9000" },
      { Name: "Saurav", Email: "saurav@gmail.com", Dept: "php", Sal: "5000" },
    ];

    EmployeeDetail.insertMany(data)
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  } catch (error) {
    resp.send(error);
  }
});
app.get("/findtoarray", async (req, resp) => {
  console.log("called EmployeeDetail");
  try {
    // const result = await EmployeeDetail.find();
    // await EmployeeDetail.find().toArray().then(result => {
    const result = await EmployeeDetail.find()
      .then((result) => {
        console.log(result);
        return result;
      })
      .catch((err) => {
        console.log(err);
      });
    console.log("result", result);
    resp.send(result);
  } catch (error) {
    resp.send(error);
  }
});
app.get("/selectwhare", async (req, resp) => {
  console.log("called selectwhare");
  try {
    // console.log("inside try");
    var allProductsArray = await EmployeeDetail.find();
    // console.log("to array ",allProductsArray);
    // console.log("after to array");
    const result = await EmployeeDetail.find({ Name: "testing"}).then((result) => {
        console.log("New Word: " + result.word);

        console.log(result);
        return result;
      })
      .catch((err) => {
        console.log("inside catch");
        console.log(err);
      });
    console.log("result", result);
    resp.send(result);
  } catch (error) {
    resp.send(error);
  }
});
app.get("/projection", async (req, resp) => {
  console.log("called projection");
  try {
    result = await EmployeeDetail.find({}, { sort: [['createdAt', 'desc'], ['name', 'asc']] }).then(result => {
            console.log("result inside",result)
        }).catch(err => {
            console.log(err);
        });

    console.log("result", result);
    resp.send(result);
  } catch (error) {
    resp.send(error);
  }
});
app.listen(PORT, (req, resp) => {
  console.log(`server running on PORT ${PORT}`);
});
