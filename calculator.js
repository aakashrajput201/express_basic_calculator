const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
app.post("/", (req, res) => {
  console.log("req.body", req.body);
  let num1 = parseInt(req.body.num1);
  let num2 = parseInt(req.body.num2);
  let result = num1 + num2;
  res.end("The result is " + result);
});

app.get("/bmiCalculator", (req, res) => {
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmiCalculator", (req, res) => {
  let weight = parseFloat(req.body.weight);
  let height = parseFloat(req.body.height);
  let bmi = weight / (height * height);
  res.send("Your BMI is " + bmi);
});
app.listen(3000, () => {
  console.log("Server Running on port 3000");
});
