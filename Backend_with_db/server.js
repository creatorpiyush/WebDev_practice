const express = require("express");
const app = express();

var cors = require("cors");

app.use(cors());

require("./db");

// require("./db/personalDetails");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const indexRoute = require("./routes/index");
const userRoute = require("./routes/user");
const userpersonalRoute = require("./routes/userPersonal");

app.use("/", indexRoute);
app.use("/user", userRoute);
app.use("/userpersonal", userpersonalRoute);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
