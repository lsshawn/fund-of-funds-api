const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: {
    type: String,
    required: true
  },
  createdDate: {
    type: Date,
    default: Date.now,
  },
  role: {
    type: String,
    enum: ['admin', 'readonly'],
  }
});

module.exports =
  mongoose.models.User || mongoose.model("User", UserSchema);
