const {connectDB} = require("./connectMongoDB");
const mongoose = require("mongoose");
var {sellerDetails} = require("./definingSchema.js");


exports.addDataToDB = async function(req){
  console.log(req);
  // let res = await connectDB();
  // if(res.statusCode == 200){
  //   const user = new sellerDetails({sellername:'testuser',sellersemail:'email@gmail.com'});
  //   await user.save();
  //   mongoose.connection.close();
  //   return {
  //     statusCode:200,
  //     body:'data Stored Successfully'
  //   }
  // }
  // else if(res.statusCode == 500){
  //   return {
  //     statusCode:200,
  //     body:res.body
  //   }
  // }
  // else{
  //   return {
  //     statusCode:200,
  //     body:'I dont know whats happening'
  //   }
  // }
} 