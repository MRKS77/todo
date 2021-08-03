const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const config = require("config");
const todos = require("./routes/todos");

const app = express();
const PORT = config.get("port") || 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use("/api/todos", todos);

async function start() {
  try {
    // database connection
    await mongoose.connect(config.get("mongoURI"), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: true,
      useCreateIndex: true,
    });
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
