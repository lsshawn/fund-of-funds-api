const mongoose = require("mongoose");

const CustomerSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  createdDate: {
    type: Date,
    default: Date.now,
  },
  updatedDate: Date,
  email: {
    type: String,
    unique: true
  },
  deposit: Number
});

module.exports =
  mongoose.models.Customer || mongoose.model("Customer", CustomerSchema);
