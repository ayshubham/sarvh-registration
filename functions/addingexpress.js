const express= require('express');
const serverless = require('serverless-http');
const path = require('path');

const app= express();
const router = express.Router();

app.use(express.static("./dist"));
app.use(express.json());

router.get('/', (req,res) =>{
  res.sendFile(path.join(__dirname, '../dist/registration/registration.html'));
});
router.get("/success", (req, res) => {
  res.sendFile(path.join(__dirname, "../dist/registration/registration.html"));
});
router.get("/failed", (req, res) => {
  res.sendFile(path.join(__dirname, "../dist/registration/registration.html"));
});
app.use('/register',router)

module.exports = app;
module.exports.handler = serverless(app);
