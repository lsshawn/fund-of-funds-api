const mongoose = require("mongoose");
mongoose.set("setDefaultsOnInsert", false);

let isConnected;

exports.connectToDatabase = async () => {
  // use existing database
  if (isConnected) {
    return;
  }

  try {
    let db = await mongoose.connect(process.env.DB + "/" + process.env.DBNAME, {
      useNewUrlParser: true,
      user: process.env.MONGO_USER,
      pass: process.env.MONGO_PASSWORD,
      dbName: process.env.DBNAME,
      useFindAndModify: false,
    });

    isConnected = db.connections[0].readyState;
    return db;
  } catch (err) {
    console.log(err);
  }
};

