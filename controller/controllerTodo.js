const Todo = require("../models/Todo");

const controllerTodo = {};

//list of todo controller
controllerTodo.listTodo = async (req, res) => {
  const todos = await Todo.find();

  if (req.query.done === "true") {
    const doneTodo = todos.filter((todo) => todo.done === true);
    res.status(200).json(doneTodo);
  } else if (req.query.done === "false") {
    const doneTodo = todos.filter((todo) => todo.done === false);
    res.status(200).json(doneTodo);
  } else if (req.query.update === "true") {
    const updateTodo = todos.filter(
      (todo) => todo.createdAt.toString() !== todo.updatedAt.toString()
    );
    res.status(200).json(updateTodo);
  } else if (req.query.update === "false") {
    const updateTodo = todos.filter(
      (todo) => todo.createdAt.toString() === todo.updatedAt.toString()
    );
    res.status(200).json(updateTodo);
  } else {
    if (todos.length === 0) {
      return res.status(404).json({
        message: "No todo found",
      });
    }
    return res.status(200).json(todos);
  }
};

//single todo controller
controllerTodo.singleTodo = async (req, res) => {
  try {
    const { _id } = req.params;
    const todo = await Todo.findById(_id);

    console.log(todo);

    if (todo) {
      return res.status(200).json(todo);
    } else {
      return res.status(404).json({ message: "Not Found" });
    }
  } catch (error) {
    res.status(404).json({ message: "There was a problem in your request" });
  }
};

// create todo controller
controllerTodo.createTodo = async (req, res) => {
  try {
    const todo = new Todo({
      task: req.body.task,
      done: req.body.done,
    });
    const newTodo = await todo.save();
    res.status(200).json(newTodo);
  } catch (error) {
    res.status(404).json({ message: "There was a problem in your request" });
  }
};

// delete todo controller
controllerTodo.deleteTodo = async (req, res) => {
  try {
    const { _id } = req.params;
    const deletedTodo = await Todo.findByIdAndDelete(_id);
    if (deletedTodo) {
      return res
        .status(200)
        .json({ message: "todo Deleted", todo: deletedTodo });
    } else {
      return res.status(404).json({ message: "No todo found" });
    }
  } catch (error) {
    res.status(404).json({ message: "There was a problem in your request" });
  }
};

//update todo controller
controllerTodo.updateTodo = async (req, res) => {
  try {
    const { _id } = req.params;
    const todo = await Todo.findById(_id);

    todo.task = req.body.task;
    todo.done = req.body.done;

    const updateTodo = await todo.save();

    res.status(200).json(updateTodo);
  } catch (error) {
    res.status(404).json({ message: "There was a problem in your request" });
  }
};

module.exports = controllerTodo;
