const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  username: {
    type: String,
    require: true,
    unique: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
  },
  personalDetails: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "PersonalDetails",
  },
  createdOn: {
    required: true,
    type: Date,
    set: Date.now,
    default: Date.now,
  },
  updatedOn: {
    required: true,
    type: Date,
    default: Date.now,
  },
});

// user model
mongoose.model("users", userSchema);
module.exports = mongoose.model("users");
