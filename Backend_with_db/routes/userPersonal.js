const route = require("express").Router();

const User = require("../db/users");
const personalDetails = require("../db/personalDetails");

route.get("/", (req, res) => {
  res.send("Hi from User personal...");
});

route.post("/:username", async (req, res) => {
  await personalDetails({
    name: req.body.name,
    phone: req.body.phone,
  }).save(async (err, result) => {
    if (err) return res.status(500).send("Value Insert Fail..." + err);
    return await User.findOneAndUpdate(
      { username: req.params.username },
      { personalDetails: result },
      { new: false }
    )
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        res.json(err);
      });
  });
});

module.exports = route;
