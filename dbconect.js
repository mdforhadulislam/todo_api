const mongoose = require("mongoose");

mongoose
  .connect(process.env.DB_URL)
  .then((res) => {
    console.log("contected to database");
  })
  .catch((err) => {
    console.log("error");
  });
