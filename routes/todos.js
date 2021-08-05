const { Router } = require("express");
const router = Router();
const Todo = require("../models/Todo");

router.get("/", async (req, res) => {
  try {
    const todos = await Todo.find({});
    res.status(200).json({todos});
  } catch (error) {
    res.status(500).json({error});
  }
});

router.post("/", async (req, res) => {
  try {
    const todos = await new Todo(req.body).save();
    res.status(200).json({todos});
  } catch (error) {
    res.status(500).json({error});
  }
});

router.put("/:id", async (req, res) => {
  try {
    const todos = await Todo.findOneAndUpdate({ _id: req.params.id }, req.body);
    res.status(200).json({todos});
  } catch (error) {
    res.status(500).json({error});
  }
});

router.delete("/:id", async (req, res) => {
    try {
      const todos = await Todo.findByIdAndDelete({ _id: req.params.id });
      res.status(200).json({todos});
    } catch (error) {
      res.status(500).json({error});
    }
  });

module.exports = router;
