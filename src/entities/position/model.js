const mongoose = require("mongoose");
const Asset = require('../asset/model')
const Customer = require('../customer/model')

const PositionSchema = new mongoose.Schema({
  currency: String,
  quantity: Number,
  lastPrice: Number,
  createdDate: Date,
  lastUpdatedDate: Date,
  asset: {
    type: mongoose.Schema.ObjectId,
    ref: "Asset",
  },
  customer: {
    type: mongoose.Schema.ObjectId,
    ref: "Customer",
  },
});

function populate(next) {
  this.populate({
    path: "customer",
    select: {
      _id: 1,
      firstName: 1,
    },
  });

  this.populate({
    path: "asset",
    select: {
      _id: 1,
      asset: 1,
    },
  });

  next();


}

PositionSchema.pre("find", populate);
PositionSchema.pre("findOne", populate);

PositionSchema.virtual('value').get(function() {
  return this.price * this.quantity
});

module.exports =
  mongoose.models.Position || mongoose.model("Position", PositionSchema);

