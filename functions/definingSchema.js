const mongoose = require("mongoose");

const sellerdetailsSchema = new mongoose.Schema({
  fullname:{
    type:String,
    required:true,
  },
  pancard:{
    type:String,
    required:true,
    maxlength:10,
  },
  email:{
    type:String,
    required:true,
  },
  phonenumber:{
    type:String,
    required:true,
    maxlength:10,
  },
  youraddress:{
    type:String,
    required:true,
  },
  yourpincode:{
    type:String,
    required:true,
    maxlength:6,
  }
},
{
  timestamps:true,
}
);

const sellersdataSchema = new mongoose.Schema({
  filename:{
    type:String
  },
  buffer:{
    type:Buffer
  },
  fileSize:{
    type:Number
  }
})
module.exports.sellerdatamodel = mongoose.model("sellersdata",sellersdataSchema);

module.exports.sellerDetails = mongoose.model("sellerdetails", sellerdetailsSchema);