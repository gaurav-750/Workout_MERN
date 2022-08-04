const express = require("express");

require("dotenv").config();
const app = express();

//middleware:
app.use(express.json());
app.use("/api", require("./routes/index"));

//connect to db:
//Database:
const db = require("./config/mongoose");

app.listen(process.env.PORT, (err) => {
  if (err) {
    console.log("ERR", err);
  }
  console.log("Server is running on port:", process.env.PORT);
});
