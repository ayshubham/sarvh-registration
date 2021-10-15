const express= require('express');
const serverless = require('serverless-http');
const cors = require('cors')
const path = require('path');
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const {addDataToDB} = require('./addDataToDB');
const {connectDB , disconnectDB} = require("./connectMongoDB");
const {handlingFile} = require("./handlingFile");
var {sellerdatamodel} = require("./definingSchema.js");


const app= express();
const router = express.Router();

const MONGO_URI = "mongodb+srv://sarvh:sness@cluster0.iepnw.mongodb.net/sellersdata?authSource=admin&replicaSet=atlas-6lfi6z-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true";

app.use(express.static("./dist"));
app.use(cors());
app.use(bodyParser.json({limit: '6mb'}));
app.use(bodyParser.urlencoded({limit: '6mb', extended: true}));
app.use(express.json());

router.get('/', (req,res) =>{
  res.sendFile(path.join(__dirname, '../dist/test.html'));
});
router.get('/success', (req,res) =>{
  res.sendFile(path.join(__dirname, '../dist/registration/registration.html'));
});
router.get('/failed', (req,res) =>{
  res.sendFile(path.join(__dirname, '../dist/registration/registration.html'));
});
router.post('/submit', async (req,res) =>{

  let filesData = await handlingFile(req.body.file);

  console.log(typeof(req.body.file))
  if(filesData.statusCode == 200){
    await mongoose.connect(MONGO_URI);
    sellerdata = new sellerdatamodel({filename:"pleasework", buffer:filesData.files.adhar, fileSize:11815});
    await sellerdata.save();
    mongoose.connection.close();
    res.send(filesData.msg);
  } else {
    res.send({StatusCode:400,msg:filesData.msg});
  }

  // addDataToDB(req.body);
  // if(!req.body.fullname){
  //   res.send({statusCode:400,msg:'type fullname'})
  // }
  // if(!(req.body.pancard <=10)){
  //   res.send({statusCode:400,msg:'type pan number equal to 10 characters'});
  // }
  // if(!req.body.email){
  //   res.send({statusCode:400,msg:'type email'})
  // }
  // if(!(req.body.phonenumber <=10)){
  //   res.send({statusCode:400,msg:'type phone number equal to 10 characters'});
  // }
  // if(!req.body.youraddress){
  //   res.send({statusCode:400,msg:'type email'})
  // }
  // if(!(req.body.yourpincode <=6)){
  //   res.send({statusCode:400,msg:'type pin code equal to 6 characters'});
  // }
  // console.log(req.files)
  // gfs.files.findOne({filename:'420a1269bd5efb0f3c57f1739bd6ca52.pdf'} , (err ,file) => {
  //   if(!file || file.length == 0){
  //     return res.status(404).json({err:'no file exists'});
  //   }
  //   if(file.contentType === 'application/pdf'){
  //     const readstream = gfs.createReadStream(file.filename);
  //     readstream.pipe(res);
  //   }
  // })
});
router.get('/file/:fileSize',async (req,res)=>{
  await mongoose.connect(MONGO_URI);
  await sellerdatamodel.findOne({fileSize:req.params.fileSize},(err,file)=>{
    if(!file || file.length == 0){
      return res.status(404).json({err:err});
    }
    else{
      data = Buffer.from(file.buffer, 'base64');
      res.setHeader('Content-Type', 'application/pdf');
      return res.send(file.buffer);
    }
  });
  mongoose.connection.close();
})
app.use('/register',router)

module.exports=app;
module.exports.handler = serverless(app);