const Router = require("express").Router();
const controllerTodo = require("../controller/controllerTodo");

// list -> get
Router.get("/", controllerTodo.listTodo);

//single -> get
Router.get("/:_id", controllerTodo.singleTodo);

//create -> post
Router.post("/", controllerTodo.createTodo);

//update -> put
Router.put("/:_id", (req, res) => {
  res.send("Update todo with id: " + req.params._id);
});

//delete -> delete
Router.delete("/:_id", controllerTodo.deleteTodo);

module.exports = Router;
