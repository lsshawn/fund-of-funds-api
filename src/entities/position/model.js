const mongoose = require("mongoose");
const Asset = require('../asset/model')
const Customer = require('../customer/model')

const PositionSchema = new mongoose.Schema({
  quantity: Number,
  createdDate: {
    type: Date,
    default: Date.now()
  },
  updatedDate: {
    type: Date,
    default: Date.now()
  },
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
      ticker: 1,
      type: 1,
      currency: 1,
      lastPrice: 1
    },
  });

  next();


}

PositionSchema.pre("find", populate);
PositionSchema.pre("findOne", populate);

PositionSchema.virtual('marketValue').get(function() {
  return this.asset.lastPrice * this.quantity
});

module.exports =
  mongoose.models.Position || mongoose.model("Position", PositionSchema);

