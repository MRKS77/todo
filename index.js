const express = require("express");
const mongoose = require("mongoose");
const config = require("config");

const PORT = config.get("port") || 5000;

const app = express();

//route registration
// app.use('')

async function start() {
  try {
    // database connection
    await mongoose.connect(
        config.get("mongoURI"),
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: true,
        useCreateIndex: true
      }
    );
    // server start
    app.listen(PORT, () => {
      console.log(`Server has been started on port ${PORT}...`);
    });
  } catch (error) {
    // error output to the console
    console.log("Server Error", error.message);
    process.exit(1);
  }
}

start();
