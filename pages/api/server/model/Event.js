const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema({
  name: String,
  location: String,
  description: String,
  date: Date,
});

module.exports = mongoose.model("Event", EventSchema);
