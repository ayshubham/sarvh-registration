const path = require('path');
const multer = require('multer');

var storage = multer.diskStorage({
  destination: function (req ,file ,cb) {
    cb(null,'upload/')
  },
  filename: function(req, file,cb){
    let ext = path.extname(file.originalname);
    cb(null , Date.now() + ext);
  }
});

exports.upload = multer({
  storage:storage,
  fileFilter: function(req,file,callback){
    if(file.mimetype=="application/pdf"){
      callback(null,true);
    } else {
      console.log('wrong file type only pdf allowed')
      callback(null,false);
    }
  },
  limits:{
    fileSize: 1024*1024*15
  }
})
