const mongoose = require("mongoose");
const dotenv = require("dotenv");

//LOCAL_DB_CONNECT  -localhost database
//DB_CONNECT  -online database
dotenv.config();
const connection_url = process.env.LOCAL_DB_CONNECT;

mongoose.connect(connection_url, { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection.once("open", () => {
  console.log("db connnected localhost db");
  // gfs = new mongoose.mongo.GridFSBucket(connect.db, {
  //     bucketName: "uploads"
  // })
});

//export default mongoose;
module.exports = mongoose;
