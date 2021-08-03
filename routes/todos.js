const { Router } = require("express");
const router = Router();
const Todo = require("../models/Todo");

router.get("/", async (req, res) => {
  try {
    const todos = await Todo.find({});
    res.json(todos);
  } catch (error) {
    res.send(error);
  }
});

router.post("/", async (req, res) => {
  try {
    const todo = await new Todo(req.body).save();
    res.send(todo);
  } catch (error) {
    res.send(error);
  }
});

router.post("/:id", async (req, res) => {
  try {
    const todo = await Todo.findOneAndUpdate({ _id: req.params.id }, req.body);
    res.send(todo);
  } catch (error) {
    res.send(error);
  }
});

router.post("/:id", async (req, res) => {
    try {
      const todo = await Todo.findByIdAndDelete({ _id: req.params.id });
      res.send(todo);
    } catch (error) {
      res.send(error);
    }
  });

module.exports = router;
