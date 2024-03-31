const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  job: {
    type: String,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

const userModel = mongoose.model("usermodel", userSchema);
module.exports = userModel;
