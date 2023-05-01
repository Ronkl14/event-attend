const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: String,
  phone: String,
});

module.exports = mongoose.model("User", UserSchema);
