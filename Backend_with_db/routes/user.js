const route = require("express").Router();

const User = require("../db/users");

const bcrypt = require("bcryptjs");

var cors = require("cors");

app.use(cors());

route.get("/", (req, res) => {
  res.send(`Hi from user`);
});

route.post("/", async (req, res) => {
  const hashedPassword = bcrypt.hashSync(req.body.password, 15);
  await User({
    username: req.body.username,
    email: req.body.email,
    password: hashedPassword,
  }).save((err, result) => {
    if (err) return res.status(500).send("Value Insert Fail..." + err);
    return res.status(200).send("Value Inserted..." + result);
  });
});

route.post("/findbyemail", async (req, res) => {
  await User.find({ email: req.body.email }, { password: 0 }, (err, result) => {
    if (err) return res.status(500).send("Find Failed...");
    return res.json({
      status: 200,
      message: `Value Found`,
      result: result[0].personalDetails,
    });
  });
});

route.put("/updateemail", async (req, res) => {
  await User.updateOne(
    { email: req.body.prevemail },
    { email: req.body.email, updatedOn: Date.now() },
    (err, result) => {
      if (err) return res.status(500).send(`value not updated` + err);

      return res.json({
        status: true,
        message: `DB Update Success...`,
        result: result,
      });
    }
  );
});

route.put("/updatepassword", async (req, res) => {
  await User.findOneAndUpdate(
    { email: req.body.email },
    { password: bcrypt.hashSync(req.body.password, 15), updatedOn: Date.now() },
    (err, result) => {
      if (err) return res.status(500).send(`value not updated` + err);

      return res.json({
        status: true,
        message: `DB Update Success...`,
        result: result,
      });
    }
  );
});

route.delete("/delete", (req, res) => {
  if (req.body.email) {
    User.deleteOne({ email: req.body.email }, (err, result) => {
      if (err) return res.status(500).send("Deletion Failed..." + err);

      return res.json({
        status: true,
        message: `Data Removed Success...`,
        result: result,
      });
    });
  } else {
    return res.status(500).send(`Email not Provided...`);
  }
});

module.exports = route;
