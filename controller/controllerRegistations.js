const User = require("../models/User");

const controllerRegistation = {};
//create new account
controllerRegistation.createUser = async (req, res) => {
  const { username, name, email, password } = req.body;

  try {
    if (username && name && email && password) {
      const user = new User({
        name: name,
        username: username,
        email: email,
        password: password,
      });
      const newuser = await user.save();
      res.status(200).json(newuser);
    } else {
      res.status(200).json({ message: "There was a problem in your request" });
    }
  } catch (error) {
    res.status(200).json({ message: "There was a server side problem " });
  }
};

module.exports = controllerRegistation;
