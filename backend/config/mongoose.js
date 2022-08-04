const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to database!");
  })
  .catch((err) => {
    console.log("Error in connecting db:", err);
  });

const db = mongoose.connection;

//handling error:
db.on("error", console.error.bind(console, "Error connecting to mongodb!"));

//once the connection is open for me to interact with the database(on line 9),
db.once("open", function () {
  console.log("Connected successfully to mongodb!");
});

module.exports = db;
