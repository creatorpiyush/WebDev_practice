const route = require("express").Router();

route.get("/", (req, res) => {
  res.send("Hi Index Here");
});

module.exports = route;
