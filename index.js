const express = require("express");
const app = express();
const session = require("express-session");
const cookieParser = require("cookie-parser");

require("dotenv").config();
require("./dbconect");

app.use(express.json());
app.use(cookieParser());
app.use(
  session({
    secret: process.env.SECRET,
    resave: true,
    saveUninitialized: true,
  })
);

const todoRouter = require("./routes/todo");
const userRgister = require("./routes/userRgister");
const userLogin = require("./routes/userLogin");

app.use("/todos/", todoRouter);
app.use("/auth/register/", userRgister);
app.use("/auth/login/", userLogin);

app.listen(process.env.PORT, () => {
  console.log(`server is running on http://localhost:${process.env.PORT}/`);
});
