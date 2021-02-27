const mongoose = require("mongoose");

const PersonalDetailsSchema = mongoose.Schema({
  name: {
    type: String,
  },
  phone: {
    type: String,
    unique: true,
  },
});

// user model
mongoose.model("PersonalDetails", PersonalDetailsSchema);
module.exports = mongoose.model("PersonalDetails");
