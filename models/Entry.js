const mongoose = require("mongoose");

const EntrySchema = new mongoose.Schema({
  entry: {
    type: String,
    required: true,
  },
  read: {
    type: Boolean,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Entry", EntrySchema);
