const mongoose = require("mongoose");
const config = require("config");
let db = config.get("mongoURI");

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    console.log("MongoDb connected...");
  } catch (err) {
    console.log(err.message);
    process.exit();
  }
};

module.exports = connectDB;

// 4kTakBCImo65dpay
