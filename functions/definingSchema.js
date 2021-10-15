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

module.exports.sellerDetails = mongoose.model("sellerdetails", sellerdetailsSchema);