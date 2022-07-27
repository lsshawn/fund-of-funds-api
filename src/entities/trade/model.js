const mongoose = require("mongoose");
const User = require('../user/model')
const Asset = require('../asset/model')
const Customer = require('../customer/model')

const TradeSchema = new mongoose.Schema({
  tradeType: {
    type: String,
    enum: ['withdraw', 'deposit', 'buy', 'sell', 'adjustment', 'fee', 'conversion'],
  },
  currency: String,
  quantity: Number,
  price: Number,
  value: Number,
  asset: {
    type: mongoose.Schema.ObjectId,
    ref: "Asset",
  },
  createdBy: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
  },
  customer: {
    type: mongoose.Schema.ObjectId,
    ref: "Customer",
  },
  createdDate: {
    type: Date,
    default: Date.now()
  },
  tradeDate: Date,
});

function populate(next) {
  this.populate({
    path: "createdBy",
    select: {
      _id: 1,
      firstName: 1,
    },
  });

  this.populate({
    path: "trade",
    select: {
      _id: 1,
      asset: 1,
    },
  });

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

TradeSchema.pre("find", populate);
TradeSchema.pre("findOne", populate);

module.exports =
  mongoose.models.Trade || mongoose.model("Trade", TradeSchema);
