const express = require("express");
const app = express();
require("dotenv").config();
require("./dbconect");

app.use(express.json());

const todoRouter = require("./routes/todo");

app.use("/todos/", todoRouter);

app.listen(process.env.PORT, () => {
  console.log(
    `server is running on http://localhost:${process.env.PORT}/`
  );
});
