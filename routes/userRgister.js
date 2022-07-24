const Router = require("express").Router();
const controllerRegistations = require("../controller/controllerRegistations");

Router.get("/:_id", (req, res) => {});

Router.post("/", controllerRegistations.createUser);

Router.put("/:_id", (req, res) => {});

Router.delete("/:_id", (req, res) => {});

module.exports = Router;
