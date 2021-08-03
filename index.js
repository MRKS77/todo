const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const config = require("config");
const todos = require("./routes/todos");
let Todo = require("./models/Todo");

const app = express();
const todoRoutes = express.Router();
const PORT = config.get("port") || 5000;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("api/todos", todos);

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
