var express = require("express");
var router = express.Router();
const bcrypt = require("bcryptjs");
const dotenv = require("dotenv");
var User = require("../models/user");
var Comment = require("../models/comment");

var router = express.Router();

router.get("/", async (req, res) => {
  res.send("user route");
});

router.post("/:user", async (req, res) => {
  username = req.params.user;
  password = req.body.password;
  fullname = req.body.name;

  const user = new User({
    username: username,
    name: fullname,
    password: password,
  });
  user
    .save()
    .then((result) => {
      console.log(result);
      res.send(JSON.stringify(result));
    })
    .catch((err) => console.log(err));
});

router.put("/:user", async (req, res) => {
  try {
    prev_username = req.params.user;
    new_name = req.body.name;
    new_username = req.body.username;
    new_password = req.body.password;

    encrypted_password = await bcrypt.hash(new_password, 10);

    const query = { username: prev_username };

    r = await User.findOneAndUpdate(
      query,
      { name: new_name, username: new_username, password: encrypted_password },
      {
        new: true,
      }
    );
    res.send(JSON.stringify(r));
  } catch {
    (err) => console.log(err);
  }
});

router.delete("/:user", async (req, res) => {
  try {
    delete_username = req.params.user;
    //r = await Animal.deleteOne({ name: delete_name});

    r = await User.findOneAndDelete({ username: delete_username });
    res.send(JSON.stringify("Deleted, " + r));
  } catch {
    (err) => console.log(err);
  }
});

router.get("/:user", async (req, res) => {
  username = req.params.user;
  r = await User.findOne({ username: username });
  res.send(JSON.stringify(r));
});

router.get("/:user/comments", async (req, res) => {
  username = req.params.user;
  r = await Comment.find({ username: username });
  res.send(JSON.stringify(r));
});

router.get("/:user/movies", async (req, res) => {
  username = req.params.user;
  r = "working on it";
  //r = await Comment.find({ username: username });
  res.send(JSON.stringify(r));
});

module.exports = router;
