const express = require("express");
const serverless = require("serverless-http");
const path = require("path");
var fileupload = require("express-fileupload");
const { addDataToDB } = require("./addDataToDB");
const app = express();
const router = express.Router();

app.use(express.static("./dist"));

app.use(fileupload());

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../dist/registration/registration.html"));
});
router.get("/success", (req, res) => {
  res.sendFile(path.join(__dirname, "../dist/registration/registration.html"));
});
router.get("/failed", (req, res) => {
  res.sendFile(path.join(__dirname, "../dist/registration/registration.html"));
});
router.post("/submit", (req, res) => {
  addDataToDB(req.files);
  if (!req.body.fullname) {
    res.send({ statusCode: 400, msg: "type fullname" });
  }
  if (!(req.body.pancard <= 10)) {
    res.send({
      statusCode: 400,
      msg: "type pan number equal to 10 characters",
    });
  }
  if (!req.body.email) {
    res.send({ statusCode: 400, msg: "type email" });
  }
  if (!(req.body.phonenumber <= 10)) {
    res.send({
      statusCode: 400,
      msg: "type phone number equal to 10 characters",
    });
  }
  if (!req.body.youraddress) {
    res.send({ statusCode: 400, msg: "type email" });
  }
  if (!(req.body.yourpincode <= 6)) {
    res.send({ statusCode: 400, msg: "type pin code equal to 6 characters" });
  }
  console.log(req.files);
  res.send(JSON.stringify(req.body));
});
app.use("/register", router);

module.exports = app;
module.exports.handler = serverless(app);
