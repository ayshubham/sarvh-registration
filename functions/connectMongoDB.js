const mongoose = require("mongoose");
const MONGO_URI = "mongodb+srv://sarvh:sness@cluster0.iepnw.mongodb.net/sellersdata?authSource=admin&replicaSet=atlas-6lfi6z-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true";
exports.connectDB = async function(event,context) {
  try{
    await mongoose.connect(MONGO_URI);
    console.log('mongo db connected');
    return {
      statusCode: 200,
      body:"MongoDB connected"
    }
  }
  catch(error){
    return {
      statusCode: 500,
      body:JSON.stringify({msg:"MongoDB not Connected",error:JSON.stringify(error)}),
    }
  }
}